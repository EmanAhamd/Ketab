import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-english-book-item',
  templateUrl: './english-book-item.component.html',
  styleUrls: ['./english-book-item.component.css']
})
export class EnglishBookItemComponent {
  @Input() englishBooks:any[] = [];
  @Input() term:string= '';
}
