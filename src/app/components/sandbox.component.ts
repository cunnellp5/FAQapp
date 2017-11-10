import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html'
})

export class SandboxComponent {
  name: string = 'johnathan doe';
  age: number = 3;
  hasChildren: boolean = true;
  city: any = 'New Jurzey';
  myNumbersArray: number[] = [1,2,3,4];
  myStringArray: string[] = ['hello', 'world', 'poop'];
  myAnyArray: any[] = [1, 'hi', true];
  myTuple: [string, number] = ['hello', 3];
  unusable: void = undefined; // or null
  u: undefined = undefined; // or null too 
  n: null = null; // or undefined

  constructor() {
    this.myStringArray = ['ello']
  }
  // name = 'john dildo';
  // emoji;
  // person = {
  //   firstName: 'steve',
  //   lastName: 'johnson'
  // }
  //
  // constructor() {
  //   this.name = this.name.split('').reverse().join('');
  //   this.emoji = '😡';
  //   this.hasEmoji();
  //   this.hasEmoji();
  //   this.hasEmoji();
  // }
  //
  // hasEmoji() {
  //   this.emoji += '😈';
  // }
  //
  // showEmoji() {
  //   return this.emoji;
  // }
}
