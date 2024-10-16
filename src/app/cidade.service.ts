import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidades } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  url = 'http://localhost:3000/cidade';

  constructor(private http:HttpClient) { }
getCidades(): Observable<Cidades []>{
  return this.http.get<Cidades []>('http://localhost:3000/cidade');
}

getCidadesById(id:number): Observable<Cidades >{
  return this.http.get<Cidades >( `${this.url}/${id}`);
}

 delete(Cidade:Cidades): Observable<void>{
  return this.http.delete<void>(`${this.url}/${Cidade}`);
 }

 update(Cidade: Cidades): Observable<Cidades>{
  return this.http.put<Cidades>(`${this.url}/${Cidade}`, Cidade);
}

save(Cidade: Cidades): Observable<Cidades>{
  return this.http.post<Cidades>(this.url, Cidade);
}

}
