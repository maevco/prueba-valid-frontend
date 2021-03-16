import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/Persona';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/persona/';

  getPersonas(): Observable<any>{
    return this.http.get<any[]>(this.Url).pipe(catchError(this.handleError));
  }
 
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona).pipe(catchError(this.handleError));;
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }

  handleError(error){
    return throwError(error.message || "Error servidor");
  }
}
