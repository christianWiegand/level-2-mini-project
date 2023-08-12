import { Component, OnInit } from '@angular/core';
import { DataService, TriviaCategories, TriviaCategory } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories: TriviaCategory[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    this.dataService.getCategories().subscribe({

      next: categories => this.categories = categories.trivia_categories
    })
}
}
