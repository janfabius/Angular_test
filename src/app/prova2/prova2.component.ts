import { Component } from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css']
})
export class Prova2Component {

  title = 'default';
  isVisible = true;

  persone = [
    {nome:"Fabio", cognome:"Conte", isOnline: true},
    {nome:"Rosanna", cognome:"Puleo", isOnline: false},
    {nome:"Gabriella", cognome:"Romeo", isOnline: true},
    {nome:"Giuseppe", cognome:"Puleo", isOnline: true},
    {nome:"Daniele", cognome:"Conte", isOnline: false}
  ]

  numero = 3;


  onInput(event: Event){
    
    this.title = (<HTMLInputElement>event.target).value
    
    // console.log( (<HTMLInputElement>event.target).value)
  }

  onClick(event : Event){
    this.title += ' Ho cliccato il pulsante!';
  }


}
