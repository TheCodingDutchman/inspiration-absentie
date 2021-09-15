import { useEffect, useState } from 'react';

export default function Calendar({ }) {
	const [selectedHours, setSelectedHours] = useState<number[]>([]);

	const [classes, setClasses] = useState([]);

	useEffect(() => {
		console.log(selectedHours);
	}, [selectedHours]);

	useEffect(() => {
		const apiResponse = [
			{
				period: 1, id: 1, starttime: '8:25', endtime: '9:15', subject: 'sk',
			},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{
				period: 9, id: 9, starttime: '16:00', endtime: '16:50', subject: 'na',
			},
		];
		const html = apiResponse.map((item) => {
			const row = [];

			if (!item.id) {
				for (let x = 0; x < 5; x++) {
					row.push(
						<td className="w-36 h-16" />,
					);
				}
			} else {
				for (let x = 0; x < 5; x++) {
					row.push(
						// eslint-disable-next-line max-len
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
						<td
							key={item.id}
							id={item.id}
							onClick={() => {
								if (selectedHours.includes(item.id)) {
									const index = selectedHours.findIndex((el) => el === item.id);
									const copy = [...selectedHours].splice(index, 1);
									setSelectedHours(copy);
								} else setSelectedHours([...selectedHours, item.id]);
							}}
						>
							<div className={[`w-36 h-16 border border-gray-400 p-2 rounded-sm${selectedHours?.includes(item.id) ? ' bg-gray-200' : ''}`]}>
								<span className="flex">
									<div className="bg-black text-white w-5 h-5 flex justify-center items-center rounded-md mr-1">
										{item.period}
									</div>
									{item.subject}
								</span>
								{item.starttime}
								-
								{item.endtime}
							</div>
						</td>,
					);
				}
			}

			return (
				<tr>
					{row}
				</tr>
			);
		});

		setClasses(html);
		console.log(classes);
	}, [selectedHours]);

	return (
		<div>
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
