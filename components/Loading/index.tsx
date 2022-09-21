/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import { useEffect, useState } from 'react';
import styles from './index.module.css';

const Loading = ({ timeDelay }: { timeDelay: number }) => {
  const [load, setLoad] = useState('flex');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad('none');
    }, timeDelay);
    return () => clearInterval(interval);
  }, [timeDelay]);

  return (
    <section 
      className={ styles.loadScreen }
      style={{ 
        display: load,
        animationDelay: `${timeDelay}ms`
      }}>
        <div className={ styles.loadBlock }></div>
        <div className={ styles.loadCircle }>
          <div className={ styles.loadInnerCircle }></div>
        </div>
    </section>
  );
};

export default Loading;
