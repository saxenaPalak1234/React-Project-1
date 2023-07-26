const Navigation = ()=>{
    return(
        <nav className="container">
        <div className="logo">
            <img src="/images/nike.png" alt="nike logo" style={{ width:"100px"}}/>
        </div>
        <ul>
            <li href ="#">Menu</li>
            <li href ="#">Location</li>
            <li href ="#">About</li>
            <li href ="#">Contect</li>
        </ul>
        <button>Login</button>

    </nav>
    );
};
export default Navigation;