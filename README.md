<p align="center">
  <img src="docs/logo.svg" width="300"><br />
  <a href="https://github.com/pedrohenriquepires/figma-dynamic-template/actions/workflows/build.yml" about="_blank"><img src="https://github.com/pedrohenriquepires/figma-dynamic-template/actions/workflows/build.yml/badge.svg"></a>
</p>

## Development guide

### Pre-requisites

- [Node.js](https://nodejs.org)
- [Figma desktop app](https://figma.com/downloads/)

### Build the plugin

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `dist/` directory containing the JavaScript bundle(s) for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm start
```

### Install the plugin

1. In the Figma desktop app, open a Figma document.
2. Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
3. Select the `manifest.json` file that was generated by the `build` script.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console, search for and run `Open Console` via the Quick Actions search bar.

## See also

Official docs and code samples from Figma:

- [Plugin API docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
