# Android Release Signing

Keep the Play upload key outside the repository and back it up securely. Never
commit the key or its passwords.

## One-time key creation

Run `keytool` from JDK 21 and choose strong, unique passwords:

```powershell
keytool -genkeypair -v -keystore C:\secure\suri-upload.jks -alias suri-upload -keyalg RSA -keysize 2048 -validity 10000
```

## Build a signed App Bundle

Set the four variables only in the current terminal, then build:

```powershell
$env:SURI_RELEASE_STORE_FILE='C:\secure\suri-upload.jks'
$env:SURI_RELEASE_STORE_PASSWORD='<store password>'
$env:SURI_RELEASE_KEY_ALIAS='suri-upload'
$env:SURI_RELEASE_KEY_PASSWORD='<key password>'
Set-Location android
.\gradlew.bat bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

Clear password variables after the build:

```powershell
Remove-Item Env:SURI_RELEASE_STORE_PASSWORD
Remove-Item Env:SURI_RELEASE_KEY_PASSWORD
```

For Google Play, enable Play App Signing and upload this bundle with the upload
key. Preserve the same application ID (`com.surigerman.app`) and increment
`versionCode` for every new store upload.