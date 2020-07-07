import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../modules/Application';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  getApplications():Observable<Application[]> {
    return this.http.get<Application[]>('/api/applications');
  }

  getApplication(id:number):Observable<Application> {
    return this.http.get<Application>('/api/applications/'+id);
  }

  deleteApplication(application:Application):Observable<Application> {
    const id = application.id;
    return this.http.delete<Application>('/api/applications/'+id, httpOptions);
  }

  createApplication(application:Application): Observable<Application> {
      return this.http.post<Application>('/api/applications', application, httpOptions);
  }

  editApplication(application:Application): Observable<Object> {
    const id = application.id;
    return this.http.put('/api/applications/'+id, application);
  }
}
