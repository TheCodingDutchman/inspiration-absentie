import { FormEvent, useState } from 'react';
import axios from 'axios';
import pusher from 'pusher';
import Calendar from '../calendar';

export default function WerkgroepvoorzitterDashboard() {
	const [selectedHours, setSelectedHours] = useState<number[] | null>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(selectedHours);
		axios.post('/api/requestHoursOff');
		alert(1);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Calendar updateSelectedHours={setSelectedHours} />
				<button type="submit">Vraag aan</button>
			</form>
		</div>
	);
}
