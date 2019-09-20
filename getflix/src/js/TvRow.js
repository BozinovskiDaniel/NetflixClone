import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TvRow extends Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/tv/" + this.props.movie.id;
        window.open(url, '_blank');
    }

    movieSelected() {
        sessionStorage.setItem('movieId', this.props.movie.id);
        
    }

    
    render() {
        return    <div className="grid-item">
            <div className="text-center">
                <img className="posters" src={this.props.movie.poster_src} width="150px" alt="poster" onClick={this.viewMovie.bind(this)} />
                <h3>{this.props.movie.name}</h3>

                <Link to="/Movie">
                    <input type="button" className="btn-sm btn-secondary bg-dark" onClick={this.movieSelected.bind(this)} value="Movie Details" />
                </Link>
            </div>
        </div>

    }

}

export default TvRow;