import { Component, Input, OnInit } from '@angular/core';
import { Certificate } from '../templates';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss']
})
export class CertificateCardComponent implements OnInit {

  @Input() certificate!: Certificate;
  constructor() { }

  ngOnInit(): void {
  }

}
