import React from 'react';
import Link from "next/link";

const Post = ({post}) => {
  return (
    <>
      <Link href='./'>Назад</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <strong>Author Id {post.userId}</strong>
    </>
  );
};

export default Post;
