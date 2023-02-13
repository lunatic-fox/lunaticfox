/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2023
 @license MIT
*//**/

import Page from '../../components/Page';
import Form from './Form';

export default function DPage() {
  const title = 'Devicon API - Interface';
  
  return (
    <Page
      metatags={{
        title: title,
        description: 'An derivative API project to serve Devicon plain icons in different colors and sizes.',
        urlEndPoint: 'deviconApi'
      }}
      pageTitle={ title }>
      <Form/>
    </Page>
  );
}
