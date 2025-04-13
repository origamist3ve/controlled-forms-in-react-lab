// src/App.jsx
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';
import {useState} from "react";

const App = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBooks, setNewBooks] = useState ([
        {
            title: "",
            author: "",
        }
    ]);


    return (
        <div>
            <h1>My Bookshelf</h1>
            <Bookshelf books={books} setBooks={setBooks} newBooks = {newBooks} setNewBooks={setNewBooks} />
        </div>
    );
};

export default App;
