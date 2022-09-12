import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SportsbookContext } from "../contexts/SportsbookContexts"

export default function Betbar({setSport}) {
    const {betbarActive, loggedIn} = useContext(SportsbookContext);

    const slipCountStyles = {
        visibility: betbarActive.length ? "visible" : "hidden"
    }

    function homeClick() {
        setSport("MLB")
    }

    return (
        <nav className="betbar">
            <div className="container--widest">
                <ul className="list betbar__list">
                    <li className="betbar__list-item">
                        <Link className="betbar__link" to="/" onClick={homeClick}><i class="fa-solid fa-house-chimney"></i></Link>
                    </li>
                    <li className="betbar__list-item">
                        <a className="betbar__link" href="#">Top</a>
                    </li>
                    <li className="betbar__list-item">
                        <p className="betslip__count" style={slipCountStyles}>{betbarActive.length}</p>
                        <Link className="betbar__link betslip__link" to="/betslip">Betslip</Link>
                    </li>
                    <li className="betbar__list-item">
                        {loggedIn && <p className="betbar__bankroll" >${(loggedIn.bankroll)}</p>}
                        <Link className="betbar__link" to="/Account">Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}