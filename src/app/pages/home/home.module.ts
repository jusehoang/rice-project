import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from "@angular/core";
import { ThemeModule } from "src/app/theme.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CommonModule } from '@angular/common';
import { PhonePipe } from 'src/app/@pipe/phone.pipe';
import { MenuDayComponent } from './home-page/menu-day/menu-day.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    PhonePipe,
    MenuDayComponent
  ],
  imports: [
    ThemeModule,
    HomeRoutingModule,
    CommonModule,
  ]
})
export class HomeModule {}
