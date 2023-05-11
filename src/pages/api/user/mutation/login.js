// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import database from "config/postgresdb";
import Users from "models/user";
import Products from "models/produto";
import Comments from "models/comment";
import handleApiUnAuth from "@/lib/handleApiUnAuth";

export default handleApiUnAuth().post(async (req, res) => {
  try {
    const userLogged = await Users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (userLogged) {
      req.session.user = {
        email: req.body.email,
        password: req.body.password,
      };
      await req.session.save();
      res.json({ type: "USER_LOGGED", status: "success" });
    } else {
      res.status(400).json({ status: "error", type: "INVALID_CREDENCIALS" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
