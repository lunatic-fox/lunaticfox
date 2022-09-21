/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Link from 'next/link';
import HighBox from '../../HighBox';
import styles from './index.module.css';

const Footer = () => {
  return (
    <HighBox addHighBox={ styles.footer }>
      <Link href='https://github.com/lunatic-fox'>
        <a>
          <span>Josélio Júnior (Lunatic Fox) -&nbsp;</span>
          <span>{ new Date().getFullYear() }</span>
        </a>
      </Link>
    </HighBox>
  );
};

export default Footer;
