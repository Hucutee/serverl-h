const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/khuyenmai/:trang", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai,loai_san_pham where khuyen_mai.sanpham_km = loai_san_pham.ma_lsp group by khuyen_mai.ma_km limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/khuyenmai", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai,loai_san_pham,san_pham where khuyen_mai.sanpham_km = loai_san_pham.ma_lsp and loai_san_pham.ma_lsp =san_pham.loai_sp group by khuyen_mai.ma_km',
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
    "/khuyenmai/getCountlistten/:ten", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai,loai_san_pham,san_pham where khuyen_mai.sanpham_km = loai_san_pham.ma_lsp and loai_san_pham.ma_lsp =san_pham.loai_sp and khuyen_mai.ten_km like "%'+req.params.ten+'%" group by khuyen_mai.ma_km',
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
    "/khuyenmai/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai,loai_san_pham where khuyen_mai.sanpham_km = loai_san_pham.ma_lsp and khuyen_mai.ten_km like '+ "'%"+ req.params.ten +"%'" + '  group by khuyen_mai.ma_km limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/khuyenmai/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from khuyen_mai where ma_km =  ' +'"'  + req.params.id + '"',
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
    "/khuyenmai/add/:tenkm&&:lsp&&:ptg&&:nbd&&:nkt", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `khuyen_mai` (`ten_km`,`sanpham_km`, `phantram_km`, `ngay_bd`, `ngay_kt`) VALUES (' 
            + "'" + req.params.tenkm + "'," + "'" + req.params.lsp + "'," + "'" + req.params.ptg + "',"  + "'" + req.params.nbd + "'," + "'"+ req.params.nkt + "'" 
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
    "/khuyenmai/sua/:id&&:ten&&:lsp&&:ptg&&:nbd&&:nkt", async (req, res) =>{
        return await sql.query(
            'UPDATE `khuyen_mai` SET ten_km= ' + "'"+ req.params.ten  +"',"+ 'sanpham_km=' + "'" + req.params.lsp + "'," + 'phantram_km=' + "'" + req.params.ptg + "'," + 'ngay_bd=' +"'"+ req.params.nbd +"',"+ 'ngay_kt=' +"'"+ req.params.nkt +"'"  +'WHERE ma_km= ' + "'" +req.params.id+"'",
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
    "/khuyenmai/checktrung/:ten", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai where ten_km= '+ "'"+ req.params.ten +"'" ,
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
    "/khuyenmai/checkngay/:ten&&:ngaybd&&:ngaykt&&:makm", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai where sanpham_km= '+ "'"+ req.params.ten +"' and ma_km != "+"'"+ req.params.makm +"' and ((ngay_bd <= "+"'"+  req.params.ngaybd + "' and ngay_kt >= "+"'"+ req.params.ngaybd+"') or (ngay_bd <= "+"'"+ req.params.ngaykt+"' and ngay_kt >= "+"'"+ req.params.ngaykt+"') or (ngay_bd >= "+"'"+ req.params.ngaybd+"' and ngay_kt <= "+"'"+ req.params.ngaykt+"'))",
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
    "/khuyenmai/checkngayadd/:ten&&:ngaybd&&:ngaykt", async (req, res) =>{
        return await sql.query(
            'select * from khuyen_mai where sanpham_km= '+ "'"+ req.params.ten  +"' and ((ngay_bd <= "+"'"+  req.params.ngaybd + "' and ngay_kt >= "+"'"+ req.params.ngaybd+"') or (ngay_bd <= "+"'"+ req.params.ngaykt+"' and ngay_kt >= "+"'"+ req.params.ngaykt+"') or (ngay_bd >= "+"'"+ req.params.ngaybd+"' and ngay_kt <= "+"'"+ req.params.ngaykt+"'))",
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
    "/khuyenmai/checkkm/:ma", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,loai_san_pham, khuyen_mai where san_pham.loai_sp=loai_san_pham.ma_lsp and loai_san_pham.ma_lsp=khuyen_mai.sanpham_km and san_pham.ma_sp =  "'+ req.params.ma +'" group by loai_san_pham.ma_lsp' ,
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
