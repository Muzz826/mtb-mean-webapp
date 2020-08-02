import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TechReviewsComponent } from './tech-reviews/tech-reviews.component';
import { TechTutorialsComponent } from './tech-tutorials/tech-tutorials.component';
// This routing module is for when not logged into the app
const routes: Routes = [

  // path and component for Post Listing
  { path: '', component: PostListComponent },

  // path and component for Post Creation
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  // path and component for editing a already created post
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'home', component: HomeComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
