/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import type { NextApiRequest, NextApiResponse } from 'next';
import apiReqs from '../../services/apiReqs';
import fs from 'fs';
import YAML from 'yaml';

type Data = { name: string };

const api = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let data: any = {};
  switch (req.query.data) {
    case apiReqs.MAIN_CARDS:
      data = YAML.parse(fs.readFileSync(`pages/data/${apiReqs.MAIN_CARDS}.yml`, 'utf8'));
      res.json(data);
      break;
  
    case apiReqs.GITHUB_COLORS_TRANSLATION:
      data = YAML.parse(fs.readFileSync(`pages/data/${apiReqs.GITHUB_COLORS_TRANSLATION}.yml`, 'utf8'));
      res.json(data);
      break;
  
    default:
      res.write('No data found!');
      break;
  }
  res.end();
}

export default api;
