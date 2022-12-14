import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <header>
            <div className= "container">
                <Link to="/">
                    <h1>Workout App</h1>
                </Link>
            </div>
            <nav>
                <div> 
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>

        </header>
    )
}

export default Navbar