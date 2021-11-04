# tsconfig-base

A configuration base for Meza's typescript projects.
Use it if you like strict conventions.

`yarn add -D @meza/tsconfig-base`

Add the following to your local tsconfig.json:
```json
{
  "extends": "@meza/tsconfig-base",
  "rootDir": "./src",
  "outDir": "./dist",
  "tsBuildInfoFile": "./cache/tsbuildinfo",
  "jsx": "react" //if you're using react
}
```

# Development

- run `eslint`
- run `yarn release` to publish
- use [Conventional Commits](https://www.conventionalcommits.org/)
