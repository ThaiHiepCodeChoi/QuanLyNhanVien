# Human Resource Management System (HRMS)

> [cite_start]**Đồ án môn học: Kỹ nghệ phần mềm** > **Trường Đại học Đồng Tháp - Khoa Công nghệ và Kỹ thuật** [cite: 105]

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Platform](https://img.shields.io/badge/Platform-Web%20Application-blue)

## 📖 Giới thiệu (Introduction)

[cite_start]**Hệ thống Quản lý Nhân sự** là giải pháp phần mềm nền tảng Web giúp doanh nghiệp tập trung hóa dữ liệu nhân sự trên một cơ sở dữ liệu duy nhất[cite: 138]. [cite_start]Phần mềm hỗ trợ giải quyết các bài toán quản trị nguồn nhân lực từ quản lý hồ sơ, chấm công, tính lương cho đến đánh giá hiệu suất[cite: 121].

Dự án được xây dựng dựa trên tài liệu đặc tả yêu cầu phần mềm (SRS) chi tiết, đảm bảo tuân thủ các quy tắc nghiệp vụ chặt chẽ của doanh nghiệp.

## 🚀 Tính năng chính (Key Features)

[cite_start]Hệ thống đáp ứng 8 nhóm yêu cầu chức năng (Functional Requirements) cốt lõi [cite: 150-190]:

* **🔐 Quản lý hệ thống & Phân quyền (FR1):** Đăng nhập/đăng xuất, quản lý tài khoản và phân quyền theo vai trò (RBAC).
* **📂 Quản lý hồ sơ nhân viên (FR2):** Thêm mới, cập nhật, xóa và tìm kiếm nâng cao (theo MSNV, Tên, Phòng ban).
* **🏢 Quản lý cơ cấu tổ chức (FR3):** Thiết lập và quản lý danh sách Phòng ban, Chức vụ.
* **✍️ Quản lý hợp đồng (FR4):** Soạn thảo, gia hạn, chấm dứt hợp đồng và cảnh báo hết hạn.
* **attendance Quản lý chấm công (FR5):** Nhân viên tự chấm công, hệ thống tự động tính ngày công, giờ làm việc và tăng ca (OT).
* **💰 Quản lý Lương - Thưởng (FR6):** Thiết lập cấu trúc lương, tính toán lương tự động, khấu trừ bảo hiểm và xuất phiếu lương.
* **🏆 Thi đua & Khen thưởng (FR7):** Ghi nhận thành tích, xét duyệt khen thưởng và lưu lịch sử đánh giá.
* **📊 Báo cáo & Thống kê (FR8):** Xuất báo cáo nhân sự, báo cáo quỹ lương và thống kê cơ cấu nhân sự.

## 👥 Phân quyền người dùng (User Roles)

[cite_start]Hệ thống được thiết kế cho 5 nhóm đối tượng sử dụng chính[cite: 142]:

| Vai trò | Trách nhiệm chính |
| :--- | :--- |
| **Admin** | Cấu hình hệ thống, quản lý tài khoản, sao lưu dữ liệu. |
| **Nhân sự (HR)** | Quản lý hồ sơ nhân viên, hợp đồng lao động. |
| **Kế toán** | Tính lương, thưởng, phụ cấp, bảo hiểm và xuất phiếu lương. |
| **Quản lý** | Duyệt nghỉ phép/tăng ca, đánh giá KPI nhân viên cấp dưới. |
| **Nhân viên** | Xem thông tin cá nhân, thực hiện chấm công, gửi yêu cầu nghỉ phép. |

## 🛠 Công nghệ sử dụng (Tech Stack)

*(Bạn hãy điền công nghệ thực tế bạn dùng vào đây, ví dụ:)*

* **Frontend:** ReactJS / VueJS / HTML5 & CSS3
* **Backend:** NodeJS / Java Spring Boot / C# .NET
* **Database:** MySQL / SQL Server
* **Tools:** Visual Studio Code, Git

## ⚙️ Yêu cầu hệ thống (System Requirements)

[cite_start]Để đảm bảo hiệu năng và trải nghiệm tốt nhất (theo NFR [cite: 191]):

* [cite_start]**Trình duyệt:** Chrome, Edge, Firefox, Safari (Phiên bản mới nhất)[cite: 147].
* [cite_start]**Mạng:** Kết nối Internet/Intranet ổn định để chấm công Real-time[cite: 148].
* [cite_start]**Hiệu năng:** Thời gian phản hồi trung bình < 3 giây[cite: 193].

## 📂 Tài liệu thiết kế (Design Documents)

Dự án bao gồm các tài liệu phân tích thiết kế chi tiết (nằm trong thư mục `/docs`):
1.  [cite_start]**Use Case Diagram:** Mô tả tương tác người dùng (Ví dụ: Tìm kiếm, Quản lý hồ sơ)[cite: 211].
2.  [cite_start]**Sequence Diagram:** Mô tả luồng xử lý dữ liệu (Thêm mới, Cập nhật, Xóa, Tìm kiếm...)[cite: 216].
3.  [cite_start]**Class Diagram:** Cấu trúc các lớp đối tượng (NhanVien, HoSoNhanSu, PhongBan...)[cite: 307].
4.  [cite_start]**ERD (Entity Relationship Diagram):** Thiết kế cơ sở dữ liệu quan hệ[cite: 310].


## 📦 Cài đặt & Hướng dẫn sử dụng

1.  Clone dự án:
    ```bash
    git clone [[https://github.com/username/project-name.git](https://github.com/username/project-name.git)](https://github.com/ThaiHiepCodeChoi/QuanLyNhanVien.git)
    ```
2.  Cài đặt thư viện:
    ```bash
    npm install
    ```
3.  Chạy dự án:
    ```bash
    npm start
    ```

## 👨‍💻 Tác giả

* [cite_start]**Lớp:** ĐHCNTT24A-CS [cite: 111]
* [cite_start]**Chuyên ngành:** Khoa học Máy tính [cite: 112]
* [cite_start]**Ngày thực hiện:** 12/12/2025 [cite: 114]

---
