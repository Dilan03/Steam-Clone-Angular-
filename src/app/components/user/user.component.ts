import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/friends.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public friends:any[] = [];
  public friendsList:any[] = [];

  constructor(private _friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friends = this._friendsService.getFriends();

    for (let index = 0; index < 5; index++) {
      this.friendsList[index] = this.friends[index];      
    }

  }

  
}
