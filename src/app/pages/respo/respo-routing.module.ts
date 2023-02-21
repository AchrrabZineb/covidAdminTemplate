import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRespoComponent } from './add-respo/add-respo.component';
import { ListRespoComponent } from './list-respo/list-respo.component';
import { RespoComponent } from './respo.component';


const routes: Routes = [
  {
    path: '',
    component: RespoComponent,
    children: [
      {
        path: 'addRespo',
        component: AddRespoComponent,
      },
      {
        path: 'listRespo',
        component: ListRespoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RespoRoutingModule {
}

