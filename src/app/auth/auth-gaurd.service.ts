import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private atuhService: AuthService){

    }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot){
            return this.atuhService.isAuthenticated();
        }
}