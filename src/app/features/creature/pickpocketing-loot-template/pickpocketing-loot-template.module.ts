import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '@keira-config/toastr.config';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TopBarModule } from '@keira-shared/modules/top-bar/top-bar.module';
import { QueryOutputModule } from '@keira-shared/modules/query-output/query-output.module';
import { PickpocketingLootTemplateComponent } from './pickpocketing-loot-template.component';
import { ItemSelectorModule } from '@keira-shared/modules/selectors/item-selector/item-selector.module';
import { FlagsSelectorModule } from '@keira-shared/modules/selectors/flags-selector/flags-selector.module';
import { PickpocketingLootTemplateService } from './pickpocketing-loot-template.service';
import { IconModule } from '@keira-shared/modules/icon/icon.module';
import { EditorButtonsModule } from '@keira-shared/modules/editor-buttons/editor-buttons.module';

@NgModule({
  declarations: [
    PickpocketingLootTemplateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(toastrConfig),
    NgxDatatableModule,
    ItemSelectorModule,
    FlagsSelectorModule,
    IconModule,
    EditorButtonsModule,
  ],
  exports: [
    PickpocketingLootTemplateComponent,
  ],
  providers: [
    PickpocketingLootTemplateService,
  ],
})
export class PickpocketingLootTemplateModule {}
