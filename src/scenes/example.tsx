import {makeScene2D, Circle, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fill('#0b1030');

  const dau = createRef<Circle>();
  const than = createRef<Rect>();
  const tieuDe = createRef<Txt>();

  view.add(<Rect ref={than} x={-500} y={120} width={60} height={180} radius={20} fill="#e2653a" opacity={0} />);
  view.add(<Circle ref={dau} x={-500} y={-20} size={90} fill="#111111" stroke="#ffffff" lineWidth={4} opacity={0} />);
  view.add(<Txt ref={tieuDe} text="VIDEO ĐẦU TIÊN CỦA MÌNH" y={-300} fontSize={80} fontWeight={800} fill="#ffd36e" opacity={0} />);

  yield* all(than().opacity(1, 0.8), dau().opacity(1, 0.8));
  yield* tieuDe().opacity(1, 1);
  yield* waitFor(1);
  yield* all(than().x(500, 2), dau().x(500, 2));
  yield* tieuDe().text('CHỮ ĐÃ ĐỔI', 1);
  yield* waitFor(1);
});