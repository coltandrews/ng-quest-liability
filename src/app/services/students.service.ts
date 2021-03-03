import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private apiBaseUrl: string = 'https://localhost:5020';

  constructor(
    private http: HttpClient
  ) { }

  public getAllStudents(): Promise<Student[]> {

    let url = `${this.apiBaseUrl}/students`;
    
    let response = this.http.get<Student[]>(url, this.httpOptions).toPromise();
    return response;

  }

  public getFlaggedStudents(): Promise<Student[]> {
    let url = `${this.apiBaseUrl}/students/forms/submitted`;

    let response = this.http.get<Student[]>(url, this.httpOptions).toPromise();
    return response;
  }
  public getUnflaggedStudents(): Promise<Student[]> {
    let url = `${this.apiBaseUrl}/students/forms/unsubmitted`;

    let response = this.http.get<Student[]>(url, this.httpOptions).toPromise();
    return response;
  }
}
