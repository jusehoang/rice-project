import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { AuthService } from 'src/app/@services/auth.service';
import { ThemeModule } from 'src/app/theme.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  background: ThemePalette = 'primary';
  isActive = false;
  username = 'jusehoang';
  isLogin = false;
  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isLogin.subscribe(isLogin => {
      this.isLogin = isLogin;
    })
  }

  ngOnDestroy() {
    this.auth.isLogin.unsubscribe();
  }

}
