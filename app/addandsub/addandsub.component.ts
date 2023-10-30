import { Component } from '@angular/core';

@Component({
  selector: 'app-addandsub',
  templateUrl: './addandsub.component.html',
  styleUrls: ['./addandsub.component.css']
})
export class AddandsubComponent {
count: any= '0';
  counter(value: string){
     value==='add'?this.count++:this.count--;
  }
}
