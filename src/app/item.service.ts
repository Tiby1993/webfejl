import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { item } from './dashboard/item.model';


const httpOptions = {
  headers: new HttpHeaders({ 
    "Authorization": "Bearer sl.ADTS8Nehsb3Q7QcxwJv-83ijftZdC0UMYVTgtstIZo1pbPRC_-Ftgq_Le2OQtbDqZmPDlpfLLv_7Twcm6ST2u3Jo23NeXTZLJOnndvwTJGxVGoIKcB1hxLmlWRcAwmI4jlR0pz6K",
    'Content-Type': 'application/json' 
  })
};


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  asd: EventEmitter<string> = new EventEmitter();
  apiUrl = "https://api.dropboxapi.com/2/files/list_folder";
  path = {
    "path": "//",
    "recursive":true
  };
  items;
  constructor(private _http: HttpClient) { }

  getItems(url: string) {
    this.path.path=url;
    this._http.post(this.apiUrl, this.path,httpOptions)
        .subscribe((data: item) => {
          this.items=data;
          console.log(this.items);
  });

}

  /*getItems() {
    console.log(this._http.post<item[]>(this.apiUrl, path, httpOptions));
  };*/
}
