const DB_EMP = 'hrms_employees';
const DB_ATT = 'hrms_attendance';
const DB_ACC = 'hrms_accounts';

let CURRENT_USER = null; 

// --- 1. DATA MANAGER ---
function getEmployees() {
    const data = localStorage.getItem(DB_EMP);
    if (data) return JSON.parse(data);
    return [
        { msnv: "NV01", ten: "Thái Hồng Hiệp", chucvu: "Nhân viên", gioitinh: "Nam", ngaysinh: "2006-04-09", quequan: "Đồng Tháp", phongban: "Công nghệ thông tin", luongCoBan: 15000000, ngayvao: "2023-01-01" }
    ];
}
function getAccounts() {
    const data = localStorage.getItem(DB_ACC);
    if (data) return JSON.parse(data);
    return [
        { username: 'admin', password: '123', role: 'admin', ten: 'Quản trị viên' },
        { username: 'NV01', password: '123', role: 'employee', ten: 'Thái Hồng Hiệp' }
    ];
}
function getAttendance() {
    const data = localStorage.getItem(DB_ATT);
    // DỮ LIỆU MẪU CHẤM CÔNG NHIỀU THÁNG ĐỂ TEST TÍNH NĂNG
    if (!data) {
        return [
            { msnv: "NV01", ten: "Thái Hồng Hiệp", date: "2023-10-01", status: "Có mặt" },
            { msnv: "NV01", ten: "Thái Hồng Hiệp", date: "2023-10-02", status: "Có mặt" },
            { msnv: "NV01", ten: "Thái Hồng Hiệp", date: "2023-11-05", status: "Có mặt" }, // Tháng 11
        ];
    }
    return JSON.parse(data);
}
function saveEmployees(data) { localStorage.setItem(DB_EMP, JSON.stringify(data)); loadEmployeeData(); }
function saveAccounts(data) { localStorage.setItem(DB_ACC, JSON.stringify(data)); }
function saveAttendance(data) { localStorage.setItem(DB_ATT, JSON.stringify(data)); renderAttendanceTable(); }

// --- 2. HỆ THỐNG ---
function autoGenerateMSNV() {
    const position = document.getElementById("inp-position").value;
    const mode = document.getElementById("inp-mode").value;
    if (mode !== 'add' || !position) return;
    let prefix = "NV";
    if (position === "Giám đốc") prefix = "GD"; else if (position === "Trưởng phòng") prefix = "TP";
    const employees = getEmployees();
    let maxNumber = 0;
    employees.forEach(emp => { if (emp.msnv.startsWith(prefix)) { const n = parseInt(emp.msnv.replace(prefix, "")); if (!isNaN(n) && n > maxNumber) maxNumber = n; } });
    const nextNumber = maxNumber + 1;
    document.getElementById("inp-msnv").value = prefix + (nextNumber < 10 ? "0" + nextNumber : nextNumber);
}

function handleLogin() {
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();
    const user = getAccounts().find(acc => acc.username === u && acc.password === p);
    if (user) {
        CURRENT_USER = user;
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("main-app").classList.remove("hidden");
        document.querySelectorAll(".user-info").forEach(el => el.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${user.ten}`);
        applyPermissions();
        switchSection('sec-employee');
    } else { document.getElementById("login-error").innerText = "Sai tài khoản!"; }
}

function applyPermissions() {
    const isAdmin = CURRENT_USER.role === 'admin';
    // Tab Lương giờ ai cũng thấy, nhưng giao diện bên trong sẽ khác nhau
    const btnAdd = document.getElementById("btn-add-emp");
    if (btnAdd) btnAdd.style.display = isAdmin ? 'block' : 'none';
}
function handleLogout() { location.reload(); }

function switchSection(sectionId, element) {
    document.querySelectorAll('.tab-section').forEach(el => el.classList.add('hidden'));
    const section = document.getElementById(sectionId);
    if(section) section.classList.remove('hidden');
    if (element) { document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active')); element.classList.add('active'); }
    
    if(sectionId === 'sec-employee') loadEmployeeData();
    if(sectionId === 'sec-attendance') loadAttendanceUI();
    if(sectionId === 'sec-salary') loadSalaryUI(); // Hàm này sẽ tự phân quyền bên trong
}

// --- 3. HỒ SƠ NHÂN VIÊN ---
function loadEmployeeData() {
    let data = getEmployees();
    const container = document.querySelector("#sec-employee .table-container");
    if (CURRENT_USER.role === 'employee') {
        const myProfile = data.find(nv => nv.msnv === CURRENT_USER.username) || {};
        const luongFmt = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(myProfile.luongCoBan || 0);
        let dob = myProfile.ngaysinh ? new Date(myProfile.ngaysinh).toLocaleDateString('vi-VN') : "Chưa cập nhật";
        let joinDate = myProfile.ngayvao ? new Date(myProfile.ngayvao).toLocaleDateString('vi-VN') : "Chưa cập nhật";
        
        container.innerHTML = `<div class="profile-card"><div class="profile-header-title">Thông tin nhân viên</div><div class="profile-body"><div class="profile-left"><img src="https://via.placeholder.com/150x200?text=${myProfile.ten.charAt(0)}" class="profile-avatar"><div style="margin-top:10px;font-weight:bold;color:#4361ee">${myProfile.chucvu}</div></div><div class="profile-right"><div class="info-row"><span class="info-label">MSNV:</span><span class="info-value">${myProfile.msnv}</span></div><div class="info-row"><span class="info-label">Phòng ban:</span><span class="info-value">${myProfile.phongban}</span></div><div class="info-row" style="grid-column:span 2;"><span class="info-label">Họ và tên:</span><span class="info-value highlight" style="font-size:20px;">${myProfile.ten}</span></div><div class="info-row"><span class="info-label">Giới tính:</span><span class="info-value">${myProfile.gioitinh || 'Nam'}</span></div><div class="info-row"><span class="info-label">Ngày sinh:</span><span class="info-value">${dob}</span></div><div class="info-row"><span class="info-label">Quê quán:</span><span class="info-value">${myProfile.quequan || 'Chưa rõ'}</span></div><div class="info-row"><span class="info-label">Ngày vào:</span><span class="info-value">${joinDate}</span></div><div class="info-row"><span class="info-label">Lương CB:</span><span class="info-value" style="color:#10b981;font-weight:bold">${luongFmt}</span></div></div></div></div>`;
        return;
    }
    let tableHTML = `<table><thead><tr><th>MSNV</th><th>Họ Tên</th><th>Giới tính</th><th>Chức vụ</th><th>Phòng ban</th><th>Hành động</th></tr></thead><tbody id="employee-table-body">`;
    data.forEach(nv => { tableHTML += `<tr><td>${nv.msnv}</td><td><strong>${nv.ten}</strong></td><td>${nv.gioitinh||''}</td><td><span style="font-size:12px;padding:3px 8px;background:#e0e7ff;color:#4361ee;border-radius:10px;">${nv.chucvu}</span></td><td>${nv.phongban}</td><td><button onclick="deleteEmployee('${nv.msnv}')" class="btn-delete">Xóa</button></td></tr>`; });
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}

function saveEmployee(e) {
    e.preventDefault();
    const list = getEmployees(); const accounts = getAccounts();
    const newNV = {
        msnv: document.getElementById("inp-msnv").value,
        ten: document.getElementById("inp-name").value.trim(),
        chucvu: document.getElementById("inp-position").value,
        gioitinh: document.getElementById("inp-gender").value,
        ngaysinh: document.getElementById("inp-dob").value,
        quequan: document.getElementById("inp-hometown").value,
        phongban: document.getElementById("inp-dept").value,
        luongCoBan: Number(document.getElementById("inp-salary").value),
        ngayvao: document.getElementById("inp-date").value
    };
    if (list.some(x => x.msnv === newNV.msnv)) return alert("Mã trùng!");
    list.push(newNV); saveEmployees(list);
    if (!accounts.some(acc => acc.username === newNV.msnv)) { accounts.push({ username: newNV.msnv, password: 'NH@1234', role: 'employee', ten: newNV.ten }); saveAccounts(accounts); alert(`Tạo TK thành công: ${newNV.msnv}`); }
    document.getElementById("modal-form").classList.add("hidden");
}
function openModal(mode) { document.getElementById("modal-form").classList.remove("hidden"); document.getElementById("inp-mode").value = mode; document.getElementById("employee-form").reset(); document.getElementById("inp-msnv").value = ""; }
function deleteEmployee(msnv) { if(confirm(`Xóa ${msnv}?`)) { saveEmployees(getEmployees().filter(x => x.msnv !== msnv)); saveAccounts(getAccounts().filter(x => x.username !== msnv)); } }
function closeModal() { document.getElementById("modal-form").classList.add("hidden"); }

// --- 4. CHẤM CÔNG ---
function loadAttendanceUI() {
    const select = document.getElementById("att-msnv"); select.innerHTML = "";
    const allEmps = getEmployees();
    if (CURRENT_USER.role === 'admin') { allEmps.forEach(nv => select.innerHTML += `<option value="${nv.msnv}">${nv.msnv} - ${nv.ten}</option>`); select.disabled = false; } 
    else { const my = allEmps.find(nv => nv.msnv === CURRENT_USER.username); if (my) select.innerHTML = `<option value="${my.msnv}">${my.msnv} - ${my.ten}</option>`; select.disabled = true; }
    document.getElementById("att-date").valueAsDate = new Date();
    renderAttendanceTable();
}
function addAttendance() {
    const msnv = document.getElementById("att-msnv").value; const date = document.getElementById("att-date").value;
    let list = getAttendance();
    if(list.some(x => x.msnv === msnv && x.date === date)) return alert("Đã chấm công ngày này rồi!");
    const emp = getEmployees().find(x => x.msnv === msnv);
    list.push({ msnv, ten: emp.ten, date, status: "Có mặt" }); list.sort((a,b) => new Date(b.date) - new Date(a.date));
    saveAttendance(list); alert("Điểm danh thành công!");
}
function renderAttendanceTable() {
    const tbody = document.getElementById("attendance-table-body"); tbody.innerHTML = "";
    let list = getAttendance();
    if (CURRENT_USER.role === 'employee') list = list.filter(att => att.msnv === CURRENT_USER.username);
    list.forEach(att => tbody.innerHTML += `<tr><td>${att.date}</td><td>${att.msnv}</td><td>${att.ten}</td><td style="color:green;font-weight:bold">${att.status}</td></tr>`);
}

// --- 5. TÍNH LƯƠNG (LOGIC MỚI - ACROSS MONTHS) ---
function loadSalaryUI() {
    const isAdmin = CURRENT_USER.role === 'admin';
    
    // 1. ĐIỀU KHIỂN GIAO DIỆN
    const toolbar = document.getElementById("salary-toolbar");
    const thead = document.getElementById("salary-thead");
    const tbody = document.getElementById("salary-table-body");
    tbody.innerHTML = ""; // Xóa dữ liệu cũ

    if (isAdmin) {
        // --- GIAO DIỆN ADMIN: CHỌN THÁNG ---
        toolbar.style.display = "flex";
        document.getElementById("salary-month").value = new Date().toISOString().slice(0, 7);
        thead.innerHTML = `<tr><th>MSNV</th><th>Họ Tên</th><th>Lương CB</th><th>Ngày công</th><th>Tổng Nhận</th></tr>`;
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#888;">Vui lòng chọn tháng và bấm "Tính lương"</td></tr>`;
    } else {
        // --- GIAO DIỆN NHÂN VIÊN: HIỂN THỊ LỊCH SỬ ---
        toolbar.style.display = "none"; // Ẩn thanh chọn tháng
        thead.innerHTML = `<tr><th>Tháng</th><th>Lương Cơ Bản</th><th>Số ngày công</th><th>Lương Thực Nhận</th></tr>`;
        renderMySalaryHistory(); // Gọi hàm riêng để vẽ bảng lịch sử
    }
}

function calculateSalary() {
    // Hàm này chỉ dành cho Admin
    const selectedMonth = document.getElementById("salary-month").value;
    if(!selectedMonth) return alert("Chọn tháng!");
    const tbody = document.getElementById("salary-table-body"); tbody.innerHTML = "";
    getEmployees().forEach(emp => {
        const workDays = getAttendance().filter(att => att.msnv === emp.msnv && att.date.startsWith(selectedMonth)).length;
        const totalSalary = (emp.luongCoBan / 26) * workDays;
        tbody.innerHTML += `<tr><td>${emp.msnv}</td><td><strong>${emp.ten}</strong></td><td>${fmtMoney(emp.luongCoBan)}</td><td style="text-align:center;font-weight:bold;">${workDays}</td><td style="color:#c0392b;font-weight:bold">${fmtMoney(totalSalary)}</td></tr>`;
    });
    alert("Đã tính xong!");
}

// HÀM MỚI: TỰ ĐỘNG TÍNH LƯƠNG QUA CÁC THÁNG CHO NHÂN VIÊN
function renderMySalaryHistory() {
    const myMSNV = CURRENT_USER.username;
    const myProfile = getEmployees().find(e => e.msnv === myMSNV);
    if (!myProfile) return;

    const myAttendance = getAttendance().filter(att => att.msnv === myMSNV);
    const tbody = document.getElementById("salary-table-body");
    
    // 1. Gom nhóm ngày công theo tháng (VD: "2023-10" => 5 ngày, "2023-11" => 2 ngày)
    const salaryByMonth = {};
    
    myAttendance.forEach(att => {
        const monthStr = att.date.slice(0, 7); // Lấy YYYY-MM
        if (!salaryByMonth[monthStr]) salaryByMonth[monthStr] = 0;
        salaryByMonth[monthStr]++;
    });

    // 2. Vẽ bảng
    const months = Object.keys(salaryByMonth).sort().reverse(); // Tháng mới nhất lên đầu
    
    if (months.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Chưa có dữ liệu chấm công nào.</td></tr>`;
        return;
    }

    months.forEach(month => {
        const workDays = salaryByMonth[month];
        const totalSalary = (myProfile.luongCoBan / 26) * workDays;
        
        // Format tháng cho đẹp (2023-10 -> 10/2023)
        const [year, m] = month.split("-");
        const displayMonth = `${m}/${year}`;

        tbody.innerHTML += `
            <tr>
                <td style="font-weight:bold; color:#4361ee">${displayMonth}</td>
                <td>${fmtMoney(myProfile.luongCoBan)}</td>
                <td style="text-align:center; font-weight:bold">${workDays}</td>
                <td style="font-weight:bold; color:#10b981; font-size:16px">${fmtMoney(totalSalary)}</td>
            </tr>
        `;
    });
}

function fmtMoney(num) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num); }
function searchEmployee() {}