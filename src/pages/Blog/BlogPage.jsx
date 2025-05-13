import React from 'react'
import { Posts } from '../../components/Posts/Posts.jsx'
import { PostProvider } from '../../contexts/PostsContext.jsx'

export const BlogPage = () => {
  return (
    <PostProvider>
      <Posts />
    </PostProvider>
  )
}
