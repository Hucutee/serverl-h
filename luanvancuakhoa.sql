-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 15, 2022 lúc 05:06 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `luanvan`
--

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `a`
-- (See below for the actual view)
--
CREATE TABLE `a` (
`id_sp` varchar(100)
,`ten_sp` varchar(100)
,`thong_tin_sp` varchar(255)
,`id_th` varchar(100)
,`id_lsp` varchar(100)
,`gia_ban_sp` int(11)
,`gia_km` int(11)
,`gia_da_km` decimal(25,4)
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_hdn`
--

CREATE TABLE `chi_tiet_hdn` (
  `gia_nhap` int(11) NOT NULL,
  `so_luong_nhap` int(11) NOT NULL,
  `id_ms` varchar(100) NOT NULL,
  `id_kt` varchar(100) NOT NULL,
  `id_hdn` varchar(100) NOT NULL,
  `id_sp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_hdn`
--

INSERT INTO `chi_tiet_hdn` (`gia_nhap`, `so_luong_nhap`, `id_ms`, `id_kt`, `id_hdn`, `id_sp`) VALUES
(150000, 20, 'MS02', 'KT06', 'HDN01', 'SP01'),
(150000, 20, 'MS02', 'KT07', 'HDN01', 'SP01'),
(150000, 20, 'MS02', 'KT08', 'HDN01', 'SP01'),
(150000, 20, 'MS04', 'KT05', 'HDN01', 'SP01'),
(150000, 20, 'MS03', 'KT05', 'HDN02', 'SP02'),
(150000, 20, 'MS03', 'KT06', 'HDN02', 'SP02'),
(150000, 20, 'MS03', 'KT07', 'HDN02', 'SP02'),
(150000, 20, 'MS03', 'KT08', 'HDN02', 'SP02'),
(100000, 25, 'MS04', 'KT05', 'HDN03', 'SP03'),
(100000, 25, 'MS04', 'KT06', 'HDN03', 'SP03'),
(100000, 25, 'MS04', 'KT07', 'HDN03', 'SP03'),
(100000, 25, 'MS04', 'KT08', 'HDN03', 'SP03'),
(200000, 20, 'MS01', 'KT05', 'HDN04', 'SP04'),
(200000, 20, 'MS01', 'KT06', 'HDN04', 'SP04'),
(200000, 20, 'MS01', 'KT07', 'HDN04', 'SP04'),
(200000, 25, 'MS01', 'KT05', 'HDN05', 'SP04'),
(200000, 25, 'MS01', 'KT06', 'HDN05', 'SP04'),
(200000, 25, 'MS01', 'KT07', 'HDN05', 'SP04'),
(100000, 20, 'MS02', 'KT06', 'HDN06', 'SP01'),
(200000, 20, 'MS01', 'KT05', 'HDN07', 'SP04'),
(200000, 10, 'MS04', 'KT05', 'HDN08', 'SP05'),
(200000, 10, 'MS04', 'KT06', 'HDN08', 'SP05'),
(200000, 10, 'MS04', 'KT07', 'HDN08', 'SP05'),
(200000, 10, 'MS01', 'KT05', 'HDN09', 'SP07'),
(200000, 10, 'MS04', 'KT05', 'HDN010', 'SP08'),
(200000, 23, 'MS04', 'KT05', 'HDN012', 'SP08'),
(200000, 23, 'MS04', 'KT06', 'HDN012', 'SP08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_hdx`
--

CREATE TABLE `chi_tiet_hdx` (
  `so_luong_xuat` int(11) NOT NULL,
  `hinh_anh` varchar(255) NOT NULL,
  `id_sp` varchar(100) NOT NULL,
  `id_hdx` varchar(100) NOT NULL,
  `id_ms` varchar(100) NOT NULL,
  `id_kt` varchar(100) NOT NULL,
  `ten_ms` varchar(100) NOT NULL,
  `ten_kt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_hdx`
--

INSERT INTO `chi_tiet_hdx` (`so_luong_xuat`, `hinh_anh`, `id_sp`, `id_hdx`, `id_ms`, `id_kt`, `ten_ms`, `ten_kt`) VALUES
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX01', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX02', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX03', 'MS03', 'KT06', 'Vàng', '40'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX04', 'MS03', 'KT05', 'Vàng', '39'),
(1, '\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03', 'HDX05', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX06', 'MS03', 'KT06', 'Vàng', '40'),
(1, '\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04', 'HDX07', 'MS01', 'KT05', 'Hồng', '39'),
(1, '\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04', 'HDX07', 'MS01', 'KT07', 'Hồng', '41'),
(4, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX08', 'MS03', 'KT07', 'Vàng', '41'),
(1, '\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04', 'HDX09', 'MS01', 'KT06', 'Hồng', '40'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX010', 'MS03', 'KT05', 'Vàng', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX011', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX012', 'MS02', 'KT06', 'Đỏ', '40'),
(2, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX013', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX014', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX015', 'MS04', 'KT05', 'Xanh dương', '39'),
(3, '\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04', 'HDX016', 'MS01', 'KT05', 'Hồng', '39'),
(1, '\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04', 'HDX017', 'MS01', 'KT05', 'Hồng', '39'),
(1, '\\asset\\image\\1651125429052__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP05', 'HDX018', 'MS04', 'KT07', 'Xanh dương', '41'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX018', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03', 'HDX019', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX020', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651125947341__MG_7083.jpg', 'SP08', 'HDX021', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX022', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03', 'HDX023', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651125947341__MG_7083.jpg', 'SP08', 'HDX024', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03', 'HDX025', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX025', 'MS02', 'KT06', 'Đỏ', '40'),
(1, '\\asset\\image\\1651125789566__MG_7089.jpg', 'SP07', 'HDX026', 'MS01', 'KT05', 'Hồng', '39'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX027', 'MS03', 'KT05', 'Vàng', '39'),
(2, '\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03', 'HDX027', 'MS04', 'KT07', 'Xanh dương', '41'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX028', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX029', 'MS03', 'KT08', 'Vàng', '42'),
(1, '\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02', 'HDX030', 'MS03', 'KT08', 'Vàng', '42'),
(2, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX031', 'MS04', 'KT05', 'Xanh dương', '39'),
(1, '\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01', 'HDX032', 'MS04', 'KT05', 'Xanh dương', '39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_sp`
--

CREATE TABLE `chi_tiet_sp` (
  `so_luong_sp` int(11) NOT NULL DEFAULT 0,
  `id_sp` varchar(100) NOT NULL,
  `id_ms` varchar(100) NOT NULL,
  `id_kt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_sp`
--

INSERT INTO `chi_tiet_sp` (`so_luong_sp`, `id_sp`, `id_ms`, `id_kt`) VALUES
(16, 'SP01', 'MS04', 'KT05'),
(31, 'SP01', 'MS02', 'KT06'),
(20, 'SP01', 'MS02', 'KT07'),
(20, 'SP01', 'MS02', 'KT08'),
(16, 'SP02', 'MS03', 'KT05'),
(15, 'SP02', 'MS03', 'KT06'),
(16, 'SP02', 'MS03', 'KT07'),
(20, 'SP02', 'MS03', 'KT08'),
(19, 'SP03', 'MS04', 'KT05'),
(25, 'SP03', 'MS04', 'KT06'),
(23, 'SP03', 'MS04', 'KT07'),
(25, 'SP03', 'MS04', 'KT08'),
(61, 'SP04', 'MS01', 'KT05'),
(44, 'SP04', 'MS01', 'KT06'),
(45, 'SP04', 'MS01', 'KT07'),
(10, 'SP05', 'MS04', 'KT05'),
(10, 'SP05', 'MS04', 'KT06'),
(9, 'SP05', 'MS04', 'KT07'),
(0, 'SP06', 'MS02', 'KT05'),
(0, 'SP06', 'MS02', 'KT06'),
(0, 'SP06', 'MS02', 'KT07'),
(9, 'SP07', 'MS01', 'KT05'),
(0, 'SP07', 'MS01', 'KT06'),
(0, 'SP07', 'MS01', 'KT07'),
(31, 'SP08', 'MS04', 'KT05'),
(23, 'SP08', 'MS04', 'KT06'),
(0, 'SP08', 'MS04', 'KT07'),
(0, 'SP09', 'MS04', 'KT06'),
(0, 'SP09', 'MS04', 'KT07'),
(0, 'SP09', 'MS04', 'KT08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuc_vu`
--

CREATE TABLE `chuc_vu` (
  `id_cv` varchar(100) NOT NULL,
  `ten_cv` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chuc_vu`
--

INSERT INTO `chuc_vu` (`id_cv`, `ten_cv`) VALUES
('CV01', 'Quản lý'),
('CV02', 'Nhân viên'),
('CV03', 'Nhân viên kho'),
('CV04', 'Giao hàng');

--
-- Bẫy `chuc_vu`
--
DELIMITER $$
CREATE TRIGGER `them_chuc_vu` BEFORE INSERT ON `chuc_vu` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("CV0",SUBSTRING(id_cv,4)+1) FROM chuc_vu ORDER BY SUBSTRING(id_cv,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_cv = 'CV01';
ELSE SET NEW.id_cv = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danh_gia`
--

CREATE TABLE `danh_gia` (
  `id_dg` int(11) NOT NULL,
  `so_sao` int(11) NOT NULL,
  `noi_dung_dg` varchar(255) NOT NULL,
  `ngay_dg` date NOT NULL,
  `id_hdx` varchar(100) NOT NULL,
  `ma_sp` varchar(100) NOT NULL,
  `ma_ms` varchar(100) NOT NULL,
  `ma_kt` varchar(100) NOT NULL,
  `trang_thai_dg` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danh_gia`
--

INSERT INTO `danh_gia` (`id_dg`, `so_sao`, `noi_dung_dg`, `ngay_dg`, `id_hdx`, `ma_sp`, `ma_ms`, `ma_kt`, `trang_thai_dg`) VALUES
(32, 5, 'good', '2022-05-17', 'HDX024', 'SP08', 'MS04', 'KT05', 0),
(33, 5, 'Rất đẹp', '2022-05-17', 'HDX025', 'SP03', 'MS04', 'KT05', 0),
(34, 5, 'Quá tuyệt', '2022-05-17', 'HDX025', 'SP01', 'MS02', 'KT06', 0),
(35, 4, 'Giày đẹp, mà giao hàng chậm quá', '2022-05-17', 'HDX026', 'SP07', 'MS01', 'KT05', 0),
(36, 4, 'Sản phẩm rất đẹp, nhưng hộp hơi bị móp', '2022-05-17', 'HDX027', 'SP02', 'MS03', 'KT05', 0),
(37, 5, 'Giày rất đẹp', '2022-05-24', 'HDX028', 'SP01', 'MS04', 'KT05', 0),
(38, 1, 'Giày xấu', '2022-05-24', 'HDX01', 'SP01', 'MS04', 'KT05', 1),
(39, 5, 'Rất tốt, Uy tín', '2022-05-24', 'HDX02', 'SP01', 'MS02', 'KT06', 0),
(40, 5, 'Giày rất đẹp', '2022-05-24', 'HDX03', 'SP02', 'MS03', 'KT06', 0),
(41, 5, 'Vận chuyển nhanh, sản phẩm rất đẹp', '2022-05-24', 'HDX09', 'SP04', 'MS01', 'KT06', 0),
(42, 5, 'Very good', '2022-05-24', 'HDX030', 'SP02', 'MS03', 'KT08', 0),
(43, 5, 'rất tốt', '2022-05-25', 'HDX031', 'SP01', 'MS04', 'KT05', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dia_chi`
--

CREATE TABLE `dia_chi` (
  `id_dc` varchar(100) NOT NULL,
  `ten_kh` varchar(20) NOT NULL,
  `dia_chi_kh` varchar(100) NOT NULL,
  `sdt_kh` varchar(10) NOT NULL,
  `id_kh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dia_chi`
--

INSERT INTO `dia_chi` (`id_dc`, `ten_kh`, `dia_chi_kh`, `sdt_kh`, `id_kh`) VALUES
('DC01', 'Đào Minh Khoa', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', '0398423952', 'KH01'),
('DC02', 'Đào Minh Khoa', 'Số nhà 483, D2, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', '0398423952', 'KH05'),
('DC03', 'Đào Minh Khoa', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', '039842352', 'KH03'),
('DC04', 'Đào Minh Quyết', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', '0398423952', 'KH01'),
('DC05', 'Đào Minh Khoa', '69/68, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', '0398423952', 'KH03'),
('DC06', 'Đào Minh Khoa', 'Số nhà 483, D2, Phường An Thới, Quận Bình Thuỷ, Thành phố Cần Thơ', '0398423952', 'KH01'),
('DC07', 'Đào Minh Khoa', 'Số nhà 483, D2, Xã Vạn Phúc, Huyện Thanh Trì, Thành phố Hà Nội', '0398423952', 'KH01');

--
-- Bẫy `dia_chi`
--
DELIMITER $$
CREATE TRIGGER `them_dia_chi` BEFORE INSERT ON `dia_chi` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("DC0",SUBSTRING(id_dc,4)+1) FROM dia_chi ORDER BY SUBSTRING(id_dc,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_dc = 'DC01';
ELSE SET NEW.id_dc = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giao_hang`
--

CREATE TABLE `giao_hang` (
  `id_ngh` varchar(100) NOT NULL,
  `id_nv` varchar(100) NOT NULL,
  `ngay_gh` date DEFAULT NULL,
  `trang_thai_gh` varchar(50) NOT NULL DEFAULT '0000-00-00',
  `ghi_chu` varchar(100) NOT NULL,
  `id_hdx` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giao_hang`
--

INSERT INTO `giao_hang` (`id_ngh`, `id_nv`, `ngay_gh`, `trang_thai_gh`, `ghi_chu`, `id_hdx`) VALUES
('NGH01', 'NV06', '2022-04-28', 'Đã giao hàng', '', 'HDX01'),
('NGH010', 'NV06', '2022-05-03', 'Hoàn hàng', 'boom', 'HDX011'),
('NGH011', 'NV06', '2022-05-03', 'Hoàn hàng', 'boom', 'HDX013'),
('NGH012', 'NV06', '2022-05-03', 'Đã giao hàng', '', 'HDX012'),
('NGH013', 'NV06', '2022-05-03', 'Hoàn hàng', 'boom', 'HDX015'),
('NGH014', 'NV06', '2022-05-04', 'Đã giao hàng', '', 'HDX016'),
('NGH015', 'NV06', '2022-05-05', 'Đã giao hàng', '', 'HDX017'),
('NGH016', 'NV06', '2022-05-06', 'Đã giao hàng', '', 'HDX018'),
('NGH017', 'NV06', '2022-05-07', 'Đã giao hàng', '', 'HDX019'),
('NGH018', 'NV06', '2022-05-08', 'Hoàn hàng', 'boom', 'HDX020'),
('NGH019', 'NV07', '2022-05-14', 'Đã giao hàng', '', 'HDX021'),
('NGH02', 'NV06', '2022-04-30', 'Đã giao hàng', '', 'HDX02'),
('NGH020', 'NV07', '2022-05-16', 'Đã giao hàng', '', 'HDX024'),
('NGH021', 'NV06', '2022-05-16', 'Đã giao hàng', '', 'HDX025'),
('NGH022', 'NV06', '2022-05-17', 'Đã giao hàng', '', 'HDX026'),
('NGH023', 'NV06', '2022-05-17', 'Đã giao hàng', '', 'HDX027'),
('NGH024', 'NV011', '2022-05-24', 'Đã giao hàng', '', 'HDX028'),
('NGH025', 'NV011', '2022-05-24', 'Đã giao hàng', '', 'HDX030'),
('NGH026', 'NV011', '2022-05-25', 'Đã giao hàng', '', 'HDX031'),
('NGH03', 'NV06', '2022-04-30', 'Đã giao hàng', '', 'HDX03'),
('NGH04', 'NV06', '2022-04-24', 'Đã giao hàng', '', 'HDX04'),
('NGH05', 'NV06', '2022-04-29', 'Đã giao hàng', '', 'HDX05'),
('NGH06', 'NV06', '2022-05-01', 'Đã giao hàng', '', 'HDX08'),
('NGH07', 'NV06', '2022-05-02', 'Đã giao hàng', '', 'HDX06'),
('NGH08', 'NV06', '2022-06-01', 'Đã giao hàng', '', 'HDX09'),
('NGH09', 'NV06', '2022-06-01', 'Đã giao hàng', '', 'HDX010');

--
-- Bẫy `giao_hang`
--
DELIMITER $$
CREATE TRIGGER `them_nguoi_giao_hang` BEFORE INSERT ON `giao_hang` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("NGH0",SUBSTRING(id_ngh,5)+1) FROM giao_hang ORDER BY SUBSTRING(id_ngh,5)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_ngh = 'NGH01';
ELSE SET NEW.id_ngh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinh_anh`
--

CREATE TABLE `hinh_anh` (
  `id_ha` varchar(100) NOT NULL,
  `hinh_anh_sp` varchar(255) NOT NULL,
  `id_sp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hinh_anh`
--

INSERT INTO `hinh_anh` (`id_ha`, `hinh_anh_sp`, `id_sp`) VALUES
('HA01', 'views\\public\\asset\\image\\1651124482115__z2115186104115_6fae68cc7e828689c6fa3ed3ba4bfd37.jpg', 'SP01'),
('HA011', 'views\\public\\asset\\image\\1651124896772__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP03'),
('HA012', 'views\\public\\asset\\image\\1651124896777__z2075884036987_29741a946b4a0638f2c78535ec527142.jpg', 'SP03'),
('HA013', 'views\\public\\asset\\image\\1651124897078__z2075884054653_a0297d5d9a54c7799d18d0f805078eb6.jpg', 'SP03'),
('HA014', 'views\\public\\asset\\image\\1651124897084__z2075884061520_37cd984e7a8d2e559b1493fcf280867d.jpg', 'SP03'),
('HA015', 'views\\public\\asset\\image\\1651124897094__z2075884338697_a0f1e6e9f92a15565411c6b449e37446.jpg', 'SP03'),
('HA016', 'views\\public\\asset\\image\\1651125037040__z2344033733207_41be6d9de4c0a742dc0fe5931d1cde64-scaled.jpg', 'SP04'),
('HA017', 'views\\public\\asset\\image\\1651125037044__z2344034623842_cd86893e88409c15989bfec0989fc717-scaled.jpg', 'SP04'),
('HA018', 'views\\public\\asset\\image\\1651125037047__z2344035133762_4be64bfcf37e4c4e4aa59f5bf500f544-scaled.jpg', 'SP04'),
('HA019', 'views\\public\\asset\\image\\1651125037353__z2344035644984_21abccc1c22544f979f93e45dd4dc653-scaled.jpg', 'SP04'),
('HA02', 'views\\public\\asset\\image\\1651124482129__z2115186104621_f864a82a410ec61caa59285a3153aa02.jpg', 'SP01'),
('HA020', 'views\\public\\asset\\image\\1651125037357__z2344036247704_f37c2a7e0f83f5062c21d7d9e8e6835a-scaled.jpg', 'SP04'),
('HA021', 'views\\public\\asset\\image\\1651125315749__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg', 'SP02'),
('HA022', 'views\\public\\asset\\image\\1651125315753__z2291635585201_99450e3fc8b79374a790c7b36819a68e-scaled.jpg', 'SP02'),
('HA023', 'views\\public\\asset\\image\\1651125315756__z2291635588906_8859a0611f991a91342de49c7c47ff7f-scaled.jpg', 'SP02'),
('HA024', 'views\\public\\asset\\image\\1651125429052__z2075884004976_16728691fbb79fe7e21d9a3c75ea483d.jpg', 'SP05'),
('HA025', 'views\\public\\asset\\image\\1651125429056__z2075884036987_29741a946b4a0638f2c78535ec527142.jpg', 'SP05'),
('HA026', 'views\\public\\asset\\image\\1651125429061__z2075884054653_a0297d5d9a54c7799d18d0f805078eb6.jpg', 'SP05'),
('HA027', 'views\\public\\asset\\image\\1651125429068__z2075884061520_37cd984e7a8d2e559b1493fcf280867d.jpg', 'SP05'),
('HA028', 'views\\public\\asset\\image\\1651125429074__z2075884338697_a0f1e6e9f92a15565411c6b449e37446.jpg', 'SP05'),
('HA029', 'views\\public\\asset\\image\\1651125586578__MG_2141.jpg', 'SP06'),
('HA03', 'views\\public\\asset\\image\\1651124482143__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75.jpg', 'SP01'),
('HA030', 'views\\public\\asset\\image\\1651125586579__MG_2142.jpg', 'SP06'),
('HA031', 'views\\public\\asset\\image\\1651125586580__MG_2143.jpg', 'SP06'),
('HA032', 'views\\public\\asset\\image\\1651125586581__MG_2144.jpg', 'SP06'),
('HA033', 'views\\public\\asset\\image\\1651125586581__MG_2145.jpg', 'SP06'),
('HA034', 'views\\public\\asset\\image\\1651125789566__MG_7089.jpg', 'SP07'),
('HA035', 'views\\public\\asset\\image\\1651125789572__MG_7090.jpg', 'SP07'),
('HA036', 'views\\public\\asset\\image\\1651125789580__MG_7091.jpg', 'SP07'),
('HA037', 'views\\public\\asset\\image\\1651125789585__MG_7092.jpg', 'SP07'),
('HA038', 'views\\public\\asset\\image\\1651125789591__MG_7094.jpg', 'SP07'),
('HA039', 'views\\public\\asset\\image\\1651125947341__MG_7083.jpg', 'SP08'),
('HA04', 'views\\public\\asset\\image\\1651124482168__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75-150x150.jpg', 'SP01'),
('HA040', 'views\\public\\asset\\image\\1651125947647__MG_7084.jpg', 'SP08'),
('HA041', 'views\\public\\asset\\image\\1651125947653__MG_7085.jpg', 'SP08'),
('HA042', 'views\\public\\asset\\image\\1651125947660__MG_7086.jpg', 'SP08'),
('HA043', 'views\\public\\asset\\image\\1651125947668__MG_7088.jpg', 'SP08'),
('HA044', 'views\\public\\asset\\image\\1652752364828__MG_4989.jpg', 'SP09'),
('HA045', 'views\\public\\asset\\image\\1652752364829__MG_4991.jpg', 'SP09'),
('HA046', 'views\\public\\asset\\image\\1652752364833__MG_4992.jpg', 'SP09'),
('HA047', 'views\\public\\asset\\image\\1652752364834__MG_4993.jpg', 'SP09'),
('HA048', 'views\\public\\asset\\image\\1652752364835__MG_4994.jpg', 'SP09'),
('HA05', 'views\\public\\asset\\image\\1651124482169__z2115186104964_3a9a62f64349c7a65ceba65b1e905ee1.jpg', 'SP01'),
('HA07', 'views\\public\\asset\\image\\1651124709748__z2291635578513_6fb2bcd7acc31a049683fdb77cfdd480-scaled.jpg', 'SP02'),
('HA08', 'views\\public\\asset\\image\\1651124709754__z2291635581460_bdb94e710df15755dba7aaa3098029b1-scaled.jpg', 'SP02');

--
-- Bẫy `hinh_anh`
--
DELIMITER $$
CREATE TRIGGER `them_hinh_anh` BEFORE INSERT ON `hinh_anh` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("HA0",SUBSTRING(id_ha,4)+1) FROM hinh_anh ORDER BY SUBSTRING(id_ha,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_ha = 'HA01';
ELSE SET NEW.id_ha = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinh_anh_danh_gia`
--

CREATE TABLE `hinh_anh_danh_gia` (
  `id_dg` int(11) NOT NULL,
  `hinh_anh_dg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hinh_anh_danh_gia`
--

INSERT INTO `hinh_anh_danh_gia` (`id_dg`, `hinh_anh_dg`) VALUES
(32, 'views\\public\\asset\\imageReview\\1652759257403__MG_4991.jpg'),
(32, 'views\\public\\asset\\imageReview\\1652759257405__MG_4992.jpg'),
(33, 'views\\public\\asset\\imageReview\\1652760526720__MG_2141 - Copy.jpg'),
(33, 'views\\public\\asset\\imageReview\\1652760526722__z2075884036987_29741a946b4a0638f2c78535ec527142.jpg'),
(33, 'views\\public\\asset\\imageReview\\1652760526738__z2075884054653_a0297d5d9a54c7799d18d0f805078eb6.jpg'),
(34, 'views\\public\\asset\\imageReview\\1652760769367__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75.jpg'),
(34, 'views\\public\\asset\\imageReview\\1652760769379__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75-150x150.jpg'),
(35, 'views\\public\\asset\\imageReview\\1652763053217__MG_7089.jpg'),
(35, 'views\\public\\asset\\imageReview\\1652763053223__MG_7090.jpg'),
(36, 'views\\public\\asset\\imageReview\\1652785633497__z2115186104621_f864a82a410ec61caa59285a3153aa02.jpg'),
(36, 'views\\public\\asset\\imageReview\\1652785633820__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75.jpg'),
(36, 'views\\public\\asset\\imageReview\\1652785633836__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75-150x150.jpg'),
(37, 'views\\public\\asset\\imageReview\\1653377770462__z2115186104621_f864a82a410ec61caa59285a3153aa02.jpg'),
(37, 'views\\public\\asset\\imageReview\\1653377770475__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75.jpg'),
(37, 'views\\public\\asset\\imageReview\\1653377770486__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75-150x150.jpg'),
(38, 'views\\public\\asset\\imageReview\\1653377933517__z2115186104621_f864a82a410ec61caa59285a3153aa02.jpg'),
(38, 'views\\public\\asset\\imageReview\\1653377933526__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75.jpg'),
(38, 'views\\public\\asset\\imageReview\\1653377933535__z2115186104622_a7ca4df682ff7d87e37d15bacb598b75-150x150.jpg'),
(39, 'views\\public\\asset\\imageReview\\1653377996132__MG_2141 - Copy.jpg'),
(39, 'views\\public\\asset\\imageReview\\1653377996133__MG_2141.jpg'),
(39, 'views\\public\\asset\\imageReview\\1653377996134__MG_2142 - Copy.jpg'),
(40, 'views\\public\\asset\\imageReview\\1653378112318__z2291635571369_51d6a483200430ab05378c7991dce7b9-scaled.jpg'),
(40, 'views\\public\\asset\\imageReview\\1653378112321__z2291635574804_53cb4f79d5300da1f852db4ba55d65d9-scaled.jpg'),
(40, 'views\\public\\asset\\imageReview\\1653378112325__z2291635578513_6fb2bcd7acc31a049683fdb77cfdd480-scaled.jpg'),
(41, 'views\\public\\asset\\imageReview\\1653378245696__MG_2141 - Copy.jpg'),
(41, 'views\\public\\asset\\imageReview\\1653378245697__MG_2141.jpg'),
(41, 'views\\public\\asset\\imageReview\\1653378245697__MG_2142 - Copy.jpg'),
(42, 'views\\public\\asset\\imageReview\\1653407353091__MG_2141 - Copy.jpg'),
(42, 'views\\public\\asset\\imageReview\\1653407353096__MG_2143.jpg'),
(42, 'views\\public\\asset\\imageReview\\1653407353099__MG_2145.jpg'),
(43, 'views\\public\\asset\\imageReview\\1653440478408__MG_4336.jpg'),
(43, 'views\\public\\asset\\imageReview\\1653440478410__MG_4337.jpg'),
(43, 'views\\public\\asset\\imageReview\\1653440478412__MG_4338.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoa_don_nhap`
--

CREATE TABLE `hoa_don_nhap` (
  `id_hdn` varchar(100) NOT NULL,
  `ngay_lap_hdn` date NOT NULL,
  `tong_tien_hdn` int(11) NOT NULL,
  `id_nv` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoa_don_nhap`
--

INSERT INTO `hoa_don_nhap` (`id_hdn`, `ngay_lap_hdn`, `tong_tien_hdn`, `id_nv`) VALUES
('HDN01', '2022-04-22', 12000000, 'NV08'),
('HDN010', '2022-05-14', 2000000, 'NV08'),
('HDN011', '2022-05-16', 42626, 'NV08'),
('HDN012', '2022-05-18', 9200000, 'NV08'),
('HDN02', '2022-04-24', 12000000, 'NV08'),
('HDN03', '2022-04-25', 10000000, 'NV08'),
('HDN04', '2022-04-25', 12000000, 'NV08'),
('HDN05', '2022-04-28', 15000000, 'NV08'),
('HDN06', '2022-04-29', 2000000, 'NV08'),
('HDN07', '2022-04-27', 4000000, 'NV08'),
('HDN08', '2022-04-30', 6000000, 'NV08'),
('HDN09', '2022-05-08', 2000000, 'NV08');

--
-- Bẫy `hoa_don_nhap`
--
DELIMITER $$
CREATE TRIGGER `them_hoa_don_nhap` BEFORE INSERT ON `hoa_don_nhap` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("HDN0",SUBSTRING(id_hdn,5)+1) FROM hoa_don_nhap ORDER BY SUBSTRING(id_hdn,5)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_hdn = 'HDN01';
ELSE SET NEW.id_hdn = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoa_don_xuat`
--

CREATE TABLE `hoa_don_xuat` (
  `id_hdx` varchar(100) NOT NULL,
  `ten_kh` varchar(50) NOT NULL,
  `so_dien_thoai` varchar(10) NOT NULL,
  `tong_tien_hdx` int(11) NOT NULL,
  `ngay_lap_hdx` date NOT NULL,
  `trang_thai` varchar(50) NOT NULL,
  `tien_vc` int(11) NOT NULL,
  `hinh_thuc_thanh_toan` varchar(20) NOT NULL,
  `dia_chi_hdx` varchar(100) NOT NULL,
  `id_kh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoa_don_xuat`
--

INSERT INTO `hoa_don_xuat` (`id_hdx`, `ten_kh`, `so_dien_thoai`, `tong_tien_hdx`, `ngay_lap_hdx`, `trang_thai`, `tien_vc`, `hinh_thuc_thanh_toan`, `dia_chi_hdx`, `id_kh`) VALUES
('HDX01', 'Dao Minh Khoa', '0398423952', 580000, '2022-04-28', 'Đã giao hàng', 30000, 'offline', '30/4, Hung Loi, Ninh Kieu, Can Tho', 'KH01'),
('HDX010', 'Đào Minh Khoa', '0398423952', 1030000, '2022-05-03', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX011', 'Đào Minh Khoa', '0398423952', 525000, '2022-05-03', 'Hoàn hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX012', 'Đào Minh Khoa', '0398423952', 525000, '2022-05-03', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX013', 'Đào Minh Khoa', '0398423952', 1020000, '2022-05-03', 'Hoàn hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX014', 'Đào Minh Khoa', '0398423952', 525000, '2022-05-03', 'Hủy', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX015', 'Đào Minh Khoa', '0398423952', 525000, '2022-05-03', 'Hoàn hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX016', 'Đào Minh Khoa', '0398423952', 2550000, '2022-05-04', 'Đã giao hàng', 0, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX017', 'Đào Minh Khoa', '0398423952', 880000, '2022-05-06', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX018', 'Đào Minh Khoa', '0398423952', 1260000, '2022-05-06', 'Đã giao hàng', 0, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX019', 'Đào Minh Khoa', '0398423952', 710000, '2022-05-07', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX02', 'Dao Minh Khoa', '0398423952', 580000, '2022-04-23', 'Đã giao hàng', 30000, 'offline', '30/4, Hung Loi, Ninh Kieu, Can Tho', 'KH01'),
('HDX020', 'Đào Minh Khoa', '0398423952', 525000, '2022-05-08', 'Hoàn hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX021', 'Đào Minh Khoa', '0398423952', 880000, '2022-05-14', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH05'),
('HDX022', 'Đào Minh Khoa', '039842352', 525000, '2022-05-16', 'Hủy', 30000, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX023', 'Đào Minh Khoa', '039842352', 710000, '2022-05-16', 'Đang xử lý', 30000, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX024', 'Đào Minh Khoa', '039842352', 880000, '2022-05-16', 'Đã giao hàng', 30000, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX025', 'Đào Minh Khoa', '039842352', 1175000, '2022-05-16', 'Đã giao hàng', 0, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX026', 'Đào Minh Khoa', '039842352', 1500000, '2022-05-17', 'Đã giao hàng', 0, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX027', 'Đào Minh Khoa', '039842352', 2260000, '2022-05-17', 'Đã giao hàng', 0, 'offline', '69/68, đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Thành phố Cần Thơ', 'KH03'),
('HDX028', 'Đào Minh Quyết', '0398423952', 525000, '2022-05-24', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', 'KH01'),
('HDX029', 'Đào Minh Quyết', '0398423952', 930000, '2022-05-24', 'Đang xử lý', 30000, 'online', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', 'KH01'),
('HDX03', 'Dao Minh Khoa', '0398423952', 1030000, '2022-04-23', 'Đã giao hàng', 30000, 'offline', '30/4, Hung Loi, Ninh Kieu, Can Tho', 'KH01'),
('HDX030', 'Đào Minh Quyết', '0398423952', 1800000, '2022-05-24', 'Đã giao hàng', 0, 'online', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', 'KH01'),
('HDX031', 'Đào Minh Quyết', '0398423952', 1020000, '2022-05-25', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', 'KH01'),
('HDX032', 'Đào Minh Quyết', '0398423952', 525000, '2022-05-25', 'Đang xử lý', 30000, 'online', 'Số nhà 483, D2, Xã Bằng Vân, Huyện Ngân Sơn, Tỉnh Bắc Kạn', 'KH01'),
('HDX04', 'Đào Minh Khoa', '0398423952', 1030000, '2022-04-29', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX05', 'Đào Minh Khoa', '0398423952', 880000, '2022-04-29', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX06', 'Đào Minh Khoa', '0398423952', 1030000, '2022-04-29', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX07', 'Đào Minh Khoa', '0398423952', 1700000, '2022-04-29', 'Hủy', 0, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX08', 'Đào Minh Khoa', '0398423952', 4000000, '2022-04-30', 'Đã giao hàng', 0, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01'),
('HDX09', 'Đào Minh Khoa', '0398423952', 880000, '2022-04-30', 'Đã giao hàng', 30000, 'offline', 'Số nhà 483, D2, Xã Lý Bôn, Huyện Bảo Lâm, Tỉnh Cao Bằng', 'KH01');

--
-- Bẫy `hoa_don_xuat`
--
DELIMITER $$
CREATE TRIGGER `them_hoa_don_xuat` BEFORE INSERT ON `hoa_don_xuat` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("HDX0",SUBSTRING(id_hdx,5)+1) FROM hoa_don_xuat ORDER BY SUBSTRING(id_hdx,5)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_hdx = 'HDX01';
ELSE SET NEW.id_hdx = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khach_hang`
--

CREATE TABLE `khach_hang` (
  `id_kh` varchar(100) NOT NULL,
  `email_kh` varchar(100) NOT NULL,
  `mat_khau_kh` varchar(255) NOT NULL,
  `ngay_tao_tk` date NOT NULL,
  `trang_thai_kh` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khach_hang`
--

INSERT INTO `khach_hang` (`id_kh`, `email_kh`, `mat_khau_kh`, `ngay_tao_tk`, `trang_thai_kh`) VALUES
('KH01', 'daominhkhoa1082000@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '2022-02-24', 0),
('KH03', 'mihkhoa2020@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '2022-03-15', 0),
('KH04', 'nhanb1809272@student.ctu.edu.vn', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '2022-03-23', 0),
('KH05', 'mihkhoa.dev@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '2022-05-14', 0);

--
-- Bẫy `khach_hang`
--
DELIMITER $$
CREATE TRIGGER `them_khach_hang` BEFORE INSERT ON `khach_hang` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("KH0",SUBSTRING(id_kh,4)+1) FROM khach_hang ORDER BY SUBSTRING(id_kh,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_kh = 'KH01';
ELSE SET NEW.id_kh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khuyen_mai`
--

CREATE TABLE `khuyen_mai` (
  `id_km` varchar(100) NOT NULL,
  `gia_km` int(11) NOT NULL,
  `id_sp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khuyen_mai`
--

INSERT INTO `khuyen_mai` (`id_km`, `gia_km`, `id_sp`) VALUES
('KM01', 10, 'SP01'),
('KM02', 20, 'SP03'),
('KM03', 10, 'SP05'),
('KM04', 10, 'SP02');

--
-- Bẫy `khuyen_mai`
--
DELIMITER $$
CREATE TRIGGER `them_ma_khuyen_mai` BEFORE INSERT ON `khuyen_mai` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("KM0",SUBSTRING(id_km,4)+1) FROM khuyen_mai ORDER BY SUBSTRING(id_km,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_km = 'KM01';
ELSE SET NEW.id_km = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `kich_thuoc`
--

CREATE TABLE `kich_thuoc` (
  `id_kt` varchar(100) NOT NULL,
  `ten_kt` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `kich_thuoc`
--

INSERT INTO `kich_thuoc` (`id_kt`, `ten_kt`) VALUES
('KT010', '44'),
('KT04', '38'),
('KT05', '39'),
('KT06', '40'),
('KT07', '41'),
('KT08', '42'),
('KT09', '43');

--
-- Bẫy `kich_thuoc`
--
DELIMITER $$
CREATE TRIGGER `them_kich_thuoc` BEFORE INSERT ON `kich_thuoc` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("KT0",SUBSTRING(id_kt,4)+1) FROM kich_thuoc ORDER BY SUBSTRING(id_kt,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_kt = 'KT01';
ELSE SET NEW.id_kt = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai_san_pham`
--

CREATE TABLE `loai_san_pham` (
  `id_lsp` varchar(100) NOT NULL,
  `ten_lsp` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loai_san_pham`
--

INSERT INTO `loai_san_pham` (`id_lsp`, `ten_lsp`) VALUES
('LSP01', 'Giày'),
('LSP02', 'Sandal'),
('LSP03', 'Dép');

--
-- Bẫy `loai_san_pham`
--
DELIMITER $$
CREATE TRIGGER `them_loai_san_pham` BEFORE INSERT ON `loai_san_pham` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("LSP0",SUBSTRING(id_lsp,5)+1) FROM loai_san_pham ORDER BY SUBSTRING(id_lsp,5)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_lsp = 'LSP01';
ELSE SET NEW.id_lsp = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mau_sac`
--

CREATE TABLE `mau_sac` (
  `id_ms` varchar(100) NOT NULL,
  `ten_ms` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `mau_sac`
--

INSERT INTO `mau_sac` (`id_ms`, `ten_ms`) VALUES
('MS01', 'Hồng'),
('MS02', 'Đỏ'),
('MS03', 'Vàng'),
('MS04', 'Xanh dương'),
('MS05', 'Cam'),
('MS06', 'Xám');

--
-- Bẫy `mau_sac`
--
DELIMITER $$
CREATE TRIGGER `them_mau_sac` BEFORE INSERT ON `mau_sac` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("MS0",SUBSTRING(id_ms,4)+1) FROM mau_sac ORDER BY SUBSTRING(id_ms,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_ms = 'MS01';
ELSE SET NEW.id_ms = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhan_vien`
--

CREATE TABLE `nhan_vien` (
  `id_nv` varchar(100) NOT NULL,
  `ten_nv` varchar(50) NOT NULL,
  `email_nv` varchar(100) NOT NULL,
  `mat_khau_nv` varchar(255) NOT NULL,
  `sdt_nv` varchar(10) NOT NULL,
  `ngay_sinh_nv` date NOT NULL,
  `gioi_tinh_nv` varchar(5) NOT NULL,
  `dia_chi_nv` varchar(100) NOT NULL,
  `id_cv` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhan_vien`
--

INSERT INTO `nhan_vien` (`id_nv`, `ten_nv`, `email_nv`, `mat_khau_nv`, `sdt_nv`, `ngay_sinh_nv`, `gioi_tinh_nv`, `dia_chi_nv`, `id_cv`) VALUES
('NV010', 'Nhân Viên Kho', 'nhanvienkho@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '0398542562', '2001-06-21', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV03'),
('NV011', 'Giao Hàng', 'giaohang@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '0398542562', '2000-10-02', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV04'),
('NV012', 'Nguyễn Văn Az', 'vanazz@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '0398542562', '2022-05-12', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV02'),
('NV04', 'Nguyễn Văn Z', 'vanz@gmail.com', '49dc52e6bf2abe5ef6e2bb5b0f1ee2d765b922ae6cc8b95d39dc06c21c848f8c', '0398542562', '2022-04-13', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV02'),
('NV05', 'Nguyễn Văn A', 'vana@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '0398542562', '2022-04-13', 'Nu', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV03'),
('NV06', 'Nguyễn Văn A', 'nguyenvana@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '0398542562', '2022-04-21', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV04'),
('NV07', 'Nguyễn Văn B', 'nguyenvanb@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '0398542562', '2022-04-21', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV04'),
('NV08', 'Đào Minh khoa', 'daominhkhoa1082000@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '0398542562', '2000-10-10', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV01'),
('NV09', 'Nhân Viên', 'nhanvien@gmail.com', '6baad6f126fa53233f5120dd32225d4a9eeaea26dce58789f0b3b6efcdb0dadb', '0398542562', '2000-10-08', 'Nam', 'Hưng Lơi, Ninh Kiều, Cần Thơ', 'CV02');

--
-- Bẫy `nhan_vien`
--
DELIMITER $$
CREATE TRIGGER `them_nhan_vien` BEFORE INSERT ON `nhan_vien` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("NV0",SUBSTRING(id_nv,4)+1) FROM nhan_vien ORDER BY SUBSTRING(id_nv,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_nv = 'NV01';
ELSE SET NEW.id_nv = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `san_pham`
--

CREATE TABLE `san_pham` (
  `id_sp` varchar(100) NOT NULL,
  `ten_sp` varchar(100) NOT NULL,
  `thong_tin_sp` varchar(255) NOT NULL,
  `id_th` varchar(100) NOT NULL,
  `id_lsp` varchar(100) NOT NULL,
  `gia_ban_sp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `san_pham`
--

INSERT INTO `san_pham` (`id_sp`, `ten_sp`, `thong_tin_sp`, `id_th`, `id_lsp`, `gia_ban_sp`) VALUES
('SP01', 'Giày Thể Thao XSPORT Van.s Vault Old Skool REP', 'Kiểu dáng: Giày sneaker, giày thể thao\nChất liệu: Knit\nĐộ cao:3cm\nMàu sắc: Đen, caro\nKích cỡ: 36-43\nChất liệu vải da lộn, êm chân\nĐộ đàn hồi, co dãn tốt, ôm khít vừa chân\nĐế đúc cao su nguyên khối, chắc chắn.', 'TH01', 'LSP01', 550000),
('SP02', 'Giày Alphabounce Beyond REP', 'ABC', 'TH01', 'LSP01', 1000000),
('SP03', 'Nike Air Force 1 Shadow Xanh Ngọc Rep 1 :1', 'Kiểu dáng: Giày sneaker, giày thể thao\nChất liệu: Knit\nĐộ cao:3cm\nMàu sắc: Đen, caro\nKích cỡ: 36-43\nChất liệu vải da lộn, êm chân\nĐộ đàn hồi, co dãn tốt, ôm khít vừa chân\nĐế đúc cao su nguyên khối, chắc chắn.', 'TH01', 'LSP01', 850000),
('SP04', 'Nike Shoes Giày Thể Thao Nike air shadow Rep 1:1', 'Kiểu dáng: Giày sneaker, giày thể thao\nChất liệu: Knit\nĐộ cao:3cm\nMàu sắc: Đen, caro\nKích cỡ: 36-43\nChất liệu vải da lộn, êm chân\nĐộ đàn hồi, co dãn tốt, ôm khít vừa chân\nĐế đúc cao su nguyên khối, chắc chắn.', 'TH01', 'LSP01', 850000),
('SP05', 'Nike Air Force 1 Shadow Xanh Ngọc Rep 1 :1', 'ABC', 'TH01', 'LSP01', 850000),
('SP06', 'Nike ShoesVans Old Skool Vải Đỏ', 'ABC', 'TH04', 'LSP01', 300000),
('SP07', 'Adidas EQT Bask Adv Hồng Trắng REP', 'ABC', 'TH05', 'LSP01', 1500000),
('SP08', 'Adidas EQT Bask Adv Xanh Dương REP', 'ABC', 'TH01', 'LSP01', 850000),
('SP09', 'Giày Thể Thao XSPORT Prophere Rep', 'Thật sự Adidas đã tạo ra một sản phẩm thú vị dành cho các sneakerhead trên toàn thế giới: không giới hạn, không giá trị, chỉ đơn giản là đẹp và chất lượng. Bạn hoàn toàn có thể mang đôi giày cho bất kì hoạt động thường ngày nào: đi làm, đi học, đi bar và ', 'TH01', 'LSP01', 850000);

--
-- Bẫy `san_pham`
--
DELIMITER $$
CREATE TRIGGER `them_san_pham` BEFORE INSERT ON `san_pham` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("SP0",SUBSTRING(id_sp,4)+1) FROM san_pham ORDER BY SUBSTRING(id_sp,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_sp = 'SP01';
ELSE SET NEW.id_sp = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanh_toan_online`
--

CREATE TABLE `thanh_toan_online` (
  `id_kh` varchar(100) NOT NULL,
  `vnp_Amount` int(11) NOT NULL,
  `vnp_BankCode` varchar(20) NOT NULL,
  `vnp_BankTranNo` varchar(255) NOT NULL,
  `vnp_CardType` varchar(20) NOT NULL,
  `vnp_PayDate` date NOT NULL,
  `vnp_OrderInfo` varchar(255) NOT NULL,
  `vnp_TransactionNo` varchar(20) NOT NULL,
  `vnp_ResponseCode` varchar(2) NOT NULL,
  `vnp_TransactionStatus` varchar(2) NOT NULL,
  `vnp_TxnRef` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thuong_hieu`
--

CREATE TABLE `thuong_hieu` (
  `id_th` varchar(100) NOT NULL,
  `ten_th` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thuong_hieu`
--

INSERT INTO `thuong_hieu` (`id_th`, `ten_th`) VALUES
('TH01', 'Nike'),
('TH02', 'Balenciaga'),
('TH03', 'Jorden'),
('TH04', 'Vans'),
('TH05', 'Adidas');

--
-- Bẫy `thuong_hieu`
--
DELIMITER $$
CREATE TRIGGER `them_thuong_hieu` BEFORE INSERT ON `thuong_hieu` FOR EACH ROW BEGIN
DECLARE id varchar(100);

SET id = (SELECT CONCAT("TH0",SUBSTRING(id_th,4)+1) FROM thuong_hieu ORDER BY SUBSTRING(id_th,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.id_th = 'TH01';
ELSE SET NEW.id_th = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `a`
--
DROP TABLE IF EXISTS `a`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `a`  AS SELECT `san_pham`.`id_sp` AS `id_sp`, `san_pham`.`ten_sp` AS `ten_sp`, `san_pham`.`thong_tin_sp` AS `thong_tin_sp`, `san_pham`.`id_th` AS `id_th`, `san_pham`.`id_lsp` AS `id_lsp`, `san_pham`.`gia_ban_sp` AS `gia_ban_sp`, `khuyen_mai`.`gia_km` AS `gia_km`, if(`khuyen_mai`.`gia_km` > 0,`san_pham`.`gia_ban_sp` - `san_pham`.`gia_ban_sp` * `khuyen_mai`.`gia_km` / 100,`san_pham`.`gia_ban_sp`) AS `gia_da_km` FROM (`san_pham` left join `khuyen_mai` on(`san_pham`.`id_sp` = `khuyen_mai`.`id_sp`)) ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chi_tiet_hdn`
--
ALTER TABLE `chi_tiet_hdn`
  ADD KEY `Relationship_10` (`id_hdn`),
  ADD KEY `Relationship_9` (`id_sp`);

--
-- Chỉ mục cho bảng `chi_tiet_hdx`
--
ALTER TABLE `chi_tiet_hdx`
  ADD KEY `Relationship_4` (`id_sp`),
  ADD KEY `Relationship_3` (`id_hdx`);

--
-- Chỉ mục cho bảng `chi_tiet_sp`
--
ALTER TABLE `chi_tiet_sp`
  ADD KEY `so_huu_san_pham` (`id_sp`),
  ADD KEY `so_huu_mau_sac` (`id_ms`),
  ADD KEY `so_huu_kich_thuoc` (`id_kt`);

--
-- Chỉ mục cho bảng `chuc_vu`
--
ALTER TABLE `chuc_vu`
  ADD PRIMARY KEY (`id_cv`);

--
-- Chỉ mục cho bảng `danh_gia`
--
ALTER TABLE `danh_gia`
  ADD PRIMARY KEY (`id_dg`),
  ADD KEY `danh_gia_hoa_don_xuat` (`id_hdx`);

--
-- Chỉ mục cho bảng `dia_chi`
--
ALTER TABLE `dia_chi`
  ADD PRIMARY KEY (`id_dc`),
  ADD KEY `so_huu_dia_chi` (`id_kh`);

--
-- Chỉ mục cho bảng `giao_hang`
--
ALTER TABLE `giao_hang`
  ADD PRIMARY KEY (`id_ngh`),
  ADD KEY `Relationship 11` (`id_hdx`);

--
-- Chỉ mục cho bảng `hinh_anh`
--
ALTER TABLE `hinh_anh`
  ADD PRIMARY KEY (`id_ha`),
  ADD KEY `Relationship_8` (`id_sp`);

--
-- Chỉ mục cho bảng `hinh_anh_danh_gia`
--
ALTER TABLE `hinh_anh_danh_gia`
  ADD KEY `R_19` (`id_dg`);

--
-- Chỉ mục cho bảng `hoa_don_nhap`
--
ALTER TABLE `hoa_don_nhap`
  ADD PRIMARY KEY (`id_hdn`);

--
-- Chỉ mục cho bảng `hoa_don_xuat`
--
ALTER TABLE `hoa_don_xuat`
  ADD PRIMARY KEY (`id_hdx`),
  ADD KEY `co_hoa_don` (`id_kh`);

--
-- Chỉ mục cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`id_kh`);

--
-- Chỉ mục cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD PRIMARY KEY (`id_km`),
  ADD KEY `co_khuyen_mai` (`id_sp`);

--
-- Chỉ mục cho bảng `kich_thuoc`
--
ALTER TABLE `kich_thuoc`
  ADD PRIMARY KEY (`id_kt`);

--
-- Chỉ mục cho bảng `loai_san_pham`
--
ALTER TABLE `loai_san_pham`
  ADD PRIMARY KEY (`id_lsp`);

--
-- Chỉ mục cho bảng `mau_sac`
--
ALTER TABLE `mau_sac`
  ADD PRIMARY KEY (`id_ms`);

--
-- Chỉ mục cho bảng `nhan_vien`
--
ALTER TABLE `nhan_vien`
  ADD PRIMARY KEY (`id_nv`),
  ADD KEY `co_chuc_vu` (`id_cv`);

--
-- Chỉ mục cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`id_sp`),
  ADD KEY `co_thuong_hieu` (`id_th`),
  ADD KEY `thuoc_loai_san_pham` (`id_lsp`);

--
-- Chỉ mục cho bảng `thuong_hieu`
--
ALTER TABLE `thuong_hieu`
  ADD PRIMARY KEY (`id_th`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danh_gia`
--
ALTER TABLE `danh_gia`
  MODIFY `id_dg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chi_tiet_hdn`
--
ALTER TABLE `chi_tiet_hdn`
  ADD CONSTRAINT `Relationship_10` FOREIGN KEY (`id_hdn`) REFERENCES `hoa_don_nhap` (`id_hdn`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Relationship_9` FOREIGN KEY (`id_sp`) REFERENCES `san_pham` (`id_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `chi_tiet_hdx`
--
ALTER TABLE `chi_tiet_hdx`
  ADD CONSTRAINT `Relationship_3` FOREIGN KEY (`id_hdx`) REFERENCES `hoa_don_xuat` (`id_hdx`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Relationship_4` FOREIGN KEY (`id_sp`) REFERENCES `san_pham` (`id_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `chi_tiet_sp`
--
ALTER TABLE `chi_tiet_sp`
  ADD CONSTRAINT `so_huu_kich_thuoc` FOREIGN KEY (`id_kt`) REFERENCES `kich_thuoc` (`id_kt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `so_huu_mau_sac` FOREIGN KEY (`id_ms`) REFERENCES `mau_sac` (`id_ms`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `so_huu_san_pham` FOREIGN KEY (`id_sp`) REFERENCES `san_pham` (`id_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `danh_gia`
--
ALTER TABLE `danh_gia`
  ADD CONSTRAINT `danh_gia_hoa_don_xuat` FOREIGN KEY (`id_hdx`) REFERENCES `hoa_don_xuat` (`id_hdx`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `dia_chi`
--
ALTER TABLE `dia_chi`
  ADD CONSTRAINT `so_huu_dia_chi` FOREIGN KEY (`id_kh`) REFERENCES `khach_hang` (`id_kh`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `giao_hang`
--
ALTER TABLE `giao_hang`
  ADD CONSTRAINT `Relationship 11` FOREIGN KEY (`id_hdx`) REFERENCES `hoa_don_xuat` (`id_hdx`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hinh_anh`
--
ALTER TABLE `hinh_anh`
  ADD CONSTRAINT `Relationship_8` FOREIGN KEY (`id_sp`) REFERENCES `san_pham` (`id_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hinh_anh_danh_gia`
--
ALTER TABLE `hinh_anh_danh_gia`
  ADD CONSTRAINT `R_19` FOREIGN KEY (`id_dg`) REFERENCES `danh_gia` (`id_dg`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hoa_don_xuat`
--
ALTER TABLE `hoa_don_xuat`
  ADD CONSTRAINT `co_hoa_don` FOREIGN KEY (`id_kh`) REFERENCES `khach_hang` (`id_kh`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD CONSTRAINT `co_khuyen_mai` FOREIGN KEY (`id_sp`) REFERENCES `san_pham` (`id_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `nhan_vien`
--
ALTER TABLE `nhan_vien`
  ADD CONSTRAINT `co_chuc_vu` FOREIGN KEY (`id_cv`) REFERENCES `chuc_vu` (`id_cv`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD CONSTRAINT `co_thuong_hieu` FOREIGN KEY (`id_th`) REFERENCES `thuong_hieu` (`id_th`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_loai_san_pham` FOREIGN KEY (`id_lsp`) REFERENCES `loai_san_pham` (`id_lsp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
