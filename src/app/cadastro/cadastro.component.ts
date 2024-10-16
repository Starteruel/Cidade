import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent  implements OnInit{

    formGroupProduct: FormGroup;
    isEditing: boolean = false;
    formGroupCidades: any;

   constructor(private router: Router,
        private activeRoute: ActivatedRoute,
        private service: CidadeService,
        private formBuilder: FormBuilder
    ){

     this.formGroupProduct = formBuilder.group({
        UFs: [''],
        Código: [''],
        Quant: [''],
        Local: [''],
        Capital: ['']
     });

   }
   ngOnInit() {
     const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
     if(id != 0){
      this.isEditing=true;
      this.loadCidades(id);
     }
   }
    loadCidades(id: number) {
      throw new Error('Method not implemented.');
    }
   loadCidade(id: number) {
     this.service.getCidadesById(id).subscribe({
      next: data => this.formGroupCidades.setValue(data)
     });
   }

   update(){
     this.service.update(this.formGroupCidades.value).subscribe({
       next: () => this.router.navigate(['cidades'])
     });
   }


   save(){
     this.service.save(this.formGroupCidades.value).subscribe({
       next: () => this.router.navigate(['cidades'])
     });
   }

 }


