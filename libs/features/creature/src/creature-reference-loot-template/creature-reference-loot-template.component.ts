import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreatureLootTemplate } from '@keira/shared/acore-world-model';
import { LootTemplateIdComponent } from '@keira/shared/base-abstract-classes';
import { TopBarComponent } from '@keira/shared/base-editor-components';
import { LootEditorComponent } from '@keira/shared/loot-editor';
import { CreatureHandlerService } from '../creature-handler.service';
import { CreatureReferenceLootTemplateService } from './creature-reference-loot-template.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'keira-creature-loot-template',
  templateUrl: '../../../../shared/base-abstract-classes/src/components/editors/loot-template/loot-template-id.component.html',
  standalone: true,
  imports: [TopBarComponent, LootEditorComponent],
})
export class CreatureReferenceLootTemplateComponent extends LootTemplateIdComponent<CreatureLootTemplate> {
  protected override readonly editorService = inject(CreatureReferenceLootTemplateService);
  readonly handlerService = inject(CreatureHandlerService);
}
