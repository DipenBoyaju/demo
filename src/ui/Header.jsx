import { NavLink } from "react-router-dom"
import Logo from '../assets/logo.svg'


const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <NavLink to='/'><img src={Logo} alt="" className="w-[150px]" /></NavLink>
      </div>
      <div className="link">
        <nav className="space-x-4 text-[16px] font-semibold tracking-widest">
          <NavLink to='/smartphone'>Mobile</NavLink>
          <NavLink to='/laptop'>Laptop</NavLink>
          <NavLink to='/fragrance'>Fragrance</NavLink>
        </nav>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Header
