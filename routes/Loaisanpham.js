const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/loaisanpham/:trang", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/loaisanpham", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham',
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
    "/loaisanpham/countten/:ten", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham where ten_lsp like "%'+req.params.ten+'%"',
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
    "/loaisanpham/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham where ten_lsp LIKE '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/loaisanpham/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from loai_san_pham where ma_lsp =  ' +'"'  + req.params.id + '"',
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
    "/loaisanpham/add/:tenlsp", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `loai_san_pham` (`ten_lsp`) VALUES (' 
            + "'" + req.params.tenlsp 
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
    "/loaisanpham/sua/:id&&:ten", async (req, res) =>{
        return await sql.query(
            'UPDATE `loai_san_pham` SET ten_lsp= ' + "'"+ req.params.ten  +"'" + "where ma_lsp = '" + req.params.id + "'",
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
    "/loaisanpham/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham where ten_lsp= '+ "'"+ req.params.ten +"'" ,
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
    "/loaisanpham/suatrung/:ma&&:ten", async (req, res) =>{
        return await sql.query(
            'select * from loai_san_pham where ten_lsp= '+ "'"+ req.params.ten +"' and ma_lsp != '"+ req.params.ma+"'",
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
