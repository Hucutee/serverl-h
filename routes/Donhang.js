const sql = require('../db');

module.exports = function (app) {
    app.get(
        "/donhang/add/:ten&&:dc&&:pgg&&:gia&&:loaitt&&:makh", async (req, res) =>{
            return await sql.query(
                'INSERT INTO `don_hang` (`nguoi_nhan`, `dia_chi_giao`,`ma_pgg`,`tong_tien`,`hinh_thuc_thanh_toan`,`ma_kh`,`ngay_dat_hang`,`trang_thai`) VALUES (' 
                + "'" + req.params.ten + "'," + "'" + req.params.dc+ "'," + "'" + req.params.pgg+ "'," + "'" + req.params.gia+ "'," + "'" + req.params.loaitt+ "'," + "'" + req.params.makh + "',CURRENT_TIMESTAMP(),0)",
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
        "/thongkesanphamthang/:thang", async (req, res) =>{
            return await sql.query(
                'SELECT san_pham.*,hoa_don_nhap.ngay_nhap, sum(chi_tiet_hdn.so_luong_nhap) as sln, sum(chi_tiet_hdn.so_luong_nhap*chi_tiet_hdn.gia_nhap) as tongnhap, don_hang.ngay_dat_hang ,sum(chi_tiet_dh.so_luong) as slb, sum(chi_tiet_dh.so_luong*chi_tiet_dh.gia) as tongban FROM ((((san_pham left JOIN chi_tiet_san_pham ON san_pham.ma_sp = chi_tiet_san_pham.ma_sp) left JOIN chi_tiet_hdn ON chi_tiet_san_pham.ma_ctsp = chi_tiet_hdn.ma_ctsp) left join hoa_don_nhap on chi_tiet_hdn.ma_hdn=hoa_don_nhap.ma_hdn) left join chi_tiet_dh on chi_tiet_san_pham.ma_ctsp=chi_tiet_dh.ma_ctsp) left join don_hang on chi_tiet_dh.ma_dh = don_hang.ma_dh WHERE (don_hang.ngay_dat_hang like "%'+req.params.thang+'%" and don_hang.trang_thai=4) or hoa_don_nhap.ngay_nhap like "%'+req.params.thang+'%" group by san_pham.ma_sp',
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
        "/thongkeslkho/:sx", async (req, res) =>{
            return await sql.query(
                'SELECT san_pham.*, sum(chi_tiet_san_pham.soluong) as sl from san_pham, chi_tiet_san_pham where san_pham.ma_sp=chi_tiet_san_pham.ma_sp GROUP by san_pham.ma_sp order by sl '+req.params.sx,
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
        "/donhangtimkiem/:ten", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where ma_dh LIKE "%'+req.params.ten+'%" or ngay_dat_hang like "%'+req.params.ten+'%" or nguoi_nhan like "%' +req.params.ten+'%"  order by ngay_dat_hang desc ',
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
        "/donhangtimkiemm/:trang&&:t1&&:t2&&:ten", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where trang_thai >= '+req.params.t1 +' and trang_thai <= '+req.params.t2 + ' and ( ma_dh LIKE "%'+req.params.ten+'%"  or ngay_dat_hang like "%'+req.params.ten+'%" or nguoi_nhan like "%' +req.params.ten+'%")  order by ngay_dat_hang desc limit  '+(-20 +req.params.trang*20) + ",20",
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
        "/donhang/nhangiao/:trang&&:t1&&:t2&&:mangh", async (req, res) =>{
            return await sql.query(
                'select * from don_hang where trang_thai >= '+req.params.t1 +' and trang_thai <= '+req.params.t2 + ' and chon_nguoi_giao ="'+req.params.mangh+'" order by ngay_dat_hang desc limit  '+(-20 +req.params.trang*20) + ",20",
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
                'select don_hang.ma_dh,don_hang.anh,don_hang.ma_kh,don_hang.ma_pgg,don_hang.ma_nv,don_hang.ngay_dat_hang,don_hang.hinh_thuc_thanh_toan,don_hang.tong_tien,don_hang.nguoi_nhan,don_hang.dia_chi_giao,don_hang.trang_thai,giao_hang.ma_dh,giao_hang.ma_ngh from don_hang left join giao_hang on don_hang.ma_dh=giao_hang.ma_dh where don_hang.trang_thai >= '+req.params.t1 +' and don_hang.trang_thai <= '+req.params.t2 + ' and giao_hang.ma_ngh ="'+req.params.mangh+'" group by don_hang.ma_dh order by don_hang.ngay_dat_hang desc limit  '+(-20 +req.params.trang*20) + ",20",
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
        "/donhang/addctdh/:mactsp&&:madh&&:sl&&:gia", async (req, res) =>{
            return await sql.query(
                'INSERT INTO chi_tiet_dh (`ma_ctsp`,`ma_dh`,`gia`,`so_luong`) VALUES ("'+req.params.mactsp+'","'+req.params.madh+'","'+req.params.gia+'","'+req.params.sl+'")',
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
        "/donhang/huydon/:id&&:manv", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = 5, ma_nv="'+req.params.manv+'" where ma_dh =' + "'"+ req.params.id  +"'",
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
        "/donhang/huydonnd/:id", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = 5  where ma_dh =' + "'"+ req.params.id  +"'",
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
        "/donhang/tuchoigiaohang/:madh", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET chon_nguoi_giao = null  where ma_dh =' + "'"+ req.params.madh  +"'",
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
        "/donhang/daxacnhan/:madh&&:manv", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET trang_thai = 1,ma_nv = "'+req.params.manv+'" where ma_dh = "'+req.params.madh+'"',
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
        "/donhang/hoantien/:id", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET hoan_tien = 1 where ma_dh = "'+req.params.id+'"',
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
      app.get(
        "/thongtinnguoigiaohang/list", async (req, res) =>{
            return await sql.query(
                'select * from nguoi_giao_hang where ma_ngh != "NGH1"',
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
        "/chonngh/:madh&&:ngh", async (req, res) =>{
            return await sql.query(
                'UPDATE `don_hang` SET chon_nguoi_giao= "'+req.params.ngh+'" where ma_dh = "'+req.params.madh+'"',
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