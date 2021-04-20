'use strict';
const _0x9e71 = [
  '448793fXrEpL',
  'click',
  '1UDAFBC',
  '27sppHQQ',
  '151xEGQnO',
  'Split\x20Image',
  'createElement',
  'px\x20',
  'style',
  'classList',
  'addEventListener',
  'div',
  'Add\x20Image',
  '1yyzyFx',
  'big',
  'box',
  'add',
  '16155PszMIw',
  '.container',
  '370546qyNRye',
  '484928IlGqYv',
  'querySelector',
  '1601NTQWWD',
  '380003fXsMSe',
  '256225vlYEkg',
  'textContent',
];
const _0x1df14f = _0x7b5e;
(function (_0xb11537, _0x2f35d0) {
  const _0xa3282e = _0x7b5e;
  while (!![]) {
    try {
      const _0x13dea2 =
        parseInt(_0xa3282e(0x1f1)) * parseInt(_0xa3282e(0x1ec)) +
        parseInt(_0xa3282e(0x1e8)) +
        -parseInt(_0xa3282e(0x1ef)) +
        parseInt(_0xa3282e(0x1e6)) * -parseInt(_0xa3282e(0x1f2)) +
        -parseInt(_0xa3282e(0x1f3)) * parseInt(_0xa3282e(0x1eb)) +
        parseInt(_0xa3282e(0x1ed)) +
        parseInt(_0xa3282e(0x1e2)) * parseInt(_0xa3282e(0x1e9));
      if (_0x13dea2 === _0x2f35d0) break;
      else _0xb11537['push'](_0xb11537['shift']());
    } catch (_0x36cd4f) {
      _0xb11537['push'](_0xb11537['shift']());
    }
  }
})(_0x9e71, 0x591ad);
const container = document[_0x1df14f(0x1ea)](_0x1df14f(0x1e7)),
  btn = document[_0x1df14f(0x1ea)]('button');
function creatBoxes() {
  const _0x296f9f = _0x1df14f;
  for (let _0x274a9b = 0x0; _0x274a9b < 0x4; _0x274a9b++) {
    for (let _0x288ff3 = 0x0; _0x288ff3 < 0x4; _0x288ff3++) {
      const _0x312705 = document[_0x296f9f(0x1db)](_0x296f9f(0x1e0));
      _0x312705[_0x296f9f(0x1de)][_0x296f9f(0x1e5)](_0x296f9f(0x1e4)),
        (_0x312705[_0x296f9f(0x1dd)]['backgroundPosition'] =
          -_0x288ff3 * 0x7d + _0x296f9f(0x1dc) + -_0x274a9b * 0x7d + 'px'),
        container['appendChild'](_0x312705);
    }
  }
}
creatBoxes();
function _0x7b5e(_0x2e7495, _0xe063ca) {
  _0x2e7495 = _0x2e7495 - 0x1da;
  let _0x9e71d0 = _0x9e71[_0x2e7495];
  return _0x9e71d0;
}
function changeText() {
  const _0xbce181 = _0x1df14f;
  (btn[_0xbce181(0x1ee)] =
    btn[_0xbce181(0x1ee)] === _0xbce181(0x1e1)
      ? _0xbce181(0x1da)
      : _0xbce181(0x1e1)),
    container[_0xbce181(0x1de)]['toggle'](_0xbce181(0x1e3));
}
btn[_0x1df14f(0x1df)](_0x1df14f(0x1f0), changeText);
