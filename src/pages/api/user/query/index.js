// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Users from "models/user";

import handleApiAuth from "@/lib/handleApiAuth";

export default handleApiAuth().post(async (req, res) => {
  try {
    const users = await Users.findAll({ where: { id: req.body.idList } });
    res.json({
      response: users,
      status: "success",
    });
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
