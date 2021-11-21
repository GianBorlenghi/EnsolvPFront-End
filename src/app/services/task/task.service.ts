import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = "http://localhost:8080/task";

  constructor(private http:HttpClient) { }

public getAllTasks(): Observable<any>{
  return this.http.get(this.url + '/listTask');

}

public addTask(task:any):Observable<any>{
  return this.http.post(this.url + '/saveTask',task);
} 

public deleteTask(id:number):Observable<any>{
  return this.http.delete(this.url + '/delete/' + id);
}


}
