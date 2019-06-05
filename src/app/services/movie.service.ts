import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/Movie';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=479f13df1f368f1698a615054336cb07';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/movie/popular' + API_KEY);
  }

  getTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/discover/movie' + API_KEY + '&with_release_type=2|3');
  }
}
