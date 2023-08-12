import { Component, OnInit } from '@angular/core';
import { DataService, Result, TriviaCategories, TriviaCategory } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories: TriviaCategory[] = [];
  questions: Result[] = [];
  selectedCategoryId: number = 0;
  selectedDifficulty: string = 'easy';
  allAnswered: boolean = false;

  constructor(private dataService: DataService) {  }

  ngOnInit(): void {

    this.dataService.getCategories().subscribe({

      next: categories => this.categories = categories.trivia_categories
    })
  }

  createQuestions(): void {

    this.dataService.getQuestions(this.selectedCategoryId, this.selectedDifficulty).subscribe({

      next: questions => {

        this.questions = questions.results
        this.questions.forEach(question => {

            question.allAnswers = [question.correct_answer, ...question.incorrect_answers];
            // Shuffle the answers
            question.allAnswers.sort(() => Math.random() - 0.5);
        });
      }
    })
  }

  selectAnswer(question: Result, answerButton: HTMLButtonElement, answer: string): void {

    question.selectedButton?.classList.toggle("clickedButton");
    question.selectedButton = answerButton;
    answerButton.classList.toggle("clickedButton");

    this.checkIfAllAnswered();
  }

  checkIfAllAnswered() {

    this.allAnswered = true;
    this.questions.forEach(question => {

      if (question.selectedButton === undefined) {

        this.allAnswered = false;
      }
    });
  }
}

