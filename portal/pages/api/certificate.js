import axios from "axios";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await axios({
      method: "POST",
      url: `${process.env.CERTIFICATE_URL}/`,
      headers: req.headers,
      data: req.body,
    });
    const responseObject = response.data;
    if (responseObject) {
      res.status(200).json({ errors: null, success: responseObject });
    }
  }
};

export default handler;
