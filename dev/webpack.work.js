import "./unique_tech.html";
import "./scss/unique_tech.scss";
import "../dev/blocks/header/header";

if (typeof fs !== undefined + "") {
  const folder = path.resolve(__dirname, './assets/imgs/');

  fs.readdirSync(folder, (err, files) => {
    files.forEach(file => {
      require('./assets/imgs/' + file);
    });
  });
}