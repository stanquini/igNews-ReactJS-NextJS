import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Fred' },
    { id: 2, name: 'Camila' },
    { id: 3, name: 'Julia' },
    { id: 4, name: 'Hashi' },
  ]

  return res.json(users)
}
