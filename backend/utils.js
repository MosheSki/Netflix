import jwt from "jsonwebtoken";

export const generateToken = ({ _id, username, email, isAdmin, myList }) => {
  return jwt.sign(
    {
      _id: _id,
      username: username,
      email: email,
      isAdmin: isAdmin,
      myList: myList,
    },
    process.env.JWT_PW,
    {
      expiresIn: "7d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const auth = req.headers.token;
  if (auth) {
    const token = req.headers.token.split(" ")[1];

    jwt.verify(token, process.env.JWT_PW, (err, user) => {
      if (err) {
        res.status(401).send({ message: err.message });
      } else {
        req.user = user;

        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
