import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// The Angular SSR engine will call this default-exported function and pass a BootstrapContext
// When using `bootstrapApplication` on the server, forward that context as the third argument.
const bootstrap = (context?: unknown) => bootstrapApplication(AppComponent, config, context as any);

export default bootstrap;
