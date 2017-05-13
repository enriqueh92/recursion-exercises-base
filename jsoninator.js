const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
	if (obj === null) {
		return 'null';
	} else if (obj === (undefined || '')) {
		return;
	}  else if (Array.isArray(obj)) {
		return '[' + _.map(obj, item => stringify(item)).join(',') + ']';
	} else if(typeof obj === 'object') {
		if(Object.keys(obj).length === 0) {
			return '{}';
		} else {
			return '{' + '\"' + Object.keys(obj)[0] + '\":' + _.map(obj, item => stringify(item)).join(',') + '}';
		}
	} else if(typeof obj === 'number'){
		return obj.toString();
	} else if (typeof obj === 'string') {
		return '\"' + obj + '\"';
	}  else if (typeof obj === 'boolean') {
		if(obj === true) {
			return 'true';
		}else {
			return 'false'
	
		};
	};
};
  

module.exports = {
  stringify: stringify
};