import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Controller, ControllerProvider } from '@sdk-ts/controller';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIndexComponent implements OnInit {

  public controller: Controller;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
  }

  ngOnInit(): void {
    this.controller.withPortalBanner = false;
    this.controller.updateNavigationMenuMode('over');
  }

  ngOnDestroy(): void {
    this.controller.unregisterOnResize(this.onResize);
  }

  private onResize: () => void = () => {
    this.changeDetectorRef.markForCheck();
  }

}
