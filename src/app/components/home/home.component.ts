import { Component, OnInit } from '@angular/core';
import { registerElement, RouterExtensions } from '@nativescript/angular';

registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items = [
    { name: "Note 1",date:"20/9/2021"},
    { name: "Note 2",date:"22/9/2021"},
    { name: "Note 3",date:"11/9/2021"},
    { name: "Note 4",date:"10/9/2021"},
    { name: "Note 5",date:"09/8/2021"},
    { name: "Note 6",date:"01/8/2021"},
    { name: "Note 7",date:"29/3/2021"},
    { name: "Note 8",date:"20/9/2021"},
    

  ]


  constructor(
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
  }

  public routeToEditor(){
    this.routerExtensions.navigate(['/editor', {
      transition: { name: 'slide' }
    }]);
  }

}
