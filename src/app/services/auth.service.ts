import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { MOCK_USER } from '../mocks/mock-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUser(): User {
    return MOCK_USER;
  }
}
