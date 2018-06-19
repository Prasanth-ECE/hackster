import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { DataService } from './../data-service';

@Injectable()
export class NotAuthGuard implements CanActivate {

  redirectUrl;

  constructor(
    private service: DataService,
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.service.loggedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}