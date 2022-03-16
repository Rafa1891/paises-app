import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',

})
export class VerPaisComponent implements OnInit {

  paises:Countries[]=[];
  constructor(private servicio:PaisService,private routerActive:ActivatedRoute) { }

  ngOnInit(): void {

    this.routerActive.paramMap.subscribe(
      param=>{
        let id=param.get('id');
        this.servicio.buscarCodigo(String(id));

    this.servicio.buscarCodigo(String(id)).subscribe(
      resp=>{this.paises=resp}
    );}
    );
  }





}
