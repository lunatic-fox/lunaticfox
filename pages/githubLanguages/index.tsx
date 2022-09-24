/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Page from '../../components/Page';
import Loading from '../../components/Loading';
import CardList from './components/CardList';
import useTranslation from '../../hooks/useTranslation';
import dataKeys from '../../services/dataKeys';

const DPage = () => {
  const t = useTranslation(dataKeys.dt1, { title: '' });
  return (
    <Page 
      metatags={{
        title: 'GitHub Languages',
        description: 'A web project to present all languages known to GitHub. Here you can see the type, the color in hexadecimal, RGB and HSL, and the language extensions.',
        urlEndPoint: 'githubLanguages',
        banner: 'banner-githubLanguages'
      }}
      pageTitle={ t.title }>
      <Loading endTrigger={ t.title ? true : false }/>
      <CardList/>
    </Page>
  );
};

export default DPage;
