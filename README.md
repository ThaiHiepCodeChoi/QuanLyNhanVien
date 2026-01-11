<div align="center">

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BxdGhuYjZ5aHM3aHJsZm54eG55aG55aG55aG55aG55aG55aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1TVThqceK6M8BMU/giphy.gif" width="100" />

  # 🚀 HỆ THỐNG QUẢN LÝ NHÂN SỰ (HRMS)
  **Đồ án môn học: Kỹ nghệ phần mềm | [cite_start]Trường Đại học Đồng Tháp** [cite: 105, 110]

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

> [cite_start]*"Tài liệu này mô tả đầy đủ các yêu cầu chức năng và phi chức năng của Phần mềm quản lý nhân sự, nhằm làm cơ sở cho việc phân tích, thiết kế, cài đặt, kiểm thử và bảo trì hệ thống."* [cite: 118]

Dự án **HRMS** là giải pháp số hóa toàn diện quy trình quản trị nguồn nhân lực, tập trung vào việc xử lý hồ sơ, chấm công tự động và tính lương chính xác cho doanh nghiệp.

---

## 🔥 Tính năng nổi bật

[cite_start]Hệ thống được xây dựng dựa trên 8 nhóm yêu cầu chức năng cốt lõi (FR) [cite: 151-190]:

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

## 🛠 Công nghệ sử dụng

*(Hãy chỉnh sửa phần này theo đúng ngôn ngữ bạn code nhé, dưới đây là ví dụ mẫu)*

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Database
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Tools
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

---

## 👥 Phân quyền Người dùng (User Roles)

[cite_start]Hệ thống phân chia quyền hạn rõ ràng theo bảng sau[cite: 142]:

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

## 📸 Hình ảnh Demo

*(Chèn ảnh chụp màn hình dự án của bạn vào các đường link bên dưới)*

<details>
<summary>👀 <b>Xem giao diện Đăng nhập & Dashboard</b></summary>
<br>
<img src="https://via.placeholder.com/800x400?text=Giao+Dien+Dang+Nhap" alt="Login Screen" width="100%">
</details>

<details>
<summary>👀 <b>Xem giao diện Quản lý Hồ sơ</b></summary>
<br>
<img src="https://via.placeholder.com/800x400?text=Giao+Dien+Quan+Ly+Nhan+Su" alt="HR Management" width="100%">
</details>

---

## ⚙️ Cài đặt & Hướng dẫn

1. **Clone dự án về máy:**
   ```bash
   git clone [https://github.com/username/ten-du-an.git](https://github.com/username/ten-du-an.git)
