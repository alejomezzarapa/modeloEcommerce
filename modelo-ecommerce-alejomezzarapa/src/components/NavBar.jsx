import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex">
            <div>
                <Link to="/" rel="stylesheet" href="" >
                    <h1 className='m-8 text-2xl font-bold text-blue-800'>ClickApp</h1>
                </Link>
            </div>

            <div className="flex pt-9 w-5/6 bg-slate-800 text-slate-100">
                <Link to='/' href=""><p class="ml-8 hover:bg-slate-500">Home</p></Link>
                <Link to='/servicios' href=""><p class="ml-8 hover:bg-slate-500">Servicios</p></Link>
                <a href=""><p class="ml-8 hover:bg-slate-500">About</p></a>
                <a href=""><p class="ml-8 hover:bg-slate-500">Contact</p></a>
            </div>
        </div>
    )
}

export default NavBar