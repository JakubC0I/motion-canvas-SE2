import {Img, Rect, makeScene2D} from '@motion-canvas/2d';
import {
  all,
  createRef,
  easeInExpo,
  easeInOutExpo,
  waitFor,
  waitUntil,
} from '@motion-canvas/core';
import examplePng from './gif.gif';

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();

  view.add(
    <Rect ref={rect} size={320} radius={80} smoothCorners fill={'#f3303f'} />,
  );

  const imageRef = createRef<Img>();
  view.add(<Img ref={imageRef} src={examplePng} scale={2} />);

  /*   yield* waitUntil('rect');
  yield* rect().scale(2, 1, easeInOutExpo).to(1, 0.6, easeInExpo);
  rect().fill('#ffa56d');
  yield* all(rect().ripple(1));
  yield* waitFor(0.3); */

  yield* waitUntil('imageRef');
  yield* imageRef().scale(2, 1, easeInOutExpo).to(1, 0.6, easeInExpo);
  yield* all(imageRef().ripple(1));
  yield* waitFor(0.3);
});
