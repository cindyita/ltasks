import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*recursos*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSplitModule } from 'angular-split';
import { RouterModule, Routes } from '@angular/router';

/*material*/
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';


/*componentes*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { FiltersComponent } from './filters/filters.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { NotesComponent } from './notes/notes.component';
import { ArchivesTaskComponent } from './archives-task/archives-task.component';
import { ChatComponent } from './chat/chat.component';

/*paginas*/
import { HomeComponent } from './home/home.component';
import { ArchivesComponent } from './archives/archives.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { MediaComponent } from './media/media.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'team',component:TeamComponent},
  {path:'media',component:MediaComponent},
  {path:'archives',component:ArchivesComponent},
  {path:'profile',component:ProfileComponent},
  {path:'settings',component:ProfileSettingsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    FiltersComponent,
    SidebarmenuComponent,
    HomeComponent,
    NotesComponent,
    ArchivesComponent,
    ArchivesTaskComponent,
    ChatComponent,
    ProjectsComponent,
    TeamComponent,
    MediaComponent,
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule,
    AngularSplitModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
