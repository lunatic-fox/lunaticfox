/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import { useEffect, useState } from 'react';
import styles from './index.module.css';

const Loading = ({ endTrigger }: { endTrigger: boolean }) => {
  const [end, setEnd] = useState(false);
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    if (endTrigger) {
      setEnd(true);
      const interval = setInterval(() => {
        setDisplay('none');
        clearInterval(interval);
      }, .8e3);
    }
  }, [endTrigger]);

  return (
    <section 
      className={ end ? `${styles.loadScreen} ${styles.loadEnd}` : styles.loadScreen  }
      style={{ display: display }}>
      <div className={ styles.loadBlock }></div>
      <div className={ styles.loadCircle }>
        <div className={ styles.loadInnerCircle }></div>
      </div>
    </section>
  );
};

export default Loading;
