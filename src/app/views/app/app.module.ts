import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {UploadsComponent} from './uploads/uploads.component';
import {PagesContainersModule} from '../../containers/pages/pages.containers.module';
import {ContextMenuModule} from 'ngx-contextmenu';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule as FormsModuleAngular, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductRoutingModule} from './pages/product/product.routing';
import {ComponentsCarouselModule} from '../../components/carousel/components.carousel.module';
import {ComponentsCardsModule} from '../../components/cards/components.cards.module';
import {ComponentsChartModule} from '../../components/charts/components.charts.module';
import {RatingModule} from 'ngx-bootstrap/rating';
import {HotkeyModule} from 'angular2-hotkeys';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {LayoutContainersModule} from '../../containers/layout/layout.containers.module';
import {SharedModule} from '../../shared/shared.module';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {DashboardProfileComponent} from './profile/dashboard-profile.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import {DashboardCollectionsComponent} from './folders/dashboard-collections.component';
import {EditFolderNameModalComponent} from './folders/edit-folder-name-modal/edit-folder-name-modal.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ProfileCollectionsItemsComponent} from './profile/profile-collections-items/profile-collections-items.component';
import {PublicGridComponent} from './public-grid/public-grid.component';


@NgModule({
  declarations: [BlankPageComponent, AppComponent, UploadsComponent, DashboardCollectionsComponent, DashboardProfileComponent, EditFolderNameModalComponent,
    ProfileCollectionsItemsComponent, PublicGridComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    PagesContainersModule,
    FormsModule,
    ProductRoutingModule,
    ComponentsCarouselModule,
    ComponentsCardsModule,
    ComponentsChartModule,
    RatingModule.forRoot(),
    FormsModuleAngular,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    // ComponentsModule,
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    DropzoneModule,
    AlertModule.forRoot(),
    NgSelectModule,
  ]
})
export class AppModule {
}

