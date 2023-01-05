import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isWeb = false;
  constructor(@Inject(PLATFORM_ID) platform:Object){
    this.isWeb = isPlatformBrowser(PLATFORM_ID);
  }
  ngOnInit(): void {
    if (this.isWeb){
      console.log(document.getElementById('Hola')?.textContent)
    }
  }
  title = 'ssr-example';

}
