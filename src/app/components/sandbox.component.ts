import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html'
})

export class SandboxComponent {
  name = 'john dildo';
  emoji;
  person = {
    firstName: 'steve',
    lastName: 'johnson'
  }

  constructor() {
    this.name = this.name.split('').reverse().join('');
    this.emoji = '😡';
    this.hasEmoji();
    this.hasEmoji();
    this.hasEmoji();
  }

  hasEmoji() {
    this.emoji += '😈';
  }

  showEmoji() {
    return this.emoji;
  }
}
