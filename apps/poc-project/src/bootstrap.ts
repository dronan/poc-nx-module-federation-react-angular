import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getPlatform } from '@angular/core';
import { setRemoteDefinitions } from '@nx/angular/mf';
import { remotes } from './assets/module-federation.manifest';
import { AppModule } from './app/app.module';

export async function forceReloadRemoteScript(url: string): Promise<void> {
    try {
      await fetch(url, {
        cache: 'reload',
      });
    } catch (e: any) {
      console.warn(e.message);
    }
    return;
  }

  
const platformCore = getPlatform();

const remotesRecordDefs: Record<string, string> = {};
const loadRemotes = remotes.map(async remote => {
  remotesRecordDefs[remote.name] = remote.url;
  return forceReloadRemoteScript(
    remote.url.indexOf('remoteEntry.js') !== -1 ? remote.url : `${remote.url}/remoteEntry.mjs`,
  );
});

Promise.all(loadRemotes).then(() => {
  setRemoteDefinitions(remotesRecordDefs);
  if (!platformCore) {
    platformBrowserDynamic().bootstrapModule(AppModule).then();
  } else {
    platformCore.bootstrapModule(AppModule).then();
  }
});
