import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';
BookService

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {

  newArrivals:any[] = [];
  newArrivalsA: any [] = [];

  constructor(private bookService:BookService){
    bookService.getNewArrivalBooks().subscribe((res) => {
      // let response = res.MainCategory="NewE";
      this.newArrivals = res.slice(0,8);
      // .slice(10,18);
      
      console.log(res);
      //  console.log(this.newArrivals);
      
    });

    
    bookService.getNewArrivalBooksA().subscribe((data) => {
      
      this. newArrivalsA = data.slice(0,8);
     
      
      console.log(data);
     
      
    });

  }



  

 
    
  
    
    }



 
    
    
  
    



  

  
  




