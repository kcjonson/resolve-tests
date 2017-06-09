# resolve-tests
Tests for how require.resolve works


### Basic demonstration

run `node index.js`

observe that it resolves to `./Button.js`

rename `./Button.js` to `./Button.js.disabled`

run `node index.js`

observe that it resolves to `./Button/index.js`

rename `./Button/index.js` to `./Button/index.js.disabled`

run `node index.js`

observe that it resolves to `./Button/index.web.js`
