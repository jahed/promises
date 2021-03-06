# @jahed/promises

[![npm](https://img.shields.io/npm/v/@jahed/promises.svg)](https://www.npmjs.com/package/@jahed/promises)
[![Patreon](https://img.shields.io/badge/patreon-donate-f96854.svg)](https://www.patreon.com/jahed)
[![Liberapay](https://img.shields.io/badge/liberapay-donate-d9b113.svg)](https://liberapay.com/jahed)
[![PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://paypal.me/jahed/5)

Functions for Promises. Use Promises as control flow and worry less about
what's asynchronous and what isn't.

Changing a component from sync to async should not require a large rewrite. By
using functions, we can abstract those differences out for a more consistent and
flexible approach.

This approach is especially powerful in plain JavaScript where there's no
typechecking to ensure you're handling promises correctly. In statically typed
languages like TypeScript, you may prefer the standard async/await syntax as it's
built into the language and can flag incorrect handling of promises.

### Useful Links

- [Documentation](https://jahed.github.io/promises)

## Installation

```bash
# Yarn
yarn add @jahed/promises

# NPM
npm install @jahed/promises
```

## Usage

See the [documentation](https://jahed.github.io/promises) and
`src/[function].test.js` for usage examples.

Here's a bigger abstract example using multiple functions together.

```js
import {
  compose,
  relay,
  not,
  branch,
  waterfall,
  every,
  doNothing
} from '@jahed/promises'

const setup = waterfall(
  input => getEnvironment(input),
  relay(
    env => clear(env),
    env => make(env)
  )
)

const doSomething = compose(
  relay(
    input => not(alreadyDidIt(input))
  ),
  branch(
    compose(
      waterfall(
        input => every({
          input: input,
          env: setup(input)
        }),
        args => doSomethingBigger(args)
      ),
      branch(
        result => {
          console.log('did something big', { result })
        },
        error => {
          console.error('failed hard.', error)
          process.exit(1)
        }
      )
    ),
    doNothing()
  )
)

doSomething('input')
```

## Contributions

This package is a work-in-progress and will grow as more needs arise.

Is there a function or use-case you have that's not covered by this package?
Submit an issue or pull request with your ideas and let's discuss!

## License

See `LICENSE` file.
