// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import handleApiAuth from "@/lib/handleApiAuth";
import Users from "models/user";

export default handleApiAuth().get(async (req, res) => {
  try {
    const { username, id, email, createdAt, updatedAt, region } =
      await Users.findByPk(req.session.user.idUser);
    res.json({
      data: {
        username,
        id,
        email,
        createdAt,
        updatedAt,
        region,
        isLoggedIn: true,
      },
      status: "success",
    });
  } catch {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
