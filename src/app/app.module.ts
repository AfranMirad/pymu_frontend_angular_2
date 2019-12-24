import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ImageFilterPipe } from './category/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReferenceComponent } from './reference/reference.component';
import { appRoutes } from '../routes';
import { CategoryComponent } from './category/category.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectGaleryComponent } from './select-galery/select-galery.component';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageFilterPipe,
    CategoryComponent,
    SelectCategoryComponent,
    ReferenceComponent,
    SelectGaleryComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
