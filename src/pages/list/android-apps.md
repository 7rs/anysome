[github-badge]: https://img.shields.io/badge/github-black?style=for-the-badge&logo=github
[googleplay-badge]: https://img.shields.io/badge/google%20play-414141?style=for-the-badge&logo=googleplay
[f-droid-badge]: https://img.shields.io/badge/f%E2%80%90droid-1976D2?style=for-the-badge&logo=fdroid
[googledrive-badge]: https://img.shields.io/badge/google%20drive-1976D2?style=for-the-badge&logo=googledrive&logoColor=white
[apkmirror-badge]: https://img.shields.io/badge/apk%20mirror-FF8B14?style=for-the-badge
[xda-badge]: https://img.shields.io/badge/xda-EA7100?style=for-the-badge&logo=xdadevelopers&logoColor=white
[izzy-badge]: https://img.shields.io/badge/izzy%20on%20droid-03a1c4?style=for-the-badge

# Android App  

  ここにはGoogle Playでも配信可能な（もしくは配信済み）Androidアプリを紹介する。
  重視しているのは、支払いに価値があるかどうか、安全性、使い勝手の３つである。

## 各要点について  

### 支払いに価値があるか  

  単純に無料であるかどうかではない。無料であったとしても、
  無料版に広告が付いているようなアプリは完全な無料と見なさない。
  また、支払ったことによる恩恵についても述べる。  

### 安全性  

  安全な動作をするために、適切な手法が取られていて、過去に問題はあったかどうか。
  開発元が突然変わり、異変は発生していないのか。またその新しい開発元は信頼できるのか。
  アプリは第三者の独立した機関によって認証されているかなど。  

### 使い勝手  

  UIは小さすぎず、大きすぎず、ちょうどよいサイズであるか。
  ユーザーを混乱させるようなものはないのか。
  また、個人的な所感を含める。  

[bitwarden]: https://bitwarden.com/

## [Aegis Authenticator](https://getaegis.app/)  

  | Developers | Language | Price | Source Code |
  | :--------- | :------: | :---: | :---------: |
  | [Beem Development](https://github.com/beemdevelopment) | Java | Free | Open |

  [![GitHub][github-badge]](https://github.com/beemdevelopment/aegis)
  [![F-Droid][f-droid-badge]](https://f-droid.org/packages/com.beemdevelopment.aegis)
  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)

  [2要素認証](https://w.wiki/4n3x)を行うアプリ。  

<!--  -->
- **アプリのロック**
- **自動バックアップ**
- **覗き見防止の黒塗り**、
- **アイコンの設定**
<!--  -->

  などの多くの機能を持っている。
  **移行も簡単**で、**グループ分け**や、**レイアウトの変更**も出来る。  

  これらは**オフライン上で行われる**ので、どこかの**クラウド上に保存されることはない**。
  さらに、バックアップを安全な場所に保管していれば**ワンタイムパスワードは失われない**。
  [Bitwarden][bitwarden]等の信頼できるサービスにキーをバックアップしておくのも良いだろう。  

  > - [Wikipedia - Comparison of OTP applications](https://w.wiki/9zJj)
  > - [Reddit - What do you think of Aegis?](https://www.reddit.com/r/privacy/comments/1bgmbyx/what_do_you_think_of_aegis/)
  > - [Reddit - Why is no one recommending Aegis 2FA?](https://www.reddit.com/r/privacy/comments/wrel67/why_is_no_one_recommending_aegis_2fa/)
  > - [Bitwarden - セキュリティに関するFAQ](https://bitwarden.com/ja-jp/help/security-faqs/)

[k9mail]: https://k9mail.app/

## [FairEmail](https://email.faircode.eu/)  

  | Developers | Language | Price | Source Code |
  | :--------- | :------: | :---: | :---------: |
  | [Marcel Bokhorst (M66B)](https://github.com/M66B)  | Java, Kotlin, C/C++ | Free / Pro (€7+) | Open |

  [![GitHub][github-badge]](https://github.com/M66B/FairEmail)
  [![F-Droid][f-droid-badge]](https://f-droid.org/en/packages/eu.faircode.email)
  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=eu.faircode.email)

  **プライバシー保護**と**セキュリティ**を重視したメールクライアントアプリ。  
  アカウントの**セットアップも簡単**で、
  Androidのバッググラウンド処理や通知の問題に対して、
  かなり**調子良く動作**し、**バッテリーの消費量も少ない**。
  一度の€7以上の寄付で全ての機能が使えるようになる（そのままでもほとんどの機能は使える）。  

  Proの機能は以下を参照されたい。  

<!--  -->
- [FairEmail - Donate (Google翻訳)](https://email-faircode-eu.translate.goog/donate/?_x_tr_sl=en&_x_tr_tl=ja)
- [FairEmail - Donate](https://email.faircode.eu/donate/)
<!--  -->  

  > - [Reddit - Is FairEmail safe?](https://www.reddit.com/r/privacy/comments/l8kh6g/is_fairemail_safe/)
  > - [Reddit - Is Fairmail safe?](https://www.reddit.com/r/privacy/comments/14podxe/is_fairmail_safe/)

  また、[K-9 Mail][k9mail]をMozillaが買収し、**Thunderbirdとの連携**が予測されるので、
  気にしておくと良いかもしれない。

  > - [Wikipedia - K-9 Mail](https://w.wiki/9zKT)
  > - [GIGAZINE - 「Android版Thunderbird」にリブランド予定のメールアプリ「K-9 Mail」がセキュリティ監査を完了](https://gigazine.net/news/20230721-thunderbird-android-k-9-mail-security-audit/)

## [Muzei](https://muzei.co/)  

  | Developers | Language | Price | Source Code |
  | :--------- | :------: | :---: | :---------: |
  | [Ian Lake](https://github.com/ianhanniballake) | Kotlin, Python, Java | Free | Open |

  [![GitHub][github-badge]](https://github.com/muzei/muzei)
  [![F-Droid][f-droid-badge]](https://f-droid.org/ja/packages/net.nurik.roman.muzei/)
  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=net.nurik.roman.muzei)

  **スライドショー**風に**自動で壁紙を設定**するアプリ。

<!--  -->
- ぼかし
- 明るさ
- 彩度
<!--  -->

  の設定を適用して表示される。
  **更新の間隔**を設定すると、
  ローカル上かUnsplashなどのサービス上から**ランダムに壁紙が変更される**。
  また、**Unsplash以外のソース**が有志によってリリースされている。  

## [MiXplorer](https://mixplorer.com/)  

  | Developers | Language | Price | Source Code |
  | :--------- | :------: | :---: | :---------: |
  | [Hootan Parsa](https://xdaforums.com/m/hootanparsa.4070451/) |  | Free | Closed |

  [![Google Drive][googledrive-badge]](https://drive.google.com/drive/folders/1BfeK39boriHy-9q76eXLLqbCwfV17-Gv)
  [![APKMirror][apkmirror-badge]](https://www.apkmirror.com/apk/hootan-parsa/mixplorer-hootanparsa/)
  [![XDA][xda-badge]](https://xdaforums.com/t/app-2-2-mixplorer-v6-x-released-fully-featured-file-manager.1523691/#post-23109280)

  **大量の機能**を備えたファイルマネージャ。
  いくつかのアドオンがあり、

<!--  -->
- メタタグの編集
- PDFリーダー
- アーカイブファイルの操作
- コーデックの対応 (動画など)
<!--  -->

  等の機能を追加できる。Google DriveやDropbox、個人のファイルサーバ等とも接続できる。  

  Google Playの有料版(Silver)は、**全てのアドオンが追加済み**となっている。
  その他の違いとしては、有料版の方が少し**更新が遅い**。  

  > - [駅前散策ブログ＠かわさき　HOT - Mixplorer 日本語化 等々、Androidファイラー「Mixplorer」について書いてみます。](https://blog.goo.ne.jp/oprsfr3saku/e/4cfb89c2c62b59e4ee18e15c5d437ae6)
  > - [駅前散策ブログ＠かわさき　HOT - 【Mixplorer】Silver版、揉めてない？って話。](https://blog.goo.ne.jp/oprsfr3saku/e/07a20c54a5b4a4377ede227847f7d85a)

## [Fossify Gallery](https://github.com/FossifyOrg/Gallery)  

  | Developers | Language | Price | Source Code |
  | :--------- | :------: | :---: | :---------: |
  | [Fossify](https://github.com/FossifyOrg) | Kotlin | Free | Open |

  [![GitHub][github-badge]](https://github.com/FossifyOrg/Gallery)
  [![F-Droid][f-droid-badge]](https://f-droid.org/en/packages/org.fossify.gallery/)
  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=org.fossify.gallery)
  [![IzzyOnDroid][izzy-badge]](https://apt.izzysoft.de/fdroid/index/apk/org.fossify.gallery)

  使い勝手の良いギャラリーアプリ。  
  ローカルのフォルダ構成を解析するため、ギャラリーのフォルダがアプリに依存しない。  

<!--  -->
- **非表示設定のフォルダの追加**
- **特定のフォルダの除外**
- **フォルダ分けされたレイアウト**と**写真のみのレイアウト**の**切り替え**
- **フォルダにのロック**（ほかのファイルマネージャからは普通に見れる）
<!--  -->

  などの機能を持っている。**軽い画像編集**の機能も備えている。  

### [Simple Gallery Pro](https://simplemobiletools.com/)  

  [![GitHub][github-badge]](https://github.com/SimpleMobileTools/Simple-Gallery)
  [![APKMirror][apkmirror-badge]](https://www.apkmirror.com/apk/simple-mobile-tools/simple-gallery-pro-github-version/)
  [![APKMirror][apkmirror-badge]](https://www.apkmirror.com/apk/simple-mobile-tools/simple-gallery-pro-fdroid-version/)

  Fossify GalleryのFork元、Simple Gallery Proはオープンソースでの開発を停止し、
  無料版に広告が付くようになった。
  開発はクローズドで行われているようだが、過去のバージョンは入手可能。  

## [Read You](https://github.com/Ashinch/ReadYou)  

  | Developers | Language |
  | :--------- | :------- |
  | [Ash (Ashinch)](https://github.com/Ashinch) | Kotlin |

  [![GitHub][github-badge]](https://github.com/Ashinch/ReadYou)
  [![F-Droid][f-droid-badge]](https://f-droid.org/ja/packages/me.ash.reader/)

  Material YouデザインのRSSリーダーアプリ。
  グループ分けやお気に入り機能、未読記事の表示や通知の機能を持つ。
  提供元によるが、記事の内容を取得してアプリ内で読むことも可能。  

## [Invizible](https://invizible.net/en/)  

  | Developers | Language |
  | :--------- | :------- |
  | [Oleksandr Garmatin (Gedsh)](https://github.com/Gedsh) | Java, Kotlin, C |

  [![GitHub][github-badge]](https://github.com/Gedsh/InviZible)
  [![F-Droid][f-droid-badge]](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/)
  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp)

  Tor、DNSCrypt、Purple I2Pの三つをVPNとして併用できるアプリ。
  イメージとしてはOrbotに近い。
  アプリごと、ドメインごとに有効・無効化したり出来る。
  ホワイトリストやブラックリストの機能があり、
  実質的に広告ブロッカーとして使用することも出来る（DNSCryptでAdguardを通しても出来る）。  

## [Musicolet](https://krosbits.in/musicolet/)  

  | Developers | Language |
  | :--------- | :------- |
  | [Krosbits](https://krosbits.in/), [Maulik Raviya](https://krosbits.in/maulik/) | Closed |

  [![Google Play][googleplay-badge]](https://play.google.com/store/apps/details?id=in.krosbits.musicolet)

  大量の機能を備えたローカル依存のミュージックプレイヤー。
  対応しているファイルの種類も多く、検索するフォルダーを細かく設定できる。
  プレイリストはもちろん、複数のキューを保持したうえで、
  キューにプレイリストを追加してシャッフルしたりできる。
  また、再生速度やピッチを変更できるので、即席Nightcoreが作れる。
  イコライザーの設定やレイアウトの設定もでき、
  スマートフォンの壁を打ち破るレベルのミュージックプレイヤーである。  
