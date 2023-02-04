import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About us</a>

        </nav>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
