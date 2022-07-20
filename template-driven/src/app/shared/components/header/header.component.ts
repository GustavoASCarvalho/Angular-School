import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      this.user = JSON.parse(userStorage);
    }
  }

  sair() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
