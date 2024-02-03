import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';

describe('AppComponent', () => {
  let headerComponent: HeaderComponent;

  beforeEach(
    async () =>
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule, SharedModule],
        declarations: [AppComponent],
      }).compileComponents(),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crypto'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('crypto');
  });

  it('should render a Header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();

    expect(headerComponent).toBeTruthy();
  });
});
