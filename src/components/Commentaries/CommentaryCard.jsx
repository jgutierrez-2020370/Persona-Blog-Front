import './Commentary.css'

export const CommentaryCard = ({ title, description, date }) => {

    return (
        <div className="card-commentary" style={{ width: 'flex' }}>
            <h5 className="cardTitle">{title}</h5>
            <p className="cardDescription">{description}</p>
            <p className='cardDate'>{date.toString().substring(0, 10)}</p>
            <hr className="divider" />
        </div>
    )
}