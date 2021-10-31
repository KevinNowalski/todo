import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:any[]=[]
  addTodo(item:string){
    this.list.push({id:this.list.length,name:item})
  }
  removeTodo(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}
