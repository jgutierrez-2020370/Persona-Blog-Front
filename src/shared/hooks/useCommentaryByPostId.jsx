import React, { useState } from 'react'
import { getPostCommantaries } from '../../services/api'

export const useCommentaryByPostId = () => {
    const [comment, setComment] = useState([])

    const getCommentaryByPostId = async(idPost)=>{
        
        const response = await getPostCommantaries(idPost)
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al obtener los comentarios'
            )
        }
        setComment(response.data.comnentaries)
        console.log(comment);
        

    }
  return {
      comment,
    getCommentaryByPostId
}
}
