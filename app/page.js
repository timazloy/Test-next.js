import Image from "next/image";
import Link from "next/link";

async function fetchData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await res.json()
    return result
}

export default async function Home() {
    const posts = await fetchData()

    console.log(posts)
  return (
      <>
        <h1>Главная страница</h1>
          {posts.map(el => (
              <div key={el.id}>
                  <h2>{el.title}</h2>
                  <p>{el.body}</p>
                  <Link href={`./posts/${el.id}`}>подробнее</Link>
              </div>
          ))}

      </>
  );
}
