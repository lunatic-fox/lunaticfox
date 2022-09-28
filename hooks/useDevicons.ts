/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import { useEffect, useState } from 'react';
import dataKeys from '../services/dataKeys';

const placeholder = { langKey: '' };

const useDevicons = () => {
  const [obj, setObj] = useState(placeholder);
  useEffect(() => {
    axios.get(dataKeys.req(dataKeys.dt2))
      .then(({ data }) => setObj(data))
      .catch(() => setObj(placeholder));
  }, []);
  return obj;
};

export default useDevicons;
