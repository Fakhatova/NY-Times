import './NavBar.css'
import { v4 as uuid_v4 } from "uuid";

const NavBar = () => {
        const categories = [
            'arts', 'books', 'business', 
            'health',  'magazine', 'movies',
            'opinion', 'politics', 'realestate',
            'sports', 'sundayreview', 'technology', 't-magazine', 'travel', 'world'
        ]
        let buttons = categories.map(category => <button key={uuid_v4()}>{category.toUpperCase()}</button>)

    return (
        <header className='header'>
            <nav className='navigation'>
                <h1 className='title'>The New York Times</h1>
                <div className='category-container'>
                {buttons}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;