import {makeScene2D, Img, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, delay, easeOutBack, waitFor} from '@motion-canvas/core';
import bobSvg from '../../images/bob.svg';

// ===== CẢNH 1: THE BROKE MAN =====
// Các mốc thời gian (giây) lấy từ bảng do_thoi_gian.py của cảnh 1, tính theo file giọng canh01_full.mp3.
// DEM = số giây chờ thêm trước khi giọng bắt đầu (để 0 nếu giọng bắt đầu ngay từ giây 0).
const DEM = 0;
const t = (giay: number) => giay + DEM;

export default makeScene2D(function* (view) {
  view.fill('#f1e8d8');

  const bob = createRef<Img>();
  const tieuDe = createRef<Txt>();
  const vi = createRef<Rect>();
  const tienTrongVi = createRef<Rect>();
  const hoaDonTrongVi = createRef<Rect>();
  const the1 = createRef<Rect>();
  const the2 = createRef<Rect>();
  const the3 = createRef<Rect>();
  const tienBay1 = createRef<Rect>();
  const tienBay2 = createRef<Rect>();
  const tienBay3 = createRef<Rect>();
  const bong1 = createRef<Rect>();
  const bong2 = createRef<Rect>();
  const taiKhoan = createRef<Rect>();
  const soDu = createRef<Txt>();

  // ----- Phòng khách: sàn nhà và ghế sofa -----
  view.add(<Rect y={390} width={1920} height={300} fill="#cdb894" />);
  view.add(<Rect y={90} width={780} height={300} radius={50} fill="#3f8f8b" />);
  view.add(<Rect x={-400} y={200} width={110} height={220} radius={40} fill="#357a77" />);
  view.add(<Rect x={400} y={200} width={110} height={220} radius={40} fill="#357a77" />);
  view.add(<Rect y={225} width={690} height={110} radius={30} fill="#4aa3a0" />);

  // ----- Bob nằm dài trên sofa -----
  view.add(<Img ref={bob} src={bobSvg} width={600} height={600} x={0} y={100} rotation={90} />);

  // ----- Chiếc ví với một tờ tiền nhỏ và một hóa đơn -----
  view.add(
    <Rect ref={vi} y={-210} width={360} height={230} radius={26} fill="#8a5a35" scale={0}>
      <Rect y={-30} width={320} height={150} radius={16} fill="#a8703f" />
      <Rect ref={tienTrongVi} x={-50} y={-20} width={150} height={74} radius={8} fill="#6cc08b" stroke="#2f7d4f" lineWidth={4} rotation={-6} scale={0}>
        <Txt text="$1" fontSize={44} fontWeight={800} fill="#1f5e3a" />
      </Rect>
      <Rect ref={hoaDonTrongVi} x={95} y={-10} width={84} height={140} radius={6} fill="#ffffff" stroke="#9a9a9a" lineWidth={3} rotation={8} scale={0}>
        <Rect y={-40} width={56} height={8} fill="#c8c8c8" />
        <Rect y={-15} width={56} height={8} fill="#c8c8c8" />
        <Rect y={10} width={56} height={8} fill="#c8c8c8" />
        <Rect y={45} width={56} height={14} fill="#c0392b" />
      </Rect>
      <Rect y={60} width={360} height={110} radius={26} fill="#7a4b2a" />
    </Rect>,
  );

  // ----- Ba vấn đề của Bob -----
  view.add(
    <Rect ref={the1} x={-540} y={-200} width={470} height={120} radius={28} fill="#ffe3e0" stroke="#c0392b" lineWidth={6} scale={0}>
      <Txt text="RENT DUE" fontSize={44} fontWeight={800} fill="#c0392b" />
    </Rect>,
  );
  view.add(
    <Rect ref={the2} x={0} y={-200} width={470} height={120} radius={28} fill="#ffe3e0" stroke="#c0392b" lineWidth={6} scale={0}>
      <Txt text="FRIDGE EMPTY" fontSize={44} fontWeight={800} fill="#c0392b" />
    </Rect>,
  );
  view.add(
    <Rect ref={the3} x={540} y={-200} width={470} height={120} radius={28} fill="#ffe3e0" stroke="#c0392b" lineWidth={6} scale={0}>
      <Txt text="BANK = GHOST TOWN" fontSize={40} fontWeight={800} fill="#c0392b" />
    </Rect>,
  );

  // ----- Ba tờ tiền sẽ bay đi -----
  view.add(
    <Rect ref={tienBay1} x={-60} y={60} width={130} height={64} radius={8} fill="#6cc08b" stroke="#2f7d4f" lineWidth={4} opacity={0}>
      <Txt text="$" fontSize={40} fontWeight={800} fill="#1f5e3a" />
    </Rect>,
  );
  view.add(
    <Rect ref={tienBay2} x={0} y={60} width={130} height={64} radius={8} fill="#6cc08b" stroke="#2f7d4f" lineWidth={4} opacity={0}>
      <Txt text="$" fontSize={40} fontWeight={800} fill="#1f5e3a" />
    </Rect>,
  );
  view.add(
    <Rect ref={tienBay3} x={60} y={60} width={130} height={64} radius={8} fill="#6cc08b" stroke="#2f7d4f" lineWidth={4} opacity={0}>
      <Txt text="$" fontSize={40} fontWeight={800} fill="#1f5e3a" />
    </Rect>,
  );

  // ----- Tài khoản ngân hàng -----
  view.add(
    <Rect ref={taiKhoan} y={-230} width={720} height={260} radius={36} fill="#ffffff" stroke="#17191d" lineWidth={6} scale={0}>
      <Txt text="BANK ACCOUNT" y={-75} fontSize={40} fontWeight={700} fill="#6b6b6b" />
      <Txt ref={soDu} y={35} text="$12.47" fontSize={120} fontWeight={800} fill="#c0392b" opacity={0} />
    </Rect>,
  );

  // ----- Hai bong bóng lời thoại của Bob -----
  view.add(
    <Rect ref={bong1} x={300} y={-20} width={560} height={110} radius={40} fill="#ffffff" stroke="#17191d" lineWidth={6} opacity={0} scale={0.6}>
      <Txt text="Where does it all go?" fontSize={46} fill="#17191d" />
    </Rect>,
  );
  view.add(
    <Rect ref={bong2} x={300} y={-20} width={560} height={110} radius={40} fill="#ffffff" stroke="#17191d" lineWidth={6} opacity={0} scale={0.6}>
      <Txt text="Okay. This is serious." fontSize={46} fill="#17191d" />
    </Rect>,
  );

  // ----- Dòng chữ lớn phía trên -----
  view.add(<Txt ref={tieuDe} y={-440} text="" fontSize={72} fontWeight={800} fill="#17191d" opacity={0} />);

  // ----- Các đoạn hoạt hình nhỏ dùng lại -----
  function* doiChu(noiDung: string) {
    yield* tieuDe().opacity(0, 0.12);
    tieuDe().text(noiDung);
    yield* tieuDe().opacity(1, 0.25);
  }

  function* hienBong(bong: Rect, giuGiay: number) {
    yield* all(bong.opacity(1, 0.2), bong.scale(1, 0.3, easeOutBack));
    yield* waitFor(giuGiay);
    yield* bong.opacity(0, 0.25);
  }

  function* bayDi(tien: Rect, xDich: number, yDich: number) {
    yield* tien.opacity(1, 0.1);
    yield* all(
      tien.position([xDich, yDich], 1.4),
      tien.rotation(35, 1.4),
      tien.opacity(0, 1.4),
    );
  }

  // ----- Dòng thời gian: mỗi delay(t(giây giọng đọc), hành động) -----
  yield* all(
    // Chữ lớn theo lời Narrator
    delay(t(0.2), doiChu('BOB HAD A PROBLEM')),
    delay(t(2.4), doiChu('ACTUALLY... SEVERAL')),
    delay(t(5.3), doiChu('THE PROBLEMS')),
    delay(t(12.6), doiChu('NO IDEA WHERE THE MONEY WENT')),
    delay(t(17.8), doiChu('EVERY MONTH: PAYCHECK')),
    delay(t(20.9), doiChu('EVERY MONTH: I WILL SAVE')),
    delay(t(24.7), doiChu('EVERY MONTH: MONEY GONE')),
    delay(t(28.0), tieuDe().opacity(0, 0.3)),
    delay(t(43.3), doiChu('TAKE CONTROL')),
    delay(t(48.2), doiChu('FINANCIALLY RESPONSIBLE')),
    delay(t(51.8), doiChu('OR AT LEAST... TRY')),

    // Ví mở ra: một tờ tiền nhỏ và một hóa đơn
    delay(t(0.3), vi().scale(1, 0.5, easeOutBack)),
    delay(t(1.3), tienTrongVi().scale(1, 0.4, easeOutBack)),
    delay(t(2.2), hoaDonTrongVi().scale(1, 0.4, easeOutBack)),
    delay(t(5.1), vi().opacity(0, 0.4)),

    // Ba vấn đề (lời 003)
    delay(t(5.4), the1().scale(1, 0.4, easeOutBack)),
    delay(t(7.2), the2().scale(1, 0.4, easeOutBack)),
    delay(t(9.2), the3().scale(1, 0.4, easeOutBack)),
    delay(t(12.4), all(the1().opacity(0, 0.4), the2().opacity(0, 0.4), the3().opacity(0, 0.4))),

    // Tiền biến mất (lời 007)
    delay(t(24.8), bayDi(tienBay1(), 850, -330)),
    delay(t(25.6), bayDi(tienBay2(), 900, -150)),
    delay(t(26.4), bayDi(tienBay3(), 800, -420)),

    // Bob hỏi (lời 008 và 013)
    delay(t(28.4), hienBong(bong1(), 1.1)),
    delay(t(41.1), hienBong(bong2(), 1.45)),

    // Tài khoản ngân hàng (lời 009 đến 012)
    delay(t(30.3), taiKhoan().scale(1, 0.4, easeOutBack)),
    delay(t(32.8), soDu().opacity(1, 0.3)),
    delay(t(38.3), taiKhoan().y(-900, 0.8)),

    // Bob nhìn lên trần nhà (lời 012)
    delay(t(38.6), bob().rotation(72, 0.6).to(72, 1.0).to(90, 0.5)),

    // Bob đứng dậy (lời 014) và nhún vai (lời 016)
    delay(t(43.3), all(bob().rotation(0, 0.9), bob().position([-560, 20], 0.9))),
    delay(t(52.0), bob().y(5, 0.25).to(20, 0.25)),
  );

  // Giữ hình thêm một lúc cho đủ độ dài cảnh
  yield* waitFor(3.5);
});