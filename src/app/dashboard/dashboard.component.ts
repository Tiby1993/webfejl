import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { item } from './item.model';



const httpOptions = {
  headers: new HttpHeaders({ 
    "Authorization": "Bearer Xj_wTp9qO2AAAAAAAAAAWBDT8R9CccfMyaPCKXfTgkNkuLfnsrBD13LCgcjmWbBE",
    'Content-Type': 'application/json' 
  })
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiUrl = "https://api.dropboxapi.com/2/files/list_folder";
  delUrl=  "https://api.dropboxapi.com/2/files/delete_v2";
  path = {
    "path": "",
    "recursive":false
  };
  items;

  constructor(private _http: HttpClient) { 
  }

  ngOnInit() {
    this.items = this.getItems("//");
  }

  
  getItems(url: string) {
    this.path.path=url;
    this._http.post(this.apiUrl, this.path,httpOptions)
        .subscribe((data: item) => {
          this.items=data;
    });
  }

  openItem(path: string) {
    this.path.path=path;
    this._http.post(this.apiUrl, this.path,httpOptions)
        .subscribe((data: item) => {
          this.items=data;
    });
  }

  backItem() {
    var strArr = this.path.path.split('/');
    var path = "//";
    for (var i = 1; i < strArr.length-1; i++) {
      path += strArr[i];
    }
    this.path.path=path;
    this._http.post(this.apiUrl, this.path,httpOptions)
        .subscribe((data: item) => {
          this.items=data;
    });
  }
  
  delItem(item: item){
    console.log(item);
    this._http.post(this.delUrl, item,httpOptions);
    this.openItem(this.path.path);
  };
  

}
