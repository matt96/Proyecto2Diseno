import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrugApp';
  misDrugs: string[];
  constructor(){
    this.misDrugs=["penisilna","vaselina","panadol","cataflan","antifludes"];
  };

}
