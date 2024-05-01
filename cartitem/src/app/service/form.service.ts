import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  submitApplication(fid: string, lid: string, selection: string,houseadd:string,appartment:string,city:string,phone:string,email:string) {
    console.log(`Homes application received: firstName: ${fid}, lastName: ${lid}, selection: ${selection},houseadd:${houseadd},appartment:${appartment},city:${city},phone:${phone},email:${email}.`);
  }
}
