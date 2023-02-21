import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentreComponent } from './centre.component';
import { FormAddComponent } from './form-add/form-add.component';
import { ListCentreComponent } from './list-centre/list-centre.component';


const routes: Routes = [{
  path: '',
  component: CentreComponent,
  children: [
    {
      path: 'addCentre',
      component: FormAddComponent,
    },
    {
      path: 'listCentre',
      component: ListCentreComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreRoutingModule {
}
