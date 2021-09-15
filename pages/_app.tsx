// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// eslint-disable-next-line max-len
// TODO: Auth checking (next-auth.js.org (ADFS + Osso(ossoapp.com), see docs)) and theme switching (next-themes)
//* Styling is done using tailwindcss.com

function App({ Component, pageProps }: AppProps) {
	// TODO: Return login page when not signed in instead of requested component

	return (
		<div className="background-white text-black p-4">
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</div>
	);
}

export default App;
