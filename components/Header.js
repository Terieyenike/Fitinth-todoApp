import Link from 'next/link'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={linkStyle}>About</a>
      </Link>
    </header>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  marginRight: '15px',
  textTransform: 'uppercase'
}

const headerStyle = {
  background: '#333',
  textAlign: 'center',
  padding: '10px',
  color: '#fff'
}

export default Header
