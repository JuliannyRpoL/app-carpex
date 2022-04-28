import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonButtonComponent } from './components/atoms/common-button/common-button.component';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';
import { CommonInputComponent } from './components/atoms/common-input/common-input.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NavigationBarComponent } from './components/organisms/navigation-bar/navigation-bar.component';
import { MenuComponent } from './components/organisms/menu/menu.component';
import { AllFilesListComponent } from './components/organisms/all-files-list/all-files-list.component';
import { IconInputComponent } from './components/atoms/icon-input/icon-input.component';
import { ProfileComponent } from './components/molecules/profile/profile.component';
import { AppContentComponent } from './components/templates/app-content/app-content.component';
import { NavItemsComponent } from './components/molecules/nav-items/nav-items.component';
import { FilesGroupComponent } from './components/molecules/files-group/files-group.component';
import { FileComponent } from './components/atoms/file/file.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppContentComponent,
    CommonButtonComponent,
    IconButtonComponent,
    CommonInputComponent,
    LogoComponent,
    NavigationBarComponent,
    MenuComponent,
    AllFilesListComponent,
    IconInputComponent,
    ProfileComponent,
    NavItemsComponent,
    FilesGroupComponent,
    FileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NoopAnimationsModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
