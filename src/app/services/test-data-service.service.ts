import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { subTest } from '../modules/test';
import { Subscriber } from 'rxjs/Subscriber';
import { map, catchError, filter } from 'rxjs/Operators';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TestDataServiceService {
   
constructor(private httpClient: HttpClient, private http: Http){}
getEmployees():Observable<Observable<any>>{
    // var emp :Employee[];
    //return new Observable<Employee[]>(D=>{
        
    /////// Latest Method of fetching data with HTTP CLIENT
    // // // return this.httpClient.get<Employee[]>("http://localhost:4444/api/Employee").pipe(
    // // //     map(R=> {
    // // //         console.log(R); 
    // // //         return R;
    // // //     }),
    // // //     catchError((err,emp)=> { 
    // // //         console.log("Error :"+ err); 
    // // //         return emp
    // // //     })
    // // // )

    //OLD/Depricated HTTP is used to fetch data
    return Observable.create(observer => {
        observer.next(
        this.http.get("http://localhost:4444/api/Employee").pipe(
            map(res=>{
                console.log("Success :"+ res); 
                return res;
            }),
            catchError((err,emp)=> { 
                console.log("Error :"+ err); 
                return emp
            }))
        );}
    );      
            // map(res=> {
            //     console.log(res); 
            //     return res;
            // }),
           
    
    
        //  .subscribe(R=> 
        //   {  debugger;
        //     return  D.next(R);
        //   },
        //   err=>{

        //   }
        //)
  //});
      //return this.httpClient.get<Employee[]>("http://localhost:4444/api/Employee")

       // .subscribe(res=> { return res;});

        
    //     .pipe(
    //         map(res=>{
    //         return res;
    //         //  new Employee()
    //         // {
    //         //     res.EmployeeID,
    //         //     res.FirstName,
    //         //     res.LastName,
    //         //     res.EmpCode,
    //         //     res.Position,
    //         //     res.Office
    //         // }
                
    //     }
    // ))
}

getEmployeesWithPromice(){
        //let emp = new Promise<Employee>((resolve,reject)=>{
            
        return  this.httpClient.get<Employee[]>("http://localhost:4444/api/Employee").toPromise();
        //     .then(res=>{
            
        //     if(res != null)
        //         resolve(emp);
        //     else
        //         reject("Employee Not Found");
        //     }),
        // err=>{
        //     reject(err);
        // }
    //});
           
}


}

export class Employee{
    EmployeeID : number
    FirstName : string;
    LastName :string;
    EmpCode : string;
    Position :string;
    Office :string;
}



    // let obser = new Subject(1);
    // obser.next(34);
    // obser.subscribe();

    // let obser = new BehaviorSubject(1);
    // obser.next(34);
    // obser.value;
    // obser.subscribe();

    // let obser = new Observable((x)=>{
    //     x.next(11);
    //     x.complete();
    //     x.error("asdasd");
    // })
    // obser.subscribe(o=>{ },_E=>{},()=>{})