const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/chitiethoadonnhap/:trang", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_hdn,chi_tiet_san_pham where chi_tiet_hdn.ma_ctsp = chi_tiet_san_pham.ma_ctsp limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/chitiethoadonnhap", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_hdn,chi_tiet_san_pham where chi_tiet_hdn.ma_ctsp = chi_tiet_san_pham.ma_ctsp',
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
    "/chitiethoadonnhap/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_hdn,chi_tiet_san_pham where chi_tiet_hdn.ma_ctsp = chi_tiet_san_pham.ma_ctsp and ma_hdn= '+ "'"+ req.params.ten +"'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/chitiethoadonnhap/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from chi_tiet_hdn where ma_cthdn =  ' +'"'  + req.params.id + '"',
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
    "/chitiethoadonnhap/deletesl/:id&&:sl" , async (req, res) =>{
      return await sql.query(
        'UPDATE `chi_tiet_san_pham` SET soluong= soluong -"' + req.params.sl +'"'+  " where ma_ctsp = '" + req.params.id + "'",
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
    "/chitiethoadonnhap/add/:mahdn&&:mactsp&&:sl&&:gia", async (req, res) =>{
        return await sql.query(
            'INSERT  `chi_tiet_hdn` (`ma_hdn`,`ma_ctsp`,`so_luong_nhap`,`gia_nhap`) VALUES (' 
            + "'" + req.params.mahdn + "', '" + req.params.mactsp + "', '" + req.params.sl + "', '" + req.params.gia + "'" 
            + ")" ,
            
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
    "/chitiethoadonnhap/addsl/:mactsp&&:sl", async (req, res) =>{
        return await sql.query(
            'UPDATE `chi_tiet_san_pham` SET soluong= soluong +"' + req.params.sl +'"'+  " where ma_ctsp = '" + req.params.mactsp + "'",
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
    "/chitietsanpham/sua/:macthdn&&:mactsp&&:sl&&:gn", async (req, res) =>{
        return await sql.query(
            'UPDATE `chi_tiet_hdn` SET so_luong_nhap= ' + "'"+ req.params.sl  +"',gia_nhap= '"+ req.params.gn
             + "' where ma_cthdn = '" + req.params.macthdn + "'",
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
    "/chitietsanpham/suasl/:macthdn&&:mactsp&&:slc&&:sl&&:gn", async (req, res) =>{
        return await sql.query(
            'UPDATE `chi_tiet_san_pham` SET soluong= soluong + "'  + req.params.sl+'" - "'+ req.params.slc +'"'
             + " where ma_ctsp = '" + req.params.mactsp + "'",
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
