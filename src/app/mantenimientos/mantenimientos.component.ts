import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css'],
  providers: [ ServicesService]
})
export class MantenimientosComponent implements OnInit {

  alertnook:boolean=false;
  alertok:boolean=false;
  mecanicos:any=[];
  form: FormGroup;
  nombres:any=[];
  mensaje:String;
  status:String;
  estados = [
    {name:"Cotizacion",id:1},
    {name:"Alistamiento",id:2},
    {name:"Reparacion",id:3},
    {name:"Terminado",id:4},
  ]
  placas = [
    {name:"UCQ924"},
    {name:"UCQ925"},
    {name:"UCQ926"},
    {name:"BOW326"},
    {name:"BOW327"},
    {name:"BOW328"},
    {name:"BOW329"},
    {name:"BOW330"},
    {name:"JDN739"},
    {name:"JDN740"},
    {name:"JDN741"},
    {name:"JDN742"},
    {name:"UCQ927"},
    {name:"UCQ928"},
    {name:"UCQ930"},
    {name:"UCQ929"}
  ]
  
  constructor(private servicesService: ServicesService) {

    this.servicesService.getMecanicos().subscribe(resp=>{
    let respuesta:any=[];
    respuesta=resp;
    this.mecanicos=respuesta.mecanicos;
    this.getnombresMecanicos();  
  });
    
    this.buidlForm();
   }


  

  private buidlForm(){
    this.form = new FormGroup({
      estado: new FormControl('',[Validators.required]),
      mecanico: new FormControl('',[Validators.required]),
      placa  : new FormControl('',[Validators.required])
           
    })
  }

  ngOnInit() {
  }

  getnombresMecanicos(){
    this.mecanicos.forEach(element => {
      let objetoMecanicos = {
        nombre: element.primerNombre+" "+element.primerApellido,
        documento:element.tipoDocumento+"-"+element.documento
      }
      
      this.nombres.push(objetoMecanicos); 
    });
  }


  save(event : Event){
    debugger
    event.preventDefault();
    let mecanico:any=[];
    let respuesta:any=[];
    mecanico=this.form.value.mecanico.split("-");
    let estado = this.form.value.estado;
    let tipoDocumento = mecanico[0]; 
    let documento =   mecanico[1];
    let placa =  this.form.value.placa; 
    this.servicesService.addMantenimientos(estado, placa, tipoDocumento, documento).subscribe(res => {
      respuesta = res
        this.mensaje = respuesta.mensaje;
        this.status = respuesta.status;
        if(this.status =="OK"){
          this.alertok = true;
        }else{
          this.alertnook = true;
        }
      });
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
