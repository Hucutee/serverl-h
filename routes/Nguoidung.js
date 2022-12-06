const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/nguoidung/checkdn/:tk&&:mk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where tai_khoan = "'+req.params.tk+'" and quyen=1 and mat_khau = md5("'+req.params.mk+'")' ,
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
    "/nguoidung/deletenv/:manv" , async (req, res) =>{
      return await sql.query(
          'delete from nguoi_dung where ma_nd =  ' +'"'  + req.params.manv + '"',
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
    "/nguoidung/suanv/:manv&&:quyen" , async (req, res) =>{
      return await sql.query(
          'update  nguoi_dung set quyen = '+req.params.quyen+' where ma_nd =  ' +'"'  + req.params.manv + '"',
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
    "/nguoidung/createnv/:tennv&&:chucvu&&:gioitinh&&:ngaysinh&&:email&&:sdt&&:pass", async (req, res) =>{
        return await sql.query(
            'insert into nguoi_dung (`ten_nd`,`quyen`,`gioi_tinh`,`ngay_sinh`,`email`,`sdt_nd`,`mat_khau`,`xac_thuc`,`ngay_them`) values ("'+req.params.tennv+'","'+req.params.chucvu+'","'+req.params.gioitinh+'","'+req.params.ngaysinh+'","'+req.params.email+'","'+req.params.sdt+'",md5("'+req.params.pass+'"), 1 ,CURRENT_TIMESTAMP()) ' ,
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
    "/nguoidung/checkdnshipper/:email&&:mk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_giao_hang where email = "'+req.params.email+'" and mat_khau = md5("'+req.params.mk+'")' ,
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
    "/nguoidung/checkdnnhanvien/:email&&:mk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where email = "'+req.params.email+'" and mat_khau = md5("'+req.params.mk+'") and quyen != 1' ,
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
    "/nguoidung/checktk/:tk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where email = "'+req.params.tk+'" and quyen=1' ,
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
    "/nguoidung/checktknv/:email", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where email = "'+req.params.email+'" and quyen !=1' ,
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
    "/nguoidung", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung',
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
    "/nguoidung/getnvmoi", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where quyen !=1 order by ngay_them desc limit 1',
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
    "/nguoidung/getcountnv", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where quyen !=1',
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
    "/nguoidung/getcounttennv/:ten", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where quyen !=1 and (ma_nd like "%'+req.params.ten+'%" or ten_nd like "%'+req.params.ten+'%")',
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
    "/listcvnv", async (req, res) =>{
        return await sql.query(
            'select * from quyen',
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
    "/listavtnv", async (req, res) =>{
        return await sql.query(
            'select * from anh_dai_dien where trang_thai =1 group by ma_nd order by ngay_them desc',
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
    "/nguoidung/listnv/:trang", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where quyen !=1  limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/nguoidung/getnv/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where quyen !=1 and (ma_nd like "%'+req.params.ten+'%" or ten_nd like "%'+req.params.ten+'%") limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/sanpham/listlienquan/:malsp", async (req, res) =>{
        return await sql.query(
            'select * from san_pham,chi_tiet_san_pham where san_pham.ma_sp=chi_tiet_san_pham.ma_sp and san_pham.loai_sp =  "'+ req.params.malsp +'" group by san_pham.ma_sp limit 4' ,
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
  app.get(
    "/donhang/laydonhangboom/:madh", async (req, res) =>{
        return await sql.query(
            'select * from don_hang where  ma_dh=' + "'" + req.params.madh + "'",
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
    "/donhang/boomhang/:mand", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET boom = boom + 1 where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "'",
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
    "/nguoidung/getttnd/:idnd", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung,quyen where nguoi_dung.quyen=quyen.ma_q and nguoi_dung.ma_nd=' + "'" + req.params.idnd + "' limit 1",
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
    "/nguoidung/getavt/:idnd", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung, anh_dai_dien where nguoi_dung.ma_nd=anh_dai_dien.ma_nd and anh_dai_dien.trang_thai = 0 and anh_dai_dien.ma_nd=' + "'" + req.params.idnd + "' order by  anh_dai_dien.ngay_them desc limit 1",
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
    "/nguoidung/getavtnv/:idnd", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung, anh_dai_dien where nguoi_dung.ma_nd=anh_dai_dien.ma_nd and anh_dai_dien.trang_thai=1 and anh_dai_dien.ma_nd=' + "'" + req.params.idnd + "' order by  anh_dai_dien.ngay_them desc limit 1",
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
    "/nguoidung/ktmatkhau/:mand&&:mk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where ma_nd=' + "'" + req.params.mand + "' and mat_khau = md5('"+req.params.mk + "') and quyen =1",
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
    "/nguoidung/ktmatkhaunv/:mand&&:mk", async (req, res) =>{
        return await sql.query(
            'select * from nguoi_dung where ma_nd=' + "'" + req.params.mand + "' and mat_khau = md5('"+req.params.mk + "') and quyen !=1",
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
    "/nguoidung/doimatkhau/:mand&&:mk", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET mat_khau = md5("' +req.params.mk+'") where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "' and quyen=1",
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
    "/nguoidung/doimatkhaunv/:mand&&:mk", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET mat_khau = md5("' +req.params.mk+'") where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "' and quyen !=1",
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
    "/nguoidung/addsdt/:mand&&:sdt", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET sdt_nd = "' +req.params.sdt+'" where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "' and quyen =1",
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
    "/nguoidung/addns/:mand&&:ns", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET ngay_sinh = "' +req.params.ns+'" where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "' and quyen =1",
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
    "/nguoidung/addgt/:mand&&:gt", async (req, res) =>{
        return await sql.query(
            'UPDATE `nguoi_dung` SET gioi_tinh = "' +req.params.gt+'" where  nguoi_dung.ma_nd=' + "'" + req.params.mand + "' and quyen =1",
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
