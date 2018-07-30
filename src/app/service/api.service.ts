import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Story } from '../models/story';
import { Cat } from '../models/cat';
import { Title } from '../models/title';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ApiService {
  configUrl = 'https://jerry.vineup.com/MVC/public/PurdueHome/home';
  
  constructor(private http: HttpClient) {
  }

  getConfig(){
    return this.http.get(this.configUrl)
    .pipe(
      catchError(this.handleError)
    );
  }  

  // https://jerry.vineup.com/MVC/public/PurdueHome/isAdmin

  isLoggedIn(form){
    console.log(form)
    return this.http.post<any>('https://jerry.vineup.com/do/login', form, httpOptions)
    .pipe(
      catchError(this.handleError)
    );    
  }

  updateTitle(update): Observable<Title> {
    console.log(update, httpOptions)
    return this.http.post<any>('https://jerry.vineup.com/MVC/public/Purduesettings/UPDATE', update, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  addStory(story): Observable<Story> {
    return this.http.post<any>('https://jerry.vineup.com/MVC/public/PurdueStories/add', story, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateStory(story): Observable<Story> {
    return this.http.post<any>('https://jerry.vineup.com/MVC/public/PurdueStories/UPDATE', story, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }  

  deleteStory(story): Observable<{}> {
    console.log('https://jerry.vineup.com/MVC/public/PurdueStories/Delete/' + story)
    return this.http.get('https://jerry.vineup.com/MVC/public/PurdueStories/Delete/' + story, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  addCategory(category): Observable<Cat> {
    console.log(category)
    return this.http.post<any>('https://jerry.vineup.com/MVC/public/PurdueCats/add', category, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateCategory(category): Observable<Cat> {
    console.log(category)
    return this.http.post<any>('https://jerry.vineup.com/MVC/public/PurdueCats/UPDATE', category, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }  

  deleteCategory(category): Observable<{}> {
    console.log(category);
    return this.http.get('https://jerry.vineup.com/MVC/public/PurdueCats/Delete/' + category, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
