import { useState } from 'react';


const Bookshelf = ({books, setBooks, newBooks, setNewBooks }) =>  {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooks( {
            ...newBooks,
            [name]: value
        })
    }

    //This function manages the submission of the form, adding a new book to the list, and resetting the input fields.
    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks([...books, newBooks]);
        setNewBooks([{
            title:"",
            author:"",
        }
        ]);
    }


    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit = {handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input
                        id = "title"
                        name = "title"
                        value={books.title}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input
                            id = "author"
                            name = "author"
                            value={books.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div className="bookCard" key={index}>
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Bookshelf

