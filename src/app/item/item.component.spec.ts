import { TestBed, async } from '@angular/core/testing';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ItemComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to myApp!');
  });
});
