import axios from "axios";
import handleApiAuth from "@/lib/handleApiAuth";

export default handleApiAuth().post(async (req, res) => {
  res.json({ status: "success" });
});
