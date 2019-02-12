import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseBlockComponent } from './display/course-block/course-block.component';
import { CourseDescriptionComponent } from './display/course-description/course-description.component';
import { PathLevelComponent } from './display/path-level/path-level.component';
import { PathPageComponent } from './container/path-page/path-page.component';
import { CoursesService } from './courses.service';
import { PathLevelRowComponent } from './display/path-level-row/path-level-row.component';
import { SideBarComponent } from './display/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseBlockComponent,
    CourseDescriptionComponent,
    PathLevelComponent,
    PathPageComponent,
    PathLevelRowComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CoursesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
