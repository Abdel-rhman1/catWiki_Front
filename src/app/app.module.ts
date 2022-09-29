import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ConvertToNumberPipe } from './convert-to-number.pipe';
import { ViewComponent } from './components/admins/view/view.component';
import { CreateComponent } from './components/admins/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopRatedComponent,
    BreedDetailsComponent,
    FooterComponent,
    NavbarComponent,
    ConvertToNumberPipe,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgSelectModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
