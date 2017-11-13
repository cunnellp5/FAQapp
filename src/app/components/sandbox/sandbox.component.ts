import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  birthday = new Date(1989, 7, 15);
  total: number = 500;
  fee: number = 0.7329;
}
