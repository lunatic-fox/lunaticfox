/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Link from 'next/link';
import styles from './index.module.css';
import Card from '../Card';
import { useGithubLangs } from '../../../../hooks';
import { usePageTranslation } from '../../../../hooks/githubLanguages';

const CardList = () => {
  let colored = 0;
  const t = usePageTranslation();
  const ghl = useGithubLangs();

  const langsList = Object.values(ghl)
    .map((v, i) => {
      if (v.color) colored++;
      return <Card key={ i } translation={ t } { ...v } />;
    });

  return (
    <section>
      <section className={ styles.wrapper }>
        <section>
          <h4>
            <span>{ t.numberOfLanguages }: { langsList.length }</span>
          </h4>
          <h4>
            <span>{ t.languagesWithColor }: { colored }</span>
          </h4>
          <h4>
            <span>{ t.sourceFile }: </span>
            <Link href="https://github.com/github/linguist/blob/master/lib/linguist/languages.yml">
              <a target="_blank"><i>languages.yml</i></a>
            </Link>
          </h4>
          <h4>
            <span>{ t.myGithub }: </span>
            <Link href="https://github.com/lunatic-fox">
              <a target="_blank"><i>Lunatic Fox</i></a>
            </Link>
          </h4>
        </section>
      </section>
      <section className={ styles.wrapper }>{ langsList }</section>
    </section>
  );
};

export default CardList;
