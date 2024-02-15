import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movies() {
    const movies = [
        {
            Image:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            title:'The Dark Knight',
            desc:'The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan.',
            
        },
        {
            Image:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
            title:'Inception',
            desc:'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film.',
        },
        {
            Image:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            title:'The Matrix',
            desc:'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis, based on the Matrix',
        },
        {
          Image:'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
          title:'Oppenheimer',
          desc:'Oppenheimer is a 2010 science fiction action film directed by Christopher Nolan and produced by Coen brothers.',
        }
        
    ]
  return (
    movies.map((movie)=>{
        return (
           
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text className="mb-2 text-muted">{movie.desc}</Card.Text>
              
              <Button variant="primary" >Watch Now</Button>
            </Card.Body>
          </Card>
        )
    })
  )
}

export default Movies