import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  error!:String;
  persona: Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona)
      .subscribe(data => {
        alert("Se Agrego Con Exito...!!");
        this.router.navigate(["listar"]);
      }, error =>{              
        alert(error.message);        
      })
  }

}
