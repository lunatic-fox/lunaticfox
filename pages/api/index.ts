/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import YAML from 'yaml';
import dataKeys from '../../services/dataKeys';

const api = async (req: NextApiRequest, res: NextApiResponse<object>) => {
  let data: object;
  const dataDir = path.join(process.cwd(), 'data');

  const dtRes = async (nRes: number) => {
    const fileName: any = dataKeys;
    const dt = await fs.readFile(`${dataDir}/${fileName[`dt${nRes}`]}.yml`, 'utf8');
    return YAML.parse(dt);
  };

  switch (req.query.data) {
    case dataKeys.dt0:
      data = await dtRes(0);
      res.status(200).json(data);
      break;
        
    case dataKeys.dt1:
      data = await dtRes(1);
      res.status(200).json(data);
      break;

    case dataKeys.dt2:
      data = await dtRes(2);
      res.status(200).json(data);
      break;
  
    default:
      res.write('Data not found!');
      break;
  }
  res.end();
};

export default api;
