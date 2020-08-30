import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroServiceService {


  url = "https://aqueous-spire-30568.herokuapp.com/";

  constructor(private http: HttpClient) { }

  
  //Metodo para guardar libro en el service
  async guardarLibro(unLibro){

    try{
      var resultado: any;

      resultado = await this.http.post(this.url+"libro", unLibro).toPromise();

      console.log(resultado);

      return resultado;

    }
    catch(error){

    }

  }

  async listaDeLibros(){

    try{
      var resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise();

      return resultado;
    }
    catch(error){

    }
    
  } 
  
  async listaPrestados(){

    try{
      var resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise();

      return resultado;
    }
    catch(error){

    }

  }



  
}
