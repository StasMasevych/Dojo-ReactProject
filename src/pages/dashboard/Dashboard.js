import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import ProjectList from '../../compenents/ProjectList'
import ProjectFilter from './ProjectFilter'

//styles
import './Dashboard.css'



export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState('all')

  const {user} = useAuthContext()
  const {documents, error} = useCollection('projects')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const projects = documents ? documents.filter((document) => {
    switch(currentFilter) {
      case 'all':
        return true
      case 'mine':
       let assignedToMe = false
       document.assignedUsersList.forEach((u) => {
        if (u.id === user.uid) {
          assignedToMe = true
        }
       })
       return assignedToMe
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
        console.log(document.category, currentFilter)
        return document.category === currentFilter
      default:
        return true
    }
     
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter}/>}
      {projects && <ProjectList projects={projects}/>}
    </div>
  )
}
