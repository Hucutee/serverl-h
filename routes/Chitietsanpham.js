const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/chitietsanpham/:trang", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham limit ' +(-10 +req.params.trang*10) + ",10",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham',
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham where ten_sp= '+ "'"+ req.params.ten +"'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from chi_tiet_san_pham where ma_ctsp =  ' +'"'  + req.params.id + '"',
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err); 
              }
             return res.status(200).json(data);
          }
      );
  }
  );
  app.get(
    "/chitietsanpham/add/:sp&&:kt&&:sl&&:gb&&:tt&&:ha&&:tenkt&&:tensp", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `chi_tiet_san_pham` (`ma_sp`,`ma_kt`,`soluong`,`giaban`,`thongtin`,`hinhanh`,`ten_kt`,`ten_sp`) VALUES (' 
            + "'" + req.params.sp + "', '" + req.params.kt + "', '" + req.params.sl + "', '" + req.params.gb + "', '" + req.params.tt +"','"+ req.params.ha +"', '" + req.params.tenkt + "', '" + req.params.tensp
            + "')" ,
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err); 
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham/sua/:id&&:sp&&:tensp&&:kt&&:tenkt&&:sl&&:gb&&:tt&&:ha", async (req, res) =>{
        return await sql.query(
            'UPDATE `chi_tiet_san_pham` SET ma_sp= ' + "'"+ req.params.sp  +"',ten_sp= '"+ req.params.tensp
             +"', ma_kt = '"+ req.params.kt + "', ten_kt = '"+ req.params.tenkt + "', soluong= '"+ req.params.sl 
             +"', giaban= '"+ req.params.gb + "',thongtin = '"+ req.params.tt+ "',hinhanh='" + req.params.ha
             + "' where ma_ctsp = '" + req.params.id + "'",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham/checktrung/:sp&&:kt", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham where ma_sp= '+ "'"+ req.params.sp +"' and ma_kt = '" + req.params.kt +"'",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
  app.get(
    "/chitietsanpham/suatrung/:mactsp&&:masp&&:makt", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham where ma_sp= '+ "'"+ req.params.masp +"' and ma_kt = '" + req.params.makt +"' and ma_ctsp != '"+ req.params.mactsp+ "'",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  );
//trang khach hang
  app.get(
    "/chitietsanphamProduct/:id" , async (req, res) =>{
      return await sql.query(
          'select * from chi_tiet_san_pham where ma_sp =  ' +'"'  + req.params.id + '"',
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err); 
              }
             return res.status(200).json(data);
          }
      );
  }
  );
  app.get(
    "/chitietsanphamProduct/gia1/:id" , async (req, res) =>{
      return await sql.query(
          'select min(giaban) as giaban from chi_tiet_san_pham where ma_sp =  ' +'"'  + req.params.id + '" ',
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err); 
              }
             return res.status(200).json(data);
          }
      );
  }
  );
  app.get(
    "/chitietsanphamProduct/gia2/:id" , async (req, res) =>{
      return await sql.query(
          'select max(giaban) as max, min(giaban) as min from chi_tiet_san_pham where ma_sp =  ' +'"'  + req.params.id + '" ',
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err); 
              }
             return res.status(200).json(data);
          }
      );
  }
  );
  app.get(
    "/chitietsanphamProduct1/:id" , async (req, res) =>{
      return await sql.query(
          'select * from chi_tiet_san_pham where ma_sp =  ' +'"'  + req.params.id + '" limit 1',
          (err, data) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err); 
              }
             return res.status(200).json(data);
          }
      );
  }
  );
};
