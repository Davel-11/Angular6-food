import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

//material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './aside/test/test.component';
import { TestChildComponent } from './aside/test/test-child/test-child.component';

//routing
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './aside/user/user.component';
import { BranchComponent } from './aside/branch/branch.component';
import {MatButtonModule} from '@angular/material/button';
import { TestChild2Component } from './aside/test/test-child2/test-child2.component';
import {MatIconModule} from '@angular/material/icon';


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
    TestChild2Component
  ],
  imports: [
    BrowserModule,

    //material
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,

    //routing
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'branch', component: BranchComponent },
      {path: 'user', component: UserComponent },
      {path: 'test', component: TestComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
