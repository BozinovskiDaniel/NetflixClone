import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class getData extends Component {
    
    render() {
        return    <div className="grid-item">
            <div className="text-center">
                <img className="posters" src={this.props.movie.poster_src} width="150px" alt="poster" onClick={this.viewMovie.bind(this)} />
                <h3>{this.props.movie.title}{this.props.movie.name}</h3>
                <input type="button" className="btn-sm btn-secondary bg-dark" onClick={this.movieSelected.bind(this)} value="Movie Details" />
            </div>
        </div>

    }

}

export default getData;