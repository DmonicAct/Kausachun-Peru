import { Component, OnInit } from "@angular/core";
import { usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: "adminLogin-component",
  templateUrl: "adminLogin.template.html",
  styleUrls: ["adminLogin.template.scss"]
})
export class adminLoginComponent implements OnInit {
  public usuario: usuario;
  constructor(private servicio:UsuarioService, private router:Router){
    this.usuario=new usuario();
  }
  login(){
    this.servicio.login(this.usuario).subscribe(
      (res:any)=>{
        if(res.message=='Login Success'){
          this.router.navigate(['/admin/general']);
        }else{
          Swal.fire(
            'Aviso',
            'Porfavor verifique sus credenciales',
            'warning'
          )
        }
      }
    );
  }
  ngOnInit(): void {}
}
