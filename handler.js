'use strict';
const moment = require('moment');
const info = require('package.json');

module.exports.hello = async (event, context) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.now = async (event, context) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      input: event,
    }),
  };
  
  return response;
};

module.exports.status = async (event, context) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      version: info.version,
      name: info.name,
      date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      input: event,
    }),
  };
  
  return response;
};