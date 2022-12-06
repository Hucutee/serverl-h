const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/sanpham/:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,loai_san_pham where san_pham.loai_sp=loai_san_pham.ma_lsp limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/sanpham", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,loai_san_pham where san_pham.loai_sp=loai_san_pham.ma_lsp',
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
    "/sanpham/getCounttheoten/:ten", async (req, res) =>{
        return await sql.query(
            'select * from san_pham where ten_sp like '+ "'%"+ req.params.ten +"%'",
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
    "/sanpham/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham where ten_sp like '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/sanpham/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from san_pham where ma_sp =  ' +'"'  + req.params.id + '"',
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
    "/sanpham/add/:ten&&:loai", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `san_pham` (`ten_sp`, `loai_sp`,`ngay_them`) VALUES (' 
            + "'" + req.params.ten + "'," + "'" + req.params.loai 
            + "', CURRENT_DATE())" ,
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
    "/sanpham/sua/:id&&:ten&&:loai", async (req, res) =>{
        return await sql.query(
            'UPDATE `san_pham` SET ten_sp= ' + "'"+ req.params.ten  +"'," + 'loai_sp=' + "'" + req.params.loai + "'" + "where ma_sp = '" + req.params.id + "'",
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
    "/sanpham/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from san_pham where ten_sp= '+ "'"+ req.params.ten +"'" ,
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
    "/sanpham/checkloai/:loai", async (req, res) =>{
        return await sql.query(
            'select * from san_pham where loai_sp= '+ "'"+ req.params.loai +"'" ,
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
    "/sanpham/suatrung/:ma&&:ten&&:loai", async (req, res) =>{
        return await sql.query(
            'select * from san_pham where ten_sp= '+ "'"+ req.params.ten +"' and loai_sp= '"+req.params.loai +"' and ma_sp != '"+req.params.ma +"'",
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
    "/sanphammasp/:id", async (req, res) =>{
        return await sql.query(
            'select * from chi_tiet_san_pham where ma_sp = "' +req.params.id +'"',
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
    "/sanphamnoi/:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp group by san_pham.ma_sp limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoicount", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp group by san_pham.ma_sp',
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
    "/sanphamnoicount/getListnoicounttenget/:ten", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and san_pham.ten_sp like "%'+req.params.ten+'%" group by san_pham.ma_sp',
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
    "/sanphamProduct/:id" , async (req, res) =>{
      return await sql.query(
          'select * from san_pham where ma_sp =  ' +'"'  + req.params.id + '"',
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
    "/sanpham/getidnoi/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and chi_tiet_san_pham.ten_sp LIKE "%' +req.params.ten+'%"' +' group by san_pham.ma_sp limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoiloai/:locloai&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and san_pham.loai_sp ="' +req.params.locloai + '"' + ' group by san_pham.ma_sp limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoigia/:locgia&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp  group by san_pham.ma_sp  order by chi_tiet_san_pham.giaban '+req.params.locgia +' limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoikhoanggia/:nho&&:lon&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and chi_tiet_san_pham.giaban >="' +req.params.nho + '" and chi_tiet_san_pham.giaban <="' +req.params.lon + '"'+' group by san_pham.ma_sp limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoiloaigia/:loai&&:gia&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and san_pham.loai_sp ="' +req.params.loai 
            + '"  group by san_pham.ma_sp  order by chi_tiet_san_pham.giaban ' + req.params.gia + ' limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoiloaikhoanggia/:loai&&:nho&&:lon&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and chi_tiet_san_pham.giaban >="' +req.params.nho + '"  and chi_tiet_san_pham.giaban <="' +req.params.lon + '" and san_pham.loai_sp = "'+ req.params.loai+' " group by san_pham.ma_sp limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoigiakhoanggia/:gia&&:nho&&:lon&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and chi_tiet_san_pham.giaban >="' +req.params.nho + '"  and chi_tiet_san_pham.giaban <="' +req.params.lon + '"  group by san_pham.ma_sp order by chi_tiet_san_pham.giaban ' + req.params.gia +' limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanphamnoiloaigiakhoanggia/:loai&&:gia&&:nho&&:lon&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp = chi_tiet_san_pham.ma_sp and chi_tiet_san_pham.giaban >="' +req.params.nho + '"  and chi_tiet_san_pham.giaban <="' +req.params.lon + '" and san_pham.loai_sp = "'+ req.params.loai+' " group by san_pham.ma_sp order by chi_tiet_san_pham.giaban ' + req.params.gia + ' limit '+(-15 +req.params.trang*15) + ",15",
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
    "/sanpham/lienquan/:masp", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,loai_san_pham where san_pham.loai_sp=loai_san_pham.ma_lsp and san_pham.ma_sp =  "'+ req.params.masp +'"' ,
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
    "/sanpham/listlienquan/:malsp&&:masp", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp=chi_tiet_san_pham.ma_sp and san_pham.loai_sp =  "'+ req.params.malsp +'" and san_pham.ma_sp != "'+req.params.masp+'" group by san_pham.ma_sp limit 4' ,
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
    "/sanphamm", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp=chi_tiet_san_pham.ma_sp group by san_pham.ma_sp order by san_pham.ngay_them desc limit 6' ,
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
