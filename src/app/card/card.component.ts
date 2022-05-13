import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!:string
  @Input() current!:number
  @Input() previous!:number
  @Input() time!:string
  @Input() icon!:string
  @Input() color!:string

}
