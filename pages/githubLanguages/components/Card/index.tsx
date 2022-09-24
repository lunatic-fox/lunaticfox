/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import parse from 'html-react-parser';
import kolorz from 'kolorz';
import styles from './index.module.css';
import { useState } from 'react';
import { GitHubLinguist } from '../../../../hooks/useGithubLangs';
import contrastColor from '../../../../services/contrastColor';
import CopyAlert from '../CopyAlert';
import { placeholder } from '../CardList';

type CardProps = GitHubLinguist[string] & {
  translation: any,
  icon: { [k: string]: string }
};

const Card = ({ 
  translation,
  langKey,
  color,
  name,
  type,
  extensions,
  icon
}: CardProps) => {
  const t = translation ?? placeholder;

  const [openCard, setOpenCard] = useState(false);
  const [copyAlert, setCopyAlert] = useState(false);

  const gColorAlt = () => kolorz.hex(color ?? '');
  const gColorShade = gColorAlt().lightness(-.3).value;
  const gColorGlow = gColorAlt().lightness(.2).value;
  const gContrast = contrastColor(color ?? '', .4);

  const handleCopyAlert = () => {
    const response = [
      name,
      `${t.typeString}: ${t.type[type] ?? type}`,
      color ? [
        `${t.colors}:`,
        ` - hex: ${color}`,
        ` - rgb: ${gColorAlt().toRGB}`,
        ` - hsl: ${gColorAlt().toHSL}`
      ].join('\n') : null,
      extensions ? `${t.extensions}: ${extensions.join(', ')}` : null   
    ].filter(e => e)
     .join('\n');
    navigator.clipboard.writeText(response);
    setCopyAlert(true);
    setTimeout(() => setCopyAlert(false), 2e3);
  };

  const langStyle: React.CSSProperties = {
    color: color ? gContrast : '#777a',
    background: color ?? 'none',
    boxShadow: `inset -2px -2px 5px ${ color ? gColorShade : '#7772' },
      inset 2px 2px 5px ${ color ? gColorGlow : '#7772' },
      ${ color ? '2px 2px 3px #161616cc' : '0 0 2px #777c' }`
  };

  const copyBtnWrapperStyle: React.CSSProperties = {
    background: color ? gColorAlt().lightness(-.1).value : '#7772',
    boxShadow: `inset 2px 2px 5px ${ color ? gColorShade : '#0006' }`
  };

  const copyBtnIconStyle: React.CSSProperties = {
    background: color ? gContrast : '#7776'
  };

  let foundIcon = '';
  if (icon && langKey)
    foundIcon = icon[langKey];
  
  const openedCard = (
    <article
      className={ openCard ? styles.openedCard : '' }
      style={ langStyle }>

      {
        foundIcon ? 
          parse(`<div style="margin-bottom: 10px; width: 150px;">${
            icon[langKey].replace(/""/gm, `"${color ? gContrast : '#777a'}"`)
          }</div>`)
          : ''
      }

      <section className={ `${styles.copySection} ${styles.copySectionOn}` }>
        <section>
          <section className={ styles.title }>{ name }</section>
          <p>{ t.type ? t.type[type] ?? type : type }</p>
        </section>
            
        <section
          onClick={ handleCopyAlert }
          className={ openCard ? `${styles.copyBtnWrapper} ${styles.copyBtnWrapperOn}` : styles.copyBtnWrapper }
          style={ copyBtnWrapperStyle }>
          <button 
            className={ openCard ? `${styles.copyBtnIcon} ${styles.copyBtnIconOn}` : styles.copyBtnIcon }
            style={ copyBtnIconStyle }></button>
        </section>
      </section>
      {
        !color && !extensions ?
          <p 
            className={ openCard ? `${styles.innerInfo} ${styles.innerInfoOn}` : styles.innerInfo }
            style={{ margin: 0 }}></p>
          : 
          <p className={ openCard ? `${styles.innerInfo} ${styles.innerInfoOn}` : styles.innerInfo }>
            {
              color ?
              <>
                <span><b>{ t.colors }</b></span><br/>
                {
                  [
                    color,
                    gColorAlt().toRGB,
                    gColorAlt().toHSL
                  ].map((e, i) => <span key={ i }><b>- </b>{ e }<br/></span>)
                }
              </>
              : ''
            }
            {
              extensions ?
              <>
                <span><b>{ t.extensions }</b></span><br/>
                <span>{ extensions.join(' \u00A0') }</span>
              </>
              : ''
            }
          </p>
      }
    </article>
  );

  return (
    <section
      onClick={ () => setOpenCard(!openCard) }
      className={ openCard ? `${styles.langWrapper} ${styles.langWrapperOn}` : styles.langWrapper }>

      <article 
        className={ styles.lang }
        style={ langStyle }>
        <section className={ styles.copySection }>
          <section>
            <section className={ styles.title }>{ name }</section>
            <p>{ t.type ? t.type[type] ?? type : type }</p>
          </section>
        </section>
      </article>

      <CopyAlert cmd={ copyAlert }/>

      <article className={ openCard ? styles.cardInfoWrapper : styles.cardInfoWrapperOff }>
        { openedCard }
      </article>
    </section>
  );
};

export default Card;
