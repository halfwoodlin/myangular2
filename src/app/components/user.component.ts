import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}}</h1>
             <p><strong>Email:</strong>{{email}}</p>
             <p><strong>Address:</strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
             <button (click)="toggleHobbies()">{{showhobbies ? "Hide hobbies" : "Show hobbies"}}</button>
             <div *ngIf="showHobbies">
             <ul>
              <li *ngFor="let hobby of hobbies; let i = index">{{hobby}}<button (click)="deleteHobby(i)">x</button></li>

             </ul>

                <form (submit)="addHobby(hobby.value)">
                 <label>Add hobby: </label><input type="text" #hobby />
                 <button type="submit">Add</button>
                </form>

             </div>

             <form>
                <label>Name: </label><input type="text" name="name" [(ngModel)]="name"/><br/>
                 <label>Email: </label><input type="text" name="email" [(ngModel)]="email"/><br/>
                  <label>Street: </label><input type="text" name="address.street" [(ngModel)]="address.street"/><br/>
                   <label>City: </label><input type="text" name="address.city" [(ngModel)]="address.city"/><br/>
                    <label>State: </label><input type="text" name="address.state" [(ngModel)]="address.state"/><br/>


<label>new</label>

             </form>

              


              
              `,
})
export class UserComponent  { 
    
    name:string;
    email:string;
    address:Address;
    hobbies:string[];
    showHobbies:boolean;
    hobbyinput:string;


    constructor(){
      this.name = 'David';
      this.email = 'david@gmail.com';
      this.address = {
      street: '123 cutter',
      city: 'Plano',
      state: 'TX'
       }
      this.hobbies = ['Music','Sport','Movie']
      this.showHobbies = false;
       // console.log('hi david')
      }



   toggleHobbies(){
        if(this.showHobbies==true){
          this.showHobbies = false;
        }

        else{
           this.showHobbies = true;
        }

    }



   addHobby(hobby:string){  
     this.hobbyinput = hobby;
    console.log("good"+hobby);
    this.hobbies.push(hobby);
   }



   deleteHobby(i:number){
      this.hobbies.splice(i,1);

   }



}








interface Address {
      street: string;
      city:string;
      state:string;
}