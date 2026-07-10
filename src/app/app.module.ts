import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { HybridAppModule, UPGRADE_ROUTES, UpgradeModule } from '@c8y/ngx-components/upgrade';

@NgModule({
  imports: [
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([...UPGRADE_ROUTES]),
    CoreModule.forRoot(),
    NgUpgradeModule,
  ],
  providers: [provideZoneChangeDetection()],
})
export class AppModule extends HybridAppModule {
  constructor(protected override upgrade: NgUpgradeModule) {
    super();
  }
}
