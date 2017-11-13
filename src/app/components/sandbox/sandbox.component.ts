import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  isSpecial: boolean = true;
  canSave: boolean = true;
  currentClasses: string{} = {};

  constructor() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: this.canSave,
      special: this.isSpecial
    }
  }
}
