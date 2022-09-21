/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import styles from './index.module.css';

const CopyAlert = ({ win, cmd }: { win: Window | null, cmd: boolean }) => {
  const iNav = win?.navigator.language;
  return (
    <section className={ cmd ? `${styles.wrapper} ${styles.on}` : styles.wrapper }>
      <span>{iNav === 'pt' || iNav === 'pt-BR' ? 'Copiado!' : 'Copied!'}</span>
    </section>
  );
};

export default CopyAlert;
