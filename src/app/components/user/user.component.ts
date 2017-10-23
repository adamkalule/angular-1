import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor run..');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Sekitoleko najib';
    this.email = 'brutalhunks02030@icloud.com';
    this.age = 40;
    this.address = {
      street:'60 mbarara bushenyi',
      city: 'mbarara',
      state:'MB'
    }
    this.hobbies = ['Write Code','Watch moves','Listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Kalule Adam';
    this.hobbies.push('Daya the muscian');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0;i <this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
         this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}