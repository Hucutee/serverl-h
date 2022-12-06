const sql = require('../db');

module.exports = function (app) {
    app.get(
        "/binhluan/getlistblid/:masp", async (req, res) =>{
            return await sql.query(
                'select * from binh_luan left join nguoi_dung on binh_luan.ma_nd=nguoi_dung.ma_nd where rep is NULL and ma_sp ="'+req.params.masp+'" order by ngay_bl desc',
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
        "/binhluan/getlistrep/:masp", async (req, res) =>{
            return await sql.query(
                'select * from binh_luan where rep IS NOT null ',
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
        "/danhgia/getlistdg/:masp", async (req, res) =>{
            return await sql.query(
                'select * from chi_tiet_san_pham, chi_tiet_dh,danh_gia,don_hang, nguoi_dung where chi_tiet_san_pham.ma_ctsp=chi_tiet_dh.ma_ctsp and chi_tiet_dh.ma_ctdh = danh_gia.ma_ctdh and chi_tiet_dh.ma_dh=don_hang.ma_dh and don_hang.ma_kh = nguoi_dung.ma_nd and chi_tiet_san_pham.ma_sp ="'+req.params.masp+'" ',
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
        "/binhluan/add/:bl&&:masp&&:mand", async (req, res) =>{
            return await sql.query(
                'INSERT INTO binh_luan (`noi_dung`,`ma_sp`,`ma_nd`,`ngay_bl`,`trang_thai`) VALUES ("'+req.params.bl+'","'+req.params.masp+'","'+req.params.mand+'",current_date(),0)',
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
        "/donhang/getmadh/:makh", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where ma_kh = "'+req.params.makh+'" order by ngay_dat_hang desc limit 1',
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
        "/donhang", async (req, res) =>{
            return await sql.query(
                'select * from don_hang  order by ngay_dat_hang desc ',
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
        "/donhang/:trang&&:t1&&:t2", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where trang_thai >= '+req.params.t1 +' and trang_thai <= '+req.params.t2 + ' order by ngay_dat_hang desc limit  '+(-20 +req.params.trang*20) + ",20",
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
        "/donhang/cuangh/:trang&&:t1&&:t2&&:mangh", async (req, res) =>{
            return await sql.query(
                'select don_hang.ma_dh,don_hang.ma_kh,don_hang.ma_pgg,don_hang.ma_nv,don_hang.ngay_dat_hang,don_hang.hinh_thuc_thanh_toan,don_hang.tong_tien,don_hang.nguoi_nhan,don_hang.dia_chi_giao,don_hang.trang_thai,giao_hang.ma_dh,giao_hang.ma_ngh from don_hang left join giao_hang on don_hang.ma_dh=giao_hang.ma_dh where don_hang.trang_thai >= '+req.params.t1 +' and don_hang.trang_thai <= '+req.params.t2 + ' and giao_hang.ma_ngh ="'+req.params.mangh+'" group by don_hang.ma_dh order by don_hang.ngay_dat_hang desc limit  '+(-20 +req.params.trang*20) + ",20",
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
        "/donhang/cuakhachhang/:makh&&:t1&&:t2", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where ma_kh = "'+req.params.makh+'" and trang_thai >= ' +req.params.t1+' and trang_thai <= '+req.params.t2 + ' order by ngay_dat_hang desc ',
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
        "/donhang/ctdhcuakhachhang/:makh", async (req, res) =>{
            return await sql.query(
                'select * from don_hang,chi_tiet_dh,chi_tiet_san_pham where don_hang.ma_dh=chi_tiet_dh.ma_dh and chi_tiet_dh.ma_ctsp=chi_tiet_san_pham.ma_ctsp and don_hang.ma_kh = "'+req.params.makh+'"  ',
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
        "/donhang/ctdh/getallctdh", async (req, res) =>{
            return await sql.query(
                'select * from don_hang,chi_tiet_dh,chi_tiet_san_pham where don_hang.ma_dh=chi_tiet_dh.ma_dh and chi_tiet_dh.ma_ctsp=chi_tiet_san_pham.ma_ctsp ',
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
        "/donhang/huy/:madh", async (req, res) =>{
            return await sql.query(
                'delete from don_hang where ma_dh = "'+req.params.madh+'"',
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
        "/donhang/huydon/:id", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = 5 where ma_dh =' + "'"+ req.params.id  +"'",
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
        "/donhang/setslctsp/:mactsp&&:slg", async (req, res) =>{
            return await sql.query(
                'UPDATE `chi_tiet_san_pham` SET soluong = soluong -' + ""+ req.params.slg  +", da_ban = da_ban +"+req.params.slg+" where ma_ctsp = '" + req.params.mactsp + "'",
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
        "/chitietdonhang/suatrangthai/:mactdh", async (req, res) =>{
            return await sql.query(
                'UPDATE `chi_tiet_dh` SET trang_thai = 1  where ma_ctdh = "' + req.params.mactdh + '"',
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
        "/donhang/daxacnhan/:madh", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = 1 where ma_dh = "'+req.params.madh+'"',
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
        "/donhang/settrangthaidonhang/:madh&&:mangh&&:tt", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = trang_thai + 1  where ma_dh = "'+req.params.madh+'"',
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
        "/donhang/themctgh/:madh&&:mangh&&:tt", async (req, res) =>{
            return await sql.query(
                'INSERT INTO giao_hang (`ma_ngh`,`ma_dh`,`trang_thai`,`ngay_gh`) VALUES ("'+req.params.mangh+'","'+req.params.madh+'",'+(req.params.tt-(-1))+',current_date())',
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
        "/donhang/settrangthaidonhang1/:madh&&:mangh&&:tt", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = trang_thai + 3 where ma_dh = "'+req.params.madh+'"',
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
        "/donhang/themctgh1/:madh&&:mangh&&:tt", async (req, res) =>{
            return await sql.query(
                'INSERT INTO giao_hang (`ma_ngh`,`ma_dh`,`trang_thai`,`ngay_gh`) VALUES ("'+req.params.mangh+'","'+req.params.madh+'",'+(req.params.tt-(-3))+',current_date())',
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
        "/donhang/hoanhang/:mactsp&&:sl", async (req, res) =>{
            return await sql.query(
                'UPDATE `chi_tiet_san_pham` SET soluong = soluong +' + req.params.sl +' where ma_ctsp = "'+req.params.mactsp+'"',
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
        "/donhang/chitietgiaohang/:makh", async (req, res) =>{
            return await sql.query(
                'select * from don_hang,giao_hang where don_hang.ma_dh=giao_hang.ma_dh and don_hang.ma_kh = "'+req.params.makh+'"',
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
        "/chitietgiaohang", async (req, res) =>{
            return await sql.query(
                'select * from giao_hang ',
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
        "/thongtinnguoigiaohang", async (req, res) =>{
            return await sql.query(
                'select * from giao_hang,nguoi_giao_hang where giao_hang.ma_ngh=nguoi_giao_hang.ma_ngh group by giao_hang.ma_dh',
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
    }