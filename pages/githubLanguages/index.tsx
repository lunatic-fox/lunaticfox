/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Page from '../../components/Page';
import Loading from '../../components/Loading';
import CardList from './components/CardList';

const DPage = () => {
  return (
    <Page metatags={{
      title: 'GitHub Languages',
      description: 'A web project to present all languages known to GitHub. Here you can see the type, the color in hexadecimal, RGB and HSL, and the language extensions.',
      urlEndPoint: 'githubLanguages'
    }}>
      <Loading timeDelay={3.5e3}/>
      <CardList/>
    </Page>
  );
};

export default DPage;
