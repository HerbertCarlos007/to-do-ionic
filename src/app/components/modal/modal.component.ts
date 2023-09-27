import { Component, Input, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  @Input() isModalOpen!: boolean
  @Input() setCloseModal!: () => void
  
  constructor() { }

  ngOnInit() {}

}
