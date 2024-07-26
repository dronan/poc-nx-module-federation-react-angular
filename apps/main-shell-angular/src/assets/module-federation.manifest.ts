export interface Remote {
  name: string;
  url: string;
  description: string;
}

export const remotes: Remote[] = [
  {
    name: 'angular-shell',
    url: 'http://localhost:4204/remoteEntry.js',
    description: 'angular shell',
  },
  {
    name: 'angular-remote-a',
    url: 'http://localhost:4250/remoteEntry.js',
    description: 'angular a',
  },
  {
    name: 'angular-remote-b',
    url: 'http://localhost:4202/remoteEntry.js',
    description: 'angular b',
  },
  {
    name: 'react-shell',
    url: 'http://localhost:4208/remoteEntry.js',
    description: 'react shell',
  },
  {
    name: 'react-remote-a',
    url: 'http://localhost:4209/remoteEntry.js',
    description: 'react a',
  },
  {
    name: 'react-remote-b',
    url: 'http://localhost:4210/remoteEntry.js',
    description: 'react b',
  },
];

function pathBuilder(remoteUrl: string): string {
  const match = remoteUrl.match(/^(https:\/\/.*?)(\/remoteEntry\.js)$/);

  if (match) {
    return match[1];
  } else {
    return remoteUrl;
  }
}
export function retrieveEntryUrl(remoteName: string): string {
  const remote = remotes.find((remote) => remote.name === remoteName);
  // Set window remotes paths before loading the remote module, for the remote to access it if needed
  if (remote) {
    // console.log('Writing window path for this remote: ', remote);
    (window as any)[remoteName] = {
      path: pathBuilder(remote.url),
    };
  }
  // console.log('after retrieveEntryUrl with windw: ', window);
  return remote ? remote.url : '';
}
