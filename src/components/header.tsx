import logo from '../assets/passin-logo.svg'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={logo} alt="" />
      <nav className="flex gap-5 font-medium text-base">
        <a className="text-gray-300">Eventos</a>
        <a>Participantes</a>
      </nav>
    </header>
  )
}
