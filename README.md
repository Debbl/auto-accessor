# Auth Accessor

```yml
name: Accessor

on:
  workflow_dispatch:

jobs:
  accessor-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: test
        uses: ./
        with:
          url: "https://bili-track.vercel.app/api/get-data"
```
