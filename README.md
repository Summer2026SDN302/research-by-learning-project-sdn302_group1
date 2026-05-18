# ReMind - Nền tảng hỗ trợ giải quyết tâm lý

## 1. Các vấn đề hiện tại đang mắc phải

Gen Z hiện nay phải đối mặt với quá nhiều áp lực từ mạng xã hội, định hướng tương lai và sự phức tạp của thời đại số. Điều này dẫn đến tỷ lệ chán nản, tuyệt vọng cao nhưng lại thiếu các kênh giải tỏa an toàn, ẩn danh và chi phí hợp lý.

Đi khám tâm lý trực tiếp thường tốn kém, mất thời gian và mang rào cản e ngại rất lớn.

> **Giải pháp của ReMind:**
> Xây dựng một hệ sinh thái hỗ trợ tâm lý từ xa (Tele-psychiatry) kết hợp giữa sức mạnh công nghệ và con người:
>
> - Sử dụng AI làm "phễu lọc" sơ cứu tâm lý tức thời và hoàn toàn miễn phí.
> - Kết nối trực tuyến với Chuyên gia tâm lý thật cho các ca cần can thiệp chuyên sâu (minh bạch chi phí ngay từ đầu).

---

## 2. Mô hình Kinh doanh (Monetization & Business Model)

Dự án vận hành theo mô hình Freemium:

- Miễn phí (AI Chat & Community): Người dùng được trò chuyện ẩn danh với AI Therapist 24/7 để nhận lời khuyên cơ bản, sơ cứu tâm lý tức thời và tham gia diễn đàn ẩn danh.
- Thu phí (Expert Consultation): Trả phí theo phiên (Pay-per-session) để trò chuyện trực tiếp 1-1 với Chuyên gia tâm lý.

**Dòng doanh thu (Revenue Streams):** Nền tảng thu phần trăm hoa hồng (commission fee) trên mỗi giao dịch đặt lịch/mua gói tư vấn thành công.

---

## 3. Các phân hệ chức năng chính (Core Features)

Hệ thống được chia làm 3 phân hệ rõ ràng:

### Người dùng (Sinh viên/Gen Z)

- AI Mental Companion (Chat miễn phí): Trợ lý ảo AI đóng vai trò như người lắng nghe, phân tích ngữ cảnh và đưa ra các bài tập thư giãn (thở sâu, thiền).
- Phòng khám ẩn danh (Booking System): Xem profile chuyên gia, đặt lịch và thanh toán online để chat/call video.
- Góc tâm sự (Safe Forum): Nơi đăng bài ẩn danh, cộng đồng chia sẻ, hệ thống tự động ẩn comment độc hại.

### Chuyên gia / Bác sĩ tâm lý (Providers)

- Workspace: Nhận lịch hẹn, tiếp nhận các ca tư vấn trực tuyến.
- AI Context Summary: Nhờ AI đã chat với người dùng từ trước, AI sẽ tóm tắt sẵn hồ sơ và lịch sử cảm xúc của người đó đưa cho chuyên gia. Điều này giúp giảm mạnh thời gian chẩn đoán ban đầu, chuyên gia đi thẳng vào vấn đề cốt lõi.

### Quản trị viên (Admin)

- Quản lý giao dịch, đối soát doanh thu với chuyên gia.
- Xác thực bằng cấp của chuyên gia trước khi cho phép hoạt động trên nền tảng.

---

## 4. Công nghệ chúng em sử dụng (Tech Stack)

- **Frontend (ReactJS):** Sử dụng Virtual DOM giúp render lại giao diện cực nhanh. So với Angular (hỗ trợ nhiều nhưng không phù hợp cho project thời gian ngắn) hay VueJS (không phổ biến trong enterprise), ReactJS cân bằng hoàn hảo giữa hiệu năng và cộng đồng hỗ trợ lớn. Rất phù hợp để áp dụng rộng rãi trong production.
- **Backend (NodeJS):** Với mục đích RBL (Research By Learning), chúng em muốn kết hợp việc học trên trường + áp dụng vào project thực tế để hiểu sâu bản chất và vận hành trơn tru. NodeJS có điểm cộng lớn là xử lý các ứng dụng có hàng ngàn kết nối đồng thời cực tốt, tuyệt vời để làm hệ thống Chat và Web-socket.
- **Cơ sở dữ liệu (Database):**
  - **MySQL (SQL):** Lưu trữ dữ liệu cần tính toàn vẹn cao như: Thông tin thanh toán, Lịch hẹn (Booking), Hồ sơ chuyên gia, Giao dịch hoàn tiền. Đảm bảo không bao giờ có chuyện mất tiền hay trùng lịch khám.
  - **MongoDB (NoSQL):** Lưu trữ các thông tin bảo mật, nhạy cảm và linh hoạt như: Lịch sử tin nhắn chat, Bài đăng trên Forum, Dữ liệu tóm tắt của AI. MongoDB giúp ghi/đọc dữ liệu dạng JSON cực kỳ nhanh và dễ dàng mở rộng.

---

## 5. Các nghiệp vụ cốt lõi cần xử lý (Business Logic)

### Nghiệp vụ 1: Lọc từ khóa độc hại cho Forum (Diễn đàn)

- **Vấn đề:** Cộng đồng ẩn danh rất dễ bị spam chửi bậy => Gây ảnh hưởng tâm lý tiêu cực.
- **Cách giải quyết:** Xây dựng một mảng Blacklist chứa các từ ngữ nhạy cảm (tiếng Việt không dấu/có dấu). Sử dụng Regular Expression (Regex) trong NodeJS để quét chuỗi (String) trước khi lưu vào MongoDB. Nếu phát hiện từ cấm, hệ thống tự động thay thế bằng các dấu `***` hoặc chặn việc gửi comment.

### Nghiệp vụ 2: Thiết lập Prompt Engineering để training AI

- **Vấn đề:** Tự train một con AI hiểu tâm lý là bất khả thi với nguồn lực sinh viên.
- **Cách giải quyết:** Nghiên cứu và sử dụng API của LLM bên thứ 3 (như Gemini API/OpenAI API). Bằng kỹ thuật Prompt Engineering, code logic trong NodeJS sẽ gom 20 tin nhắn gần nhất của user, đưa vào một Prompt mẫu chuẩn rồi gửi cho API xử lý để có câu trả lời tâm lý chính xác và tự nhiên nhất.

### Nghiệp vụ 3: Logic kiểm tra trùng lịch hẹn (Booking Collision)

- **Vấn đề:** Chuyên gia không thể nhận 2 bệnh nhân cùng một khung giờ.
- **Cách giải quyết:** Xử lý truy vấn điều kiện trong MySQL. Trước khi user thanh toán, Backend (NodeJS) phải kiểm tra xem `startDate` và `endDate` của lịch hẹn mới có bị đè lên bất kỳ lịch hẹn nào đang có status `Confirmed` của chuyên gia đó hay không.

---

## 6. Yêu cầu phi chức năng (Non-functional Requirements)

### A. Bảo mật (Security)

- **Băm mật khẩu (Password Hashing):** Tuyệt đối không lưu mật khẩu dạng Text (VD: 123456) vào Database (sử dụng bcrypt).
- **JSON Web Token (JWT):** Khi User đăng nhập thành công, NodeJS trả về 1 chuỗi JWT. Ở các API nhạy cảm (xem lịch sử chat, đặt lịch), User bắt buộc phải gửi kèm JWT này.
- **Phân quyền (RBAC - Role-Based Access Control):** Check Token để biết Request đến từ User, Expert hay Admin để cho phép truy cập đúng router tương ứng.

### B. Hiệu năng (Performance)

- **Phân trang (Pagination):** Áp dụng cho Diễn đàn & Chat. Sử dụng `Limit` và `Offset` trong truy vấn Database. Mỗi lần user cuộn trang, hệ thống chỉ load 10-20 bài đăng, tránh việc load 1000 bài cùng lúc gây sập Web.
- **Kết nối Real-time (Socket.io):** Sử dụng khái niệm `Rooms` trong Socket.io cho tính năng nhắn tin 1-1. User và Expert được join vào chung 1 Room ID (chính là ID của lịch hẹn) để đảm bảo tin nhắn bảo mật, không bị bắn nhầm sang thiết bị khác.
- **Tối ưu tốc độ truy vấn (Indexing):** Thiết lập index cho cột Email (bảng User) trong MySQL để chức năng đăng nhập và tìm kiếm diễn ra nhanh chóng.

### C. Khả dụng (Usability)

- **Mobile-first:** Thiết kế giao diện ReactJS ưu tiên hiển thị hoàn hảo trên thiết bị di động trước.
- **Xử lý lỗi mượt mà:** Các thông báo lỗi hệ thống được bắt qua `try/catch` trên NodeJS và trả về ReactJS dưới dạng các dòng thông báo (toast/alert) thân thiện, dễ hiểu, tuyệt đối không văng mã lỗi thuần (stack trace) lên màn hình người dùng.

### D. Bảo trì (Maintainability)

- **Frontend (ReactJS):** Chia nhỏ giao diện thành các Component độc lập, tính đóng gói cao để dễ tái sử dụng.
- **Backend (NodeJS):** Tuân thủ chặt chẽ kiến trúc Router - Controller - Service để tách biệt rõ ràng phần xử lý logic nghiệp vụ và phần giao tiếp với Database.

---

Link Jira: https://hoangphuc210905.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNzkzYjQ3YjVhNmQ5NDhlZTgzY2RlZDZmYzZhM2VkYTMiLCJwIjoiaiJ9
