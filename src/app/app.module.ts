import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NovaComponentaComponent } from './nova-componenta/nova-componenta.component';
import { InfoBoxComponent } from './about/info-box/info-box.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    NovaComponentaComponent,
    InfoBoxComponent,
    SkillCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
