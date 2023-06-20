// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import handleApiAuth from "@/lib/handleApiAuth";
import Users from "models/user";

export default handleApiAuth().post(async (req, res) => {
  try {
    const [, usersUpdated] = await Users.update(
      { password: req.body.newPassword },
      {
        where: { id: req.session.user.idUser, password: req.body.oldPassword },
        returning: true,
      }
    );
    if (!usersUpdated[0])
      res.status(200).json({ status: "error", type: "INVALID_PASSWORD" });
    else {
      req.session.user = {
        idUser: req.session.user.idUser,
        password: req.body.newPassword,
      };
      await req.session.save();

      res.status(200).json({
        status: "success",
      });
    }
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
