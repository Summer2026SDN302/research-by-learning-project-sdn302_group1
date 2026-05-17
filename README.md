ReMind - Nền tảng hỗ trợ giải quyết tâm lý

1. Các vấn đề hiện tại đang mắc phải:
Gen Z hiện nay phải đối mặt với quá nhiều áp lực từ mạng xã hội, định hướng tương lai và sự phức tạp của thời đại số. Điều này dẫn đến tỷ lệ chán nản, tuyệt vọng cao nhưng lại thiếu các kênh giải tỏa an toàn, ẩn danh và chi phí hợp lý. 
Đi khám tâm lý trực tiếp tốn kém, mất thời gian và mang rào cản e ngại.
=> Giải pháp của ReMind: Xây dựng một hệ sinh thái hỗ trợ tâm lý từ xa (Tele-psychiatry) kết hợp giữa sức mạnh công nghệ và con người:
Sử dụng AI làm "phễu lọc" sơ cứu tâm lý tức thời và hoàn toàn miễn phí.
Kết nối trực tuyến với Chuyên gia tâm lý thật cho các ca cần can thiệp chuyên sâu (minh bạch chi phí ngay từ đầu).
2. Mô hình Kinh doanh (Monetization & Business Model):
Dự án vận hành theo mô hình Freemium:
- Miễn phí (AI Chat & Community): Người dùng được trò chuyện ẩn danh với AI Therapist 24/7 để nhận lời khuyên cơ bản, sơ cứu tâm lý tức thời và tham gia diễn đàn ẩn danh.
- Thu phí (Expert Consultation): Trả phí theo phiên (Pay-per-session) để trò chuyện trực tiếp 1-1 với Chuyên gia tâm lý.
Dòng doanh thu (Revenue Streams): Nền tảng thu phần trăm hoa hồng (commission fee) trên mỗi giao dịch đặt lịch/mua gói tư vấn thành công. 
3. Các phân hệ chức năng chính (Core Features): 
Hệ thống được chia làm 3 phân hệ rõ ràng:
A. Người dùng (Sinh viên/Gen Z):
AI Mental Companion (Chat miễn phí): Trợ lý ảo AI đóng vai trò như người lắng nghe, phân tích ngữ cảnh và đưa ra các bài tập thư giãn (thở sâu, thiền).
Phòng khám ẩn danh (Booking System): Xem profile chuyên gia, đặt lịch và thanh toán online để chat/call video.
Góc tâm sự (Safe Forum): Nơi đăng bài ẩn danh, cộng đồng chia sẻ, hệ thống tự động ẩn comment độc hại.
B. Chuyên gia / Bác sĩ tâm lý (Providers):
Workspace: Nhận lịch hẹn, tiếp nhận các ca tư vấn trực tuyến.
AI Context Summary: Nhờ AI đã chat với người dùng từ trước, AI sẽ tóm tắt sẵn hồ sơ và lịch sử cảm xúc của người đó đưa cho chuyên gia. Điều này giúp giảm mạnh thời gian chẩn đoán ban đầu, chuyên gia đi thẳng vào vấn đề cốt lõi.
C. Quản trị viên (Admin):
Quản lý giao dịch, đối soát doanh thu với chuyên gia.
Xác thực bằng cấp của chuyên gia trước khi cho phép hoạt động trên nền tảng.

Công nghệ chúng em sử dụng:
A. Frontend: 
ReactJS sử dụng Virtual DOM giúp render lại giao diện cực nhanh. Ngoài ra, sử dụng rộng rãi trong production giúp ReactJS phù hợp để chúng em xác định.So với Angular (1 framework tuy hỗ trợ nhiều hơn, nhưng không phù hợp nếu làm project trong 1 khoảng thời gian ngắn) hay VueJS (không phổ biến trong enterprise), ReactJS cân bằng hoàn hảo giữa hiệu năng và cộng đồng hỗ trợ lớn.
B. Backend: 
Với mục đích RBL (Research By Learning), chúng em muốn kết hợp việc học trên trường + áp dụng vào project để có thể hiểu sâu bản chất, vận hành một cách trơn tru. 1 điểm cộng lớn về NodeJS à để xử lý các ứng dụng có hàng ngàn kết nối đồng thời, giúp nó tuyệt vời để làm hệ thống Chat và Web-socket.
C. Cơ sở dữ liệu: 
- MySQL (SQL): Lưu trữ dữ liệu cần tính toàn vẹn cao như: Thông tin thanh toán, Lịch hẹn (Booking), Hồ sơ chuyên gia, Giao dịch hoàn tiền. Đảm bảo không bao giờ có chuyện mất tiền hay trùng lịch khám.
- MongoDB (NoSQL): Với 1 nền tảng cần lưu trữ các thông tin bảo mật và nhạy cảm, cần thiết như Lịch sử tin nhắn chat, Bài đăng trên Forum, Dữ liệu tóm tắt của AI. Việc lựa chọn MongoDB giúp chúng ghi/đọc dữ liệu dạng JSON cực kỳ nhanh và dễ mở rộng hơn.

Các nghiệp vụ cần xử lý:
Nghiệp vụ 1: Logic Lọc từ khóa độc hại cho Forum (diễn đàn)
Vấn đề: Cộng đồng ẩn danh rất dễ bị spam chửi bậy => gây ảnh hưởng tâm lý.
=> Cách giải quyết: Xây dựng một mảng Blacklist chứa các từ ngữ nhạy cảm (tiếng Việt không dấu/có dấu). Bằng cách sử dụng Regular Expression (Regex) trong NodeJS để quét chuỗi (String) trước khi lưu vào MongoDB. Nếu phát hiện từ cấm, hệ thống tự động thay thế bằng các dấu *** hoặc chặn việc gửi comment.
Nghiệp vụ 2: Thiết lập Prompt Engineering để training AI
Vấn đề: Tự train một con AI hiểu tâm lý là bất khả thi với sinh viên.
=> Cách giải quyết: Nghiên cứu cách sử dụng API của LLM bên thứ 3 (ví dụ: Gemini API hoặc OpenAI API). Bằng kỹ thuật Prompt Engineering (thiết đặt câu lệnh), chúng em sẽ code logic để NodeJS gom 20 tin nhắn gần nhất của user, nhét vào một Prompt mẫu chuẩn rồi gửi cho API xử lý.
Nghiệp vụ 3: Logic Kiểm tra trùng lịch hẹn
Vấn đề: Chuyên gia không thể nhận 2 bệnh nhân cùng một khung giờ.
=> Cách giải quyết: Xử lý truy vấn điều kiện trong MySQL. Trước khi user thanh toán, Backend (NodeJS) phải kiểm tra xem startDate (ngày bắt đầu cuộc hẹn) và endDate (ngày kết thúc cuộc hẹn) của lịch hẹn mới có bị đè lên bất kỳ lịch hẹn nào đang có status Confirmed của chuyên gia đó không.

Non-functional trong Project:
A. Bảo mật (Security):
Băm mật khẩu (Password Hashing): Tuyệt đối không lưu mật khẩu dạng Text (123456) vào Database. 
Bảo mật phiên đăng nhập bằng JWT (JSON Web Token): Khi User đăng nhập thành công, NodeJS trả về 1 chuỗi JWT. Ở các API nhạy cảm (như xem lịch sử chat, đặt lịch hẹn), User phải gửi kèm JWT này lên.
Kết hợp với RBAC (Role-Based Access Control - Phân quyền): Check Token để biết đây là User, Expert hay Admin để cho phép truy cập đúng router.
B. Hiệu năng (Performance):
- Phân trang (Pagination) cho Diễn đàn & Chat:
Nếu forum có 1000 bài viết, load tất cả cùng lúc sẽ sập Web. Để tránh điều đó, chúng em   sử dụng Limit và Offset trong truy vấn Database. Mỗi lần user cuộn trang, chỉ lấy 10-20 bài đăng.
- Kết nối Real-time (Socket.io):
Với tính năng nhắn tin trực tuyến 1-1 với chuyên gia tâm lý, chúng em sử dụng khái niệm Rooms trong Socket.io. Khi User và Expert chat, họ được join vào chung 1 Room ID (chính là ID của lịch hẹn) để đảm bảo tin nhắn không bị bắn nhầm sang máy của người khác..
- Tối ưu tốc độ truy vấn Database (Indexing): Trong MySQL, chúng em thiết lập index cho cột Email (bảng User) để chức năng đăng nhập tìm kiếm nhanh hơn.
C. Khả dụng (Usability):
Với việc sử dụng ReactJS, chúng em thiết kế giao diện theo chuẩn Mobile-first (ưu tiên điện thoại). Ngoài ra, các thông báo lỗi hệ thống được xử lý thông qua Catch/Try trên NodeJS và trả về ReactJS dưới dạng các dòng thông báo dễ hiểu, đẹp mắt, không văng mã lỗi thuần lên màn hình người dùng. 
D. Bảo trì (Maintainability):
- Về phần Frontend (ReactJS): Chia nhỏ thành các Component độc lập để dễ tái sử dụng.
- Về phần Backend (NodeJS): Cấu trúc theo mô hình Router - Controller - Service để tách biệt rõ ràng phần xử lý logic và phần giao tiếp với Database.

Link GitHub: https://github.com/toan215/project-A
Link Jira:https://hoangphuc210905.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNzkzYjQ3YjVhNmQ5NDhlZTgzY2RlZDZmYzZhM2VkYTMiLCJwIjoiaiJ9

