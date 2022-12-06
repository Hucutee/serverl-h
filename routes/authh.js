const sql = require('../db');
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../lib/sendMail");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const md5 = require("md5");
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
module.exports = function (app) {
    app.get("/auth/verify/email", async (req, res) => {
        const tokenEmail = req.query.token;
        const decode = jwt.verify(tokenEmail, process.env.SECRET); 
        const token = jwt.sign({ email: decode.email }, process.env.SECRET, {
          expiresIn: 86400, // 24h
        });
        const sqll = `UPDATE nguoi_dung SET xac_thuc = 1 WHERE email = '${decode.email}' and quyen=1`;
        const sql_user = "select * from nguoi_dung WHERE email = ? and quyen=1";
        await sql.query(sqll);
        await sql.query(sql_user, decode.email, (err, user) => {
          if (err) return res.status(500).send(err);
          if (user.length === 0)
            return res.status(404).send("Tài khoản không tồn tại");
          res.cookie("token", token, { expire: new Date() + 86400 });
          res.cookie("fullname", user[0].fullname);
          res.cookie("email", user[0].email);
          res.cookie("role", user[0].role);
          return res.redirect("http://localhost:3000/products/dangnhap");
        });
      });

  app.get(
    "/nguoidung/add/:ten&&:gt&&:ns&&:email&&:pass", async (req, res) =>{
        const { ten,gt,ns,email,pass } = req.params;
        console.log(req.params);
        await sql.query(
          "select * from nguoi_dung WHERE email = ? and quyen=1",
          email,
          async (err, data) => {
            if (err) return res.status(500);
            if (data.length !== 0) {
              return res.status(500).send("Email đã tồn tại");
            } else {
              const tokenEmail = jwt.sign({ email: email }, process.env.SECRET, {
                expiresIn: 18000, // 5m
              }); 
              const sql_insert =
                "\
              INSERT INTO `nguoi_dung` (`email`, `ten_nd`, `gioi_tinh`,`ngay_sinh`,`mat_khau`) VALUES (?,?,?,?,md5('"+pass+"'))";
              await sql.query(sql_insert, [
                email,
                ten,
                gt,ns,pass
              ]);
              const URL = `http://localhost:4000/auth/verify/email?token=${tokenEmail}`;
              const optionsSendMail = {
                to: email, // list of receivers
                subject: "Xác thưc tài khoản", // Subject line
                html:
                  '<p>Vui lòng click vào link đễ xác thực tài khoản <b><a href="' +
                  URL +
                  '"> Tại đây </a></b></p>',
              };
              sendEmail(optionsSendMail);
              return res.status(200).send("Successfully!");
            }
          }
        );
    }
  );
  app.get(
    "/guimailnhanhang/:makh&&:madh", async (req, res) =>{
        const { makh,madh } = req.params;
        console.log(req.params);
        await sql.query(
          "select * from nguoi_dung WHERE ma_nd = ? and quyen=1",
          makh,
          async (err, data) => {
            if (err) return res.status(500);
            if (data.length == 0) {
              return res.status(500).send("Ten khong ton tai");
            } else {
              console.log(data[0].email);
              const tokenEmail = jwt.sign({ email: data[0].email }, process.env.SECRET, {
                expiresIn: 18000, // 5m
              }); 
             
              const URL = `http://localhost:3000`;
              const optionsSendMail = {
                to: data[0].email, // list of receivers
                subject: "Xác thưc tài khoản", // Subject line
                html:
                  '<p>Đơn hàng <b>'+ madh +'</b> của bạn đã được giao hãy kiểm tra lại đơn hàng của mình  <b><a href="' +
                  URL +
                  '"> Tại đây </a></b></p>',
              };
              sendEmail(optionsSendMail);
              return res.status(200).send("Successfully!");
            }
          }
        );
    }
  );
  app.post("/nguoidung/logingg/:email", async (req, res) => {
      return await sql.query(
          'select * from nguoi_dung where email = "'+req.params.email+'" and quyen=1' ,
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err);
              }
             return res.status(200).json(data);
          }
      );
  
  });
  app.post("/nguoidung/login/:email&&:password", async (req, res) => {
    const { email, password } = req.params;
    const sql_user = "select * from nguoi_dung WHERE email = ? and quyen = 1";
    await sql.query(sql_user, email, (err, data) => {
      if (err) return res.status(200).send(err);
      if (data.length === 0) {
        return res.status(404).send("Tài khoản không tồn tại!");
      }
      if (data[0].xac_thuc === 0) {
        const tokenEmail = jwt.sign({ email: email }, process.env.SECRET, {
          expiresIn: 18000, // 5m
        });
        const URL = `http://localhost:4000/auth/verify/email?token=${tokenEmail}`;
        const optionsSendMail = {
          to: email, // list of receivers
          subject: "Xác thực tài khoản", // Subject line
          html:
            '<p>Vui lòng click vào link đễ xác thực tài khoản  <b><a href="' +
            URL +
            '"> Tại đây </a></b></p>',
        };
        sendEmail(optionsSendMail);
        return res
          .status(400)
          .send(
            "Tài khoản chưa xác thực vui lòng check mail để xác thực"
          );
      }

      if (!data[0].mat_khau)
        return res
          .status(401)
          .send("Vui lòng đăng nhập tài khoản google để đổi mật khẩu");
      if (md5(password) != data[0].mat_khau) {
        return res.status(402).send("Mật khẩu không chính xác");
      }
      const token = jwt.sign({ email: email }, process.env.SECRET, {
        expiresIn: 86400, // 24m
      });
      res.cookie("token", token, {
        expire: new Date() + 86400,
      });
      res.cookie("fullname", data[0].fullname);
      res.cookie("email", data[0].email);
      res.cookie("role", data[0].role);
      return res.status(200).send(data);
    });
  });

  app.get("/auth/login/google", isLoggedIn, async (req, res) => {
    const token = jwt.sign({ email: req.user.email }, process.env.SECRET, {
      expiresIn: 86400, // 24h
    });
    console.log(req.user);
    await sql.query(
      `select * from nguoi_dung WHERE email = ? and quyen =1`,
      req.user.email,
      async (err, data) => {
        if (err) return res.status(500);
        if (data.length !== 0) {
          await sql.query('update nguoi_dung set xac_thuc = 1 where email = ? and quyen =1 ',req.user.email)
          res.cookie("token", token, { expire: new Date() + 86400 });
          res.cookie("fullname", req.user.displayName);
          res.cookie("email", req.user.email);
          res.cookie("role", data[0].role);
          return res.redirect("http://localhost:3000/products/dangnhapgg");
        } else {
        
          const sqll =
            "INSERT INTO `nguoi_dung` (`tai_khoan`, `email`, `ten_nd`, `xac_thuc`) VALUES (?,?,?,?)";
          await sql.query(sqll, [req.user.id, req.user.email, req.user.displayName, 1], (err, _) => {
            if (err) return res.status(500);
            res.cookie("fullname", req.user.displayName);
            res.cookie("email", req.user.email);
            res.cookie("token", token, { expire: new Date() + 86400 });
            res.cookie("role", "USER");
            return res.redirect("http://localhost:3000/products/dangnhapgg");
          });
        }
      }
    );
  });

  app.post('/auth/forgot-password/:email', async (req, res) => {
    const {email} = req.params;
    const token = jwt.sign({email: email}, process.env.SECRET, {
        expiresIn: 86400, // 24h
    });
    const URL = `http://localhost:3000/auth/reset-password/${token}`;
    const optionsSendMail = {
        to: email, // list of receivers
        subject: "Quên mật khẩu", // Subject line
        html:
            '<p>Vui lòng nhấn vào link này để cập nhật mật khẩu <b><a href="' +
            URL +
            '"> Tại đây </a></b></p>',
    };
    sendEmail(optionsSendMail);
    return res.status(200).send("ok");
});



app.post('/auth/reset-password/:token&&:newPass', async (req, res) => {
    const {token, newPass} = req.params;
    const decode = jwt.verify(token, process.env.SECRET);
    if (decode.email) {
        await sql.query( "UPDATE nguoi_dung SET mat_khau = ? WHERE email = ? and quyen =1", [md5(newPass), decode.email]);
        return res.status(200).send("Đổi mật khẩu thành công!");
    }
    return res.status(500).send(null);
});
app.post('/authnv/forgot-password/:email', async (req, res) => {
  const {email} = req.params;
  const token = jwt.sign({email: email}, process.env.SECRET, {
      expiresIn: 86400, // 24h
  });
  const URL = `http://localhost:3000/authnv/reset-password/${token}`;
  const optionsSendMail = {
      to: email, // list of receivers
      subject: "Quên mật khẩu", // Subject line
      html:
          '<p>Vui lòng nhấn vào link này để cập nhật mật khẩu <b><a href="' +
          URL +
          '"> Tại đây </a></b></p>',
  };
  sendEmail(optionsSendMail);
  return res.status(200).send("ok");
});



app.post('/authnv/reset-password/:token&&:newPass', async (req, res) => {
  const {token, newPass} = req.params;
  const decode = jwt.verify(token, process.env.SECRET);
  if (decode.email) {
      await sql.query( "UPDATE nguoi_dung SET mat_khau = ? WHERE email = ? and quyen != 1", [md5(newPass), decode.email]);
      return res.status(200).send("Đổi mật khẩu thành công!");
  }
  return res.status(500).send(null);
})

};
