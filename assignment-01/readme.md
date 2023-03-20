# INSTALL REACT-NATIVE-EXPO
- BUKA FOLDER TEMPAT AKAN MENYIMPAN PROJECT
- KLIK KANAN -> OPEN IN TERMINAL. ATAU BUKA CMD
- `npx create-expo-app hello-world-rn`, lalu `y`
- `cd hello-world-rn`
- `code .`
- `npm run android`

- UNTUK RUN REACT-NATIVE DI WEB
- `npm install react-native-web react-dom @expo/webpack-config`
- `npm run web`

# INSTALL REACT-NATIVE-CLI
- npx react-native@latest init ExampleRnCli
- cd ExampleRnCli
- code .
- npm run android

# INSTALL FLUTTER
- DOWNLOAD FLUTTER SDK
- EKSTRAK FLUTTER SDK
- PINDAHKAN KE `C:/src/flutter`
- EDIT `Path` DI ENVIRONTMENT VARIABLES
- TAMBAHKAN DIREKTORI `C:/src/flutter/flutter/bin`

## CREATE FLUTTER PROJECT
- BUKA TERMINAL
- `flutter create <nama-app>`
- `cd <nama-app>`
- `code .`
- KLIK Run -> Start Debugging ATAU PENCET <kbd>F5<kbd>


# INSTALL ANDROID SDK
- DOWNLOAD ANDROID SDK https://developer.android.com/studio
- EKSTRAK ANDROID SDK
- PINDAHKAN KE `C:/src/android-sdk`
- MASUK KE `C:/src/android-sdk/cmdline-tools/tools/bin` LALU OPEN DI TERMINAL
- RUN `sdkmanager` KALO GAGAL INSTALL JAVA SDK DULU
- RUN `sdkmanager --install "platform-tools"  "build-tools;30.0.3" "platforms;android-33"`
- COPY FOLDER `platforms` DAN `platform-tools` DARI `C:\src\android-sdk` KE `C:\Users\user\AppData\Local\Android\Sdk`
- MASUK KE ENV VARIABLES, TAMBAHKAN PATH `ANDROID_HOME`, ISI VALUE DENGAN `C:\Users\user\AppData\Local\Android\Sdk`
- MASIH DI ENV VARIABLES, EDIT `Path` LALU TAMBAHKAN `C:\Users\user\AppData\Local\Android\Sdk\platform-tools`

# INSTALL JAVA SDK
- JALANKAN SDK EXE
- BUKA ENVIRONMENT VARIABLE
- TAMBAHKAN VARIABLE `JAVA_HOME` DENGAN VALUE `C:\Program Files\Java\<jdk-version>`
- OK

# INSTALL IONIC
- MASUK TERMINAL, `npm install -g @ionic/cli native-run cordova-res`
- `ionic start --type=react --capacitor`
- `cd <nama-app>`
- PILIH TEMPLATE (BLANK/TABS/SIDEMENU, etc) BEBAS PILIH MANA
- CREATE IONIC ACCOUNT, BEBAS PILIH `y` ATAU `n`
- `cd <nama-app>`
- `code .`
- BUKA FOLDER `android/graddle/wrapper/graddle-wrapper.properties`
- EDIT `distributionUrl` DARI `https:\//services.gradle.org/distributions/gradle-7.4.2-all.zip` JADI `https://services.gradle.org/distributions/gradle-7.4.2-all.zip`
- `ionic capacitor run android`
- GAGAL PAS BUILD APP