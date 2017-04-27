import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { YouTubeSearchComponent } from './components/YoutubeSearch.component';
import { SearchBox } from './components/YoutubeSearch.component';
import { SearchResultComponent } from './components/YoutubeSearch.component';
import { youTubeServiceInjectables } from './components/YoutubeSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
