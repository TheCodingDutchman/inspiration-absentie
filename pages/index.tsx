import type { NextPage } from 'next';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import Calendar from '../components/calendar';

const Home: NextPage = () => {
	const [user, setUser] = useState<object>({
		role: 'werkgroepvoorzitter',
	});
	const [time, setTime] = useState<string>('');

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		alert(time);
	}

	return (
		<div>
			<Head>
				<title />
			</Head>
			<h1>
				Dashboard
				{' '}
				{user.role}
			</h1>
			<form onSubmit={handleSubmit}>
				<input name="time" type="time" className="border-2 border-red-400" value={time} onChange={(event) => setTime(event.target.value)} />
				<br />
				<input type="submit" value="verstuur" />
			</form>
			<Calendar />
		</div>
	);
};

export default Home;
