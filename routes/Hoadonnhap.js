const sql = require('../db');

module.exports = function (app) {
  app.get(
    "/hoadonnhap/:trang", async (req, res) =>{
        return await sql.query(
            'select * from hoa_don_nhap,nha_cung_cap where hoa_don_nhap.ma_ncc = nha_cung_cap.ma_ncc order by hoa_don_nhap.ngay_nhap DESC limit ' +(-10 +req.params.trang*10) + ",10",
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
    "/hoadonnhap/tongnhapthang/:thang", async (req, res) =>{
        return await sql.query(
            'select sum(chi_tiet_hdn.so_luong_nhap) as tongsl,sum(chi_tiet_hdn.gia_nhap*chi_tiet_hdn.so_luong_nhap) as tonggia from hoa_don_nhap,chi_tiet_hdn where hoa_don_nhap.ma_hdn = chi_tiet_hdn.ma_hdn and hoa_don_nhap.ngay_nhap LIKE "%' +req.params.thang + '%"',
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
               return res.status(200).json(data);
            }
        );
    }
  ); app.get(
    "/hoadonnhap/tongnhapnam/:nam", async (req, res) =>{
        return await sql.query(
            'select sum(chi_tiet_hdn.so_luong_nhap) as tongsl,sum(chi_tiet_hdn.gia_nhap*chi_tiet_hdn.so_luong_nhap) as tonggia from hoa_don_nhap,chi_tiet_hdn where hoa_don_nhap.ma_hdn = chi_tiet_hdn.ma_hdn and hoa_don_nhap.ngay_nhap LIKE "%' +req.params.nam + '%"',
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
    "/hoadonxuat/tongbanthang/:thang", async (req, res) =>{
        return await sql.query(
            'select sum(chi_tiet_dh.so_luong) as tongsl,sum(don_hang.tong_tien) as tonggia from don_hang,chi_tiet_dh where don_hang.ma_dh = chi_tiet_dh.ma_dh and don_hang.ngay_dat_hang  LIKE "%' +req.params.thang + '%"',
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
    "/hoadonxuat/tongbannam/:nam", async (req, res) =>{
        return await sql.query(
            'select sum(chi_tiet_dh.so_luong) as tongsl,sum(don_hang.tong_tien) as tonggia from don_hang,chi_tiet_dh where don_hang.ma_dh = chi_tiet_dh.ma_dh and don_hang.ngay_dat_hang  LIKE "%' +req.params.nam + '%"',
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
    "/hoadonnhap", async (req, res) =>{
        return await sql.query(
            'select * from hoa_don_nhap ',
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
    "/hoadonnhap/getcounttenget/:ten", async (req, res) =>{
        return await sql.query(
            'select * from hoa_don_nhap where ma_hdn LIKE "%'+req.params.ten+'%"',
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
    "/dstongdonnhap", async (req, res) =>{
        return await sql.query(
            'select hoa_don_nhap.ma_hdn as ma_hdn, sum(chi_tiet_hdn.so_luong_nhap*chi_tiet_hdn.gia_nhap) as sum from hoa_don_nhap,chi_tiet_hdn where hoa_don_nhap.ma_hdn=chi_tiet_hdn.ma_hdn group by hoa_don_nhap.ma_hdn ',
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
    "/hoadonnhapDESC", async (req, res) =>{
        return await sql.query(
            'select * from hoa_don_nhap order by ngay_nhap desc',
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
    "/hoadonnhap/get/:ten&&:trang", async (req, res) =>{
        return await sql.query(
            'select * from hoa_don_nhap,nha_cung_cap where hoa_don_nhap.ma_ncc = nha_cung_cap.ma_ncc and ma_hdn like '+ "'%"+ req.params.ten +"%'" + ' limit '  + (-10 +req.params.trang*10) + ",10",
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
    "/hoadonnhap/delete/:id" , async (req, res) =>{
      return await sql.query(
          'delete from hoa_don_nhap where ma_hdn =  ' +'"'  + req.params.id + '"',
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
    "/hoadonnhap/add/:ghichu&&:mancc&&:manv&&:nbd", async (req, res) =>{
        return await sql.query(
            'INSERT INTO `hoa_don_nhap` (`ngay_nhap`,`ma_nv`, `ma_ncc`, `ghi_chu`) VALUES (' 
            + "'" + req.params.nbd + "'," + "'" + req.params.manv + "'," + "'" + req.params.mancc + "',"  + "'" + req.params.ghichu + "'"
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
    "/hoadonnhap/sua/:id&&:ghichu&&:mancc&&:manv&&:nbd", async (req, res) =>{
        return await sql.query(
            'UPDATE `hoa_don_nhap` SET ghi_chu = ' + "'"+ req.params.ghichu  +"',"+ 'ma_ncc=' + "'" + req.params.mancc + "'," + 'ma_nv=' + "'" + req.params.manv + "'," + 'ngay_nhap=' +"'"+ req.params.nbd +"' " +'WHERE ma_hdn= ' + "'" +req.params.id+"'",
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
