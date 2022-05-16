import { Link } from 'react-router-dom'
import './page.scss'

function Home() {
  const linkStyle = {
    display: 'block'
  }
  return (
    <section className='home'>
      <Link to='/wordlist' style={linkStyle}>
        단어 목록 보기
      </Link>
      <Link to='/quiz' style={linkStyle}>
        퀴즈 보기
      </Link>
    </section>
  )
}

export default Home
