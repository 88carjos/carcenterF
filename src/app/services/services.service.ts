import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicesService {

  url: string = environment.API_URL;
  token="1234";


  constructor(
    private http: HttpClient
  ) { 

  }

  getMecanicos(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    let urltemp =this.url+'/mecanicos/getMecanicosDisponibles';
    
    return this.http.get(urltemp,{headers: header});
  }

  addMecanicos(tipoDocumento: string, documento: number, primerNombre: string, segundoNombre: string,primerApellido: string, segundoApellido: string,celular: string, direccion: string,email: string, estado: string){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json');
    let mecanicos: any = {
      tipoDocumento: tipoDocumento,
      documento: documento,
      primerNombre: primerNombre,
      segundoNombre: segundoNombre,
      primerApellido: primerApellido,
      segundoApellido: segundoApellido,
      celular: celular,
      direccion: direccion,
      email: email,
      estado: estado
    };

    mecanicos = JSON.stringify(mecanicos);

    let body = JSON.stringify({ 
      token:this.token, 
      mecanicos: JSON.parse(mecanicos)
    });
    body = JSON.parse(body);
    let urltemp =this.url+'/mecanicos/agregarMecanicos';
    return this.http.post(urltemp,body,{headers: header});
  }

  addMantenimientos(estado: number, placa: String, tipoDocumento: string, documento:number){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json');

    let mantenimientos: any = {
      codigo:0,
      estado:estado,
      codPlaca:placa,
      documento:documento,
      tipoDocumento:tipoDocumento
    }
    mantenimientos = JSON.stringify(mantenimientos);

    let body = JSON.stringify({ 
      token:this.token, 
      mantenimientos: JSON.parse(mantenimientos)
    });
    body = JSON.parse(body);
    let urltemp =this.url+'/mantenimientos/agregarMantenimiento';
    return this.http.post(urltemp,body,{headers: header});
  }
}
