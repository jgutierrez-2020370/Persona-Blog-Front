import { PulseLoader } from 'react-spinners'
import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { CardPost } from './CardPost'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Posts = () => {
  const { posts, isFetchingPosts } = useContextPosts()
  const [selectedCourse, setSelectedCourse] = useState('')
  let navigate = useNavigate()

    const filteredPosts = selectedCourse
      ? posts.filter((post) => post.course === selectedCourse)
      : posts

    const handleCourseChange = (e) => {
      setSelectedCourse(e.target.value)
    }

    if (isFetchingPosts) {
      return (
          <div className="loading">
              <PulseLoader />
          </div>
      )
    }

  return (
  <div className="Posts-div">
    <div className='posts-center'>
      <h2>Mis Proyectos</h2>
      <select
        id="course-filter"
        value={selectedCourse}
        onChange={handleCourseChange}
      >
        <option value="">Cursos</option>
        <option value="Taller">Taller</option>
        <option value="Tecnología">Tecnología</option>
        <option value="TICs">TICs</option>
        <option value="Práctica Supervisada">Práctica Supervisada</option>
      </select>
     </div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <CardPost handleClick={()=>navigate(`/commentaries/${post._id}`)} key={post._id} post={post} />
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  )
}