## Gendiff (Вычислитель отличий)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Seawis/fullstack-javascript-project-46/actions)

[![mysels-actions](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/mysels-actions.yml/badge.svg)](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/mysels-actions.yml)

[![code-climate](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/code-climate.yml/badge.svg)](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/code-climate.yml) [![Maintainability](https://qlty.sh/badges/f2a185b0-abd7-46d7-8d4f-a1f56ba49083/maintainability.svg)](https://qlty.sh/gh/Seawis/projects/fullstack-javascript-project-46) 

[![Build](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/build.yml/badge.svg)](https://github.com/Seawis/fullstack-javascript-project-46/actions/workflows/build.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Seawis_fullstack-javascript-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Seawis_fullstack-javascript-project-46)

### About:

GenDiff is a program that determines the difference between two data structures. This mechanism is used when generating tests or automatically tracking changes in configuration files.

The utility's features include:

- Support for various input formats, such as yaml and json
- Generation of a report in plain text, stylish, and json formats

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

### Usage:

**gendiff** [*option*] *"filepath1"* *"filepath2"*

Compares two configuration files and shows a difference.

*Arguments:*
- filepath1   -         first file
- filepath2   -         second file

*Options:*
-  -V, --version        (output the version number)
-  -f, --format [type]  (output format, default: "stylish")
-  -h, --help           (display help for command)

### How it works:

[![asciicast](https://asciinema.org/a/720945.svg)](https://asciinema.org/a/720945)

[![asciicast](https://asciinema.org/a/723767.svg)](https://asciinema.org/a/723767)
