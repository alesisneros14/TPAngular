import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class GeneroServiceService {


  url = "https://aqueous-spire-30568.herokuapp.com/";

  constructor(private http: HttpClient) { }

  generos = [
    {
      id: "GNovela",
      name: "Novela"
    },
    {
      id: "GTerror",
      name: "Terror"
    },
    {
      id: "GFiccion",
      name: "Ficcion"
    }
  ];



  listaGeneros(){
    
    return this.generos;
    
    
  }

 




}
