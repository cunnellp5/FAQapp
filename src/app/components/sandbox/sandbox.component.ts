import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  isSpecial: boolean = true;
  canSave: boolean = false;
  currentStyles: string{} = {};

  constructor() {
    this.setCurrentStyles();
  }

  setCurrentStyles(){
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }
}
