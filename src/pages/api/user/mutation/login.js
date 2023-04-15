// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import database from "config/postgresdb";
import User from "models/user";
import Produto from "models/produto";
import Comment from "models/comment";
import handleApiUnAuth from "@/lib/handleApiUnAuth";

// export default async function (req, res){
//   try {
//     console.log(req.body);
//     const userLogged = await User.findOne({
//       where: {
//         email: req.body.email,
//         password: req.body.password,
//       },
//     });
//     console.log(userLogged);

//     if (userLogged) {
//       req.session.user = {
//         email: req.body.email,
//         password: req.body.password,
//       };
//       await req.session.save();
//       res.json({ type: "USER_LOGGED", status: "success" });
//     } else {
//       res.status(400).json({ status: "error", type: "INVALID_CREDENCIALS" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
//   }
// };

export default handleApiUnAuth().post(async (req, res) => {
  try {
    console.log(req.body);
    const userLogged = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    console.log(userLogged);

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
    console.log(err);
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
