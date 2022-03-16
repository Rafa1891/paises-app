import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string>=new EventEmitter();//core
  termino:string="";
  titulo:string="";

  constructor(private router:Router) { }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  rutaEncontrada():void{
    if(this.router.url==="/region"){
      this.titulo="región";
    }else if(this.router.url==="/capital"){
      this.titulo="capital";
  }else if(this.router.url==="/"){
    this.titulo="país";
  }

}
  ngOnInit(): void {
    this.rutaEncontrada();
  }

}
