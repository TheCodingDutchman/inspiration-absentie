import type { NextApiRequest, NextApiResponse } from 'next';
import { ClassesApiResponse } from '../../types/Magister';

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
		// TODO: Get teacher(Magister), send notification(pusher) and email(nodemailer)
	});

	res.status(201).end();
}
