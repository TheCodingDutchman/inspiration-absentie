// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import * as PusherPushNotifications from '@pusher/push-notifications-web';
import Pusher from 'pusher-js';
import { useEffect } from 'react';

// eslint-disable-next-line max-len
// TODO: Auth checking (next-auth.js.org (ADFS + Osso(ossoapp.com), see docs)) and theme switching (next-themes)
//* Styling is done using tailwindcss.com

function App({ Component, pageProps }: AppProps) {
	// TODO: Return login page when not signed in instead of requested component

	useEffect(() => {
		Pusher.logToConsole = true;

		const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_CHANNELS_KEY as string, {
			cluster: 'eu',
		});

		const channel = pusher.subscribe('my-channel');
		channel.bind('my-event', (data: object) => {
			alert(JSON.stringify(data));
		});

		const beamsClient = new PusherPushNotifications.Client({
			instanceId: process.env.NEXT_PUBLIC_BEAMS_CHANNELS_KEY as string,
		});

		beamsClient.start()
			.then(() => beamsClient.addDeviceInterest('debug-hello'))
			.then(() => console.log('Successfully registered and subscribed!'))
			.catch(console.error);
	});

	return (
		<div className="background-white text-black p-4">
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</div>
	);
}

export default App;
