import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
  users: string[];

  constructor(){
    this.users = [
      'Mark',
      'Sharon',
      'Beth',
      'John'
    ];
  }

  getUsers() {
    return this.users;
  }
}
// this is a great way to distribute information across many components by
// injecting the users array where ever i want.
