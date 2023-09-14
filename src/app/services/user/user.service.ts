import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {User} from "../../models/user";
import {Role} from "../../models/role";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL
  private usersData: User[] = [
    {
      id: 1,
      username: 'test',
      password: 'toto',
      email: 'test@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
    {
      id: 2,
      username: 'test1',
      password: 'toto1',
      email: 'test1@yopmail.com',
      role: Role.User
    },
  ];
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    //return this.http.get<User[]>(`${this.apiUrl}/users`);
    return of(this.usersData);
  }
}
