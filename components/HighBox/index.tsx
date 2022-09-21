/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import styles from './index.module.css';

type HighBoxProps = {
  addHighBox?: string
  children?: React.ReactNode
}

const HighBox = ({ addHighBox, children }: HighBoxProps) => 
<section className={ `${ styles.default } ${ addHighBox ?? '' }` }>
  { children }
</section>;

export default HighBox;
