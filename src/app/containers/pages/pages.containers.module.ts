import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LightboxModule} from 'ngx-lightbox';
import {SharedModule} from 'src/app/shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {AddNewProductModalComponent} from './add-new-product-modal/add-new-product-modal.component';
import {ListPageHeaderComponent} from './list-page-header/list-page-header.component';
import {ProfileUserSocialComponent} from './profile-user-social/profile-user-social.component';
import {ProfilePhotosComponent} from './profile-photos/profile-photos.component';
import {ProfileWhoToFollowComponent} from './profile-who-to-follow/profile-who-to-follow.component';
import {ProfileRecentPostsComponent} from './profile-recent-posts/profile-recent-posts.component';
import {ComponentsPagesModule} from '../../components/pages/components.pages.module';
import {ProfilePostsComponent} from './profile-posts/profile-posts.component';
import {ProfileGalleryComponent} from './profile-gallery/profile-gallery.component';
import {ProfileFriendsComponent} from './profile-friends/profile-friends.component';
import {ProfileUserPortfolioComponent} from './profile-user-portfolio/profile-user-portfolio.component';
import {ProfileProcessComponent} from './profile-process/profile-process.component';
import {ComponentsCardsModule} from '../../components/cards/components.cards.module';
import {ProfilePortfolioItemsComponent} from './profile-portfolio-items/profile-portfolio-items.component';
import {BlogSideVideoComponent} from './blog-side-video/blog-side-video.component';
import {BlogCategoriesComponent} from './blog-categories/blog-categories.component';
import {BlogContentComponent} from './blog-content/blog-content.component';
import {FeatureComparisonComponent} from './feature-comparison/feature-comparison.component';
import {ComponentsPlayerModule} from 'src/app/components/player/components.player.module';
import {LayoutContainersModule} from '../layout/layout.containers.module';
import {ProductDetailInfoAltComponent} from './product-detail-info-alt/product-detail-info-alt.component';
import {ProductDetailOrdersComponent} from './product-detail-orders/product-detail-orders.component';
import {ProductDetailCommentsComponent} from './product-detail-comments/product-detail-comments.component';
import {ProductDetailInfoComponent} from './product-detail-info/product-detail-info.component';
import {ProductDetailTabsComponent} from './product-detail-tabs/product-detail-tabs.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {RatingModule} from 'ngx-bootstrap/rating';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {SectionArtistAboutComponent} from './section-artist-about/section-artist-about.component';
import {EditProductNameModalComponent} from './edit-product-name-modal/edit-product-name-modal.component';
import {EditProductDescriptionModalComponent} from './edit-product-description-modal/edit-product-description-modal.component';
import {EditProductCategoriesModalComponent} from './edit-product-categories-modal/edit-product-categories-modal.component';
import {EditProductTagsModalComponent} from './edit-product-tags-modal/edit-product-tags-modal.component';
import { LbFooterComponent } from './lb-footer/lb-footer.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { LbNavComponent } from './lb-nav/lb-nav.component';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import { LbNavMenuComponent } from './lb-nav-menu/lb-nav-menu.component';
import { LbNavSearchComponent } from './lb-nav-search/lb-nav-search.component';
import { LbNavMobileComponent } from './lb-nav-mobile/lb-nav-mobile.component';
import { LbTagsListComponent } from './lb-tags-list/lb-tags-list.component';
import { LbGridComponent } from './lb-grid/lb-grid.component';
import { ProfileInnerComponent } from './profile-inner/profile-inner.component';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';
import { EditPublishSettingModalComponent } from './edit-publish-setting-modal/edit-publish-setting-modal.component';



@NgModule({
  declarations: [
    AddNewProductModalComponent,
    EditProductNameModalComponent,
    EditProductDescriptionModalComponent,
    EditProductCategoriesModalComponent,
    EditProductTagsModalComponent,
    ListPageHeaderComponent,
    ProfileUserSocialComponent,
    ProfilePhotosComponent,
    ProfileWhoToFollowComponent,
    ProfileRecentPostsComponent,
    ProfilePostsComponent,
    ProfileGalleryComponent,
    ProfileFriendsComponent,
    ProfileUserPortfolioComponent,
    ProfileProcessComponent,
    ProfilePortfolioItemsComponent,
    BlogSideVideoComponent,
    BlogCategoriesComponent,
    BlogContentComponent,
    FeatureComparisonComponent,
    ProductDetailInfoAltComponent,
    ProductDetailOrdersComponent,
    ProductDetailCommentsComponent,
    ProductDetailInfoComponent,
    ProductDetailTabsComponent,
    SectionArtistAboutComponent,
    LbFooterComponent,
    LbNavComponent,
    LbNavMenuComponent,
    LbNavSearchComponent,
    LbNavMobileComponent,
    LbTagsListComponent,
    LbGridComponent,
    ProfileInnerComponent,
    ProfileCollectionComponent,
    EditPublishSettingModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    AlertModule,
    HeadroomModule
  ],
    exports: [
        AddNewProductModalComponent,
        EditProductNameModalComponent,
        EditProductDescriptionModalComponent,
        EditProductCategoriesModalComponent,
        EditProductTagsModalComponent,
        ListPageHeaderComponent,
        ProfileUserSocialComponent,
        ProfilePhotosComponent,
        ProfileWhoToFollowComponent,
        ProfileRecentPostsComponent,
        ProfilePostsComponent,
        ProfileGalleryComponent,
        ProfileFriendsComponent,
        ProfileUserPortfolioComponent,
        ProfileProcessComponent,
        ProfilePortfolioItemsComponent,
        BlogSideVideoComponent,
        BlogCategoriesComponent,
        BlogContentComponent,
        FeatureComparisonComponent,
        ProductDetailInfoAltComponent,
        ProductDetailOrdersComponent,
        ProductDetailCommentsComponent,
        ProductDetailInfoComponent,
        ProductDetailTabsComponent,
        SectionArtistAboutComponent,
        LbFooterComponent,
        LbNavComponent,
        LbNavMobileComponent,
        LbTagsListComponent,
        LbGridComponent,
        ProfileInnerComponent,
        EditPublishSettingModalComponent
    ]
})
export class PagesContainersModule {
}
