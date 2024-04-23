import logo from '../assets/passin-logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <Link to="/eventos">
        <img src={logo} alt="Página de eventos" />
      </Link>
    </header>
  )
}
