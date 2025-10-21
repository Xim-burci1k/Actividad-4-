import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Bootstrap JS bundle (toggler, collapse, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
