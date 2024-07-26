# PocProject

- NX
- React
- Angular

## Execute

```bash
nx serve --devRemotes=angular-remote-a,angular-remote-b,react-remote-a,react-remote-b,angular-shell,react-shell
```

Will start the shell and the remotes.

## Navigate to:

```bash
http://localhost:4200/
```

And you'll have access to a basic angular front with access to react and angular remotes (I kept the welcome pages).

## Process to create

1. Create a new workspace with the following command, exposing a angular host called main-shell-angular:

```bash
npx create-nx-workspace@latest
```

2. Create a new angular host with the following command:

```bash
nx g @nrwl/angular:app angular-shell
```

3. Create a new react host with the following command:

```bash
nx g @nrwl/react:app react-shell
```

4. Create a new angular remote with the following command:

```bash
nx g @nrwl/angular:app angular-remote-a
```

5. Create a new angular remote with the following command:

```bash
nx g @nrwl/angular:app angular-remote-b
```

6. Create a new react remote with the following command:

```bash
nx g @nrwl/react:app react-remote-a
```

7. Create a new react remote with the following command:

```bash
nx g @nrwl/react:app react-remote-b
```

8. Create a new lib with the following command:

```bash
nx g @nrwl/angular:lib angular-lib
```

9. Create a new lib with the following command:

```bash
nx g @nrwl/react:lib react-lib
```
