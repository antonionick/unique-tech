const folder = path.resolve(__dirname, './assets/imgs/');

import "./unique_tech.html";
import "./scss/unique_tech.scss";

fs.readdirSync(folder, (err, files) => {
  files.forEach(file => {
    require('./assets/imgs/' + file);
  });
});