/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import styles from './index.module.css';

type LowBoxProps = {
  addLowBox?: string;
  children?: React.ReactNode
}

const LowBox = ({ addLowBox, children }: LowBoxProps) => 
<section className={ `${ styles.default } ${ addLowBox ?? '' }` }>
  { children }
</section>;

export default LowBox;
