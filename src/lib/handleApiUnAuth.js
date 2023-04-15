import nc from "next-connect";
import { ironSession } from "iron-session/express";
import ironOptions from "./ironOptions";

export default function handleApiUnAuth() {
  console.log(ironOptions);
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
    .use((req, res, next) => {
      console.log("e aqui?");
      // seu código aqui
      next();
    });
}
