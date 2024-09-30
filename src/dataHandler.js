// respond function (request, response, status, content, type)
// postman software is good for api building

// make all const requsts (success, bad request etc)

// bad request (if !request.query.valid || request.query.valid !== 'true')

const respond = (request, response, status, content, type) => {
  // set status code (200 success) and content type
  response.writeHead(status, {
    'Content-Type': type,
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });
  // write the content string or buffer to response
  response.write(content);
  // send the response to the client
  response.end();
};

const success = (request, response) => {
  const content = {
    message: 'This is a successful response',
    id: 'success',
  };

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 200, responseString, 'application/json');
};

const badRequest = (request, response) => {
  const content = {
    message: 'This request has the required parameters',
    id: 'success',
  };

  if (!request.query.valid || request.query.valid !== 'true') {
    content.message = 'Missing valid query parameter set to true';
    content.id = 'badRequest';

    if (request.acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${content.message}</message>`;
      responseXML = `${responseXML} <id>${content.id}</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, 400, responseXML, 'text/xml');
    }
    const responseString = JSON.stringify(content);
    return respond(request, response, 400, responseString, 'application/json');
  }

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 200, responseString, 'application/json');
};

const notAuthorized = (request, response) => {
  const content = {
    message: 'User is authorized',
    id: 'success',
  };

  if (!request.query.loggedIn || request.query.loggedIn !== 'true') {
    content.message = 'Missing logged in query parameter set to yes';
    content.id = 'unauthorized';

    if (request.acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${content.message}</message>`;
      responseXML = `${responseXML} <id>${content.id}</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, 401, responseXML, 'text/xml');
    }
    const responseString = JSON.stringify(content);
    return respond(request, response, 401, responseString, 'application/json');
  }

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 200, responseString, 'application/json');
};

const forbidden = (request, response) => {
  const content = {
    message: 'You do not have access to this content',
    id: 'forbidden',
  };

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 403, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 403, responseString, 'application/json');
};

const internal = (request, response) => {
  const content = {
    message: 'Internal server error. Something went wrong.',
    id: 'internalError',
  };

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 403, responseString, 'application/json');
};

const notImplemented = (request, response) => {
  const content = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 501, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 501, responseString, 'application/json');
};
const notFound = (request, response) => {
  const content = {
    message: 'The page you were looking for was not found',
    id: 'notFound',
  };

  if (request.acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${content.message}</message>`;
    responseXML = `${responseXML} <id>${content.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 404, responseXML, 'text/xml');
  }

  const responseString = JSON.stringify(content);
  return respond(request, response, 404, responseString, 'application/json');
};

module.exports = {
  success,
  badRequest,
  notFound,
  notAuthorized,
  forbidden,
  notImplemented,
  internal,
};
