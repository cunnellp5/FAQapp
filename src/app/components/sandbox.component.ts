import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html'
})

export class SandboxComponent {
  customer: Customer
  customers: Customer[];

  constructor() {
    this.customer = {
      id: 1,
      name: 'john',
      email: 'string@stirng.com'
    }

    this.customers = [
      {
        id: 1,
        name: 'john',
        email: 'string@stirng.com'
      },
      {
        id: 2,
        name: 'phil',
        email: 'phil@stirng.com'
      },
      {
        id: 3,
        name: 'ryan',
        email: 'ryan@stirng.com'
      }
    ]
  }
}
