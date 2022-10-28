/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import { useEffect, useState } from 'react';

const placeholder = {
  id: {
    defaults: {
      color: '#00000000'
    },
    versions: {}
  }
};

type IconColors = { [k: string]: typeof placeholder.id };
type Response = { [k: string]: {
  color: string,
  versions: string[]
}};

const useDeviconObj = () => {
  const [obj, setObj] = useState({ id: {
    color: '',
    versions: []
  }} as Response);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/lunatic-fox/deviconapi/main/src/data/index.json`)
      .then(({ data }: { data: IconColors }) => 
        setObj(
          Object.fromEntries(
            Object.entries(data)
            .map(([k, v]) => [k, {
              color: v.defaults.color,
              versions: Object.keys(v.versions)
            }])
          )
        )
      )
  }, []);

  return obj;
};

export default useDeviconObj;
