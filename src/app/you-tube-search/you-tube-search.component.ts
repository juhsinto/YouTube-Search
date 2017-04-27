import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../search-result";

@Component({
  selector: 'youtube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log("results: ", this.results);
  }
}


