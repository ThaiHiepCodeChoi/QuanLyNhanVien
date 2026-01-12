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

## 🛠 Công nghệ sử dụng

Dự án sử dụng thuần các công nghệ Web Frontend, không cần cài đặt Backend phức tạp:
<div align="center">

| Frontend Core | Logic & Data | Tools |
| :---: | :---: | :---: |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![LocalStorage](https://img.shields.io/badge/Local_Storage-green?style=for-the-badge&logo=mongodb&logoColor=white) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |

</div>

* **HTML5 & CSS3:** Thiết kế giao diện phẳng (Flat Design), sử dụng Flexbox/Grid, Font Google Inter, và hiệu ứng Animations mượt mà.
* **JavaScript (Vanilla):** Xử lý toàn bộ logic nghiệp vụ (CRUD, Tính toán lương, Sinh mã tự động).
* **LocalStorage:** Giả lập Cơ sở dữ liệu, giúp dữ liệu **không bị mất** khi tải lại trang (F5) .

---

## 📸 Hình ảnh Sơ đồ

<details>
<summary>👀 <b>Xem Sơ đồ use case</b></summary>
<br>
<img src="/Ảnh Sơ đồ/Sơ đồ use case.drawio (29).png" alt="HR Management" width="75%">
</details>
  
<details>
<summary>👀 <b>Xem sơ đồ Sequence</b></summary>
<br>
  
**1.Thêm Nhân Viên**

<img src="Ảnh Sơ đồ/Thêm nhân viên.drawio.png" alt="Login Screen" width="75%">
  
**2. Cập Nhật Thông Tin Nhân Viên**

<img src="/Ảnh Sơ đồ/Cập nhật thông tin nhân viên.drawio.png" alt="Login Screen" width="75%">

**3.Tìm Kiếm Nhân Viên**

<img src="/Ảnh Sơ đồ/Tìm kiếm nhân viên.drawio.png" alt="Login Screen" width="75%">

**4.Xóa Nhân Viên**

<img src="/Ảnh Sơ đồ/xóa nhân viên.drawio.png" alt="Login Screen" width="75%">
</details>

<details>
<summary>👀 <b>Xem sơ đồ class</b></summary>
<br>
<img src="/Ảnh Sơ đồ/class.jpg" alt="HR Management" width="75%">
</details>

<details>
<summary>👀 <b>Xem sơ đồ ERD</b></summary>
<br>
<img src="/Ảnh Sơ đồ/ERD.jpg" alt="HR Management" width="75%">
</details>

---

## 📸 Hình ảnh Demo

<details>
<summary><b>👀 1. Giao diện Đăng nhập & Admin Dashboard</b></summary>
<br>
<div align="center">
  <img src="/SPRM/Giao diện của Admin.png" alt="Admin View" width="75%">
  <p><i>Giao diện quản lý dành cho Admin với đầy đủ quyền hạn</i></p>
</div>
</details>

<details>
<summary><b>👀 2. Giao diện Nhân viên (Profile Card)</b></summary>
<br>
<div align="center">
  <img src="SPRM/Giao diện chính của nhân viên.png" alt="Employee View" width="75%">
  <p><i>Giao diện thẻ thông tin cá nhân khi Nhân viên đăng nhập</i></p>
</div>
</details>

<details>
<summary><b>👀 3. Tính lương & Lịch sử lương & Điểm danh</b></summary>
<br>
<div align="center">
  <img src="SPRM/Giao diện tính lương của admin.png" alt="Salary View" width="75%">
  <p><i> Giao diện tính lương cho toàn bộ nhân viên của admin</i>i></p>
  
  <img src="SPRM/Giao diện tính lương của nhân viên.png" alt="Salary View" width="75%">
  <p><i> Giao diện tính lương của nhân viên</i>i></p>
  
  <img src="SPRM/Điểm danh của nhân viên.png" alt="Salary View" width="75%">
  <p><i> Giao diện điểm danh của nhân viên</i>i></p>
</div> 
</details>


 ### Website thử nghiệm:
   ```bash
  https://thaihiepcodechoi.github.io/QuanLyNhanVien/
   ``` 
---

## ⚙️ Cài đặt & Hướng dẫn
Dự án này là **Client-side**, bạn có thể chạy ngay lập tức mà không cần cài Node.js hay SQL Server.

### Bước 1: Tải dự án
Clone repository hoặc tải file `.zip` về máy và giải nén.

### Bước 2: Khởi chạy
Mở file `index.html` bằng trình duyệt web bất kỳ (Chrome, Edge, Firefox...).

### Bước 3: Đăng nhập trải nghiệm
Hệ thống có sẵn các tài khoản mẫu sau để bạn kiểm thử (Test):

| Vai trò | Username | Password | Quyền hạn |
| :--- | :--- | :--- | :--- |
| **Quản trị viên** | `admin` | `123` | Full quyền (Thêm/Sửa/Xóa, Tính lương tổng) |
| **Nhân viên** | `NV01` | `123` | Xem Profile, Tự chấm công, Xem lương lịch sử |

> **Mẹo:** Hãy thử dùng Admin thêm một nhân viên mới (VD: Chức vụ Trưởng phòng), hệ thống sẽ tự sinh mã `TP01`. Sau đó hãy đăng xuất và đăng nhập lại bằng `TP01` / `NH@1234` để thấy điều kỳ diệu!

---

## 👨‍💻 Thông tin tác giả

* **Sinh viên:** Thái Hồng Hiệp
* **Lớp:** ĐHCNTT24A-CS
* **Ngành:** Khoa học Máy tính
* **Chuyên nghành:**: Công Nghệ Phần Mềm
* **Trường:** Trường Đại học Đồng Tháp

---
<div align="center">
  <i>Bài còn sơ sài về mặt giao diện ạ. Mong được góp ý để có thể phát triển thêm ạ.</i>
  <i>Cả nhóm xin cảm ơn.</i>
</div>
