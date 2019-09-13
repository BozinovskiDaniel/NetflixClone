import React, {Component} from 'react';
import $ from 'jquery';
import getData from '../js/getData';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    getMovie() {
        console.log("GEETTT MOVIAYY")
        const movieId = sessionStorage.getItem('movieId');
        const urlStr = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US";

        $.ajax({
            url: urlStr,
            success: (res) => {
                console.log("fetched data success");
                
                const movierows = res;
                     
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }

    

    render() {

        window.onload = this.getMovie;

        return ( <div>
            
        </div>
        );
    }
}

export default Movie;