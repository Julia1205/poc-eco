import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FormationService } from './formation.service';
import { SessionService } from './session.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistry {
  constructor(
    public authService: AuthService,
    public formationService: FormationService,
    public sessionService: SessionService,
    public userService: UserService
  ) {}
}