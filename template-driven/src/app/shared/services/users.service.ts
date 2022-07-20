import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      email: 'gustavo@gmail.com',
      password: '123456'
    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find(user => user.email === email && user.password === password);
  }

  setNewUser(user: User): Boolean {
    if (!this.users.find(user => user.email === user.email)) {
      this.users.push(user);
      return true;
    }
    return false;
  }

}
