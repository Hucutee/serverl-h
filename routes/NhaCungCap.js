const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/nhacungcap/:trang", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/nhacungcap", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap',
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
    "/nhacungcap/getCountlistten/:ten", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap where ten_ncc like '+ "'%"+ req.params.ten +"%'",
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
    "/nhacungcap/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap where ten_ncc like '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/nhacungcap/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from nha_cung_cap where ma_ncc =  ' +'"'  + req.params.id + '"',
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
    "/nhacungcap/add/:tenncc&&:sdt&&:diachi", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `nha_cung_cap` (`ten_ncc`, `sdt_ncc`, `diachi_ncc`) VALUES (' 
            + "'" + req.params.tenncc + "'," + "'" + req.params.sdt + "',"  + "'" + req.params.diachi + "'" 
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
    "/nhacungcap/sua/:id&&:ten&&:sdt&&:dc", async (req, res) =>{
        return await sql.query(
            'UPDATE `nha_cung_cap` SET ten_ncc= ' + "'"+ req.params.ten  +"'," + 'sdt_ncc=' + "'" + req.params.sdt + "'," + 'diachi_ncc=' +"'"+ req.params.dc +"'"  +'WHERE ma_ncc= ' + "'" +req.params.id+"'",
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
    "/nhacungcap/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap where ten_ncc= '+ "'"+ req.params.ten +"'" ,
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
    "/nhacungcap/suatrung/:ma&&:ten", async (req, res) =>{
        return await sql.query(
            'select * from nha_cung_cap where ten_ncc= '+ "'"+ req.params.ten +"' and ma_ncc != '"+ req.params.ma+"'",
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
