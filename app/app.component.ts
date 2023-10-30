import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
 displayvalue: string = '';
  getdata(value : string)
  {
    console.warn(value)
    this.displayvalue = value
  }
  count:any = 0;
  message: string = ''
  counter(val: string){
    if (val === 'add') {
      if(this.count>= 100){
        alert("Not allowed above 100")
      }
      else{
        this.count++;
      } 
    } else {   
      if(this.count> 0){
        this.count--;
      }
      else{
        alert('Not Allowed');
      }
    }
  }
    }
