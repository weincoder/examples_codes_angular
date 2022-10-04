import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { ShowmfComponent } from 'projects/mf/src/app/showmf/showmf.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef) { }

  async ngOnInit(): Promise<void> {
    
  }
  

}
