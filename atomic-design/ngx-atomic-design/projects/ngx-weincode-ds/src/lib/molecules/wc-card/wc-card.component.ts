import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-card',
  templateUrl: './wc-card.component.html',
  styleUrls: ['./wc-card.component.css']
})
export class WcCardComponent implements OnInit {

  /**
* Parámetro para indicar el tipo de botón.
*
* @type {('primary' | 'secondary')}
* @memberof WcBtnDirective
*/
  @Input() imgCard:string=  '';
  @Input() titleCard:string=  '';
  @Input() contentCard:string=  ''; 
  @Input() leftActionCardText:string=  ''; 
  @Input() leftActionLnkCard:string=  ''; 
  @Input() rigthActionCardText:string=  '#/'; 
  @Input() rigthActionLnkCard:string=  '#/'; 
  constructor() { }

  ngOnInit(): void {
  }

}
