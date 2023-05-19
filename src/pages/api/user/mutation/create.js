// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Users from "models/user";

export default async function handler(req, res) {
  try {
    //busca email ja existente
    const searchEmail = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (searchEmail) {
      res.status(200).json({ type: "USED_EMAIL", status: "error" });
    } else {
      await Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({
        type: "USER_CREATED",
        status: "success",
      });
    }
  } catch (e){
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
}
