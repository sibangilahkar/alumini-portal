import React from 'react'

function Nav() {
  return (
    <div>
    <nav className="h-14 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
    <ul className="flex inline-block gap-12  pl-72 text-white pt-4  font-medium ">
      <li>HOME</li>
      <li>INFO BOARD</li>
      <li>BATCHMATES</li>
      <li>ABOUT US</li>
      <li>GALLERY</li>
      <li>CONTACT</li>
    </ul>
  </nav>
    </div>
  )
}

export default Nav
