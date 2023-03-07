// Fix for this issue https://github.com/phonegap/phonegap-plugin-push/issues/2229
const fs = require('fs');
const path = require('path');

module.exports = function (ctx) {
  // make sure android platform is part of build
  if (ctx.opts.platforms.indexOf('android') < 0) {
    return;
  }

  const gradleFile = 'platforms/android/app/build.gradle';
  const text = "apply plugin: 'com.android.application'";
  const new_text = "configurations { all*.exclude group: 'com.android.support', module: 'support-v13' }";
  fs.readFile(gradleFile, 'utf8', (err, data) => {
    if (err) throw err;
    if (data.search(new_text) < 0) {
      let file_content = data.toString();
      const position = data.search(text) + text.length;
      file_content = file_content.substring(position);

      const file = fs.openSync(gradleFile, 'r+');
      const bufferedText = Buffer.from(`\r\n\r\n${new_text}\r\n${file_content}`);
      fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
      fs.close(file);
    }
  });
};
