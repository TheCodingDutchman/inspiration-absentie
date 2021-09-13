import NextAuth from 'next-auth';
import OssoProvider from 'next-auth/providers/osso';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		OssoProvider({
			clientId: process.env.OSSO_CLIENT_ID,
			clientSecret: process.env.OSSO_CLIENT_SECRET,
			issuer: process.env.OSSO_ISSUER,
		}),
	],
});
