import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as RageLogo } from "../../assets/crown.svg"
import './navigation.styles.scss'
const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <RageLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/Shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation