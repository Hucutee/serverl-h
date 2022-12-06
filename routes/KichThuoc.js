const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/kichthuoc/:trang", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/kichthuoc", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc',
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
    "/kichthuoc/getCountlistkt/:ten", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc where ten_kt like '+ "'%"+ req.params.ten +"%'",
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
    "/kichthuoc/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc where ten_kt like '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/kichthuoc/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from kich_thuoc where ma_kt =  ' +'"'  + req.params.id + '"',
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
    "/kichthuoc/add/:tenkt", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `kich_thuoc` (`ten_kt`) VALUES (' 
            + "'" + req.params.tenkt 
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
    "/kichthuoc/sua/:id&&:ten", async (req, res) =>{
        return await sql.query(
            'UPDATE `kich_thuoc` SET ten_kt= ' + "'"+ req.params.ten  +"'" + "where ma_kt = '" + req.params.id + "'",
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
    "/kichthuoc/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc where ten_kt= '+ "'"+ req.params.ten +"'" ,
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
    "/kichthuoc/suatrung/:ma&&:ten", async (req, res) =>{
        return await sql.query(
            'select * from kich_thuoc where ten_kt= '+ "'"+ req.params.ten +"' and ma_kt != '"+ req.params.ma+"'",
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
