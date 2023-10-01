import { NavLink } from 'react-router-dom'

export function AppHeader() {

    return (
        <header className="app-header">
            <h1>ToysRU</h1>
            <nav>
                <NavLink to="/">Home</NavLink> | 
                <NavLink to="/toy">Toys</NavLink> |
            </nav>

        </header>
    )
}