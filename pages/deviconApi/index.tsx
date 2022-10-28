/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Page from '../../components/Page';
import Form from './Form';
import useTranslation from '../../hooks/useTranslation';
import dataKeys from '../../services/dataKeys';

const DPage = () => {
  const t = useTranslation(dataKeys.dt3, { title: '' });

  return (
    <Page
      metatags={{
        title: 'Devicon API - Interface',
        description: 'An derivative API project to serve Devicon plain icons in different colors and sizes.',
        urlEndPoint: 'deviconApi'
      }}
      pageTitle={ t.title }>
      <Form/>
    </Page>
  );
};

export default DPage;