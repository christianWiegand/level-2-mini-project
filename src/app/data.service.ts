import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private categoryUrl = 'https://opentdb.com/api_category.php'

  constructor(private http: HttpClient){}

  getCategories(): Observable<TriviaCategories> {

    return this.http.get<TriviaCategories>(this.categoryUrl);
  }
}

export interface TriviaCategories {

	trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {

	id: number;
	name: string;
}
