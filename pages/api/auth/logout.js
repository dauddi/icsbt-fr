import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const handler = async (req, res, next) => {
  destroyCookie({ req }, "tkn");
  res.status(201).send();
};

export default handler;
