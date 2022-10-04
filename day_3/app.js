const express = require('express')
const app = express();
const port = 3000;

let options = {
  dotfiles : 'ignore',
  etag : true, 
  extensions : ['htm' , "html"],
  index : false,
  maxAge : "7d",
  redirect : false,
  setHeaders : function ( res , path , stat ) {
    res.set('x-timestamp' , Date.now());
  }
}

app.use(express.static("public" , options));


app.get('/', (req, res) => {
  const name = "View links"
  let html = `<!DOCTYPE html><html><head><title>${name} Page</title></head>`;
  html += `<body><h1>Welcome from ${name} Page</h1><main><h3>/home</h3><h3>/game</h3><h3>/run</h3></main><h3>Sorry for a delay, I got exams :(</h3></main></body></html>`;
  res.send(html);
});

app.get('/home', (req, res) => {
  let img = "<img src='/img/fornite.gif'";
  const name = "Home";

  let html = `<!DOCTYPE html><html><head><title>${name} Page</title></head>`;
  html += `<body><h1>Welcome from ${name} Page</h1><main>${img}</main></body></html>`;
  res.send(html);
});

app.get('/game', (req, res) => {
  let img = "<img src='/img/kids_game.gif'";
  const name = "Game Death Emoji x 10";

  let html = `<!DOCTYPE html><html><head><title>${name} Page</title></head>`;
  html += `<body><h1>Welcome from ${name} Page</h1><main>${img}</main></body></html>`;
  res.send(html);
});

app.get('/run', (req, res) => {
  let img = "<img src='/img/run_for_ur_life.gif'";
  const name = "Run for your life!";

  let html = `<!DOCTYPE html><html><head><title>${name} Page</title></head>`;
  html += `<body><h1>Welcome from ${name} Page</h1><main>${img}</main></body></html>`;
  res.send(html);
});

app.listen(port);
