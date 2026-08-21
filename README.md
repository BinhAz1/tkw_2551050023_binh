# tkw_2551050023_binh

Chủ đề : Nap the / gach the truc tuyen
sản phẩm : napthe1s - cong nap the tu dong 
Màu thương hiệu : màu xanh lá đậm #14705a
màu nhấn: vàng hổ phách #d99a15
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
--color-accent-500: #d99a15

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
