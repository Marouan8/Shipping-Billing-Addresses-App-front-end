import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: null;

  constructor(private accountService: AccountService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(
      res => {
          this.currentUser = this.tokenService.getInfos();
      }
    )
  }

  logout() {
    this.tokenService.remove();
    this.accountService.changeAuthStatus(false);
    // this.toastr.info(
    //     `Déconnexion`,
    //     'Vous êtes déconnecter !',
    //     {
    //       timeOut: 3000,
    //       positionClass: 'toast-bottom-left'
    //     }
    // )
    this.router.navigateByUrl('/login');
  }

}
