# openapi-sample
OpenAPIによるAPI定義をすると、TypeScriptのコードが自動生成され、npmパッケージとして使えるようになるサンプル

# 使い方
### API定義側
index.ymlを変更するPRを作成すると、github-actionが発火して、output/typescript以下にTypeScriptコードが自動生成される。

### パッケージ利用者側
- パッケージのインストール
```bash
npm install yuki9541134/openapi-sample
```

- APIの呼び出し
```js
import { DefaultApi } from 'sample-api-client'


function useApi() {
  const sampleApi = new DefaultApi();
  sampleApi.registerMember();
}

```
