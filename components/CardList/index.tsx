/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import axios from 'axios';
import apiReqs from '../../services/apiReqs';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import Card from '../Card';

export type CardObject = {
  i: string;
  link: string | null;
  title: string;
  subtitle: string;
  langs: string[];
};

const CardList = () => {
  const [cards, setCards] = useState([] as CardObject[]);

  useEffect(() => {
    axios.get(apiReqs.requestURL(apiReqs.MAIN_CARDS))
      .then(({ data }) => setCards(data as CardObject[]));
  }, []);

  return (
    <section className={styles.wrapper}>
      {
        cards
        .filter(e => {
          const iNav = window.navigator.language;
          if (iNav === 'pt' || iNav === 'pt-BR') {
            if (e.i === 'ptbr')
              return e;
          } else {
            if (e.i === 'en')
              return e;
          }
        })
        .map((e, i) => 
          <div key={i}>
            <Card
              link={e.link ?? '#'}
              title={e.title}
              subtitle={e.subtitle}
              langs={e.langs}/>
          </div>
        )
      }
    </section>
  );
};

export default CardList;
