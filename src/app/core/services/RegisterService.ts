import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment, Gender,  PersonModel,  Prefix, Role } from './datamodel/PatientRegisteration';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


const BASE_URL = 'http://localhost:8090';
const API_URL = BASE_URL+"/person";
const PATIENT_REGISTER_URL = BASE_URL+"/patient";


@Injectable({
  providedIn: 'root'
})
export class RegisterService implements Resolve<Enrollment[]>{

  



  constructor(private http: HttpClient){

    // this.http.get( API_URL).subscribe((patientModel: any) => {
    //   console.log(patientModel);
    // });
    
    // this.http.post( API_URL, { patientModel: 'data' }).subscribe((response: any) => {
    //   console.log(response);
    // });

  }

  // public fetchClient(_model: never): Observable<boolean> {
  //   return this.http.get<boolean>(`${baseUrl}/login`);
  // }


  createPatient(
   
    personModel: {
      prefix: string | undefined; 
      firstName: string | undefined; 
      lastName: string | undefined; 
      phoneNumber: string | undefined; 
      dob: Date | undefined; 
      gender: string | undefined; 
      // role: string | undefined; 
      account: { 
            emailId: string | undefined;};
    }): Observable<object> {
    return this.http.post<object>(API_URL, personModel );
    }


    addPatient(_personModel:PersonModel ): Observable<object> {
    return this.http.post<object>(API_URL, _personModel);
  }

  
  getPrefix():Observable<{prefix:Prefix}[]>{
    return this.http.get<{prefix:Prefix}[]>(BASE_URL+"/prefix");
   }

   getGender():Observable<{gender:Gender}[]>{
    return this.http.get<{gender:Gender}[]>(BASE_URL+"/gender");
   }

   getRole():Observable<{role:Role}[]>{
    return this.http.get<{role:Role}[]>(BASE_URL+"/role");
   }



   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>('http://localhost:8090/enrollment');
  }




}