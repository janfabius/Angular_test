import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';


  frutta = [
    {nome:"banana", paese:"Brasile"},
    {nome:"mela", paese:"Italia"},
    {nome:"kiwi", paese:"New Zeland"},
    {nome:"Ananas", paese:"Perù"}
  ]

}
