import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
    .then(json => console.log(json))
  }

  myMethod() {
    return console.log('Hey, what is up!');
  }
}
