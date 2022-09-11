import { NgModule } from "@angular/core";
import { ThemeModule } from "../theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from "../component/header/header.component";
import { FooterComponent } from "../component/footer/footer.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ThemeModule,
    PagesRoutingModule,
    CommonModule
  ]
})
export class PagesModule {}
