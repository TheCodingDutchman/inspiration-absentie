import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import WerkgroepvoorzitterDashboard from '../components/dashboards/werkgroepvoorzitter';

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
			<WerkgroepvoorzitterDashboard />
		</div>
	);
};

export default Home;
