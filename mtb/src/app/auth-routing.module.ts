import { TechTutorialsComponent } from './tech-tutorials/tech-tutorials.component';
import { TechReviewsComponent } from './tech-reviews/tech-reviews.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
// This route module is for routing once logged in only.

const routes: Routes = [
  // path and component for login page
  { path: 'login', component: LoginComponent },
  // path and component for signup page
  { path: 'signup', component: SignupComponent },
  // path and component for home page
  { path: 'home', component: HomeComponent },
  // path and component for about page
  { path: 'about', component: AboutComponent },
  // path and component for contact page
  { path: 'contact', component: ContactComponent },
  // path and component for tech reviews
  { path: 'tech-reviews', component: TechReviewsComponent },
  // path and component for tech tutorials
  { path: 'tech-tutorials', component: TechTutorialsComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
