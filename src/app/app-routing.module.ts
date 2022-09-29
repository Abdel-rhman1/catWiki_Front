import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';
import { HomeComponent } from './components/home/home.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'breed_details/:id' , component:BreedDetailsComponent},
  {path:'popualr_breeds' , component:TopRatedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
