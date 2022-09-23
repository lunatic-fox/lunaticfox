/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import { useEffect, useState } from 'react';
import YAML from 'yaml';

const placeholder = {
  id: {
    name: '',
    color: '' || null,
    type: '',
    extensions: [''] || null
  }
};

export type GitHubLinguist = { [k: string]: typeof placeholder.id } ;

export const useGithubLangs = () => {
  const [obj, setObj] = useState({} as GitHubLinguist);
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`)
      .then(({ data }) => 
        setObj(
          Object.fromEntries(
            Object.entries(YAML.parse(data))
              .map(([k, v]: [string, any]) => {
                const kalt = k.toLowerCase()
                  .replace(/\+/g, '-plus')
                  .replace(/\#/g, '-sharp')
                  .replace(/\*/g, '-asterisk');
                return [kalt, {
                  name: k,
                  color: v.color as (string | null),
                  type: v.type as string,
                  extensions: v.extensions as (string[] | null)
                } as GitHubLinguist[string]];
              })
          )
        )
      )
      .catch(() => setObj(placeholder as GitHubLinguist));
  }, []);
  return obj;
};
