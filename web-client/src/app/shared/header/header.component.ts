import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerClass: string;
  isOpenOffCanvas = false;

  ngAfterViewInit(): void {
  }
}
