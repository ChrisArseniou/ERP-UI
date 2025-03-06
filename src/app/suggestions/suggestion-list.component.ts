import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { ISuggestion } from './suggestion';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'pm-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {

  pageTitle = 'Future Sales';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = 0;
  get listFilter(): number {
    return this._listFilter;
  }
  set listFilter(value: number) {
    this._listFilter = value;
    this.filteredSuggestions = this.performFilter(value);
  }

  filteredSuggestions: any[] = [];
  suggestions: any[] = [];
  data: any[] = [];

  constructor(private suggestionService: SuggestionService) {}

  performFilter(filterBy: number): any[] {
    /* filterBy = filterBy.toLocaleLowerCase(); */
    return this.data.filter((data: any) =>
      /* order.orderNumber.toString().includes(filterBy.toString())); */
      data.CustomerId === filterBy);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.suggestionService.getSuggestions().subscribe(
      (response) => {
        this.data = response;
        this.filteredSuggestions = this.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Suggestions: ' + message;
  }

}
