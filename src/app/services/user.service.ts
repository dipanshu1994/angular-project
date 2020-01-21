import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(user) {
    return this.http.post<any>(`${URL}users/login`, user)
  }

  register(user) {
    return this.http.post<any>(`${URL}users/signup`, user)
  }

  getUserInfo() {
    return this.http.get<any>(`${URL}users/userInfo`)
  }

  urlShortner(url) {
    return this.http.post<any>(`${URL}users/urlShortner`, url)
  }
}
