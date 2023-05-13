import nc from "next-connect";
import { ironSession } from "iron-session/express";
import ironOptions from "./ironOptions";
import Users from "models/user";

export default function handleApiAuth() {
  return nc({
    onError: (err, req, res, next) => {
      // console.log(req)
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })
    .use(ironSession(ironOptions))
    .use(async (req, res, next) => {
      if (!req.session.user) {
        res.json({
          isLoggedIn: false,
        });
      } else {
        const { idUser, password } = req.session.user;

        const userLogged = await Users.findOne({
          where: {
            idUser,
            password,
          },
        });
        if (userLogged) {
          next();
        } else {
          req.session.destroy();
          res
            .status(400)
            .json({ status: "error", type: "INVALID_CREDENCIALS" });
        }
      }
    });
}
