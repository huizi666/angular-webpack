/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;

/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (W, b) {
  'use strict';
  function K(q, g) {
    g = g || {};b.forEach(g, function (b, h) {
      delete g[h];
    });for (var h in q) {
      !q.hasOwnProperty(h) || "$" === h.charAt(0) && "$" === h.charAt(1) || (g[h] = q[h]);
    }return g;
  }var B = b.$$minErr("$resource"),
      Q = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource", ["ng"]).provider("$resource", function () {
    var q = /^https?:\/\/\[[^\]]*][^/]*/,
        g = this;this.defaults = { stripTrailingSlashes: !0, cancellable: !1, actions: { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" },
        "delete": { method: "DELETE" } } };this.$get = ["$http", "$log", "$q", "$timeout", function (h, P, L, M) {
      function C(b, e) {
        this.template = b;this.defaults = p({}, g.defaults, e);this.urlParams = {};
      }function x(D, e, u, m) {
        function c(a, d) {
          var c = {};d = p({}, e, d);t(d, function (d, l) {
            y(d) && (d = d(a));var f;if (d && d.charAt && "@" === d.charAt(0)) {
              f = a;var k = d.substr(1);if (null == k || "" === k || "hasOwnProperty" === k || !Q.test("." + k)) throw B("badmember", k);for (var k = k.split("."), e = 0, g = k.length; e < g && b.isDefined(f); e++) {
                var h = k[e];f = null !== f ? f[h] : void 0;
              }
            } else f = d;c[l] = f;
          });return c;
        }function R(a) {
          return a.resource;
        }function l(a) {
          K(a || {}, this);
        }var q = new C(D, m);u = p({}, g.defaults.actions, u);l.prototype.toJSON = function () {
          var a = p({}, this);delete a.$promise;delete a.$resolved;return a;
        };t(u, function (a, d) {
          var b = /^(POST|PUT|PATCH)$/i.test(a.method),
              e = a.timeout,
              g = N(a.cancellable) ? a.cancellable : q.defaults.cancellable;e && !S(e) && (P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete a.timeout, e = null);l[d] = function (f, k, m, D) {
            function u(a) {
              r.catch(E);z.resolve(a);
            }var G = {},
                v,
                w,
                A;switch (arguments.length) {case 4:
                A = D, w = m;case 3:case 2:
                if (y(k)) {
                  if (y(f)) {
                    w = f;A = k;break;
                  }w = k;A = m;
                } else {
                  G = f;v = k;w = m;break;
                }case 1:
                y(f) ? w = f : b ? v = f : G = f;break;case 0:
                break;default:
                throw B("badargs", arguments.length);}var F = this instanceof l,
                n = F ? v : a.isArray ? [] : new l(v),
                s = {},
                C = a.interceptor && a.interceptor.response || R,
                x = a.interceptor && a.interceptor.responseError || void 0,
                H = !!A,
                I = !!x,
                z,
                J;t(a, function (a, d) {
              switch (d) {default:
                  s[d] = T(a);case "params":case "isArray":case "interceptor":case "cancellable":}
            });!F && g && (z = L.defer(), s.timeout = z.promise, e && (J = M(z.resolve, e)));b && (s.data = v);q.setUrlParams(s, p({}, c(v, a.params || {}), G), a.url);var r = h(s).then(function (f) {
              var c = f.data;if (c) {
                if (O(c) !== !!a.isArray) throw B("badcfg", d, a.isArray ? "array" : "object", O(c) ? "array" : "object", s.method, s.url);if (a.isArray) n.length = 0, t(c, function (a) {
                  "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.push(new l(a)) : n.push(a);
                });else {
                  var b = n.$promise;K(c, n);n.$promise = b;
                }
              }f.resource = n;
              return f;
            }),
                r = r["finally"](function () {
              n.$resolved = !0;!F && g && (n.$cancelRequest = E, M.cancel(J), z = J = s.timeout = null);
            }),
                r = r.then(function (a) {
              var d = C(a);(w || E)(d, a.headers, a.status, a.statusText);return d;
            }, H || I ? function (a) {
              H && A(a);return I ? x(a) : L.reject(a);
            } : void 0);H && !I && r.catch(E);return F ? r : (n.$promise = r, n.$resolved = !1, g && (n.$cancelRequest = u), n);
          };l.prototype["$" + d] = function (a, c, b) {
            y(a) && (b = c, c = a, a = {});a = l[d].call(this, a, this, c, b);return a.$promise || a;
          };
        });l.bind = function (a) {
          a = p({}, e, a);return x(D, a, u, m);
        };
        return l;
      }var E = b.noop,
          t = b.forEach,
          p = b.extend,
          T = b.copy,
          O = b.isArray,
          N = b.isDefined,
          y = b.isFunction,
          S = b.isNumber,
          U = b.$$encodeUriQuery,
          V = b.$$encodeUriSegment;C.prototype = { setUrlParams: function setUrlParams(b, e, g) {
          var m = this,
              c = g || m.template,
              h,
              l,
              p = "",
              a = m.urlParams = Object.create(null);t(c.split(/\W/), function (d) {
            if ("hasOwnProperty" === d) throw B("badname");!/^\d+$/.test(d) && d && new RegExp("(^|[^\\\\]):" + d + "(\\W|$)").test(c) && (a[d] = { isQueryParamValue: new RegExp("\\?.*=:" + d + "(?:\\W|$)").test(c) });
          });c = c.replace(/\\:/g, ":");
          c = c.replace(q, function (a) {
            p = a;return "";
          });e = e || {};t(m.urlParams, function (a, b) {
            h = e.hasOwnProperty(b) ? e[b] : m.defaults[b];N(h) && null !== h ? (l = a.isQueryParamValue ? U(h, !0) : V(h), c = c.replace(new RegExp(":" + b + "(\\W|$)", "g"), function (a, b) {
              return l + b;
            })) : c = c.replace(new RegExp("(/?):" + b + "(\\W|$)", "g"), function (a, b, d) {
              return "/" === d.charAt(0) ? d : b + d;
            });
          });m.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/");c = c.replace(/\/\.(?=\w+($|\?))/, ".");b.url = p + c.replace(/\/\\\./, "/.");t(e, function (a, c) {
            m.urlParams[c] || (b.params = b.params || {}, b.params[c] = a);
          });
        } };return x;
    }];
  });
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * State-based routing for AngularJS
 * @version v0.3.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return S(new (S(function () {}, { prototype: a }))(), b);
  }function e(a) {
    return R(arguments, function (b) {
      b !== a && R(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }function f(a, b) {
    var c = [];for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;c.push(a.path[d]);
    }return c;
  }function g(a) {
    if (Object.keys) return Object.keys(a);var b = [];return R(a, function (a, c) {
      b.push(c);
    }), b;
  }function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;for (d = d < 0 ? Math.ceil(d) : Math.floor(d), d < 0 && (d += c); d < c; d++) {
      if (d in a && a[d] === b) return d;
    }return -1;
  }function i(a, b, c, d) {
    var e,
        i = f(c, d),
        j = {},
        k = [];for (var l in i) {
      if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) {
        h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
      }
    }return S({}, j, b);
  }function j(a, b, c) {
    if (!c) {
      c = [];for (var d in a) {
        c.push(d);
      }
    }for (var e = 0; e < c.length; e++) {
      var f = c[e];if (a[f] != b[f]) return !1;
    }return !0;
  }function k(a, b) {
    var c = {};return R(a, function (a) {
      c[a] = b[a];
    }), c;
  }function l(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));return R(c, function (c) {
      c in a && (b[c] = a[c]);
    }), b;
  }function m(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));for (var d in a) {
      h(c, d) == -1 && (b[d] = a[d]);
    }return b;
  }function n(a, b) {
    var c = Q(a),
        d = c ? [] : {};return R(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }function o(a, b) {
    var c = Q(a) ? [] : {};return R(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }function p(a) {
    return a.then(c, function () {}) && a;
  }function q(a, b) {
    var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        l = S(a.when(i), { $$promises: i, $$values: i });this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));if (s[c] = d, O(a)) q.push(c, [function () {
            return b.get(a);
          }], j);else {
            var e = b.annotate(a);R(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }r.pop(), s[c] = f;
        }
      }function o(a) {
        return P(a) && a.then && a.$$promises;
      }if (!P(i)) throw new Error("'invocables' must be an object");var p = g(i || {}),
          q = [],
          r = [],
          s = {};return R(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t));
        }function i(a) {
          r.$$failure = a, n.reject(a);
        }function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }function k() {
            if (!M(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }var l = a.defer(),
              m = 0;R(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!P(d)) throw new Error("'locals' must be an object");
        } else d = k;if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = l;var n = a.defer(),
            r = n.promise,
            s = r.$$promises = {},
            t = S({}, d),
            u = 1 + q.length / 3,
            v = !1;if (M(f.$$failure)) return i(f.$$failure), r;f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), S(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));for (var w = 0, x = q.length; w < x; w += 3) {
          d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        }return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }function r(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return M(a.template) ? this.fromString(a.template, b) : M(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : M(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return N(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return N(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b, headers: { Accept: "text/html" } }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }function s(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");return p[b] = new V.Param(b, c, d, e), p[b];
    }function g(a, b, c, d) {
      var e = ["", ""],
          f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!b) return f;switch (c) {case !1:
          e = ["(", ")" + (d ? "?" : "")];break;case !0:
          f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];break;default:
          e = ["(" + c + "|", ")?"];}return f + e[0] + b + e[1];
    }function h(e, f) {
      var g, h, i, j, k;return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = V.type(h) || d(V.type("string"), { pattern: new RegExp(h, b.caseInsensitive ? "i" : c) })), { id: g, regexp: h, segment: i, type: j, cfg: k };
    }b = S({ params: {} }, P(b) ? b : {});var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = this.segments = [],
        o = e ? e.params : {},
        p = this.params = e ? e.params.$$new() : new V.ParamSet(),
        q = [];this.source = a;for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
      s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
    }t = a.substring(m);var u = t.indexOf("?");if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) {
        r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
      }
    } else this.sourcePath = a, this.sourceSearch = "";l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }function t(a) {
    S(this, a);
  }function u() {
    function a(a) {
      return null != a ? a.toString().replace(/(~|\/)/g, function (a) {
        return { "~": "~~", "/": "~2F" }[a];
      }) : a;
    }function e(a) {
      return null != a ? a.toString().replace(/(~~|~2F)/g, function (a) {
        return { "~~": "~", "~2F": "/" }[a];
      }) : a;
    }function f() {
      return { strict: p, caseInsensitive: m };
    }function i(a) {
      return N(a) || Q(a) && N(a[a.length - 1]);
    }function j() {
      for (; w.length;) {
        var a = w.shift();if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name], l.invoke(a.def));
      }
    }function k(a) {
      S(this, a || {});
    }V = this;var l,
        m = !1,
        p = !0,
        q = !1,
        r = {},
        v = !0,
        w = [],
        x = { string: { encode: a, decode: e, is: function is(a) {
          return null == a || !M(a) || "string" == typeof a;
        }, pattern: /[^\/]*/ }, int: { encode: a, decode: function decode(a) {
          return parseInt(a, 10);
        }, is: function is(a) {
          return M(a) && this.decode(a.toString()) === a;
        }, pattern: /\d+/ }, bool: { encode: function encode(a) {
          return a ? 1 : 0;
        }, decode: function decode(a) {
          return 0 !== parseInt(a, 10);
        }, is: function is(a) {
          return a === !0 || a === !1;
        }, pattern: /0|1/ }, date: { encode: function encode(a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
        }, decode: function decode(a) {
          if (this.is(a)) return a;var b = this.capture.exec(a);return b ? new Date(b[1], b[2] - 1, b[3]) : c;
        }, is: function is(a) {
          return a instanceof Date && !isNaN(a.valueOf());
        }, equals: function equals(a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/ }, any: { encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/ } };u.$$getDefaultValue = function (a) {
      if (!i(a.value)) return a.value;if (!l) throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return M(a) && (m = a), m;
    }, this.strictMode = function (a) {
      return M(a) && (p = a), p;
    }, this.defaultSquashPolicy = function (a) {
      if (!M(a)) return q;if (a !== !0 && a !== !1 && !O(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");return q = a, a;
    }, this.compile = function (a, b) {
      return new s(a, S(f(), b));
    }, this.isMatcher = function (a) {
      if (!P(a)) return !1;var b = !0;return R(s.prototype, function (c, d) {
        N(c) && (b = b && M(a[d]) && N(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!M(b)) return r[a];if (r.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");return r[a] = new t(S({ name: a }, b)), c && (w.push({ name: a, def: c }), v || j()), this;
    }, R(x, function (a, b) {
      r[b] = new t(S({ name: b }, a));
    }), r = d(r, {}), this.$get = ["$injector", function (a) {
      return l = a, v = !1, j(), R(x, function (a, b) {
        r[b] || (r[b] = new t(a));
      }), this;
    }], this.Param = function (a, d, e, f) {
      function j(a) {
        var b = P(a) ? g(a) : [],
            c = h(b, "value") === -1 && h(b, "type") === -1 && h(b, "squash") === -1 && h(b, "array") === -1;return c && (a = { value: a }), a.$$fn = i(a.value) ? a.value : function () {
          return a.value;
        }, a;
      }function k(c, d, e) {
        if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");return d ? d : c.type ? b.isString(c.type) ? r[c.type] : c.type instanceof t ? c.type : new t(c.type) : "config" === e ? r.any : r.string;
      }function m() {
        var b = { array: "search" === f && "auto" },
            c = a.match(/\[\]$/) ? { array: !0 } : {};return S(b, c, e).array;
      }function p(a, b) {
        var c = a.squash;if (!b || c === !1) return !1;if (!M(c) || null == c) return q;if (c === !0 || O(c)) return c;throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }function s(a, b, d, e) {
        var f,
            g,
            i = [{ from: "", to: d || b ? c : "" }, { from: null, to: d || b ? c : "" }];return f = Q(a.replace) ? a.replace : [], O(e) && f.push({ from: e, to: c }), g = o(f, function (a) {
          return a.from;
        }), n(i, function (a) {
          return h(g, a.from) === -1;
        }).concat(f);
      }function u() {
        if (!l) throw new Error("Injectable functions cannot be called at configuration time");var a = l.invoke(e.$$fn);if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");return a;
      }function v(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }function c(a) {
          var c = o(n(x.replace, b(a)), function (a) {
            return a.to;
          });return c.length ? c[0] : a;
        }return a = c(a), M(a) ? x.type.$normalize(a) : u();
      }function w() {
        return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}";
      }var x = this;e = j(e), d = k(e, d, f);var y = m();d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");var z = e.value !== c,
          A = p(e, z),
          B = s(e, y, z, A);S(this, { id: a, type: d, location: f, array: y, squash: A, replace: B, isOptional: z, value: v, dynamic: c, config: e, toString: w });
    }, k.prototype = { $$new: function $$new() {
        return d(this, S(new k(), { $$parent: this }));
      }, $$keys: function $$keys() {
        for (var a = [], b = [], c = this, d = g(k.prototype); c;) {
          b.push(c), c = c.$$parent;
        }return b.reverse(), R(b, function (b) {
          R(g(b), function (b) {
            h(a, b) === -1 && h(d, b) === -1 && a.push(b);
          });
        }), a;
      }, $$values: function $$values(a) {
        var b = {},
            c = this;return R(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d]);
        }), b;
      }, $$equals: function $$equals(a, b) {
        var c = !0,
            d = this;return R(d.$$keys(), function (e) {
          var f = a && a[e],
              g = b && b[e];d[e].type.equals(f, g) || (c = !1);
        }), c;
      }, $$validates: function $$validates(a) {
        var d,
            e,
            f,
            g,
            h,
            i = this.$$keys();for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
          if (g = e.type.$normalize(f), !e.type.is(g)) return !1;if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1;
        }return !0;
      }, $$parent: c }, this.ParamSet = k;
  }function v(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }function g(a, b, c) {
      if (!c) return !1;var d = a.invoke(b, b, { $match: c });return !M(d) || d;
    }function h(d, e, f, g, h) {
      function m(a, b, c) {
        return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a;
      }function n(a) {
        function b(a) {
          var b = a(f, d);return !!b && (O(b) && d.replace().url(b), !0);
        }if (!a || !a.defaultPrevented) {
          p && d.url() === p;p = c;var e,
              g = j.length;for (e = 0; e < g; e++) {
            if (b(j[e])) return;
          }k && b(k);
        }
      }function o() {
        return i = i || e.$on("$locationChangeSuccess", n);
      }var p,
          q = g.baseHref(),
          r = d.url();return l || o(), { sync: function sync() {
          n();
        }, listen: function listen() {
          return o();
        }, update: function update(a) {
          return a ? void (r = d.url()) : void (d.url() !== r && (d.url(r), d.replace()));
        }, push: function push(a, b, e) {
          var f = a.format(b || {});null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
        }, href: function href(c, e, f) {
          if (!c.validates(e)) return null;var g = a.html5Mode();b.isObject(g) && (g = g.enabled), g = g && h.history;var i = c.format(e);if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;var j = !g && i ? "/" : "",
              k = d.port();return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
        } };
    }var i,
        j = [],
        k = null,
        l = !1;this.rule = function (a) {
      if (!N(a)) throw new Error("'rule' must be a function");return j.push(a), this;
    }, this.otherwise = function (a) {
      if (O(a)) {
        var b = a;a = function a() {
          return b;
        };
      } else if (!N(a)) throw new Error("'rule' must be a function");return k = a, this;
    }, this.when = function (a, b) {
      var c,
          h = O(b);if (O(a) && (a = d.compile(a)), !h && !N(b) && !Q(b)) throw new Error("invalid 'handler' in when()");var i = { matcher: function matcher(a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()));
          }, { prefix: O(a.prefix) ? a.prefix : "" });
        }, regex: function regex(a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");return h && (c = b, b = ["$match", function (a) {
            return f(c, a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path()));
          }, { prefix: e(a) });
        } },
          j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };for (var k in j) {
        if (j[k]) return this.rule(i[k](a, b));
      }throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"];
  }function w(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^");
    }function m(a, b) {
      if (!a) return c;var d = O(a),
          e = d ? a : a.name,
          g = f(e);if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");b = m(b);for (var h = e.split("."), i = 0, j = h.length, k = b; i < j; i++) {
          if ("" !== h[i] || 0 !== i) {
            if ("^" !== h[i]) break;if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");k = k.parent;
          } else k = b;
        }h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }var l = A[e];return !l || !d && (d || l !== a && l.self !== a) ? c : l;
    }function n(a, b) {
      B[a] || (B[a] = []), B[a].push(b);
    }function q(a) {
      for (var b = B[a] || []; b.length;) {
        r(b.shift());
      }
    }function r(b) {
      b = d(b, { self: b, resolve: b.resolve || {}, toString: function toString() {
          return this.name;
        } });var c = b.name;if (!O(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");if (A.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");var e = c.indexOf(".") !== -1 ? c.substring(0, c.lastIndexOf(".")) : O(b.parent) ? b.parent : P(b.parent) && O(b.parent.name) ? b.parent.name : "";if (e && !A[e]) return n(e, b.self);for (var f in D) {
        N(D[f]) && (b[f] = D[f](b, D.$delegates[f]));
      }return A[c] = b, !b[C] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        z.$current.navigable == b && j(a, c) || z.transitionTo(b, a, { inherit: !0, location: !1 });
      }]), q(c), b;
    }function s(a) {
      return a.indexOf("*") > -1;
    }function t(a) {
      for (var b = a.split("."), c = z.$current.name.split("."), d = 0, e = b.length; d < e; d++) {
        "*" === b[d] && (c[d] = "*");
      }return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length == c.length && c.join("") === b.join("");
    }function u(a, b) {
      return O(a) && !M(b) ? D[a] : N(b) && O(a) ? (D[a] && !D.$delegates[a] && (D.$delegates[a] = D[a]), D[a] = b, this) : this;
    }function v(a, b) {
      return P(a) ? b = a : b.name = a, r(b), this;
    }function w(a, e, f, h, l, n, q, r, u) {
      function v(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);if (g.defaultPrevented) return q.update(), F;if (!g.retry) return null;if (f.$retry) return q.update(), G;var h = z.transition = e.when(g.retry);return h.then(function () {
          return h !== z.transition ? (a.$broadcast("$stateChangeCancel", b.to, b.toParams, c, d), D) : (b.options.$retry = !0, z.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return F;
        }), q.update(), h;
      }function w(a, c, d, g, i, j) {
        function m() {
          var c = [];return R(a.views, function (d, e) {
            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};g.$template = [function () {
              return f.load(e, { view: d, locals: i.globals, params: n, notify: j.notify }) || "";
            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
              if (N(d.controllerProvider) || Q(d.controllerProvider)) {
                var f = b.extend({}, g, i.globals);c.$$controller = h.invoke(d.controllerProvider, null, f);
              } else c.$$controller = d.controller;c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c;
            }));
          }), e.all(c).then(function () {
            return i.globals;
          });
        }var n = d ? c : k(a.params.$$keys(), c),
            o = { $stateParams: n };i.resolve = l.resolve(a.resolve, o, i.resolve, a);var p = [i.resolve.then(function (a) {
          i.globals = a;
        })];return g && p.push(g), e.all(p).then(m).then(function (a) {
          return i;
        });
      }var B = new Error("transition superseded"),
          D = p(e.reject(B)),
          E = p(e.reject(new Error("transition prevented"))),
          F = p(e.reject(new Error("transition aborted"))),
          G = p(e.reject(new Error("transition failed")));return y.locals = { resolve: null, globals: { $stateParams: {} } }, z = { params: {}, current: y.self, $current: y, transition: null }, z.reload = function (a) {
        return z.transitionTo(z.current, n, { reload: a || !0, inherit: !1, notify: !0 });
      }, z.go = function (a, b, c) {
        return z.transitionTo(a, b, S({ inherit: !0, relative: z.$current }, c));
      }, z.transitionTo = function (b, c, f) {
        c = c || {}, f = S({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, f || {});var g,
            j = z.$current,
            l = z.params,
            o = j.path,
            p = m(b, f.relative),
            r = c["#"];if (!M(p)) {
          var s = { to: b, toParams: c, options: f },
              t = v(s, j.self, l, f);if (t) return t;if (b = s.to, c = s.toParams, f = s.options, p = m(b, f.relative), !M(p)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }if (p[C]) throw new Error("Cannot transition to abstract state '" + b + "'");if (f.inherit && (c = i(n, c || {}, z.$current, p)), !p.params.$$validates(c)) return G;c = p.params.$$values(c), b = p;var u = b.path,
            A = 0,
            F = u[A],
            H = y.locals,
            I = [];if (f.reload) {
          if (O(f.reload) || P(f.reload)) {
            if (P(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");var J = f.reload === !0 ? o[0] : m(f.reload);if (f.reload && !J) throw new Error("No such reload state '" + (O(f.reload) ? f.reload : f.reload.name) + "'");for (; F && F === o[A] && F !== J;) {
              H = I[A] = F.locals, A++, F = u[A];
            }
          }
        } else for (; F && F === o[A] && F.ownParams.$$equals(c, l);) {
          H = I[A] = F.locals, A++, F = u[A];
        }if (x(b, c, j, l, H, f)) return r && (c["#"] = r), z.params = c, T(z.params, n), T(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (q.push(b.navigable.url, c, { $$avoidResync: !0, replace: "replace" === f.location }), q.update(!0)), z.transition = null, e.when(z.current);if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == z.transition && q.update(), E;for (var K = e.when(H), L = A; L < u.length; L++, F = u[L]) {
          H = I[L] = d(H), K = w(F, c, F === b, K, H, f);
        }var N = z.transition = K.then(function () {
          var d, e, g;if (z.transition !== N) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D;for (d = o.length - 1; d >= A; d--) {
            g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          }for (d = A; d < u.length; d++) {
            e = u[d], e.locals = I[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          }return z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.$current = b, z.current = b.self, z.params = c, T(z.params, n), z.transition = null, f.location && b.navigable && q.push(b.navigable.url, b.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === f.location }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), q.update(!0), z.current);
        }).then(null, function (d) {
          return d === B ? D : z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || q.update(), e.reject(d));
        });return N;
      }, z.is = function (a, b, d) {
        d = S({ relative: z.$current }, d || {});var e = m(a, d.relative);return M(e) ? z.$current === e && (!b || j(e.params.$$values(b), n)) : c;
      }, z.includes = function (a, b, d) {
        if (d = S({ relative: z.$current }, d || {}), O(a) && s(a)) {
          if (!t(a)) return !1;a = z.$current.name;
        }var e = m(a, d.relative);if (!M(e)) return c;if (!M(z.$current.includes[e.name])) return !1;if (!b) return !0;for (var f = g(b), h = 0; h < f.length; h++) {
          var i = f[h],
              j = e.params[i];if (j && !j.type.equals(n[i], b[i])) return !1;
        }return !0;
      }, z.href = function (a, b, d) {
        d = S({ lossy: !0, inherit: !0, absolute: !1, relative: z.$current }, d || {});var e = m(a, d.relative);if (!M(e)) return null;d.inherit && (b = i(n, b || {}, z.$current, e));var f = e && d.lossy ? e.navigable : e;return f && f.url !== c && null !== f.url ? q.href(f.url, k(e.params.$$keys().concat("#"), b || {}), { absolute: d.absolute }) : null;
      }, z.get = function (a, b) {
        if (0 === arguments.length) return o(g(A), function (a) {
          return A[a].self;
        });var c = m(a, b || z.$current);return c && c.self ? c.self : null;
      }, z;
    }function x(a, b, c, d, e, f) {
      function g(a, b, c) {
        function d(b) {
          return "search" != a.params[b].location;
        }var e = a.params.$$keys().filter(d),
            f = l.apply({}, [a.params].concat(e)),
            g = new V.ParamSet(f);return g.$$equals(b, c);
      }if (!f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b))) return !0;
    }var y,
        z,
        A = {},
        B = {},
        C = "abstract",
        D = { parent: function parent(a) {
        if (M(a.parent) && a.parent) return m(a.parent);var b = /^(.+)\.[^.]+$/.exec(a.name);return b ? m(b[1]) : y;
      }, data: function data(a) {
        return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data;
      }, url: function url(a) {
        var b = a.url,
            c = { params: a.params || {} };if (O(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || y).url.concat(b, c);if (!b || e.isMatcher(b)) return b;throw new Error("Invalid url '" + b + "' in state '" + a + "'");
      }, navigable: function navigable(a) {
        return a.url ? a : a.parent ? a.parent.navigable : null;
      }, ownParams: function ownParams(a) {
        var b = a.url && a.url.params || new V.ParamSet();return R(a.params || {}, function (a, c) {
          b[c] || (b[c] = new V.Param(c, null, a, "config"));
        }), b;
      }, params: function params(a) {
        var b = l(a.ownParams, a.ownParams.$$keys());return a.parent && a.parent.params ? S(a.parent.params.$$new(), b) : new V.ParamSet();
      }, views: function views(a) {
        var b = {};return R(M(a.views) ? a.views : { "": a }, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c;
        }), b;
      }, path: function path(a) {
        return a.parent ? a.parent.path.concat(a) : [];
      }, includes: function includes(a) {
        var b = a.parent ? S({}, a.parent.includes) : {};return b[a.name] = !0, b;
      }, $delegates: {} };y = r({ name: "", url: "^", views: null, abstract: !0 }), y.navigable = null, this.decorator = u, this.state = v, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }function x() {
    function a(a, b) {
      return { load: function load(a, c) {
          var d,
              e = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return c = S(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d;
        } };
    }this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }function y() {
    var a = !1;this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        return c(function () {
          a[0].scrollIntoView();
        }, 0, !1);
      };
    }];
  }function z(a, c, d, e, f) {
    function g() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (a) {
          return null;
        }
      };
    }function h(a, c) {
      var d = function d() {
        return { enter: function enter(a, b, c) {
            b.after(a), c();
          }, leave: function leave(a, b) {
            a.remove(), b();
          } };
      };if (k) return { enter: function enter(a, c, d) {
          b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d);
        }, leave: function leave(a, c) {
          b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c);
        } };if (j) {
        var e = j && j(c, a);return { enter: function enter(a, b, c) {
            e.enter(a, null, b), c();
          }, leave: function leave(a, b) {
            e.leave(a), b();
          } };
      }return d();
    }var i = g(),
        j = i("$animator"),
        k = i("$animate"),
        l = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(c, g, i) {
        return function (c, g, j) {
          function k() {
            if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
              var a = n.data("$uiViewAnim");s.leave(n, function () {
                a.$$animLeave.resolve(), m = null;
              }), m = n, n = null;
            }
          }function l(h) {
            var l,
                m = B(c, j, g, e),
                t = m && a.$current && a.$current.locals[m];if (h || t !== p) {
              l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);var u = i(l, function (a) {
                var e = f.defer(),
                    h = f.defer(),
                    i = { $animEnter: e.promise, $animLeave: h.promise, $$animLeave: h };a.data("$uiViewAnim", i), s.enter(a, g, function () {
                  e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a);
                }), k();
              });n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q);
            }
          }var m,
              n,
              o,
              p,
              q = j.onload || "",
              r = j.autoscroll,
              s = h(j, c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess", function () {
            l(!1);
          }), l(!0);
        };
      } };return l;
  }function A(a, c, d, e) {
    return { restrict: "ECA", priority: -400, compile: function compile(f) {
        var g = f.html();return function (f, h, i) {
          var j = d.$current,
              k = B(f, i, h, e),
              l = j && j.locals[k];if (l) {
            h.data("$uiView", { name: k, state: l.$$state }), h.html(l.$template ? l.$template : g);var m = b.extend({}, l);f[l.$$resolveAs] = m;var n = a(h.contents());if (l.$$controller) {
              l.$scope = f, l.$element = h;var o = c(l.$$controller, l);l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), N(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o);
            }n(f);
          }
        };
      } };
  }function B(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }function C(a, b) {
    var c,
        d = a.match(/^\s*({[^}]*})\s*$/);if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");return { state: c[1], paramExpr: c[3] || null };
  }function D(a) {
    var b = a.parent().inheritedData("$uiView");if (b && b.state && b.state.name) return b.state;
  }function E(a) {
    var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
        c = "FORM" === a[0].nodeName;return { attr: c ? "action" : b ? "xlink:href" : "href", isAnchor: "A" === a.prop("tagName").toUpperCase(), clickable: !c };
  }function F(a, b, c, d, e) {
    return function (f) {
      var g = f.which || f.button,
          h = e();if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
        var i = c(function () {
          b.go(h.state, h.params, h.options);
        });f.preventDefault();var j = d.isAnchor && !h.href ? 1 : 0;f.preventDefault = function () {
          j-- <= 0 && c.cancel(i);
        };
      }
    };
  }function G(a, b) {
    return { relative: D(a) || b.$current, inherit: !0 };
  }function H(a, c) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(d, e, f, g) {
        var h,
            i = C(f.uiSref, a.current.name),
            j = { state: i.state, href: null, params: null },
            k = E(e),
            l = g[1] || g[0],
            m = null;j.options = S(G(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});var n = function n(c) {
          c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href);
        };i.paramExpr && (d.$watch(i.paramExpr, function (a) {
          a !== j.params && n(a);
        }, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = F(e, a, c, k, function () {
          return j;
        }), e[e.on ? "on" : "bind"]("click", h), d.$on("$destroy", function () {
          e[e.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function I(a, b) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(c, d, e, f) {
        function g(b) {
          m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href);
        }var h,
            i = E(d),
            j = f[1] || f[0],
            k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
            l = "[" + k.map(function (a) {
          return a || "null";
        }).join(", ") + "]",
            m = { state: null, params: null, options: null, href: null },
            n = null;c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = F(d, a, b, i, function () {
          return m;
        }), d[d.on ? "on" : "bind"]("click", h), c.$on("$destroy", function () {
          d[d.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function J(a, b, c) {
    return { restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
        function g(b, c, e) {
          var f = a.get(b, D(d)),
              g = h(b, c),
              i = { state: f || { name: b }, params: c, hash: g };return p.push(i), q[g] = e, function () {
            var a = p.indexOf(i);a !== -1 && p.splice(a, 1);
          };
        }function h(a, c) {
          if (!O(a)) throw new Error("state should be a string");return P(c) ? a + U(c) : (c = b.$eval(c), P(c) ? a + U(c) : a);
        }function i() {
          for (var a = 0; a < p.length; a++) {
            l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n);
          }
        }function j(a, b) {
          f(function () {
            a.addClass(b);
          });
        }function k(a, b) {
          a.removeClass(b);
        }function l(b, c) {
          return a.includes(b.name, c);
        }function m(b, c) {
          return a.is(b.name, c);
        }var n,
            o,
            p = [],
            q = {};n = c(e.uiSrefActiveEq || "", !1)(b);try {
          o = b.$eval(e.uiSrefActive);
        } catch (a) {}o = o || c(e.uiSrefActive || "", !1)(b), P(o) && R(o, function (c, d) {
          if (O(c)) {
            var e = C(c, a.current.name);g(e.state, b.$eval(e.paramExpr), d);
          }
        }), this.$$addStateInfo = function (a, b) {
          if (!(P(o) && p.length > 0)) {
            var c = g(a, b, o);return i(), c;
          }
        }, b.$on("$stateChangeSuccess", i), i();
      }] };
  }function K(a) {
    var b = function b(_b, c) {
      return a.is(_b, c);
    };return b.$stateful = !0, b;
  }function L(a) {
    var b = function b(_b2, c, d) {
      return a.includes(_b2, c, d);
    };return b.$stateful = !0, b;
  }var M = b.isDefined,
      N = b.isFunction,
      O = b.isString,
      P = b.isObject,
      Q = b.isArray,
      R = b.forEach,
      S = b.extend,
      T = b.copy,
      U = b.toJson;b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), q.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", q), r.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", r);var V;s.prototype.concat = function (a, b) {
    var c = { caseInsensitive: V.caseInsensitive(), strict: V.strictMode(), squash: V.defaultSquashPolicy() };return new s(this.sourcePath + a + this.sourceSearch, S(c, b), this);
  }, s.prototype.toString = function () {
    return this.source;
  }, s.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("");
      }function c(a) {
        return a.replace(/\\-/g, "-");
      }var d = b(a).split(/-(?!\\)/),
          e = o(d, b);return o(e, c).reverse();
    }var d = this.regexp.exec(a);if (!d) return null;b = b || {};var e,
        f,
        g,
        h = this.parameters(),
        i = h.length,
        j = this.segments.length - 1,
        k = {};if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");var l, m;for (e = 0; e < j; e++) {
      for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }m && l.array === !0 && (m = c(m)), M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }for (; e < i; e++) {
      for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }return k;
  }, s.prototype.parameters = function (a) {
    return M(a) ? this.params[a] || null : this.$$paramNames;
  }, s.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, s.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }a = a || {};var c = this.segments,
        d = this.parameters(),
        e = this.params;if (!this.validates(a)) return null;var f,
        g = !1,
        h = c.length - 1,
        i = d.length,
        j = c[0];for (f = 0; f < i; f++) {
      var k = f < h,
          l = d[f],
          m = e[l],
          n = m.value(a[l]),
          p = m.isOptional && m.type.equals(m.value(), n),
          q = !!p && m.squash,
          r = m.type.encode(n);if (k) {
        var s = c[f + 1],
            t = f + 1 === h;if (q === !1) null != r && (j += Q(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;else if (q === !0) {
          var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;j += s.match(u)[1];
        } else O(q) && (j += q + s);t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1));
      } else {
        if (null == r || p && q !== !1) continue;if (Q(r) || (r = [r]), 0 === r.length) continue;r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0;
      }
    }return j;
  }, t.prototype.is = function (a, b) {
    return !0;
  }, t.prototype.encode = function (a, b) {
    return a;
  }, t.prototype.decode = function (a, b) {
    return a;
  }, t.prototype.equals = function (a, b) {
    return a == b;
  }, t.prototype.$subPattern = function () {
    var a = this.pattern.toString();return a.substr(1, a.length - 2);
  }, t.prototype.pattern = /.*/, t.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, t.prototype.$normalize = function (a) {
    return this.is(a) ? a : this.decode(a);
  }, t.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }function e(a) {
        return Q(a) ? a : M(a) ? [a] : [];
      }function f(a) {
        switch (a.length) {case 0:
            return c;case 1:
            return "auto" === b ? a[0] : a;default:
            return a;}
      }function g(a) {
        return !a;
      }function h(a, b) {
        return function (c) {
          if (Q(c) && 0 === c.length) return c;c = e(c);var d = o(c, a);return b === !0 ? 0 === n(d, g).length : f(d);
        };
      }function i(a) {
        return function (b, c) {
          var d = e(b),
              f = e(c);if (d.length !== f.length) return !1;for (var g = 0; g < d.length; g++) {
            if (!a(d[g], f[g])) return !1;
          }return !0;
        };
      }this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b;
    }if (!a) return this;if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", u), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {}]), v.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", v), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
    return {};
  }).constant("$state.runtime", { autoinject: !0 }).provider("$state", w).run(["$injector", function (a) {
    a.get("$state.runtime").autoinject && a.get("$state");
  }]), x.$inject = [], b.module("ui.router.state").provider("$view", x), b.module("ui.router.state").provider("$uiViewScroll", y), z.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], A.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", z), b.module("ui.router.state").directive("uiView", A), H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$timeout"], J.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", H).directive("uiSrefActive", J).directive("uiSrefActiveEq", J).directive("uiState", I), K.$inject = ["$state"], L.$inject = ["$state"], b.module("ui.router.state").filter("isState", K).filter("includedByState", L);
}(window, window.angular);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (z) {
  'use strict';
  function M(a, b) {
    b = b || Error;return function () {
      var d = arguments[0],
          c;c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.1/" + (a ? a + "/" : "") + d;for (d = 1; d < arguments.length; d++) {
        c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";var f = encodeURIComponent,
            e;e = arguments[d];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;c += f(e);
      }return new b(c);
    };
  }function ta(a) {
    if (null == a || Wa(a)) return !1;if (C(a) || E(a) || D && a instanceof D) return !0;var b = "length" in Object(a) && a.length;return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item);
  }function q(a, b, d) {
    var c, f;if (a) if (y(a)) for (c in a) {
      "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else if (C(a) || ta(a)) {
      var e = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (f = a.length; c < f; c++) {
        (e || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (Dc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      va.call(a, c) && b.call(d, a[c], c, a);
    }return a;
  }function Ec(a, b, d) {
    for (var c = Object.keys(a).sort(), f = 0; f < c.length; f++) {
      b.call(d, a[c[f]], c[f]);
    }return c;
  }function Fc(a) {
    return function (b, d) {
      a(d, b);
    };
  }function ie() {
    return ++rb;
  }function Sb(a, b, d) {
    for (var c = a.$$hashKey, f = 0, e = b.length; f < e; ++f) {
      var g = b[f];if (F(g) || y(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];d && F(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Tb(n) ? a[m] = n.clone() : (F(a[m]) || (a[m] = C(n) ? [] : {}), Sb(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function R(a) {
    return Sb(a, wa.call(arguments, 1), !1);
  }function je(a) {
    return Sb(a, wa.call(arguments, 1), !0);
  }function Z(a) {
    return parseInt(a, 10);
  }function Ub(a, b) {
    return R(Object.create(a), b);
  }function w() {}function Ya(a) {
    return a;
  }function ma(a) {
    return function () {
      return a;
    };
  }function Vb(a) {
    return y(a.toString) && a.toString !== na;
  }function x(a) {
    return "undefined" === typeof a;
  }function v(a) {
    return "undefined" !== typeof a;
  }function F(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
  }function Dc(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !Gc(a);
  }function E(a) {
    return "string" === typeof a;
  }function Y(a) {
    return "number" === typeof a;
  }function fa(a) {
    return "[object Date]" === na.call(a);
  }function y(a) {
    return "function" === typeof a;
  }function Xa(a) {
    return "[object RegExp]" === na.call(a);
  }function Wa(a) {
    return a && a.window === a;
  }function Za(a) {
    return a && a.$evalAsync && a.$watch;
  }function Ia(a) {
    return "boolean" === typeof a;
  }function ke(a) {
    return a && Y(a.length) && le.test(na.call(a));
  }function Tb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function me(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }return b;
  }function xa(a) {
    return P(a.nodeName || a[0] && a[0].nodeName);
  }function $a(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function Fa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
          e;if (C(a)) {
        e = 0;for (var f = a.length; e < f; e++) {
          b.push(c(a[e]));
        }
      } else if (Dc(a)) for (e in a) {
        b[e] = c(a[e]);
      } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
        a.hasOwnProperty(e) && (b[e] = c(a[e]));
      } else for (e in a) {
        va.call(a, e) && (b[e] = c(a[e]));
      }d ? b.$$hashKey = d : delete b.$$hashKey;return b;
    }function c(a) {
      if (!F(a)) return a;var b = e.indexOf(a);if (-1 !== b) return g[b];if (Wa(a) || Za(a)) throw Ga("cpws");var b = !1,
          c = f(a);void 0 === c && (c = C(a) ? [] : Object.create(Gc(a)), b = !0);e.push(a);g.push(c);return b ? d(a, c) : c;
    }function f(a) {
      switch (na.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(c(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (y(a.cloneNode)) return a.cloneNode(!0);
    }
    var e = [],
        g = [];if (b) {
      if (ke(b) || "[object ArrayBuffer]" === na.call(b)) throw Ga("cpta");if (a === b) throw Ga("cpi");C(b) ? b.length = 0 : q(b, function (a, d) {
        "$$hashKey" !== d && delete b[d];
      });e.push(a);g.push(b);return d(a, b);
    }return c(a);
  }function qa(a, b) {
    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
        c;if (d === (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" === d) if (C(a)) {
      if (!C(b)) return !1;if ((d = a.length) === b.length) {
        for (c = 0; c < d; c++) {
          if (!qa(a[c], b[c])) return !1;
        }return !0;
      }
    } else {
      if (fa(a)) return fa(b) ? qa(a.getTime(), b.getTime()) : !1;if (Xa(a)) return Xa(b) ? a.toString() === b.toString() : !1;if (Za(a) || Za(b) || Wa(a) || Wa(b) || C(b) || fa(b) || Xa(b)) return !1;d = W();for (c in a) {
        if ("$" !== c.charAt(0) && !y(a[c])) {
          if (!qa(a[c], b[c])) return !1;d[c] = !0;
        }
      }for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !y(b[c])) return !1;
      }return !0;
    }return !1;
  }function ab(a, b, d) {
    return a.concat(wa.call(b, d));
  }function bb(a, b) {
    var d = 2 < arguments.length ? wa.call(arguments, 2) : [];return !y(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function Hc(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && z.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");return d;
  }function cb(a, b) {
    if (!x(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Hc, b);
  }function Ic(a) {
    return E(a) ? JSON.parse(a) : a;
  }function Jc(a, b) {
    a = a.replace(ne, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return ga(d) ? b : d;
  }function Wb(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = Jc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function ya(a) {
    a = D(a).clone();try {
      a.empty();
    } catch (b) {}var d = D("<div>").append(a).html();try {
      return a[0].nodeType === Ja ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
        return "<" + P(b);
      });
    } catch (c) {
      return P(d);
    }
  }function Kc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }function Lc(a) {
    var b = {};q((a || "").split("&"), function (a) {
      var c, f, e;a && (f = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (f = a.substring(0, c), e = a.substring(c + 1)), f = Kc(f), v(f) && (e = v(e) ? Kc(e) : !0, va.call(b, f) ? C(b[f]) ? b[f].push(e) : b[f] = [b[f], e] : b[f] = e));
    });return b;
  }function Xb(a) {
    var b = [];q(a, function (a, c) {
      C(a) ? q(a, function (a) {
        b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
      }) : b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
    });return b.length ? b.join("&") : "";
  }function db(a) {
    return ka(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ka(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function oe(a, b) {
    var d,
        c,
        f = Ka.length;for (c = 0; c < f; ++c) {
      if (d = Ka[c] + b, E(d = a.getAttribute(d))) return d;
    }return null;
  }function pe(a, b) {
    var d,
        c,
        f = {};q(Ka, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });q(Ka, function (b) {
      b += "app";var f;!d && (f = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = f, c = f.getAttribute(b));
    });d && (qe ? (f.strictDi = null !== oe(d, "strict-di"), b(d, c ? [c] : [], f)) : z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
  }function Mc(a, b, d) {
    F(d) || (d = {});d = R({ strictDi: !1 }, d);var c = function c() {
      a = D(a);if (a.injector()) {
        var c = a[0] === z.document ? "document" : ya(a);throw Ga("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);
      b.unshift("ng");c = eb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, d, c) {
        a.$apply(function () {
          b.data("$injector", c);d(b)(a);
        });
      }]);return c;
    },
        f = /^NG_ENABLE_DEBUG_INFO!/,
        e = /^NG_DEFER_BOOTSTRAP!/;z && f.test(z.name) && (d.debugInfoEnabled = !0, z.name = z.name.replace(f, ""));if (z && !e.test(z.name)) return c();z.name = z.name.replace(e, "");$.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });return c();
    };y($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
  }function re() {
    z.name = "NG_ENABLE_DEBUG_INFO!" + z.name;z.location.reload();
  }function se(a) {
    a = $.element(a).injector();if (!a) throw Ga("test");return a.get("$$testability");
  }function Nc(a, b) {
    b = b || "_";return a.replace(te, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function ue() {
    var a;if (!Oc) {
      var b = sb();(oa = x(b) ? __webpack_provided_window_dot_jQuery : b ? z[b] : void 0) && oa.fn.on ? (D = oa, R(oa.fn, { scope: Oa.scope, isolateScope: Oa.isolateScope, controller: Oa.controller, injector: Oa.injector, inheritedData: Oa.inheritedData }), a = oa.cleanData, oa.cleanData = function (b) {
        for (var c, f = 0, e; null != (e = b[f]); f++) {
          (c = oa._data(e, "events")) && c.$destroy && oa(e).triggerHandler("$destroy");
        }a(b);
      }) : D = X;$.element = D;Oc = !0;
    }
  }function fb(a, b, d) {
    if (!a) throw Ga("areq", b || "?", d || "required");return a;
  }function tb(a, b, d) {
    d && C(a) && (a = a[a.length - 1]);fb(y(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }function Pa(a, b) {
    if ("hasOwnProperty" === a) throw Ga("badname", b);
  }function Pc(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, f = a, e = b.length, g = 0; g < e; g++) {
      c = b[g], a && (a = (f = a)[c]);
    }return !d && y(a) ? bb(f, a) : a;
  }function ub(a) {
    for (var b = a[0], d = a[a.length - 1], c, f = 1; b !== d && (b = b.nextSibling); f++) {
      if (c || a[f] !== b) c || (c = D(wa.call(a, 0, f))), c.push(b);
    }return c || a;
  }function W() {
    return Object.create(null);
  }function Yb(a) {
    if (null == a) return "";switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
        break;case "number":
        a = "" + a;break;default:
        a = !Vb(a) || C(a) || fa(a) ? cb(a) : a.toString();}return a;
  }function ve(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = M("$injector"),
        c = M("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || M;return b(a, "module", function () {
      var a = {};return function (e, g, h) {
        if ("hasOwnProperty" === e) throw c("badname", "module");g && a.hasOwnProperty(e) && (a[e] = null);return b(a, e, function () {
          function a(b, d, e, f) {
            f || (f = c);return function () {
              f[e || "push"]([b, d, arguments]);return J;
            };
          }function b(a, d, f) {
            f || (f = c);return function (b, c) {
              c && y(c) && (c.$$moduleName = e);f.push([a, d, arguments]);return J;
            };
          }if (!g) throw d("nomod", e);var c = [],
              f = [],
              p = [],
              r = a("$injector", "invoke", "push", f),
              J = { _invokeQueue: c, _configBlocks: f, _runBlocks: p,
            requires: g, name: e, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator", f), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: r, run: function run(a) {
              p.push(a);return this;
            } };h && r(h);return J;
        });
      };
    });
  }
  function ra(a, b) {
    if (C(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (F(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }return b || a;
  }function we(a) {
    var b = [];return JSON.stringify(a, function (a, c) {
      c = Hc(a, c);if (F(c)) {
        if (0 <= b.indexOf(c)) return "...";b.push(c);
      }return c;
    });
  }function xe(a) {
    R(a, { bootstrap: Mc, copy: Fa, extend: R, merge: je, equals: qa, element: D, forEach: q, injector: eb, noop: w, bind: bb, toJson: cb, fromJson: Ic, identity: Ya, isUndefined: x, isDefined: v, isString: E, isFunction: y,
      isObject: F, isNumber: Y, isElement: Tb, isArray: C, version: ye, isDate: fa, lowercase: P, uppercase: vb, callbacks: { $$counter: 0 }, getTestability: se, reloadWithDebugInfo: re, $$minErr: M, $$csp: za, $$encodeUriSegment: db, $$encodeUriQuery: ka, $$stringify: Yb });Zb = ve(z);Zb("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: ze });a.provider("$compile", Qc).directive({ a: Ae, input: Rc, textarea: Rc, form: Be, script: Ce, select: De, option: Ee, ngBind: Fe, ngBindHtml: Ge, ngBindTemplate: He, ngClass: Ie, ngClassEven: Je, ngClassOdd: Ke,
        ngCloak: Le, ngController: Me, ngForm: Ne, ngHide: Oe, ngIf: Pe, ngInclude: Qe, ngInit: Re, ngNonBindable: Se, ngPluralize: Te, ngRepeat: Ue, ngShow: Ve, ngStyle: We, ngSwitch: Xe, ngSwitchWhen: Ye, ngSwitchDefault: Ze, ngOptions: $e, ngTransclude: af, ngModel: bf, ngList: cf, ngChange: df, pattern: Sc, ngPattern: Sc, required: Tc, ngRequired: Tc, minlength: Uc, ngMinlength: Uc, maxlength: Vc, ngMaxlength: Vc, ngValue: ef, ngModelOptions: ff }).directive({ ngInclude: gf }).directive(wb).directive(Wc);a.provider({ $anchorScroll: hf, $animate: jf, $animateCss: kf, $$animateJs: lf,
        $$animateQueue: mf, $$AnimateRunner: nf, $$animateAsyncRun: of, $browser: pf, $cacheFactory: qf, $controller: rf, $document: sf, $$isDocumentHidden: tf, $exceptionHandler: uf, $filter: Xc, $$forceReflow: vf, $interpolate: wf, $interval: xf, $http: yf, $httpParamSerializer: zf, $httpParamSerializerJQLike: Af, $httpBackend: Bf, $xhrFactory: Cf, $jsonpCallbacks: Df, $location: Ef, $log: Ff, $parse: Gf, $rootScope: Hf, $q: If, $$q: Jf, $sce: Kf, $sceDelegate: Lf, $sniffer: Mf, $templateCache: Nf, $templateRequest: Of, $$testability: Pf, $timeout: Qf, $window: Rf, $$rAF: Sf,
        $$jqLite: Tf, $$HashMap: Uf, $$cookieReader: Vf });
    }]);
  }function gb(a, b) {
    return b.toUpperCase();
  }function xb(a) {
    return a.replace(Wf, gb);
  }function Yc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function Zc(a, b) {
    var d,
        c,
        f = b.createDocumentFragment(),
        e = [];if ($b.test(a)) {
      d = f.appendChild(b.createElement("div"));c = (Xf.exec(a) || ["", ""])[1].toLowerCase();c = ha[c] || ha._default;d.innerHTML = c[1] + a.replace(Yf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
        d = d.lastChild;
      }e = ab(e, d.childNodes);d = f.firstChild;d.textContent = "";
    } else e.push(b.createTextNode(a));
    f.textContent = "";f.innerHTML = "";q(e, function (a) {
      f.appendChild(a);
    });return f;
  }function X(a) {
    if (a instanceof X) return a;var b;E(a) && (a = S(a), b = !0);if (!(this instanceof X)) {
      if (b && "<" !== a.charAt(0)) throw ac("nosel");return new X(a);
    }if (b) {
      b = z.document;var d;a = (d = Zf.exec(a)) ? [b.createElement(d[1])] : (d = Zc(a, b)) ? d.childNodes : [];bc(this, a);
    } else y(a) ? $c(a) : bc(this, a);
  }function cc(a) {
    return a.cloneNode(!0);
  }function yb(a, b) {
    b || hb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, f = d.length; c < f; c++) {
      hb(d[c]);
    }
  }
  function ad(a, b, d, c) {
    if (v(c)) throw ac("offargs");var f = (c = zb(a)) && c.events,
        e = c && c.handle;if (e) if (b) {
      var g = function g(b) {
        var c = f[b];v(d) && $a(c || [], d);v(d) && c && 0 < c.length || (a.removeEventListener(b, e), delete f[b]);
      };q(b.split(" "), function (a) {
        g(a);Ab[a] && g(Ab[a]);
      });
    } else for (b in f) {
      "$destroy" !== b && a.removeEventListener(b, e), delete f[b];
    }
  }function hb(a, b) {
    var d = a.ng339,
        c = d && ib[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ad(a)), delete ib[d], a.ng339 = void 0));
  }function zb(a, b) {
    var d = a.ng339,
        d = d && ib[d];b && !d && (a.ng339 = d = ++$f, d = ib[d] = { events: {}, data: {}, handle: void 0 });return d;
  }function dc(a, b, d) {
    if (Yc(a)) {
      var c,
          f = v(d),
          e = !f && b && !F(b),
          g = !b;a = (a = zb(a, !e)) && a.data;if (f) a[xb(b)] = d;else {
        if (g) return a;if (e) return a && a[xb(b)];for (c in b) {
          a[xb(c)] = b[c];
        }
      }
    }
  }function Bb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Cb(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", S((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")));
    });
  }function Db(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
        a = S(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", S(d));
    }
  }function bc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }function bd(a, b) {
    return Eb(a, "$" + (b || "ngController") + "Controller");
  }function Eb(a, b, d) {
    9 === a.nodeType && (a = a.documentElement);for (b = C(b) ? b : [b]; a;) {
      for (var c = 0, f = b.length; c < f; c++) {
        if (v(d = D.data(a, b[c]))) return d;
      }a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function cd(a) {
    for (yb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }function Fb(a, b) {
    b || yb(a);var d = a.parentNode;d && d.removeChild(a);
  }function ag(a, b) {
    b = b || z;if ("complete" === b.document.readyState) b.setTimeout(a);else D(b).on("load", a);
  }function $c(a) {
    function b() {
      z.document.removeEventListener("DOMContentLoaded", b);z.removeEventListener("load", b);a();
    }"complete" === z.document.readyState ? z.setTimeout(a) : (z.document.addEventListener("DOMContentLoaded", b), z.addEventListener("load", b));
  }function dd(a, b) {
    var d = Gb[b.toLowerCase()];return d && ed[xa(a)] && d;
  }function bg(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };var e = b[_d || c.type],
          g = e ? e.length : 0;if (g) {
        if (x(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var k = e.specialHandlerWrapper || cg;1 < g && (e = ra(e));for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || k(a, c, e[l]);
        }
      }
    };d.elem = a;return d;
  }function cg(a, b, d) {
    d.call(a, b);
  }function dg(a, b, d) {
    var c = b.relatedTarget;c && (c === a || eg.call(a, c)) || d.call(a, b);
  }function Tf() {
    this.$get = function () {
      return R(X, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return Bb(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Db(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Cb(a, b);
        } });
    };
  }function la(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || ie)() : d + ":" + a;
  }function Qa(a, b) {
    if (b) {
      var d = 0;this.nextUid = function () {
        return ++d;
      };
    }q(a, this.put, this);
  }function fd(a) {
    a = (Function.prototype.toString.call(a) + " ").replace(fg, "");return a.match(gg) || a.match(hg);
  }function ig(a) {
    return (a = fd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function eb(a, b) {
    function d(a) {
      return function (b, c) {
        if (F(b)) q(b, Fc(a));else return a(b, c);
      };
    }function c(a, b) {
      Pa(a, "service");if (y(b) || C(b)) b = p.instantiate(b);if (!b.$get) throw da("pget", a);return n[a + "Provider"] = b;
    }function f(a, b) {
      return function () {
        var c = O.invoke(b, this);if (x(c)) throw da("undef", a);return c;
      };
    }function e(a, b, d) {
      return c(a, { $get: !1 !== d ? f(a, b) : b });
    }function g(a) {
      fb(x(a) || C(a), "modulesToLoad", "not an array");var b = [],
          c;q(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            E(a) ? (c = Zb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : y(a) ? b.push(p.invoke(a)) : C(a) ? b.push(p.invoke(a)) : tb(a, "module");
          } catch (e) {
            throw C(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), da("modulerr", a, e.stack || e.message || e);
          }
        }
      });return b;
    }function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw da("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }function e(a, c, f) {
        var g = [];a = eb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw da("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }return g;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);C(a) && (a = a[a.length - 1]);d = a;if (La || "function" !== typeof d) d = !1;else {
            var f = d.$$ngIsClass;
            Ia(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d) + " "));d = f;
          }return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = C(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d, annotate: eb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var k = {},
        l = [],
        m = new Qa([], !0),
        n = { $provide: { provider: d(c), factory: d(e),
        service: d(function (a, b) {
          return e(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return e(a, ma(b), !1);
        }), constant: d(function (a, b) {
          Pa(a, "constant");n[a] = b;r[a] = b;
        }), decorator: function decorator(a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = O.invoke(d, c);return O.invoke(b, null, { $delegate: a });
          };
        } } },
        p = n.$injector = h(n, function (a, b) {
      $.isString(b) && l.push(b);throw da("unpr", l.join(" <- "));
    }),
        r = {},
        J = h(r, function (a, b) {
      var c = p.get(a + "Provider", b);return O.invoke(c.$get, c, void 0, a);
    }),
        O = J;n.$injectorProvider = { $get: ma(J) };var u = g(a),
        O = J.get("$injector");O.strictDi = b;q(u, function (a) {
      a && O.invoke(a);
    });return O;
  }function hf() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function f(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === xa(a)) return b = a, !0;
        });return b;
      }function e(a) {
        if (a) {
          a.scrollIntoView();var c;c = g.yOffset;y(c) ? c = c() : Tb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = E(a) ? a : Y(a) ? a.toString() : d.hash();var b;a ? (b = h.getElementById(a)) ? e(b) : (b = f(h.getElementsByName(a))) ? e(b) : "top" === a && e(null) : e(null);
      }var h = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || ag(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function jb(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;C(a) && (a = a.join(" "));C(b) && (b = b.join(" "));return a + " " + b;
  }function jg(a) {
    E(a) && (a = a.split(" "));var b = W();q(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Aa(a) {
    return F(a) ? a : {};
  }function kg(a, b, d, c) {
    function f(a) {
      try {
        a.apply(null, wa.call(arguments, 1));
      } finally {
        if (J--, 0 === J) for (; O.length;) {
          try {
            O.pop()();
          } catch (b) {
            d.error(b);
          }
        }
      }
    }function e() {
      ia = null;g();h();
    }function g() {
      u = A();u = x(u) ? null : u;qa(u, B) && (u = B);B = u;
    }function h() {
      if (U !== k.url() || H !== u) U = k.url(), H = u, q(K, function (a) {
        a(k.url(), u);
      });
    }var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        r = {};k.isMock = !1;var J = 0,
        O = [];k.$$completeOutstandingRequest = f;k.$$incOutstandingRequestCount = function () {
      J++;
    };k.notifyWhenNoOutstandingRequests = function (a) {
      0 === J ? a() : O.push(a);
    };var u,
        H,
        U = l.href,
        t = b.find("base"),
        ia = null,
        A = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : w;g();H = u;k.url = function (b, d, e) {
      x(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = H === e;if (U === b && (!c.history || f)) return k;var h = U && Ba(U) === Ba(b);U = b;H = e;!c.history || h && f ? (h || (ia = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (ia = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), H = u);ia && (ia = b);return k;
      }return ia || l.href.replace(/%27/g, "'");
    };k.state = function () {
      return u;
    };var K = [],
        I = !1,
        B = null;k.onUrlChange = function (b) {
      if (!I) {
        if (c.history) D(a).on("popstate", e);D(a).on("hashchange", e);I = !0;
      }K.push(b);return b;
    };k.$$applicationDestroyed = function () {
      D(a).off("hashchange popstate", e);
    };k.$$checkUrlChange = h;k.baseHref = function () {
      var a = t.attr("href");return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
    };k.defer = function (a, b) {
      var c;J++;c = n(function () {
        delete r[c];f(a);
      }, b || 0);r[c] = !0;return c;
    };k.defer.cancel = function (a) {
      return r[a] ? (delete r[a], p(a), f(w), !0) : !1;
    };
  }function pf() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new kg(a, c, b, d);
    }];
  }function qf() {
    this.$get = function () {
      function a(a, c) {
        function f(a) {
          a !== n && (p ? p === a && (p = a.n) : p = a, e(a.n, a.p), e(a, n), n = a, n.n = null);
        }function e(a, b) {
          a !== b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw M("$cacheFactory")("iid", a);var g = 0,
            h = R({}, c, { id: a }),
            k = W(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = W(),
            n = null,
            p = null;return b[a] = { put: function put(a, b) {
            if (!x(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });f(c);
              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;f(b);
            }return k[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b === n && (n = b.p);b === p && (p = b.n);e(b.n, b.p);delete m[a];
            }a in k && (delete k[a], g--);
          }, removeAll: function removeAll() {
            k = W();g = 0;m = W();n = p = null;
          }, destroy: function destroy() {
            m = h = k = null;delete b[a];
          }, info: function info() {
            return R({}, h, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};q(b, function (b, f) {
          a[f] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function Nf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }function Qc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = W();q(a, function (a, f) {
        if (a in n) e[f] = n[a];else {
          var g = a.match(d);if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== P(b)) throw ea("baddir", a);if (a !== a.trim()) throw ea("baddir", a);
    }function f(a) {
      var b = a.require || a.controller && a.name;!C(b) && F(b) && q(b, function (a, c) {
        var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
      });return b;
    }var e = {},
        g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
        h = /(([\w-]+)(?::([^;]+))?;?)/,
        k = me("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        n = W();this.directive = function U(b, d) {
      fb(b, "name");Pa(b, "directive");E(b) ? (c(b), fb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];q(e[b], function (e, g) {
          try {
            var h = a.invoke(e);y(h) ? h = { compile: ma(h) } : !h.compile && h.link && (h.compile = ma(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = f(h);var k = h,
                l = h.restrict;if (l && (!E(l) || !/[EACM]/.test(l))) throw ea("badrestrict", l, b);k.restrict = l || "EA";h.$$moduleName = e.$$moduleName;d.push(h);
          } catch (m) {
            c(m);
          }
        });return d;
      }])), e[b].push(d)) : q(b, Fc(U));return this;
    };this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return y(b) || C(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var f = b.template || b.templateUrl ? b.template : "",
            g = { controller: d, controllerAs: lg(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };
        q(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });return g;
      }var d = b.controller || function () {};q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, y(d) && (d[b] = a));
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var p = !0;this.debugInfoEnabled = function (a) {
      return v(a) ? (p = a, this) : p;
    };var r = !1;this.preAssignBindingsEnabled = function (a) {
      return v(a) ? (r = a, this) : r;
    };var J = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (J = a, this) : J;
    };var O = !0;this.commentDirectivesEnabled = function (a) {
      return arguments.length ? (O = a, this) : O;
    };var u = !0;this.cssClassDirectivesEnabled = function (a) {
      return arguments.length ? (u = a, this) : u;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, f, n, I, B, L, N, G) {
      function T() {
        try {
          if (! --za) throw da = void 0, ea("infchng", J);B.$apply(function () {
            for (var a = [], b = 0, c = da.length; b < c; ++b) {
              try {
                da[b]();
              } catch (d) {
                a.push(d);
              }
            }da = void 0;if (a.length) throw a;
          });
        } finally {
          za++;
        }
      }function s(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) {
            f = c[d], this[f] = b[f];
          }
        } else this.$attr = {};this.$$element = a;
      }function Q(a, b, c) {
        ua.innerHTML = "<span " + b + ">";b = ua.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
      }function Ma(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function ba(a, b, c, d, e) {
        a instanceof D || (a = D(a));var f = Na(a, b, a, c, d, e);ba.$$addScopeClass(a);var g = null;return function (b, c, d) {
          if (!a) throw ea("multilink");fb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var h = d.parentBoundTranscludeFn,
              k = d.transcludeControllers;d = d.futureParentElement;h && h.$$boundTransclude && (h = h.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== xa(d) && na.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? D(ha(g, D("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;if (k) for (var l in k) {
            d.data("$" + l + "Controller", k[l].instance);
          }ba.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, h);c || (a = f = null);return d;
        };
      }function Na(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, n, p, r;if (K) for (r = Array(c.length), m = 0; m < h.length; m += 3) {
            f = h[m], r[f] = c[f];
          } else r = c;m = 0;for (n = h.length; m < n;) {
            k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(D(k), l)) : l = a, p = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, void 0, e);
          }
        }for (var h = [], k = C(a) || a instanceof D, l, m, n, p, K, r = 0; r < a.length; r++) {
          l = new s();11 === La && M(a, r, k);m = fc(a[r], [], l, 0 === r ? d : void 0, e);(f = m.length ? X(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(l.$$element);l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || l) h.push(r, f, l), p = !0, K = K || f;f = null;
        }return p ? g : null;
      }function M(a, b, c) {
        var d = a[b],
            e = d.parentNode,
            f;if (d.nodeType === Ja) for (;;) {
          f = e ? d.nextSibling : a[b + 1];if (!f || f.nodeType !== Ja) break;d.nodeValue += f.nodeValue;f.parentNode && f.parentNode.removeChild(f);c && f === a[b + 1] && a.splice(b + 1, 1);
        }
      }function ja(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
        }var e = d.$$slots = W(),
            f;for (f in b.$$slots) {
          e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
        }return d;
      }function fc(a, b, c, d, e) {
        var f = c.$attr,
            g;switch (a.nodeType) {case 1:
            g = xa(a);Y(b, Ca(g), "E", d, e);for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
              var A = !1,
                  B = !1;k = p[K];l = k.name;m = k.value;k = Ca(l);(n = Ha.test(k)) && (l = l.replace(gd, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              }));(k = k.match(Ka)) && Z(k[1]) && (A = l, B = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));k = Ca(l.toLowerCase());f[k] = l;if (n || !c.hasOwnProperty(k)) c[k] = m, dd(a, k) && (c[k] = !0);ra(a, b, m, k, n);Y(b, k, "A", d, e, A, B);
            }"input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");if (!Ga) break;f = a.className;F(f) && (f = f.animVal);if (E(f) && "" !== f) for (; a = h.exec(f);) {
              k = Ca(a[2]), Y(b, k, "C", d, e) && (c[k] = S(a[3])), f = f.substr(a.index + a[0].length);
            }break;case Ja:
            ma(b, a.nodeValue);break;case 8:
            if (!Fa) break;kb(a, b, c, d, e);}b.sort(ka);return b;
      }function kb(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);if (f) {
            var h = Ca(f[1]);Y(b, h, "M", d, e) && (c[h] = S(f[2]));
          }
        } catch (k) {}
      }function hd(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ea("uterdir", b, c);1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return D(d);
      }function id(a, b, c) {
        return function (d, e, f, g, h) {
          e = hd(e[0], b, c);return a(d, e, f, g, h);
        };
      }function gc(a, b, c, d, e, f) {
        var g;return a ? ba(b, c, d, e, f) : function () {
          g || (g = ba(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
        };
      }function X(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = id(a, c, d));a.require = t.require;a.directiveName = L;if (B === t || t.$$isolateScope) a = sa(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = id(b, c, d));b.require = t.require;b.directiveName = L;if (B === t || t.$$isolateScope) b = sa(b, { isolateScope: !0 });k.push(b);
          }
        }function n(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;Za(a) || (d = c, c = b, b = a, a = void 0);U && (e = N);c || (c = U ? L.parent() : L);if (d) {
              var f = l.$$slots[d];if (f) return f(a, b, e, c, Q);if (x(f)) throw ea("noslot", d, ya(L));
            } else return l(a, b, e, c, Q);
          }var p, t, u, G, J, N, T, L;b === f ? (g = d, L = d.$$element) : (L = D(f), g = new s(L, d));J = e;B ? G = e.$new(!0) : K && (J = e.$parent);l && (T = m, T.$$boundTransclude = l, T.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });A && (N = ca(L, g, T, A, G, e, B));B && (ba.$$addScopeInfo(L, G, !0, !(I && (I === B || I === B.$$originalDirective))), ba.$$addScopeClass(L, !0), G.$$isolateBindings = B.$$isolateBindings, t = oa(e, g, G, G.$$isolateBindings, B), t.removeWatches && G.$on("$destroy", t.removeWatches));for (p in N) {
            t = A[p];u = N[p];var Hb = t.$$bindings.bindToController;if (r) {
              u.bindingInfo = Hb ? oa(J, g, u.instance, Hb, t) : {};var O = u();O !== u.instance && (u.instance = O, L.data("$" + t.name + "Controller", O), u.bindingInfo.removeWatches && u.bindingInfo.removeWatches(), u.bindingInfo = oa(J, g, u.instance, Hb, t));
            } else u.instance = u(), L.data("$" + t.name + "Controller", u.instance), u.bindingInfo = oa(J, g, u.instance, Hb, t);
          }q(A, function (a, b) {
            var c = a.require;a.bindToController && !C(c) && F(c) && R(N[b].instance, V(b, c, L, N));
          });q(N, function (a) {
            var b = a.instance;if (y(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }if (y(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }y(b.$doCheck) && (J.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());y(b.$onDestroy) && J.$on("$destroy", function () {
              b.$onDestroy();
            });
          });
          p = 0;for (t = h.length; p < t; p++) {
            u = h[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
          }var Q = e;B && (B.template || null === B.templateUrl) && (Q = G);a && a(Q, f.childNodes, void 0, l);for (p = k.length - 1; 0 <= p; p--) {
            u = k[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
          }q(N, function (a) {
            a = a.instance;y(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var p = -Number.MAX_VALUE, K = l.newScopeDirective, A = l.controllerDirectives, B = l.newIsolateScopeDirective, I = l.templateDirective, u = l.nonTlbTranscludeDirective, J = !1, N = !1, U = l.hasElementTranscludeDirective, G = d.$$element = D(b), t, L, T, O = e, Q, v = !1, Ma = !1, w, z = 0, E = a.length; z < E; z++) {
          t = a[z];var Na = t.$$start,
              M = t.$$end;Na && (G = hd(b, Na, M));T = void 0;if (p > t.priority) break;if (w = t.scope) t.templateUrl || (F(w) ? ($("new/isolated scope", B || K, t, G), B = t) : $("new/isolated scope", B, t, G)), K = K || t;L = t.name;if (!v && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
            for (w = z + 1; v = a[w++];) {
              if (v.transclude && !v.$$tlb || v.replace && (v.templateUrl || v.template)) {
                Ma = !0;break;
              }
            }v = !0;
          }!t.templateUrl && t.controller && (A = A || W(), $("'" + L + "' controller", A[L], t, G), A[L] = t);if (w = t.transclude) if (J = !0, t.$$tlb || ($("transclusion", u, t, G), u = t), "element" === w) U = !0, p = t.priority, T = G, G = d.$$element = D(ba.$$createComment(L, d[L])), b = G[0], la(f, wa.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, O = gc(Ma, T, e, p, g && g.name, { nonTlbTranscludeDirective: u });else {
            var ja = W();if (F(w)) {
              T = [];var P = W(),
                  kb = W();q(w, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;P[a] = b;ja[b] = null;kb[b] = c;
              });q(G.contents(), function (a) {
                var b = P[Ca(xa(a))];
                b ? (kb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a);
              });q(kb, function (a, b) {
                if (!a) throw ea("reqslot", b);
              });for (var ec in ja) {
                ja[ec] && (ja[ec] = gc(Ma, ja[ec], e));
              }
            } else T = D(cc(b)).contents();G.empty();O = gc(Ma, T, e, void 0, void 0, { needsNewScope: t.$$isolateScope || t.$$newScope });O.$$slots = ja;
          }if (t.template) if (N = !0, $("template", I, t, G), I = t, w = y(t.template) ? t.template(G, d) : t.template, w = Ea(w), t.replace) {
            g = t;T = $b.test(w) ? jd(ha(t.templateNamespace, S(w))) : [];b = T[0];if (1 !== T.length || 1 !== b.nodeType) throw ea("tplrt", L, "");
            la(f, G, b);E = { $attr: {} };w = fc(b, [], E);var Y = a.splice(z + 1, a.length - (z + 1));(B || K) && aa(w, B, K);a = a.concat(w).concat(Y);fa(d, E);E = a.length;
          } else G.html(w);if (t.templateUrl) N = !0, $("template", I, t, G), I = t, t.replace && (g = t), n = ga(a.splice(z, a.length - z), G, d, f, J && O, h, k, { controllerDirectives: A, newScopeDirective: K !== t && K, newIsolateScopeDirective: B, templateDirective: I, nonTlbTranscludeDirective: u }), E = a.length;else if (t.compile) try {
            Q = t.compile(G, d, O);var Z = t.$$originalDirective || t;y(Q) ? m(null, bb(Z, Q), Na, M) : Q && m(bb(Z, Q.pre), bb(Z, Q.post), Na, M);
          } catch (da) {
            c(da, ya(G));
          }t.terminal && (n.terminal = !0, p = Math.max(p, t.priority));
        }n.scope = K && !0 === K.scope;n.transcludeOnThisElement = J;n.templateOnThisElement = N;n.transclude = O;l.hasElementTranscludeDirective = U;return n;
      }function V(a, b, c, d) {
        var e;if (E(b)) {
          var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
          }if (!e && !f) throw ea("ctreq", b, a);
        } else if (C(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
          e[g] = V(a, b[g], c, d);
        } else F(b) && (e = {}, q(b, function (b, f) {
          e[f] = V(a, b, c, d);
        }));return e || null;
      }function ca(a, b, c, d, e, f, g) {
        var h = W(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
              n = l.controller;"@" === n && (n = b[l.name]);m = I(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }function aa(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = Ub(a[d], { $$isolateScope: b, $$newScope: c });
        }
      }function Y(b, c, f, g, h, k, l) {
        if (c === h) return null;var m = null;if (e.hasOwnProperty(c)) {
          h = a.get(c + "Directive");for (var n = 0, p = h.length; n < p; n++) {
            if (c = h[n], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(f)) {
              k && (c = Ub(c, { $$start: k, $$end: l }));if (!c.$$bindings) {
                var K = m = c,
                    r = c.name,
                    A = { isolateScope: null, bindToController: null };F(K.scope) && (!0 === K.bindToController ? (A.bindToController = d(K.scope, r, !0), A.isolateScope = {}) : A.isolateScope = d(K.scope, r, !1));F(K.bindToController) && (A.bindToController = d(K.bindToController, r, !0));if (A.bindToController && !K.controller) throw ea("noctrl", r);m = m.$$bindings = A;F(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
              }b.push(c);m = c;
            }
          }
        }return m;
      }function Z(b) {
        if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) {
          if (b = c[d], b.multiElement) return !0;
        }return !1;
      }function fa(a, b) {
        var c = b.$attr,
            d = a.$attr;q(a, function (d, e) {
          "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
        });q(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }
      function ga(a, b, d, e, g, h, k, l) {
        var m = [],
            n,
            p,
            K = b[0],
            r = a.shift(),
            u = Ub(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
            t = y(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
            B = r.templateNamespace;b.empty();f(t).then(function (c) {
          var f, A;c = Ea(c);if (r.replace) {
            c = $b.test(c) ? jd(ha(B, S(c))) : [];f = c[0];if (1 !== c.length || 1 !== f.nodeType) throw ea("tplrt", r.name, t);c = { $attr: {} };la(e, b, f);var I = fc(f, [], c);F(r.scope) && aa(I, !0);a = I.concat(a);fa(d, c);
          } else f = K, b.html(c);a.unshift(u);n = X(a, f, d, g, b, r, h, k, l);q(e, function (a, c) {
            a === f && (e[c] = b[0]);
          });for (p = Na(b[0].childNodes, g); m.length;) {
            c = m.shift();A = m.shift();var G = m.shift(),
                J = m.shift(),
                I = b[0];if (!c.$$destroyed) {
              if (A !== K) {
                var N = A.className;l.hasElementTranscludeDirective && r.replace || (I = cc(f));la(G, D(A), I);Ma(D(I), N);
              }A = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J;n(p, c, I, e, A);
            }
          }m = null;
        }).catch(function (a) {
          a instanceof Error && c(a);
        }).catch(w);return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude, e)), n(p, b, c, d, a)));
        };
      }function ka(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function $(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
      }function ma(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && ba.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || ba.$$addBindingClass(e);ba.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function ha(a, b) {
        a = P(a || "html");switch (a) {case "svg":case "math":
            var c = z.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function pa(a, b) {
        if ("srcdoc" === b) return L.HTML;var c = xa(a);if ("src" === b || "ngSrc" === b) {
          if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return L.RESOURCE_URL;
        } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return L.RESOURCE_URL;
      }function ra(a, c, d, e, f) {
        var g = pa(a, e),
            h = k[e] || f,
            l = b(d, !f, g, h);if (l) {
          if ("multiple" === e && "select" === xa(a)) throw ea("selmulti", ya(a));if (m.test(e)) throw ea("nodomevents");c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, f) {
                  c = f.$$observers || (f.$$observers = W());var k = f[e];k !== d && (l = k && b(k, !0, g, h), d = k);l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                    "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
                  }));
                } };
            } });
        }
      }function la(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) {
          if (a[g] === d) {
            a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
              h < k ? a[g] = a[h] : delete a[g];
            }a.length -= e - 1;a.context === d && (a.context = c);break;
          }
        }f && f.replaceChild(c, d);a = z.document.createDocumentFragment();for (g = 0; g < e; g++) {
          a.appendChild(b[g]);
        }D.hasData(d) && (D.data(c, D.data(d)), D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
          delete b[g];
        }b[0] = c;b.length = 1;
      }function sa(a, b) {
        return R(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function ta(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, ya(d));
        }
      }function oa(a, c, d, e, f) {
        function g(b, c, e) {
          !y(d.$onChanges) || c === e || c !== c && e !== e || (da || (a.$$postDigest(T), da = []), m || (m = {}, da.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c));
        }function h() {
          d.$onChanges(m);m = void 0;
        }var k = [],
            l = {},
            m;q(e, function (e, h) {
          var m = e.attrName,
              p = e.optional,
              r,
              A,
              u,
              B;switch (e.mode) {case "@":
              p || va.call(c, m) || (d[h] = c[m] = void 0);p = c.$observe(m, function (a) {
                if (E(a) || Ia(a)) g(h, a, d[h]), d[h] = a;
              });c.$$observers[m].$$scope = a;r = c[m];E(r) ? d[h] = b(r)(a) : Ia(r) && (d[h] = r);l[h] = new Ib(hc, d[h]);k.push(p);break;case "=":
              if (!va.call(c, m)) {
                if (p) break;c[m] = void 0;
              }if (p && !c[m]) break;A = n(c[m]);B = A.literal ? qa : function (a, b) {
                return a === b || a !== a && b !== b;
              };u = A.assign || function () {
                r = d[h] = A(a);throw ea("nonassign", c[m], m, f.name);
              };r = d[h] = A(a);p = function p(b) {
                B(b, d[h]) || (B(b, r) ? u(a, b = d[h]) : d[h] = b);return r = b;
              };p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, A.literal);k.push(p);break;case "<":
              if (!va.call(c, m)) {
                if (p) break;
                c[m] = void 0;
              }if (p && !c[m]) break;A = n(c[m]);var I = A.literal,
                  G = d[h] = A(a);l[h] = new Ib(hc, d[h]);p = a.$watch(A, function (a, b) {
                if (b === a) {
                  if (b === G || I && qa(b, G)) return;b = G;
                }g(h, a, b);d[h] = a;
              }, I);k.push(p);break;case "&":
              A = c.hasOwnProperty(m) ? n(c[m]) : w;if (A === w && p) break;d[h] = function (b) {
                return A(a, b);
              };}
        });return { initialChanges: l, removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) {
              k[a]();
            }
          } };
      }var Da = /^\w/,
          ua = z.document.createElement("div"),
          Fa = O,
          Ga = u,
          za = J,
          da;s.prototype = { $normalize: Ca, $addClass: function $addClass(a) {
          a && 0 < a.length && N.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && N.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = kd(a, b);c && c.length && N.addClass(this.$$element, c);(c = kd(b, a)) && c.length && N.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = dd(this.$$element[0], a),
              g = ld[a],
              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Nc(a, "-"));f = xa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = G(b, "src" === a);else if ("img" === f && "srcset" === a && v(b)) {
            for (var f = "", g = S(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
              var m = 2 * l,
                  f = f + G(S(g[m]), !0),
                  f = f + (" " + S(g[m + 1]));
            }g = S(g[2 * l]).split(/\s/);f += G(S(g[0]), !0);2 === g.length && (f += " " + S(g[1]));this[a] = b = f;
          }!1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Da.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = W()),
              e = d[a] || (d[a] = []);e.push(b);B.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
          });return function () {
            $a(e, b);
          };
        } };var Aa = b.startSymbol(),
          Ba = b.endSymbol(),
          Ea = "{{" === Aa && "}}" === Ba ? Ya : function (a) {
        return a.replace(/\{\{/g, Aa).replace(/}}/g, Ba);
      },
          Ha = /^ngAttr[A-Z]/,
          Ka = /^(.+)Start$/;ba.$$addBindingInfo = p ? function (a, b) {
        var c = a.data("$binding") || [];C(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : w;ba.$$addBindingClass = p ? function (a) {
        Ma(a, "ng-binding");
      } : w;ba.$$addScopeInfo = p ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : w;ba.$$addScopeClass = p ? function (a, b) {
        Ma(a, b ? "ng-isolate-scope" : "ng-scope");
      } : w;ba.$$createComment = function (a, b) {
        var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return z.document.createComment(c);
      };return ba;
    }];
  }function Ib(a, b) {
    this.previousValue = a;this.currentValue = b;
  }function Ca(a) {
    return a.replace(gd, "").replace(mg, gb);
  }function kd(a, b) {
    var d = "",
        c = a.split(/\s+/),
        f = b.split(/\s+/),
        e = 0;a: for (; e < c.length; e++) {
      for (var g = c[e], h = 0; h < f.length; h++) {
        if (g === f[h]) continue a;
      }d += (0 < d.length ? " " : "") + g;
    }return d;
  }function jd(a) {
    a = D(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
      var d = a[b];(8 === d.nodeType || d.nodeType === Ja && "" === d.nodeValue.trim()) && ng.call(a, b, 1);
    }return a;
  }function lg(a, b) {
    if (b && E(b)) return b;if (E(a)) {
      var d = md.exec(a);if (d) return d[3];
    }
  }function rf() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Pa(b, "controller");F(b) ? R(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function f(a, b, c, d) {
        if (!a || !F(a.$scope)) throw M("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (e, g, h, k) {
        var l, m, n;h = !0 === h;k && E(k) && (n = k);if (E(e)) {
          k = e.match(md);if (!k) throw nd("ctrlfmt", e);m = k[1];n = n || k[3];e = a.hasOwnProperty(m) ? a[m] : Pc(g.$scope, m, !0) || (b ? Pc(c, m, !0) : void 0);if (!e) throw nd("ctrlreg", m);tb(e, m, !0);
        }if (h) return h = (C(e) ? e[e.length - 1] : e).prototype, l = Object.create(h || null), n && f(g, n, l, m || e.name), R(function () {
          var a = d.invoke(e, l, g, m);a !== l && (F(a) || y(a)) && (l = a, n && f(g, n, l, m || e.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(e, g, m);n && f(g, n, l, m || e.name);return l;
      };
    }];
  }function sf() {
    this.$get = ["$window", function (a) {
      return D(a.document);
    }];
  }function tf() {
    this.$get = ["$document", "$rootScope", function (a, b) {
      function d() {
        f = c.hidden;
      }var c = a[0],
          f = c && c.hidden;a.on("visibilitychange", d);b.$on("$destroy", function () {
        a.off("visibilitychange", d);
      });return function () {
        return f;
      };
    }];
  }function uf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function ic(a) {
    return F(a) ? fa(a) ? a.toISOString() : cb(a) : a;
  }function zf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];Ec(a, function (a, c) {
          null === a || x(a) || (C(a) ? q(a, function (a) {
            b.push(ka(c) + "=" + ka(ic(a)));
          }) : b.push(ka(c) + "=" + ka(ic(a))));
        });return b.join("&");
      };
    };
  }function Af() {
    this.$get = function () {
      return function (a) {
        function b(a, f, e) {
          null === a || x(a) || (C(a) ? q(a, function (a, c) {
            b(a, f + "[" + (F(a) ? c : "") + "]");
          }) : F(a) && !fa(a) ? Ec(a, function (a, c) {
            b(a, f + (e ? "" : "[") + c + (e ? "" : "]"));
          }) : d.push(ka(f) + "=" + ka(ic(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function jc(a, b) {
    if (E(a)) {
      var d = a.replace(og, "").trim();if (d) {
        var c = b("Content-Type");(c = c && 0 === c.indexOf(od)) || (c = (c = d.match(pg)) && qg[c[0]].test(d));c && (a = Ic(d));
      }
    }return a;
  }function pd(a) {
    var b = W(),
        d;E(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");var f = P(S(a.substr(0, d)));a = S(a.substr(d + 1));f && (b[f] = b[f] ? b[f] + ", " + a : a);
    }) : F(a) && q(a, function (a, d) {
      var e = P(d),
          g = S(a);e && (b[e] = b[e] ? b[e] + ", " + g : g);
    });return b;
  }function qd(a) {
    var b;return function (d) {
      b || (b = pd(a));return d ? (d = b[P(d)], void 0 === d && (d = null), d) : b;
    };
  }function rd(a, b, d, c) {
    if (y(c)) return c(a, b, d);q(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function yf() {
    var a = this.defaults = { transformResponse: [jc], transformRequest: [function (a) {
        return F(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? cb(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ra(kc), put: ra(kc),
        patch: ra(kc) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer", jsonpCallbackParam: "callback" },
        b = !1;this.useApplyAsync = function (a) {
      return v(a) ? (b = !!a, this) : b;
    };var d = this.interceptors = [];this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, f, e, g, h, k, l, m) {
      function n(b) {
        function d(a, b) {
          for (var c = 0, e = b.length; c < e;) {
            var f = b[c++],
                g = b[c++];a = a.then(f, g);
          }b.length = 0;return a;
        }function e(a, b) {
          var c,
              d = {};q(a, function (a, e) {
            y(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }function f(a) {
          var b = R({}, a);b.data = rd(a.data, a.headers, a.status, g.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
        }if (!F(b)) throw M("$http")("badreq", b);if (!E(m.valueOf(b.url))) throw M("$http")("badreq", b.url);var g = R({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer, jsonpCallbackParam: a.jsonpCallbackParam }, b);g.headers = function (b) {
          var c = a.headers,
              d = R({}, b.headers),
              f,
              g,
              h,
              c = R({}, c.common, c[P(b.method)]);a: for (f in c) {
            g = P(f);for (h in d) {
              if (P(h) === g) continue a;
            }d[f] = c[f];
          }return e(d, ra(b));
        }(b);g.method = vb(g.method);g.paramSerializer = E(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;c.$$incOutstandingRequestCount();var h = [],
            n = [];b = k.resolve(g);q(u, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);(a.response || a.responseError) && n.push(a.response, a.responseError);
        });b = d(b, h);b = b.then(function (b) {
          var c = b.headers,
              d = rd(b.data, qd(c), void 0, b.transformRequest);x(d) && q(c, function (a, b) {
            "content-type" === P(b) && delete c[b];
          });x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);return p(b, d).then(f, f);
        });b = d(b, n);return b = b.finally(function () {
          c.$$completeOutstandingRequest(w);
        });
      }function p(c, d) {
        function g(a) {
          if (a) {
            var c = {};q(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });return c;
          }
        }function l(a, c, d, e) {
          function f() {
            p(c, a, d, e);
          }N && (200 <= a && 300 > a ? N.put(Q, [a, c, pd(d), e]) : N.remove(Q));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }function p(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? B.resolve : B.reject)({ data: a, status: b, headers: qd(d), config: c, statusText: e });
        }function K(a) {
          p(a.data, a.status, ra(a.headers()), a.statusText);
        }function u() {
          var a = n.pendingRequests.indexOf(c);-1 !== a && n.pendingRequests.splice(a, 1);
        }var B = k.defer(),
            L = B.promise,
            N,
            G,
            T = c.headers,
            s = "jsonp" === P(c.method),
            Q = c.url;s ? Q = m.getTrustedResourceUrl(Q) : E(Q) || (Q = m.valueOf(Q));Q = r(Q, c.paramSerializer(c.params));s && (Q = J(Q, c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u, u);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(a.cache) ? a.cache : O);N && (G = N.get(Q), v(G) ? G && y(G.then) ? G.then(K, K) : C(G) ? p(G[1], G[0], ra(G[2]), G[3]) : p(G, 200, {}, "OK") : N.put(Q, L));x(G) && ((G = sd(c.url) ? e()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = G), f(c.method, Q, d, l, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return L;
      }function r(a, b) {
        0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);return a;
      }function J(a, b) {
        if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw td("badjsonp", a);if (new RegExp("[&?]" + b + "=").test(a)) throw td("badjsonp", b, a);return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
      }var O = g("$http");a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var u = [];q(d, function (a) {
        u.unshift(E(a) ? l.get(a) : l.invoke(a));
      });n.pendingRequests = [];(function (a) {
        q(arguments, function (a) {
          n[a] = function (b, c) {
            return n(R({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        q(arguments, function (a) {
          n[a] = function (b, c, d) {
            return n(R({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");n.defaults = a;return n;
    }];
  }function Cf() {
    this.$get = function () {
      return function () {
        return new z.XMLHttpRequest();
      };
    };
  }function Bf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return rg(a, c, a.defer, b, d[0]);
    }];
  }function rg(a, b, d, c, f) {
    function e(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);var e = f.createElement("script"),
          _m = null;e.type = "text/javascript";e.src = a;e.async = !0;_m = function m(a) {
        e.removeEventListener("load", _m);e.removeEventListener("error", _m);f.body.removeChild(e);e = null;var g = -1,
            r = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), r = a.type, g = "error" === a.type ? 404 : 200);d && d(g, r);
      };e.addEventListener("load", _m);e.addEventListener("error", _m);f.body.appendChild(e);return _m;
    }return function (f, h, k, l, m, n, p, r, J, O) {
      function u() {
        U && U();t && t.abort();
      }h = h || a.url();if ("jsonp" === P(f)) var H = c.createCallback(h),
          U = e(h, H, function (a, b) {
        var e = 200 === a && c.getResponse(H);v(A) && d.cancel(A);U = t = null;l(a, e, "", b);c.removeCallback(H);
      });else {
        var t = b(f, h);t.open(f, h, !0);q(m, function (a, b) {
          v(a) && t.setRequestHeader(b, a);
        });t.onload = function () {
          var a = t.statusText || "",
              b = "response" in t ? t.response : t.responseText,
              c = 1223 === t.status ? 204 : t.status;0 === c && (c = b ? 200 : "file" === Da(h).protocol ? 404 : 0);var e = t.getAllResponseHeaders();v(A) && d.cancel(A);U = t = null;l(c, b, e, a);
        };f = function f() {
          v(A) && d.cancel(A);U = t = null;l(-1, null, null, "");
        };t.onerror = f;t.onabort = f;t.ontimeout = f;q(J, function (a, b) {
          t.addEventListener(b, a);
        });q(O, function (a, b) {
          t.upload.addEventListener(b, a);
        });p && (t.withCredentials = !0);if (r) try {
          t.responseType = r;
        } catch (s) {
          if ("json" !== r) throw s;
        }t.send(x(k) ? null : k);
      }if (0 < n) var A = d(u, n);else n && y(n.then) && n.then(u);
    };
  }function wf() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, f) {
      function e(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(p, b);
      }function h(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);return e;
      }function k(e, k, n, p) {
        function H(a) {
          try {
            var b = a;a = n ? f.getTrusted(n, b) : f.valueOf(b);return p && !v(a) ? a : Yb(a);
          } catch (d) {
            c(Ea.interr(e, d));
          }
        }if (!e.length || -1 === e.indexOf(a)) {
          var q;k || (k = g(e), q = ma(k), q.exp = e, q.expressions = [], q.$$watchDelegate = h);return q;
        }p = !!p;var t,
            s,
            A = 0,
            K = [],
            I = [];q = e.length;for (var B = [], L = []; A < q;) {
          if (-1 !== (t = e.indexOf(a, A)) && -1 !== (s = e.indexOf(b, t + l))) A !== t && B.push(g(e.substring(A, t))), A = e.substring(t + l, s), K.push(A), I.push(d(A, H)), A = s + m, L.push(B.length), B.push("");else {
            A !== q && B.push(g(e.substring(A)));break;
          }
        }n && 1 < B.length && Ea.throwNoconcat(e);if (!k || K.length) {
          var N = function N(a) {
            for (var b = 0, c = K.length; b < c; b++) {
              if (p && x(a[b])) return;B[L[b]] = a[b];
            }return B.join("");
          };return R(function (a) {
            var b = 0,
                d = K.length,
                f = Array(d);try {
              for (; b < d; b++) {
                f[b] = I[b](a);
              }return N(f);
            } catch (g) {
              c(Ea.interr(e, g));
            }
          }, { exp: e, expressions: K, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(I, function (d, e) {
                var f = N(d);y(b) && b.call(this, f, d !== e ? c : f, a);c = f;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, e), "g"),
          p = new RegExp(b.replace(/./g, e), "g");k.startSymbol = function () {
        return a;
      };k.endSymbol = function () {
        return b;
      };return k;
    }];
  }function xf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, f) {
      function e(e, k, l, m) {
        function n() {
          p ? e.apply(null, r) : e(u);
        }var p = 4 < arguments.length,
            r = p ? wa.call(arguments, 4) : [],
            J = b.setInterval,
            q = b.clearInterval,
            u = 0,
            H = v(m) && !m,
            U = (H ? c : d).defer(),
            t = U.promise;l = v(l) ? l : 0;t.$$intervalId = J(function () {
          H ? f.defer(n) : a.$evalAsync(n);U.notify(u++);0 < l && u >= l && (U.resolve(u), q(t.$$intervalId), delete g[t.$$intervalId]);H || a.$apply();
        }, k);g[t.$$intervalId] = U;return t;
      }var g = {};e.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(w), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return e;
    }];
  }function lc(a) {
    a = a.split("/");for (var b = a.length; b--;) {
      a[b] = db(a[b]);
    }return a.join("/");
  }function ud(a, b) {
    var d = Da(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || sg[d.protocol] || null;
  }function vd(a, b) {
    if (tg.test(a)) throw lb("badpath", a);var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = Da(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Lc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function mc(a, b) {
    return a.slice(0, b.length) === b;
  }function sa(a, b) {
    if (mc(b, a)) return b.substr(a.length);
  }function Ba(a) {
    var b = a.indexOf("#");return -1 === b ? a : a.substr(0, b);
  }function mb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function nc(a, b, d) {
    this.$$html5 = !0;d = d || "";ud(a, this);this.$$parse = function (a) {
      var d = sa(b, a);if (!E(d)) throw lb("ipthprfx", a, b);vd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Xb(this.$$search),
          d = this.$$hash ? "#" + db(this.$$hash) : "";this.$$url = lc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (c, f) {
      if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;var e, g;v(e = sa(a, c)) ? (g = e, g = d && v(e = sa(d, e)) ? b + (sa("/", e) || e) : a + g) : v(e = sa(b, c)) ? g = b + e : b === c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function oc(a, b, d) {
    ud(a, this);this.$$parse = function (c) {
      var f = sa(a, c) || sa(b, c),
          e;x(f) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", x(f) && (a = c, this.replace())) : (e = sa(d, f), x(e) && (e = f));vd(e, this);c = this.$$path;var f = a,
          g = /^\/[A-Z]:(\/.*)/;mc(e, f) && (e = e.replace(f, ""));g.exec(e) || (c = (e = g.exec(c)) ? e[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = Xb(this.$$search),
          f = this.$$hash ? "#" + db(this.$$hash) : "";this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };this.$$parseLinkUrl = function (b, d) {
      return Ba(a) === Ba(b) ? (this.$$parse(b), !0) : !1;
    };
  }function wd(a, b, d) {
    this.$$html5 = !0;oc.apply(this, arguments);this.$$parseLinkUrl = function (c, f) {
      if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;var e, g;a === Ba(c) ? e = c : (g = sa(b, c)) ? e = a + d + g : b === c + "/" && (e = b);e && this.$$parse(e);return !!e;
    };this.$$compose = function () {
      var b = Xb(this.$$search),
          f = this.$$hash ? "#" + db(this.$$hash) : "";this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;this.$$absUrl = a + d + this.$$url;
    };
  }function Jb(a) {
    return function () {
      return this[a];
    };
  }function xd(a, b) {
    return function (d) {
      if (x(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function Ef() {
    var a = "!",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return v(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      if (Ia(a)) return b.enabled = a, this;if (F(a)) {
        Ia(a.enabled) && (b.enabled = a.enabled);Ia(a.requireBase) && (b.requireBase = a.requireBase);if (Ia(a.rewriteLinks) || E(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;return this;
      }return b;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, f, e, g) {
      function h(a, b, d) {
        var e = l.url(),
            f = l.$$state;try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }var l, m;m = c.baseHref();
      var n = c.url(),
          p;if (b.enabled) {
        if (!m && b.requireBase) throw lb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = f.history ? nc : wd;
      } else p = Ba(n), m = oc;var r = p.substr(0, Ba(p).lastIndexOf("/") + 1);l = new m(p, r, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var J = /^\s*(javascript|mailto):/i;e.on("click", function (a) {
        var f = b.rewriteLinks;if (f && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
          for (var h = D(a.target); "a" !== xa(h[0]);) {
            if (h[0] === e[0] || !(h = h.parent())[0]) return;
          }if (!E(f) || !x(h.attr(f))) {
            var f = h.prop("href"),
                k = h.attr("href") || h.attr("xlink:href");F(f) && "[object SVGAnimatedString]" === f.toString() && (f = Da(f.animVal).href);J.test(f) || !f || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(f, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
          }
        }
      });mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);var q = !0;c.onUrlChange(function (a, b) {
        mc(a, r) ? (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;a = mb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
        }), d.$$phase || d.$digest()) : g.location.href = a;
      });d.$watch(function () {
        var a = mb(c.url()),
            b = mb(l.absUrl()),
            e = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && f.history && e !== l.$$state;if (q || m) q = !1, d.$evalAsync(function () {
          var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, e).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = e) : (m && h(b, g, e === l.$$state ? null : l.$$state), k(a, e)));
        });l.$$replace = !1;
      });return l;
    }];
  }function Ff() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return v(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function f(a) {
        var b = d.console || {},
            f = b[a] || b.log || w;a = !1;try {
          a = !!f.apply;
        } catch (k) {}return a ? function () {
          var a = [];q(arguments, function (b) {
            a.push(c(b));
          });
          return f.apply(b, a);
        } : function (a, b) {
          f(a, null == b ? "" : b);
        };
      }return { log: f("log"), info: f("info"), warn: f("warn"), error: f("error"), debug: function () {
          var c = f("debug");return function () {
            a && c.apply(b, arguments);
          };
        }() };
    }];
  }function ug(a) {
    return a + "";
  }function vg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function yd(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function V(a, b) {
    var d, c, f;switch (a.type) {case s.Program:
        d = !0;q(a.body, function (a) {
          V(a.expression, b);d = d && a.expression.constant;
        });a.constant = d;break;
      case s.Literal:
        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
        V(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
        V(a.test, b);V(a.alternate, b);V(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
        V(a.object, b);a.computed && V(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
        d = f = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = f ? c : [a];
        break;case s.AssignmentExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
        d = !0;c = [];q(a.elements, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
        d = !0;c = [];q(a.properties, function (a) {
          V(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function zd(a) {
    if (1 === a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }function Ad(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }function Bd(a) {
    if (1 === a.body.length && Ad(a.body[0].expression)) return { type: s.AssignmentExpression, left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
  }function Cd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
  }function Dd(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function Ed(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function pc(a) {
    return y(a.valueOf) ? a.valueOf() : wg.call(a);
  }function Gf() {
    var a = W(),
        b = { "true": !0, "false": !1, "null": null, undefined: void 0 },
        d,
        c;this.addLiteral = function (a, c) {
      b[a] = c;
    };this.setIdentifierFns = function (a, b) {
      d = a;c = b;return this;
    };this.$get = ["$filter", function (f) {
      function e(a, b) {
        return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = pc(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
      }function g(a, b, c, d, f) {
        var g = d.inputs,
            h;if (1 === g.length) {
          var k = e,
              g = g[0];return a.$watch(function (a) {
            var b = g(a);e(b, k) || (h = d(a, void 0, void 0, [b]), k = b && pc(b));return h;
          }, b, c, f);
        }for (var l = [], m = [], n = 0, I = g.length; n < I; n++) {
          l[n] = e, m[n] = null;
        }return a.$watch(function (a) {
          for (var b = !1, c = 0, f = g.length; c < f; c++) {
            var k = g[c](a);if (b || (b = !e(k, l[c]))) m[c] = k, l[c] = k && pc(k);
          }b && (h = d(a, void 0, void 0, m));return h;
        }, b, c, f);
      }function h(a, b, c, d, e) {
        function f(a) {
          return d(a);
        }function h(a, c, d) {
          l = a;y(b) && b(a, c, d);v(a) && d.$$postDigest(function () {
            v(l) && k();
          });
        }var k, l;return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c);
      }function k(a, b, c, d) {
        function e(a) {
          var b = !0;q(a, function (a) {
            v(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;y(b) && b(a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function l(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);return e;
      }function m(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            c = c !== k && c !== h ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);c = b(e, c, d);return v(e) ? c : e;
        },
            d = !a.inputs;a.$$watchDelegate && a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [a]);return c;
      }var n = { csp: za().noUnsafeEval, literals: Fa(b), isIdentifierStart: y(d) && d, isIdentifierContinue: y(c) && c };return function (b, c) {
        var d, e, u;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "string":
            return u = b = b.trim(), d = a[u], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (e = !0, b = b.substring(2)), d = new qc(n), d = new rc(d, f, n).parse(b), d.constant ? d.$$watchDelegate = l : e ? d.$$watchDelegate = d.literal ? k : h : d.inputs && (d.$$watchDelegate = g), a[u] = d), m(d, c);case "function":
            return m(b, c);default:
            return m(w, c);}
      };
    }];
  }function If() {
    var a = !0;this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
      return Fd(function (a) {
        b.$evalAsync(a);
      }, d, a);
    }];this.errorOnUnhandledRejections = function (b) {
      return v(b) ? (a = b, this) : a;
    };
  }function Jf() {
    var a = !0;this.$get = ["$browser", "$exceptionHandler", function (b, d) {
      return Fd(function (a) {
        b.defer(a);
      }, d, a);
    }];this.errorOnUnhandledRejections = function (b) {
      return v(b) ? (a = b, this) : a;
    };
  }function Fd(a, b, d) {
    function c() {
      return new f();
    }function f() {
      var a = this.promise = new e();this.resolve = function (b) {
        k(a, b);
      };this.reject = function (b) {
        m(a, b);
      };this.notify = function (b) {
        p(a, b);
      };
    }function e() {
      this.$$state = { status: 0 };
    }function g() {
      for (; !v && t.length;) {
        var a = t.shift();if (!a.pur) {
          a.pur = !0;var c = a.value,
              c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" !== typeof c ? we(c) : c);a.value instanceof Error ? b(a.value, c) : b(c);
        }
      }
    }function h(b) {
      !d || b.pending || 2 !== b.status || b.pur || (0 === v && 0 === t.length && a(g), t.push(b));!b.processScheduled && b.pending && (b.processScheduled = !0, ++v, a(function () {
        var c, e, f;f = b.pending;b.processScheduled = !1;b.pending = void 0;try {
          for (var h = 0, l = f.length; h < l; ++h) {
            b.pur = !0;e = f[h][0];c = f[h][b.status];try {
              y(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value);
            } catch (n) {
              m(e, n);
            }
          }
        } finally {
          --v, d && 0 === v && a(g);
        }
      }));
    }function k(a, b) {
      a.$$state.status || (b === a ? n(a, H("qcycle", b)) : l(a, b));
    }function l(a, b) {
      function c(b) {
        g || (g = !0, l(a, b));
      }function d(b) {
        g || (g = !0, n(a, b));
      }function e(b) {
        p(a, b);
      }var f,
          g = !1;try {
        if (F(b) || y(b)) f = b.then;y(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state));
      } catch (k) {
        d(k);
      }
    }function m(a, b) {
      a.$$state.status || n(a, b);
    }function n(a, b) {
      a.$$state.value = b;a.$$state.status = 2;h(a.$$state);
    }function p(c, d) {
      var e = c.$$state.pending;0 >= c.$$state.status && e && e.length && a(function () {
        for (var a, c, f = 0, g = e.length; f < g; f++) {
          c = e[f][0];a = e[f][3];try {
            p(c, y(a) ? a(d) : d);
          } catch (h) {
            b(h);
          }
        }
      });
    }function r(a) {
      var b = new e();m(b, a);return b;
    }function J(a, b, c) {
      var d = null;try {
        y(c) && (d = c());
      } catch (e) {
        return r(e);
      }return d && y(d.then) ? d.then(function () {
        return b(a);
      }, r) : b(a);
    }function s(a, b, c, d) {
      var f = new e();k(f, a);return f.then(b, c, d);
    }function u(a) {
      if (!y(a)) throw H("norslvr", a);var b = new e();a(function (a) {
        k(b, a);
      }, function (a) {
        m(b, a);
      });return b;
    }var H = M("$q", TypeError),
        v = 0,
        t = [];R(e.prototype, { then: function then(a, b, c) {
        if (x(a) && x(b) && x(c)) return this;var d = new e();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && h(this.$$state);return d;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return J(b, w, a);
        }, function (b) {
          return J(b, r, a);
        }, b);
      } });var w = s;u.prototype = e.prototype;u.defer = c;u.reject = r;u.when = s;u.resolve = w;u.all = function (a) {
      var b = new e(),
          c = 0,
          d = C(a) ? [] : {};q(a, function (a, e) {
        c++;s(a).then(function (a) {
          d[e] = a;--c || k(b, d);
        }, function (a) {
          m(b, a);
        });
      });0 === c && k(b, d);return b;
    };u.race = function (a) {
      var b = c();q(a, function (a) {
        s(a).then(b.resolve, b.reject);
      });return b.promise;
    };return u;
  }function Sf() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          f = !!d,
          e = f ? function (a) {
        var b = d(a);return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);return function () {
          b.cancel(c);
        };
      };e.supported = f;return e;
    }];
  }function Hf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++rb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = M("$rootScope"),
        c = null,
        f = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === La && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++rb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (H.$$phase) throw d("inprog", H.$$phase);H.$$phase = a;
      }function p(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }function r(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }function J() {}function s() {
        for (; ia.length;) {
          try {
            ia.shift()();
          } catch (a) {
            e(a);
          }
        }f = null;
      }function u() {
        null === f && (f = h.defer(function () {
          H.$apply(s);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
          d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c !== this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: J, get: f, exp: e || a, eq: !!d };c = null;y(b) || (l.fn = w);k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);k.unshift(l);k.$$digestWatchIndex++;p(this, 1);return function () {
            var a = $a(k, l);0 <= a && (p(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;if (!a.length) {
            var l = !0;g.$evalAsync(function () {
              l && b(e, e, g);
            });return function () {
              l = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(k);
          });return function () {
            for (; f.length;) {
              f.shift()();
            }
          };
        },
        $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!x(e)) {
              if (F(e)) {
                if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== p && (f = p = {}, u = 0, l++);a = 0;for (b in e) {
                    va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                  }if (u > a) for (b in l++, f) {
                    va.call(e, b) || (u--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              u = 0;return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (F(e)) {
              if (ta(e)) {
                h = Array(e.length);for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                va.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              k,
              l,
              m,
              p,
              r,
              u = b,
              q,
              w = [],
              x,
              ia;n("$digest");h.$$checkUrlChange();this === H && null !== f && (h.defer.cancel(f), s());c = null;do {
            r = !1;q = this;for (p = 0; p < v.length; p++) {
              try {
                ia = v[p], ia.scope.$eval(ia.expression, ia.locals);
              } catch (z) {
                e(z);
              }c = null;
            }v.length = 0;a: do {
              if (p = q.$$watchers) for (p.$$digestWatchIndex = p.length; p.$$digestWatchIndex--;) {
                try {
                  if (a = p[p.$$digestWatchIndex]) if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? qa(g, k) : ga(g) && ga(k))) r = !0, c = a, a.last = a.eq ? Fa(g, null) : g, l = a.fn, l(g, k === J ? g : k, q), 5 > u && (x = 4 - u, w[x] || (w[x] = []), w[x].push({ msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
                    r = !1;break a;
                  }
                } catch (D) {
                  e(D);
                }
              }if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling)) for (; q !== this && !(p = q.$$nextSibling);) {
                q = q.$parent;
              }
            } while (q = p);if ((r || v.length) && !u--) throw H.$$phase = null, d("infdig", b, w);
          } while (r || v.length);for (H.$$phase = null; A < t.length;) {
            try {
              t[A++]();
            } catch (E) {
              e(E);
            }
          }t.length = A = 0;
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === H && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
              r(this, this.$$listenerCount[b], b);
            }a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;this.$on = this.$watch = this.$watchGroup = function () {
              return w;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          H.$$phase || v.length || h.defer(function () {
            v.length && H.$digest();
          });v.push({ scope: this, expression: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          t.push(a);
        }, $apply: function $apply(a) {
          try {
            n("$apply");
            try {
              return this.$eval(a);
            } finally {
              H.$$phase = null;
            }
          } catch (b) {
            e(b);
          } finally {
            try {
              H.$digest();
            } catch (c) {
              throw e(c), c;
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && ia.push(b);a = g(a);u();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, r(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              f = this,
              g = !1,
              h = { name: a, targetScope: f, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = ab([h], arguments, 1),
              l,
              m;do {
            d = f.$$listeners[a] || c;h.currentScope = f;l = 0;for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                e(n);
              } else d.splice(l, 1), l--, m--;
            }if (g) return h.currentScope = null, h;f = f.$parent;
          } while (f);h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              f = { name: a, targetScope: this, preventDefault: function preventDefault() {
              f.defaultPrevented = !0;
            },
            defaultPrevented: !1 };if (!this.$$listenerCount[a]) return f;for (var g = ab([f], arguments, 1), h, k; c = d;) {
            f.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                e(l);
              } else d.splice(h, 1), h--, k--;
            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }f.currentScope = null;return f;
        } };var H = new m(),
          v = H.$$asyncQueue = [],
          t = H.$$postDigestQueue = [],
          ia = H.$$applyAsyncQueue = [],
          A = 0;return H;
    }];
  }function ze() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return v(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return v(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var f = c ? b : a,
            e;e = Da(d).href;return "" === e || e.match(f) ? d : "unsafe:" + e;
      };
    };
  }function xg(a) {
    if ("self" === a) return a;if (E(a)) {
      if (-1 < a.indexOf("***")) throw ua("iwcard", a);a = Gd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (Xa(a)) return new RegExp("^" + a.source + "$");throw ua("imatcher");
  }function Hd(a) {
    var b = [];v(a) && q(a, function (a) {
      b.push(xg(a));
    });return b;
  }function Lf() {
    this.SCE_CONTEXTS = pa;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = Hd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = Hd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? sd(b) : !!a.exec(b.href);
      }function f(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var e = function e(a) {
        throw ua("unsafe");
      };d.has("$sanitize") && (e = d.get("$sanitize"));var g = f(),
          h = {};h[pa.HTML] = f(g);h[pa.CSS] = f(g);h[pa.URL] = f(g);h[pa.JS] = f(g);h[pa.RESOURCE_URL] = f(h[pa.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw ua("icontext", a, b);if (null === b || x(b) || "" === b) return b;if ("string" !== typeof b) throw ua("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, f) {
          if (null === f || x(f) || "" === f) return f;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && f instanceof g) return f.$$unwrapTrustedValue();if (d === pa.RESOURCE_URL) {
            var g = Da(f.toString()),
                n,
                p,
                r = !1;n = 0;for (p = a.length; n < p; n++) {
              if (c(a[n], g)) {
                r = !0;break;
              }
            }if (r) for (n = 0, p = b.length; n < p; n++) {
              if (c(b[n], g)) {
                r = !1;break;
              }
            }if (r) return f;throw ua("insecurl", f.toString());
          }if (d === pa.HTML) return e(f);throw ua("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function Kf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > La) throw ua("iequirks");var c = ra(pa);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Ya);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var f = c.parseAs,
          e = c.getTrusted,
          g = c.trustAs;q(pa, function (a, b) {
        var d = P(b);c[("parse_as_" + d).replace(sc, gb)] = function (b) {
          return f(a, b);
        };c[("get_trusted_" + d).replace(sc, gb)] = function (b) {
          return e(a, b);
        };c[("trust_as_" + d).replace(sc, gb)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function Mf() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !(a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
          f = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]),
          e = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h = g.body && g.body.style,
          k = !1,
          l = !1;h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h));return { history: !(!c || 4 > f || e), hasEvent: function hasEvent(a) {
          if ("input" === a && La) return !1;if (x(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: za(), transitions: k, animations: l, android: f };
    }];
  }function Of() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, f, e) {
      function g(h, k) {
        g.totalPendingRequests++;if (!E(h) || x(d.get(h))) h = e.getTrustedResourceUrl(h);var l = c.defaults && c.defaults.transformResponse;C(l) ? l = l.filter(function (a) {
          return a !== jc;
        }) : l === jc && (l = null);return c.get(h, R({ cache: d, transformResponse: l }, a)).finally(function () {
          g.totalPendingRequests--;
        }).then(function (a) {
          d.put(h, a.data);return a.data;
        }, function (a) {
          k || (a = yg("tpload", h, a.status, a.statusText), b(a));return f.reject(a);
        });
      }g.totalPendingRequests = 0;return g;
    }];
  }function Pf() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
            var c = $.element(a).data("$binding");c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + Gd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
            if (k.length) return k;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Qf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, f) {
      function e(e, k, l) {
        y(e) || (l = k, k = e, e = w);var m = wa.call(arguments, 3),
            n = v(l) && !l,
            p = (n ? c : d).defer(),
            r = p.promise,
            q;q = b.defer(function () {
          try {
            p.resolve(e.apply(null, m));
          } catch (b) {
            p.reject(b), f(b);
          } finally {
            delete g[r.$$timeoutId];
          }n || a.$apply();
        }, k);r.$$timeoutId = q;g[q] = p;return r;
      }var g = {};e.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(w), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return e;
    }];
  }function Da(a) {
    La && (ca.setAttribute("href", a), a = ca.href);ca.setAttribute("href", a);return { href: ca.href, protocol: ca.protocol ? ca.protocol.replace(/:$/, "") : "", host: ca.host, search: ca.search ? ca.search.replace(/^\?/, "") : "", hash: ca.hash ? ca.hash.replace(/^#/, "") : "", hostname: ca.hostname, port: ca.port, pathname: "/" === ca.pathname.charAt(0) ? ca.pathname : "/" + ca.pathname };
  }function sd(a) {
    a = E(a) ? Da(a) : a;return a.protocol === Id.protocol && a.host === Id.host;
  }function Rf() {
    this.$get = ma(z);
  }function Jd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        f = "";return function () {
      var a, g, h, k, l;try {
        a = d.cookie || "";
      } catch (m) {
        a = "";
      }if (a !== f) for (f = a, a = f.split("; "), c = {}, h = 0; h < a.length; h++) {
        g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
      }return c;
    };
  }function Vf() {
    this.$get = Jd;
  }function Xc(a) {
    function b(d, c) {
      if (F(d)) {
        var f = {};q(d, function (a, c) {
          f[c] = b(c, a);
        });return f;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", Kd);b("date", Ld);b("filter", zg);b("json", Ag);b("limitTo", Bg);b("lowercase", Cg);b("number", Md);b("orderBy", Nd);b("uppercase", Dg);
  }function zg() {
    return function (a, b, d, c) {
      if (!ta(a)) {
        if (null == a) return a;throw M("filter")("notarray", a);
      }c = c || "$";var f;switch (tc(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          f = !0;case "object":
          b = Eg(b, d, c, f);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function Eg(a, b, d, c) {
    var f = F(a) && d in a;!0 === b ? b = qa : y(b) || (b = function b(a, _b) {
      if (x(a)) return !1;if (null === a || null === _b) return a === _b;if (F(_b) || F(a) && !Vb(a)) return !1;a = P("" + a);_b = P("" + _b);return -1 !== a.indexOf(_b);
    });return function (e) {
      return f && !F(e) ? Ha(e, a[d], b, d, !1) : Ha(e, a, b, d, c);
    };
  }function Ha(a, b, d, c, f, e) {
    var g = tc(a),
        h = tc(b);if ("string" === h && "!" === b.charAt(0)) return !Ha(a, b.substring(1), d, c, f);if (C(a)) return a.some(function (a) {
      return Ha(a, b, d, c, f);
    });switch (g) {case "object":
        var k;if (f) {
          for (k in a) {
            if ("$" !== k.charAt(0) && Ha(a[k], b, d, c, !0)) return !0;
          }return e ? !1 : Ha(a, b, d, c, !1);
        }if ("object" === h) {
          for (k in b) {
            if (e = b[k], !y(e) && !x(e) && (g = k === c, !Ha(g ? a : a[k], e, d, c, g, g))) return !1;
          }return !0;
        }return d(a, b);case "function":
        return !1;default:
        return d(a, b);}
  }function tc(a) {
    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
  }function Kd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, f) {
      x(c) && (c = b.CURRENCY_SYM);x(f) && (f = b.PATTERNS[1].maxFrac);return null == a ? a : Od(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, f).replace(/\u00A4/g, c);
    };
  }function Md(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Od(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function Fg(a) {
    var b = 0,
        d,
        c,
        f,
        e,
        g;-1 < (c = a.indexOf(Pd)) && (a = a.replace(Pd, ""));0 < (f = a.search(/e/i)) ? (0 > c && (c = f), c += +a.slice(f + 1), a = a.substring(0, f)) : 0 > c && (c = a.length);for (f = 0; a.charAt(f) === uc; f++) {}
    if (f === (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) === uc;) {
        g--;
      }c -= f;d = [];for (e = 0; f <= g; f++, e++) {
        d[e] = +a.charAt(f);
      }
    }c > Qd && (d = d.splice(0, Qd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function Gg(a, b, d, c) {
    var f = a.d,
        e = f.length - a.i;b = x(b) ? Math.min(Math.max(d, e), c) : +b;d = b + a.i;c = f[d];if (0 < d) {
      f.splice(Math.max(a.i, d));for (var g = d; g < f.length; g++) {
        f[g] = 0;
      }
    } else for (e = Math.max(0, e), a.i = 1, f.length = Math.max(1, d = b + 1), f[0] = 0, g = 1; g < d; g++) {
      f[g] = 0;
    }if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        f.unshift(0), a.i++;
      }f.unshift(1);a.i++;
    } else f[d - 1]++;for (; e < Math.max(0, b); e++) {
      f.push(0);
    }if (b = f.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) f.unshift(b), a.i++;
  }function Od(a, b, d, c, f) {
    if (!E(a) && !Y(a) || isNaN(a)) return "";var e = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";if (e) k = "\u221E";else {
      g = Fg(h);Gg(g, f, b.minFrac, b.maxFrac);k = g.d;h = g.i;f = g.e;e = [];for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) {
        k.unshift(0), h++;
      }0 < h ? e = k.splice(h, k.length) : (e = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
        h.unshift(k.splice(-b.gSize, k.length).join(""));
      }k.length && h.unshift(k.join(""));k = h.join(d);e.length && (k += c + e.join(""));f && (k += "e+" + f);
    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }function Kb(a, b, d, c) {
    var f = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, f = "-");for (a = "" + a; a.length < b;) {
      a = uc + a;
    }d && (a = a.substr(a.length - b));return f + a;
  }function aa(a, b, d, c, f) {
    d = d || 0;return function (e) {
      e = e["get" + a]();if (0 < d || e > -d) e += d;0 === e && -12 === d && (e = 12);return Kb(e, b, c, f);
    };
  }function nb(a, b, d) {
    return function (c, f) {
      var e = c["get" + a](),
          g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return f[g][e];
    };
  }function Rd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Sd(a) {
    return function (b) {
      var d = Rd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Kb(b, a);
    };
  }function vc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function Ld(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var e = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (e = Z(b[9] + b[10]), g = Z(b[9] + b[11]));h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));e = Z(b[4] || 0) - e;g = Z(b[5] || 0) - g;h = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, e, g, h, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, e) {
      var g = "",
          h = [],
          k,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;E(c) && (c = Hg.test(c) ? Z(c) : b(c));Y(c) && (c = new Date(c));if (!fa(c) || !isFinite(c.getTime())) return c;
      for (; d;) {
        (l = Ig.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      }var m = c.getTimezoneOffset();e && (m = Jc(e, m), c = Wb(c, e, !0));q(h, function (b) {
        k = Jg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function Ag() {
    return function (a, b) {
      x(b) && (b = 2);return cb(a, b);
    };
  }function Bg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (ga(b)) return a;Y(a) && (a = a.toString());if (!ta(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? wc(a, d, d + b) : 0 === d ? wc(a, b, a.length) : wc(a, Math.max(0, d + b), d);
    };
  }function wc(a, b, d) {
    return E(a) ? a.slice(b, d) : wa.call(a, b, d);
  }function Nd(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = Ya;if (y(b)) d = b;else if (E(b)) {
          if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var f = d(),
              d = function d(a) {
            return a[f];
          };
        }return { get: d, descending: c };
      });
    }function d(a) {
      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }
    function c(a, b) {
      var c = 0,
          d = a.type,
          k = b.type;if (d === k) {
        var k = a.value,
            l = b.value;"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (F(k) && (k = a.index), F(l) && (l = b.index));k !== l && (c = k < l ? -1 : 1);
      } else c = d < k ? -1 : 1;return c;
    }return function (a, e, g, h) {
      if (null == a) return a;if (!ta(a)) throw M("orderBy")("notarray", a);C(e) || (e = [e]);0 === e.length && (e = ["+"]);var k = b(e),
          l = g ? -1 : 1,
          m = y(h) ? h : c;a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("object" === c) a: {
              if (y(e.valueOf) && (e = e.valueOf(), d(e))) break a;Vb(e) && (e = e.toString(), d(e));
            }return { value: e, type: c, index: b };
          }) };
      });a.sort(function (a, b) {
        for (var c = 0, d = k.length; c < d; c++) {
          var e = m(a.predicateValues[c], b.predicateValues[c]);if (e) return e * k[c].descending * l;
        }return m(a.tieBreaker, b.tieBreaker) * l;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Ra(a) {
    y(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ma(a);
  }function Lb(a, b, d, c, f) {
    this.$$controls = [];this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = f(b.name || b.ngForm || "")(d);this.$dirty = !1;this.$valid = this.$pristine = !0;this.$submitted = this.$invalid = !1;this.$$parentForm = Mb;this.$$element = a;this.$$animate = c;Td(this);
  }function Td(a) {
    a.$$classCache = {};a.$$classCache[Ud] = !(a.$$classCache[ob] = a.$$element.hasClass(ob));
  }function Vd(a) {
    function b(a, b, c) {
      c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
    }function d(a, c, d) {
      c = c ? "-" + Nc(c, "-") : "";b(a, ob + c, !0 === d);b(a, Ud + c, !1 === d);
    }var c = a.set,
        f = a.unset;a.clazz.prototype.$setValidity = function (a, g, h) {
      x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && f(this.$pending, a, h), Wd(this.$pending) && (this.$pending = void 0));Ia(g) ? g ? (f(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), f(this.$$success, a, h)) : (f(this.$error, a, h), f(this.$$success, a, h));this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = Wd(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;d(this, a, g);this.$$parentForm.$setValidity(a, g, this);
    };
  }function Wd(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }return !0;
  }function xc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function Sa(a, b, d, c, f, e) {
    var g = P(b[0].type);if (!f.android) {
      var h = !1;b.on("compositionstart", function () {
        h = !0;
      });b.on("compositionend", function () {
        h = !1;l();
      });
    }var k,
        l = function l(a) {
      k && (e.defer.cancel(k), k = null);if (!h) {
        var f = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (f = S(f));(c.$viewValue !== f || "" === f && c.$$hasNativeValidators) && c.$setViewValue(f, a);
      }
    };if (f.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        k || (k = e.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (f.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (Xd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;k = e.defer(function () {
          k = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Nb(a, b) {
    return function (d, c) {
      var f, e;if (fa(d)) return d;if (E(d)) {
        '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Kg.test(d)) return new Date(d);
        a.lastIndex = 0;if (f = a.exec(d)) return f.shift(), e = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(f, function (a, c) {
          c < b.length && (e[b[c]] = +a);
        }), new Date(e.yyyy, e.MM - 1, e.dd, e.HH, e.mm, e.ss || 0, 1E3 * e.sss || 0);
      }return NaN;
    };
  }function pb(a, b, d, c) {
    return function (f, e, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function p(a) {
        return v(a) && !fa(a) ? d(a) || void 0 : a;
      }yc(f, e, g, h);Sa(f, e, g, h, k, l);var r = h && h.$options.getOption("timezone"),
          q;h.$$parserName = a;h.$parsers.push(function (a) {
        if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, q), r && (a = Wb(a, r)), a;
      });h.$formatters.push(function (a) {
        if (a && !fa(a)) throw qb("datefmt", a);if (n(a)) return (q = a) && r && (q = Wb(q, r, !0)), m("date")(a, c, r);q = null;return "";
      });if (v(g.min) || g.ngMin) {
        var s;h.$validators.min = function (a) {
          return !n(a) || x(s) || d(a) >= s;
        };g.$observe("min", function (a) {
          s = p(a);h.$validate();
        });
      }if (v(g.max) || g.ngMax) {
        var u;
        h.$validators.max = function (a) {
          return !n(a) || x(u) || d(a) <= u;
        };g.$observe("max", function (a) {
          u = p(a);h.$validate();
        });
      }
    };
  }function yc(a, b, d, c) {
    (c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }function Yd(a) {
    a.$$parserName = "number";a.$parsers.push(function (b) {
      if (a.$isEmpty(b)) return null;if (Lg.test(b)) return parseFloat(b);
    });a.$formatters.push(function (b) {
      if (!a.$isEmpty(b)) {
        if (!Y(b)) throw qb("numfmt", b);b = b.toString();
      }return b;
    });
  }
  function Ta(a) {
    v(a) && !Y(a) && (a = parseFloat(a));return ga(a) ? void 0 : a;
  }function zc(a) {
    var b = a.toString(),
        d = b.indexOf(".");return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
  }function Zd(a, b, d) {
    a = Number(a);if ((a | 0) !== a || (b | 0) !== b || (d | 0) !== d) {
      var c = Math.max(zc(a), zc(b), zc(d)),
          c = Math.pow(10, c);a *= c;b *= c;d *= c;
    }return 0 === (a - b) % d;
  }function $d(a, b, d, c, f) {
    if (v(c)) {
      a = a(c);if (!a.constant) throw qb("constexpr", d, c);return a(b);
    }return f;
  }function Ac(a, b) {
    function d(a, b) {
      if (!a || !a.length) return [];
      if (!b || !b.length) return a;var c = [],
          d = 0;a: for (; d < a.length; d++) {
        for (var e = a[d], f = 0; f < b.length; f++) {
          if (e === b[f]) continue a;
        }c.push(e);
      }return c;
    }function c(a) {
      var b = a;C(a) ? b = a.map(c).join(" ") : F(a) && (b = Object.keys(a).filter(function (b) {
        return a[b];
      }).join(" "));return b;
    }function f(a) {
      var b = a;if (C(a)) b = a.map(f);else if (F(a)) {
        var c = !1,
            b = Object.keys(a).filter(function (b) {
          b = a[b];!c && x(b) && (c = !0);return b;
        });c && b.push(void 0);
      }return b;
    }a = "ngClass" + a;var e;return ["$parse", function (g) {
      return { restrict: "AC", link: function link(h, k, l) {
          function m(a, b) {
            var c = [];q(a, function (a) {
              if (0 < b || H[a]) H[a] = (H[a] || 0) + b, H[a] === +(0 < b) && c.push(a);
            });return c.join(" ");
          }function n(a) {
            if (a === b) {
              var c = t,
                  c = m(c && c.split(" "), 1);l.$addClass(c);
            } else c = t, c = m(c && c.split(" "), -1), l.$removeClass(c);w = a;
          }function p(a) {
            a = c(a);a !== t && r(a);
          }function r(a) {
            if (w === b) {
              var c = t && t.split(" "),
                  e = a && a.split(" "),
                  f = d(c, e),
                  c = d(e, c),
                  f = m(f, -1),
                  c = m(c, 1);l.$addClass(c);l.$removeClass(f);
            }t = a;
          }var s = l[a].trim(),
              v = ":" === s.charAt(0) && ":" === s.charAt(1),
              s = g(s, v ? f : c),
              u = v ? p : r,
              H = k.data("$classCounts"),
              w = !0,
              t;H || (H = W(), k.data("$classCounts", H));"ngClass" !== a && (e || (e = g("$index", function (a) {
            return a & 1;
          })), h.$watch(e, n));h.$watch(s, u, v);
        } };
    }];
  }function Ob(a, b, d, c, f, e, g, h, k) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;
    this.$name = k(d.name || "", !1)(a);this.$$parentForm = Mb;this.$options = Pb;this.$$parsedNgModel = f(d.ngModel);this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;this.$$ngModelGet = this.$$parsedNgModel;this.$$ngModelSet = this.$$parsedNgModelAssign;this.$$pendingDebounce = null;this.$$parserValid = void 0;this.$$currentValidationRunId = 0;this.$$scope = a;this.$$attr = d;this.$$element = c;this.$$animate = e;this.$$timeout = g;this.$$parse = f;this.$$q = h;this.$$exceptionHandler = b;Td(this);Mg(this);
  }function Mg(a) {
    a.$$scope.$watch(function () {
      var b = a.$$ngModelGet(a.$$scope);if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
        a.$modelValue = a.$$rawModelValue = b;a.$$parserValid = void 0;for (var d = a.$formatters, c = d.length, f = b; c--;) {
          f = d[c](f);
        }a.$viewValue !== f && (a.$$updateEmptyClasses(f), a.$viewValue = a.$$lastCommittedViewValue = f, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, w));
      }return b;
    });
  }function Bc(a) {
    this.$$options = a;
  }function ae(a, b) {
    q(b, function (b, c) {
      v(a[c]) || (a[c] = b);
    });
  }var Ng = /^\/(.+)\/([a-z]*)$/,
      va = Object.prototype.hasOwnProperty,
      P = function P(a) {
    return E(a) ? a.toLowerCase() : a;
  },
      vb = function vb(a) {
    return E(a) ? a.toUpperCase() : a;
  },
      La,
      D,
      oa,
      wa = [].slice,
      ng = [].splice,
      Og = [].push,
      na = Object.prototype.toString,
      Gc = Object.getPrototypeOf,
      Ga = M("ng"),
      $ = z.angular || (z.angular = {}),
      Zb,
      rb = 0;La = z.document.documentMode;var ga = Number.isNaN || function (a) {
    return a !== a;
  };w.$inject = [];Ya.$inject = [];var C = Array.isArray,
      le = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
      S = function S(a) {
    return E(a) ? a.trim() : a;
  },
      Gd = function Gd(a) {
    return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      za = function za() {
    if (!v(za.rules)) {
      var a = z.document.querySelector("[ng-csp]") || z.document.querySelector("[data-ng-csp]");if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");za.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
      } else {
        a = za;try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
      }
    }return za.rules;
  },
      sb = function sb() {
    if (v(sb.name_)) return sb.name_;var a,
        b,
        d = Ka.length,
        c,
        f;for (b = 0; b < d; ++b) {
      if (c = Ka[b], a = z.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        f = a.getAttribute(c + "jq");break;
      }
    }return sb.name_ = f;
  },
      ne = /:/g,
      Ka = ["ng-", "data-ng-", "ng:", "x-ng-"],
      qe = function (a) {
    if (!a.currentScript) return !0;var b = a.currentScript.getAttribute("src"),
        d = a.createElement("a");d.href = b;if (a.location.origin === d.origin) return !0;switch (d.protocol) {case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":
        return !0;default:
        return !1;}
  }(z.document),
      te = /[A-Z]/g,
      Oc = !1,
      Ja = 3,
      ye = { full: "1.6.1", major: 1, minor: 6, dot: 1, codeName: "promise-rectification" };X.expando = "ng339";var ib = X.cache = {},
      $f = 1;X._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var Wf = /-([a-z])/g,
      Pg = /^-ms-/,
      Ab = { mouseleave: "mouseout", mouseenter: "mouseover" },
      ac = M("jqLite"),
      Zf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      $b = /<|&#?\w+;/,
      Xf = /<([\w:-]+)/,
      Yf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ha = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ha.optgroup = ha.option;ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;ha.th = ha.td;var eg = z.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Oa = X.prototype = { ready: $c, toString: function toString() {
      var a = [];q(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    }, eq: function eq(a) {
      return 0 <= a ? D(this[a]) : D(this[this.length + a]);
    }, length: 0, push: Og, sort: [].sort, splice: [].splice },
      Gb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Gb[P(a)] = a;
  });var ed = {};q("input select option textarea button form details".split(" "), function (a) {
    ed[a] = !0;
  });var ld = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };q({ data: dc, removeData: hb, hasData: function hasData(a) {
      for (var b in ib[a.ng339]) {
        return !0;
      }return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        hb(a[b]);
      }
    } }, function (a, b) {
    X[b] = a;
  });q({ data: dc, inheritedData: Eb, scope: function scope(a) {
      return D.data(a, "$scope") || Eb(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return D.data(a, "$isolateScope") || D.data(a, "$isolateScopeNoTemplate");
    }, controller: bd, injector: function injector(a) {
      return Eb(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: Bb, css: function css(a, b, d) {
      b = xb(b.replace(Pg, "ms-"));if (v(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;
      if (c !== Ja && 2 !== c && 8 !== c && a.getAttribute) {
        var c = P(b),
            f = Gb[c];if (v(d)) null === d || !1 === d && f ? a.removeAttribute(b) : a.setAttribute(b, f ? c : d);else return a = a.getAttribute(b), f && null !== a && (a = c), null === a ? void 0 : a;
      }
    }, prop: function prop(a, b, d) {
      if (v(d)) a[b] = d;else return a[b];
    }, text: function () {
      function a(a, d) {
        if (x(d)) {
          var c = a.nodeType;return 1 === c || c === Ja ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    }(), val: function val(a, b) {
      if (x(b)) {
        if (a.multiple && "select" === xa(a)) {
          var d = [];q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (x(b)) return a.innerHTML;yb(a, !0);a.innerHTML = b;
    }, empty: cd }, function (a, b) {
    X.prototype[b] = function (b, c) {
      var f,
          e,
          g = this.length;if (a !== cd && x(2 === a.length && a !== Bb && a !== bd ? b : c)) {
        if (F(b)) {
          for (f = 0; f < g; f++) {
            if (a === dc) a(this[f], b);else for (e in b) {
              a(this[f], e, b[e]);
            }
          }return this;
        }f = a.$dv;g = x(f) ? Math.min(g, 1) : g;for (e = 0; e < g; e++) {
          var h = a(this[e], b, c);f = f ? f + h : h;
        }return f;
      }for (f = 0; f < g; f++) {
        a(this[f], b, c);
      }return this;
    };
  });q({ removeData: hb, on: function on(a, b, d, c) {
      if (v(c)) throw ac("onargs");if (Yc(a)) {
        c = zb(a, !0);var f = c.events,
            e = c.handle;e || (e = c.handle = bg(a, f));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
          var h = f[b];h || (h = f[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, e));h.push(d);
        }; g--;) {
          b = c[g], Ab[b] ? (h(Ab[b], dg), h(b, void 0, !0)) : h(b);
        }
      }
    }, off: ad, one: function one(a, b, d) {
      a = D(a);a.on(b, function f() {
        a.off(b, d);a.off(b, f);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;yb(a);q(new X(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new X(b);for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    }, prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;q(new X(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    }, wrap: function wrap(a, b) {
      var d = D(b).eq(0).clone()[0],
          c = a.parentNode;
      c && c.replaceChild(d, a);d.appendChild(a);
    }, remove: Fb, detach: function detach(a) {
      Fb(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;if (c) {
        b = new X(b);for (var f = 0, e = b.length; f < e; f++) {
          var g = b[f];c.insertBefore(g, d.nextSibling);d = g;
        }
      }
    }, addClass: Db, removeClass: Cb, toggleClass: function toggleClass(a, b, d) {
      b && q(b.split(" "), function (b) {
        var f = d;x(f) && (f = !Bb(a, b));(f ? Db : Cb)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    }, find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: cc, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          f,
          e = b.type || b,
          g = zb(a);if (g = (g = g && g.events) && g[e]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: w, type: e, target: a }, b.type && (c = R(c, b)), b = ra(g), f = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, f);
      });
    } }, function (a, b) {
    X.prototype[b] = function (b, c, f) {
      for (var e, g = 0, h = this.length; g < h; g++) {
        x(e) ? (e = a(this[g], b, c, f), v(e) && (e = D(e))) : bc(e, a(this[g], b, c, f));
      }return v(e) ? e : this;
    };
  });X.prototype.bind = X.prototype.on;X.prototype.unbind = X.prototype.off;Qa.prototype = { put: function put(a, b) {
      this[la(a, this.nextUid)] = b;
    }, get: function get(a) {
      return this[la(a, this.nextUid)];
    }, remove: function remove(a) {
      var b = this[a = la(a, this.nextUid)];delete this[a];return b;
    } };var Uf = [function () {
    this.$get = [function () {
      return Qa;
    }];
  }],
      gg = /^([^(]+?)=>/,
      hg = /^[^(]*\(\s*([^)]*)\)/m,
      Qg = /,/,
      Rg = /^\s*(_?)(\S+?)\1\s*$/,
      fg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      da = M("$injector");eb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw E(d) && d || (d = a.name || ig(a)), da("strictdi", d);b = fd(a);q(b[1].split(Qg), function (a) {
            a.replace(Rg, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else C(a) ? (b = a.length - 1, tb(a[b], "fn"), c = a.slice(0, b)) : tb(a, "fn", !0);return c;
  };var be = M("$animate"),
      lf = function lf() {
    this.$get = w;
  },
      mf = function mf() {
    var a = new Qa(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function f(a, b, c) {
        var d = !1;b && (b = E(b) ? b.split(" ") : C(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function e() {
        q(b, function (b) {
          var c = a.get(b);if (c) {
            var d = jg(b.attr("class")),
                e = "",
                f = "";q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });q(b, function (a) {
              e && Db(a, e);f && Cb(a, f);
            });a.remove(b);
          }
        });b.length = 0;
      }return { enabled: w, on: w, off: w, pin: w, push: function push(g, h, k, l) {
          l && l();k = k || {};k.from && g.css(k.from);
          k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = f(k, h, !0), l = f(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(e);g = new d();g.complete();return g;
        } };
    }];
  },
      jf = ["$provide", function (a) {
    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw be("notcsel", d);var f = d + "-animation";b.$$registeredAnimations[d.substr(1)] = f;a.factory(f, c);
    };this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw be("nongcls", "ng-animate");return this.$$classNameFilter;
    };this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var h;a: {
            for (h = 0; h < d.length; h++) {
              var k = d[h];if (1 === k.nodeType) {
                h = k;break a;
              }
            }h = void 0;
          }!h || h.parentNode || h.previousElementSibling || (d = null);
        }d ? d.after(a) : c.prepend(a);
      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
          a.end && a.end();
        },
        enter: function enter(f, e, g, h) {
          e = e && D(e);g = g && D(g);e = e || g.parent();b(f, e, g);return a.push(f, "enter", Aa(h));
        }, move: function move(f, e, g, h) {
          e = e && D(e);g = g && D(g);e = e || g.parent();b(f, e, g);return a.push(f, "move", Aa(h));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Aa(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, g) {
          g = Aa(g);g.addClass = jb(g.addclass, c);return a.push(b, "addClass", g);
        }, removeClass: function removeClass(b, c, g) {
          g = Aa(g);g.removeClass = jb(g.removeClass, c);return a.push(b, "removeClass", g);
        }, setClass: function setClass(b, c, g, h) {
          h = Aa(h);
          h.addClass = jb(h.addClass, c);h.removeClass = jb(h.removeClass, g);return a.push(b, "setClass", h);
        }, animate: function animate(b, c, g, h, k) {
          k = Aa(k);k.from = k.from ? R(k.from, c) : c;k.to = k.to ? R(k.to, g) : g;k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
        } };
    }];
  }],
      of = function of() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      nf = function nf() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, f) {
      function e(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          c() ? f(a, 0, !1) : b(a);
        };this._state = 0;
      }e.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };e.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;q(a, function (a) {
          a.done(c);
        });
      };e.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: w, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        }, "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return e;
    }];
  },
      kf = function kf() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, f) {
        function e() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
          });return k;
        }var g = f || {};g.$$prepared || (g = Fa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
            k = new d();return { start: e, end: e };
      };
    }];
  },
      ea = M("$compile"),
      hc = new function () {}();Qc.$inject = ["$provide", "$$sanitizeUriProvider"];Ib.prototype.isFirstChange = function () {
    return this.previousValue === hc;
  };var gd = /^((?:x|data)[:\-_])/i,
      mg = /[:\-_]+(.)/g,
      nd = M("$controller"),
      md = /^(\S+)(\s+as\s+([\w$]+))?$/,
      vf = function vf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof D && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      od = "application/json",
      kc = { "Content-Type": od + ";charset=utf-8" },
      pg = /^\[|^\{(?!\{)/,
      qg = { "[": /]$/, "{": /}$/ },
      og = /^\)]\}',?\n/,
      td = M("$http"),
      Ea = $.$interpolateMinErr = M("$interpolate");Ea.throwNoconcat = function (a) {
    throw Ea("noconcat", a);
  };Ea.interr = function (a, b) {
    return Ea("interr", a, b.toString());
  };var Df = function Df() {
    this.$get = ["$window", function (a) {
      function b(a) {
        var b = function b(a) {
          b.data = a;b.called = !0;
        };b.id = a;return b;
      }var d = a.angular.callbacks,
          c = {};return { createCallback: function createCallback(a) {
          a = "_" + (d.$$counter++).toString(36);var e = "angular.callbacks." + a,
              g = b(a);c[e] = d[a] = g;return e;
        }, wasCalled: function wasCalled(a) {
          return c[a].called;
        }, getResponse: function getResponse(a) {
          return c[a].data;
        }, removeCallback: function removeCallback(a) {
          delete d[c[a].id];delete c[a];
        } };
    }];
  },
      Sg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
      sg = { http: 80, https: 443, ftp: 21 },
      lb = M("$location"),
      tg = /^\s*[\\/]{2,}/,
      Tg = { $$absUrl: "",
    $$html5: !1, $$replace: !1, absUrl: Jb("$$absUrl"), url: function url(a) {
      if (x(a)) return this.$$url;var b = Sg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Jb("$$protocol"), host: Jb("$$host"), port: Jb("$$port"), path: xd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" === a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (E(a) || Y(a)) a = a.toString(), this.$$search = Lc(a);else if (F(a)) a = Fa(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw lb("isrcharg");break;default:
          x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: xd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };q([wd, oc, nc], function (a) {
    a.prototype = Object.create(Tg);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== nc || !this.$$html5) throw lb("nostate");this.$$state = x(b) ? null : b;return this;
    };
  });var Ua = M("$parse"),
      wg = {}.constructor.prototype.valueOf,
      Qb = W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Qb[a] = !0;
  });var Ug = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      qc = function qc(a) {
    this.options = a;
  };qc.prototype = { constructor: qc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Qb[b],
              f = Qb[d];Qb[a] || c || f ? (a = f ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    }, isIdentifierStart: function isIdentifierStart(a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    }, isValidIdentifierStart: function isValidIdentifierStart(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isIdentifierContinue: function isIdentifierContinue(a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    }, codePointAt: function codePointAt(a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    }, peekMultichar: function peekMultichar() {
      var a = this.text.charAt(this.index),
          b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
          c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw Ua("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = P(this.text.charAt(this.index));if ("." === d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;
      for (var d = "", c = a, f = !1; this.index < this.text.length;) {
        var e = this.text.charAt(this.index),
            c = c + e;if (f) "u" === e ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ug[e] || e, f = !1;else if ("\\" === e) f = !0;else {
          if (e === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += e;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var s = function s(a, b) {
    this.lexer = a;this.options = b;
  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";
  s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    }, program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
      }
    }, expressionStatement: function expressionStatement() {
      return { type: s.ExpressionStatement,
        expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();if (this.expect("=")) {
        if (!Ad(a)) throw Ua("lval");a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" };
      }return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression,
        test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
      }return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };
      }return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
      }return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };
      }return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
      }return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
      }return a;
    },
    unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Fa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
      }return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
        a.push(this.expression());
      }return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do {
          a.push(this.filterChain());
        } while (this.expect(","));
      }return a;
    }, identifier: function identifier() {
      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
    }, constant: function constant() {
      return { type: s.Literal, value: this.consume().value };
    },
    arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");return { type: s.ArrayExpression, elements: a };
    }, object: function object() {
      var a = [],
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
        } while (this.expect(","));
      }this.consume("}");return { type: s.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw Ua("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw Ua("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var e = a.text;if (e === b || e === d || e === c || e === f || !(b || d || c || f)) return a;
      }return !1;
    }, expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: s.ThisExpression },
      $locals: { type: s.LocalsExpression } } };Dd.prototype = { compile: function compile(a) {
      var b = this;a = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };V(a, b.$filter);var d = "",
          c;this.stage = "assign";if (c = Bd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");c = zd(a.body);b.stage = "inputs";q(c, function (a, c) {
        var d = "fn" + c;b.state[d] = { vars: [], body: [], own: {} };b.state.computing = d;var h = b.nextId();b.recurse(a, h);b.return_(h);b.state.inputs.push(d);a.watchId = c;
      });this.state.computing = "fn";this.stage = "main";this.recurse(a);d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";d = new Function("$filter", "getStringValue", "ifDefined", "plus", d)(this.$filter, ug, vg, yd);this.state = this.stage = void 0;d.literal = Cd(a);d.constant = a.constant;return d;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;q(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });return a.length ? "var " + a.join(",") + ";" : "";
    }, varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    }, body: function body(a) {
      return this.state[a].body.join("");
    }, recurse: function recurse(a, b, d, c, f, e) {
      var g,
          h,
          k = this,
          l,
          m,
          n;c = c || w;if (!e && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, f, !0));else switch (a.type) {case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, void 0, void 0, function (a) {
              h = a;
            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });break;case s.Literal:
          m = this.escape(a.value);this.assign(b, m);c(b || m);
          break;case s.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            h = a;
          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });this.recurse(a.right, void 0, void 0, function (a) {
            h = a;
          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              f && 1 !== f && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));c(b);break;case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
            k.if_(k.notNull(g), function () {
              a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), f && 1 !== f && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (f && 1 !== f && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }, !!f);break;case s.CallExpression:
          b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();k.recurse(a, b);l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              q(a.arguments, function (b) {
                k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                  l.push(a);
                });
              });m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }));break;case s.AssignmentExpression:
          h = this.nextId();g = {};this.recurse(a.left, void 0, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
            });
          }, 1);break;case s.ArrayExpression:
          l = [];q(a.elements, function (b) {
            k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(b || m);break;case s.ObjectExpression:
          l = [];n = !1;q(a.properties, function (a) {
            a.computed && (n = !0);
          });n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
          })) : (q(a.properties, function (b) {
            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
          this.assign(b, "s");c(b || "s");break;case s.LocalsExpression:
          this.assign(b, "l");c(b || "l");break;case s.NGValueParameter:
          this.assign(b, "v"), c(b || "v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    }, assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    }, filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
    }, ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    }, plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    }, return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    }, if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
      }
    }, not: function not(a) {
      return "!(" + a + ")";
    }, isNull: function isNull(a) {
      return a + "==null";
    }, notNull: function notNull(a) {
      return a + "!=null";
    }, nonComputedMember: function nonComputedMember(a, b) {
      var d = /[^$_a-zA-Z0-9]/g;return (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
      );
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    }, getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    }, lazyRecurse: function lazyRecurse(a, b, d, c, f, e) {
      var g = this;return function () {
        g.recurse(a, b, d, c, f, e);
      };
    }, lazyAssign: function lazyAssign(a, b) {
      var d = this;return function () {
        d.assign(a, b);
      };
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }, escape: function escape(a) {
      if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (Y(a)) return a.toString();
      if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw Ua("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };Ed.prototype = { compile: function compile(a) {
      var b = this;a = this.astBuilder.ast(a);V(a, b.$filter);var d, c;if (d = Bd(a)) c = this.recurse(d);d = zd(a.body);var f;d && (f = [], q(d, function (a, c) {
        var d = b.recurse(a);a.input = d;f.push(d);
        a.watchId = c;
      }));var e = [];q(a.body, function (a) {
        e.push(b.recurse(a.expression));
      });d = 0 === a.body.length ? w : 1 === a.body.length ? e[0] : function (a, b) {
        var c;q(e, function (d) {
          c = d(a, b);
        });return c;
      };c && (d.assign = function (a, b, d) {
        return c(a, d, b);
      });f && (d.inputs = f);d.literal = Cd(a);d.constant = a.constant;return d;
    }, recurse: function recurse(a, b, d) {
      var c,
          f,
          e = this,
          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
          return this.value(a.value, b);case s.UnaryExpression:
          return f = this.recurse(a.argument), this["unary" + a.operator](f, b);case s.BinaryExpression:
          return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);case s.LogicalExpression:
          return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
          return e.identifier(a.name, b, d);case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(c, f, b, d) : this.nonComputedMember(c, f, b, d);case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(e.recurse(a));
          }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, e) {
            for (var n = [], p = 0; p < g.length; ++p) {
              n.push(g[p](a, c, d, e));
            }a = f.apply(void 0, n, e);return b ? { context: void 0, name: void 0, value: a } : a;
          } : function (a, c, d, e) {
            var n = f(a, c, d, e),
                p;if (null != n.value) {
              p = [];for (var r = 0; r < g.length; ++r) {
                p.push(g[r](a, c, d, e));
              }p = n.value.apply(n.context, p);
            }return b ? { value: p } : p;
          };case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, e, g) {
            var n = c(a, d, e, g);a = f(a, d, e, g);n.context[n.name] = a;return b ? { value: a } : a;
          };case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(e.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) {
              f.push(g[p](a, c, d, e));
            }return b ? { value: f } : f;
          };case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            a.computed ? g.push({ key: e.recurse(a.key), computed: !0, value: e.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: e.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) {
              g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
            }return b ? { value: f } : f;
          };case s.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case s.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case s.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, f, e) {
        d = a(d, c, f, e);d = v(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, f, e) {
        d = a(d, c, f, e);d = v(d) ? -d : -0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, f, e) {
        d = !a(d, c, f, e);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, f, e, g) {
        var h = a(c, f, e, g);c = b(c, f, e, g);h = yd(h, c);return d ? { value: h } : h;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, f, e, g) {
        var h = a(c, f, e, g);c = b(c, f, e, g);
        h = (v(h) ? h : 0) - (v(c) ? c : 0);return d ? { value: h } : h;
      };
    }, "binary*": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) * b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary/": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) / b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary%": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) % b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary===": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) === b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary!==": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) !== b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary==": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) == b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary!=": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) != b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary<": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) < b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary>": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) > b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary<=": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) <= b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary>=": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) >= b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary&&": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) && b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "binary||": function binary(a, b, d) {
      return function (c, f, e, g) {
        c = a(c, f, e, g) || b(c, f, e, g);return d ? { value: c } : c;
      };
    }, "ternary?:": function ternary(a, b, d, c) {
      return function (f, e, g, h) {
        f = a(f, e, g, h) ? b(f, e, g, h) : d(f, e, g, h);return c ? { value: f } : f;
      };
    }, value: function value(a, b) {
      return function () {
        return b ? { context: void 0,
          name: void 0, value: a } : a;
      };
    }, identifier: function identifier(a, b, d) {
      return function (c, f, e, g) {
        c = f && a in f ? f : c;d && 1 !== d && c && null == c[a] && (c[a] = {});f = c ? c[a] : void 0;return b ? { context: c, name: a, value: f } : f;
      };
    }, computedMember: function computedMember(a, b, d, c) {
      return function (f, e, g, h) {
        var k = a(f, e, g, h),
            l,
            m;null != k && (l = b(f, e, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);return d ? { context: k, name: l, value: m } : m;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c) {
      return function (f, e, g, h) {
        f = a(f, e, g, h);c && 1 !== c && f && null == f[b] && (f[b] = {});e = null != f ? f[b] : void 0;
        return d ? { context: f, name: b, value: e } : e;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, f, e) {
        return e ? e[b] : a(d, c, f);
      };
    } };var rc = function rc(a, b, d) {
    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new Ed(this.ast, b) : new Dd(this.ast, b);
  };rc.prototype = { constructor: rc, parse: function parse(a) {
      return this.astCompiler.compile(a);
    } };var ua = M("$sce"),
      pa = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
      sc = /_([a-z])/g,
      yg = M("$compile"),
      ca = z.document.createElement("a"),
      Id = Da(z.location.href);Jd.$inject = ["$document"];Xc.$inject = ["$provide"];var Qd = 22,
      Pd = ".",
      uc = "0";Kd.$inject = ["$locale"];Md.$inject = ["$locale"];var Jg = { yyyy: aa("FullYear", 4, 0, !1, !0), yy: aa("FullYear", 2, 0, !0, !0), y: aa("FullYear", 1, 0, !1, !0), MMMM: nb("Month"), MMM: nb("Month", !0), MM: aa("Month", 2, 1), M: aa("Month", 1, 1), LLLL: nb("Month", !1, !0), dd: aa("Date", 2), d: aa("Date", 1), HH: aa("Hours", 2), H: aa("Hours", 1), hh: aa("Hours", 2, -12), h: aa("Hours", 1, -12), mm: aa("Minutes", 2), m: aa("Minutes", 1), ss: aa("Seconds", 2), s: aa("Seconds", 1), sss: aa("Milliseconds", 3), EEEE: nb("Day"), EEE: nb("Day", !0), a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
    }, ww: Sd(2), w: Sd(1), G: vc, GG: vc, GGG: vc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      Ig = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      Hg = /^-?\d+$/;Ld.$inject = ["$locale"];var Cg = ma(P),
      Dg = ma(vb);Nd.$inject = ["$parse"];var Ae = ma({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var f = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(f) || a.preventDefault();
          });
        }
      };
    } }),
      wb = {};q(Gb, function (a, b) {
    function d(a, d, f) {
      a.$watch(f[c], function (a) {
        f.$set(b, !!a);
      });
    }if ("multiple" !== a) {
      var c = Ca("ng-" + b),
          f = d;"checked" === a && (f = function f(a, b, _f) {
        _f.ngModel !== _f[c] && d(a, b, _f);
      });wb[c] = function () {
        return { restrict: "A",
          priority: 100, link: f };
      };
    }
  });q(ld, function (a, b) {
    wb[b] = function () {
      return { priority: 100, link: function link(a, c, f) {
          if ("ngPattern" === b && "/" === f.ngPattern.charAt(0) && (c = f.ngPattern.match(Ng))) {
            f.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(f[b], function (a) {
            f.$set(b, a);
          });
        } };
    };
  });q(["src", "srcset", "href"], function (a) {
    var b = Ca("ng-" + a);wb[b] = function () {
      return { priority: 99, link: function link(d, c, f) {
          var e = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", e = null);f.$observe(b, function (b) {
            b ? (f.$set(g, b), La && e && c.prop(e, f[g])) : "href" === a && f.$set(g, null);
          });
        } };
    };
  });var Mb = { $addControl: w, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: w, $setValidity: w, $setDirty: w, $setPristine: w, $setSubmitted: w };Lb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];Lb.prototype = { $rollbackViewValue: function $rollbackViewValue() {
      q(this.$$controls, function (a) {
        a.$rollbackViewValue();
      });
    }, $commitViewValue: function $commitViewValue() {
      q(this.$$controls, function (a) {
        a.$commitViewValue();
      });
    }, $addControl: function $addControl(a) {
      Pa(a.$name, "input");this.$$controls.push(a);a.$name && (this[a.$name] = a);a.$$parentForm = this;
    }, $$renameControl: function $$renameControl(a, b) {
      var d = a.$name;this[d] === a && delete this[d];this[b] = a;a.$name = b;
    }, $removeControl: function $removeControl(a) {
      a.$name && this[a.$name] === a && delete this[a.$name];q(this.$pending, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);q(this.$error, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);q(this.$$success, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);$a(this.$$controls, a);a.$$parentForm = Mb;
    }, $setDirty: function $setDirty() {
      this.$$animate.removeClass(this.$$element, Va);this.$$animate.addClass(this.$$element, Rb);this.$dirty = !0;this.$pristine = !1;this.$$parentForm.$setDirty();
    }, $setPristine: function $setPristine() {
      this.$$animate.setClass(this.$$element, Va, Rb + " ng-submitted");this.$dirty = !1;this.$pristine = !0;this.$submitted = !1;q(this.$$controls, function (a) {
        a.$setPristine();
      });
    }, $setUntouched: function $setUntouched() {
      q(this.$$controls, function (a) {
        a.$setUntouched();
      });
    }, $setSubmitted: function $setSubmitted() {
      this.$$animate.addClass(this.$$element, "ng-submitted");this.$submitted = !0;this.$$parentForm.$setSubmitted();
    } };
  Vd({ clazz: Lb, set: function set(a, b, d) {
      var c = a[b];c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
    }, unset: function unset(a, b, d) {
      var c = a[b];c && ($a(c, d), 0 === c.length && delete a[b]);
    } });var ce = function ce(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || w;
      }return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Lb, compile: function compile(d, e) {
          d.addClass(Va).addClass(ob);var g = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var p = function p(b) {
                  a.$apply(function () {
                    n.$commitViewValue();n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", p);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var r = g ? c(n.$name) : w;g && (r(a, n), e.$observe(g, function (b) {
                n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);r(a, void 0);R(n, Mb);
              });
            } };
        } };
    }];
  },
      Be = ce(),
      Ne = ce(!0),
      Kg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Vg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Wg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Lg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      de = /^(\d{4,})-(\d{2})-(\d{2})$/,
      ee = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Cc = /^(\d{4,})-W(\d\d)$/,
      fe = /^(\d{4,})-(\d\d)$/,
      ge = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Xd = W();q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Xd[a] = !0;
  });var he = { text: function text(a, b, d, c, f, e) {
      Sa(a, b, d, c, f, e);xc(c);
    }, date: pb("date", de, Nb(de, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": pb("datetimelocal", ee, Nb(ee, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: pb("time", ge, Nb(ge, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: pb("week", Cc, function (a, b) {
      if (fa(a)) return a;
      if (E(a)) {
        Cc.lastIndex = 0;var d = Cc.exec(a);if (d) {
          var c = +d[1],
              f = +d[2],
              e = d = 0,
              g = 0,
              h = 0,
              k = Rd(c),
              f = 7 * (f - 1);b && (d = b.getHours(), e = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + f, d, e, g, h);
        }
      }return NaN;
    }, "yyyy-Www"), month: pb("month", fe, Nb(fe, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, f, e) {
      yc(a, b, d, c);Yd(c);Sa(a, b, d, c, f, e);var g, h;if (v(d.min) || d.ngMin) c.$validators.min = function (a) {
        return c.$isEmpty(a) || x(g) || a >= g;
      }, d.$observe("min", function (a) {
        g = Ta(a);c.$validate();
      });
      if (v(d.max) || d.ngMax) c.$validators.max = function (a) {
        return c.$isEmpty(a) || x(h) || a <= h;
      }, d.$observe("max", function (a) {
        h = Ta(a);c.$validate();
      });if (v(d.step) || d.ngStep) {
        var k;c.$validators.step = function (a, b) {
          return c.$isEmpty(b) || x(k) || Zd(b, g || 0, k);
        };d.$observe("step", function (a) {
          k = Ta(a);c.$validate();
        });
      }
    }, url: function url(a, b, d, c, f, e) {
      Sa(a, b, d, c, f, e);xc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Vg.test(d);
      };
    }, email: function email(a, b, d, c, f, e) {
      Sa(a, b, d, c, f, e);xc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Wg.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      var f = !d.ngTrim || "false" !== S(d.ngTrim);x(d.name) && b.attr("name", ++rb);b.on("click", function (a) {
        var g;b[0].checked && (g = d.value, f && (g = S(g)), c.$setViewValue(g, a && a.type));
      });c.$render = function () {
        var a = d.value;f && (a = S(a));b[0].checked = a === c.$viewValue;
      };d.$observe("value", c.$render);
    }, range: function range(a, b, d, c, f, e) {
      function g(a, c) {
        b.attr(a, d[a]);d.$observe(a, c);
      }function h(a) {
        n = Ta(a);ga(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
      }function k(a) {
        p = Ta(a);ga(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), c.$setViewValue(a)) : c.$validate());
      }function l(a) {
        r = Ta(a);ga(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
      }yc(a, b, d, c);Yd(c);Sa(a, b, d, c, f, e);var m = c.$$hasNativeValidators && "range" === b[0].type,
          n = m ? 0 : void 0,
          p = m ? 100 : void 0,
          r = m ? 1 : void 0,
          q = b[0].validity;a = v(d.min);f = v(d.max);e = v(d.step);var s = c.$render;c.$render = m && v(q.rangeUnderflow) && v(q.rangeOverflow) ? function () {
        s();c.$setViewValue(b.val());
      } : s;a && (c.$validators.min = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || x(n) || b >= n;
      }, g("min", h));f && (c.$validators.max = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || x(p) || b <= p;
      }, g("max", k));e && (c.$validators.step = m ? function () {
        return !q.stepMismatch;
      } : function (a, b) {
        return c.$isEmpty(b) || x(r) || Zd(b, n || 0, r);
      }, g("step", l));
    }, checkbox: function checkbox(a, b, d, c, f, e, g, h) {
      var k = $d(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = $d(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return qa(a, k);
      });c.$parsers.push(function (a) {
        return a ? k : l;
      });
    }, hidden: w, button: w, submit: w, reset: w, file: w },
      Rc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(f, e, g, h) {
          h[0] && (he[P(g.type)] || he.text)(f, e, g, h[0], b, a, d, c);
        } } };
  }],
      Xg = /^(true|false|\d+)$/,
      ef = function ef() {
    return { restrict: "A", priority: 100, compile: function compile(a, b) {
        return Xg.test(b.ngValue) ? function (a, b, f) {
          a = a.$eval(f.ngValue);b.prop("value", a);f.$set("value", a);
        } : function (a, b, f) {
          a.$watch(f.ngValue, function (a) {
            b.prop("value", a);f.$set("value", a);
          });
        };
      } };
  },
      Fe = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);return function (b, c, f) {
          a.$$addBindingInfo(c, f.ngBind);c = c[0];b.$watch(f.ngBind, function (a) {
            c.textContent = Yb(a);
          });
        };
      } };
  }],
      He = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];e.$observe("ngBindTemplate", function (a) {
            d.textContent = x(a) ? "" : a;
          });
        };
      } };
  }],
      Ge = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, f) {
        var e = b(f.ngBindHtml),
            g = b(f.ngBindHtml, function (b) {
          return a.valueOf(b);
        });d.$$addBindingClass(c);return function (b, c, f) {
          d.$$addBindingInfo(c, f.ngBindHtml);b.$watch(g, function () {
            var d = e(b);
            c.html(a.getTrustedHtml(d) || "");
          });
        };
      } };
  }],
      df = ma({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      Ie = Ac("", !0),
      Ke = Ac("Odd", 0),
      Je = Ac("Even", 1),
      Le = Ra({ compile: function compile(a, b) {
      b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
    } }),
      Me = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      Wc = {},
      Yg = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = Ca("ng-" + a);Wc[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(f, e) {
          var g = d(e[b], null, !0);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };Yg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var Pe = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, f, e, g) {
        var h, k, l;d.$watch(f.ngIf, function (d) {
          d ? k || g(function (d, e) {
            k = e;d[d.length++] = b.$$createComment("end ngIf", f.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).done(function (a) {
            !1 !== a && (l = null);
          }), h = null));
        });
      } };
  }],
      Qe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: $.noop, compile: function compile(c, f) {
        var e = f.ngInclude || f.src,
            g = f.onload || "",
            h = f.autoscroll;return function (c, f, m, n, p) {
          var q = 0,
              s,
              w,
              u,
              H = function H() {
            w && (w.remove(), w = null);s && (s.$destroy(), s = null);u && (d.leave(u).done(function (a) {
              !1 !== a && (w = null);
            }), w = u, u = null);
          };c.$watch(e, function (e) {
            var m = function m(a) {
              !1 === a || !v(h) || h && !c.$eval(h) || b();
            },
                w = ++q;e ? (a(e, !0).then(function (a) {
              if (!c.$$destroyed && w === q) {
                var b = c.$new();n.template = a;a = p(b, function (a) {
                  H();d.enter(a, null, f).done(m);
                });s = b;u = a;s.$emit("$includeContentLoaded", e);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || w !== q || (H(), c.$emit("$includeContentError", e));
            }), c.$emit("$includeContentRequested", e)) : (H(), n.template = null);
          });
        };
      } };
  }],
      gf = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, f) {
        na.call(d[0]).match(/SVG/) ? (d.empty(), a(Zc(f.template, z.document).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(b));
      } };
  }],
      Re = Ra({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      cf = function cf() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var f = d.ngList || ", ",
            e = "false" !== d.ngTrim,
            g = e ? S(f) : f;c.$parsers.push(function (a) {
          if (!x(a)) {
            var b = [];a && q(a.split(g), function (a) {
              a && b.push(e ? S(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          if (C(a)) return a.join(f);
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      ob = "ng-valid",
      Ud = "ng-invalid",
      Va = "ng-pristine",
      Rb = "ng-dirty",
      qb = M("ngModel");Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype = { $$initGetterSetters: function $$initGetterSetters() {
      if (this.$options.getOption("getterSetter")) {
        var a = this.$$parse(this.$$attr.ngModel + "()"),
            b = this.$$parse(this.$$attr.ngModel + "($$$p)");this.$$ngModelGet = function (b) {
          var c = this.$$parsedNgModel(b);y(c) && (c = a(b));return c;
        };this.$$ngModelSet = function (a, c) {
          y(this.$$parsedNgModel(a)) ? b(a, { $$$p: c }) : this.$$parsedNgModelAssign(a, c);
        };
      } else if (!this.$$parsedNgModel.assign) throw qb("nonassign", this.$$attr.ngModel, ya(this.$$element));
    }, $render: w, $isEmpty: function $isEmpty(a) {
      return x(a) || "" === a || null === a || a !== a;
    }, $$updateEmptyClasses: function $$updateEmptyClasses(a) {
      this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
    }, $setPristine: function $setPristine() {
      this.$dirty = !1;this.$pristine = !0;this.$$animate.removeClass(this.$$element, Rb);this.$$animate.addClass(this.$$element, Va);
    }, $setDirty: function $setDirty() {
      this.$dirty = !0;this.$pristine = !1;this.$$animate.removeClass(this.$$element, Va);this.$$animate.addClass(this.$$element, Rb);this.$$parentForm.$setDirty();
    },
    $setUntouched: function $setUntouched() {
      this.$touched = !1;this.$untouched = !0;this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
    }, $setTouched: function $setTouched() {
      this.$touched = !0;this.$untouched = !1;this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
    }, $rollbackViewValue: function $rollbackViewValue() {
      this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue = this.$$lastCommittedViewValue;this.$render();
    }, $validate: function $validate() {
      if (!ga(this.$modelValue)) {
        var a = this.$$lastCommittedViewValue,
            b = this.$$rawModelValue,
            d = this.$valid,
            c = this.$modelValue,
            f = this.$options.getOption("allowInvalid"),
            e = this;this.$$runValidators(b, a, function (a) {
          f || d === a || (e.$modelValue = a ? b : void 0, e.$modelValue !== c && e.$$writeModelToScope());
        });
      }
    }, $$runValidators: function $$runValidators(a, b, d) {
      function c() {
        var c = !0;q(k.$validators, function (d, f) {
          var g = Boolean(d(a, b));c = c && g;e(f, g);
        });return c ? !0 : (q(k.$asyncValidators, function (a, b) {
          e(b, null);
        }), !1);
      }function f() {
        var c = [],
            d = !0;q(k.$asyncValidators, function (f, g) {
          var h = f(a, b);if (!h || !y(h.then)) throw qb("nopromise", h);e(g, void 0);c.push(h.then(function () {
            e(g, !0);
          }, function () {
            d = !1;e(g, !1);
          }));
        });c.length ? k.$$q.all(c).then(function () {
          g(d);
        }, w) : g(!0);
      }function e(a, b) {
        h === k.$$currentValidationRunId && k.$setValidity(a, b);
      }function g(a) {
        h === k.$$currentValidationRunId && d(a);
      }this.$$currentValidationRunId++;var h = this.$$currentValidationRunId,
          k = this;(function () {
        var a = k.$$parserName || "parse";if (x(k.$$parserValid)) e(a, null);else return k.$$parserValid || (q(k.$validators, function (a, b) {
          e(b, null);
        }), q(k.$asyncValidators, function (a, b) {
          e(b, null);
        })), e(a, k.$$parserValid), k.$$parserValid;return !0;
      })() ? c() ? f() : g(!1) : g(!1);
    }, $commitViewValue: function $commitViewValue() {
      var a = this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
    }, $$parseAndValidate: function $$parseAndValidate() {
      var a = this.$$lastCommittedViewValue,
          b = this;if (this.$$parserValid = x(a) ? void 0 : !0) for (var d = 0; d < this.$parsers.length; d++) {
        if (a = this.$parsers[d](a), x(a)) {
          this.$$parserValid = !1;break;
        }
      }ga(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));var c = this.$modelValue,
          f = this.$options.getOption("allowInvalid");this.$$rawModelValue = a;f && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
        f || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
      });
    }, $$writeModelToScope: function $$writeModelToScope() {
      this.$$ngModelSet(this.$$scope, this.$modelValue);q(this.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (b) {
          this.$$exceptionHandler(b);
        }
      }, this);
    }, $setViewValue: function $setViewValue(a, b) {
      this.$viewValue = a;this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
    }, $$debounceViewValueCommit: function $$debounceViewValueCommit(a) {
      var b = this.$options.getOption("debounce");Y(b[a]) ? b = b[a] : Y(b["default"]) && (b = b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d = this;0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
        d.$commitViewValue();
      }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        d.$commitViewValue();
      });
    } };Vd({ clazz: Ob, set: function set(a, b) {
      a[b] = !0;
    }, unset: function unset(a, b) {
      delete a[b];
    } });var bf = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Ob, priority: 1, compile: function compile(b) {
        b.addClass(Va).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, b, f, e) {
            var g = e[0];b = e[1] || g.$$parentForm;if (e = e[2]) g.$options = e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, f, e) {
            function g() {
              h.$setTouched();
            }var h = e[0];if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function (a) {
              h.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
            });
          } };
      } };
  }],
      Pb,
      Zg = /(\s+|^)default(\s+|$)/;Bc.prototype = { getOption: function getOption(a) {
      return this.$$options[a];
    }, createChild: function createChild(a) {
      var b = !1;a = R({}, a);q(a, function (d, c) {
        "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = S(d.replace(Zg, function () {
          a.updateOnDefault = !0;return " ";
        })));
      }, this);b && (delete a["*"], ae(a, this.$$options));ae(a, Pb.$$options);return new Bc(a);
    } };Pb = new Bc({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null });var ff = function ff() {
    function a(a, d) {
      this.$$attrs = a;this.$$scope = d;
    }a.$inject = ["$attrs", "$scope"];a.prototype = { $onInit: function $onInit() {
        var a = this.parentCtrl ? this.parentCtrl.$options : Pb,
            d = this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options = a.createChild(d);
      } };return { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: a };
  },
      Se = Ra({ terminal: !0, priority: 1E3 }),
      $g = M("ngOptions"),
      ah = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      $e = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function f(a) {
        var b;if (!q && ta(a)) b = a;else {
          b = [];for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }return b;
      }var n = a.match(ah);if (!n) throw $g("iexp", a, ya(b));var p = n[5] || n[7],
          q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var v = a && d(a) || b,
          u = s && d(s),
          w = s ? function (a, b) {
        return u(c, b);
      } : function (a) {
        return la(a);
      },
          x = function x(a, b) {
        return w(a, B(a, b));
      },
          t = d(n[2] || n[1]),
          z = d(n[3] || ""),
          A = d(n[4] || ""),
          K = d(n[8]),
          I = {},
          B = q ? function (a, b) {
        I[q] = b;I[p] = a;return I;
      } : function (a) {
        I[p] = a;return I;
      };return { trackBy: s, getTrackByValue: x, getWatchables: d(K, function (a) {
          var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var h = a === d ? g : d[g],
                l = a[h],
                h = B(l, h),
                l = w(l, h);b.push(l);if (n[2] || n[1]) l = t(c, h), b.push(l);n[4] && (h = A(c, h), b.push(h));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
            var p = d === g ? n : g[n],
                q = B(d[p], p),
                r = v(c, q),
                p = w(r, q),
                u = t(c, q),
                I = z(c, q),
                q = A(c, q),
                r = new e(p, r, u, I, q);a.push(r);b[p] = r;
          }return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[x(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return s ? Fa(a.viewValue) : a.viewValue;
            } };
        } };
    }var f = z.document.createElement("option"),
        e = z.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = w;
        }, post: function post(d, h, k, l) {
          function m(a) {
            var b = (a = t.getOptionFromViewValue(a)) && a.element;b && !b.selected && (b.selected = !0);return a;
          }function n(a, b) {
            a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);b.value = a.selectValue;
          }function p() {
            var a = t && r.readValue();if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
              var c = t.items[b];v(c.group) ? Fb(c.element.parentNode) : Fb(c.element);
            }t = y.getOptions();var d = {};z && h.prepend(r.emptyOption);t.items.forEach(function (a) {
              var b;if (v(a.group)) {
                b = d[a.group];b || (b = e.cloneNode(!1), A.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = f.cloneNode(!1);
              } else b = A, c = f.cloneNode(!1);b.appendChild(c);n(a, c);
            });h[0].appendChild(A);s.$render();s.$isEmpty(a) || (b = r.readValue(), (y.trackBy || w ? qa(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
          }var r = l[0],
              s = l[1],
              w = k.multiple;l = 0;for (var u = h.children(), x = u.length; l < x; l++) {
            if ("" === u[l].value) {
              r.hasEmptyOption = !0;r.emptyOption = u.eq(l);break;
            }
          }var z = !!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,
              y = c(k.ngOptions, h, d),
              A = b[0].createDocumentFragment();r.generateUnknownOptionValue = function (a) {
            return "?";
          };w ? (r.writeValue = function (a) {
            var b = a && a.map(m) || [];t.items.forEach(function (a) {
              a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
            });
          }, r.readValue = function () {
            var a = h.val() || [],
                b = [];q(a, function (a) {
              (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
            });return b;
          }, y.trackBy && d.$watchCollection(function () {
            if (C(s.$viewValue)) return s.$viewValue.map(function (a) {
              return y.getTrackByValue(a);
            });
          }, function () {
            s.$render();
          })) : (r.writeValue = function (a) {
            var b = t.selectValueMap[h.val()],
                c = t.getOptionFromViewValue(a);b && b.element.removeAttribute("selected");c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : z ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a);
          }, r.readValue = function () {
            var a = t.selectValueMap[h.val()];return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(), t.getViewValueFromOption(a)) : null;
          }, y.trackBy && d.$watch(function () {
            return y.getTrackByValue(s.$viewValue);
          }, function () {
            s.$render();
          }));z && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function (a, b) {
            "" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function () {
              r.hasEmptyOption = !1;r.emptyOption = void 0;
            }));
          }) : r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables, p);
        } } };
  }],
      Te = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        f = /^when(Minus)?(.+)$/;return { link: function link(e, g, h) {
        function k(a) {
          g.text(a || "");
        }var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = e.$eval(m) || {},
            r = {},
            s = b.startSymbol(),
            v = b.endSymbol(),
            u = s + l + "-" + n + v,
            H = $.noop,
            y;q(h, function (a, b) {
          var c = f.exec(b);c && (c = (c[1] ? "-" : "") + P(c[2]), p[c] = g.attr(h.$attr[b]));
        });q(p, function (a, d) {
          r[d] = b(a.replace(c, u));
        });e.$watch(l, function (b) {
          var c = parseFloat(b),
              f = ga(c);f || c in p || (c = a.pluralCat(c - n));c === y || f && ga(y) || (H(), f = r[c], x(f) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), H = w, k()) : H = e.$watch(f, k), y = c);
        });
      } };
  }],
      Ue = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = M("ngRepeat"),
        f = function f(a, b, c, d, _f2, m, n) {
      a[c] = d;_f2 && (a[_f2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(e, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!l) throw c("iexp", h);var m = l[1],
            n = l[2],
            p = l[3],
            r = l[4],
            l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var s = l[3] || l[1],
            v = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var u,
            w,
            x,
            t,
            y = { $id: la };r ? u = a(r) : (x = function x(a, b) {
          return la(b);
        }, t = function t(a) {
          return a;
        });return function (a, d, e, g, l) {
          u && (w = function w(b, c, d) {
            v && (y[v] = b);y[s] = c;y.$index = d;return u(a, y);
          });var m = W();a.$watchCollection(n, function (e) {
            var g,
                n,
                r = d[0],
                u,
                y = W(),
                z,
                D,
                E,
                B,
                F,
                C,
                I;p && (a[p] = e);if (ta(e)) F = e, n = w || x;else for (I in n = w || t, F = [], e) {
              va.call(e, I) && "$" !== I.charAt(0) && F.push(I);
            }z = F.length;I = Array(z);for (g = 0; g < z; g++) {
              if (D = e === F ? g : F[g], E = e[D], B = n(D, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C;else {
                if (y[B]) throw q(I, function (a) {
                  a && a.scope && (m[a.id] = a);
                }), c("dupes", h, B, E);I[g] = { id: B,
                  scope: void 0, clone: void 0 };y[B] = !0;
              }
            }for (u in m) {
              C = m[u];B = ub(C.clone);b.leave(B);if (B[0].parentNode) for (g = 0, n = B.length; g < n; g++) {
                B[g].$$NG_REMOVED = !0;
              }C.scope.$destroy();
            }for (g = 0; g < z; g++) {
              if (D = e === F ? g : F[g], E = e[D], C = I[g], C.scope) {
                u = r;do {
                  u = u.nextSibling;
                } while (u && u.$$NG_REMOVED);C.clone[0] !== u && b.move(ub(C.clone), null, r);r = C.clone[C.clone.length - 1];f(C.scope, g, s, E, v, D, z);
              } else l(function (a, c) {
                C.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;C.clone = a;y[C.id] = C;f(C.scope, g, s, E, v, D, z);
              });
            }m = y;
          });
        };
      } };
  }],
      Ve = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Oe = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      We = Ra(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      Xe = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(d, c, f, e) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function m(a, b) {
          return function (c) {
            !1 !== c && a.splice(b, 1);
          };
        };d.$watch(f.ngSwitch || f.on, function (c) {
          for (var d, f; k.length;) {
            a.cancel(k.pop());
          }d = 0;for (f = l.length; d < f; ++d) {
            var s = ub(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).done(m(k, d));
          }h.length = 0;l.length = 0;(g = e.cases["!" + c] || e.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);
              var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      Ye = Ra({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, f) {
      a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
        return c[b - 1] !== a;
      });q(a, function (a) {
        c.cases["!" + a] = c.cases["!" + a] || [];c.cases["!" + a].push({ transclude: f, element: b });
      });
    } }),
      Ze = Ra({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, f) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: f, element: b });
    } }),
      bh = M("ngTransclude"),
      af = ["$compile", function (a) {
    return { restrict: "EAC", terminal: !0, compile: function compile(b) {
        var d = a(b.contents());b.empty();return function (a, b, e, g, h) {
          function k() {
            d(a, function (a) {
              b.append(a);
            });
          }if (!h) throw bh("orphan", ya(b));e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = "");e = e.ngTransclude || e.ngTranscludeSlot;h(function (a, c) {
            var d;if (d = a.length) a: {
              d = 0;for (var e = a.length; d < e; d++) {
                var g = a[d];if (g.nodeType !== Ja || g.nodeValue.trim()) {
                  d = !0;break a;
                }
              }d = void 0;
            }d ? b.append(a) : (k(), c.$destroy());
          }, null, e);e && !h.isSlotFilled(e) && k();
        };
      } };
  }],
      Ce = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(b, d) {
        "text/ng-template" === d.type && a.put(d.id, b[0].text);
      } };
  }],
      ch = { $setViewValue: w, $render: w },
      dh = ["$element", "$scope", function (a, b) {
    function d() {
      h || (h = !0, b.$$postDigest(function () {
        h = !1;e.ngModelCtrl.$render();
      }));
    }function c(a) {
      k || (k = !0, b.$$postDigest(function () {
        b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
      }));
    }function f(a) {
      a.prop("selected", !0);a.attr("selected", !0);
    }var e = this,
        g = new Qa();e.selectValueMap = {};e.ngModelCtrl = ch;e.multiple = !1;e.unknownOption = D(z.document.createElement("option"));e.hasEmptyOption = !1;e.emptyOption = void 0;e.renderUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b);
    };e.updateUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
      a.val(b);
    };e.generateUnknownOptionValue = function (a) {
      return "? " + la(a) + " ?";
    };e.removeUnknownOption = function () {
      e.unknownOption.parent() && e.unknownOption.remove();
    };e.selectEmptyOption = function () {
      e.emptyOption && (a.val(""), f(e.emptyOption));
    };e.unselectEmptyOption = function () {
      e.hasEmptyOption && e.emptyOption.removeAttr("selected");
    };b.$on("$destroy", function () {
      e.renderUnknownOption = w;
    });e.readValue = function () {
      var b = a.val(),
          b = b in e.selectValueMap ? e.selectValueMap[b] : b;return e.hasOption(b) ? b : null;
    };e.writeValue = function (b) {
      var c = a[0].options[a[0].selectedIndex];c && c.removeAttribute("selected");e.hasOption(b) ? (e.removeUnknownOption(), c = la(b), a.val(c in e.selectValueMap ? c : b), f(D(a[0].options[a[0].selectedIndex]))) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b);
    };e.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Pa(a, '"option value"');"" === a && (e.hasEmptyOption = !0, e.emptyOption = b);var c = g.get(a) || 0;g.put(a, c + 1);d();
      }
    };e.removeOption = function (a) {
      var b = g.get(a);b && (1 === b ? (g.remove(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : g.put(a, b - 1));
    };e.hasOption = function (a) {
      return !!g.get(a);
    };var h = !1,
        k = !1;e.registerOption = function (a, b, d, f, g) {
      if (d.$attr.ngValue) {
        var h,
            k = NaN;d.$observe("value", function (a) {
          var d,
              f = b.prop("selected");v(k) && (e.removeOption(h), delete e.selectValueMap[k], d = !0);k = la(a);h = a;e.selectValueMap[k] = a;e.addOption(a, b);b.attr("value", k);d && f && c();
        });
      } else f ? d.$observe("value", function (a) {
        e.readValue();
        var d,
            f = b.prop("selected");v(h) && (e.removeOption(h), d = !0);h = a;e.addOption(a, b);d && f && c();
      }) : g ? a.$watch(g, function (a, f) {
        d.$set("value", a);var g = b.prop("selected");f !== a && e.removeOption(f);e.addOption(a, b);f && g && c();
      }) : e.addOption(d.value, b);d.$observe("disabled", function (a) {
        if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
      });b.on("$destroy", function () {
        var a = e.readValue(),
            b = d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
      });
    };
  }],
      De = function De() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: dh, priority: 1, link: { pre: function pre(a, b, d, c) {
          var f = c[0],
              e = c[1];if (e) {
            if (f.ngModelCtrl = e, b.on("change", function () {
              f.removeUnknownOption();a.$apply(function () {
                e.$setViewValue(f.readValue());
              });
            }), d.multiple) {
              f.multiple = !0;f.readValue = function () {
                var a = [];q(b.find("option"), function (b) {
                  b.selected && !b.disabled && (b = b.value, a.push(b in f.selectValueMap ? f.selectValueMap[b] : b));
                });return a;
              };f.writeValue = function (a) {
                var c = new Qa(a);q(b.find("option"), function (a) {
                  a.selected = v(c.get(a.value)) || v(c.get(f.selectValueMap[a.value]));
                });
              };var g,
                  h = NaN;a.$watch(function () {
                h !== e.$viewValue || qa(g, e.$viewValue) || (g = ra(e.$viewValue), e.$render());h = e.$viewValue;
              });e.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          } else f.registerOption = w;
        }, post: function post(a, b, d, c) {
          var f = c[1];if (f) {
            var e = c[0];f.$render = function () {
              e.writeValue(f.$viewValue);
            };
          }
        } } };
  },
      Ee = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        var c, f;v(d.ngValue) || (v(d.value) ? c = a(d.value, !0) : (f = a(b.text(), !0)) || d.$set("value", b.text()));return function (a, b, d) {
          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, f);
        };
      } };
  }],
      Tc = function Tc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      Sc = function Sc() {
    return { restrict: "A", require: "?ngModel",
      link: function link(a, b, d, c) {
        if (c) {
          var f,
              e = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw M("ngPattern")("noregexp", e, a, ya(b));f = a || void 0;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || x(f) || f.test(b);
          };
        }
      } };
  },
      Vc = function Vc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var f = -1;d.$observe("maxlength", function (a) {
            a = Z(a);f = ga(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > f || c.$isEmpty(b) || b.length <= f;
          };
        }
      } };
  },
      Uc = function Uc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var f = 0;d.$observe("minlength", function (a) {
            f = Z(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= f;
          };
        }
      } };
  };z.angular.bootstrap ? z.console && console.log("WARNING: Tried to load angular more than once.") : (ue(), xe($), $.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
        WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var f = a | 0,
            e = c;void 0 === e && (e = Math.min(b(a), 3));Math.pow(10, e);return 1 == f && 0 == e ? "one" : "other";
      } });
  }]), D(function () {
    pe(z.document, Mc);
  }));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function (window, undefined) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var
	// The deferred used on DOM ready
	readyList,


	// A central reference to the root jQuery(document)
	rootjQuery,


	// Support: IE<10
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),


	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	    document = window.document,
	    docElem = document.documentElement,


	// Map over jQuery in case of overwrite
	_jQuery = __webpack_provided_window_dot_jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$,


	// [[Class]] -> type pairs
	class2type = {},


	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],
	    core_version = "1.10.2",


	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	    core_push = core_deletedIds.push,
	    core_slice = core_deletedIds.slice,
	    core_indexOf = core_deletedIds.indexOf,
	    core_toString = class2type.toString,
	    core_hasOwn = class2type.hasOwnProperty,
	    core_trim = core_version.trim,


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init(selector, context, rootjQuery);
	},


	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,


	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,


	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,


	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,


	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([\da-z])/gi,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	},


	// The ready event handler
	completed = function completed(event) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
			detach();
			jQuery.ready();
		}
	},

	// Clean-up method for dom ready events
	detach = function detach() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
		} else {
			document.detachEvent("onreadystatechange", completed);
			window.detachEvent("onload", completed);
		}
	};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: core_version,

		constructor: jQuery,
		init: function init(selector, context, rootjQuery) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return rootjQuery.ready(selector);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		},

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return core_slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {
			return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			num < 0 ? this[this.length + num] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function each(callback, args) {
			return jQuery.each(this, callback, args);
		},

		ready: function ready(fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		},

		slice: function slice() {
			return this.pushStack(core_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		end: function end() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};

	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function () {
		var src,
		    copyIsArray,
		    copy,
		    name,
		    options,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (length === i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		// Non-digits removed to match rinlinejQuery
		expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),

		noConflict: function noConflict(deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && __webpack_provided_window_dot_jQuery === jQuery) {
				__webpack_provided_window_dot_jQuery = _jQuery;
			}

			return jQuery;
		},

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function holdReady(hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if (!document.body) {
				return setTimeout(jQuery.ready);
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.trigger) {
				jQuery(document).trigger("ready").off("ready");
			}
		},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function (obj) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function isWindow(obj) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function isNumeric(obj) {
			return !isNaN(parseFloat(obj)) && isFinite(obj);
		},

		type: function type(obj) {
			if (obj == null) {
				return String(obj);
			}
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		isPlainObject: function isPlainObject(obj) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if (jQuery.support.ownLast) {
				for (key in obj) {
					return core_hasOwn.call(obj, key);
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for (key in obj) {}

			return key === undefined || core_hasOwn.call(obj, key);
		},

		isEmptyObject: function isEmptyObject(obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		error: function error(msg) {
			throw new Error(msg);
		},

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		parseHTML: function parseHTML(data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts);
			if (scripts) {
				jQuery(scripts).remove();
			}
			return jQuery.merge([], parsed.childNodes);
		},

		parseJSON: function parseJSON(data) {
			// Attempt to parse using the native JSON parser first
			if (window.JSON && window.JSON.parse) {
				return window.JSON.parse(data);
			}

			if (data === null) {
				return data;
			}

			if (typeof data === "string") {

				// Make sure leading/trailing whitespace is removed (IE can't handle it)
				data = jQuery.trim(data);

				if (data) {
					// Make sure the incoming data is actual JSON
					// Logic borrowed from http://json.org/json2.js
					if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {

						return new Function("return " + data)();
					}
				}
			}

			jQuery.error("Invalid JSON: " + data);
		},

		// Cross-browser xml parsing
		parseXML: function parseXML(data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					// Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					// IE
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		},

		noop: function noop() {},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function globalEval(data) {
			if (data && jQuery.trim(data)) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				(window.execScript || function (data) {
					window["eval"].call(window, data);
				})(data);
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function nodeName(elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function each(obj, callback, args) {
			var value,
			    i = 0,
			    length = obj.length,
			    isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Use native String.trim function wherever possible
		trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function (text) {
			return text == null ? "" : core_trim.call(text);
		} :

		// Otherwise use our own trimming functionality
		function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					core_push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			var len;

			if (arr) {
				if (core_indexOf) {
					return core_indexOf.call(arr, elem, i);
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

				for (; i < len; i++) {
					// Skip accessing in sparse arrays
					if (i in arr && arr[i] === elem) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function merge(first, second) {
			var l = second.length,
			    i = first.length,
			    j = 0;

			if (typeof l === "number") {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, inv) {
			var retVal,
			    ret = [],
			    i = 0,
			    length = elems.length;
			inv = !!inv;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				retVal = !!callback(elems[i], i);
				if (inv !== retVal) {
					ret.push(elems[i]);
				}
			}

			return ret;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var value,
			    i = 0,
			    length = elems.length,
			    isArray = isArraylike(elems),
			    ret = [];

			// Go through the array, translating each of the items to their
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}
			}

			// Flatten any nested arrays
			return core_concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var args, proxy, tmp;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = core_slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(core_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    length = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ? elems :

			// Gets
			bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		},

		now: function now() {
			return new Date().getTime();
		},

		// A method for quickly swapping in/out CSS properties to get correct calculations.
		// Note: this method belongs to the css module but it's needed here for the support module.
		// If support gets modularized, this method should be moved back to the css module.
		swap: function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		}
	});

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready);

				// Standards-based browsers support DOMContentLoaded
			} else if (document.addEventListener) {
				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed, false);

				// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent("onreadystatechange", completed);

				// A fallback to window.onload, that will always work
				window.attachEvent("onload", completed);

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch (e) {}

				if (top && top.doScroll) {
					(function doScrollCheck() {
						if (!jQuery.isReady) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch (e) {
								return setTimeout(doScrollCheck, 50);
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise(obj);
	};

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {
		var length = obj.length,
		    type = jQuery.type(obj);

		if (jQuery.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
	}

	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	/*!
  * Sizzle CSS Selector Engine v1.10.2
  * http://sizzlejs.com/
  *
  * Copyright 2013 jQuery Foundation, Inc. and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2013-07-03
  */
	(function (window, undefined) {

		var i,
		    support,
		    cachedruns,
		    Expr,
		    getText,
		    isXML,
		    compile,
		    outermostContext,
		    sortInput,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + -new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    hasDuplicate = false,
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
				return 0;
			}
			return 0;
		},


		// General-purpose constants
		strundefined = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),
		    MAX_NEGATIVE = 1 << 31,


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function (elem) {
			var i = 0,
			    len = this.length;
			for (; i < len; i++) {
				if (this[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace("w", "w#"),


		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",


		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rsibling = new RegExp(whitespace + "*[+~]"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + characterEncoding + ")"),
			"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
			"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rescape = /'|\\/g,


		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped :
			// BMP codepoint
			high < 0 ? String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		};

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}

			context = context || document;
			results = results || [];

			if (!selector || typeof selector !== "string") {
				return results;
			}

			if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
				return [];
			}

			if (documentIsHTML && !seed) {

				// Shortcuts
				if (match = rquickExpr.exec(selector)) {
					// Speed-up: Sizzle("#ID")
					if (m = match[1]) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}

				// QSA path
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType === 9 && selector;

					// qSA works strangely on Element-rooted queries
					// We can work around this by specifying an extra ID on the root
					// and working up from there (Thanks to Andrew Dupont for the technique)
					// IE 8 doesn't work on object elements
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);

						if (old = context.getAttribute("id")) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";

						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && context.parentNode || context;
						newSelector = groups.join(",");
					}

					if (newSelector) {
						try {
							push.apply(results, newContext.querySelectorAll(newSelector));
							return results;
						} catch (qsaError) {} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key += " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created div and expects a boolean result
   */
		function assert(fn) {
			var div = document.createElement("div");

			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				// release memory in IE
				div = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = attrs.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Detect xml
   * @param {Element|Object} elem An element or a document
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var doc = node ? node.ownerDocument || node : preferredDoc,
			    parent = doc.defaultView;

			// If no document and documentElement is available, return
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Set our document
			document = doc;
			docElem = doc.documentElement;

			// Support tests
			documentIsHTML = !isXML(doc);

			// Support: IE>8
			// If iframe document is assigned to "document" variable and if iframe has been reloaded,
			// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
			// IE6-8 do not support the defaultView property so parent will be undefined
			if (parent && parent.attachEvent && parent !== parent.top) {
				parent.attachEvent("onbeforeunload", function () {
					setDocument();
				});
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});

			// Check if getElementsByClassName can be trusted
			support.getElementsByClassName = assert(function (div) {
				div.innerHTML = "<div class='a'></div><div class='a i'></div>";

				// Support: Safari<4
				// Catch class over-caching
				div.firstChild.className = "i";
				// Support: Opera<10
				// Catch gEBCN failure to find non-leading classes
				return div.getElementsByClassName("i").length === 2;
			});

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});

			// ID find and filter
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (_typeof(context.getElementById) !== strundefined && documentIsHTML) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				// Support: IE6/7
				// getElementById is not reliable as a find shortcut
				delete Expr.find["ID"];

				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = _typeof(elem.getAttributeNode) !== strundefined && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (_typeof(context.getElementsByTagName) !== strundefined) {
					return context.getElementsByTagName(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,
				    results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (_typeof(context.getElementsByClassName) !== strundefined && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See http://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(doc.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					div.innerHTML = "<select><option selected=''></option></select>";

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}
				});

				assert(function (div) {

					// Support: Opera 10-12/IE8
					// ^= $= *= and empty values
					// Should not select anything
					// Support: Windows 8 Native Apps
					// The type attribute is restricted during .innerHTML assignment
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("t", "");

					if (div.querySelectorAll("[t^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (div) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(div, "div");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */

			// Element contains another
			// Purposefully does not implement inclusive descendent
			// As in, an element does not contain itself
			contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = docElem.compareDocumentPosition ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);

				if (compare) {
					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === doc || contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				}

				// Not directly comparable, sort on existence of method
				return a.compareDocumentPosition ? -1 : 1;
			} : function (a, b) {
				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;

					// Parentless nodes are either documents or disconnected
				} else if (!aup || !bup) {
					return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return doc;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				for (; node = elem[i]; i++) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (see #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[5] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3] && match[4] !== undefined) {
						match[2] = match[4];

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || _typeof(elem.getAttribute) !== strundefined && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    outerCache,
						    node,
						    diff,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[expando] || (parent[expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										outerCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}

								// Use previously-cached element index if available
							} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
								diff = cache[1];

								// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

									if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
										// Cache the index of each encountered element
										if (useCache) {
											(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
										}

										if (node === elem) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf.call(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": function enabled(elem) {
					return elem.disabled === false;
				},

				"disabled": function disabled(elem) {
					return elem.disabled === true;
				},

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
					//   not comment, processing instructions, or others
					// Thanks to Diego Perini for the nodeName shortcut
					//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
					// use getAttribute instead to test this case
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		function tokenize(selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		}

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    checkNonElements = base && dir === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var data,
				    cache,
				    outerCache,
				    dirkey = dirruns + " " + doneName;

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							if ((cache = outerCache[dir]) && cache[0] === dirkey) {
								if ((data = cache[1]) === true || data === cachedruns) {
									return data === true;
								}
							} else {
								cache = outerCache[dir] = [dirkey];
								cache[1] = matcher(elem, context, xml) || cachedruns;
								if (cache[1] === true) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf.call(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			// A counter to specify which element is currently being matched
			var matcherCachedRuns = 0,
			    bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, expandContext) {
				var elem,
				    j,
				    matcher,
				    setMatched = [],
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    outermost = expandContext != null,
				    contextBackup = outermostContext,

				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;

				if (outermost) {
					outermostContext = context !== document && context;
					cachedruns = matcherCachedRuns;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				for (; (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
							cachedruns = ++matcherCachedRuns;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, group /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!group) {
					group = tokenize(selector);
				}
				i = group.length;
				while (i--) {
					cached = matcherFromTokens(group[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
			}
			return cached;
		};

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function select(selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    match = tokenize(selector);

			if (!seed) {
				// Try to minimize operations if there is only one group
				if (match.length === 1) {

					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
						}
						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}
			}

			// Compile and execute a filtering function
			// Provide `match` to avoid retokenization if we modified the selector above
			compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
			return results;
		}

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome<14
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (div1) {
			// Should return 1, but returns 4 (following)
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (div) {
			div.innerHTML = "<input/>";
			div.firstChild.setAttribute("value", "");
			return div.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (div) {
			return div.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null;
				}
			});
		}

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
	})(window);
	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,

		// Last fire value (for non-forgettable lists)
		memory,

		// Flag to know if list was already fired
		_fired,

		// End of the loop when firing
		firingLength,

		// Index of currently firing callback (modified by remove if needed)
		firingIndex,

		// First callback to fire (used internally by add and fireWith)
		firingStart,

		// Actual callback list
		list = [],

		// Stack of fire calls for repeatable lists
		stack = !options.once && [],

		// Fire callbacks
		fire = function fire(data) {
			memory = options.memory && data;
			_fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for (; list && firingIndex < firingLength; firingIndex++) {
				if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if (list) {
				if (stack) {
					if (stack.length) {
						fire(stack.shift());
					}
				} else if (memory) {
					list = [];
				} else {
					self.disable();
				}
			}
		},

		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {
					// First, we save the current length
					var start = list.length;
					(function add(args) {
						jQuery.each(args, function (_, arg) {
							var type = jQuery.type(arg);
							if (type === "function") {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && type !== "string") {
								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);
					// Do we need to add the callbacks to the
					// current firing batch?
					if (firing) {
						firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
					} else if (memory) {
						firingStart = start;
						fire(memory);
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function remove() {
				if (list) {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
							// Handle firing indexes
							if (firing) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
			},
			// Remove all callbacks from the list
			empty: function empty() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function disable() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function disabled() {
				return !list;
			},
			// Lock the list in its current state
			lock: function lock() {
				stack = undefined;
				if (!memory) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function locked() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (list && (!_fired || stack)) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					if (firing) {
						stack.push(args);
					} else {
						fire(args);
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};
	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [
			// action, add listener, listener list, final state
			["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				then: function then() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;
					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {
							var action = tuple[0],
							    fn = jQuery.isFunction(fns[i]) && fns[i];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
								} else {
									newDefer[action + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Keep pipe for back-compat
			_promise.pipe = _promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						_state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(subordinate /* , ..., subordinateN */) {
			var i = 0,
			    resolveValues = core_slice.call(arguments),
			    length = resolveValues.length,


			// the count of uncompleted subordinates
			remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


			// Update function for both resolve and progress values
			updateFunc = function updateFunc(i, contexts, values) {
				return function (value) {
					contexts[i] = this;
					values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
					if (values === progressValues) {
						deferred.notifyWith(contexts, values);
					} else if (! --remaining) {
						deferred.resolveWith(contexts, values);
					}
				};
			},
			    progressValues,
			    progressContexts,
			    resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});
	jQuery.support = function (support) {

		var all,
		    a,
		    input,
		    select,
		    fragment,
		    opt,
		    eventName,
		    isSupported,
		    i,
		    div = document.createElement("div");

		// Setup
		div.setAttribute("className", "t");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// Finish early in limited (non-browser) environments
		all = div.getElementsByTagName("*") || [];
		a = div.getElementsByTagName("a")[0];
		if (!a || !a.style || !all.length) {
			return support;
		}

		// First batch of tests
		select = document.createElement("select");
		opt = select.appendChild(document.createElement("option"));
		input = div.getElementsByTagName("input")[0];

		a.style.cssText = "top:1px;float:left;opacity:.5";

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName("tbody").length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName("link").length;

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test(a.getAttribute("style"));

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test(a.style.opacity);

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

		// Will be defined later
		support.inlineBlockNeedsLayout = false;
		support.shrinkWrapBlocks = false;
		support.pixelPosition = false;
		support.deleteExpando = true;
		support.noCloneEvent = true;
		support.reliableMarginRight = true;
		support.boxSizingReliable = true;

		// Make sure checked status is properly cloned
		input.checked = true;
		support.noCloneChecked = input.cloneNode(true).checked;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<9
		try {
			delete div.test;
		} catch (e) {
			support.deleteExpando = false;
		}

		// Check if we can trust getAttribute("value")
		input = document.createElement("input");
		input.setAttribute("value", "");
		support.input = input.getAttribute("value") === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute("type", "radio");
		support.radioValue = input.value === "t";

		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute("checked", "t");
		input.setAttribute("name", "t");

		fragment = document.createDocumentFragment();
		fragment.appendChild(input);

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		support.appendChecked = input.checked;

		// WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		if (div.attachEvent) {
			div.attachEvent("onclick", function () {
				support.noCloneEvent = false;
			});

			div.cloneNode(true).click();
		}

		// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
		// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
		for (i in { submit: true, change: true, focusin: true }) {
			div.setAttribute(eventName = "on" + i, "t");

			support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
		}

		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Support: IE<9
		// Iteration over object's inherited properties before its own.
		for (i in jQuery(support)) {
			break;
		}
		support.ownLast = i !== "0";

		// Run tests that need a body at doc ready
		jQuery(function () {
			var container,
			    marginDiv,
			    tds,
			    divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			    body = document.getElementsByTagName("body")[0];

			if (!body) {
				// Return for frameset docs that don't have a body
				return;
			}

			container = document.createElement("div");
			container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

			body.appendChild(container).appendChild(div);

			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			tds = div.getElementsByTagName("td");
			tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
			isSupported = tds[0].offsetHeight === 0;

			tds[0].style.display = "";
			tds[1].style.display = "none";

			// Support: IE8
			// Check if empty table cells still have offsetWidth/Height
			support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;

			// Check box-sizing and margin behavior.
			div.innerHTML = "";
			div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap(body, body.style.zoom != null ? { zoom: 1 } : {}, function () {
				support.boxSizing = div.offsetWidth === 4;
			});

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if (window.getComputedStyle) {
				support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
				support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// Fails in WebKit before Feb 2011 nightlies
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = div.appendChild(document.createElement("div"));
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";

				support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
			}

			if (_typeof(div.style.zoom) !== core_strundefined) {
				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.innerHTML = "";
				div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
				support.inlineBlockNeedsLayout = div.offsetWidth === 3;

				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				div.style.display = "block";
				div.innerHTML = "<div></div>";
				div.firstChild.style.width = "5px";
				support.shrinkWrapBlocks = div.offsetWidth !== 3;

				if (support.inlineBlockNeedsLayout) {
					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}

			body.removeChild(container);

			// Null elements to avoid leaks in IE
			container = div = tds = marginDiv = null;
		});

		// Null elements to avoid leaks in IE
		all = select = fragment = opt = a = input = null;

		return support;
	}({});

	var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	    rmultiDash = /([A-Z])/g;

	function internalData(elem, name, data, pvt /* Internal Use Only */) {
		if (!jQuery.acceptData(elem)) {
			return;
		}

		var ret,
		    thisCache,
		    internalKey = jQuery.expando,


		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,


		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,


		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
			return;
		}

		if (!id) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if (isNode) {
				id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if (!cache[id]) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[id] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
			if (pvt) {
				cache[id] = jQuery.extend(cache[id], name);
			} else {
				cache[id].data = jQuery.extend(cache[id].data, name);
			}
		}

		thisCache = cache[id];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if (!pvt) {
			if (!thisCache.data) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if (data !== undefined) {
			thisCache[jQuery.camelCase(name)] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if (typeof name === "string") {

			// First Try to find as-is property data
			ret = thisCache[name];

			// Test for null|undefined property data
			if (ret == null) {

				// Try to find the camelCased property
				ret = thisCache[jQuery.camelCase(name)];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData(elem, name, pvt) {
		if (!jQuery.acceptData(elem)) {
			return;
		}

		var thisCache,
		    i,
		    isNode = elem.nodeType,


		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		    id = isNode ? elem[jQuery.expando] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if (!cache[id]) {
			return;
		}

		if (name) {

			thisCache = pvt ? cache[id] : cache[id].data;

			if (thisCache) {

				// Support array or space separated string names for data keys
				if (!jQuery.isArray(name)) {

					// try the string as a key before any manipulation
					if (name in thisCache) {
						name = [name];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase(name);
						if (name in thisCache) {
							name = [name];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat(jQuery.map(name, jQuery.camelCase));
				}

				i = name.length;
				while (i--) {
					delete thisCache[name[i]];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if (!pvt) {
			delete cache[id].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if (!isEmptyDataObject(cache[id])) {
				return;
			}
		}

		// Destroy the cache
		if (isNode) {
			jQuery.cleanData([elem], true);

			// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			/* jshint eqeqeq: false */
		} else if (jQuery.support.deleteExpando || cache != cache.window) {
			/* jshint eqeqeq: true */
			delete cache[id];

			// When all else fails, null
		} else {
			cache[id] = null;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements throw uncatchable exceptions if you
		// attempt to add expando properties to them.
		noData: {
			"applet": true,
			"embed": true,
			// Ban all objects except for Flash (which handle expandos)
			"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function hasData(elem) {
			elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
			return !!elem && !isEmptyDataObject(elem);
		},

		data: function data(elem, name, _data) {
			return internalData(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			return internalRemoveData(elem, name);
		},

		// For internal use only.
		_data: function _data(elem, name, data) {
			return internalData(elem, name, data, true);
		},

		_removeData: function _removeData(elem, name) {
			return internalRemoveData(elem, name, true);
		},

		// A method for determining if a DOM node can handle the data expando
		acceptData: function acceptData(elem) {
			// Do not set data on non-element because it will not be cleared (#8335).
			if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
				return false;
			}

			var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];

			// nodes accept data unless otherwise specified; rejection can be conditional
			return !noData || noData !== true && elem.getAttribute("classid") === noData;
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var attrs,
			    name,
			    data = null,
			    i = 0,
			    elem = this[0];

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = jQuery.data(elem);

					if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
						attrs = elem.attributes;
						for (; i < attrs.length; i++) {
							name = attrs[i].name;

							if (name.indexOf("data-") === 0) {
								name = jQuery.camelCase(name.slice(5));

								dataAttr(elem, name, data[name]);
							}
						}
						jQuery._data(elem, "parsedAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					jQuery.data(this, key);
				});
			}

			return arguments.length > 1 ?

			// Sets one value
			this.each(function () {
				jQuery.data(this, key, value);
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
		},

		removeData: function removeData(key) {
			return this.each(function () {
				jQuery.removeData(this, key);
			});
		}
	});

	function dataAttr(elem, key, data) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {

			var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data(elem, key, data);
			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject(obj) {
		var name;
		for (name in obj) {

			// if the public data object is empty, the private is still empty
			if (name === "data" && jQuery.isEmptyObject(obj[name])) {
				continue;
			}
			if (name !== "toJSON") {
				return false;
			}
		}

		return true;
	}
	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = jQuery._data(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = jQuery._data(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return jQuery._data(elem, key) || jQuery._data(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					jQuery._removeData(elem, type + "queue");
					jQuery._removeData(elem, key);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function delay(time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = jQuery._data(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var nodeHook,
	    boolHook,
	    rclass = /[\t\r\n\f]/g,
	    rreturn = /\r/g,
	    rfocusable = /^(?:input|select|textarea|button|object)$/i,
	    rclickable = /^(?:a|area)$/i,
	    ruseDefault = /^(?:checked|selected)$/i,
	    getSetAttribute = jQuery.support.getSetAttribute,
	    getSetInput = jQuery.support.input;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		},

		prop: function prop(name, value) {
			return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			name = jQuery.propFix[name] || name;
			return this.each(function () {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[name] = undefined;
					delete this[name];
				} catch (e) {}
			});
		},

		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    i = 0,
			    len = this.length,
			    proceed = typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (proceed) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = (value || "").match(core_rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}
						elem.className = jQuery.trim(cur);
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    i = 0,
			    len = this.length,
			    proceed = arguments.length === 0 || typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(core_rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}
						elem.className = value ? jQuery.trim(cur) : "";
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// toggle individual class names
					var className,
					    i = 0,
					    self = jQuery(this),
					    classNames = value.match(core_rnotwhite) || [];

					while (className = classNames[i++]) {
						// check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (type === core_strundefined || type === "boolean") {
					if (this.className) {
						// store className if set
						jQuery._data(this, "__className__", this.className);
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className = " " + selector + " ",
			    i = 0,
			    l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		},

		val: function val(value) {
			var ret,
			    hooks,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {
					// Use proper attribute retrieval(#6932, #12072)
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val : elem.text;
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one" || index < 0,
					    values = one ? null : [],
					    max = one ? index + 1 : options.length,
					    i = index < 0 ? max : one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// oldIE doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) && (
						// Don't return options that are disabled or in a disabled optgroup
						jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];
						if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
							optionSet = true;
						}
					}

					// force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},

		attr: function attr(elem, name, value) {
			var hooks,
			    ret,
			    nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (_typeof(elem.getAttribute) === core_strundefined) {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);
				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {
				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    propName,
			    i = 0,
			    attrNames = value && value.match(core_rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {
						// Set corresponding property to false
						if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
							elem[propName] = false;
							// Support: IE<9
							// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
						}

						// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr(elem, name, "");
					}

					elem.removeAttribute(getSetAttribute ? name : propName);
				}
			}
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
			}
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
				// IE<8 needs the *property* name
				elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

				// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
			}

			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;

		jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
			var fn = jQuery.expr.attrHandle[name],
			    ret = isXML ? undefined :
			/* jshint eqeqeq: false */
			(jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
			jQuery.expr.attrHandle[name] = fn;
			return ret;
		} : function (elem, name, isXML) {
			return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
		};
	});

	// fix oldIE attroperties
	if (!getSetInput || !getSetAttribute) {
		jQuery.attrHooks.value = {
			set: function set(elem, value, name) {
				if (jQuery.nodeName(elem, "input")) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set(elem, value, name);
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if (!getSetAttribute) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function set(elem, value, name) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode(name);
				if (!ret) {
					elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				return name === "value" || value === elem.getAttribute(name) ? value : undefined;
			}
		};
		jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
		// Some attributes are constructed with empty-string values when not defined
		function (elem, name, isXML) {
			var ret;
			return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
		};
		jQuery.valHooks.button = {
			get: function get(elem, name) {
				var ret = elem.getAttributeNode(name);
				return ret && ret.specified ? ret.value : undefined;
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function set(elem, value, name) {
				nodeHook.set(elem, value === "" ? false : value, name);
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each(["width", "height"], function (i, name) {
			jQuery.attrHooks[name] = {
				set: function set(elem, value) {
					if (value === "") {
						elem.setAttribute(name, "auto");
						return value;
					}
				}
			};
		});
	}

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if (!jQuery.support.hrefNormalized) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each(["href", "src"], function (i, name) {
			jQuery.propHooks[name] = {
				get: function get(elem) {
					return elem.getAttribute(name, 4);
				}
			};
		});
	}

	if (!jQuery.support.style) {
		jQuery.attrHooks.style = {
			get: function get(elem) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function set(elem, value) {
				return elem.style.cssText = value + "";
			}
		};
	}

	// Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if (!jQuery.support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {
				var parent = elem.parentNode;

				if (parent) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// IE6/7 call enctype encoding
	if (!jQuery.support.enctype) {
		jQuery.propFix.enctype = "encoding";
	}

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
				}
			}
		};
		if (!jQuery.support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var rformElems = /^(?:input|select|textarea)$/i,
	    rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|contextmenu)|click/,
	    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {
			var tmp,
			    events,
			    t,
			    handleObjIn,
			    special,
			    eventHandle,
			    handleObj,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = jQuery._data(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = (types || "").match(core_rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						// Bind the global event handler to the element
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						} else if (elem.attachEvent) {
							elem.attachEvent("on" + type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {
			var j,
			    handleObj,
			    tmp,
			    origCount,
			    t,
			    events,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = jQuery.hasData(elem) && jQuery._data(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(core_rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData(elem, "events");
			}
		},

		trigger: function trigger(event, data, elem, onlyHandlers) {
			var handle,
			    ontype,
			    cur,
			    bubbleType,
			    special,
			    tmp,
			    i,
			    eventPath = [elem || document],
			    type = core_hasOwn.call(event, "type") ? event.type : event,
			    namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
					event.preventDefault();
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && elem[type] && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[type]();
						} catch (e) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function dispatch(event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i,
			    ret,
			    handleObj,
			    matched,
			    j,
			    handlerQueue = [],
			    args = core_slice.call(arguments),
			    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var sel,
			    handleObj,
			    matches,
			    i,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

				/* jshint eqeqeq: false */
				for (; cur != this; cur = cur.parentNode || this) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		fix: function fix(event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i,
			    prop,
			    copy,
			    type = event.type,
			    originalEvent = event,
			    fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if (!event.target) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function filter(event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function filter(event, original) {
				var body,
				    eventDoc,
				    doc,
				    button = original.button,
				    fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add relatedTarget, if necessary
				if (!event.relatedTarget && fromElement) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
				}

				return event;
			}
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						try {
							this.focus();
							return false;
						} catch (e) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Even when returnValue equals to undefined Firefox will still show alert
					if (event.result !== undefined) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function simulate(type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	} : function (elem, type, handle) {
		var name = "on" + type;

		if (elem.detachEvent) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if (_typeof(elem[name]) === core_strundefined) {
				elem[name] = null;
			}

			elem.detachEvent(name, handle);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if (!e) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if (e.preventDefault) {
				e.preventDefault();

				// Support: IE
				// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;
			if (!e) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if (e.stopPropagation) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if (!jQuery.support.submitBubbles) {

		jQuery.event.special.submit = {
			setup: function setup() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add(this, "click._submit keypress._submit", function (e) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
					    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
					if (form && !jQuery._data(form, "submitBubbles")) {
						jQuery.event.add(form, "submit._submit", function (event) {
							event._submit_bubble = true;
						});
						jQuery._data(form, "submitBubbles", true);
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function postDispatch(event) {
				// If form was submitted by the user, bubble the event up the tree
				if (event._submit_bubble) {
					delete event._submit_bubble;
					if (this.parentNode && !event.isTrigger) {
						jQuery.event.simulate("submit", this.parentNode, event, true);
					}
				}
			},

			teardown: function teardown() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove(this, "._submit");
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if (!jQuery.support.changeBubbles) {

		jQuery.event.special.change = {

			setup: function setup() {

				if (rformElems.test(this.nodeName)) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if (this.type === "checkbox" || this.type === "radio") {
						jQuery.event.add(this, "propertychange._change", function (event) {
							if (event.originalEvent.propertyName === "checked") {
								this._just_changed = true;
							}
						});
						jQuery.event.add(this, "click._change", function (event) {
							if (this._just_changed && !event.isTrigger) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate("change", this, event, true);
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add(this, "beforeactivate._change", function (e) {
					var elem = e.target;

					if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
						jQuery.event.add(elem, "change._change", function (event) {
							if (this.parentNode && !event.isSimulated && !event.isTrigger) {
								jQuery.event.simulate("change", this.parentNode, event, true);
							}
						});
						jQuery._data(elem, "changeBubbles", true);
					}
				});
			},

			handle: function handle(event) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
					return event.handleObj.handler.apply(this, arguments);
				}
			},

			teardown: function teardown() {
				jQuery.event.remove(this, "._change");

				return !rformElems.test(this.nodeName);
			}
		};
	}

	// Create "bubbling" focus and blur events
	if (!jQuery.support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
			    handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					if (attaches++ === 0) {
						document.addEventListener(orig, handler, true);
					}
				},
				teardown: function teardown() {
					if (--attaches === 0) {
						document.removeEventListener(orig, handler, true);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function on(types, selector, data, fn, /*INTERNAL*/one) {
			var type, origFn;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function one(types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});
	var isSimple = /^.[^:#\[\.,]*$/,
	    rparentsprev = /^(?:parents|prev(?:Until|All))/,
	    rneedsContext = jQuery.expr.match.needsContext,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret = [],
			    self = this,
			    len = self.length;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},

		has: function has(target) {
			var i,
			    targets = jQuery(target, this),
			    len = targets.length;

			return this.filter(function () {
				for (i = 0; i < len; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},

		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},

		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    ret = [],
			    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

						cur = ret.push(cur);
						break;
					}
				}
			}

			return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// index in selector
			if (typeof elem === "string") {
				return jQuery.inArray(this[0], jQuery(elem));
			}

			// Locate the position of the desired element
			return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this);
		},

		add: function add(selector, context) {
			var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
			    all = jQuery.merge(this.get(), set);

			return this.pushStack(jQuery.unique(all));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		do {
			cur = cur[dir];
		} while (cur && cur.nodeType !== 1);

		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function contents(elem) {
			return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var ret = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				ret = jQuery.filter(selector, ret);
			}

			if (this.length > 1) {
				// Remove duplicates
				if (!guaranteedUnique[name]) {
					ret = jQuery.unique(ret);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					ret = ret.reverse();
				}
			}

			return this.pushStack(ret);
		};
	});

	jQuery.extend({
		filter: function filter(expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		},

		dir: function dir(elem, _dir, until) {
			var matched = [],
			    cur = elem[_dir];

			while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
				if (cur.nodeType === 1) {
					matched.push(cur);
				}
				cur = cur[_dir];
			}
			return matched;
		},

		sibling: function sibling(n, elem) {
			var r = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					r.push(n);
				}
			}

			return r;
		}
	});

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		if (typeof qualifier === "string") {
			if (isSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return jQuery.inArray(elem, qualifier) >= 0 !== not;
		});
	}
	function createSafeFragment(document) {
		var list = nodeNames.split("|"),
		    safeFrag = document.createDocumentFragment();

		if (safeFrag.createElement) {
			while (list.length) {
				safeFrag.createElement(list.pop());
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	    rleadingWhitespace = /^\s+/,
	    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    rtagName = /<([\w:]+)/,
	    rtbody = /<tbody/i,
	    rhtml = /<|&#?\w+;/,
	    rnoInnerhtml = /<(?:script|style|link)/i,
	    manipulation_rcheckableType = /^(?:checkbox|radio)$/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptType = /^$|\/(?:java|ecma)script/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,


	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	    safeFragment = createSafeFragment(document),
	    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	jQuery.fn.extend({
		text: function text(value) {
			return jQuery.access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
			}, null, value, arguments.length);
		},

		append: function append() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		// keepData is for internal use only--do not document
		remove: function remove(selector, keepData) {
			var elem,
			    elems = selector ? jQuery.filter(selector, this) : this,
			    i = 0;

			for (; (elem = elems[i]) != null; i++) {

				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}

				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}

			return this;
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				// Remove element nodes and prevent memory leaks
				if (elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem, false));
				}

				// Remove any remaining nodes
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if (elem.options && jQuery.nodeName(elem, "select")) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return jQuery.access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined) {
					return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map(this, function (elem) {
				return [elem.nextSibling, elem.parentNode];
			}),
			    i = 0;

			// Make the changes, replacing each context element with the new content
			this.domManip(arguments, function (elem) {
				var next = args[i++],
				    parent = args[i++];

				if (parent) {
					// Don't use the snapshot next if it has moved (#13810)
					if (next && next.parentNode !== parent) {
						next = this.nextSibling;
					}
					jQuery(this).remove();
					parent.insertBefore(elem, next);
				}
				// Allow new content to include elements from the context set
			}, true);

			// Force removal if there was no new content (e.g., from empty arguments)
			return i ? this : this.remove();
		},

		detach: function detach(selector) {
			return this.remove(selector, true);
		},

		domManip: function domManip(args, callback, allowIntersection) {

			// Flatten any nested arrays
			args = core_concat.apply([], args);

			var first,
			    node,
			    hasScripts,
			    scripts,
			    doc,
			    fragment,
			    i = 0,
			    l = this.length,
			    set = this,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback, allowIntersection);
				});
			}

			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(this[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {
									// Hope ajax is available...
									jQuery._evalUrl(node.src);
								} else {
									jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return this;
		}
	});

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);
		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var elem,
		    i = 0;
		for (; (elem = elems[i]) != null; i++) {
			jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
		}
	}

	function cloneCopyEvent(src, dest) {

		if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
			return;
		}

		var type,
		    i,
		    l,
		    oldData = jQuery._data(src),
		    curData = jQuery._data(dest, oldData),
		    events = oldData.events;

		if (events) {
			delete curData.handle;
			curData.events = {};

			for (type in events) {
				for (i = 0, l = events[type].length; i < l; i++) {
					jQuery.event.add(dest, type, events[type][i]);
				}
			}
		}

		// make the cloned public data object a copy from the original
		if (curData.data) {
			curData.data = jQuery.extend({}, curData.data);
		}
	}

	function fixCloneNodeIssues(src, dest) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if (dest.nodeType !== 1) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
			data = jQuery._data(dest);

			for (e in data.events) {
				jQuery.removeEvent(dest, e, data.handle);
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute(jQuery.expando);
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if (nodeName === "script" && dest.text !== src.text) {
			disableScript(dest).text = src.text;
			restoreScript(dest);

			// IE6-10 improperly clones children of object elements using classid.
			// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if (nodeName === "object") {
			if (dest.parentNode) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
				dest.innerHTML = src.innerHTML;
			}
		} else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if (dest.value !== src.value) {
				dest.value = src.value;
			}

			// IE6-8 fails to return the selected option to the default selected
			// state when cloning options
		} else if (nodeName === "option") {
			dest.defaultSelected = dest.selected = src.defaultSelected;

			// IE6-8 fails to set the defaultValue to the correct value when
			// cloning other types of input fields
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    i = 0,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				core_push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});

	function getAll(context, tag) {
		var elems,
		    elem,
		    i = 0,
		    found = _typeof(context.getElementsByTagName) !== core_strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;

		if (!found) {
			for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
				if (!tag || jQuery.nodeName(elem, tag)) {
					found.push(elem);
				} else {
					jQuery.merge(found, getAll(elem, tag));
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
	}

	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked(elem) {
		if (manipulation_rcheckableType.test(elem.type)) {
			elem.defaultChecked = elem.checked;
		}
	}

	jQuery.extend({
		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var destElements,
			    node,
			    clone,
			    i,
			    srcElements,
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
				clone = elem.cloneNode(true);

				// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
			}

			if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				// Fix all IE cloning issues
				for (i = 0; (node = srcElements[i]) != null; ++i) {
					// Ensure that the destination node is not null; Fixes #9587
					if (destElements[i]) {
						fixCloneNodeIssues(node, destElements[i]);
					}
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0; (node = srcElements[i]) != null; i++) {
						cloneCopyEvent(node, destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		buildFragment: function buildFragment(elems, context, scripts, selection) {
			var j,
			    elem,
			    contains,
			    tmp,
			    tag,
			    tbody,
			    wrap,
			    l = elems.length,


			// Ensure a safe fragment
			safe = createSafeFragment(context),
			    nodes = [],
			    i = 0;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;

						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
							nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if (!jQuery.support.tbody) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;

							j = elem && elem.childNodes.length;
							while (j--) {
								if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
									elem.removeChild(tbody);
								}
							}
						}

						jQuery.merge(nodes, tmp.childNodes);

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while (tmp.firstChild) {
							tmp.removeChild(tmp.firstChild);
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if (tmp) {
				safe.removeChild(tmp);
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if (!jQuery.support.appendChecked) {
				jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
			}

			i = 0;
			while (elem = nodes[i++]) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(safe.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			tmp = null;

			return safe;
		},

		cleanData: function cleanData(elems, /* internal */acceptData) {
			var elem,
			    type,
			    id,
			    data,
			    i = 0,
			    internalKey = jQuery.expando,
			    cache = jQuery.cache,
			    deleteExpando = jQuery.support.deleteExpando,
			    special = jQuery.event.special;

			for (; (elem = elems[i]) != null; i++) {

				if (acceptData || jQuery.acceptData(elem)) {

					id = elem[internalKey];
					data = id && cache[id];

					if (data) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if (cache[id]) {

							delete cache[id];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if (deleteExpando) {
								delete elem[internalKey];
							} else if (_typeof(elem.removeAttribute) !== core_strundefined) {
								elem.removeAttribute(internalKey);
							} else {
								elem[internalKey] = null;
							}

							core_deletedIds.push(id);
						}
					}
				}
			}
		},

		_evalUrl: function _evalUrl(url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		}
	});
	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {
				// The elements to wrap the target around
				var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstChild && elem.firstChild.nodeType === 1) {
						elem = elem.firstChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap() {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});
	var iframe,
	    getStyles,
	    curCSS,
	    ralpha = /alpha\([^)]*\)/i,
	    ropacity = /opacity\s*=\s*([^)]*)/,
	    rposition = /^(top|right|bottom|left)$/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rmargin = /^margin/,
	    rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
	    rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
	    rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
	    elemdisplay = { BODY: "block" },
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},
	    cssExpand = ["Top", "Right", "Bottom", "Left"],
	    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
		    origName = name,
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function isHidden(elem, el) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    hidden,
		    values = [],
		    index = 0,
		    length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = jQuery._data(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
				}
			} else {

				if (!values[index]) {
					hidden = isHidden(elem);

					if (display && display !== "none" || !hidden) {
						jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		css: function css(name, value) {
			return jQuery.access(this, function (elem, name, value) {
				var len,
				    styles,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {
						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {
			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that NaN and null values aren't set. See: #7116
				if (value == null || type === "number" && isNaN(value)) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
					// Fixes bug #5509
					try {
						style[name] = value;
					} catch (e) {}
				}
			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var num,
			    val,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			//convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});

	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	if (window.getComputedStyle) {
		getStyles = function getStyles(elem) {
			return window.getComputedStyle(elem, null);
		};

		curCSS = function curCSS(elem, name, _computed) {
			var width,
			    minWidth,
			    maxWidth,
			    computed = _computed || getStyles(elem),


			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
			    style = elem.style;

			if (computed) {

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if (rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret;
		};
	} else if (document.documentElement.currentStyle) {
		getStyles = function getStyles(elem) {
			return elem.currentStyle;
		};

		curCSS = function curCSS(elem, name, _computed) {
			var left,
			    rs,
			    rsLeft,
			    computed = _computed || getStyles(elem),
			    ret = computed ? computed[name] : undefined,
			    style = elem.style;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if (ret == null && style && style[name]) {
				ret = style[name];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if (rnumnonpx.test(ret) && !rposition.test(name)) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if (rsLeft) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if (rsLeft) {
					rs.left = rsLeft;
				}
			}

			return ret === "" ? "auto" : ret;
		};
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		    val = 0;

		for (; i < 4; i += 2) {
			// both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// at this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// at this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
		    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	// Try to determine the default display value of an element
	function css_defaultDisplay(nodeName) {
		var doc = document,
		    display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
				doc.write("<!doctype html><html><body>");
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}

	// Called ONLY from within css_defaultDisplay
	function actualDisplay(name, doc) {
		var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
		    display = jQuery.css(elem[0], "display");
		elem.remove();
		return display;
	}

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
			}
		};
	});

	if (!jQuery.support.opacity) {
		jQuery.cssHooks.opacity = {
			get: function get(elem, computed) {
				// IE uses filters for opacity
				return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
			},

			set: function set(elem, value) {
				var style = elem.style,
				    currentStyle = elem.currentStyle,
				    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
				    filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute("filter");

					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if (value === "" || currentStyle && !currentStyle.filter) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
			}
		};
	}

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function () {
		if (!jQuery.support.reliableMarginRight) {
			jQuery.cssHooks.marginRight = {
				get: function get(elem, computed) {
					if (computed) {
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// Work around by temporarily setting element display to inline-block
						return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
					}
				}
			};
		}

		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if (!jQuery.support.pixelPosition && jQuery.fn.position) {
			jQuery.each(["top", "left"], function (i, prop) {
				jQuery.cssHooks[prop] = {
					get: function get(elem, computed) {
						if (computed) {
							computed = curCSS(elem, prop);
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
						}
					}
				};
			});
		}
	});

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.hidden = function (elem) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
		};

		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	}

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, value) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}
	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});
	var
	// Document location
	ajaxLocParts,
	    ajaxLocation,
	    ajax_nonce = jQuery.now(),
	    ajax_rquery = /\?/,
	    rhash = /#.*$/,
	    rts = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	    // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,


	// Keep a copy of the old load method
	_load = jQuery.fn.load,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch (e) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement("a");
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {
					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var deep,
		    key,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector,
		    response,
		    type,
		    self = this,
		    off = url.indexOf(" ");

		if (off >= 0) {
			selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);
			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,


			// To know if global events are to be dispatched
			fireGlobals,
			    transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup({}, options),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),

			// Status-dependent callbacks
			_statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (state === 2) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					var lname = name.toLowerCase();
					if (!state) {
						name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (!state) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (state < 2) {
							for (code in map) {
								// Lazy-add the new callback in a way that preserves old ones
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace(rts, "$1_=" + ajax_nonce++) :

					// Otherwise add one to the end
					cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {
		var firstDataType,
		    ct,
		    finalDataType,
		    type,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {

			var script,
			    head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function send(_, callback) {

					script = document.createElement("script");

					script.async = true;

					if (s.scriptCharset) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function (_, isAbort) {

						if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if (script.parentNode) {
								script.parentNode.removeChild(script);
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if (!isAbort) {
								callback(200, "success");
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore(script, head.firstChild);
				},

				abort: function abort() {
					if (script) {
						script.onload(undefined, true);
					}
				}
			};
		}
	});
	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});
	var xhrCallbacks,
	    xhrSupported,
	    xhrId = 0,

	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function () {
		// Abort all pending requests
		var key;
		for (key in xhrCallbacks) {
			xhrCallbacks[key](undefined, true);
		}
	};

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}

	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
  * implement the XMLHttpRequest in IE7 (can't request local files),
  * so we use the ActiveXObject when it is available
  * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
  * we need a fallback.
  */
	function () {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

	// Determine support properties
	xhrSupported = jQuery.ajaxSettings.xhr();
	jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	xhrSupported = jQuery.support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if (xhrSupported) {

		jQuery.ajaxTransport(function (s) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if (!s.crossDomain || jQuery.support.cors) {

				var _callback;

				return {
					send: function send(headers, complete) {

						// Get a new xhr
						var handle,
						    i,
						    xhr = s.xhr();

						// Open the socket
						// Passing null username, generates a login popup on Opera (#2865)
						if (s.username) {
							xhr.open(s.type, s.url, s.async, s.username, s.password);
						} else {
							xhr.open(s.type, s.url, s.async);
						}

						// Apply custom fields if provided
						if (s.xhrFields) {
							for (i in s.xhrFields) {
								xhr[i] = s.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (s.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(s.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!s.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Need an extra try/catch for cross domain requests in Firefox 3
						try {
							for (i in headers) {
								xhr.setRequestHeader(i, headers[i]);
							}
						} catch (err) {}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send(s.hasContent && s.data || null);

						// Listener
						_callback = function callback(_, isAbort) {
							var status, responseHeaders, statusText, responses;

							// Firefox throws exceptions when accessing properties
							// of an xhr when a network error occurred
							// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
							try {

								// Was never called and is aborted or complete
								if (_callback && (isAbort || xhr.readyState === 4)) {

									// Only called once
									_callback = undefined;

									// Do not keep as active anymore
									if (handle) {
										xhr.onreadystatechange = jQuery.noop;
										if (xhrOnUnloadAbort) {
											delete xhrCallbacks[handle];
										}
									}

									// If it's an abort
									if (isAbort) {
										// Abort it manually if needed
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
										responseHeaders = xhr.getAllResponseHeaders();

										// When requesting binary data, IE6-9 will throw an exception
										// on any attempt to access responseText (#11426)
										if (typeof xhr.responseText === "string") {
											responses.text = xhr.responseText;
										}

										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch (e) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}

										// Filter status for non standard behaviors

										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if (!status && s.isLocal && !s.crossDomain) {
											status = responses.text ? 200 : 404;
											// IE - #1450: sometimes returns 1223 when it should be 204
										} else if (status === 1223) {
											status = 204;
										}
									}
								}
							} catch (firefoxAccessException) {
								if (!isAbort) {
									complete(-1, firefoxAccessException);
								}
							}

							// Call complete if needed
							if (responses) {
								complete(status, statusText, responses, responseHeaders);
							}
						};

						if (!s.async) {
							// if we're in sync mode we fire the callback
							_callback();
						} else if (xhr.readyState === 4) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout(_callback);
						} else {
							handle = ++xhrId;
							if (xhrOnUnloadAbort) {
								// Create the active xhrs callbacks list if needed
								// and attach the unload handler
								if (!xhrCallbacks) {
									xhrCallbacks = {};
									jQuery(window).unload(xhrOnUnloadAbort);
								}
								// Add to list of active xhrs callbacks
								xhrCallbacks[handle] = _callback;
							}
							xhr.onreadystatechange = _callback;
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback(undefined, true);
						}
					}
				};
			}
		});
	}
	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
	    rrun = /queueHooks$/,
	    animationPrefilters = [defaultPrefilter],
	    tweeners = {
		"*": [function (prop, value) {
			var tween = this.createTween(prop, value),
			    target = tween.cur(),
			    parts = rfxnum.exec(value),
			    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
			    scale = 1,
			    maxIterations = 20;

			if (start && start[3] !== unit) {
				// Trust units reported by jQuery.css
				unit = unit || start[3];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style(tween.elem, prop, start + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
			}

			// Update tween properties
			if (parts) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
			}

			return tween;
		}]
	};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (tweeners[prop] || []).concat(tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// we're done with this property
				return tween;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = animationPrefilters.length,
		    deferred = jQuery.Deferred().always(function () {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

			// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, { specialEasing: {} }, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,

				// if we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// resolve when we played the last frame
				// otherwise, reject
				if (gotoEnd) {
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop,
		    value,
		    toggle,
		    tween,
		    hooks,
		    oldfire,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHidden(elem),
		    dataShow = jQuery._data(elem, "fxshow");

		// handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			if (!jQuery.support.shrinkWrapBlocks) {
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
		}

		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {
					continue;
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data(elem, "fxshow", {});
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;
				jQuery._removeData(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css(tween.elem, tween.prop, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || jQuery._data(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = jQuery._data(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = jQuery._data(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    attrs = { height: type },
		    i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function () {
		var timer,
		    timers = jQuery.timers,
		    i = 0;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		if (timer() && jQuery.timers.push(timer)) {
			jQuery.fx.start();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	}
	jQuery.fn.offset = function (options) {
		if (arguments.length) {
			return options === undefined ? this : this.each(function (i) {
				jQuery.offset.setOffset(this, options, i);
			});
		}

		var docElem,
		    win,
		    box = { top: 0, left: 0 },
		    elem = this[0],
		    doc = elem && elem.ownerDocument;

		if (!doc) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if (!jQuery.contains(docElem, elem)) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if (_typeof(elem.getBoundingClientRect) !== core_strundefined) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow(doc);
		return {
			top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
			left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
		};
	};

	jQuery.offset = {

		setOffset: function setOffset(elem, options, i) {
			var position = jQuery.css(elem, "position");

			// set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			var curElem = jQuery(elem),
			    curOffset = curElem.offset(),
			    curCSSTop = jQuery.css(elem, "top"),
			    curCSSLeft = jQuery.css(elem, "left"),
			    calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			    props = {},
			    curPosition = {},
			    curTop,
			    curLeft;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    parentOffset = { top: 0, left: 0 },
			    elem = this[0];

			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
			if (jQuery.css(elem, "position") === "fixed") {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;
				while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = /Y/.test(prop);

		jQuery.fn[method] = function (val) {
			return jQuery.access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return jQuery.access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});
	// Limit scope pollution from any deprecated API
	// (function() {

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// })();
	if (( false ? "undefined" : _typeof(module)) === "object" && module && _typeof(module.exports) === "object") {
		// Expose jQuery as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jQuery;
	} else {
		// Otherwise expose jQuery to the global object as usual
		__webpack_provided_window_dot_jQuery = window.$ = jQuery;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}
})(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(30)(module)))

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jquery = __webpack_require__(0);
__webpack_require__(13);
__webpack_require__(12);
__webpack_require__(11);
__webpack_require__(10);
console.log('this is vender');

/***/ })

/******/ });