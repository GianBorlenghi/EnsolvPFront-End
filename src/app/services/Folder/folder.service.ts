import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private url = "http://localhost:8080/folder";
  constructor(
    private http:HttpClient
  ) { }

  public getAllFolder():Observable<any>{
    return this.http.get(this.url + '/foldersList');
  }

  public addFolder(folder:any):Observable<any>{
    return this.http.post(this.url + "/saveFolder",folder);
  }
  public deleteFolder(id:number):Observable<any>{
    return this.http.delete(this.url + '/delete/' + id);
  }

  public viewFolder(id:number):Observable<any>{
    return this.http.get(this.url + '/viewFolder/' + id);
  }
  

}
