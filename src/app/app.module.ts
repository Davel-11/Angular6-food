import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

//material
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './aside/test/test.component';
import { TestChildComponent } from './aside/test/test-child/test-child.component';

//routing
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './aside/user/user.component';
import { BranchComponent } from './aside/branch/branch.component';
import {MatButtonModule} from '@angular/material';
import { TestChild2Component } from './aside/test/test-child2/test-child2.component';
import {MatIconModule} from '@angular/material/icon';
import { ContactComponent } from './inside-content/contact/contact.component';
import { InfoComponent } from './inside-content/info/info.component';
import { LocationComponent } from './inside-content/location/location.component';
import { MaterialComponent } from './inside-content/material/material.component';
import { FooterComponent } from './footer/footer.component';
import { UpsBuildingComponent } from './ups-building/ups-building.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,  ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    BranchComponent,
    HomeComponent,
    UserComponent,
    TestComponent,
    TestChildComponent,
    TestChild2Component,
    ContactComponent,
    InfoComponent,
    LocationComponent,
    MaterialComponent,
    FooterComponent,
    UpsBuildingComponent,

  ],
  imports: [
    MatFormFieldModule,
    FormsModule,
    
    ReactiveFormsModule,
    MatSelectModule,


    BrowserModule,
    MatDialogModule,

    //material
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,

    //routing
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'branch', component: BranchComponent },
      {path: 'user', component: UserComponent },
      {path: 'test', component: TestComponent },
      {path: 'contact', component: ContactComponent },
      {path: 'info', component: InfoComponent },
      {path: 'location', component: LocationComponent },
      {path: 'material', component: MaterialComponent  },
      {path: 'ups-building', component: UpsBuildingComponent  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
