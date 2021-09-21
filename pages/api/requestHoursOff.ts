import type { NextApiRequest, NextApiResponse } from 'next';
import PushNotifications from '@pusher/push-notifications-server';
import { ClassesApiResponse } from '../../types/Magister';

const beamsClient = new PushNotifications({
	instanceId: process.env.NEXT_PUBLIC_BEAMS_CHANNELS_KEY!,
	secretKey: process.env.BEAMS_PRIVATE_KEY!,
});

const apiData: ClassesApiResponse = require('../../tmp/response.json');

type Data = {
	hours: number[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { body }: { body: Data } = req;

	if (!body?.hours) {
		return res.status(400).end();
	}

	body.hours.forEach((hour) => {
		const item = apiData.Items.find((el) => el.Id === hour);
		const teacher = item?.Docenten[0];
		beamsClient.publishToInterests(['hello'], {
			web: {
				notification: {
					title: teacher?.Docentcode,
					body: JSON.stringify(item?.Omschrijving),
				},
			},
		});
		// TODO: Get teacher(Magister+LDAP), send notification(pusher) and email(nodemailer)
		// TODO: link teacher code to beam subscriber to send push notifications
	});

	return res.status(201).end();
}
