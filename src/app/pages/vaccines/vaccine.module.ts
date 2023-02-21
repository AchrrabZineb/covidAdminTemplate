import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbInputModule, NbPopoverModule, NbSearchModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { VaccineRoutingModule } from './vaccine-routing.module';
import { VaccineComponent } from './vaccine.component';
import { ListVaccineComponent } from './list-vaccine/list-vaccine.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from '../tables/tables-routing.module';

const components = [
  VaccineComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    VaccineRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...components,
    ListVaccineComponent,
  ],
})
export class VaccineModule { }
