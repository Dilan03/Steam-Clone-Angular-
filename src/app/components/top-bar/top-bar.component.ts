import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public listMeats = ["a", "b", "c"];
  public active = "";
  public clicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:click", ["$event"])
  handler_name($event:any){
    if($event.path[0].className != 'option' && this.clicked == true && this.active != '') this.clicked = false;
  }
  
  hola(){
    console.log("hola")
  }

}
