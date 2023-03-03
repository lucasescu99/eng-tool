import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tooling App</title>
        <meta name="description" content="Tooling app for the boys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>App TODO List</h1>
        <ul className={styles.toDoList}>
          <li className={styles.toDoItem}>Define DB</li>
          <li className={styles.toDoItem}>Define Styles package</li>
          <li className={styles.toDoItem}>Define all</li>
        </ul>
      </main>
    </>
  )
}
