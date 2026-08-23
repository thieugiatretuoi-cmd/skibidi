# 📝 BÀI KIỂM TRA LẬP TRÌNH WEB CƠ BẢN (JSA)

> **Thời gian làm bài**: 60 phút  
> **Tổng điểm**: 10.0 điểm (Trắc nghiệm: 4.0 điểm | Thực hành: 6.0 điểm)

---

## 📋 HƯỚNG DẪN LÀM BÀI VÀ NỘP BÀI

1. **Bước 1**: Học viên `clone` kho chứa (repository) này về máy tính cá nhân.
2. **Bước 2**: Làm phần **Trắc nghiệm** bằng cách điền đáp án chọn (A, B, C, D) vào phần [PHIẾU LÀM BÀI TRẮC NGHIỆM](#-phiếu-làm-bài-trắc-nghiệm) ở cuối file `README.md` này.
3. **Bước 3**: Làm phần **Thực hành** bằng cách tạo thư mục `KiemTra_Web` ngay tại thư mục này với các file: `index.html`, `style.css`, `main.js`.
4. **Bước 4**: Sau khi hoàn thành, khởi tạo git, commit và `push` toàn bộ bài làm lên **repository GitHub cá nhân** của học viên.
5. **Bước 5**: Gửi đường link GitHub cá nhân cho giảng viên để chấm bài.

---

## ✍️ PHẦN 1: TRẮC NGHIỆM (4.0 điểm - Mỗi câu 0.4 điểm)

**Câu 1:** Để nhúng một file JavaScript bên ngoài có tên `main.js` vào file HTML, ta dùng thẻ nào sau đây?  
- **A.** `<link rel="stylesheet" href="main.js">`  
- **B.** `<script src="main.js"></script>`  
- **C.** `<style src="main.js"></style>`  
- **D.** `<js file="main.js"></js>`  

**Câu 2:** Trong thẻ `<input>`, thuộc tính nào dùng để hiển thị dòng chữ gợi ý mờ mờ khi người dùng chưa nhập dữ liệu?  
- **A.** `value`  
- **B.** `text`  
- **C.** `placeholder`  
- **D.** `name`  

**Câu 3:** Trong CSS, ký hiệu nào được dùng để chọn (select) một phần tử theo **Class**?  
- **A.** Dấu thăng `#` (ví dụ: `#container`)  
- **B.** Dấu chấm `.` (ví dụ: `.container`)  
- **C.** Dấu gạch ngang `-`  
- **D.** Không cần ký hiệu  

**Câu 4:** Để căn giữa các phần tử con theo **chiều ngang** trong một khung Flexbox (`display: flex`), ta sử dụng thuộc tính CSS nào?  
- **A.** `align-items: center;`  
- **B.** `text-align: center;`  
- **C.** `justify-content: center;`  
- **D.** `flex-direction: center;`  

**Câu 5:** Muốn chuyển hướng sắp xếp của các phần tử trong Flexbox thành **chiều dọc** (từ trên xuống dưới), ta dùng thuộc tính nào?  
- **A.** `flex-direction: column;`  
- **B.** `flex-direction: row;`  
- **C.** `align-items: vertical;`  
- **D.** `display: column;`  

**Câu 6:** Trong JavaScript, cú pháp nào đúng để truy xuất đến thẻ HTML có `id="username"`?  
- **A.** `document.getClass("username")`  
- **B.** `document.getElementById("username")`  
- **C.** `document.querySelectorID("username")`  
- **D.** `document.getElement("username")`  

**Câu 7:** Để lấy giá trị văn bản mà người dùng nhập vào ô `<input>`, ta sử dụng thuộc tính JS nào?  
- **A.** `.innerText`  
- **B.** `.innerHTML`  
- **C.** `.value`  
- **D.** `.textContent`  

**Câu 8:** Cú pháp JS nào sau đây dùng để **đổi màu chữ** của phần tử HTML có tên biến `element` thành màu đỏ?  
- **A.** `element.color = "red";`  
- **B.** `element.style.color = "red";`  
- **C.** `element.css.color = "red";`  
- **D.** `element.background = "red";`  

**Câu 9:** Để gán một hàm JS có tên `checkLogin()` chạy khi người dùng nhấp chuột vào nút bấm, thẻ HTML được viết như thế nào?  
- **A.** `<button hover="checkLogin()">Đăng nhập</button>`  
- **B.** `<button action="checkLogin()">Đăng nhập</button>`  
- **C.** `<button onclick="checkLogin()">Đăng nhập</button>`  
- **D.** `<button press="checkLogin()">Đăng nhập</button>`  

**Câu 10:** Lệnh Git nào dưới đây được sử dụng để đẩy (upload) các commit từ máy cục bộ lên kho chứa trên GitHub?  
- **A.** `git add .`  
- **B.** `git commit -m "message"`  
- **C.** `git push`  
- **D.** `git init`  

---

## 💻 PHẦN 2: THỰC HÀNH (6.0 điểm)

### 🎯 Đề bài: Trang "Đăng Nhập & Đổi Giao Diện Tương Tác"

Học viên tạo thư mục `KiemTra_Web` gồm 3 file: `index.html`, `style.css`, `main.js`.

#### Yêu cầu chi tiết:

1. **Cấu trúc HTML (`index.html`) (1.5 điểm)**:
   - Thẻ `div` bao ngoài làm khung chứa (`class="container"`).
   - Thẻ `h1` hiển thị tiêu đề: `"ĐĂNG NHẬP HỆ THỐNG"`.
   - 1 ô `<input>` nhập Tài khoản (`placeholder="Nhập tài khoản"`).
   - 1 ô `<input type="password">` nhập Mật khẩu (`placeholder="Nhập mật khẩu"`).
   - 1 nút `<button>` nhãn `"Đăng nhập"`.
   - 1 nút `<button>` nhãn `"Đổi màu nền"`.
   - 1 thẻ `<p id="message"></p>` dùng để hiển thị thông báo kết quả.

2. **Trang trí CSS (`style.css`) (2.0 điểm)**:
   - Sử dụng Flexbox để căn toàn bộ khung `.container` ra **chính giữa màn hình** (`height: 100vh`, `display: flex`, `justify-content: center`, `align-items: center`).
   - Xếp các thành phần bên trong khung theo **chiều dọc** (`flex-direction: column`).
   - Đặt màu nền, viền (`border`), bo góc (`border-radius`) và khoảng cách (`padding`) hợp lý cho khung và các nút bấm.

3. **Xử lý JavaScript (`main.js`) (1.5 điểm)**:
   - Viết hàm `login()` gắn vào sự kiện `onclick` của nút `"Đăng nhập"`:
     - Lấy giá trị chuỗi trong ô Mật khẩu.
     - Nếu mật khẩu bằng `"123456"`: Đổi nội dung thẻ `<p id="message">` thành `"Đăng nhập thành công!"` và chữ có màu xanh (`green`).
     - Nếu sai mật khẩu: Đổi nội dung thẻ `<p id="message">` thành `"Sai mật khẩu, vui lòng thử lại!"` và chữ màu đỏ (`red`).
   - Viết hàm `changeTheme()` gắn vào sự kiện `onclick` của nút `"Đổi màu nền"`:
     - Khi bấm nút, thay đổi màu nền trang web (`document.body.style.backgroundColor`) sang một màu khác (ví dụ: `pink` hoặc `lightyellow`).

4. **Quản lý mã nguồn với Git/GitHub (1.0 điểm)**:
   - Thực hiện `git init`, `git add .`, và `git commit -m "Hoan thanh bai kiem tra web"`.
   - Đẩy toàn bộ bài làm lên GitHub repository cá nhân và nộp đường link bài làm.

---

## 📝 PHIẾU LÀM BÀI TRẮC NGHIỆM
*(Học viên điền đáp án A, B, C, hoặc D vào bảng dưới đây)*

| Câu | Đáp án của học viên |
|:---:|:---:|
| **1** |B|
| **2** |C|
| **3** |B|
| **4** |D|
| **5** |A|
| **6** |B|
| **7** |C|
| **8** |B|
| **9** |C|
| **10** |C|

---
**Chúc các bạn làm bài tốt!** 🚀
