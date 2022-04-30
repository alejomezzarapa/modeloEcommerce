const NavBar = () => {
    return (
        <div className="flex">
            <div>
                <h1 className='m-8 text-2xl font-bold text-blue-800'>ClickApp</h1>
            </div>

            <div className="flex pt-9 w-5/6 bg-slate-800 text-slate-100">
                <a href=""><p class="ml-8 hover:bg-slate-500">Home</p></a>
                <a href=""><p class="ml-8 hover:bg-slate-500">Tickets</p></a>
                <a href=""><p class="ml-8 hover:bg-slate-500">About</p></a>
                <a href=""><p class="ml-8 hover:bg-slate-500">Contact</p></a>
            </div>
        </div>
    )
}

export default NavBar