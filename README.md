# tkw_2551050023_binh

Chủ đề : Nap the / gach the truc tuyen
sản phẩm : napthe1s - cong nap the tu dong 
Màu thương hiệu : màu xanh lá đậm #14705a
màu nhấn: vàng hổ phách #f0b429 (nền) / #8a6209 (chữ)
màu chữ : #12211d (đen ngả xanh)
màu chữ phụ: #5c6f69 (xám xanh)
màu nền : trắng #ffffff
viền: #dfe6e2
phông tiêu đề: Be Vietnam Pro
phông nội dung: Inter
H1/H2/H3: text-4xl lg:text-5xl / text-3xl lg:text-4xl / text-lg
padding dọc: py-20 lg:py-28 (80px, màn lớn 112px)
bo góc thẻ: 0.875rem = 14px

--color-brand-50: #eef7f3
--color-brand-100: #d6ebe3
--color-brand-500: #1f8a6d
--color-brand-600: #14705a   - màu chính
--color-brand-700: #0f5a49
--color-brand-900: #0a3b31

--color-accent-300: #f7d27a
--color-accent-400: #f0b429
--color-accent-500: #8a6209   - dùng cho CHỮ, đậm hơn nền cho đủ tương phản

--color-ink: #12211d
--color-ink-invert: #eaf2ee
--color-muted: #5c6f69
--color-muted-invert: #93a8a1

--color-line: #dfe6e2
--color-line-invert: #24403a

--color-surface: #ffffff
--color-surface-alt: #f5f8f6
--color-surface-dark: #0e1c19
--color-surface-dark-alt: #14312b

Font:
--font-display: "Be Vietnam Pro" , system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;

Bo góc:
--radius-card: 0.875rem (tùy vào bản thân)
--radius-pill: 9999px

Bảng quy đổi:
Figma Tailwindcss
2px rounded-sm
4px rounded
6 rounded-md
8 rounded-lg // qtrong
12 rounded-xl
16 rounded-2xl
24 rounded-3xl
9999px rounded-full Bo ttròn hoàn toàn

1rem = 16px

Ghi chú làm tròn:
padding dọc đọc trong Figma quanh mức 76-84px. Thang Tailwind gần nhất là
py-20 (80px) và py-24 (96px). Chọn py-20 vì sát số đo hơn.
Đề cấm viết giá trị tùy ý kiểu py-[78px].

Cách chạy:
npm install
npm run dev     (vừa sửa vừa xem, để nguyên terminal)
npm run build   (build một lần, có nén, dùng trước khi nộp)


==================================================
BUỔI 2 - FLEXBOX VÀ GRID
==================================================

Container chuẩn dùng chung cho mọi section:
mx-auto w-full max-w-6xl px-5

Câu hỏi để chọn Flex hay Grid:
Các phần tử có cần thẳng hàng với nhau theo CẢ HAI chiều không?
Có  -> grid
Không -> flex

Bảng dự đoán class cho 6 khối trong bài:

1. Navbar
   flex items-center justify-between gap-4
   Một hàng, mỗi phần rộng theo nội dung -> flex

2. Dải đại lý đang dùng
   flex flex-wrap items-center justify-center gap-x-12 gap-y-6
   Tên dài ngắn khác nhau, tự xuống dòng -> flex flex-wrap

3. Lưới 5 dịch vụ
   grid gap-6 sm:grid-cols-2 lg:grid-cols-3
   Các thẻ phải thẳng hàng cả dọc lẫn ngang -> grid

4. Khối số liệu 4 cột
   grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line
   Cần thẳng hàng hai chiều, có vạch ngăn -> grid

5. Ba thẻ hạng đại lý
   grid items-stretch gap-6 lg:grid-cols-3
   Thẻ bên trong: card flex h-full flex-col gap-4, nút cuối mt-auto

6. FAQ hai cột không đều
   grid gap-12 lg:grid-cols-[1fr_2.4fr]
   Cột trái là tiêu đề, cột phải là danh sách câu hỏi chia tiếp 2 cột.
   Đo ở 1280px: cột trái 313px, cột phải 751px, mỗi thẻ 368px.
   Đề gợi ý 1fr_1.4fr nhưng tỉ lệ đó làm thẻ chỉ còn 302px, cả 6 tiêu đề
   gãy 2 dòng. Đổi sang 1fr_2.4fr để thẻ rộng 368px, gần bằng 355px của
   các section khác. Vẫn là lưới hai cột không đều đúng yêu cầu.

Nhịp padding dọc toàn trang (chỉ dùng 3 giá trị này):
py-20 lg:py-28   - 8 section chính
py-20 lg:py-24   - dải đại lý và footer

Đã sửa ở đầu buổi 2: hai chỗ dùng py-14 lg:py-16, lệch khỏi nhịp, đưa về py-20 lg:py-24.


4 CÂU TỰ KIỂM TRA CUỐI BUỔI

1. Khi nào dùng Flexbox, khi nào dùng Grid?
   Flex khi các phần tử xếp một chiều và rộng theo nội dung.
   Ví dụ trong bài: navbar, hàng nút ở hero, dải tên đại lý (flex-wrap).
   Grid khi cần thẳng hàng cả dọc lẫn ngang.
   Ví dụ trong bài: lưới 5 dịch vụ, khối số liệu, ba thẻ hạng đại lý, 4 cột footer.

2. Vì sao gap tốt hơn margin?
   gap chỉ chèn khoảng cách Ở GIỮA các phần tử, phần tử đầu và cuối không thừa lề.
   Dùng margin trên từng con thì phần tử đầu/cuối luôn dư một khoảng, phải đi vá
   bằng :last-child. gap khai báo một lần ở container, sửa một chỗ là đổi hết.

3. mt-auto hoạt động dựa trên nguyên lý nào?
   Trong flex container xếp dọc, margin-top: auto nuốt hết khoảng trống còn thừa
   và đẩy phần tử xuống đáy. Nhờ vậy ba nút trong ba thẻ giá luôn thẳng hàng
   dù danh sách tính năng dài ngắn khác nhau.
   Đã kiểm chứng: nhồi thêm 3 dòng vào thẻ 1, cả ba thẻ cùng cao 408px,
   ba nút vẫn nằm cùng một toạ độ.

4. Section tự thêm ở bài về nhà dùng lại token nào?
   Section "Ba bước để nạp đơn đầu tiên" (id: cach-hoat-dong).
   Token dùng lại: .section (container + nhịp py-20 lg:py-28), .card (bo góc
   rounded-card, viền border-line, nền bg-surface, padding p-6), font-display cho
   tiêu đề, text-muted cho mô tả, text-brand-600 cho số thứ tự, gap-6 cho lưới.
   Không thêm màu mới, không thêm giá trị spacing mới.
   Dùng thẻ <ol> vì ba bước thật sự có thứ tự: tạo tài khoản -> nạp tiền -> bấm nạp.


==================================================
BUỔI 3 - RESPONSIVE, DARK MODE, COMPONENT, FORM
==================================================

Ba trang: index.html, pricing.html, contact.html
Kiểm thử ở 360 / 768 / 1024 / 1440, không trang nào có scroll ngang.

Bốn chỗ vỡ layout và cách sửa:
1. Hero hai cột   -> lg:grid-cols-2, dưới lg tự xếp dọc
2. Lưới dịch vụ   -> sm:grid-cols-2 lg:grid-cols-3
3. Bảng so sánh   -> overflow-x-auto + min-w-[720px], kèm dòng nhắc vuốt ngang
4. Footer bốn cột -> sm:grid-cols-2 lg:grid-cols-4

Menu desktop ẩn dưới lg, đã chừa sẵn nút hamburger, buổi 4 mới gắn JS.

Dark mode:
Đảo giá trị token trong khối .dark ở src/input.css, không rải dark: khắp HTML.
Nền tối #0e1c19 ngả xanh lá chứ không dùng #000, chữ sáng #eaf2ee chứ không
dùng #fff, bóng đổ đổi sang viền. Kiểm tra bằng cách thêm class="dark" vào
thẻ <html> trong DevTools.

Component: 11 cái trong @layer components, dùng chung cho cả ba trang.

Form contact.html: 7 trường, 6 kiểu. Nhãn thật nối for/id, có aria-describedby
và role="alert". Không dùng placeholder thay nhãn.

URL công khai: https://binhaz1.github.io/tkw_2551050023_binh/


4 câu tự kiểm tra:

1. md:text-lg áp dụng từ 768px trở LÊN, không phải chỉ ở đúng mốc md.

2. Cặp token chỉ cần đảo giá trị ở một khối .dark nên CSS không bị nhân đôi.
   Rải dark: từng chỗ dễ sót, sót một chỗ là lòi mảng sáng giữa nền tối.

3. Bảng so sánh chọn cách cuộn ngang. Cách kia là bẻ bảng thành thẻ xếp dọc,
   nhưng làm vậy mất khả năng so sánh theo hàng, mà đó chính là lý do người ta
   mở bảng so sánh. Đổi lại phải nhắc người dùng vuốt ngang.

4. Placeholder biến mất ngay khi bắt đầu gõ, lại không bấm được để nhảy vào ô,
   tương phản thường quá nhạt và trình đọc màn hình đọc không đáng tin.

Sẽ làm lại nếu có thêm thời gian:
Header và footer đang bị chép tay ba lần ở ba file. HTML thuần không có cách
nhúng một mảnh dùng chung, phải tách thành component và dùng framework mới
giải quyết được.


==================================================
BUỔI 4 - JAVASCRIPT: DOM VÀ TƯƠNG TÁC
==================================================

Không dùng thư viện ngoài.

Kiến trúc: 8 file trong js/, main.js chỉ import và gọi init, không chứa logic.
main.js  nav.js  theme.js  faq.js  pricing.js  slider.js  reveal.js  copy.js
Mỗi hàm init mở đầu bằng câu kiểm tra "không có phần tử thì thoát êm", nhờ vậy
một main.js dùng chung được cho cả ba trang. Nạp bằng <script type="module">
đặt cuối body nên không cần DOMContentLoaded.

Bảy tính năng bắt buộc:

1. Menu mobile - nav.js
   Hàm setOpen chạm bốn thứ cùng lúc: class hidden, aria-expanded, aria-label,
   và overflow-hidden trên body để chặn nền cuộn sau lưng menu.
   Ba cách đóng: phím ESC kèm trả tiêu điểm về nút, bấm ra ngoài header,
   và khi màn hình phóng lên desktop.

2. Navbar khi cuộn - nav.js
   IntersectionObserver theo dõi #nav-sentinel, một div rỗng đặt đầu body.
   Không dùng sự kiện scroll vì nó bắn hàng trăm lần mỗi giây.

3. Accordion FAQ - faq.js
   Một listener cho cả nhóm thay vì mỗi nút một listener.
   e.target.closest() lo trường hợp bấm trúng icon SVG bên trong nút.
   Cách làm: đóng hết rồi mở đúng cái vừa bấm, không cần biến trạng thái riêng.

4. Dark mode - theme.js + script inline trong head
   Script inline chạy đồng bộ trước khi trang vẽ, nên không nháy trắng.
   Thứ tự ưu tiên: localStorage thắng prefers-color-scheme.

5. Công tắc giá - pricing.js
   Số tiền nằm trong data-monthly và data-yearly ở HTML, không nằm trong JS.
   Intl.NumberFormat("vi-VN") lo dấu chấm hàng nghìn và ký hiệu tiền tệ.
   Nút dùng role="switch" + aria-checked, CSS bắt trạng thái đó bằng
   aria-checked:bg-brand-600, không cần class riêng.

6. Slider cảm nhận - slider.js
   (next + slides.length) % slides.length lo cả hai đầu bằng một dòng.
   inert cho slide đang ẩn, không có nó thì Tab rơi vào slide vô hình.
   Chấm chỉ dẫn sinh bằng JS từ số slide thật.
   Dừng khi hover, khi focusin, và khi tab bị ẩn; luôn clearInterval trước
   khi đặt cái mới.

7. Lộ dần khi cuộn - reveal.js
   Tôn trọng prefers-reduced-motion: hiện luôn, không animate.
   unobserve ngay sau khi phần tử đã hiện.
   CSS chỉ ẩn khi <html> có class .js, nên không có JS thì nội dung vẫn hiện
   bình thường thay vì ẩn vĩnh viễn.


4 câu tự kiểm tra:

1. Event delegation là gắn một listener ở phần tử cha thay vì gắn cho từng nút
   con. Ở accordion nó cần thiết vì số mục có thể đổi, và vì bấm trúng icon SVG
   thì e.target là <svg> chứ không phải <button> - closest() leo ngược lên tìm.

2. Script dark mode phải inline trong <head> vì main.js đặt cuối body chỉ chạy
   sau khi trình duyệt đã vẽ xong nền sáng, người dùng sẽ thấy một cú chớp trắng
   ở mỗi lần tải trang. Đây là ngoại lệ duy nhất của quy tắc không viết JS trong HTML.

3. IntersectionObserver chỉ báo đúng hai lần, lúc vào và lúc ra khung nhìn.
   Sự kiện scroll bắn hàng trăm lần mỗi giây, gây giật khi cuộn.

4. Bỏ inert thì người dùng bàn phím nhấn Tab sẽ rơi vào các slide vô hình nằm
   ngoài màn hình, tiêu điểm biến mất mà họ không hiểu vì sao.


Bài về nhà - nút sao chép ở trang liên hệ (copy.js):

Người dùng gặp lỗi đơn nạp thường đang cầm điện thoại, phải gọi hotline ngay.
Gõ tay số 10 chữ số dễ sai một số rồi gọi nhầm, còn bôi đen để chép trên màn hình
cảm ứng thì rất khó trúng.
Nút này chép sẵn số vào bộ nhớ tạm để dán thẳng vào ứng dụng gọi điện, và báo
"Đã sao chép" qua vùng role="status" để trình đọc màn hình cũng biết là đã xong.
