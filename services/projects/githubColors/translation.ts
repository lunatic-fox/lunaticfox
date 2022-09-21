/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import apiReqs from '../../apiReqs';

type TranslationSrc = {
  numberOfLanguages: string;
  languagesWithColor: string;
  sourceFile: string;
  myGithub: string;
  typeString: string;
  type: {
    programming: string;
    data: string;
    prose: string;
  }
  colors: string;
  extensions: string;
};

type TranslationObj = {
  en: TranslationSrc;
  ptbr: TranslationSrc;
};

export type Translation =  Omit<TranslationSrc, 'type'> & {type: {[k: string]: string }};

const translation = async (win: Window) => {
  const res = await (await axios.get(apiReqs.requestURL(apiReqs.GITHUB_COLORS_TRANSLATION))).data as TranslationObj;
  const iNav = win.navigator.language;
  if (iNav === 'pt' || iNav === 'pt-BR') 
    return res.ptbr as Translation;
  return res.en as Translation;
};

export default translation;
