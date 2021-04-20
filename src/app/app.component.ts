import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface page{
  pageid:number,
  title: string,
  wordcount: number,
  snippet: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages:page[]=[];
  constructor(private wikipedia: WikipediaService){

  }
  onTerm(term:string){
    this.wikipedia.search(term).subscribe((response)=>{
      this.pages = response
    })
  }

}
