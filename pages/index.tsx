import type { NextPage } from 'next';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import Calendar from '../components/calendar';

const Home: NextPage = () => {
	type User = {
		role: 'werkgroepvoorzitter' | 'verzuimcoordinator' | 'werkgroeplid';
		admin?: boolean;
	};

	const [user, setUser] = useState<User>({
		role: 'werkgroepvoorzitter',
	});

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
			{/* TODO: Render dashboard componont based on role */}
			<Calendar updateSelectedHours={() => {}} />
		</div>
	);
};

export default Home;
