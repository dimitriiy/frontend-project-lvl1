
install: #Install all packages
	npm ci

brain-games: #Run app
	node bin/brain-games.js

publish: #Publish a package to the registry so that it can be installed by name.
	npm publish --dry-run
