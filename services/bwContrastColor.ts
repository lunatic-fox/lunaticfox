/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2023
 @license MIT
*//**/

import kolorz from 'kolorz';

export default function bwContrastColor(color: string) {
  const c = kolorz.hex(color).toHSL
    .replace(/[hsl( )%]/g, '')
    .split(',')
    .map(e => +e);

  return c[2] >= 50 ? 'ffffff' : '000000';
}
