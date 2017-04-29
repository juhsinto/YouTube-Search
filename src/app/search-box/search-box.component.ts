import {Component, OnInit, EventEmitter, ElementRef, Output} from '@angular/core';
import {Observable} from 'rxjs';



import {YouTubeService} from "../you-tube.service";
import {SearchResult} from "../search-result";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})


export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value)
        .filter((text: string) => text.length > 1)
        .debounceTime(250)
        .do(() => this.loading.next(true))
        .map((query: string) => this.youtube.search(query))
        .switch()
        .subscribe(
            (results: SearchResult[]) => {
              this.loading.next(false);
              this.results.next(results);
            },
            (err: any) => {
              console.log(err);
              this.loading.next(false);
            },
            () => {
              this.loading.next(false);
            }
        );
  }
}