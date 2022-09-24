/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Link from 'next/link';
import styles from './index.module.css';
import Card from '../Card';
import useGithubLangs from '../../../../hooks/useGithubLangs';
import useTranslation from '../../../../hooks/useTranslation';
import apiKeys from '../../../../services/apiKeys';

export const placeholder = {
  numberOfLanguages: '',
  languagesWithColor: '',
  sourceFile: '',
  myGithub: '',
  typeString: '',
  type: {
    programming: '',
    data: '',
    prose: ''
  },
  colors: '',
  extensions: ''
};

const CardList = () => {
  let colored = 0;
  const t = useTranslation(apiKeys.GITHUB_LANGUAGES_TRANSLATION, placeholder);
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
              <a><i>languages.yml</i></a>
            </Link>
          </h4>
          <h4>
            <span>{ t.myGithub }: </span>
            <Link href="https://github.com/lunatic-fox">
              <a><i>Lunatic Fox</i></a>
            </Link>
          </h4>
        </section>
      </section>
      <section className={ styles.wrapper }>{ langsList }</section>
    </section>
  );
};

export default CardList;
