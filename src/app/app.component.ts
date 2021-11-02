import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:any[]=[]

  todo: string = ''

  toggle: any = {};

  todoFound: boolean = false


  addTodo(item:string){

    this.todo = '';

    this.todoFound = this.list.some(el => el.name === item);

    if(this.todoFound === true){
      alert(item + ' already in the list!')
    }else{
      this.todoFound = false
      this.list.push({id:this.list.length,name:item})
      console.log(this.list)
    }
  }

  removeTodo(id:number){
    this.list=this.list.filter(item=>item.id!==id)
    this.toggle[id] = false;
    console.log(this.list)
  }

}
