# Вычислитель отличий

## Hexlet tests and linter status:
[![Actions Status](https://github.com/obsidinan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/obsidinan/frontend-project-46/actions)  [![Maintainability](https://api.codeclimate.com/v1/badges/4fa2f8e8d006662477ba/maintainability)](https://codeclimate.com/github/obsidinan/frontend-project-46/maintainability)  [![Linter](https://github.com/obsidinan/frontend-project-46/actions/workflows/linter.yml/badge.svg?branch=main&event=push)](https://github.com/obsidinan/frontend-project-46/actions/workflows/linter.yml)  [![CI](https://github.com/obsidinan/frontend-project-46/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/obsidinan/frontend-project-46/actions/workflows/main.yml)  [![Test Coverage](https://api.codeclimate.com/v1/badges/4fa2f8e8d006662477ba/test_coverage)](https://codeclimate.com/github/obsidinan/frontend-project-46/test_coverage)

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

### Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Установка

1. Для установки понадобятся программы [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en) и [Npm](https://www.npmjs.com/)
2. При наличии данных программ создайте папку в удобном для Вас месте откройте ее с помощью терминала. 
   Как открыть терминал:

   Windows:
      - нажмите сочетание клавиш Windows+X;
      - выберите Windows PowerShell (или "Командная строка")

   MacOS:
      - нажмите сочетание клавиш Command+Space
      - введите в поиске "Терминал"

   Linux:
      - нажмите сочетание клавиш Ctrl + Alt + T

3. Находясь в созданной папке, выполните команды:

```bash
git clone git@github.com:bmwmtv/frontend-project-46.git
cd frontend-project-46
make install
sudo npm link
```

## Запуск

```bash
gendiff <file1> <file2> --format <format>
```

## Примеры работы

### Help - вывод справки
[![asciicast](https://asciinema.org/a/629344.svg)](https://asciinema.org/a/629344)

### JSON files (Stylish) - сравнение файлов JSON. Вывод в формате Stylish
[![asciicast](https://asciinema.org/a/629345.svg)](https://asciinema.org/a/629345)

### YAML files (Stylish) - сравнение файлов YAML. Вывод в формате Stylish
[![asciicast](https://asciinema.org/a/629346.svg)](https://asciinema.org/a/629346)

### Plain format - вывод в формате Plain
[![asciicast](https://asciinema.org/a/629347.svg)](https://asciinema.org/a/629347)

### JSON format - вывод в формате JSON
[![asciicast](https://asciinema.org/a/629348.svg)](https://asciinema.org/a/629348)
