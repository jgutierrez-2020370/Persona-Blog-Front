import './CardPost.css'
import { useState } from 'react'

export const CardPost = ({ post, handleClick }) => {
  const { name, description, course, publicationDate, link } = post
  const [showMore, setShowMore] = useState(false)

  const date = new Date(publicationDate)
  const dateString = date.toISOString().substring(0, 10)

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState)
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <h5 className="cardTitle">{name}</h5>
      <p className="cardDescription">{description}</p>
      <p className="cardCourse">{course}</p>
      <p className="cardDate">{dateString}</p>

      
      {showMore && (
        <>
          <a className="link" href={link}>{link}</a>
        </>
      )}

      <button className="btn-show" onClick={toggleShowMore}>
        {showMore ? 'Ver menos' : 'Ver más'}
      </button>

      <button onClick={handleClick} className="btn-comments">Comentarios</button>
    </div>
  )
}
