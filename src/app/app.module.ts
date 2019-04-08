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
import { CammelCaseDirective,myHighlight } from './directives/cammel-case.directive';
import { DirectivesImplementerComponent } from './home/directives-implementer/directives-implementer.component';
import { DirectivesImplementerService } from './home/directives-implementer/directives-implementer.service';
import { ObservableComponent } from './observable/observable.component';
import { AngMaterialGridComponent } from './home/ang-material-grid/ang-material-grid.component';
import { NgOnChangeComponent } from './lifecycle-hooks/ng-on-change/ng-on-change.component';
import { ContentProjectionComponent } from './home/content-projection/content-projection.component';
import { ContentProjectionTemplateComponent } from './home/content-projection/content-projection-template/content-projection-template.component';
import { JokeComponentComponent } from './home/content-projection/joke-component/joke-component.component';
import { NgTemplateComponent } from './home/ng-template/ng-template.component';
import { TemplatesComponent } from './home/ng-template/templates/templates.component';
import { HttpModule } from '@angular/http';
import { UnitTestingComponent } from './home/unit-testing/unit-testing.component';
import { DisplayTrackComponent } from './routing/artist-track-list/display-track/display-track.component';
import { DisplayAlbumComponent } from './Routing/artist-album-list/display-album/display-album.component';

//import { AngularFileUploaderModule } from "angular-file-uploader";
 
const routes: Routes = [
  { path: "lifecycleHooks", component: LifecycleHooksComponent},
  { path: "displayTrackOrAlbum/:thumbnail", component: DisplayAlbumComponent },
  {
    //
    // path: "artist/:artistId",
    path: "artist",
    component: ArtistComponent,
    children: [
      { path: "tracks", children:[{ path:"displayTrack/:thumbnail",component:DisplayTrackComponent,pathMatch:'full' }], component: ArtistTrackListComponent },
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
  { path: "ContentProjection", component: ContentProjectionComponent},
  { path: "ngTemplate", component: TemplatesComponent},
  { path: "unitTesting", component: UnitTestingComponent},
  
  { path: "**", redirectTo:'artist' }
];

@NgModule({
  declarations: [
    AppComponent, ArtistComponent, ArtistTrackListComponent, ArtistAlbumListComponent,
    HeaderComponent, FooterComponent, MenuSlidebarComponent, 
    LifecycleHooksComponent, ConstructorDecoratorComponent, TestNgPluralComponent, 
    IdNumberDirective, TestAnythingsComponent,FileUploadComponent, CammelCaseDirective, myHighlight,
    DirectivesImplementerComponent, ObservableComponent, AngMaterialGridComponent, NgOnChangeComponent,
    ContentProjectionComponent,ContentProjectionTemplateComponent,JokeComponentComponent, NgTemplateComponent, TemplatesComponent, UnitTestingComponent, DisplayTrackComponent, DisplayAlbumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{ useHash: true }),//, ,enableTracing:true
    HttpClientModule,
    HttpModule,
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
