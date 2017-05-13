const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  var flattenedArray = flattenTreeToArray(root);
  var correctId = _.filter(flattenedArray, val => (val.id === id));
  return correctId[0];
};

const getElementsByClassName = function(root, className) {
  var flattenedArray = flattenTreeToArray(root);
  var correctClass = _.filter(flattenedArray, val => {
  	var arrayOfClasses = [];
  	if(val.className !== undefined) {
  		arrayOfClasses = val.className.split(' ');
  	}
  	var foundClass = arrayOfClasses.indexOf(className);
  	return foundClass !== -1;
  })
  return correctClass;
};

const getElementsByTagName = function(root, tagName) {
  var flattenedArray = flattenTreeToArray(root);
  var correctTagName = _.filter(flattenedArray, val => (val.tagName === tagName));
  return correctTagName;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
