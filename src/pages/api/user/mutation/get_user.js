import handleApiUnAuth from "@/lib/handleApiUnAuth";
import Users from "models/user";

export default handleApiUnAuth().post(async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user) {
      res.json({ type: "USER_FOUND", status: "success" });
    } else {
      res.status(200).json({ status: "error", type: "USER_NOT_FOUND" });
    }
  } catch (e) {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
});
