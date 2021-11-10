import './NavBar.css'
import { v4 as uuid_v4 } from "uuid";

const NavBar = () => {
        const categories = [
            'arts', 'automobiles', 'books', 'business', 
            'fashion', 'food', 'health', 'home', 
            'insider', 'magazine', 'movies','nyregion',
            'obituaries', 'opinion', 'politics', 'realestate',
            'science', 'sports', 'sundayreview', 'technology', 
            'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'
        ]
        let buttons = categories.map(category => <div className='category-container' key={uuid_v4()} ><button >{category}</button> </div>)

    return (
        <header className='header'>
            <nav className='navigation'>
                <h1 className='title'>The New York Times</h1>
                {buttons}
            </nav>
        </header>
    )
}

export default NavBar;