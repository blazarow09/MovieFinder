import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Array<Movie>;
  theaterMovies: Array<Movie>;

  constructor(private moviesService: MovieService ) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);

      this.moviesService.getTheaterMovies().subscribe(data => {
        this.theaterMovies = data['results'].slice(6, 12);
      }) 
    })
  }

}
