import { Injectable } from '@angular/core';
import { Hello } from './hello';

@Injectable({
  providedIn: 'root'
})

export class HelloService {
  url = 'https://localhost:44353/api/hello';

  constructor() { }

  async getHello(text: string = 'Andrew'): Promise<Hello> {
    const data = await fetch(`${this.url}/${text}`);
    const hello: Hello = {
      text: (await data.json()).text
    };
    return hello;
  }
}
