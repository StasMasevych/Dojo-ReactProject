import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'

//styles & images
import './Navbar.css'
import temple from '../assets/temple.svg';

export default function Navbar() {
  const {logout, isPending, error} = useLogout()
  const {user} = useAuthContext()

  return (
    <div className="navbar">
        <ul>
            <li className="logo">
              <img src={temple} alt="logo"/>
              <span>The Dojo</span>
            </li>
            {!user && <li><Link to="/login">Login</Link></li>}
            {!user && <li><Link to="/signup">Signup</Link></li>}
            {user && (
              <li>
                {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                {isPending && <button className="btn">Logging out</button>}
                {error && <div className="error">{error}</div>}
              </li>
            )}
        </ul>
    </div>
  )
}
