/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import { useEffect, useState } from 'react';
import dataKeys from '../services/dataKeys';

const useTranslation = (apiKey: string, placeholder: { [k: string]: any }) => {
  const [t, setT] = useState(placeholder);
  useEffect(() => {
    axios.get(dataKeys.req(apiKey))
      .then(({ data }) => {
        const iNav = window.navigator.language;
        if (iNav === 'pt' || iNav === 'pt-BR') {
          setT(data.ptbr);
        } else {
          setT(data.en);
        }
      })
      .catch(() => placeholder);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return t as typeof placeholder;
};

export default useTranslation;
