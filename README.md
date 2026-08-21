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
Quy trình kiểm thử dùng suốt buổi: DevTools 360 -> 768 -> 1024 -> 1440


BỐN CHỖ VỠ LAYOUT ĐÃ LIỆT KÊ TRƯỚC KHI SỬA

1. Hero hai cột
   Dưới 1024px hai cột chen nhau, chữ và khối logo đều bị bóp.
   Xử lý: lg:grid-cols-2, dưới lg tự xếp dọc.

2. Lưới dịch vụ 5 thẻ
   Ba cột cố định làm thẻ chỉ còn hơn 100px ở 360px.
   Xử lý: mặc định 1 cột, sm:grid-cols-2, lg:grid-cols-3.

3. Bảng so sánh 4 cột ở pricing.html
   Ép 4 cột xuống 360px thì chữ vỡ vụn, không ai đọc được.
   Xử lý: bọc overflow-x-auto + min-w-[720px] cho cuộn ngang,
   kèm dòng nhắc "Vuốt ngang để xem hết bảng" chỉ hiện dưới lg.
   Đây là quyết định thiết kế: giữ khả năng so sánh theo hàng
   quan trọng hơn việc nhét vừa màn hình.

4. Footer bốn cột
   Bốn cột ở 360px mỗi cột còn 80px.
   Xử lý: sm:grid-cols-2 lg:grid-cols-4.

Menu desktop ẩn dưới lg, đã chừa sẵn nút hamburger và khối menu mobile
(chưa chạy được, buổi 4 mới gắn JS).


DARK MODE BẰNG TOKEN

Không rải dark: khắp HTML. Thay vào đó đảo GIÁ TRỊ token trong .dark,
mọi class bg-surface / text-ink / text-muted / border-line tự đổi theo:

.dark {
  --color-ink:         var(--color-ink-invert);
  --color-muted:       var(--color-muted-invert);
  --color-line:        var(--color-line-invert);
  --color-surface:     var(--color-surface-dark);
  --color-surface-alt: var(--color-surface-dark-alt);
  --color-brand-50:  #10241f;
  --color-brand-100: #16332c;
  --color-brand-700: #6fc4ab;
  --color-danger:      #ff9d95;
  --color-accent-500:  #f0b429;
}

Ba nguyên tắc đã tuân thủ:
- Nền tối là #0e1c19 (ngả xanh lá), không dùng #000 cho khỏi loá.
- Chữ sáng là #eaf2ee, không dùng #fff.
- Bỏ bóng đổ ở chế độ tối (dark:shadow-none), để viền gánh việc phân tầng.

Kiểm tra: thêm tay class="dark" vào thẻ <html> trong DevTools.
Nút bật/tắt để buổi 4 làm.

Lỗi tương phản đã sửa trong buổi này:
- text-accent-500 #d99a15 trên nền trắng chỉ đạt 2.4. Đổi accent-500
  thành #8a6209 cho chế độ sáng, giữ #f0b429 cho chế độ tối.
- Ô nhập ở khối CTA dùng bg-white cố định nhưng text-ink lại tự đảo,
  sang chế độ tối thành chữ sáng trên nền trắng. Đổi sang bg-surface.
- Huy hiệu số 3 ở contact.html dùng text-ink trên nền accent-400,
  chế độ tối thành chữ sáng trên nền vàng. Đổi sang text-brand-900.


11 COMPONENT TRONG @layer components

.section       khung chứa + nhịp padding dọc
.eyebrow       nhãn nhỏ đặt trên tiêu đề
.btn           khung nút chung, có border-transparent cho cao bằng nhau
.btn-primary   nút chính, nền brand-600
.btn-ghost     nút phụ, chỉ có viền
.card          thẻ nội dung
.badge         phù hiệu
.field-label   nhãn ô nhập
.field-input   ô nhập, dùng chung cho input select textarea
.field-error   dòng báo lỗi, tự ẩn khi rỗng nhờ empty:hidden
.skip-link     liên kết bỏ qua tới nội dung chính

9 trong 11 component dùng ở từ 2 trang trở lên:
.section .eyebrow .btn .btn-primary .btn-ghost .card .skip-link dùng cả 3 trang,
.badge và .field-input dùng 2 trang.
Riêng .field-label và .field-error chỉ có ở contact.html vì cả dự án mới có
một form. Không nhân bản form sang trang khác chỉ để tăng số trang dùng.


FORM Ở contact.html

7 trường, 6 kiểu: text, tel, email, select, textarea, checkbox.

Ô số điện thoại có đủ 7 chi tiết đề yêu cầu:
for <-> id            bấm vào chữ là con trỏ nhảy vào ô
type="tel"            điện thoại bật bàn phím số
inputmode="numeric"   ép bàn phím số kể cả khi trình duyệt không hiểu type
autocomplete="tel"    trình duyệt tự điền
pattern="0[0-9]{9}"   trình duyệt tự kiểm tra, chưa cần JS
aria-describedby      trình đọc màn hình đọc cả dòng gợi ý lẫn dòng lỗi
role="alert"          lỗi vừa hiện được đọc lên ngay

Dòng gợi ý viết riêng bằng thẻ <p>, KHÔNG dùng placeholder thay nhãn,
vì placeholder biến mất ngay khi người dùng bắt đầu gõ.


4 CÂU TỰ KIỂM TRA CUỐI BUỔI

1. md:text-lg áp dụng ở những kích thước nào?
   Từ 768px trở LÊN, không phải chỉ ở đúng mốc md.
   Tailwind là mobile-first: class không tiền tố áp cho mọi màn hình,
   thêm tiền tố là "từ mốc đó trở lên".

2. Vì sao dark mode nên khai báo bằng cặp token?
   Rải dark: ở từng chỗ thì mỗi màu phải viết hai lần, sót một chỗ là
   lòi ra mảng sáng giữa nền tối. Khai báo cặp token thì chỉ đảo giá trị
   ở một khối .dark duy nhất, CSS không bị nhân đôi, và muốn đổi tông
   chỉ sửa một chỗ.

3. Xử lý bảng so sánh trên mobile theo cách nào, vì sao không chọn cách kia?
   Chọn cuộn ngang. Cách còn lại là ép bảng xuống dạng thẻ xếp dọc,
   nhưng như vậy mất khả năng so sánh theo hàng - mà đó chính là lý do
   người ta mở bảng so sánh. Cuộn ngang giữ được điều đó, đổi lại phải
   nói cho người dùng biết bằng dòng "Vuốt ngang để xem hết bảng".

4. Tại sao không được dùng placeholder thay cho nhãn?
   Placeholder biến mất khi bắt đầu gõ, người dùng quên mất ô đó hỏi gì.
   Nó cũng không bấm được để nhảy vào ô như nhãn thật, và tương phản
   thường quá nhạt. Trình đọc màn hình cũng không đọc placeholder một
   cách đáng tin.


SẼ LÀM LẠI NẾU CÓ THÊM THỜI GIAN

Header và footer đang bị chép tay ba lần ở ba file HTML. Sửa một chỗ
phải nhớ sửa cả ba, quên một file là lệch ngay. Đây là giới hạn thật
của HTML tĩnh chứ không phải viết sai: HTML thuần không có cách nào
nhúng một mảnh dùng chung.

Cách giải quyết thật sự là tách header và footer thành component và
dùng framework hoặc bộ dựng trang biết ghép chúng lại lúc build.
