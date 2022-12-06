const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/phieugiamgia/:trang", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/phieugiamgia", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia',
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
    "/phieugiamgia/getCountlistten/:ten", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia where ten_pgg like "%'+req.params.ten+'%"',
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
    "/phieugiamgia/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia where ten_pgg like '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/phieugiamgia/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from phieu_giam_gia where ma_pgg =  ' +'"'  + req.params.id + '"',
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
    "/phieugiamgia/add/:tenpgg&&:stg&&:nbd&&:nkt&&:sttt", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `phieu_giam_gia` (`ten_pgg`, `so_tien_giam`, `ngay_bd`, `ngay_kt`,`toi_thieu`) VALUES (' 
            + "'" + req.params.tenpgg + "'," + "'" + req.params.stg + "',"  + "'" + req.params.nbd + "'," + "'"+ req.params.nkt + "'" 
            + ",'" + req.params.sttt+"')" ,
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
    "/phieugiamgia/sua/:id&&:ten&&:stg&&:nbd&&:nkt&&:sttt", async (req, res) =>{
        return await sql.query(
            'UPDATE `phieu_giam_gia` SET ten_pgg= ' + "'"+ req.params.ten  +"'," + 'so_tien_giam=' + "'" + req.params.stg + "'," + 'ngay_bd=' +"'"+ req.params.nbd +"',"+ 'ngay_kt=' +"'"+ req.params.nkt +"',toi_thieu = "+'"'+req.params.sttt  +'" WHERE ma_pgg= ' + "'" +req.params.id+"'",
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
    "/phieugiamgia/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia where ten_pgg= '+ "'"+ req.params.ten +"'" ,
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
    "/phieugiamgia/dieukien/:so", async (req, res) =>{
        return await sql.query(
            'select * from phieu_giam_gia where toi_thieu <= '+ "'"+ req.params.so +"' and ngay_bd <= current_date and ngay_kt >= current_date" ,
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
