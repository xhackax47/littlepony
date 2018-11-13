import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: String = 'http://localhost:8094/api/users';
  tabUsers: Array<User>;
  authenticated = false;

  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json')
  }

  constructor(private http: HttpClient, private router: Router) { }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url + '/', this.httpOptions);
    // return of(this.tabRaces);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id, this.httpOptions);
  }

  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(this.url + '/user/' + name, this.httpOptions);
  }

  addUser(user: User): void {
    this.http.post(this.url + '/register', user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  updateUser(id: number, user: User): void {
    this.http.put(this.url + '/' + id, user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  deleteUser(id: number): void {
    this.http.delete(this.url + '/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  authToken(usernameOrEmail: string, password: string): Observable <any> {
    const credentials = {usernameOrEmail: usernameOrEmail, password: password};
    console.log("Tentative de login de :" + usernameOrEmail);
    return this.http.post(this.url + '/login' ,{ usernameOrEmail, password}, this.httpOptions);
  }
}
