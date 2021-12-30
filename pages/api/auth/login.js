import axios from "axios";
import { parseCookies, setCookie } from "nookies";

const handler = async (req, res, next) => {
  try {
    const { data } = await axios.post(`${process.env.STRAPI_API}/auth/local`, {
      identifier: req.body.identifier,
      password: req.body.password,
    });
    const { jwt: token, user } = data;

    setCookie({ res }, "tkn", token, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      path: "/",
      sameSite: true,
      secure: true,
    });

    res.status(200).send(user);
  } catch (err) {
    res.status(401).send(err.error);
    console.error("login error");
  }
};

export default handler;
