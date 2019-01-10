import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ArtistComponent } from './Routing/artist/artist.component';
import { ArtistTrackListComponent } from './Routing/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './Routing/artist-album-list/artist-album-list.component';
import { DisplayTrakOrAlbumComponent } from './display-trak-or-album/display-trak-or-album.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuSlidebarComponent } from './menu-slidebar/menu-slidebar.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { TestDataServiceService } from './services/test-data-service.service';
import { subTest } from './modules/test';
import { ConstructorDecoratorComponent } from './constructor-decorator/constructor-decorator.component';
import { OtherService } from './services/OtherService.service';
import { SimpleService } from './services/SimpleService.service';
import { TestNgPluralComponent } from './test-ng-plural/test-ng-plural.component';
import { IdNumberDirective } from './directives/access-element.directive';
import { TestAnythingsComponent } from './test-anythings/test-anythings.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CammelCaseDirective } from './directives/cammel-case.directive';
import { DirectivesImplementerComponent } from './home/directives-implementer/directives-implementer.component';
import { DirectivesImplementerService } from './home/directives-implementer/directives-implementer.service';
import { ObservableComponent } from './observable/observable.component';
import { AngMaterialGridComponent } from './home/ang-material-grid/ang-material-grid.component';

//import { AngularFileUploaderModule } from "angular-file-uploader";
 
const routes: Routes = [
  { path: "lifecycleHooks", component: LifecycleHooksComponent},
  { path: "displayTrackOrAlbum/:thumbnail", component: DisplayTrakOrAlbumComponent },
  {
    //
    // path: "artist/:artistId",
    path: "artist",
    component: ArtistComponent,
    children: [
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent },
     // { path: "**", redirectTo: "tracks" }
    ]
  },
  { path: "constructorDecorator", component: ConstructorDecoratorComponent},
  { path: "testNgPlural", component: TestNgPluralComponent},
  { path: "TestAnythings", component: TestAnythingsComponent},
  { path: "FileUpload", component: FileUploadComponent},
  { path: "CammelCaseDirective", component: DirectivesImplementerComponent},
  { path: "Observable", component: ObservableComponent},
  { path: "Material", component: AngMaterialGridComponent},
  // { path: "**", redirectTo:'artist' }
];

@NgModule({
  declarations: [
    AppComponent, ArtistComponent, ArtistTrackListComponent, ArtistAlbumListComponent,
    DisplayTrakOrAlbumComponent, HeaderComponent, FooterComponent, MenuSlidebarComponent, 
    LifecycleHooksComponent, ConstructorDecoratorComponent, TestNgPluralComponent, 
    IdNumberDirective, TestAnythingsComponent,FileUploadComponent, CammelCaseDirective, 
    DirectivesImplementerComponent, ObservableComponent, AngMaterialGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{ useHash: true }),//, 
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    //MatFormFieldModule
    //AngularFileUploaderModule
  ],
  providers: [TestDataServiceService,subTest,OtherService, SimpleService,DirectivesImplementerService],
  bootstrap: [AppComponent],
  //schemas require when u create custom directives
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
