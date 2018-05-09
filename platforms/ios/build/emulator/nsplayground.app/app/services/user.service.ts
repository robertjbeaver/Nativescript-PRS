import { Injectable } from '@angular/core';
import { User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url = 'http://localhost:8080/Users/';

@Injectable()
export class UserService {
  list(): Observable<User[]> {
  return this.http.get(url + 'List') as Observable<User[]>;
  }
  create(user: User): Observable<any> {
    console.log('usersvc.create...');
    return this.http.post(url + 'Add', user) as Observable<any>;
  }
  get(id): Observable<User[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<User[]>;
  }
  remove(id): Observable<any> {
    return this.http.get(url + 'Remove?id=' + id) as Observable<any>;
  }
  change(user: User): Observable<any> {
    return this.http.post(url + 'Change', user) as Observable<any>;
  }
  login(uname: string, pwd: string): Observable<User[]> {
    return this.http.get(url + 'Authenticate?uname=' + uname + '&pwd=' + pwd) as Observable<User[]>;
  }
  constructor(private http: HttpClient) { }
}
