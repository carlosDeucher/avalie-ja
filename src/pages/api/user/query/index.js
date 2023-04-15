// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "models/user";

export default async function handler(req, res) {
  try {
    const users = await User.findAll({ where: { id: req.body.idList } });
    res.json({
      response: users,
      status: "success",
    });
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
}
