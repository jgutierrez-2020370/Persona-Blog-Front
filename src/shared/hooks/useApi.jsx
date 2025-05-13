import { useState } from 'react'
import { getPostRequest } from '../../services/api.js'
import toast from 'react-hot-toast'
import { addCommentaryRequest } from '../../services/api.js'

export const useApi = () => {
    const [posts, setPosts] = useState(null)
    const getPosts = async()=>{
       const response = await getPostRequest()
       if(response.error){
        return toast.error(
            response?.err?.response?.data?.message ||
            'Error al obtener las publicaciones'
        )
       }
       setPosts(response.data.posts)

    }

    const addCommentary = async(post)=>{
      const response = await addCommentaryRequest(post)
      if(response.error){
        console.error(response.err)
         return toast.error(
            response?.err?.response?.data?.message ||
            'Error al guardar la publicación'
        )
      }
      return toast.success('Publicación guardada')
    }
  return {
    posts,
    isFetchingPosts: !posts,
    getPosts,
    addCommentary
  }
}
