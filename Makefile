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
	npx jest

test-watch:
	npx jest --watch

test-coverage:
	npm test -- --coverage

lint-json:
	npx eslint --format json __fixtures__/file1.json