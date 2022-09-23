/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import contrastColor from '../../services/contrastColor';
import Link from 'next/link';
import HighBox from '../HighBox';
import LowBox from '../LowBox';
import styles from './index.module.css';
import { CardObject } from '../CardList';
import { useGithubLangs } from '../../hooks';

type LangProps = {
  color: string | null;
  name: string;
};

const Lang = ({ color, name }: LangProps) => {
  return (
    <span style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        background: color ? color
          : `repeating-linear-gradient(
              0deg,
              #fff3 0px,
              #fff3 1px,
              #0003 1px,
              #0003 2px
            )`,
        border: color ? 
              `solid 1px ${contrastColor(color, .3)}55`
            : `solid 1px #5557` 
      }}></div>
      <span style={{
        padding: '2px 0 0 3px',
        marginRight: '6px',
        fontSize: '.8em',
        userSelect: 'none'
      }}>{ name }</span>
    </span>
  );
};

type CardProps = Omit<CardObject, 'i'> & { link: string; };

const Card = ({ title, subtitle, langs, link }: CardProps) => {
  const ghl = useGithubLangs();
  
  return (
    <section className={ styles.wrapper }>
      <HighBox  addHighBox={ styles.addHighBox }>
        <section className={ styles.title }>
          { title ? `> ${ title }` : '' }
        </section>
        <LowBox addLowBox={ styles.subtitle }>
          { subtitle ?? '' }
        </LowBox>
        <section className={ styles.langsBox }>
          {
            langs ? langs.map((e, i) => 
              ghl[e]?.name ?
                <span key={ i }>
                  <Lang
                    name={ ghl[e].name }
                    color={ ghl[e].color } />
                </span>
                : ''
            ) : ''
          }
        </section>
        <Link href={ link }>
          <a className={ styles.linkBtnBox }>
            <div className={ styles.linkBtnSymbol } ></div>
          </a>
        </Link>
      </HighBox>
    </section>
  );
};

export default Card;
