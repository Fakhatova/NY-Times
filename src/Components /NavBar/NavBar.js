import './NavBar.css'

const NavBar = () => {

    const buttons = () => {
        const categories = [
            'arts', 'automobiles', 'books', 'business', 
            'fashion', 'food', 'health', 'home', 
            'insider', 'magazine', 'movies','nyregion',
            'obituaries', 'opinion', 'politics', 'realestate',
            'science', 'sports', 'sundayreview', 'technology', 
            'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'
        ]

    }
    return (
        <header className='header'>
            <nav className='navigation'>
                <h1 className='title'>The New York Times</h1>
                <button>arts</button>
                <button>automobiles</button>
                <button>books</button>
                <button>business</button>
                <button>fashion</button>
                <button>food</button>
                <button></button>
            </nav>
        </header>
    )
}

export default NavBar;