// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Products from "models/produto";

export default async function handler(req, res) {
  try {
    await Products.create({
      name: req.body.name,
      description: req.body.description,
      value: req.body.value,
      file: req.body.file,
    });
    res.json({
      type: "PRODUCT_CREATED",
      status: "success",
    });
  } catch (e) {
    res.status(500).json({ status: "error", type: "UNKNOWN_ERROR" });
  }
}
