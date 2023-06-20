// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import handleApiAuth from "@/lib/handleApiAuth";
import Users from "models/user";

export default handleApiAuth().post(async (req, res) => {
  try {
    const [, usersUpdated] = await Users.update(req.body, {
      where: { id: req.session.user.idUser },
      returning: true,
    });
    if (!usersUpdated[0])
      res.status(500).json({ status: "error", type: "USER_NOT_FOUND" });
    res.status(200).json({
      status: "success",
    });
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
