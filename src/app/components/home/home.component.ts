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
    { name: "Note 1"},
    { name: "Note 2"},
    { name: "Note 3"},
    { name: "Note 4"},
    { name: "Note 5"},
    { name: "Note 6"},
    { name: "Note 7"},
    { name: "Note 8"},
    

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
