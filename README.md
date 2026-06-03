# capacitor-portals-ecommerce

Federated Capacitor e-commerce sample using Nx + pnpm workspace.

## Requirements

- Node.js 20+
- pnpm 7+
- Xcode/CocoaPods (iOS sync/build)
- Android Studio/SDK (Android sync/build)
- Access to Ionic Enterprise registry for `@ionic-enterprise/federated-capacitor`

## Install

```sh
pnpm install
```

If needed, authenticate to the Ionic Enterprise registry before install.

## Development

Run all apps in dev mode:

```sh
pnpm start
```

Build all apps:

```sh
pnpm build
```

Serve all built apps:

```sh
pnpm serve
```

Shell app default URL:

- http://localhost:3001/

## Lint

Run lint across all workspace packages:

```sh
pnpm lint
```

## Native Sync (Shell)

Capacitor native project lives in `packages/shell`.

Sync iOS:

```sh
pnpm --filter shell exec cap sync ios
```

Sync Android:

```sh
pnpm --filter shell exec cap sync android
```

Sync both:

```sh
pnpm --filter shell exec cap sync
```
