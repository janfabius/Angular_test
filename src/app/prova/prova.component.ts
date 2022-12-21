import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit,
AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {

  @Input() data:any;

  cani = [
  {
    nome: 'roger',
    razza: 'golden',
    descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  }
]





isDisabled = false
immagine = ''
immagine1 = 'https://www.cartadaparati.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w03736-small.jpg'
immagine2 = 'https://www.settemuse.it/sfondi_tecno/sfondi-iphone/sfondi-iphone-001.jpg'





  constructor(){
    console.log("costruttore");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("INIZIALIZZAZIONE");
    console.log(this.data);

    let counter = 0

    setInterval(() =>{
      this.isDisabled = ! this.isDisabled

      
      if(counter%2==0){
        this.immagine = this.immagine1
      }else{
        this.immagine = this.immagine2
      }
      counter++

    },2000)
  }

}
