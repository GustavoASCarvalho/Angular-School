import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensagemErro: string = '';
  email: string = 'gustavo@gmail.com';
  senha: string = '123456';

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  entrar() {
    const user = this.userService.getUserByEmailAndPassword(this.email, this.senha);

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('');
    }
    else {
      this.mensagemErro = 'Usuário ou senha inválidos';
    }
  }

}
