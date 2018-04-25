import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  userById(id:number) {
    console.log(id);
     return this.dataStore.users.find( x=> x.id==id);
  }
  private _users: BehaviorSubject<User[]>;
  private dataStore:{
    users:User[];
  }
  constructor(private http: HttpClient) { 
    this.dataStore = { users:[] }
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users():Observable<User[]>{
    return this._users.asObservable();
  }

  loadAll(){
    const userUrl = "https://angular-material-api.azurewebsites.net/users";
    return this.http.get<User[]>(userUrl).subscribe(
      (data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }),
       error => {console.log("failed to fetch users");}
    );
  }

}
