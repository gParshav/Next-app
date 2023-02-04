import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about-us'>About us</Link>

        </nav>
      </header>
      <main className={styles.main}>
        <Link href='events/london'>
          <img/>
          <h2>Events in London</h2>
          <p>Phasellus maximus vulputate elit ut varius. Integer pellentesque nisl sed vulputate venenatis. Ut egestas eget nulla eget 
            euismod. Vivamus in maximus tortor, quis finibus risus. Sed erat magna, lacinia dapibus ex id, mollis feugiat magna. 
            Curabitur hendrerit leo vitae velit gravida dictum. Suspendisse urna risus, tempor sed velit ac, pharetra volutpat ipsum. 
            Mauris sed laoreet nibh. Donec eu vehicula leo.</p>
        </Link>

        <Link href='events/sanfransisco'>
          <img/>
          <h2>Events in San Fransisco</h2>
          <p>Phasellus maximus vulputate elit ut varius. Integer pellentesque nisl sed vulputate venenatis. Ut egestas eget nulla eget 
            euismod. Vivamus in maximus tortor, quis finibus risus. Sed erat magna, lacinia dapibus ex id, mollis feugiat magna. 
            Curabitur hendrerit leo vitae velit gravida dictum. Suspendisse urna risus, tempor sed velit ac, pharetra volutpat ipsum. 
            Mauris sed laoreet nibh. Donec eu vehicula leo.</p>
        </Link>

        <Link href='events/barcelona'>
          <img/>
          <h2>Events in Barcelona</h2>
          <p>Phasellus maximus vulputate elit ut varius. Integer pellentesque nisl sed vulputate venenatis. Ut egestas eget nulla eget 
            euismod. Vivamus in maximus tortor, quis finibus risus. Sed erat magna, lacinia dapibus ex id, mollis feugiat magna. 
            Curabitur hendrerit leo vitae velit gravida dictum. Suspendisse urna risus, tempor sed velit ac, pharetra volutpat ipsum. 
            Mauris sed laoreet nibh. Donec eu vehicula leo.</p>
        </Link>
      </main>
      <footer className={styles.footer}>
        <p>2022 time to code</p>
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return {
      props:{
          title:'Hello everyone'
      }
  }
}
