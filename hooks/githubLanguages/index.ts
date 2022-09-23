/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import { useEffect, useState } from 'react';
import apiKeys from '../../services/apiKeys';
import apiReqs from '../../services/apiReqs';

export const placeholder = {
  title: '',
    numberOfLanguages: '',
    languagesWithColor: '',
    sourceFile: '',
    myGithub: '',
    typeString: '',
    type: {
      programming: '',
      data: '',
      prose: ''
    },
    colors: '',
    extensions: ''
};

type TranslationSrc = typeof placeholder;

type TranslationObj = {
  en: TranslationSrc;
  ptbr: TranslationSrc;
};

export type Translation =  Omit<TranslationSrc, 'type'> & {type: {[k: string]: string }};

export const usePageTranslation = () => {
  const [t, setT] = useState({} as Translation);
  useEffect(() => {
    axios.get(apiReqs(apiKeys.GITHUB_LANGUAGES_TRANSLATION))
      .then(({ data }: { data: TranslationObj }) => {
        const iNav = window.navigator.language;
        if (iNav === 'pt' || iNav === 'pt-BR') {
          setT(data.ptbr);
        } else {
          setT(data.en);
        }
      })
      .catch(() => placeholder);
  }, []);
  return t;
};
