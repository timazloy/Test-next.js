import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css'

async function fetchData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    const result = await res.json()
    return result
}

export default async function Home() {
    const posts = await fetchData()

    console.log(posts)
  return (
      <section>
        <h1 className={styles.title}>Main Page</h1>
          <div>
              {posts.map(el => (
                  <div key={el.id} className={styles.item}>
                      <h2 className={styles.title_item}>{el.title}</h2>
                      <p className={styles.text}>{el.body}</p>
                      <Link className='link' href={`./posts/${el.id}`}>подробнее</Link>
                  </div>
              ))}
          </div>
      </section>
  );
}
