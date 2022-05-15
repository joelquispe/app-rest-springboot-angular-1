import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/user/edit/edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'usuarios',component: UserComponent},
  {path: '',component: LoginComponent},
  {path: 'usuarios/edit/:id',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
