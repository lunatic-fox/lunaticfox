/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import kolorz from 'kolorz';
import React from 'react';

const bwContrastColor = (color: string) => {
  const c = kolorz.hex(color).toHSL
    .replace(/[hsl( )%]/g, '')
    .split(',')
    .map(e => +e);

  return c[2] >= 50 ? 'ffffff' : '000000';
};

export default bwContrastColor;
