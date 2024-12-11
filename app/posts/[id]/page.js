import Link from "next/link";
import Post from "../../components/Post";

export async  function generateMetadata({params, searchParams}) {
    const post = await  fetchData(params.id)
    return {
        title: post.title,
        description: post.body
    }
}

async function fetchData (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const result = await res.json()
    return result
}

const PagePost = async ({params: {id}}) => {
  const post = await fetchData(id)


  return (
    <div >
        <Post post={post}/>
    </div>
  );
};

export default PagePost;
