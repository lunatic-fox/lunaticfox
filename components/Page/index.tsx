/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Head from 'next/head';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Lunatic Fox</title>
        <meta name="author" content="Josélio Júnior aka Lunatic Fox" />
        <meta name="description" content="A collection of my projects" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <Header/>
      <Content>
        { children }
      </Content>
      <Footer/>
    </>
  );
}

export default Page;
