import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: "What is your name?",
        answer: "My name is Mr. Flippy Nips",
        hide: true
      },
      {
        text: "What is your favorite color?",
        answer: "Blue",
        hide: true
      },
      {
        text: "Which is faster, an african swallow or European swallow?",
        answer: "well that depends...",
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }
}
