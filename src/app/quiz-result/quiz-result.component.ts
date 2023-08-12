import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  correctAnswers: number = 0;

  constructor(public dataService: DataService) {  }

  ngOnInit() {

    // Count how many questions were answered correctly
    this.dataService.quizResults.forEach((question) => {

      if (question.correct_answer == question.selectedButton?.textContent?.trim()) {
        this.correctAnswers++;
      }
    });

  }

}
