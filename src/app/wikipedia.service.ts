import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private searchUrl:string = "https://en.wikipedia.org/w/api.php";

  constructor( private http:HttpClient) { }

  search(term:string){
    return this.http.get(this.searchUrl,{
      params:{
        action:"query",
        list:"search",
        format:"json",
        utf8:"1",
        srsearch:term,
        origin:"*"
      }
    });
  }
}
