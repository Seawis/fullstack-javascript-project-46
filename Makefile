install:
	npm ci

run:
	node bin/gendiff.js

help:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage
