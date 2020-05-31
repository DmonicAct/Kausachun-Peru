import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  
  @ViewChild("header",{static:false})
  public Header:HeaderComponent;
  
  @ViewChild("footer",{static:false})
  public Footer:FooterComponent;
  public constructor(private router: Router) {

  }
  ngOnInit() {
    /*  this.router.navigate(['campesinos']); */
  }
  title = "kausachunPeru";

  changeOfRoutes(){
    if(this.router.url === '/admin'){
      this.Header.booleanColor=false;
      this.Footer.booleanFooter=false;
    }else{
      this.Header.booleanColor=true;
      this.Footer.booleanFooter=true;
    }
  }
}
