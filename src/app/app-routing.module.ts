import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

const routes: Routes = [
	{ path: 'quiz', component: QuizComponent },
	{ path: 'quiz-result', component: QuizResultComponent },
	{ path: '**', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
