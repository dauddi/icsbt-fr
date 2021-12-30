import axios from "axios";

const handler = async (req, res, next) => {
  try {
    const { data } = await axios.post(
      `${process.env.STRAPI_API}/auth/local/register`,
      req.body
    );

    res.status(200).send(data);
  } catch (err) {
    res.send(err.error);
    console.error("login error", err);
  }
};

export default handler;
