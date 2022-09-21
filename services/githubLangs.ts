/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import YAML from 'yaml';

export type GitHubLinguist = {
  [k: string]: {
    name: string;
    color: string | null;
    type: string;
    extensions: string[] | null;
  };
}

const URL = `https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`;

const getGithubLangs = async () => {
  try {
    const dt = await( await axios.get(URL)).data;
    const res = Object.fromEntries(
      Object.entries(YAML.parse(dt))
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
          }];
        })
    );
    return res;
  } catch {
    return {};
  }
};

const githubLangs = Promise.resolve(getGithubLangs());

export default githubLangs;
