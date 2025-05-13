import './CardPost.css'

export const CardPost = ({ post }) => {
    const { name, description, course, publicationDate, link } = post
    const date = new Date(publicationDate)
    const dateString = date.toISOString().substring(0, 10)

    return (
      <div className="card" style={{ width: '18rem' }}>
        <h5 className="cardTitle">{name}</h5>
        <p className="cardDescription">{description}</p>
        <p className="cardCourse">{course}</p>
        <p className="cardDate">{dateString}</p>
        <a className="link" href={link}>{link}</a>
        <hr className="divider" />  
        <br />
        <button className="btn-comments">Comentarios</button>
      </div>
    )
}