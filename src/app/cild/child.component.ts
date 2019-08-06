import {Component, EventEmitter, Input, Output} from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() user: string;

   @Output() changeName = new EventEmitter<string>();

  onNameChange(name: string) {
     this.user = name;
     this.changeName.emit(name);
   }
}
