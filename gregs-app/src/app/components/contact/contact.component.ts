import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import * as cloneDeep from "lodash/cloneDeep";
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: any;
  run: boolean;
  error: boolean = false;
  constructor(
    private books: BooksService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.init();

  }
    
  ridings = this.books.ridings;
  public levels = [
    'Novice',
    'Intermediate',
    'Advanced'
  ];
  public hours = new Array(12).fill(7).map(function(x,i){return x+i;});
  public minutes = ['00','15','30','45'];
  private rider(){
    return {
      name:'',
      height:'',
      weight:'',
      age:'',
      level:'Novice',
    };
  } 
  public payments = ['Cash on the Day', 'Bank Transfer'];
  nextDay = new Date(new Date().setDate(new Date().getDate()+1)).toISOString().slice(0, 10);
  private init(){
      this.form = this.books.getFrom()?this.books.getFrom():{
        name:'',
        email:'',
        tel:'',
        date: this.nextDay,
        hour: this.hours[0],
        minutes: this.minutes[0],
        riding:this.ridings[0],
        riders:[this.rider()],
        message:'',
        payment:'Cash on the Day',
        accept:false
      };
  }
  minDate = new Date().toISOString().slice(0,10);
  riders =[this.rider()];
  price(){
    var total = 0;
    if(this.form&&this.form.riding.options){
      total = this.form.riding.options[this.form.riding.selected].price*this.form.riders.length;
    }
    return total?'- €'+total:'';
  };


  addRider(){
    this.form.riders.push(this.rider());
  };
  removeRider(i){
    this.form.riders.splice(i,1);
  };
  changeHour(){
    if(this.form.hour===this.hours[this.hours.length-1]){
      this.form.minutes=this.minutes[0];
    }
  };
  submitForm (submitForm) {
    if(this.run){
      return;
    }
    this.run = true;
    var data = cloneDeep(this.form);
    if(data.riding.options){
      data.riding = data.riding.name + ' : '+data.riding.options[data.riding.selected].name;
    }else{
      data.riding = data.riding.name;
    }
    var year = data.date.getFullYear();
    var month = data.date.getMonth()+1;
    var day = data.date.getDate();
    var date = day+'/'+month+'/'+year+' '+data.hour+':'+data.minutes;
    data.date = date;
    data.payment = data.payment+' '+this.price();
    this.books.makeBook(data).subscribe((res) =>{
      console.log(res);
      this.form = null;
      this.router.navigate(['thankyou'])
      this.run = false;
    },(error)=>{
      this.run = false;
    });
  };
  scrollTo(id){
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  };
}
