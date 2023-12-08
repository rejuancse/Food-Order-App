import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function NavMenu() {
    return (
        <div>
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/sale">
                                Sale
                            </Link>
                        </li>
                        <li>
                            <Link to="/new-arrivals">
                                New Arrivals
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    )
}

export default NavMenu;
