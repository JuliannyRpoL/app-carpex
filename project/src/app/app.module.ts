import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonButtonComponent } from './components/atoms/common-button/common-button.component';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';
import { CommonInputComponent } from './components/atoms/common-input/common-input.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { LogInFormComponent } from './components/molecules/log-in-form/log-in-form.component';
import { NavigationBarComponent } from './components/organisms/navigation-bar/navigation-bar.component';
import { MenuComponent } from './components/organisms/menu/menu.component';
import { AllFilesListComponent } from './components/organisms/all-files-list/all-files-list.component';
import { IconInputComponent } from './components/atoms/icon-input/icon-input.component';
import { SignInButtonComponent } from './components/molecules/sign-in-button/sign-in-button.component';
import { LogInOrganismComponent } from './components/organisms/log-in-org/log-in-org.component';
import { SignInFormComponent } from './components/molecules/sign-in-form/sign-in-form.component';
import { LogInButtonComponent } from './components/molecules/log-in-button/log-in-button.component';
import { SignInOrganismComponent } from './components/organisms/sign-in-org/sign-in-org.component';
import { ProfileComponent } from './components/molecules/profile/profile.component';
import { AppContentComponent } from './components/templates/app-content/app-content.component';
import { NavItemsComponent } from './components/molecules/nav-items/nav-items.component';
import { FilesGroupComponent } from './components/molecules/files-group/files-group.component';
import { FileComponent } from './components/atoms/file/file.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundOrgComponent } from './components/organisms/page-not-found-org/page-not-found-org.component';
import { AuthorizationComponent } from './components/templates/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    HomeComponent,
    AppContentComponent,
    CommonButtonComponent,
    IconButtonComponent,
    CommonInputComponent,
    LogoComponent,
    LogInFormComponent,
    LogInOrganismComponent,
    NavigationBarComponent,
    MenuComponent,
    AllFilesListComponent,
    IconInputComponent,
    SignInButtonComponent,
    SignInFormComponent,
    SignInOrganismComponent,
    LogInButtonComponent,
    ProfileComponent,
    NavItemsComponent,
    FilesGroupComponent,
    FileComponent,
    PageNotFoundComponent,
    PageNotFoundOrgComponent,
    AuthorizationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
