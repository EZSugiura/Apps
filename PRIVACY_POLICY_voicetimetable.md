# プライバシーポリシー / Privacy Policy

**アプリ名 / App Name:** しゃべるアラームスケジューラー  
**パッケージ名 / Package:** com.ezcompany.voicetimetable  
**開発者 / Developer:** EzCompany  
**最終更新 / Last Updated:** 2026-06-21

---

## 日本語

### 1. はじめに

本プライバシーポリシーは、「しゃべるアラームスケジューラー」（以下「本アプリ」）における個人情報の取り扱いについて説明するものです。本アプリをご利用いただく前に、必ずお読みください。

---

### 2. 収集する情報

#### 2-1. 開発者が収集する情報

**本アプリの開発者は、ユーザーの個人情報を一切収集・取得・保存しません。**

本アプリで作成したスケジュール・アラーム設定・音声メッセージ・設定データは、すべてお使いの端末内にのみ保存されます。外部サーバーへの送信は行いません。

#### 2-2. 第三者サービスが収集する情報

本アプリは以下の第三者サービスを利用しており、各サービスが独自にデータを収集する場合があります。

| サービス | 提供元 | 収集される主な情報 | プライバシーポリシー |
|---|---|---|---|
| Google AdMob | Google LLC | 広告識別子（ADID）、デバイス情報、IPアドレス | [Google プライバシーポリシー](https://policies.google.com/privacy) |
| Google Play 開発者サービス | Google LLC | アプリクラッシュ情報、デバイス情報 | [Google プライバシーポリシー](https://policies.google.com/privacy) |
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
| `INTERNET` / `ACCESS_NETWORK_STATE` | 広告配信・天気情報取得（将来実装） |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | 節電モード中でもアラームを確実に動作させるため |
| `RECORD_AUDIO` | 録音音声をアラーム音として使用する機能（将来実装） |
| `READ_CALENDAR` | 端末カレンダーの予定を読み上げる機能（将来実装） |
| `com.google.android.gms.permission.AD_ID` | AdMob広告の配信最適化 |

これらの権限は、記載された目的以外には使用しません。

---

### 4. データの保管場所と管理

- アラームスケジュール・メッセージ・設定はすべて**端末内のSharedPreferences**に保存されます。
- 録音音声ファイル（将来実装）は**端末内のアプリ専用ストレージ**に保存されます。
- これらのデータは開発者を含む第三者はアクセスできません。
- アプリをアンインストールするとすべてのデータが削除されます。

---

### 5. 広告について

本アプリはGoogle AdMobによる広告を表示します。AdMobは、よりあなたの興味に合った広告を表示するために、広告識別子（Android Advertising ID）等の情報を利用することがあります。

広告のパーソナライズを無効化したい場合は、端末の設定から「広告のパーソナライズをオプトアウト」してください。

---

### 6. 子どものプライバシー

本アプリは13歳未満の子どもを対象としていません。13歳未満のお子様のデータを意図的に収集することはありません。保護者の方が13歳未満のお子様が本アプリを使用していることに気づいた場合は、下記の連絡先までご連絡ください。

---

### 7. セキュリティ

本アプリに保存されるデータはすべて端末内に留まりますが、端末のセキュリティ設定（画面ロック等）を適切に管理されることをお勧めします。

---

### 8. 本ポリシーの変更

本プライバシーポリシーは予告なく変更される場合があります。変更後のポリシーはこのページに掲載された時点で効力を生じます。定期的にご確認いただくことをお勧めします。

---

### 9. お問い合わせ

プライバシーに関するご質問・ご要望は以下にご連絡ください。

**メール:** ez_games@ymail.ne.jp

---

---

## English

### 1. Introduction

This Privacy Policy describes how "Shaberu Alarm Scheduler" (hereinafter "the App") handles user information. Please read this policy carefully before using the App.

---

### 2. Information We Collect

#### 2-1. Information Collected by the Developer

**The developer does NOT collect, obtain, or store any personal information from users.**

All schedule data, alarm settings, voice messages, and configuration data created within the App are stored exclusively on your device. No data is transmitted to external servers.

#### 2-2. Information Collected by Third-Party Services

The App uses the following third-party services, which may collect data independently:

| Service | Provider | Information Collected | Privacy Policy |
|---|---|---|---|
| Google AdMob | Google LLC | Advertising ID, device info, IP address | [Google Privacy Policy](https://policies.google.com/privacy) |
| Google Play Services | Google LLC | Crash reports, device information | [Google Privacy Policy](https://policies.google.com/privacy) |
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
| `INTERNET` / `ACCESS_NETWORK_STATE` | Ad delivery and weather data (planned) |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Ensure reliable alarm delivery in power-saving mode |
| `RECORD_AUDIO` | Use recorded voice as alarm audio (planned feature) |
| `READ_CALENDAR` | Read device calendar events for voice announcements (planned) |
| `com.google.android.gms.permission.AD_ID` | AdMob advertising optimization |

These permissions are used solely for the purposes stated above.

---

### 4. Data Storage

- All alarm schedules, messages, and settings are stored in **local device SharedPreferences**.
- Recorded audio files (planned feature) are stored in the **app's private device storage**.
- Neither the developer nor any third party can access this data.
- Uninstalling the App removes all data permanently.

---

### 5. Advertising

The App displays ads via Google AdMob. AdMob may use your Android Advertising ID to serve personalized ads. To opt out of personalized advertising, visit your device's ad settings.

---

### 6. Children's Privacy

The App is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child under 13 has used the App, please contact us at the address below.

---

### 7. Changes to This Policy

This Privacy Policy may be updated without prior notice. Changes take effect upon posting to this page. We recommend checking this page periodically.

---

### 8. Contact

For any privacy-related questions or requests, please contact:

**Email:** ez_games@ymail.ne.jp

---

*© 2026 EzCompany. All rights reserved.*
