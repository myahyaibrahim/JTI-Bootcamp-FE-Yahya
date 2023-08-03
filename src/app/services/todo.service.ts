import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) { }
    
    getTodos(): Observable<any> {
        const url = environment.baseURL;
        return this.http.get(url);
    }

    postTodos(param: any): Observable<any> {
        const url = environment.baseURL + "/post";
        return this.http.post(url, param);
    }

    deleteTodo(id: any): Observable<any> {
        const url = environment.baseURL + '/delete/' + id;
        return this.http.delete(url);
    }

    updateTodo(param: any, id: any): Observable<any> {
        const url = environment.baseURL + '/put/' + id;
        return this.http.put(url, param);
    }


}
