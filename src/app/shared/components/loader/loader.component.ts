import { Component, NgZone, OnDestroy } from '@angular/core';
import { LoaderService } from '@src/app/core/services/loader.service';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnDestroy {
  isLoading = false;

  constructor(private loaderService: LoaderService, private zone: NgZone) {
    this.loaderService.isLoading$
      .pipe(untilComponentDestroyed(this))
      .subscribe(status => this.zone.run(() => (this.isLoading = status)));
  }

  ngOnDestroy() {}
}
