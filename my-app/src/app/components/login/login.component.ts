import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;


  form: FormGroup;

  closeResult: string = '';

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService) {

    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        contraseña: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }



  OnLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLoginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreusuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;



    },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMessage = err.errorMessage;

      }
    )
  }

  refresh(): void {
    window.location.reload();
  }
}




