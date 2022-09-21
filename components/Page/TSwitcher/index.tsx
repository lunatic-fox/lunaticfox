/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import { useEffect, useState } from 'react';
import styles from './index.module.css';

const themeToggler = (doc: Document, theme: boolean) => {
  if (theme) {
    doc.body.className = 'dark';
  } else {
    doc.body.className = 'light';
  }
};

const TSwitcher = () => {
  const [theme, setTheme] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem('tm') === 'light') {
      setTheme(false);
      themeToggler(document, false);
    } else {
      themeToggler(document, true);
    }
  }, []);

  const handleTheme = () => {
    setTheme(!theme);
    themeToggler(document, !theme);
    localStorage.setItem('tm', theme ? 'light' : 'dark');
  };

  return (
    <section 
      className={ styles.swBox }
      onClick={ handleTheme }>
      <aside className={ theme ? styles.swSLeft : styles.swSRight }>
        <section className={ styles.icon }></section>
      </aside>
    </section>
  );
};

export default TSwitcher;
