export interface Remote {
  name: string;
  url: string;
  description: string;
}

export const remotes: Remote[] = [
  {
    name: 'angular-remoteA',
    url: 'http://localhost:4210/remoteEntry.js',
    description: '',
  },
  {
    name: 'angular-remoteB',
    url: 'http://localhost:4211/remoteEntry.js',
    description: '',
  },
  {
    name: 'react-remote-a',
    url: 'http://localhost:4203/remoteEntry.js',
    description: '',
  },
  {
    name: 'react-remote-b',
    url: 'http://localhost:4204/remoteEntry.js',
    description: '',
  }
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
  const remote = remotes.find(remote => remote.name === remoteName);
  if (remote) {
    (window as any)[remoteName] = {
      path: pathBuilder(remote.url),
    };
  }
  // console.log('after retrieveEntryUrl with windw: ', window);
  return remote ? remote.url : '';
}
