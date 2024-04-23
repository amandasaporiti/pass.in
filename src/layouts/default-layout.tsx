import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <div className="max-w-[1440px] mx-auto py-4 flex flex-col gap-6 px-7">
      <Header />
      <Outlet />
    </div>
  )
}
