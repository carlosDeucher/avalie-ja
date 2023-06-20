// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Users from "models/user";

export default async function handler(req, res) {
  try {
    const user = await Users.findByPk(req.query.id);
    res.json({
      data: user,
      status:"success"
    });
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
}
