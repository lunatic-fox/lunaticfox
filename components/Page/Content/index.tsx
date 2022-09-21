/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import styles from './index.module.css';

const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className={ styles.box }> { children } </main>;
};

export default Content;
