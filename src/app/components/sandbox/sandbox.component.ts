import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  name: string = 'john dildoe';
  showName: boolean = true;
  greeting: number = 1;
}
