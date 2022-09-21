/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Link from 'next/link';
import TSwitcher from '../TSwitcher';
import styles from './index.module.css';

const Header = () => {
  return (
    <nav className={ styles.navBarWrapper }>
      <section className={ styles.navBar }>
          <Link href='/'>
            <section className={ styles.title }>
              Lunatic Fox
            </section>
          </Link>
        <TSwitcher/>
      </section>
    </nav>
  );
};

export default Header;
