import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // path and component for Post Listing
  { path: '', component: PostListComponent },

  // path and component for Post Creation
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  //path and component for editing a already created post
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
