# A collection of utility functions mostly regex utitlies collected and tested for use.


Clone , install npm packages then, build and test

```bash
$ git clone https://github.com/bretuobay/regus.git
$ cd  regux       #  change directory
$ npm install    # Installs base packages
$ npm run build
$ npm test
```

After the package's code is ready, just set the proper version and publish!

```bash
$ npm version <major|minor|patch>    # updates package.json and applies tag
$ npm publish                        # lints, builds and publishes
$ git push --follow-tags             # don't forget to push the code and tags!
```

### Watch out!

The `files` property in `package.json` specifies which files/folders will be published to the `npm` registry. As per initial settings, only the `dist`, `lib` and `bin` folders will be published to keep the installed package as clean and small as possible.

## Folder's structure

```
.
├── bin        # ES5 command line scripts
├── cli        # Source command line scripts
├── dist       # ES5 package distribution files
├── lib        # Source package files
└── test       # Tests folder
```
