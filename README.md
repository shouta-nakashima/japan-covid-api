# covid19-japanの概要
新型コロナウィルスの情報を自分なりに見やすく作成してみました。今回はAPIを使用し全国の情報を表示しています。  
使用したAPIについては[こちら](https://github.com/ryo-ma/covid19-japan-web-api)になります。  
公開したアプリについては[こちら](https://covid19-japan-nakaji.netlify.app/)からご覧になれます。    
機能としては、シンプルに纏めたかったため、シングルページで表示し、ボタンによりコンポーネントを切り替えるようにしました。  
TypeScript、ChartJS、Redux-Toolkitを勉強していたのでアウトプットを兼ねての制作です。
## 使用言語及びライブラリ等
- react: 16.13.1
- typescript: ~3.8.2
- reduxjs/toolkit: 1.2.5
- chart.js: 2.9.3
- react-chartjs-2: 2.9.0
- axios: 0.19.2
- react-countup: 4.3.3
- material-ui/core: 4.11.0
- react-icons: 3.10.0
## 実装内容
- 全国の感染者数などの情報の表示
- 都道府県別の情報の表示
- 年齢別の感染者数の表示
