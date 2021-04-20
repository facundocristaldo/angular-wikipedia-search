import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck} from "rxjs/operators"

interface WikipediaResponse{
  query:{
    search:{
      pageid:number,
      title: string,
      wordcount: number,
      snippet: string,
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private searchUrl:string = "https://en.wikipedia.org/w/api.php";

  constructor( private http:HttpClient) { }

  search(term:string){
    return this.http.get<WikipediaResponse>(this.searchUrl,{
      params:{
        action:"query",
        list:"search",
        format:"json",
        utf8:"1",
        srsearch:term,
        origin:"*"
      }
    }).pipe(
      pluck("query","search")
    );
  }
}
