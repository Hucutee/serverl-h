const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const CookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const multer = require('multer');
const session = require("express-session");
const passport = require("passport");
require("./lib/googleLogin");
const path = require("path");
global.publicPath = path.resolve("public/images");
const bodyParser = require("body-parser");
const app = express();
app.use(morgan("dev"));
app.use(CookieParser());
app.use(express.json());
const sql = require('./db');

app.use("/public", express.static(publicPath));

const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    req.headers.origin,
    "x-access-token, Origin, Content-Type, Accept",
    "Access-Control-Allow-Credentials"
  );
  next();
});
app.use(express.urlencoded({ extended: true }));

var storage = multer.diskStorage({
  destination: function(req, file,cd){
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg"){
    cd(null,'D://luanvan/src/imageuser');
    
  }else {
    cd(new Error('not image'),false);
  }
  },
   filename: function(req,file,cd){
    cd(null,Date.now()+'.jpg');
  }
});

var upload = multer({storage});

app.post("/upload", upload.single('file'),async (req,res,next)=>{
  const file = req.file;
  const {mand} = req.body;
  if(!file){
    const error = new Error('Upload failed');
    console.log(file);
    return next(error);
  } 
      console.log(mand,file.filename);

  const dl =  "insert into anh_dai_dien (`ten_avt`,`ma_nd`,`ngay_them`) VALUES (?,?, CURRENT_TIMESTAMP())";
   await sql.query(
   dl,[file.filename,mand],
    (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
       return res.status(200).send(data);
    }
);
});
app.post("/uploadnv", upload.single('file'),async (req,res,next)=>{
  const file = req.file;
  const {mand} = req.body;
  if(!file){
    const error = new Error('Upload failed');
    console.log(file);
    return next(error);
  } 
      console.log(mand,file.filename);

  const dl =  "insert into anh_dai_dien (`ten_avt`,`ma_nd`,`ngay_them`,`trang_thai`) VALUES (?,?, CURRENT_TIMESTAMP(),1)";
   await sql.query(
   dl,[file.filename,mand],
    (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
       return res.status(200).send(data);
    }
);
});

app.post("/hinhdonhang", upload.single('file'),async (req,res,next)=>{
  const file = req.file;
  const {madh} = req.body;
  if(!file){
    const error = new Error('Upload failed');
    console.log(file);
    return next(error);
  } 

  const dl =  "update don_hang set anh = ? where ma_dh = ?";
   await sql.query(
   dl,[file.filename,madh],
    (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
       return res.status(200).send(data);
    }
);
});

app.use(session({ secret: "cats", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);





app.post("/danhgia", upload.single('file'),async (req,res,next)=>{
  const file = req.file;
  if(!file){
    const dl =  "insert into danh_gia (`ma_ctdh`,`so_sao`,`ngay`,`noi_dung`) VALUES (?,?, CURRENT_TIMESTAMP(),?)";
      await sql.query(
   dl,[req.body.mactdh,req.body.sosao,req.body.noidung],
    (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
       return res.status(200).send(data);
    }
);
  } else{
    const dl =  "insert into danh_gia (`ma_ctdh`,`so_sao`,`ngay`,`noi_dung`,`hinh_anh`) VALUES (?,?, CURRENT_TIMESTAMP(),?,?)";
      await sql.query(
   dl,[req.body.mactdh,req.body.sosao,req.body.noidung,file.filename],
    (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
       return res.status(200).send(data);
    }
);
  }

      
})

app.use(session({ secret: "cats", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/login/google",
    failureRedirect: "/auth/google/failure",
  })
);
app.get("/logout", (req, res) => {
  req.session.destroy();
  req.logout();
  res.clearCookie("connect.sid");
  res.clearCookie("token");
  res.clearCookie("email");
  res.clearCookie("fullname");
  return res.status(200).send("Goodbye!");
});

require('./routes/NhaCungCap')(app);
require('./routes/KichThuoc')(app);
require('./routes/Loaisanpham')(app);
require('./routes/Phieugiamgia')(app);
require('./routes/Khuyenmai')(app);
require('./routes/Sanpham')(app);
require('./routes/Chitietsanpham')(app);
require('./routes/Hoadonnhap')(app);
require('./routes/Chitiethoadonnhap')(app);
require('./routes/Nguoidung')(app);
require('./routes/Diachi')(app);
require('./routes/Donhang')(app);
require("./routes/Users")(app);
require("./routes/Role")(app);
require("./routes/Binhluan")(app);
require("./routes/Repbl")(app);
require("./routes/thanhtoanonlinee.routes")(app);
require("./routes/authh")(app);

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});