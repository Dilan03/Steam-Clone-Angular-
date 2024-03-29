import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  getFriends() {
    return [
      {"name": 'user1',"status": 'en linea', "level": 8 , "picture": 'pic1'},
      {"name": 'user2',"status": 'juagando', "level": 1 , "picture": 'pic2'},
      {"name": 'user3',"status": 'sin conexión', "level": 5 , "picture": 'pic3'},
      {"name": 'user4',"status": 'jugando', "level": 50 , "picture": 'pic4'},
      {"name": 'user5',"status": 'sin conexión', "level": 12 , "picture": 'pic5'}
    ];
  }
}
