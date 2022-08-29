import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css'],
  providers: [ ServicesService]
})
export class MecanicosComponent implements OnInit {

  tipoDocumento: Array<any>
  estado = [
    {name:"A"},
    {name:"I"}
  ]
  mensaje:String;
  status:String;
  form: FormGroup;
  alertnook:boolean=false;
  alertok:boolean=false;
  constructor( private servicesService: ServicesService,
   ) { 
   
    this.tipoDocumento = [
      {name:"CC"},
      {name:"CE"},
      {name:"PS"},
      {name:"TI"},
    ];
   
    this.buidlForm();
  }

  ngOnInit() {
    

  }

  private buidlForm(){
    this.form = new FormGroup({
      tipoDocumento: new FormControl('',[Validators.required]),
      documento: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]),
      primernombre: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z]+$')]),
      segundonombre: new FormControl(null,[Validators.minLength(0),Validators.minLength(3),Validators.pattern('^[A-Za-z]+$')]),
      primerapellido: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z]+$')]),
      segundoapellido: new FormControl(null,[Validators.minLength(0),Validators.minLength(3),Validators.pattern('^[A-Za-z]+$')]),
      celular: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
      email: new FormControl(null,[Validators.email]),
      direccion: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      
    })
  }

save(event : Event){

  event.preventDefault();
  const value = this.form.value;
  let respuesta:any=[];
   
  let tipoDocumento = this.form.value.tipoDocumento;
  let documento =  this.form.value.documento; 
  let primernombre =  this.form.value.primernombre; 
  let segundonombre = this.form.value.segundonombre;
  let primerapellido = this.form.value.primerapellido;
  let segundoapellido = this.form.value.segundoapellido;
  let celular = this.form.value.celular; 
  let email = this.form.value.email; 
  let direccion = this.form.value.direccion; 
  let estado= this.form.value.estado; 
  this.servicesService.addMecanicos(tipoDocumento,documento,primernombre,segundonombre,primerapellido,
    segundoapellido,celular,direccion,email,estado).subscribe(res => {
      respuesta = res
        this.mensaje = respuesta.mensaje;
        this.status = respuesta.status;
        if(this.status =="OK"){
          this.alertok = true;
        }else{
          this.alertnook = true;
        }
    ;})
   

}

closeAlert(){
  if(this.alertnook){
    this.alertnook = false;
    
  }
  if(this.alertok){
    this.alertok = false;  
    window.location.reload();
  }
  
  
} 




}
