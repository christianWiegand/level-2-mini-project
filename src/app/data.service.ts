import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './model/Questions';
import { TriviaCategories } from './model/TriviaCategories';
import { Result } from './model/Result';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  quizResults: Result[] = [];
  private categoryUrl = 'https://opentdb.com/api_category.php'
  private questionBaseUrl = `https://opentdb.com/api.php`

  constructor(private http: HttpClient){}

  getCategories(): Observable<TriviaCategories> {

    return this.http.get<TriviaCategories>(this.categoryUrl);
  }

  amount = 5;

  /**
   * Get the questions from the API
   * @param id The category id of the questions to retrieve
   * @param difficulty The difficulty of the questions to retrieve
   * @returns An observable of type Questions
   */
  getQuestions(id: number, difficulty: string): Observable<Questions> {

    let questionUrl = this.questionBaseUrl;
    questionUrl += `?amount=${this.amount}`;
    questionUrl += `&category=${id}`;
    questionUrl += `&difficulty=${difficulty}`;
    questionUrl += `&type=multiple`;

    return this.http.get<Questions>(questionUrl);
  }
}
