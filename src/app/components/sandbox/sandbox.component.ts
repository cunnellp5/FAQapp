import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [
    {
      firstName: 'Rick',
      lastName: 'Sanchez'
    },
    {
      firstName: 'daryl',
      lastName: 'dixon'
    },
    {
      firstName: 'carl',
      lastName: 'grimes'
    },
    {
      firstName: 'poopy',
      lastName: 'butthole'
    },
  ]

  constructor() {
    this.people[2] = 'KARolley'
  }
}
