import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { es } from 'date-fns/locale';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzNotificationModule,
    NzTableModule,
    NzMenuModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzAlertModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzBadgeModule,
    NzDropDownModule,
    NzModalModule,
    NzSpinModule,
    NzRadioModule,
    NzIconModule,
    NzTabsModule,
    NzDividerModule,
    NzTagModule,
    NzCardModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzStatisticModule,
    NzStepsModule,
    NzSelectModule,
    NzUploadModule,
    NzPipesModule,
    NzInputNumberModule,
    NzToolTipModule,
    NzEmptyModule,
    NzFormModule,
    NzSpaceModule,
    NzPopoverModule,
    NzCarouselModule
  ],
  providers: [
    { provide: NZ_DATE_LOCALE, useValue: es }
  ]
})
export class DemoNgZorroAntdModule { }
