import React, {Component} from 'react';

class MovieRow extends Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
            <tr>
                <td width="20%">
                    <img className="posters" src={this.props.movie.poster_src} width="250px" alt="poster" />
                </td>
                <td width="60%">
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
                </td>
                <td width="10%">
                    <p>Rating: {this.props.movie.vote_average}</p>
                </td>
                <td width="10%">
                    <p>Release Date: {this.props.movie.release_date}</p>
                </td>

            </tr>
        </tbody>
    </table>
    }

}

export default MovieRow;