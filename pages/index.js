import Head from 'next/head'
import Layout from '../components/MyLayout'
import TodoApp from './app'

const Index = () => (
  <div>
    <Head>
      <title>Todo List Application</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <TodoApp />
    </Layout>
  </div>
)

export default Index