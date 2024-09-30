const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);
// const css

// function to handle the index page
const getIndex = (request, response) => {
  // set status code (200 success), content type, and content length
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(index, 'utf8'),
  });
  // write an HTML string or buffer to the response
  response.write(index);
  // send the response to the client.
  response.end();
};

// get css
const getCSS = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/css',
    'Content-Length': Buffer.byteLength(css, 'utf8'),
  });

  response.write(css);
  response.end();
};

module.exports = {
  getIndex,
  getCSS,
};
