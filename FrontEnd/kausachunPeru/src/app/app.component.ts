import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderComponent } from './component/header/header.component';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  
  @ViewChild("header",{static:false})
  public Header:HeaderComponent;

  public constructor(private router: Router) {

  }
  ngOnInit() {
    /*  this.router.navigate(['campesinos']); */
  }
  title = "kausachunPeru";

  changeOfRoutes(){
    if(this.router.url === '/admin'){
      this.Header.booleanColor=false;
    }else{
      this.Header.booleanColor=true;
    }
  }
}
