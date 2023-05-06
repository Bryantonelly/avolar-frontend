import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaquetesComponent } from './paquetes.component';
import { PaquetesRoutingModule } from './paquetes-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';


// Import what you need. RECOMMENDED. ✔️
import { AccountBookFill, AlertFill, AlertOutline, SendOutline, SearchOutline } from '@ant-design/icons-angular/icons';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill, SendOutline, SearchOutline ];

@NgModule({
  declarations: [
    PaquetesComponent,
    FilterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    PaquetesRoutingModule,
    NgbCollapseModule,
    FormsModule,
    DemoNgZorroAntdModule,
    DirectivesModule,
    NzIconModule.forChild(icons),
  ],
  bootstrap: [ PaquetesComponent ]
})
export class PaquetesModule { }
