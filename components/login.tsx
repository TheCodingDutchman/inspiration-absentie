import { signIn } from 'next-auth/react';

export default function LoginPage() {
	return (
		<div>
			<button onClick={() => signIn('azure-ad')}>Sign in with Microsoft</button>
		</div>
	);
}
