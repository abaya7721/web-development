import React, { useState, useEffect } from 'react';
import '../App.css';
import Book from './Book';

export default function Body() {

    const [books, setBooks] = useState([]);

    useEffect(() => {setBooks([
            {
              "author": "Chinua Achebe",
              "country": "Nigeria",
              "imageLink": "images/things-fall-apart.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
              "pages": 209,
              "title": "Things Fall Apart",
              "year": 1958
            },
            {
              "author": "Hans Christian Andersen",
              "country": "Denmark",
              "imageLink": "images/fairy-tales.jpg",
              "language": "Danish",
              "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
              "pages": 784,
              "title": "Fairy tales",
              "year": 1836
            }])
        }, []);
    // const bookList = [];
    // for (let i = 0; i < books.length; i++){
    //     bookList.push(<li key={i} >{books[i].title}: {books[i].author}</li>)

    // }

    return (
        <div>
            <ol>
                {books.map((book) => (
                    <Book key={book.title} title={book.title} author={book.author}/>
                ))}
            </ol>
        </div>

    );

}