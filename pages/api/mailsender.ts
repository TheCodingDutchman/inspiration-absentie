// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// 3 mails:
//  1. requesting permission to miss hours (to teacher)
//  2. afferming permission to miss hours (to student)
//  3. denying permission to miss hours (to student
//* Use nodemailer

interface Data {
	name: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.status(200).json({ name: 'John Doe' });
}
