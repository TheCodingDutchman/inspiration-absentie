import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import WerkgroepvoorzitterDashboard from '../components/dashboards/werkgroepvoorzitter';
import LoginPage from '../components/login';

const Home: NextPage = () => {
	type User = {
		role: 'werkgroepvoorzitter' | 'verzuimcoordinator' | 'werkgroeplid';
		admin?: boolean;
	};

	const { data: session, status } = useSession();

	const [user, setUser] = useState<User>({
		role: 'werkgroepvoorzitter',
	});

	return (
		<div>
			<Head>
				<title />
			</Head>
			<LoginPage />
			<h1>
				Dashboard
				{' '}
				{user.role}
				{' '}
				{session?.user?.email}
			</h1>
			{/* TODO: Render dashboard componont based on role */}
			<WerkgroepvoorzitterDashboard />
		</div>
	);
};

export default Home;
