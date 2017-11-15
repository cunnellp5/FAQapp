import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  removeQuestion(question: string) {
    this.dataService.removeQuestion(question);
  }

}
