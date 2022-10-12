import { NgModule } from '@angular/core';
import { WcBtnDirective } from './atoms/button/wc-btn.directive';
import { NgxWeincodeDsComponent } from './ngx-weincode-ds.component';
import { WcCardComponent } from './molecules/wc-card/wc-card.component';




@NgModule({
  declarations: [
    NgxWeincodeDsComponent,
    WcBtnDirective,
    WcCardComponent
  ],
  imports: [
  ],
  exports: [
    NgxWeincodeDsComponent,
    WcCardComponent,
    WcBtnDirective
  ]
})
export class NgxWeincodeDsModule { }
