// Footer.jsx
import React, { useContext } from 'react'
import { PostDataContext } from '../context/PostContext'

const Footer = () => {

  const posts = useContext(PostDataContext)

  return (
    <div>
      <h2>Posts Data</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <p>Id: {post.id}</p>
          <p>Name: {post.user.name}</p>
          <p>Username: {post.user.username}</p>
          <p>Caption: {post.caption}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <p>Liked: {post.isLiked ? "Yes" : "No"}</p>
          <p>Created At: {post.createdAt}</p>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Footer