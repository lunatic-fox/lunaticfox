/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Image from 'next/image';
import { useEffect, useState } from 'react';
import HighBox from '../../../components/HighBox';
import useDocument from '../../../hooks/useDocument';
import useDeviconObj from '../../../hooks/useDeviconObj';
import previewBgContrastColor from '../../../services/previewBgContrastColor';
import styles from './index.module.css';
import bwContrastColor from '../../../services/bwContrastColor';

const Form = () => {
  const iconObj = useDeviconObj();
  const doc = useDocument();

  const [icon, setIcon] = useState(null as string | null);
  const [version, setVersion] = useState(null as string | null);
  const [color, setColor] = useState(null as string | null);
  const [alpha, setAlpha] = useState(null as string | null);
  const [alphaHex, setAlphaHex] = useState(null as string | null);
  const [size, setSize] = useState(128);
  const [outs, setOuts] = useState(1);
  const [copyBtn, setCopyBtn] = useState(false);

  const outOpts = {
    LINK: 1,
    MD: 2,
    MD_GITHUB: 3,
    HTML: 4
  };

  const optionsList = (close: boolean) => {
    if (doc) {
      const options = doc.getElementById('optionsList') as HTMLElement;
      if (close) {
        options.style.display = 'none';
      } else {
        options.style.display = 'block';
      }
    }
  };

  useEffect(() => {
    const iconName = document.getElementById('iconName') as HTMLInputElement;
    const options = document.getElementById('optionsList') as HTMLElement;
    const closeOpts = () => options.style.display = 'none';

    window.onclick = closeOpts;
    if (iconName) {
      if (iconName.value === '')
        closeOpts();

      iconName.onkeydown = e => {
        if (e.key === 'Enter')
          closeOpts();
      };

      iconName.oninput = () => {
        setIcon(iconName.value.toLowerCase());
        setVersion(null);

        if (iconName.value === '') {
          closeOpts();
        } else {
          options.style.display = 'flex';
        }
      };
    }
  }, []);

  const OptionsListHandle = () => {
    const escaped = icon?.replace(/(\/|\\|\?|\*|\+|\-|\.|\||\[|\]|\(|\)|\{|\})/g, `\\$1`);
    const list = Object.keys(iconObj)
      .filter(e => e.match(RegExp(`^${escaped}`)));

    if (doc) {  
      if (list.length === 0) {
        optionsList(true);
        return '';
      }
      else if (list.length === 1 && icon === list[0]) {
        optionsList(true);
        return '';
      } else {
        return list.map((e, i) => 
          <div 
            key={ i }
            className={ styles.optionsItemWrapper }
            onClick={() => {
              const iconName = document.getElementById('iconName') as HTMLInputElement;
              iconName.value = e;
              setIcon(e);
              optionsList(true);
            }}>
              <div className={ styles.optionsItem }>{ e }</div>
          </div>
        );
      }
    }
  };

  useEffect(() => {
    if (icon && iconObj[icon])
      setColor(iconObj[icon].color.replace(/#/g, ''));
  }, [icon, iconObj]);

  useEffect(() => {
    if (icon && iconObj[icon]) {
      const colorElem = document.getElementById('color') as HTMLInputElement;
      colorElem.oninput = () =>  setColor(colorElem.value.replace(/#/g, ''));

      const alphaElem = document.getElementById('alpha') as HTMLInputElement;
        alphaElem.oninput = () => {
          const hex = Math.round((parseInt(alphaElem.value ?? '0') * 255) / 100);
          setAlphaHex(
            hex < 16 ?
                `0${hex.toString(16).toUpperCase()}`
              : hex.toString(16).toUpperCase()
          );
          setAlpha(alphaElem.value);
        };

      const sizeElem = document.getElementById('size') as HTMLInputElement;
      sizeElem.oninput = () => setSize(+sizeElem.value);

      const copyButton = document.getElementById('copyBtn') as HTMLDivElement;
      const textResponse = document.getElementById('textResponse') as HTMLTextAreaElement;
  
      copyButton.onclick = () => {
        setCopyBtn(true);
        navigator.clipboard.writeText(textResponse?.textContent ?? '');
        const interval = setInterval(() => {
          setCopyBtn(false);
          clearInterval(interval);
        }, .8e3);
      };
    }
  }, [
    icon,
    iconObj,
    color,
    alphaHex,
    size,
    copyBtn
  ]);

  const Preview = () => 
    <Image
      src={ `https://deviconapi.vercel.app/?${icon}${version ? `&version=${version}` : ''}${color ? `&color=${color}${alphaHex ?? 'ff'}` : ''}` }
      alt='icon'
      width={100}
      height={100}/>;
  
  const reqColor = (c: string) => c.replace(/#/g, '');

  return (
    <section className={ styles.wrapper }>
      <section className={ styles.pageBlock }>
        <section className={ styles.inputWrapper }>
          <label
            className={ styles.label }
            htmlFor="iconName">Icon name</label>
          <input
            id="iconName"
            className={ styles.input }
            type="text"
            autoComplete="off"
            defaultValue={ icon ?? '' }
            spellCheck="false"/>
        </section>

        <section id="optionsList" className={ styles.optionsList }>
          { icon !== '' ? OptionsListHandle() : '' }
        </section>        

        <section className={ styles.versions }>
          {
            icon && iconObj[icon] ? 
              iconObj[icon].versions.map((e, i) => 
              <div 
                key={ i }
                className={ styles.version }
                onClick={() => setVersion(e)}>
                  <HighBox addHighBox={ styles.versionItem }>
                    { e }
                  </HighBox>
              </div>
            ) : ''
          }
        </section>

        {
          icon && iconObj[icon] ? 
          <section 
            className={ styles.colorWrapper }>
            <section className={ styles.colorMask }></section>
            <input 
              type="color"
              id="color"
              className={ styles.color }/>
          </section> : ''
        }

        {
          icon && iconObj[icon] ? 
          <section
            id="previewBg"
            className={ styles.imageWrapper }
            style={ previewBgContrastColor(iconObj[icon].color) }>
            <section className={ styles.previewLabel }>Preview</section>
            <Preview/>
          </section> : ''
        }

        {
          icon && iconObj[icon] ? 
          <section className={ styles.inputWrapper }>
            <label
              className={ styles.label }
              htmlFor="alpha">Alpha</label>
            <section className={ styles.inputRangeWrapper }>
              <input
                id="alpha"
                className={ styles.inputRange }
                type="range"
                autoComplete="off"
                min={ 0 }
                max={ 100 }
                defaultValue="100"/>
              <section>{ `${alpha ?? 100}%` }</section>
            </section>
          </section> : ''
        }
        {
          icon && iconObj[icon] ? 
          <section className={ styles.inputWrapper }>
            <label
              className={ styles.label }
              htmlFor="size">Size</label>
            <section className={ styles.inputRangeWrapper }>
              <input
                id="size"
                className={ styles.inputRange }
                type="range"
                autoComplete="off"
                min={ 0 }
                max={ 512 }
                defaultValue="128"/>
              <section>{ `${size ?? 128}px` }</section>
            </section>
          </section> : ''
        }
      </section>

      {
        icon && iconObj[icon] ?
        <section className={ styles.pageBlock }>
          <section>Output options</section>
          <section className={ styles.outputOpts }>
            <div onClick={() => {
                setOuts(1);
                setColor(iconObj[icon].color);
              }}>
              <HighBox>Link</HighBox>
            </div>
            <div onClick={() => {
                setOuts(2);
                setColor(iconObj[icon].color);
              }}>
              <HighBox>Markdown</HighBox>
            </div>
            <div onClick={() => {
                setOuts(3);
                setColor(bwContrastColor(iconObj[icon].color));
              }} style={{ position: 'relative' }}>
              <div className={ styles.themeMask }></div>
              <HighBox>Auto themed GitHub Markdown</HighBox>
            </div>
            <div onClick={() => {
                setOuts(4);
                setColor(iconObj[icon].color);
              }}>
              <HighBox>HTML</HighBox>
            </div>
          </section>

          <section style={{ position: 'relative' }}>
            <textarea
              id='textResponse'
              className={ styles.textToCopy }
              readOnly={ true }
              value={
                outs === outOpts.MD_GITHUB ?
                `<picture>
                  <source 
                    media="(prefers-color-scheme: dark)"
                    srcset="https://deviconapi.vercel.app/?${
                      icon && iconObj[icon] ? icon : ''
                    }${
                      icon && iconObj[icon] && version ? `&version=${version}` : ''
                    }&theme=dark${
                    icon && iconObj[icon] && size ? `&size=${size}` : ''
                  }">
                  <img
                    alt="${icon && iconObj[icon] ? icon : ''}"
                    title="${icon && iconObj[icon] ? icon : ''}"
                    src="https://deviconapi.vercel.app/?${
                      icon && iconObj[icon] ? icon : ''
                    }${
                      icon && iconObj[icon] && version ? `&version=${version}` : ''
                    }&theme=light${
                      icon && iconObj[icon] && size ? `&size=${size}` : ''
                    }">
                </picture>`
                  .replace(/\n/gm, '')
                  .replace(/\s+/gm, ' ')
                  .replace(/>\s</gm, '><')
                : outs === outOpts.MD ?
                  `![${
                    icon && iconObj[icon] ? icon : ''
                  }](https://deviconapi.vercel.app/?${
                    icon && iconObj[icon] ? icon : ''
                  }${
                    icon && iconObj[icon] && version ? `&version=${version}` : ''
                  }${
                    icon && iconObj[icon] && color ? `&color=${reqColor(color)}${alphaHex ?? 'ff'}` : ''
                  }${
                    icon && iconObj[icon] && size ? `&size=${size}` : ''
                  })`
                : outs === outOpts.HTML ? 
                  `<img src="https://deviconapi.vercel.app/?${
                    icon && iconObj[icon] ? icon : ''
                  }${
                    icon && iconObj[icon] && version ? `&version=${version}` : ''
                  }${
                    icon && iconObj[icon] && color ? `&color=${reqColor(color)}${alphaHex ?? 'ff'}` : ''
                  }${
                    icon && iconObj[icon] && size ? `&size=${size}` : ''
                  }" alt="${
                    icon && iconObj[icon] ? icon : ''
                  }" title="${
                    icon && iconObj[icon] ? icon : ''
                  }"/>`
              : `https://deviconapi.vercel.app/?${
                icon && iconObj[icon] ? icon : ''
                }${
                  icon && iconObj[icon] && version ? `&version=${version}` : ''
                }${
                  icon && iconObj[icon] && color ? `&color=${reqColor(color)}${alphaHex ?? 'ff'}` : ''
                }${
                  icon && iconObj[icon] && size ? `&size=${size}` : ''
                }`
            }/>

            <div id='copyBtn'>
              <HighBox addHighBox={ styles.copyIconWrapper }>
                <div className={ styles.copyIcon }></div>
              </HighBox>
            </div>

            { 
              copyBtn ?
                <div className={ styles.copyMsg }>
                  Copied!
                </div> : '' 
            }
          </section>
        </section> : ''
      }
    </section>
  );
};

export default Form;
