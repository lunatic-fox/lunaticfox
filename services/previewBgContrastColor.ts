/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import kolorz from 'kolorz';
import React from 'react';

const previewBgContrastColor = (color: string) => {
  const c = kolorz.hex(color).toHSL
    .replace(/[hsl( )%]/g, '')
    .split(',')
    .map(e => +e);

  const g1 = c[2] >= 50 ?
    '#222222' 
    : '#c0c0c0';

  const g2 = c[2] >= 50 ? 
    '#161616' 
    : '#f1f1f1';

  const size = 5;

  const res: React.CSSProperties = {
    backgroundColor: g1,
    backgroundImage: `repeating-linear-gradient(45deg, ${g2} 25%, transparent 25%, transparent 75%, ${g2} 75%, ${g2}), repeating-linear-gradient(45deg, ${g2} 25%, ${g1} 25%, ${g1} 75%, ${g2} 75%, ${g2})`,
    backgroundPosition: `0 0, ${size}px ${size}px`,
    backgroundSize: `${size * 2}px ${size * 2}px`
  }
  
  return res;
};

export default previewBgContrastColor;
