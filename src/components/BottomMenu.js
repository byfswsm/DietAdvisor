import { Link } from "react-router-dom";
import { FaUserAlt, FaHome } from "react-icons/fa"

const BottomMenu = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-lg justify-content-center" style={{background: "#bccad6", border: "none"}}>
            <ul className="navbar-nav flex-row">
                <li className = "nav-item mx-4">
                    <Link to="/">
                        <FaHome />
                    </Link>
                </li>
                <li className = "nav-item mx-4">
                     <Link to="/authenticate">
                        <FaUserAlt />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default BottomMenu;