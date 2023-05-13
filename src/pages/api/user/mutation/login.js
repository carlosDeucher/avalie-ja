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
        id: req.body.idUser,
        password: req.body.password,
      },
    });

    if (userLogged) {
      req.session.user = {
        idUser: req.body.idUser,
        password: req.body.password,
      };
      await req.session.save();
      res.json({ type: "USER_LOGGED", status: "success" });
    } else {
      res.status(200).json({ status: "error", type: "INVALID_CREDENCIALS" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
