import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { RespoRoutingModule } from './respo-routing.module';
import { RespoComponent } from './respo.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { AddRespoComponent } from './add-respo/add-respo.component';
import { ListRespoComponent } from './list-respo/list-respo.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    RespoRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    RespoComponent,
    AddRespoComponent,
    ListRespoComponent
  ],
})
export class RespoModule { }
