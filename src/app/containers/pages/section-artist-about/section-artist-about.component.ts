import {Component, Input, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TranslateService} from '@ngx-translate/core';
import {ModalEditProfileComponent} from '../../ui/modals/modal-edit-profile/modal-edit-profile.component';
import {FirebaseService} from "../../../firebase.service";

@Component({
  selector: 'app-section-artist-about',
  templateUrl: './section-artist-about.component.html',
  styleUrls: ['./section-artist-about.component.scss']
})
export class SectionArtistAboutComponent implements OnInit {

  @Input() editMode = false;
  @Input() user;
  bsModalRef: BsModalRef;

  constructor(private lightbox: Lightbox, private modalService: BsModalService, private translateService: TranslateService,
              private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

  openModalWithComponent(): void {
    const initialState = {
      title: this.translateService.instant('modal.edit-profile'),
    };
    this.bsModalRef = this.modalService.show(ModalEditProfileComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
}
