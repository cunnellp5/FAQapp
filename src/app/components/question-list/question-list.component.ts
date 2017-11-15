import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

  constructor() {
    this.questions = [
      {
        text: "What is your name?",
        answer: "My name is Mr. Flippy Nips"
      },
      {
        text: "What is your favorite color?",
        answer: "Blue"
      },
      {
        text: "Which is faster, an african swallow or European swallow?",
        answer: "well that depends..."
      }
    ];
  }

  ngOnInit() {
  }

}
