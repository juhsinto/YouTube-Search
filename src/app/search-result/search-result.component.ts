import { Component, Input } from '@angular/core';
import {SearchResult} from "../search-result";

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input()
  result: SearchResult;

}
