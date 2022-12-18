import {useNavigate} from "react-router-dom"
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

import Avatar from "../../compenents/Avatar";



export default function ProjectSummary({project}) {
  const {deleteDocument} = useFirestore('projects')
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    deleteDocument(project.id)
    navigate('/')
  }
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>Created by {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>The project is assigned to: </h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL}/>
              <h4 className="users-name">{user.displayName}</h4>
            </div>
          ))}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>Mark as Complete</button>
        )}
    </div>
  )
}
