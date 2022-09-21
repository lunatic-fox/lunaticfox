/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Page from '../components/Page';
import Loading from '../components/Loading';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <Page>
      <Loading timeDelay={1.5e3}/>
      <CardList/>
    </Page>
  );
}

export default Home;
