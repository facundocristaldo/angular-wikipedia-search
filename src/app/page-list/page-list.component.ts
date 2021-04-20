import { Component, Input, OnInit } from '@angular/core';

interface page {
  pageid:number,
  title: string,
  wordcount: number,
  snippet: string,
}
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: page[] = [];

  constructor() {}

  ngOnInit(): void {}
}
