import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPreviewComponent } from './quest-preview.component';
import { QuestModule } from '../quest.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestPreviewComponent', () => {
  let component: QuestPreviewComponent;
  let fixture: ComponentFixture<QuestPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestPreviewComponent ],
      imports: [
        RouterTestingModule,
        QuestModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
