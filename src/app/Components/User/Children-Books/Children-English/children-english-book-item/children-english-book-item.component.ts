import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children-english-book-item',
  templateUrl: './children-english-book-item.component.html',
  styleUrls: ['./children-english-book-item.component.css']
})
export class ChildrenEnglishBookItemComponent {
  @Input() englishBooks: any[] = [];
  @Input() term: string = '';
}
