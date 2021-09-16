import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Class, ClassesApiResponse } from '../types/Magister';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Calendar() {
	const [selectedHours, setSelectedHours] = useState<number[]>([]);

	const [classes, setClasses] = useState<JSX.Element[] | null>(null);
	const { data: apiResponse } = useSWR<ClassesApiResponse>('/api/classes', fetcher);

	useEffect(() => {
		const daysData: Array<Class[]> = [
			[],
			[],
			[],
			[],
			[],
		];

		apiResponse?.Items?.forEach((item) => {
			daysData[new Date(item.Start).getDay() - 1].push(item);
		});

		const html: JSX.Element[] = [];

		for (let i = 1; i <= 9; i++) {
			const row: JSX.Element[] = [];
			daysData?.forEach((day) => {
				const td = day.find((el) => el.LesuurVan === i);
				if (td) {
					row.push((
						<td
							key={td.Id.toString()}
							id={td.Id.toString()}
						>
							{/* eslint-disable-next-line max-len */}
							{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
							<div
								className={`w-36 h-16 border border-gray-400 p-2 my-2 rounded-sm${selectedHours?.includes(td.Id) ? ' bg-gray-200' : ''}`}
								onClick={() => {
									if (selectedHours.includes(td.Id)) {
										const isselected = (el: number) => el === td.Id;
										const index = selectedHours.findIndex(isselected);
										const copy = [...selectedHours];
										copy.splice(index, 1);
										setSelectedHours(copy);
									} else setSelectedHours([...selectedHours, td.Id]);
								}}
							>
								<span className="flex">
									<div className="bg-black text-white w-5 h-5 flex justify-center items-center rounded-md mr-1">
										{td.LesuurVan}
									</div>
									{td.Omschrijving.split('-').splice(0, 2).join(' - ').trim()}
								</span>
								{/* eslint-disable react/jsx-one-expression-per-line */}
								{new Date(td.Start).getHours()}:{new Date(td.Start).getMinutes() < 10 ? `0${new Date(td.Start).getMinutes()}` : new Date(td.Start).getMinutes()}
								-
								{new Date(td.Einde).getHours()}:{new Date(td.Einde).getMinutes() < 10 ? `0${new Date(td.Einde).getMinutes()}` : new Date(td.Einde).getMinutes()}
								{/* eslint-enable */}
							</div>
						</td>
					));
				} else {
					row.push((
						<td>
							<div className="w-36 h-16" />
						</td>
					));
				}
			});

			html.push((
				<tr>
					{row}
				</tr>
			));
		}

		setClasses(html);
	}, [selectedHours, apiResponse]);

	return (
		<div className="max-w-max p-2">
			<table id="rostertable">
				<tr>
					<th><div className="w-40">Maandag</div></th>
					<th><div className="w-40">Dinsdag</div></th>
					<th><div className="w-40">Woensdag</div></th>
					<th><div className="w-40">Donderdag</div></th>
					<th><div className="w-40">Vrijdag</div></th>
				</tr>
				{classes}
			</table>
		</div>
	);
}
