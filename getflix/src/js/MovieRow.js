import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MovieRow extends Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        // window.open.href = url;
        window.open(url, '_blank');
    }

    movieSelected() {
        sessionStorage.setItem('movieId', this.props.movie.id);
        
    }

    
    render() {
        return    <div className="grid-item">
            <div className="text-center">
                <img className="posters" src={this.props.movie.poster_src} width="150px" alt="poster" onClick={this.viewMovie.bind(this)} />
            </div>
        </div>

    }

}

export default MovieRow;