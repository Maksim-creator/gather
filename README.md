# **Winners BP**

> **This is a repo for the project `Winners BP` based on `Expo`.**

---

## REQUIREMENTS

- [`Node.js`](https://nodejs.org/en/)
- [`EAS CLI`](https://github.com/expo/eas-cli/)
- [`Expo CLI`](https://docs.expo.dev/workflow/expo-cli/)
- [`Expo Go`](https://expo.dev/client)
- [`Expo Orbit`](https://expo.dev/orbit) (Optional)
- [`OpenAPI TypeScript`](https://openapi-ts.pages.dev/)

## START

### 0. First of all, let's install the [**`Expo CLI`**](https://docs.expo.dev/workflow/expo-cli/) globally.

```sh
npm install expo-cli --location=global
```

### 1. Clone the project from [`BitBucket`](https://bitbucket.org/dashboard/repositories)

```sh
$ git clone git@bitbucket.org:TRIAD-Advertising/winners-bp-app.git
```

### 2. Install dependencies from `package.json`

```sh
$ npm install
```

> To install a new dependency, use the **`npx expo install`** command instead of `npm install`. **Expo** will choose a version that is compatible with the project.

```sh
npx expo install <package-name>
```

> If you're getting npm error _`ERESOLVE could not resolve`_, run above command with the `--force` flag:

```sh
npx expo install <package-name> -- --force
```

> Diagnose issues with the project

```sh
npx expo-doctor@latest
```

### 2. Generate native `ios` and `android` directories

```sh
# The --clean flag will delete any existing native directories before generating
npx expo prebuild --clean
```

### 3. Build your native project

```sh
# The --device flag allows you to pick a device to run the app on
npx expo run:ios --device
npx expo run:android --device
```
