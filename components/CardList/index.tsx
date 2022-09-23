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
import apiKeys from '../../services/apiKeys';
import Loading from '../Loading';


const TRIGGER = 'TRIGGER';
const placeholder = {
  i: TRIGGER,
  link: '' || null,
  title: '',
  subtitle: '',
  langs: ['']
};

export type CardObj = typeof placeholder;

const CardList = () => {
  const [cards, setCards] = useState([placeholder]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios.get(apiReqs(apiKeys.MAIN_CARDS))
      .then(({ data }: { data: CardObj[]}) => {
        const res = data.filter(e => {
          const iNav = window.navigator.language;
          if (iNav === 'pt' || iNav === 'pt-BR')
            return e.i === 'ptbr';
          return e.i === 'en'
        });

        setCards(res);

        if (res.every(f => f.i !== TRIGGER)) {
          const interval = setTimeout(() => {
            setTrigger(true);
            clearInterval(interval);
          }, .3e3);
        }
      });
  }, []);

  return (
    <section className={styles.wrapper}>
      <Loading endTrigger={ trigger }/>
      {
        cards.map((e, i) => 
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
