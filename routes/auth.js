const db = require("../db");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../lib/sendMail");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//-------------------------------------------------------------------------------------------
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

module.exports = function (app) {




  app.get("/auth/login/google", isLoggedIn, async (req, res) => {
    const token = jwt.sign({ email: req.user.email }, process.env.SECRET, {
      expiresIn: 86400, // 24h
    });
    console.log(req.user);
    await db.query(
      `select users.*, q_ten  as role from users left join quyen on users.role_id = quyen.q_id WHERE email = ?`,
      req.user.email,
      async (err, data) => {
        if (err) return res.status(500);
        if (data.length !== 0) {
          res.cookie("token", token, { expire: new Date() + 86400 });
          res.cookie("fullname", req.user.displayName);
          res.cookie("email", req.user.email);
          res.cookie("role", data[0].role);
          return res.redirect("http://localhost:3000");
        } else {
          let sql =
            "INSERT INTO `users` (`user_id`, `email`, `fullname`, `verify`) VALUES ?";
          let value = [[req.user.id, req.user.email, req.user.displayName, 1]];
          await db.query(sql, [value], (err, _) => {
            if (err) return res.status(500);
            res.cookie("fullname", req.user.displayName);
            res.cookie("email", req.user.email);
            res.cookie("token", token, { expire: new Date() + 86400 });
            res.cookie("role", "USER");
            return res.redirect("http://localhost:3000");
          });
        }
      }
    );
  });
};