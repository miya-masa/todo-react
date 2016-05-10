# gulpとes6とreactとFluxでTodoList
## 準備

1. nodeをインストール
2. npm install
3. npm -g gulp
4. npm start
5. localhost:3000 にアクセス。

## ディレクトリ構成と方式

* container => Smart/DumbのSmartの部分。SmartはFluxのActionをコールできる、もしくはViewの状態を変更できるものをSmartと定義。見た目の情報は持たない
* component => Smart/DumbのDumbの部分。propで受け取った値をそのまま利用するのみ。見た目などはDumbで調整する。
* actions => Fluxのアクション定義
* app => アプリケーション固有の部品
* store => Fluxのストア定義

## その他

低レベルなコンポーネントはmaterial-uiを利用する。(dumbの集合)

http://www.material-ui.com/#/
