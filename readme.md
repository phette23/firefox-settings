# Firefox Private Settings for Public Computers

These are meant to be some suggested settings for a Firefox install running in a public computer lab setting, particularly with a library in mind (I'm a librarian, after all) but in general they should work just about anywhere. The overall goal is to afford users as much privacy and protection as possible without sacrificing any usability (e.g. confusing dialogs that annoy users & possibly result in poor choices provide little security). In general, I think most users would not notice that these defaults were active, particularly those who are only browsing for a short time, but they are private enough to frustrate a personal user who wants their data stored session after session.

Included are two files: preferences.js and settings.cfg. The first is a default preferences file that points to the latter, where the settings are actually applied. I have liberally commented each file in an attempt to document what the various settings do; if you encounter a frustrating default or outright bug, chances are you can fix it by reading the source code.

## Installation

Place the preferences .js file in...

- For Mac OS X, right-click on the Firefox.app to select "Show Package Contents", then drill down to Contents > MacOS > defaults > pref.
- For Windows XP, the file should be placed in the same directory as the Firefox executable, e.g. C:\Program Files\Mozilla Firefox\defaults\pref
- For Windows 7, the default prefs are in C:\Users\{{YOUR USER}}\AppData\Local\Mozilla Firefox\defaults\pref which is a hidden folder
- For older versions of Firefox on Windows 7, the defaults were in C:\Program Files (x86)\Mozilla Firefox\defaults\pref but that no longer seems to be the case

Place the settings.cfg file alongside the Firefox executable...

- For Mac OS X, that's Firefox.app then "Show Package Contents" > Contents > MacOS
- For Windows XP, that's C:\Program Files\Mozilla Firefox\
- For Windows 7, that's C:\Users\{{YOUR USER}}\AppData\Local\Mozilla Firefox
- For older versions of Firefox on Windows 7, the executable was in C:\Program Files (x86)\Mozilla Firefox\

Start up Firefox, peruse the preferences and about:config to make sure that everything's been correctly applied. Logically, this file should work on any version of Firefox but I haven't tested on that many.

[![Analytics](https://ga-beacon.appspot.com/UA-29080462-2/your-repo/page-name?pixel)](https://github.com/igrigorik/ga-beacon)
