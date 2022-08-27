import type { NextApiRequest, NextApiResponse } from 'next';

type Status = {
  status: string;
};

const health = (req: NextApiRequest, res: NextApiResponse<Status>): void => {
  res.status(200).json({ status: 'OK' });
};

export default health;
