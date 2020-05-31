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
  
  public booleanAdmin:Boolean=false;

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
    if(this.router.url.startsWith('/admin')){
      this.Header.booleanColor=false;
      this.Footer.booleanFooter=false;
      if(this.router.url.length>6)
        this.booleanAdmin=true;
    }else{
      this.Header.booleanColor=true;
      this.Footer.booleanFooter=true;
      this.booleanAdmin=false;
    }
  }
}
