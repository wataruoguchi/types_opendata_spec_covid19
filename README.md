# Type Definitions for opendata_spec_covid19 (Unofficial)

Type definitions for Japanese COVID19 data format.

## How to install

`npm install types_opendata_spec_covid19`

or

`yarn add types_opendata_spec_covid19`

## How to use

```typescript
import { patients } from 'types_opendata_spec_covid19'

const rows: patients[] = [{ ageRange: '30代', ... }]
```

## About the data format

- [新型コロナウイルス感染症対策サイトのためのデータ公開について (総務省)](https://www.soumu.go.jp/main_content/000680542.pdf)
- [新型コロナウイルス感染症対策サイトのためのデータ公開について (政府 CIO ポータル)](https://cio.go.jp/node/2594)
- [新型コロナウイルス感染症対策サイトのためのデータ公開支援 (Code for Japan)](https://www.code4japan.org/activity/stopcovid19)
