const fs = require('fs-extra');
fs.copySync(
  'src/main/backend/mail/templates',
  'dist/main/mail/templates'
);
console.log('Mail templates copied');