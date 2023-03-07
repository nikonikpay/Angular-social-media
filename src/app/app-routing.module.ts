import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from "src/app/pages/create-account/create-account.component";
import {LoginComponent} from "src/app/pages/login/login.component";
import {PostsComponent} from "src/app/pages/posts/posts.component";

const routes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path:'posts',component:PostsComponent}

];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
