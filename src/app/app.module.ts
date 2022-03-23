import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FriendsService } from './friends.service';
import { GamePageComponent } from './components/game-page/game-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    routingComponents,
    FooterBarComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
