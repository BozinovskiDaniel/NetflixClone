import React, {Component} from 'react';
import MovieRow from '../js/MovieRow';

class View extends Component {
    constructor(props) {
        super(props);

        const movies = [
            {id: 0, poster_src:"https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", title: 'some lorem iasd', overview: "some text about idk ahwat im on about"},
            {id: 1, poster_src:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'Avengers', overview: "2ns overview"}
        ]

        var movieRows = [];
        movies.forEach((movie) => {
            console.log(movie.title);
            const movieRow = <MovieRow movie={movie}/>
            
            movieRows.push(movieRow);

        })

        this.state = {rows: movieRows}
    }

    render() {
        return (
            <div>

                <input className="searchbar" placeholder="Enter search term"></input>
                {this.state.rows}



            </div>
        );
    }
}

export default View;
