import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

const PROJECTS_DATA = 'https://jsonplaceholder.typicode.com/posts'

@Injectable()
export class DataService {

  constructor(public http: Http) {}

  getPosts() {
    return this.http.get(PROJECTS_DATA).map(res => {
      return res.json()
    })
  }
  getPost(id) {
    return this.http.get(`${PROJECTS_DATA}/${id}`).map(res => {
      return res.json()
    })
  }
}
