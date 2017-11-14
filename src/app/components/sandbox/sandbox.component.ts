import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  name: string = '';
  users: string[] = [
    'john doe',
    'mary swanson',
    'kevin smith'
  ];


  onSubmit() {
    this.users.push(this.name)
    this.name = '';
  }
}
