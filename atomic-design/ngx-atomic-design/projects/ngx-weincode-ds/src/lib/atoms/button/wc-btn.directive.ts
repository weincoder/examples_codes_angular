import { Directive, Input, HostBinding, ChangeDetectorRef } from '@angular/core';

const BUTTON_CLASSES = {
  primary: 'wc-btn-primary',
  secondary: 'wc-btn-secondary'
};
@Directive({
  selector: '[wc-btn]',
})
export class WcBtnDirective {

 /**
 * Parámetro para indicar el tipo de botón.
 *
 * @type {('primary' | 'secondary')}
 * @memberof WcBtnDirective
 */
  @Input() btnStyle: 'primary' | 'secondary' = 'primary';

  @HostBinding('class') classes = '';
  constructor(private changeDector: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
    this.classes = BUTTON_CLASSES[this.btnStyle];
    this.changeDector.detectChanges();
  }

}
