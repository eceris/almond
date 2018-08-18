import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class PostServiceMock {
  constructor() { }

  get(id: string) {
    return of({ content: "##########################"});
  }
  
}