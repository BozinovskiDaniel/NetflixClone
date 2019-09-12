import React, {Component} from 'react';

class MovieRow extends Component {
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
            <tr>
                <td>
                    <img className="posters" src={this.props.movie.poster_src} width="100px" alt="poster" />
                </td>
                <td>
                    {this.props.movie.title}
                    <p>{this.props.movie.overview}</p>
                </td>

            </tr>
        </tbody>
    </table>
    }

}

export default MovieRow;