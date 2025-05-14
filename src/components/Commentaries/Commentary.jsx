import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCommentaryByPostId } from '../../shared/hooks/useCommentaryByPostId'
import { CommentaryCard } from './CommentaryCard'
import { addCommentaryRequest } from '../../services/api' // Asegúrate de importar el método

export const Commentary = () => {
    const { idPost } = useParams()
    const { getCommentaryByPostId, comment } = useCommentaryByPostId()
    const [isLoading, setIsLoading] = useState(true)
    const [newComment, setNewComment] = useState({ title: '', description: '' })
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            await getCommentaryByPostId(idPost)
            setIsLoading(false)
        }
        fetchData()
    }, [idPost]) 

    const handleChange = (e) => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }

    const handleAddComment = async () => {
        if (newComment.title && newComment.description) {
            const postData = { postId: idPost, ...newComment }
            const response = await addCommentaryRequest(postData)
            if (response.error) {
                alert('Error al agregar el comentario')
            } else {
                setNewComment({ title: '', description: '' })
                getCommentaryByPostId(idPost)
            }
        }
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    if (isLoading) {
        return <div>Cargando comentarios...</div>
    }

    return (
        <div className="commentary-container">
            <h2 className="centered-title">Comentarios</h2>

            <button onClick={handleGoBack} className="btn-back">Volver</button>

            <div className="comment-form">
                <input 
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={newComment.title}
                    onChange={handleChange}
                    className="input-field"
                />
                <textarea
                    name="description"
                    placeholder="Descripción"
                    value={newComment.description}
                    onChange={handleChange}
                    className="input-field"
                />
                <br />
                <button onClick={handleAddComment} className="btn-submit">Comentar</button>
            </div>

            {comment.length === 0 ? (
                <p>No hay comentarios aún</p>
            ) : (
                comment.map((Comment) => (
                    <CommentaryCard
                        key={Comment._id}
                        title={Comment.title}
                        description={Comment.description}
                        date={Comment.date}
                    />
                ))
            )}
        </div>
    )
}

