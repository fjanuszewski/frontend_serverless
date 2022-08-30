import { Injectable } from '@angular/core';
import { UserService } from './services/user/user.service';
@Injectable({
  providedIn: 'root',
})
export class MinimalProvider {
  constructor(private user: UserService) {}

  load() {
    return new Promise((resolve, reject) => {
      this.user.getAuthUserData().then((user) => {
        this.user.currentUser$.next(user)
        resolve(user);
      }).catch((err)=>{
        console.log(err)
        resolve(null)
      }
      );
    });
  }
}
export function minimalProviderFactory(provider:MinimalProvider){
    return ()=>provider.load()
}