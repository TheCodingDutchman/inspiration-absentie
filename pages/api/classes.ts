// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const data = require('../../tmp/response.json');

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<object>,
) {
	res.status(200).json(data);
}
