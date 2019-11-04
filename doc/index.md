# NodeJs one weekend tutorial

- [Startup environment](startup-environment.md)
- Git and GitHub
- NodeJS
    - First shit
    - Modules and npm
    - Unit Test
    - ECMAScript
    - TypeScript
    - ExpressJS or Sifrr 
- Bootstrap 4

## Modules

- Detailed explanatinon about what modules are in the [documentaion](https://nodejs.org/api/modules.html)
- The NodeJS documentation is a list of built-in modules.

### NPM
Documentation:
- https://docs.npmjs.com/files/package.json
- https://www.sitepoint.com/guide-to-npm-as-a-build-tool/

`npm init` create a defaul NPM descriptor.
It will create a `package.json` that will describe the application, including
a list of dependencies.

#### NPM as dependencies management.
In the `package.json` there is a list of dependencies used to execute the 
application and to use in the development environment. This list of
dependencies are external modules that will be downloaded from a remote
repository ([npmjs.com](https://www.npmjs.com/) by default).

Use `npm install` to add install / download all dependencies into the folder
`node_modules`.

To add a new dependency, depending of the type:
- `npm install <module> --save` will install a dependency used by the project in
  execution time, like `moment` to print dates in pretty format.
- `npm install <module> --save-dev` will install a dependency used only in 
  development time, like `jshint` to install this quality code checker or 
  `mocha` as test framework.
- `npm install <module> --global` to install a library globally in the OS.
  Be careful with this option, because it require root permission and the
  library installed on this way will be not present in the list of the
  project dependencies, so it will be necessary to execute it manually after
  to checkout the project.

#### NPM to run scripts.
In the `scripts` section of `package.json`, it is possible to specify a
dictionary where every key will be mapped to a string that contains a command
to execute.
For example, in the follow `scripts` section there are three script keys:
info, lint, test.
```
"scripts": {
  "info": "echo 'npm as a build tool'",
  "lint": "echo '=> linting' && jshint assets/scripts/*.js",
  "test": "echo '=> testing' && mocha test/",
  "pretest": "npm run lint -s"
}
```
`npm run info` will execute the command `echo 'npm as a build tool'`.

NPM has the concept of pre and post hooks. It will execute:

- Hook `pre<script>` before to execute the `<script>` script.
- Hook `post<script>` after to execute the `<script>` script.

In the previous example, executing `npm run test` will execute:
1. `"echo '=> testing' && mocha test/"`
2. `npm run lint -s`


## Unit Test

- Built-in Assert modules: https://nodejs.org/api/assert.html
- Unit test library: [Mocha](https://github.com/mochajs/mocha)
- Assertion library: [Chai](https://www.chaijs.com/)
