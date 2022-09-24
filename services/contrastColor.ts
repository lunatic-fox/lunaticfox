/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import kolorz from 'kolorz';

const contrastColor = (color: string, lightness = 0) => {
  const c = kolorz.hex(color).toHSL
    .replace(/[hsl( )%]/g, '')
    .split(',')
    .map(e => +e);

  const l = +(lightness * 100).toFixed();

  return kolorz.hsl(`hsl(${c.slice(0, 2)}%,${Math.abs(
      c[2] >= 90 ? c[2] - (l + 30)
    : c[2] >= 65 ? c[2] - (l + 10)
    : c[2] >= 35 ? c[2] - (l - 10)
    : c[2] + l
  )}%)`).toHex;
};

export default contrastColor;
