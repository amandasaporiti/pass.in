import logo from '../assets/passin-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={logo} alt="" />
      <nav className="flex gap-5 font-medium text-base">
        <NavLink to="/" className="text-zinc-400">
          Eventos
        </NavLink>
        <NavLink to="/participants" className="text-zinc-400">
          Participantes
        </NavLink>
      </nav>
    </header>
  )
}
