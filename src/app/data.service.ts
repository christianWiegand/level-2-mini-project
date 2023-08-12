import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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

export interface TriviaCategories {

	trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {

	id: number;
	name: string;
}

export interface Result {

	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
  allAnswers: string[];
  selectedButton: HTMLButtonElement | undefined;
}

export interface Questions {

	response_code: number;
	results: Result[];
}
