const http = require('http');

// pull in response handler files
const htmlHandler = require('./htmlResponses.js');
const dataHandler = require('./dataHandler.js');

// set the port. process.env.PORT and NODE_PORT are for servers like heroku
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// key:value object to look up URL routes to specific functions
const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  '/success': dataHandler.success,
  '/badRequest': dataHandler.badRequest,
  notFound: dataHandler.notFound,
  '/unauthorized': dataHandler.notAuthorized,
  '/forbidden': dataHandler.forbidden,
  '/internal': dataHandler.internal,
  '/notImplemented': dataHandler.notImplemented,
  /*
  */
};

const onRequest = (request, response) => {
  // parse the URL
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  // grab the query parameters (?key=value&key2=value2&etc=etc)
  // and parse them into a reusable object by field name
  // store that in the request as the query
  request.query = Object.fromEntries(parsedUrl.searchParams);
  request.acceptedTypes = request.headers.accept.split(',');

  // check if the path name (the /name part of the url) matches
  // any in our url object. If so call that function. If not, default to index.
  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response);
  } else {
    urlStruct.notFound(request, response);
  }
};

// start HTTP server
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
