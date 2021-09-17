import { FormEvent, useState } from 'react';
import axios from 'axios';
import Calendar from '../calendar';

export default function WerkgroepvoorzitterDashboard() {
	const [selectedHours, setSelectedHours] = useState<number[]>([]);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(selectedHours);
		axios.post('/api/requestHoursOff', { hours: selectedHours });
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Calendar updateSelectedHours={setSelectedHours} />
				<button type="submit" disabled={selectedHours.length === 0} className="p-2 bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed rounded-md text-white">Vraag aan</button>
			</form>
		</div>
	);
}
