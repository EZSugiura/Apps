# プライバシーポリシー / Privacy Policy

**アプリ名 / App Name:** しゃべるアラームスケジューラー  
**パッケージ名 / Package:** com.ezcompany.voicetimetable  
**開発者 / Developer:** EzCompany  
**最終更新 / Last Updated:** 2026-08-08

---

## 日本語

### 1. はじめに

本プライバシーポリシーは、「しゃべるアラームスケジューラー」（以下「本アプリ」）における個人情報の取り扱いについて説明するものです。本アプリをご利用いただく前に、必ずお読みください。

---

### 2. 収集する情報

#### 2-1. 開発者が収集する情報

本アプリで作成したスケジュール・アラーム設定・音声メッセージ・設定データは、すべてお使いの端末内にのみ保存され、外部サーバーへの送信は行いません。

**例外として、アプリ内の「お問い合わせ」フォームをご利用いただいた場合のみ**、以下の情報を開発者が収集します（詳細は2-2）。

#### 2-2. お問い合わせフォームで送信する情報

アプリ内の「お問い合わせ」フォームから送信いただいた場合、以下の情報を Google Firebase（Cloud Firestore）経由で収集します。

| 項目 | 内容 | 入力 |
|---|---|---|
| お名前 | 表示名として使用 | 任意（未入力可） |
| メールアドレス | 返信のご連絡先として使用 | 任意（返信を希望する場合のみ） |
| お問い合わせ本文 | 種別（問い合わせ／不具合報告／要望）とあわせて送信 | 必須 |
| アプリ情報 | アプリ名・パッケージID・アプリバージョン・OS種別・端末の言語設定 | 自動付与（ご入力不要） |

- 収集した情報は**お問い合わせへの対応目的以外には使用しません**。
- 送信先のFirebaseプロジェクトは、開発者（EzCompany）が提供する他アプリのお問い合わせ機能と共通で使用しています。アプリ名・パッケージIDにより、どのアプリからの投稿かを判別しています。
- 送信されたデータは、開発者以外の第三者と共有することはありません。
- アプリからご自身の送信内容を直接閲覧・編集・削除することはできません。削除をご希望の場合は、本ポリシー末尾の連絡先までご連絡ください（詳細は7章）。

#### 2-3. 第三者サービスが収集する情報

本アプリは以下の第三者サービスを利用しており、各サービスが独自にデータを収集する場合があります。

| サービス | 提供元 | 収集される主な情報 | プライバシーポリシー |
|---|---|---|---|
| Google AdMob | Google LLC | 広告識別子（ADID）、デバイス情報、IPアドレス | [Google プライバシーポリシー](https://policies.google.com/privacy) |
| Meta Audience Network | Meta Platforms, Inc. | 広告識別子、デバイス情報（AdMobで広告が取得できない場合のフォールバック広告として使用） | [Meta プライバシーポリシー](https://www.facebook.com/privacy/policy/) |
| Google Play 開発者サービス | Google LLC | アプリクラッシュ情報、デバイス情報 | [Google プライバシーポリシー](https://policies.google.com/privacy) |
| Firebase（Cloud Firestore・Analytics） | Google LLC | お問い合わせ内容（2-2参照）、アプリ利用状況の統計情報 | [Google プライバシーポリシー](https://policies.google.com/privacy) |
| Google Play 課金（定期購読） | Google LLC | 購入・決済情報（開発者は決済情報自体を取得しません。詳細は6章） | [Google プライバシーポリシー](https://policies.google.com/privacy) |
| Open-Meteo（将来実装予定） | Open-Meteo | 天気取得のためのおおよその位置情報（都市名のみ） | [Open-Meteo Privacy](https://open-meteo.com/en/terms) |

---

### 3. 取得する権限とその目的

本アプリが要求するAndroid権限と、その使用目的は以下のとおりです。

| 権限 | 目的 |
|---|---|
| `POST_NOTIFICATIONS` | アラーム発動時の通知表示 |
| `SCHEDULE_EXACT_ALARM` | 設定した時刻ちょうどにアラームを起動するため |
| `FOREGROUND_SERVICE` | アラーム音声読み上げのバックグラウンド動作 |
| `WAKE_LOCK` | アラーム発動時に端末を起動するため |
| `CAMERA` / `FLASHLIGHT` | アラーム発動時のフラッシュライト点灯 |
| `VIBRATE` | 振動通知 |
| `USE_FULL_SCREEN_INTENT` | ロック画面上でのアラーム表示 |
| `INTERNET` / `ACCESS_NETWORK_STATE` | 広告配信・お問い合わせ送信・天気情報取得（将来実装） |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | 節電モード中でもアラームを確実に動作させるため |
| `RECORD_AUDIO` | 録音音声をアラーム音として使用する機能（将来実装） |
| `READ_CALENDAR` | 端末カレンダーの予定を読み上げる機能（将来実装） |
| `com.google.android.gms.permission.AD_ID` | AdMob広告の配信最適化 |

これらの権限は、記載された目的以外には使用しません。

---

### 4. データの保管場所と管理

- アラームスケジュール・メッセージ・設定・広告非表示の購入状態はすべて**端末内のSharedPreferences**に保存されます。
- 録音音声ファイル（将来実装）は**端末内のアプリ専用ストレージ**に保存されます。
- **例外**: お問い合わせフォームで送信した内容（2-2参照）のみ、Google Firebase（Cloud Firestore）のサーバーに保存されます。
- 端末内データについては開発者を含む第三者はアクセスできません。アプリをアンインストールするとすべての端末内データが削除されます（お問い合わせ送信データを除く）。

---

### 5. 広告について

本アプリはGoogle AdMob（および補完的にMeta Audience Network）による広告を表示します。これらのサービスは、よりあなたの興味に合った広告を表示するために、広告識別子（Android Advertising ID）等の情報を利用することがあります。

広告のパーソナライズを無効化したい場合は、端末の設定から「広告のパーソナライズをオプトアウト」してください。

設定画面から「広告を非表示にする」定期購読をご購入いただくと、本アプリ内の広告表示自体が停止します（詳細は6章）。

---

### 6. 定期購読（広告非表示）について

本アプリは、広告を非表示にする定期購読（サブスクリプション）を提供しています。

- 決済処理はすべて**Google Play の課金システム**が行い、開発者はクレジットカード番号等の決済情報を一切取得・保存しません。開発者が受け取るのは「購入が有効かどうか」の情報のみです。
- 購読は**自動更新**されます。更新の停止・解約は、端末のGoogle Playストアアプリ内「お支払いと定期購入」からいつでも行えます。
- 価格・請求周期はご購入前にGoogle Playの購入画面に表示されます。
- 返金については、[Google Playの返金ポリシー](https://support.google.com/googleplay/answer/2479637)に従います。

---

### 7. データの削除について

- 端末内に保存されるデータ（アラーム設定・購入状態等）は、アプリをアンインストールすることでいつでも削除できます。
- **お問い合わせフォームで送信した内容**（お名前・メールアドレス・本文）は、アプリから直接削除することはできません。削除をご希望の場合は、本ポリシー末尾（11章）の連絡先まで、送信時のおおよその日時・内容の概要を添えてご連絡ください。確認のうえ、対応いたします。

---

### 8. 子どものプライバシー

本アプリは13歳未満の子どもを対象としていません。13歳未満のお子様のデータを意図的に収集することはありません。保護者の方が13歳未満のお子様が本アプリを使用していることに気づいた場合は、下記の連絡先までご連絡ください。

---

### 9. セキュリティ

端末内に保存されるデータは端末外に持ち出されませんが、端末のセキュリティ設定（画面ロック等）を適切に管理されることをお勧めします。お問い合わせフォームの送信内容は、通信経路上で暗号化（TLS）された状態でFirebaseへ送信されます。

---

### 10. 本ポリシーの変更

本プライバシーポリシーは予告なく変更される場合があります。変更後のポリシーはこのページに掲載された時点で効力を生じます。定期的にご確認いただくことをお勧めします。

---

### 11. お問い合わせ

プライバシーに関するご質問・ご要望（データ削除依頼を含む）は以下にご連絡ください。

**メール:** ez_games@ymail.ne.jp

---

---

## English

### 1. Introduction

This Privacy Policy describes how "Shaberu Alarm Scheduler" (hereinafter "the App") handles user information. Please read this policy carefully before using the App.

---

### 2. Information We Collect

#### 2-1. Information Collected by the Developer

All schedule data, alarm settings, voice messages, and configuration data created within the App are stored exclusively on your device and are not transmitted to external servers.

**The only exception is the in-app "Contact Us" form.** If you choose to use it, the information described in 2-2 is collected.

#### 2-2. Information Sent via the Contact Form

If you submit the in-app "Contact Us" form, the following information is collected via Google Firebase (Cloud Firestore):

| Field | Purpose | Input |
|---|---|---|
| Name | Used as a display name | Optional |
| Email address | Used to reply to you | Optional (only if you want a reply) |
| Message | Submitted along with a category (inquiry / bug report / feature request) | Required |
| App info | App name, package ID, app version, platform, device locale | Attached automatically |

- Collected data is used **solely to respond to your inquiry** and for no other purpose.
- The destination Firebase project is shared with the contact-form feature of other apps published by the developer (EzCompany). The app name and package ID are used to identify which app a submission came from.
- Submitted data is not shared with any third party other than the developer.
- You cannot view, edit, or delete your own submission from within the App. To request deletion, please contact us using the address at the end of this policy (see Section 7).

#### 2-3. Information Collected by Third-Party Services

The App uses the following third-party services, which may collect data independently:

| Service | Provider | Information Collected | Privacy Policy |
|---|---|---|---|
| Google AdMob | Google LLC | Advertising ID, device info, IP address | [Google Privacy Policy](https://policies.google.com/privacy) |
| Meta Audience Network | Meta Platforms, Inc. | Advertising ID, device info (used as a fallback ad when AdMob has no fill) | [Meta Privacy Policy](https://www.facebook.com/privacy/policy/) |
| Google Play Services | Google LLC | Crash reports, device information | [Google Privacy Policy](https://policies.google.com/privacy) |
| Firebase (Cloud Firestore / Analytics) | Google LLC | Contact form submissions (see 2-2), app usage statistics | [Google Privacy Policy](https://policies.google.com/privacy) |
| Google Play Billing (subscription) | Google LLC | Purchase and payment information (the developer never receives payment details themselves; see Section 6) | [Google Privacy Policy](https://policies.google.com/privacy) |
| Open-Meteo (planned) | Open-Meteo | Approximate location (city name only) for weather | [Open-Meteo Terms](https://open-meteo.com/en/terms) |

---

### 3. App Permissions

| Permission | Purpose |
|---|---|
| `POST_NOTIFICATIONS` | Display alarm notifications |
| `SCHEDULE_EXACT_ALARM` | Fire alarms at the exact scheduled time |
| `FOREGROUND_SERVICE` | Run text-to-speech in the background |
| `WAKE_LOCK` | Wake the device when an alarm triggers |
| `CAMERA` / `FLASHLIGHT` | Flash the camera light on alarm |
| `VIBRATE` | Vibration alerts |
| `USE_FULL_SCREEN_INTENT` | Show alarms on the lock screen |
| `INTERNET` / `ACCESS_NETWORK_STATE` | Ad delivery, sending contact-form submissions, and weather data (planned) |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Ensure reliable alarm delivery in power-saving mode |
| `RECORD_AUDIO` | Use recorded voice as alarm audio (planned feature) |
| `READ_CALENDAR` | Read device calendar events for voice announcements (planned) |
| `com.google.android.gms.permission.AD_ID` | AdMob advertising optimization |

These permissions are used solely for the purposes stated above.

---

### 4. Data Storage

- Alarm schedules, messages, settings, and your ad-removal purchase status are stored in **local device SharedPreferences**.
- Recorded audio files (planned feature) are stored in the **app's private device storage**.
- **Exception**: Contact form submissions (see 2-2) are stored on Google Firebase (Cloud Firestore) servers.
- No third party, including the developer, can access on-device data. Uninstalling the App removes all on-device data (contact form submissions are not affected, since they are not stored on the device).

---

### 5. Advertising

The App displays ads via Google AdMob (with Meta Audience Network as a fallback). These services may use your Android Advertising ID to serve personalized ads. To opt out of personalized advertising, visit your device's ad settings.

Purchasing the "Remove ads" subscription from the settings screen stops all in-app ad display (see Section 6).

---

### 6. Subscription (Remove Ads)

The App offers an optional subscription that removes ads.

- All payment processing is handled by **Google Play's billing system**. The developer never collects or stores your credit card or other payment details — only whether your purchase is currently active.
- The subscription **renews automatically**. You can stop auto-renewal or cancel at any time from "Payments & subscriptions" in the Google Play Store app on your device.
- Price and billing period are shown on the Google Play purchase screen before you buy.
- Refunds are handled according to [Google Play's refund policy](https://support.google.com/googleplay/answer/2479637).

---

### 7. Data Deletion

- On-device data (alarm settings, purchase status, etc.) can be deleted at any time by uninstalling the App.
- **Contact form submissions** (name, email, message) cannot be deleted from within the App. To request deletion, please contact us at the address in Section 11 with the approximate date and a brief description of your submission. We will verify and act on your request.

---

### 8. Children's Privacy

The App is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child under 13 has used the App, please contact us at the address below.

---

### 9. Security

On-device data never leaves your device, but we recommend keeping your device's security settings (screen lock, etc.) properly configured. Contact form submissions are sent to Firebase over an encrypted (TLS) connection.

---

### 10. Changes to This Policy

This Privacy Policy may be updated without prior notice. Changes take effect upon posting to this page. We recommend checking this page periodically.

---

### 11. Contact

For any privacy-related questions or requests, including data deletion requests, please contact:

**Email:** ez_games@ymail.ne.jp

---

*© 2026 EzCompany. All rights reserved.*
