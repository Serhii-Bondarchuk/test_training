import React, { useEffect, useState } from 'react'
import axios from 'axios'

type PostsType = {
  userId: 1
  id: 1
  title: string
  body: string
}

function DataLoad() {
  const [posts, setPosts] = useState<PostsType[]>()
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      )
      console.log(response.data)
      setPosts(response.data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div>DataLoad from server!</div>
      {posts?.map((post) => (
        <>
          <p key={post.id}>
            {post.id}. {post.title}
          </p>
        </>
      ))}
    </>
  )
}

export default DataLoad
