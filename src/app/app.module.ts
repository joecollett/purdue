import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/home/login/login.component';
import { TitleComponent } from './pages/home/title/title.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { HighlightedAlumniComponent } from './pages/home/highlighted-alumni/highlighted-alumni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeaturedComponent } from './pages/home/highlighted-alumni/featured/featured.component';
import { NavItemsComponent } from './shared/navigation/nav-items/nav-items.component';
import { EditComponent } from './pages/edit/edit.component'
import { ApiService } from './service/api.service';
import { MainTextComponent } from './pages/edit/main-text/main-text.component';
import { FormsModule } from '@angular/forms';
import { EditCategoriesComponent } from './pages/edit/edit-categories/edit-categories.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { EditStoriesComponent } from './pages/edit/edit-stories/edit-stories.component';
import { AlwaysAuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AdminComponent },
  { path: 'edit', component: EditComponent, canActivate: [AlwaysAuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    FooterComponent,
    LoginComponent,
    TitleComponent,
    CategoriesComponent,
    HighlightedAlumniComponent,
    FeaturedComponent,
    NavItemsComponent,
    EditComponent,
    MainTextComponent,
    EditCategoriesComponent,
    ConfirmationModalComponent,
    EditStoriesComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [ApiService, AlwaysAuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent]
})
export class AppModule { }
