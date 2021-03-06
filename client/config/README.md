client/config
=============

The `index.js` file is generated on startup by `regenerate.js`. Based on the environment, data is read from the appropriate .json file in the root config directory, for example, `/config/development.json`. The data is then compared against a whitelist in `/config/client.json`, and whitelisted items are added to the data object in `/client/config/index.js`. You can read more about how to use `config` in the [main documentation](https://github.com/Automattic/wp-calypso#config).

Feature Flags API
-----------------

The config files contain a features object that can be used to determine whether to enable a feature for certain environments. This allows us to merge in-progress features without launching them to production.

### config.isEnabled( key )
Is a feature enabled?

``` js
var config = require( 'config' );

if ( config.isEnabled( 'myFeature') ) {
	// do something only when myFeature is enabled
}
```

### config.anyEnabled( key, [...key] )
Is one or more features enabled?

```js
// Returns true if any passed feature is enabled
if ( config.anyEnabled( 'myFeature1', 'myFeature2', 'myFeature3' ) ) {
	// do something when any of the three features are enabled
}
```

The key should always be a literal string not a variable so that down the road we can process the compiled scripts and remove code for disabled features in production.
