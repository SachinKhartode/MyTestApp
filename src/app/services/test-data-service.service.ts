import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { subTest } from '../modules/test';
import { Subscriber } from 'rxjs/Subscriber';
import { map, catchError, filter } from 'rxjs/Operators';

@Injectable()
export class TestDataServiceService {
   
constructor(private httpClient: HttpClient){}
getEmployees(){
       // var emp :Employee[];
      //return new Observable<Employee[]>(D=>{
        
    return this.httpClient.get<Employee[]>("http://localhost:4444/api/Employee")
          .pipe(
          map(R=> {console.log(R); return R;} ),
        //   catchError((R,emp)=> { 
           
        //     console.log("Error :"+ R); return emp})
        )


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
