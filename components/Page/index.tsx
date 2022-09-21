/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

import Head from 'next/head';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

type PageProps = {
  metatags: {
    title: string;
    description: string;
    urlEndPoint?: string;
  },
  children: React.ReactNode
};

const Page = ({ metatags, children }: PageProps) => {

  return (
    <>
      <Head>
        <title>Lunatic Fox</title>
        <meta name='author' content='Josélio Júnior (Lunatic Fox)'/>
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:title' content={ metatags.title }/>
        <meta name='twitter:description' content={ metatags.description }/>
        <meta name='twitter:creator' content='@Jojo89373534'/>
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Lunatic Fox'/>
        <meta property='og:title' content={ metatags.title }/>
        <meta property='og:description' content={ metatags.description }/>
        <meta property='og:url' content={`https://lunaticfox.vercel.app/${metatags.urlEndPoint ?? ''}`}/>
        <meta property='og:image' content='https://lunaticfox.vercel.app/images/banner.png'/>
        <meta property='og:image:type' content='image/png'/>
        <link rel='icon' type='image/png' href='/images/favicon.png'/>
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
