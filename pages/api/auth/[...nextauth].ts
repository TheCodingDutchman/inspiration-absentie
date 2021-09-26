import NextAuth from 'next-auth';
// import OssoProvider from 'next-auth/providers/osso';
import AzureADProvider from 'next-auth/providers/azure-ad';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		/* OssoProvider({
			clientId: process.env.OSSO_CLIENT_ID,
			clientSecret: process.env.OSSO_CLIENT_SECRET,
			issuer: process.env.OSSO_ISSUER,
		}), */
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
			tenantId: process.env.AZURE_AD_TENANT_ID,
			authorization: {
				params: {
					scope: 'offline_access User.Read',
				},
			},
		}),
	],
});
