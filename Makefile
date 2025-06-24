install:
	npm ci

run:
	node bin/gendiff.js

help:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

test:
	npx --experimental-vm-modules jest

test-watch:
	npx jest --watch

test-coverage:
	npm test -- --coverage

link:
	npm link