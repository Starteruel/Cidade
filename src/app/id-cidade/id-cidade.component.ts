import { Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Cidades } from './../cidade';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-id-cidade',
  templateUrl: './id-cidade.component.html',
  styleUrl: './id-cidade.component.css'
})
export class IdCidadeComponent implements OnInit {
  Cidade: Cidades[] = [];

  constructor(private service: CidadeService, private router: Router){}

  ngOnInit() {
  this.LoadCidades();
  }
  LoadCidades() {
    throw new Error('Method not implemented.');
  }

  LoadProducts() {
   this.service.getCidades().subscribe({
     next: data => this.Cidade = data
     }
   );
  }
    delete(Cidade: Cidades){
      this.service.delete(Cidade).subscribe({
         next: () => this.LoadCidades()
      })
   }
     create(){
       this.router.navigate(['cidades']);
     }

  }
