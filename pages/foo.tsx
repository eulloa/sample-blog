import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Foo({ foo }) {
   return (
      <Layout head>
         <Head>
            <title>This is the Foo page</title>
         </Head>
         <h1>{foo}</h1>
      </Layout>
   )
}

export async function getStaticProps() {
   return {
      props: {
         foo: 'shebang'
      }
   }
}