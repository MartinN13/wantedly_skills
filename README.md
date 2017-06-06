# README

これはウォンテッドリーのWeb課題アプリです。
Herokuのproduction serverもあります：
https://protected-tundra-20808.herokuapp.com

ユーザのメールの形は全部user@example.com、そして全員のユーザーのパスワードは0000です。
スキルは/addskillsのrouteから追加できます。

RailsとReactで作りました。
RailsとReactを一緒に使うが初めてですから、作業時間はー週間くらいになりました。

Railsはjson apiとして使ってますからReactのデータは全部ajaxで撮ります。React componentsのroutingはSitesControllerでしますが、他のcontrollersは全部jsonだけをレスポンスします。

このアプリに自分のtoken authenticationを作って見ました。アプリにユーザーのログインとauthenticationが実現していますが、registrationを作る時間がなかったです（ー週間で作ろうとしました）。Token authenticationが思ったより難しかったから今度はRails 5のtoken authenticationやDeviseを試したいと思います。

アプリの実現してる機能は：

* スキルは、自分に追加することができる。

* 他のユーザのプロフィールページで、その人にスキルを新しく追加することができる。また、既に追加されているスキルに+1することができる。

* プロフィールでは+1された回数が表示されていて、+1が多い順に表示されている。

* N+1問題が発生しないようにする。
UserControllerでUser.includes(:skills, :user_skills, :endorsements)を使いましたからN+1問題が発生しないと思います。

* 動作確認のため、Herokuなどを利用し、パブリックな環境にdeployしてください。

このオプショナル機能も実現しました：

* JavaScriptで、スキルの追加時などにページ全体の再読み込みが発生しないUIをつくる。
Reactを使ってますから全体の再読み込みが発生しませんが、ログインの時と/users, /skills, /addskillのrouteは再読み込みをします。

* 他の人につけた+1をキャンセルすることができる。

* 他の人が自分につけたスキルを隠す/消すことができる。

まだ改善したい所があります。特にcontrollerからのerror messagesをもっと綺麗に見せたいです。テストもまだ書いてません。
あと時間あれば残ってるオプショナル機能も実現したいです：

* +1の回数が多い上位6件は、それぞれ最大10人まで+1した人が表示されている。

* 同じスキルが付いている人の一覧を見ることができる。

* スキルの追加時にautocompleteでスキル名が補完されるUI。

特にautocompleteのUIが必要だと思います。

この課題は思ったより時間かかりましたが、ウォンテッドリーにある機能を自分で作るがとても面白かったで、RailsとReactを一緒に使うはいい経験になりました。
