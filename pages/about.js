import Layout from '../components/MyLayout'

const boldText = {
  fontWeight: 'bold',
  fontSize: '25px'
}

export default () => (
  <div>
    <Layout>
      <h1 style={boldText}>Fitinth</h1>
      <p>Fitinth the productivity that would help you schedule and manage your workflow by adding and deleting task todos.</p>
      <h3 style={boldText}>App Info</h3>
        <p>Author</p>
        <p>Teri Eyenike</p>
      <h3 style={boldText}>Version</h3>
        <p>1.0.0</p>
      <h3 style={boldText}>License</h3>
        <p>This project is licensed under the MIT license &copy; 2019 </p>
    </Layout>
  </div>
)