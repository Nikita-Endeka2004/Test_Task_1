import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-500 text-white p-4">

        </header>

        <main className="flex-grow container mx-auto">
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default Layout
