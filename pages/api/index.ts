/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import YAML from 'yaml';
import apiKeys from '../../services/apiKeys';

const api = async (req: NextApiRequest, res: NextApiResponse<object>) => {
  let data: string;
  const dataDir = path.join(process.cwd(), 'data');

  switch (req.query.data) {
    case apiKeys.MAIN_CARDS:
      data = await fs.readFile(`${dataDir}/${apiKeys.MAIN_CARDS}.yml`, 'utf8');
      res.status(200).json(YAML.parse(data));
      break;
        
    case apiKeys.GITHUB_LANGUAGES_TRANSLATION:
      data = await fs.readFile(`${dataDir}/${apiKeys.GITHUB_LANGUAGES_TRANSLATION}.yml`, 'utf8');
      res.status(200).json(YAML.parse(data));
      break;
  
    default:
      res.write('Data not found!');
      break;
  }
};

export default api;
