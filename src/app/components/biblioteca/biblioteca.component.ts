import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  public category1:any[] = [];
  public category2:any[] = [];
  public count:number = 0; public count2:number = 0;

  public games:any[] = [
    {"title": "game1", "category": "category1"},
    {"title": "game2", "category": "category1"},
    {"title": "game3", "category": "category2"},
    {"title": "game4", "category": "category1"},
    {"title": "game5", "category": "category1"},
    {"title": "game6", "category": "category2"},
    {"title": "game7", "category": "category2"},
    {"title": "game8", "category": "category1"},
    {"title": "game9", "category": "category2"},

  ]

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.games.length; index++) {
      if(this.games[index].category === 'category1'){
        this.category1[this.count] = this.games[index]
        console.log(this.games[index].title+this.games[index].category)
        this.count++

      }else if(this.games[index].category === 'category2'){
        this.category2[this.count2] = this.games[index]
        this.count2++
      }
    }

    for (let index = 0; index < this.category1.length; index++) {
      console.log(this.category1[index])
    }
  }

}
