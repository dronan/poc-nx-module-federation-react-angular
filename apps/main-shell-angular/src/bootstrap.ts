import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { setRemoteDefinitions } from '@nx/angular/mf';
import { remotes } from './assets/module-federation.manifest';

const forceReloadRemoteScript = async (url: string): Promise<void> => {
  try {
    await fetch(url, {
      cache: 'reload',
    });
  } catch (e: any) {
    console.warn(e.message);
  }
  return;
};

const remotesRecordDefs: Record<string, string> = {};
const loadRemotes = remotes.map(async (remote: any) => {
  remotesRecordDefs[remote.name] = remote.url;
  return forceReloadRemoteScript(
    remote.url.indexOf('remoteEntry.js') !== -1
      ? remote.url
      : `${remote.url}/remoteEntry.mjs`,
  );
});

Promise.all(loadRemotes).then(() => {
  console.log(JSON.stringify(remotesRecordDefs));
  setRemoteDefinitions(remotesRecordDefs);
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
