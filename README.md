<div align="center">

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BxdGhuYjZ5aHM3aHJsZm54eG55aG55aG55aG55aG55aG55aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1TVThqceK6M8BMU/giphy.gif" width="100" />

  # 🚀 HỆ THỐNG QUẢN LÝ NHÂN SỰ (HRMS)
  **Đồ án môn học: Kỹ nghệ phần mềm | Trường Đại học Đồng Tháp** 

  [![Generic badge](https://img.shields.io/badge/Môn_Học-Kỹ_Nghệ_Phần_Mềm-purple.svg)](https://shields.io/)
  [![Generic badge](https://img.shields.io/badge/Phiên_Bản-1.0.0-blue.svg)](https://shields.io/)
  [![Generic badge](https://img.shields.io/badge/Trạng_Thái-Đang_Phát_Triển-orange.svg)](https://shields.io/)
  [![Generic badge](https://img.shields.io/badge/Maintenance-Yes-green.svg)](https://shields.io/)

  <p align="center">
    <a href="#-giới-thiệu">Giới thiệu</a> •
    <a href="#-tính-năng-nổi-bật">Tính năng</a> •
    <a href="#-công-nghệ-sử-dụng">Công nghệ</a> •
    <a href="#-hình-ảnh-demo">Demo</a> •
    <a href="#-cài-đặt">Cài đặt</a>
  </p>
</div>

---

## 📖 Giới thiệu

> *"Tài liệu này mô tả đầy đủ các yêu cầu chức năng và phi chức năng của Phần mềm quản lý nhân sự, nhằm làm cơ sở cho việc phân tích, thiết kế, cài đặt, kiểm thử và bảo trì hệ thống."*

Dự án **HRMS** là giải pháp số hóa toàn diện quy trình quản trị nguồn nhân lực, tập trung vào việc xử lý hồ sơ, chấm công tự động và tính lương chính xác cho doanh nghiệp.

---

## 🔥 Tính năng nổi bật

Hệ thống được xây dựng dựa trên 8 nhóm yêu cầu chức năng cốt lõi (FR) :

| Mã FR | Tên Chức năng | Mô tả chi tiết |
| :--- | :--- | :--- |
| **FR1** | 🔐 **Quản lý Hệ thống** | Đăng nhập/xuất, quản lý tài khoản, phân quyền (RBAC) cho Admin, HR, Manager. |
| **FR2** | 📂 **Hồ sơ Nhân sự** | Thêm mới, cập nhật, xóa, tìm kiếm nâng cao (MSNV, Tên, Phòng ban). |
| **FR3** | 🏢 **Cơ cấu Tổ chức** | Thiết lập phòng ban, quản lý danh sách chức vụ/vị trí công việc. |
| **FR4** | 📝 **Hợp đồng** | Soạn thảo, gia hạn, chấm dứt hợp đồng lao động và cảnh báo hết hạn. |
| **FR5** | ⏰ **Chấm công** | Chấm công Real-time, tự động tính giờ làm, tăng ca (OT). |
| **FR6** | 💸 **Lương & Phúc lợi** | Cấu hình lương, tính toán lương tự động, xuất phiếu lương chi tiết. |
| **FR7** | 🏆 **Khen thưởng** | Đánh giá KPI, ghi nhận thành tích và xét duyệt khen thưởng. |
| **FR8** | 📊 **Báo cáo** | Xuất báo cáo nhân sự, bảng lương và thống kê theo biểu đồ. |

---

## 👥 Phân quyền Người dùng (User Roles)
Hệ thống phân chia quyền hạn rõ ràng theo bảng sau:

<div align="center">

| Vai trò | Icon | Quyền hạn chính |
| :--- | :---: | :--- |
| **Quản trị viên** | 🤴 | Toàn quyền hệ thống, sao lưu dữ liệu, cấp tài khoản. |
| **Nhân sự (HR)** | 👩‍💼 | Quản lý hồ sơ, hợp đồng lao động. |
| **Kế toán** | 💰 | Tính lương, thưởng, phụ cấp, bảo hiểm. |
| **Quản lý** | 👨‍✈️ | Duyệt đơn nghỉ phép, đánh giá KPI nhân viên. |
| **Nhân viên** | 🧑‍💻 | Chấm công, xem lương, xem hồ sơ cá nhân. |

</div>

---

## 📸 Hình ảnh Sơ đồ

<details>
<summary>👀 <b>Xem Sơ đồ use case</b></summary>
<br>
<img src="/Sơ đồ use case.drawio (29).png" alt="HR Management" width="50%">
</details>
  
<details>
<summary>👀 <b>Xem sơ đồ Sequence</b></summary>
<br>
  
**1.Thêm Nhân Viên**

<img src="/Thêm nhân viên.drawio.png" alt="Login Screen" width="50%">
  
**2. Cập Nhật Thông Tin Nhân Viên**

<img src="/Cập nhật thông tin nhân viên.drawio.png" alt="Login Screen" width="50%">

**3.Tìm Kiếm Nhân Viên**

<img src="/Tìm kiếm nhân viên.drawio.png" alt="Login Screen" width="50%">

**4.Xóa Nhân Viên**

<img src="/xóa nhân viên.drawio.png" alt="Login Screen" width="50%">
</details>

<details>
<summary>👀 <b>Xem sơ đồ class</b></summary>
<br>
<img src="/class.jpg (29).png" alt="HR Management" width="50%">
</details>

<details>
<summary>👀 <b>Xem sơ đồ ERD</b></summary>
<br>
<img src="/ERD.jpg" alt="HR Management" width="50%">
</details>

---

## ⚙️ Cài đặt & Hướng dẫn

1. **Clone dự án về máy:**
   ```bash
   git clone [https://github.com/ThaiHiepCodeChoi/QuanLyNhanVien.git](https://github.com/ThaiHiepCodeChoi/QuanLyNhanVien.git)
