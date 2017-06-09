# resolve-tests
Tests for how require.resolve works


### Basic demonstration

1) run `node index.js`
1) observe that it resolves to `./Button.js`
1) rename `./Button.js` to `./Button.js.disabled`
1) run `node index.js`
1) observe that it resolves to `./Button/index.js`
1) rename `./Button/index.js` to `./Button/index.js.disabled`
1) run `node index.js`
1) observe that it resolves to `./Button/index.web.js`

### Lessons Learned
* Node resolves by _basename_ first, then checks the extension
