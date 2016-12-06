/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _USAMap = __webpack_require__(159);

	var _USAMap2 = _interopRequireDefault(_USAMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'Hello World'
	    ),
	    _react2.default.createElement(_USAMap2.default, null)
	  );
	};

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var ReactDOM = __webpack_require__(3);
	var ReactDOMServer = __webpack_require__(148);
	var ReactIsomorphic = __webpack_require__(152);

	var assign = __webpack_require__(39);
	var deprecated = __webpack_require__(157);

	// `version` will be added here by ReactIsomorphic.
	var React = {};

	assign(React, ReactIsomorphic);

	assign(React, {
	  // ReactDOM
	  findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
	  render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
	  unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),

	  // ReactDOMServer
	  renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
	  renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
	});

	React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
	React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */

	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactDOMTextComponent = __webpack_require__(6);
	var ReactDefaultInjection = __webpack_require__(71);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdates = __webpack_require__(54);
	var ReactVersion = __webpack_require__(146);

	var findDOMNode = __webpack_require__(91);
	var renderSubtreeIntoContainer = __webpack_require__(147);
	var warning = __webpack_require__(25);

	ReactDefaultInjection.inject();

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  findDOMNode: findDOMNode,
	  render: render,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  version: ReactVersion,

	  /* eslint-disable camelcase */
	  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
	  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	/* eslint-enable camelcase */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}

	if (process.env.NODE_ENV !== 'production') {
	  var ExecutionEnvironment = __webpack_require__(9);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // First check if devtools is not installed
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	      // If we're in Chrome or Firefox, provide a download link if not installed.
	      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	        console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
	      }
	    }

	    // If we're in IE8, check to see if we are in compatibility mode and provide
	    // information on preventing compatibility mode
	    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;

	    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;

	    var expectedFeatures = [
	    // shims
	    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim,

	    // shams
	    Object.create, Object.freeze];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
	        break;
	      }
	    }
	  }
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(7);
	var DOMPropertyOperations = __webpack_require__(22);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactMount = __webpack_require__(28);

	var assign = __webpack_require__(39);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var setTextContent = __webpack_require__(20);
	var validateDOMNesting = __webpack_require__(70);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function (props) {
	  // This constructor and its argument is currently used by mocks.
	};

	assign(ReactDOMTextComponent.prototype, {

	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function (text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;

	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    this._rootNodeID = rootID;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement('span');
	      DOMPropertyOperations.setAttributeForID(el, rootID);
	      // Populate node cache
	      ReactMount.getID(el);
	      setTextContent(el, this._stringText);
	      return el;
	    } else {
	      var escapedText = escapeTextContentForBrowser(this._stringText);

	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd wrap this in a `span` for the reasons stated above, but
	        // since this is a situation where React won't take over (static pages),
	        // we can simply return the text as it is.
	        return escapedText;
	      }

	      return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
	    }
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function (nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        var node = ReactMount.getNode(this._rootNodeID);
	        DOMChildrenOperations.updateTextContent(node, nextStringText);
	      }
	    }
	  },

	  unmountComponent: function () {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }

	});

	module.exports = ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */

	'use strict';

	var Danger = __webpack_require__(8);
	var ReactMultiChildUpdateTypes = __webpack_require__(16);
	var ReactPerf = __webpack_require__(18);

	var setInnerHTML = __webpack_require__(19);
	var setTextContent = __webpack_require__(20);
	var invariant = __webpack_require__(13);

	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.

	  // fix render order error in safari
	  // IE8 will throw error when index out of list size.
	  var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);

	  parentNode.insertBefore(childNode, beforeChild);
	}

	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {

	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

	  updateTextContent: setTextContent,

	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function (updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;

	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;

	        !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;

	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;

	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }

	    var renderedMarkup;
	    // markupList is either a list of markup or just a list of elements
	    if (markupList.length && typeof markupList[0] === 'string') {
	      renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
	    } else {
	      renderedMarkup = markupList;
	    }

	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }

	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.SET_MARKUP:
	          setInnerHTML(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {
	  updateTextContent: 'updateTextContent'
	});

	module.exports = DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var createNodesFromMarkup = __webpack_require__(10);
	var emptyFunction = __webpack_require__(15);
	var getMarkupWrap = __webpack_require__(14);
	var invariant = __webpack_require__(13);

	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';

	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}

	var Danger = {

	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function (markupList) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];

	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];

	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
	          // This index will be parsed back out below.
	          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
	        }
	      }

	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
	      );

	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);

	          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;

	          resultList[resultIndex] = renderNode;

	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Danger: Discarding unexpected node:', renderNode);
	        }
	      }
	    }

	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;

	    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;

	    return resultList;
	  },

	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
	    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
	    !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;

	    var newChild;
	    if (typeof markup === 'string') {
	      newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    } else {
	      newChild = markup;
	    }
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }

	};

	module.exports = Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */

	/*eslint-disable fb-www/unsafe-html*/

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var createArrayFromMixed = __webpack_require__(11);
	var getMarkupWrap = __webpack_require__(14);
	var invariant = __webpack_require__(13);

	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;

	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}

	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
	  var nodeName = getNodeName(markup);

	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];

	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }

	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }

	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}

	module.exports = createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */

	'use strict';

	var toArray = __webpack_require__(12);

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;

	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;

	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	module.exports = toArray;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */

	/*eslint-disable fb-www/unsafe-html */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var invariant = __webpack_require__(13);

	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */

	var shouldWrap = {};

	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],

	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],

	  'optgroup': selectWrap,
	  'option': selectWrap,

	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,

	  'td': trWrap,
	  'th': trWrap
	};

	// Initialize the SVG elements since we know they'll always need to be wrapped
	// consistently. If they are created inside a <div> they will be initialized in
	// the wrong namespace (and will not display).
	var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
	svgElements.forEach(function (nodeName) {
	  markupWrap[nodeName] = svgWrap;
	  shouldWrap[nodeName] = true;
	});

	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}

	module.exports = getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	"use strict";

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  SET_MARKUP: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function (obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function (object, objectName, methodNames) {
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
	      }
	    }
	  },

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function (objName, fnName, func) {
	    if (process.env.NODE_ENV !== 'production') {
	      var measuredFunc = null;
	      var wrapper = function () {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function (measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */

	/* globals MSApp */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function (node, html) {
	  node.innerHTML = html;
	};

	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function (node, html) {
	    MSApp.execUnsafeLocalFunction(function () {
	      node.innerHTML = html;
	    });
	  };
	}

	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function (node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }

	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
	        // in hopes that this is preserved even if "\uFEFF" is transformed to
	        // the actual Unicode character (by Babel, for example).
	        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
	        node.innerHTML = String.fromCharCode(0xFEFF) + html;

	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}

	module.exports = setInnerHTML;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var setInnerHTML = __webpack_require__(19);

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function (node, text) {
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function (node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}

	module.exports = setTextContent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactPerf = __webpack_require__(18);

	var quoteAttributeValueForBrowser = __webpack_require__(24);
	var warning = __webpack_require__(25);

	// Simplified subset
	var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};

	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
	  return false;
	}

	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}

	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function (name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function (id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },

	  setAttributeForID: function (node, id) {
	    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function (name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      if (shouldIgnoreValue(propertyInfo, value)) {
	        return '';
	      }
	      var attributeName = propertyInfo.attributeName;
	      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        return attributeName + '=""';
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
	  createMarkupForCustomAttribute: function (name, value) {
	    if (!isAttributeNameSafe(name) || value == null) {
	      return '';
	    }
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function (node, name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (propertyInfo.mustUseAttribute) {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      } else {
	        var propName = propertyInfo.propertyName;
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      DOMPropertyOperations.setValueForAttribute(node, name, value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  },

	  setValueForAttribute: function (node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function (node, name) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseAttribute) {
	        node.removeAttribute(propertyInfo.attributeName);
	      } else {
	        var propName = propertyInfo.propertyName;
	        var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  }

	};

	ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
	  setValueForProperty: 'setValueForProperty',
	  setValueForAttribute: 'setValueForAttribute',
	  deleteValueForProperty: 'deleteValueForProperty'
	});

	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }

	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
	      };

	      !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;

	      if (process.env.NODE_ENV !== 'production') {
	        DOMProperty.getPossibleStandardName[lowerCased] = propName;
	      }

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        propertyInfo.attributeName = attributeName;
	        if (process.env.NODE_ENV !== 'production') {
	          DOMProperty.getPossibleStandardName[attributeName] = propName;
	        }
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMPropertyNames.hasOwnProperty(propName)) {
	        propertyInfo.propertyName = DOMPropertyNames[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseAttribute:
	   *   Whether the property must be accessed and mutated using `*Attribute()`.
	   *   (This includes anything that fails `<propName> in <element>`.)
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasSideEffects:
	   *   Whether or not setting a value causes side effects such as triggering
	   *   resources to be loaded or text selection changes. If true, we read from
	   *   the DOM before updating to ensure that the value is only set if it has
	   *   changed.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   * @type {Object}
	   */
	  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function (attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function (nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = __webpack_require__(21);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	'use strict';

	var emptyFunction = __webpack_require__(15);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(27);
	var ReactMount = __webpack_require__(28);

	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {

	  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

	  replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function (rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }

	};

	module.exports = ReactComponentBrowserEnvironment;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(7);
	var DOMPropertyOperations = __webpack_require__(22);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);

	var invariant = __webpack_require__(13);

	/**
	 * Errors for properties that should not be updated with `updatePropertyByID()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};

	/**
	 * Operations used to process updates to DOM nodes.
	 */
	var ReactDOMIDOperations = {

	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function (id, name, value) {
	    var node = ReactMount.getNode(id);
	    !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;

	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },

	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function (id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },

	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function (updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};

	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});

	module.exports = ReactDOMIDOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactCurrentOwner = __webpack_require__(5);
	var ReactDOMFeatureFlags = __webpack_require__(41);
	var ReactElement = __webpack_require__(42);
	var ReactEmptyComponentRegistry = __webpack_require__(44);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMarkupChecksum = __webpack_require__(48);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdateQueue = __webpack_require__(53);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var containsNode = __webpack_require__(59);
	var instantiateReactComponent = __webpack_require__(62);
	var invariant = __webpack_require__(13);
	var setInnerHTML = __webpack_require__(19);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var validateDOMNesting = __webpack_require__(70);
	var warning = __webpack_require__(25);

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if (process.env.NODE_ENV !== 'production') {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
	  if (ReactDOMFeatureFlags.useCreateElement) {
	    context = assign({}, context);
	    if (container.nodeType === DOC_NODE_TYPE) {
	      context[ownerDocumentContextKey] = container;
	    } else {
	      context[ownerDocumentContextKey] = container.ownerDocument;
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (context === emptyObject) {
	      context = {};
	    }
	    var tag = container.nodeName.toLowerCase();
	    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
	  }
	  var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
	  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
	}

	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
	  /* forceHTML */shouldReuseMarkup);
	  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {DOMElement} container DOM element to unmount from.
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
	function unmountComponentFromNode(instance, container) {
	  ReactReconciler.unmountComponent(instance);

	  if (container.nodeType === DOC_NODE_TYPE) {
	    container = container.documentElement;
	  }

	  // http://jsperf.com/emptying-a-node
	  while (container.lastChild) {
	    container.removeChild(container.lastChild);
	  }
	}

	/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
	function hasNonRootReactChild(node) {
	  var reactRootID = getReactRootID(node);
	  return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
	}

	/**
	 * Returns the first (deepest) ancestor of a node which is rendered by this copy
	 * of React.
	 */
	function findFirstReactDOMImpl(node) {
	  // This node might be from another React instance, so we make sure not to
	  // examine the node cache here
	  for (; node && node.parentNode !== node; node = node.parentNode) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      continue;
	    }
	    var nodeID = internalGetID(node);
	    if (!nodeID) {
	      continue;
	    }
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);

	    // If containersByReactRootID contains the container we find by crawling up
	    // the tree, we know that this instance of React rendered the node.
	    // nb. isValid's strategy (with containsNode) does not work because render
	    // trees may be nested and we don't want a false positive in that case.
	    var current = node;
	    var lastID;
	    do {
	      lastID = internalGetID(current);
	      current = current.parentNode;
	      if (current == null) {
	        // The passed-in node has been detached from the container it was
	        // originally rendered into.
	        return null;
	      }
	    } while (lastID !== reactRootID);

	    if (current === containersByReactRootID[reactRootID]) {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Temporary (?) hack so that we can store all top-level pending updates on
	 * composites instead of having to worry about different types of components
	 * here.
	 */
	var TopLevelWrapper = function () {};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render = function () {
	  // this.props is actually a ReactElement
	  return this.props;
	};

	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {

	  TopLevelWrapper: TopLevelWrapper,

	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function (container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function (prevComponent, nextElement, container, callback) {
	    ReactMount.scrollMonitor(container, function () {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function (nextComponent, container) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(componentInstance, container);

	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.

	    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
	    }

	    return componentInstance;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
	    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
	  },

	  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' :
	    // Check if it quacks like an element
	    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;

	    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;

	    var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevWrappedElement = prevComponent._currentElement;
	      var prevElement = prevWrappedElement.props;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        var publicInst = prevComponent._renderedComponent.getPublicInstance();
	        var updatedCallback = callback && function () {
	          callback.call(publicInst);
	        };
	        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
	        return publicInst;
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
	    var containerHasNonRootReactChild = hasNonRootReactChild(container);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;

	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (internalGetID(rootElementSibling)) {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
	            break;
	          }
	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
	    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function (nextElement, container, callback) {
	    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function (container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function (container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      // Check if the node being unmounted was rendered by React, but isn't a
	      // root node.
	      var containerHasNonRootReactChild = hasNonRootReactChild(container);

	      // Check if the container itself is a React root node.
	      var containerID = internalGetID(container);
	      var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
	      }

	      return false;
	    }
	    ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if (process.env.NODE_ENV !== 'production') {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function (id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if (process.env.NODE_ENV !== 'production') {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        process.env.NODE_ENV !== 'production' ? warning(
	        // Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
	        var containerChild = container.firstChild;
	        if (containerChild && reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function (id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component rendered by this copy of React.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function (node) {
	    return findFirstReactDOMImpl(node);
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function (ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw on the next line; give an early warning
	      process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
	    }

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }
	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
	  },

	  _mountImageIntoNode: function (markup, container, shouldReuseMarkup, transaction) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;

	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

	        var normalizedMarkup = markup;
	        if (process.env.NODE_ENV !== 'production') {
	          // because rootMarkup is retrieved from the DOM, various normalizations
	          // will have occurred which will not be present in `markup`. Here,
	          // insert markup into a <div> or <iframe> depending on the container
	          // type to perform the same normalizations before comparing.
	          var normalizer;
	          if (container.nodeType === ELEMENT_NODE_TYPE) {
	            normalizer = document.createElement('div');
	            normalizer.innerHTML = markup;
	            normalizedMarkup = normalizer.innerHTML;
	          } else {
	            normalizer = document.createElement('iframe');
	            document.body.appendChild(normalizer);
	            normalizer.contentDocument.write(markup);
	            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
	            document.body.removeChild(normalizer);
	          }
	        }

	        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
	        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

	        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;

	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
	        }
	      }
	    }

	    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;

	    if (transaction.useCreateElement) {
	      while (container.lastChild) {
	        container.removeChild(container.lastChild);
	      }
	      container.appendChild(markup);
	    } else {
	      setInnerHTML(container, markup);
	    }
	  },

	  ownerDocumentContextKey: ownerDocumentContextKey,

	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  getNodeFromInstance: getNodeFromInstance,

	  isValid: isValid,

	  purgeID: purgeID
	};

	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});

	module.exports = ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPluginRegistry = __webpack_require__(32);
	var ReactEventEmitterMixin = __webpack_require__(37);
	var ReactPerf = __webpack_require__(18);
	var ViewportMetrics = __webpack_require__(38);

	var assign = __webpack_require__(39);
	var isEventSupported = __webpack_require__(40);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topAbort: 'abort',
	  topBlur: 'blur',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function (ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function (enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function () {
	    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function (registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	          }
	        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	  },

	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function () {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
	  putListener: 'putListener',
	  deleteListener: 'deleteListener'
	});

	module.exports = ReactBrowserEventEmitter;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	var PropagationPhases = keyMirror({ bubbled: null, captured: null });

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topAbort: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	var EventPluginRegistry = __webpack_require__(32);
	var EventPluginUtils = __webpack_require__(33);
	var ReactErrorUtils = __webpack_require__(34);

	var accumulateInto = __webpack_require__(35);
	var forEachAccumulated = __webpack_require__(36);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function (event, simulated) {
	  if (event) {
	    EventPluginUtils.executeDispatchesInOrder(event, simulated);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
	  return executeDispatchesAndRelease(e, false);
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
	  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function (InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function () {
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function (id, registrationName, listener) {
	    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;

	    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;

	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.didPutListener) {
	      PluginModule.didPutListener(id, registrationName, listener);
	    }
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function (id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function (id, registrationName) {
	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.willDeleteListener) {
	      PluginModule.willDeleteListener(id, registrationName);
	    }

	    var bankForRegistrationName = listenerBank[registrationName];
	    // TODO: This should never be null -- when is it?
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function (id) {
	    for (var registrationName in listenerBank) {
	      if (!listenerBank[registrationName][id]) {
	        continue;
	      }

	      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	      if (PluginModule && PluginModule.willDeleteListener) {
	        PluginModule.willDeleteListener(id, registrationName);
	      }

	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function (events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function (simulated) {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    if (simulated) {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
	    } else {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	    }
	    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
	    // This would be a good time to rethrow if any of the event handlers threw.
	    ReactErrorUtils.rethrowCaughtError();
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function () {
	    listenerBank = {};
	  },

	  __getListenerBank: function () {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function (InjectedEventPluginOrder) {
	    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function (injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
	        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function (event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function () {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var ReactErrorUtils = __webpack_require__(34);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function (InjectedMount) {
	    injection.Mount = InjectedMount;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
	}

	var validateEventDispatches;
	if (process.env.NODE_ENV !== 'production') {
	  validateEventDispatches = function (event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, simulated, listener, domID) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = injection.Mount.getNode(domID);
	  if (simulated) {
	    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
	  } else {
	    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
	  }
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
	  }
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
	  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,

	  getNode: function (id) {
	    return injection.Mount.getNode(id);
	  },
	  getID: function (node) {
	    return injection.Mount.getID(node);
	  },

	  injection: injection
	};

	module.exports = EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	'use strict';

	var caughtError = null;

	/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {?String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
	function invokeGuardedCallback(name, func, a, b) {
	  try {
	    return func(a, b);
	  } catch (x) {
	    if (caughtError === null) {
	      caughtError = x;
	    }
	    return undefined;
	  }
	}

	var ReactErrorUtils = {
	  invokeGuardedCallback: invokeGuardedCallback,

	  /**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
	  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function () {
	    if (caughtError) {
	      var error = caughtError;
	      caughtError = null;
	      throw error;
	    }
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
	      var boundFunc = func.bind(null, a, b);
	      var evtType = 'react-' + name;
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	    };
	  }
	}

	module.exports = ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	'use strict';

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function (arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	var EventPluginHub = __webpack_require__(31);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue(false);
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function (scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = (eventName in document);

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */

	'use strict';

	var ReactDOMFeatureFlags = {
	  useCreateElement: false
	};

	module.exports = ReactDOMFeatureFlags;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);

	var assign = __webpack_require__(39);
	var canDefineProperty = __webpack_require__(43);

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    Object.freeze(element.props);
	    Object.freeze(element);
	  }

	  return element;
	};

	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
	  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);

	  if (process.env.NODE_ENV !== 'production') {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }

	  return newElement;
	};

	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponentRegistry
	 */

	'use strict';

	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIDsRegistry = {};

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}

	var ReactEmptyComponentRegistry = {
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID,
	  deregisterNullComponentID: deregisterNullComponentID
	};

	module.exports = ReactEmptyComponentRegistry;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	'use strict';

	var ReactRootIndex = __webpack_require__(46);

	var invariant = __webpack_require__(13);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 10000;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
	  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {*} arg Argument to invoke the callback with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
	  var traverseUp = isAncestorIDOf(stop, start);
	  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start;; /* until break */id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function () {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function (rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function (id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function (leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Same as `traverseTwoPhase` but skips the `targetID`.
	   */
	  traverseTwoPhaseSkipTarget: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, true);
	      traverseParentPath(targetID, '', cb, arg, true, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function (targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function (_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	'use strict';

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap = {

	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function (key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function (key) {
	    return key._reactInternalInstance;
	  },

	  has: function (key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function (key, value) {
	    key._reactInternalInstance = value;
	  }

	};

	module.exports = ReactInstanceMap;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	'use strict';

	var adler32 = __webpack_require__(49);

	var TAG_END = /\/?>/;

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function (markup) {
	    var checksum = adler32(markup);

	    // Add checksum (handle both parent tags and self-closing tags)
	    return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function (markup, element) {
	    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	'use strict';

	var MOD = 65521;

	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    for (; i < Math.min(i + 4096, m); i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}

	module.exports = adler32;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */

	'use strict';

	var ReactRef = __webpack_require__(51);

	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}

	var ReactReconciler = {

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function (internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },

	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function (internalInstance, nextElement, transaction, context) {
	    var prevElement = internalInstance._currentElement;

	    if (nextElement === prevElement && context === internalInstance._context) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.

	      // TODO: Bailing out early is just a perf optimization right?
	      // TODO: Removing the return statement should affect correctness?
	      return;
	    }

	    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }

	    internalInstance.receiveComponent(nextElement, transaction, context);

	    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },

	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (internalInstance, transaction) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }

	};

	module.exports = ReactReconciler;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */

	'use strict';

	var ReactOwner = __webpack_require__(52);

	var ReactRef = {};

	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}

	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}

	ReactRef.attachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};

	ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.

	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.

	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;

	  return(
	    // This has a few false positives w/r/t empty components.
	    prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
	  );
	};

	ReactRef.detachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};

	module.exports = ReactRef;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function (object) {
	    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }

	};

	module.exports = ReactOwner;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function enqueueUpdate(internalInstance) {
	  ReactUpdates.enqueueUpdate(internalInstance);
	}

	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
	    }
	    return null;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
	  }

	  return internalInstance;
	}

	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(publicInstance);
	    if (internalInstance) {
	      // During componentWillMount and render this will still be null but after
	      // that will always render to something. At least for now. So we can use
	      // this hack.
	      return !!internalInstance._renderedComponent;
	    } else {
	      return false;
	    }
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance) {
	      return null;
	    }

	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },

	  enqueueCallbackInternal: function (internalInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingForceUpdate = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

	    if (!internalInstance) {
	      return;
	    }

	    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
	  },

	  enqueueSetPropsInternal: function (internalInstance, partialProps) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    var props = assign({}, element.props, partialProps);
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
	  },

	  enqueueReplacePropsInternal: function (internalInstance, props) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  enqueueElementInternal: function (internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }

	};

	module.exports = ReactUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(55);
	var PooledClass = __webpack_require__(56);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
	}

	var NESTED_UPDATES = {
	  initialize: function () {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function () {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function () {
	    this.callbackQueue.reset();
	  },
	  close: function () {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);
	}

	assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function () {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function (method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b, c, d, e) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
	}

	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];

	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;

	    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);

	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
	      }
	    }
	  }
	}

	var flushBatchedUpdates = function () {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }

	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }

	  dirtyComponents.push(component);
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function (ReconcileTransaction) {
	    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function (_batchingStrategy) {
	    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function (callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function () {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0; i < callbacks.length; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function () {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function () {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function () {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (this.wrapperInitData) {
	      this.wrapperInitData.length = 0;
	    } else {
	      this.wrapperInitData = [];
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function () {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked. The optional arguments helps prevent the need
	   * to bind in many cases.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} a Argument to pass to the method.
	   * @param {Object?=} b Argument to pass to the method.
	   * @param {Object?=} c Argument to pass to the method.
	   * @param {Object?=} d Argument to pass to the method.
	   * @param {Object?=} e Argument to pass to the method.
	   * @param {Object?=} f Argument to pass to the method.
	   *
	   * @return {*} Return value from `method`.
	   */
	  perform: function (method, scope, a, b, c, d, e, f) {
	    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {}
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function (startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {}
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function (startIndex) {
	    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {}
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occurred.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	'use strict';

	var isTextNode = __webpack_require__(60);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var outerNode = _x,
	        innerNode = _x2;
	    _again = false;

	    if (!outerNode || !innerNode) {
	      return false;
	    } else if (outerNode === innerNode) {
	      return true;
	    } else if (isTextNode(outerNode)) {
	      return false;
	    } else if (isTextNode(innerNode)) {
	      _x = outerNode;
	      _x2 = innerNode.parentNode;
	      _again = true;
	      continue _function;
	    } else if (outerNode.contains) {
	      return outerNode.contains(innerNode);
	    } else if (outerNode.compareDocumentPosition) {
	      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	    } else {
	      return false;
	    }
	  }
	}

	module.exports = containsNode;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */

	'use strict';

	var isNode = __webpack_require__(61);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	'use strict';

	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCompositeComponent = __webpack_require__(63);
	var ReactEmptyComponent = __webpack_require__(68);
	var ReactNativeComponent = __webpack_require__(69);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function () {};
	assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: instantiateReactComponent
	});

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
	}

	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node) {
	  var instance;

	  if (node === null || node === false) {
	    instance = new ReactEmptyComponent(instantiateReactComponent);
	  } else if (typeof node === 'object') {
	    var element = node;
	    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;

	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = ReactNativeComponent.createInternalComponent(element);
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // representations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
	  }

	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);

	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;

	  if (process.env.NODE_ENV !== 'production') {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }

	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if (process.env.NODE_ENV !== 'production') {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }

	  return instance;
	}

	module.exports = instantiateReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactPerf = __webpack_require__(18);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdateQueue = __webpack_require__(53);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var warning = __webpack_require__(25);

	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function StatelessComponent(Component) {}
	StatelessComponent.prototype.render = function () {
	  var Component = ReactInstanceMap.get(this)._currentElement.type;
	  return Component(this.props, this.context, this.updater);
	};

	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function (element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;

	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    this._renderedComponent = null;

	    this._context = null;
	    this._mountOrder = 0;
	    this._topLevelWrapper = null;

	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;

	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(context);

	    var Component = this._currentElement.type;

	    // Initialize the public class
	    var inst;
	    var renderedElement;

	    // This is a way to detect if Component is a stateless arrow function
	    // component, which is not newable. It might not be 100% reliable but is
	    // something we can do until we start detecting that Component extends
	    // React.Component. We already assume that typeof Component === 'function'.
	    var canInstantiate = ('prototype' in Component);

	    if (canInstantiate) {
	      if (process.env.NODE_ENV !== 'production') {
	        ReactCurrentOwner.current = this;
	        try {
	          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	        } finally {
	          ReactCurrentOwner.current = null;
	        }
	      } else {
	        inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	      }
	    }

	    if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
	      renderedElement = inst;
	      inst = new StatelessComponent(Component);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      if (inst.render == null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
	      } else {
	        // We support ES6 inheriting from React.Component, the module pattern,
	        // and stateless components, but not ES6 classes that don't extend
	        process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
	      }
	    }

	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;
	    inst.updater = ReactUpdateQueue;

	    this._instance = inst;

	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);

	    if (process.env.NODE_ENV !== 'production') {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
	    }

	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;

	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    if (inst.componentWillMount) {
	      inst.componentWillMount();
	      // When mounting, calls to `setState` by `componentWillMount` will set
	      // `this._pendingStateQueue` without triggering a re-render.
	      if (this._pendingStateQueue) {
	        inst.state = this._processPendingState(inst.props, inst.context);
	      }
	    }

	    // If not a stateless component, we now render
	    if (renderedElement === undefined) {
	      renderedElement = this._renderValidatedComponent();
	    }

	    this._renderedComponent = this._instantiateReactComponent(renderedElement);

	    var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }

	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function () {
	    var inst = this._instance;

	    if (inst.componentWillUnmount) {
	      inst.componentWillUnmount();
	    }

	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;
	    this._instance = null;

	    // Reset pending fields
	    // Even if this component is scheduled for another update in ReactUpdates,
	    // it would still be ignored because these fields are reset.
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;

	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;
	    this._topLevelWrapper = null;

	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);

	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function (context) {
	    var maskedContext = null;
	    var Component = this._currentElement.type;
	    var contextTypes = Component.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function (context) {
	    var maskedContext = this._maskContext(context);
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.contextTypes) {
	        this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function (currentContext) {
	    var Component = this._currentElement.type;
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	      if (process.env.NODE_ENV !== 'production') {
	        this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
	      }
	      for (var name in childContext) {
	        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function (newProps) {
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.propTypes) {
	        this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function (propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // top-level render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);

	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
	          } else {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
	          }
	        }
	      }
	    }
	  },

	  receiveComponent: function (nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;

	    this._pendingElement = null;

	    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
	    }

	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
	    }
	  },

	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
	    var inst = this._instance;

	    var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
	    var nextProps;

	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement === nextParentElement) {
	      // Skip checking prop types again -- we don't read inst.props to avoid
	      // warning for DOM component props in this upgrade
	      nextProps = nextParentElement.props;
	    } else {
	      nextProps = this._processProps(nextParentElement.props);
	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.

	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    var nextState = this._processPendingState(nextProps, nextContext);

	    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },

	  _processPendingState: function (props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;

	    if (!queue) {
	      return inst.state;
	    }

	    if (replace && queue.length === 1) {
	      return queue[0];
	    }

	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
	    }

	    return nextState;
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
	    var inst = this._instance;

	    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
	    var prevProps;
	    var prevState;
	    var prevContext;
	    if (hasComponentDidUpdate) {
	      prevProps = inst.props;
	      prevState = inst.state;
	      prevContext = inst.context;
	    }

	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;

	    this._updateRenderedComponent(transaction, unmaskedContext);

	    if (hasComponentDidUpdate) {
	      transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
	    }
	  },

	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function (transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var nextRenderedElement = this._renderValidatedComponent();
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);

	      this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
	      var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },

	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function (prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	  },

	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function () {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if (process.env.NODE_ENV !== 'production') {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }

	    return renderedComponent;
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: function () {
	    var renderedComponent;
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactCurrentOwner.current = null;
	    }
	    !(
	    // TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	    return renderedComponent;
	  },

	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function (ref, component) {
	    var inst = this.getPublicInstance();
	    !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
	    var publicComponentInstance = component.getPublicInstance();
	    if (process.env.NODE_ENV !== 'production') {
	      var componentName = component && component.getName ? component.getName() : 'a component';
	      process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
	    }
	    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	    refs[ref] = publicComponentInstance;
	  },

	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function (ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },

	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function () {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	  },

	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function () {
	    var inst = this._instance;
	    if (inst instanceof StatelessComponent) {
	      return null;
	    }
	    return inst;
	  },

	  // Stub
	  _instantiateReactComponent: null

	};

	ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent',
	  _renderValidatedComponent: '_renderValidatedComponent'
	});

	var ReactCompositeComponent = {

	  Mixin: ReactCompositeComponentMixin

	};

	module.exports = ReactCompositeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	var injected = false;

	var ReactComponentEnvironment = {

	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,

	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,

	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,

	  injection: {
	    injectEnvironment: function (environment) {
	      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
	      ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
	      injected = true;
	    }
	  }

	};

	module.exports = ReactComponentEnvironment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }

	  var prevType = typeof prevElement;
	  var nextType = typeof nextElement;
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactEmptyComponentRegistry = __webpack_require__(44);
	var ReactReconciler = __webpack_require__(50);

	var assign = __webpack_require__(39);

	var placeholderElement;

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function (component) {
	    placeholderElement = ReactElement.createElement(component);
	  }
	};

	function registerNullComponentID() {
	  ReactEmptyComponentRegistry.registerNullComponentID(this._rootNodeID);
	}

	var ReactEmptyComponent = function (instantiate) {
	  this._currentElement = null;
	  this._rootNodeID = null;
	  this._renderedComponent = instantiate(placeholderElement);
	};
	assign(ReactEmptyComponent.prototype, {
	  construct: function (element) {},
	  mountComponent: function (rootID, transaction, context) {
	    transaction.getReactMountReady().enqueue(registerNullComponentID, this);
	    this._rootNodeID = rootID;
	    return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
	  },
	  receiveComponent: function () {},
	  unmountComponent: function (rootID, transaction, context) {
	    ReactReconciler.unmountComponent(this._renderedComponent);
	    ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
	    this._rootNodeID = null;
	    this._renderedComponent = null;
	  }
	});

	ReactEmptyComponent.injection = ReactEmptyComponentInjection;

	module.exports = ReactEmptyComponent;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags.
	var tagToComponentClass = {};
	var textComponentClass = null;

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function (componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function (componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function (componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};

	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}

	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
	  return new genericComponentClass(element.type, element.props);
	}

	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}

	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}

	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateDOMNesting
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var warning = __webpack_require__(25);

	var validateDOMNesting = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.

	  // https://html.spec.whatwg.org/multipage/syntax.html#special
	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);

	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

	  var emptyAncestorInfo = {
	    parentTag: null,

	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,

	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };

	  var updatedAncestorInfo = function (oldInfo, tag, instance) {
	    var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };

	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }

	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }

	    ancestorInfo.parentTag = info;

	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }

	    return ancestorInfo;
	  };

	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function (tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	    }

	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;

	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }

	    return true;
	  };

	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':

	      case 'pre':
	      case 'listing':

	      case 'table':

	      case 'hr':

	      case 'xmp':

	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;

	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;

	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;

	      case 'button':
	        return ancestorInfo.buttonTagInScope;

	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;

	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }

	    return null;
	  };

	  /**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */
	  var findOwnerStack = function (instance) {
	    if (!instance) {
	      return [];
	    }

	    var stack = [];
	    /*eslint-disable space-after-keywords */
	    do {
	      /*eslint-enable space-after-keywords */
	      stack.push(instance);
	    } while (instance = instance._currentElement._owner);
	    stack.reverse();
	    return stack;
	  };

	  var didWarn = {};

	  validateDOMNesting = function (childTag, childInstance, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;

	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var problematic = invalidParent || invalidAncestor;

	    if (problematic) {
	      var ancestorTag = problematic.tag;
	      var ancestorInstance = problematic.instance;

	      var childOwner = childInstance && childInstance._currentElement._owner;
	      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

	      var childOwners = findOwnerStack(childOwner);
	      var ancestorOwners = findOwnerStack(ancestorOwner);

	      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
	      var i;

	      var deepestCommon = -1;
	      for (i = 0; i < minStackLen; i++) {
	        if (childOwners[i] === ancestorOwners[i]) {
	          deepestCommon = i;
	        } else {
	          break;
	        }
	      }

	      var UNKNOWN = '(unknown)';
	      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ownerInfo = [].concat(
	      // If the parent and child instances have a common owner ancestor, start
	      // with that -- otherwise we just start with the parent's owners.
	      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
	      // If we're warning about an invalid (non-parent) ancestry, add '...'
	      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

	      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
	      if (didWarn[warnKey]) {
	        return;
	      }
	      didWarn[warnKey] = true;

	      if (invalidParent) {
	        var info = '';
	        if (ancestorTag === 'table' && childTag === 'tr') {
	          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	        }
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
	      }
	    }
	  };

	  validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);

	  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

	  // For testing
	  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}

	module.exports = validateDOMNesting;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	'use strict';

	var BeforeInputEventPlugin = __webpack_require__(72);
	var ChangeEventPlugin = __webpack_require__(80);
	var ClientReactRootIndex = __webpack_require__(83);
	var DefaultEventPluginOrder = __webpack_require__(84);
	var EnterLeaveEventPlugin = __webpack_require__(85);
	var ExecutionEnvironment = __webpack_require__(9);
	var HTMLDOMPropertyConfig = __webpack_require__(89);
	var ReactBrowserComponentMixin = __webpack_require__(90);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactDefaultBatchingStrategy = __webpack_require__(92);
	var ReactDOMComponent = __webpack_require__(93);
	var ReactDOMTextComponent = __webpack_require__(6);
	var ReactEventListener = __webpack_require__(118);
	var ReactInjection = __webpack_require__(121);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactReconcileTransaction = __webpack_require__(125);
	var SelectEventPlugin = __webpack_require__(130);
	var ServerReactRootIndex = __webpack_require__(131);
	var SimpleEventPlugin = __webpack_require__(132);
	var SVGDOMPropertyConfig = __webpack_require__(141);

	var alreadyInjected = false;

	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;

	  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);

	  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);

	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

	  ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

	  if (process.env.NODE_ENV !== 'production') {
	    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	    if (/[?&]react_perf\b/.test(url)) {
	      var ReactDefaultPerf = __webpack_require__(142);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var FallbackCompositionState = __webpack_require__(74);
	var SyntheticCompositionEvent = __webpack_require__(76);
	var SyntheticInputEvent = __webpack_require__(78);

	var keyOf = __webpack_require__(79);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBeforeInput: null }),
	      captured: keyOf({ onBeforeInputCapture: null })
	    },
	    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionEnd: null }),
	      captured: keyOf({ onCompositionEndCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionStart: null }),
	      captured: keyOf({ onCompositionStartCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionUpdate: null }),
	      captured: keyOf({ onCompositionUpdateCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);

	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
	  }
	};

	module.exports = BeforeInputEventPlugin;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);

	var warning = __webpack_require__(25);

	var accumulateInto = __webpack_require__(35);
	var forEachAccumulated = __webpack_require__(36);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var getTextContentAccessor = __webpack_require__(75);

	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}

	assign(FallbackCompositionState.prototype, {
	  destructor: function () {
	    this._root = null;
	    this._startText = null;
	    this._fallbackText = null;
	  },

	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function () {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },

	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function () {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }

	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});

	PooledClass.addPoolingTo(FallbackCompositionState);

	module.exports = FallbackCompositionState;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}

	module.exports = getTextContentAccessor;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	module.exports = SyntheticCompositionEvent;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var warning = __webpack_require__(25);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

	module.exports = SyntheticEvent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

	module.exports = SyntheticInputEvent;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactUpdates = __webpack_require__(54);
	var SyntheticEvent = __webpack_require__(77);

	var getEventTarget = __webpack_require__(81);
	var isEventSupported = __webpack_require__(40);
	var isTextInputElement = __webpack_require__(82);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onChange: null }),
	      captured: keyOf({ onChangeCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue(false);
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	  get: function () {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function (val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

	  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	  // on DOM elements
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
	        event.type = 'change';
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
	    }
	  }

	};

	module.exports = ChangeEventPlugin;

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}

	module.exports = isTextInputElement;

/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function () {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	var keyOf = __webpack_require__(79);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];

	module.exports = DefaultEventPluginOrder;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var SyntheticMouseEvent = __webpack_require__(86);

	var ReactMount = __webpack_require__(28);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({ onMouseEnter: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  },
	  mouseLeave: {
	    registrationName: keyOf({ onMouseLeave: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from;
	    var to;
	    var fromID = '';
	    var toID = '';
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      fromID = topLevelTargetID;
	      to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
	      if (to) {
	        toID = ReactMount.getID(to);
	      } else {
	        to = win;
	      }
	      to = to || win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	      toID = topLevelTargetID;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);
	var ViewportMetrics = __webpack_require__(38);

	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function (event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  },
	  // "Proprietary" Interface.
	  pageX: function (event) {
	    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function (event) {
	    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	module.exports = SyntheticMouseEvent;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	var getEventTarget = __webpack_require__(81);

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function (event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function (event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	module.exports = SyntheticUIEvent;

/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	module.exports = getEventModifierState;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ExecutionEnvironment = __webpack_require__(9);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}

	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    challenge: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    inputMode: MUST_USE_ATTRIBUTE,
	    integrity: null,
	    is: MUST_USE_ATTRIBUTE,
	    keyParams: MUST_USE_ATTRIBUTE,
	    keyType: MUST_USE_ATTRIBUTE,
	    kind: null,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    minLength: MUST_USE_ATTRIBUTE,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    nonce: MUST_USE_ATTRIBUTE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcLang: null,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    summary: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,
	    wrap: null,

	    /**
	     * RDFa Properties
	     */
	    about: MUST_USE_ATTRIBUTE,
	    datatype: MUST_USE_ATTRIBUTE,
	    inlist: MUST_USE_ATTRIBUTE,
	    prefix: MUST_USE_ATTRIBUTE,
	    // property is also supported for OpenGraph in meta tags.
	    property: MUST_USE_ATTRIBUTE,
	    resource: MUST_USE_ATTRIBUTE,
	    'typeof': MUST_USE_ATTRIBUTE,
	    vocab: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: MUST_USE_ATTRIBUTE,
	    autoCorrect: MUST_USE_ATTRIBUTE,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: null,
	    // color is for Safari mask-icon link
	    color: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: null,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: MUST_USE_ATTRIBUTE,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoComplete: 'autocomplete',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    autoSave: 'autosave',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	'use strict';

	var ReactInstanceMap = __webpack_require__(47);

	var findDOMNode = __webpack_require__(91);
	var warning = __webpack_require__(25);

	var didWarnKey = '_getDOMNodeDidWarn';

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function () {
	    process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
	    this.constructor[didWarnKey] = true;
	    return findDOMNode(this);
	  }
	};

	module.exports = ReactBrowserComponentMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMount = __webpack_require__(28);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
	}

	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	'use strict';

	var ReactUpdates = __webpack_require__(54);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function () {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  }
	});

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function (callback, a, b, c, d, e) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d, e);
	    } else {
	      transaction.perform(callback, null, a, b, c, d, e);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var AutoFocusUtils = __webpack_require__(94);
	var CSSPropertyOperations = __webpack_require__(96);
	var DOMProperty = __webpack_require__(23);
	var DOMPropertyOperations = __webpack_require__(22);
	var EventConstants = __webpack_require__(30);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactDOMButton = __webpack_require__(104);
	var ReactDOMInput = __webpack_require__(105);
	var ReactDOMOption = __webpack_require__(109);
	var ReactDOMSelect = __webpack_require__(112);
	var ReactDOMTextarea = __webpack_require__(113);
	var ReactMount = __webpack_require__(28);
	var ReactMultiChild = __webpack_require__(114);
	var ReactPerf = __webpack_require__(18);
	var ReactUpdateQueue = __webpack_require__(53);

	var assign = __webpack_require__(39);
	var canDefineProperty = __webpack_require__(43);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var invariant = __webpack_require__(13);
	var isEventSupported = __webpack_require__(40);
	var keyOf = __webpack_require__(79);
	var setInnerHTML = __webpack_require__(19);
	var setTextContent = __webpack_require__(20);
	var shallowEqual = __webpack_require__(117);
	var validateDOMNesting = __webpack_require__(70);
	var warning = __webpack_require__(25);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = { 'string': true, 'number': true };

	var CHILDREN = keyOf({ children: null });
	var STYLE = keyOf({ style: null });
	var HTML = keyOf({ __html: null });

	var ELEMENT_NODE_TYPE = 1;

	function getDeclarationErrorAddendum(internalInstance) {
	  if (internalInstance) {
	    var owner = internalInstance._currentElement._owner || null;
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' This DOM node was rendered by `' + name + '`.';
	      }
	    }
	  }
	  return '';
	}

	var legacyPropsDescriptor;
	if (process.env.NODE_ENV !== 'production') {
	  legacyPropsDescriptor = {
	    props: {
	      enumerable: false,
	      get: function () {
	        var component = this._reactInternalComponent;
	        process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
	        return component._currentElement.props;
	      }
	    }
	  };
	}

	function legacyGetDOMNode() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return this;
	}

	function legacyIsMounted() {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return !!component;
	}

	function legacySetStateEtc() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	}

	function legacySetProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function legacyReplaceProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function friendlyStringify(obj) {
	  if (typeof obj === 'object') {
	    if (Array.isArray(obj)) {
	      return '[' + obj.map(friendlyStringify).join(', ') + ']';
	    } else {
	      var pairs = [];
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
	          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
	        }
	      }
	      return '{' + pairs.join(', ') + '}';
	    }
	  } else if (typeof obj === 'string') {
	    return JSON.stringify(obj);
	  } else if (typeof obj === 'function') {
	    return '[function object]';
	  }
	  // Differs from JSON.stringify in that undefined becauses undefined and that
	  // inf and nan don't become null
	  return String(obj);
	}

	var styleMutationWarning = {};

	function checkAndWarnForMutatedStyle(style1, style2, component) {
	  if (style1 == null || style2 == null) {
	    return;
	  }
	  if (shallowEqual(style1, style2)) {
	    return;
	  }

	  var componentName = component._tag;
	  var owner = component._currentElement._owner;
	  var ownerName;
	  if (owner) {
	    ownerName = owner.getName();
	  }

	  var hash = ownerName + '|' + componentName;

	  if (styleMutationWarning.hasOwnProperty(hash)) {
	    return;
	  }

	  styleMutationWarning[hash] = true;

	  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
	}

	/**
	 * @param {object} component
	 * @param {?object} props
	 */
	function assertValidProps(component, props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (process.env.NODE_ENV !== 'production') {
	    if (voidElementTags[component._tag]) {
	      process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
	    }
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
	    process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
	  }
	  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
	}

	function enqueuePutListener(id, registrationName, listener, transaction) {
	  if (process.env.NODE_ENV !== 'production') {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getReactMountReady().enqueue(putListener, {
	    id: id,
	    registrationName: registrationName,
	    listener: listener
	  });
	}

	function putListener() {
	  var listenerToPut = this;
	  ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
	}

	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};

	function trapBubbledEventsLocal() {
	  var inst = this;
	  // If a component renders to null or if another component fatals and causes
	  // the state of the tree to be corrupted, `node` here can be null.
	  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
	  var node = ReactMount.getNode(inst._rootNodeID);
	  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;

	  switch (inst._tag) {
	    case 'iframe':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'video':
	    case 'audio':

	      inst._wrapperState.listeners = [];
	      // create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
	        }
	      }

	      break;
	    case 'img':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'form':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
	      break;
	  }
	}

	function mountReadyInputWrapper() {
	  ReactDOMInput.mountReadyWrapper(this);
	}

	function postUpdateSelectWrapper() {
	  ReactDOMSelect.postUpdateWrapper(this);
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	};

	// NOTE: menuitem's close tag should be omitted, but that causes problems.
	var newlineEatingTags = {
	  'listing': true,
	  'pre': true,
	  'textarea': true
	};

	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = assign({
	  'menuitem': true
	}, omittedCloseTags);

	// We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = ({}).hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
	    validatedTagCache[tag] = true;
	  }
	}

	function processChildContextDev(context, inst) {
	  // Pass down our tag name to child components for validation purposes
	  context = assign({}, context);
	  var info = context[validateDOMNesting.ancestorInfoContextKey];
	  context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
	  return context;
	}

	function isCustomComponent(tagName, props) {
	  return tagName.indexOf('-') >= 0 || props.is != null;
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag.toLowerCase();
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._nodeWithLegacyProperties = null;
	  if (process.env.NODE_ENV !== 'production') {
	    this._unprocessedContextDev = null;
	    this._processedContextDev = null;
	  }
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  construct: function (element) {
	    this._currentElement = element;
	  },

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._rootNodeID = rootID;

	    var props = this._currentElement.props;

	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        this._wrapperState = {
	          listeners: null
	        };
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'button':
	        props = ReactDOMButton.getNativeProps(this, props, context);
	        break;
	      case 'input':
	        ReactDOMInput.mountWrapper(this, props, context);
	        props = ReactDOMInput.getNativeProps(this, props, context);
	        break;
	      case 'option':
	        ReactDOMOption.mountWrapper(this, props, context);
	        props = ReactDOMOption.getNativeProps(this, props, context);
	        break;
	      case 'select':
	        ReactDOMSelect.mountWrapper(this, props, context);
	        props = ReactDOMSelect.getNativeProps(this, props, context);
	        context = ReactDOMSelect.processChildContext(this, props, context);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.mountWrapper(this, props, context);
	        props = ReactDOMTextarea.getNativeProps(this, props, context);
	        break;
	    }

	    assertValidProps(this, props);
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      this._unprocessedContextDev = context;
	      this._processedContextDev = processChildContextDev(context, this);
	      context = this._processedContextDev;
	    }

	    var mountImage;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement(this._currentElement.type);
	      DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
	      // Populate node cache
	      ReactMount.getID(el);
	      this._updateDOMProperties({}, props, transaction, el);
	      this._createInitialChildren(transaction, props, context, el);
	      mountImage = el;
	    } else {
	      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
	      var tagContent = this._createContentMarkup(transaction, props, context);
	      if (!tagContent && omittedCloseTags[this._tag]) {
	        mountImage = tagOpen + '/>';
	      } else {
	        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
	      }
	    }

	    switch (this._tag) {
	      case 'input':
	        transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
	      // falls through
	      case 'button':
	      case 'select':
	      case 'textarea':
	        if (props.autoFocus) {
	          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
	        }
	        break;
	    }

	    return mountImage;
	  },

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
	    var ret = '<' + this._currentElement.type;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (propValue) {
	          enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
	        }
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            if (process.env.NODE_ENV !== 'production') {
	              // See `_updateDOMProperties`. style block
	              this._previousStyle = propValue;
	            }
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup = null;
	        if (this._tag != null && isCustomComponent(this._tag, props)) {
	          if (propKey !== CHILDREN) {
	            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret;
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID;
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function (transaction, props, context) {
	    var ret = '';

	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        ret = innerHTML.__html;
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        ret = escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        ret = mountImages.join('');
	      }
	    }
	    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
	      // text/html ignores the first character in these tags if it's a newline
	      // Prefer to break application/xml over text/html (for now) by adding
	      // a newline specifically to get eaten by the parser. (Alternately for
	      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	      // \r is normalized out by HTMLTextAreaElement#value.)
	      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	      // See: Parsing of "textarea" "listing" and "pre" elements
	      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	      return '\n' + ret;
	    } else {
	      return ret;
	    }
	  },

	  _createInitialChildren: function (transaction, props, context, el) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        setInnerHTML(el, innerHTML.__html);
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        setTextContent(el, contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        for (var i = 0; i < mountImages.length; i++) {
	          el.appendChild(mountImages[i]);
	        }
	      }
	    }
	  },

	  /**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
	  receiveComponent: function (nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevElement, nextElement, context) {
	    var lastProps = prevElement.props;
	    var nextProps = this._currentElement.props;

	    switch (this._tag) {
	      case 'button':
	        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
	        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
	        break;
	      case 'input':
	        ReactDOMInput.updateWrapper(this);
	        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
	        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
	        break;
	      case 'option':
	        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
	        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
	        break;
	      case 'select':
	        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
	        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.updateWrapper(this);
	        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
	        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
	        break;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // If the context is reference-equal to the old one, pass down the same
	      // processed object so the update bailout in ReactReconciler behaves
	      // correctly (and identically in dev and prod). See #5005.
	      if (this._unprocessedContextDev !== context) {
	        this._unprocessedContextDev = context;
	        this._processedContextDev = processChildContextDev(context, this);
	      }
	      context = this._processedContextDev;
	    }

	    assertValidProps(this, nextProps);
	    this._updateDOMProperties(lastProps, nextProps, transaction, null);
	    this._updateDOMChildren(lastProps, nextProps, transaction, context);

	    if (!canDefineProperty && this._nodeWithLegacyProperties) {
	      this._nodeWithLegacyProperties.props = nextProps;
	    }

	    if (this._tag === 'select') {
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
	    }
	  },

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?DOMElement} node
	   */
	  _updateDOMProperties: function (lastProps, nextProps, transaction, node) {
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (lastProps[propKey]) {
	          // Only call deleteListener if there was a listener previously or
	          // else willDeleteListener gets called when there wasn't actually a
	          // listener (e.g., onClick={null})
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        DOMPropertyOperations.deleteValueForProperty(node, propKey);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          if (process.env.NODE_ENV !== 'production') {
	            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
	            this._previousStyle = nextProp;
	          }
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp) {
	          enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
	        } else if (lastProp) {
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (isCustomComponent(this._tag, nextProps)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        if (propKey === CHILDREN) {
	          nextProp = null;
	        }
	        DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        // If we're updating to null or undefined, we should remove the property
	        // from the DOM node instead of inadvertantly setting to a string. This
	        // brings us in line with the same behavior we have on initial render.
	        if (nextProp != null) {
	          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
	        } else {
	          DOMPropertyOperations.deleteValueForProperty(node, propKey);
	        }
	      }
	    }
	    if (styleUpdates) {
	      if (!node) {
	        node = ReactMount.getNode(this._rootNodeID);
	      }
	      CSSPropertyOperations.setValueForStyles(node, styleUpdates);
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
	  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
	    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

	    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        this.updateMarkup('' + nextHtml);
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function () {
	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        var listeners = this._wrapperState.listeners;
	        if (listeners) {
	          for (var i = 0; i < listeners.length; i++) {
	            listeners[i].remove();
	          }
	        }
	        break;
	      case 'input':
	        ReactDOMInput.unmountWrapper(this);
	        break;
	      case 'html':
	      case 'head':
	      case 'body':
	        /**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
	         true ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
	        break;
	    }

	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	    this._wrapperState = null;
	    if (this._nodeWithLegacyProperties) {
	      var node = this._nodeWithLegacyProperties;
	      node._reactInternalComponent = null;
	      this._nodeWithLegacyProperties = null;
	    }
	  },

	  getPublicInstance: function () {
	    if (!this._nodeWithLegacyProperties) {
	      var node = ReactMount.getNode(this._rootNodeID);

	      node._reactInternalComponent = this;
	      node.getDOMNode = legacyGetDOMNode;
	      node.isMounted = legacyIsMounted;
	      node.setState = legacySetStateEtc;
	      node.replaceState = legacySetStateEtc;
	      node.forceUpdate = legacySetStateEtc;
	      node.setProps = legacySetProps;
	      node.replaceProps = legacyReplaceProps;

	      if (process.env.NODE_ENV !== 'production') {
	        if (canDefineProperty) {
	          Object.defineProperties(node, legacyPropsDescriptor);
	        } else {
	          // updateComponent will update this property on subsequent renders
	          node.props = this._currentElement.props;
	        }
	      } else {
	        // updateComponent will update this property on subsequent renders
	        node.props = this._currentElement.props;
	      }

	      this._nodeWithLegacyProperties = node;
	    }
	    return this._nodeWithLegacyProperties;
	  }

	};

	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});

	assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

	module.exports = ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactMount = __webpack_require__(28);

	var findDOMNode = __webpack_require__(91);
	var focusNode = __webpack_require__(95);

	var Mixin = {
	  componentDidMount: function () {
	    if (this.props.autoFocus) {
	      focusNode(findDOMNode(this));
	    }
	  }
	};

	var AutoFocusUtils = {
	  Mixin: Mixin,

	  focusDOMComponent: function () {
	    focusNode(ReactMount.getNode(this._rootNodeID));
	  }
	};

	module.exports = AutoFocusUtils;

/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(97);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactPerf = __webpack_require__(18);

	var camelizeStyleName = __webpack_require__(98);
	var dangerousStyleValue = __webpack_require__(100);
	var hyphenateStyleName = __webpack_require__(101);
	var memoizeStringOnly = __webpack_require__(103);
	var warning = __webpack_require__(25);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};

	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
	  };

	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
	  };

	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function (node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
	  setValueForStyles: 'setValueForStyles'
	});

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(99);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	"use strict";

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(97);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(102);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	'use strict';

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	'use strict';

	var mouseListenerNames = {
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,

	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	};

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = {
	  getNativeProps: function (inst, props, context) {
	    if (!props.disabled) {
	      return props;
	    }

	    // Copy the props, except the mouse listeners
	    var nativeProps = {};
	    for (var key in props) {
	      if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
	        nativeProps[key] = props[key];
	      }
	    }

	    return nativeProps;
	  }
	};

	module.exports = ReactDOMButton;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(27);
	var LinkedValueUtils = __webpack_require__(106);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMInput.updateWrapper(this);
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getNativeProps: function (inst, props, context) {
	    var value = LinkedValueUtils.getValue(props);
	    var checked = LinkedValueUtils.getChecked(props);

	    var nativeProps = assign({}, props, {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : inst._wrapperState.initialValue,
	      checked: checked != null ? checked : inst._wrapperState.initialChecked,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    inst._wrapperState = {
	      initialChecked: props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null,
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  mountReadyWrapper: function (inst) {
	    // Can't be in mountWrapper or else server rendering leaks.
	    instancesByReactID[inst._rootNodeID] = inst;
	  },

	  unmountWrapper: function (inst) {
	    delete instancesByReactID[inst._rootNodeID];
	  },

	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;

	    // TODO: Shouldn't this be getChecked(props)?
	    var checked = props.checked;
	    if (checked != null) {
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;

	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  // Here we use asap to wait until all updates have propagated, which
	  // is important when using controlled components within layers:
	  // https://github.com/facebook/react/issues/1698
	  ReactUpdates.asap(forceUpdateIfMounted, this);

	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var rootNode = ReactMount.getNode(this._rootNodeID);
	    var queryRoot = rootNode;

	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }

	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form, let's just use the global
	    // `querySelectorAll` to ensure we don't miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React with non-React.
	      var otherID = ReactMount.getID(otherNode);
	      !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
	      var otherInstance = instancesByReactID[otherID];
	      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	    }
	  }

	  return returnValue;
	}

	module.exports = ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactPropTypes = __webpack_require__(107);
	var ReactPropTypeLocations = __webpack_require__(65);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};

	function _assertSingleLink(inputProps) {
	  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
	}
	function _assertValueLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
	}

	function _assertCheckedLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
	}

	var propTypes = {
	  value: function (props, propName, componentName) {
	    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  checked: function (props, propName, componentName) {
	    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  onChange: ReactPropTypes.func
	};

	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  checkPropTypes: function (tagName, props, owner) {
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum(owner);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function (inputProps) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.value;
	    }
	    return inputProps.value;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function (inputProps) {
	    if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.value;
	    }
	    return inputProps.checked;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
	  executeOnChange: function (inputProps, event) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.requestChange(event.target.value);
	    } else if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.requestChange(event.target.checked);
	    } else if (inputProps.onChange) {
	      return inputProps.onChange.call(undefined, event);
	    }
	  }
	};

	module.exports = LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocationNames = __webpack_require__(66);

	var emptyFunction = __webpack_require__(15);
	var getIteratorFn = __webpack_require__(108);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return '<<anonymous>>';
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */

	'use strict';

	/* global Symbol */
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	'use strict';

	var ReactChildren = __webpack_require__(110);
	var ReactDOMSelect = __webpack_require__(112);

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	var valueContextKey = ReactDOMSelect.valueContextKey;

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  mountWrapper: function (inst, props, context) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
	    }

	    // Look up whether this option is 'selected' via context
	    var selectValue = context[valueContextKey];

	    // If context key is null (e.g., no specified value or after initial mount)
	    // or missing (e.g., for <datalist>), we don't change props.selected
	    var selected = null;
	    if (selectValue != null) {
	      selected = false;
	      if (Array.isArray(selectValue)) {
	        // multiple
	        for (var i = 0; i < selectValue.length; i++) {
	          if ('' + selectValue[i] === '' + props.value) {
	            selected = true;
	            break;
	          }
	        }
	      } else {
	        selected = '' + selectValue === '' + props.value;
	      }
	    }

	    inst._wrapperState = { selected: selected };
	  },

	  getNativeProps: function (inst, props, context) {
	    var nativeProps = assign({ selected: undefined, children: undefined }, props);

	    // Read state only from initial mount because <select> updates value
	    // manually; we need the initial state only for server rendering
	    if (inst._wrapperState.selected != null) {
	      nativeProps.selected = inst._wrapperState.selected;
	    }

	    var content = '';

	    // Flatten children and warn if they aren't strings or numbers;
	    // invalid types are ignored.
	    ReactChildren.forEach(props.children, function (child) {
	      if (child == null) {
	        return;
	      }
	      if (typeof child === 'string' || typeof child === 'number') {
	        content += child;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
	      }
	    });

	    if (content) {
	      nativeProps.children = content;
	    }

	    return nativeProps;
	  }

	};

	module.exports = ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);
	var ReactElement = __webpack_require__(42);

	var emptyFunction = __webpack_require__(15);
	var traverseAllChildren = __webpack_require__(111);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceHandles = __webpack_require__(45);

	var getIteratorFn = __webpack_require__(108);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	var didWarnAboutMaps = false;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} text Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(106);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);

	function updateOptionsIfPendingUpdateAndMounted() {
	  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
	    this._wrapperState.pendingUpdate = false;

	    var props = this._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);

	    if (value != null) {
	      updateOptions(this, Boolean(props.multiple), value);
	    }
	  }
	}

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	var valuePropNames = ['value', 'defaultValue'];

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function checkSelectPropTypes(inst, props) {
	  var owner = inst._currentElement._owner;
	  LinkedValueUtils.checkPropTypes('select', props, owner);

	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    if (props.multiple) {
	      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    } else {
	      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    }
	  }
	}

	/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(inst, multiple, propValue) {
	  var selectedValue, i;
	  var options = ReactMount.getNode(inst._rootNodeID).options;

	  if (multiple) {
	    selectedValue = {};
	    for (i = 0; i < propValue.length; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0; i < options.length; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0; i < options.length; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  valueContextKey: valueContextKey,

	  getNativeProps: function (inst, props, context) {
	    return assign({}, props, {
	      onChange: inst._wrapperState.onChange,
	      value: undefined
	    });
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      checkSelectPropTypes(inst, props);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      pendingUpdate: false,
	      initialValue: value != null ? value : props.defaultValue,
	      onChange: _handleChange.bind(inst),
	      wasMultiple: Boolean(props.multiple)
	    };
	  },

	  processChildContext: function (inst, props, context) {
	    // Pass down initial value so initial generated markup has correct
	    // `selected` attributes
	    var childContext = assign({}, context);
	    childContext[valueContextKey] = inst._wrapperState.initialValue;
	    return childContext;
	  },

	  postUpdateWrapper: function (inst) {
	    var props = inst._currentElement.props;

	    // After the initial mount, we control selected-ness manually so don't pass
	    // the context value down
	    inst._wrapperState.initialValue = undefined;

	    var wasMultiple = inst._wrapperState.wasMultiple;
	    inst._wrapperState.wasMultiple = Boolean(props.multiple);

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      inst._wrapperState.pendingUpdate = false;
	      updateOptions(inst, Boolean(props.multiple), value);
	    } else if (wasMultiple !== Boolean(props.multiple)) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
	      }
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  this._wrapperState.pendingUpdate = true;
	  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(106);
	var ReactDOMIDOperations = __webpack_require__(27);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(this);
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getNativeProps: function (inst, props, context) {
	    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    var nativeProps = assign({}, props, {
	      defaultValue: undefined,
	      value: undefined,
	      children: inst._wrapperState.initialValue,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
	      }
	      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(props);

	    inst._wrapperState = {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue),
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactMultiChildUpdateTypes = __webpack_require__(16);

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactReconciler = __webpack_require__(50);
	var ReactChildReconciler = __webpack_require__(115);

	var flattenChildren = __webpack_require__(116);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueInsertMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    content: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the markup of a node.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
	function enqueueSetMarkup(parentID, markup) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.SET_MARKUP,
	    markupIndex: null,
	    content: markup,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    content: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	        }
	      }
	      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	    },

	    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, transaction, context) {
	      var nextChildren;
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            nextChildren = flattenChildren(nextNestedChildrenElements);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	          return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	        }
	      }
	      nextChildren = flattenChildren(nextNestedChildrenElements);
	      return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	    },

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function (nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	          child._mountIndex = index++;
	          mountImages.push(mountImage);
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function (nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChild(prevChildren[name]);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
	    updateMarkup: function (nextMarkup) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        this.setMarkup(nextMarkup);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildrenElements, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChild(prevChild);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChild(prevChildren[name]);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function () {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function (child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function (child, mountImage) {
	      enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function (child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function (textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Sets this markup string.
	     *
	     * @param {string} markup Markup to set.
	     * @protected
	     */
	    setMarkup: function (markup) {
	      enqueueSetMarkup(this._rootNodeID, markup);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function (child, name, index, transaction, context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },

	    /**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
	    _unmountChild: function (child) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }

	  }

	};

	module.exports = ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */

	'use strict';

	var ReactReconciler = __webpack_require__(50);

	var instantiateReactComponent = __webpack_require__(62);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var traverseAllChildren = __webpack_require__(111);
	var warning = __webpack_require__(25);

	function instantiateChild(childInstances, child, name) {
	  // We found a component instance.
	  var keyUnique = childInstances[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (child != null && keyUnique) {
	    childInstances[name] = instantiateReactComponent(child, null);
	  }
	}

	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {
	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function (nestedChildNodes, transaction, context) {
	    if (nestedChildNodes == null) {
	      return null;
	    }
	    var childInstances = {};
	    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
	    return childInstances;
	  },

	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function (prevChildren, nextChildren, transaction, context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(nextElement, null);
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },

	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function (renderedChildren) {
	    for (var name in renderedChildren) {
	      if (renderedChildren.hasOwnProperty(name)) {
	        var renderedChild = renderedChildren[name];
	        ReactReconciler.unmountComponent(renderedChild);
	      }
	    }
	  }

	};

	module.exports = ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	'use strict';

	var traverseAllChildren = __webpack_require__(111);
	var warning = __webpack_require__(25);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = result[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	'use strict';

	var EventListener = __webpack_require__(119);
	var ExecutionEnvironment = __webpack_require__(9);
	var PooledClass = __webpack_require__(56);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var getEventTarget = __webpack_require__(81);
	var getUnboundedScrollPosition = __webpack_require__(120);

	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function () {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

	function handleTopLevelImpl(bookKeeping) {
	  // TODO: Re-enable event.path handling
	  //
	  // if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
	  //   // New browsers have a path attribute on native events
	  //   handleTopLevelWithPath(bookKeeping);
	  // } else {
	  //   // Legacy browsers don't have a path attribute on native events
	  //   handleTopLevelWithoutPath(bookKeeping);
	  // }

	  void handleTopLevelWithPath; // temporarily unused
	  handleTopLevelWithoutPath(bookKeeping);
	}

	// Legacy browsers don't have a path attribute on native events
	function handleTopLevelWithoutPath(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	// New browsers have a path attribute on native events
	function handleTopLevelWithPath(bookKeeping) {
	  var path = bookKeeping.nativeEvent.path;
	  var currentNativeTarget = path[0];
	  var eventsFired = 0;
	  for (var i = 0; i < path.length; i++) {
	    var currentPathElement = path[i];
	    if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
	      currentNativeTarget = path[i + 1];
	    }
	    // TODO: slow
	    var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
	    if (reactParent === currentPathElement) {
	      var currentPathElementID = ReactMount.getID(currentPathElement);
	      var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
	      bookKeeping.ancestors.push(currentPathElement);

	      var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
	      eventsFired++;
	      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);

	      // Jump to the root of this React render tree
	      while (currentPathElementID !== newRootID) {
	        i++;
	        currentPathElement = path[i];
	        currentPathElementID = ReactMount.getID(currentPathElement);
	      }
	    }
	  }
	  if (eventsFired === 0) {
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function (handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function (enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function () {
	    return ReactEventListener._enabled;
	  },

	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  monitorScrollValue: function (refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },

	  dispatchEvent: function (topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	'use strict';

	var emptyFunction = __webpack_require__(15);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function () {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function () {}
	};

	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var EventPluginHub = __webpack_require__(31);
	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactClass = __webpack_require__(122);
	var ReactEmptyComponent = __webpack_require__(68);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactNativeComponent = __webpack_require__(69);
	var ReactPerf = __webpack_require__(18);
	var ReactRootIndex = __webpack_require__(46);
	var ReactUpdates = __webpack_require__(54);

	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var ReactComponent = __webpack_require__(123);
	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactNoopUpdateQueue = __webpack_require__(124);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var keyMirror = __webpack_require__(17);
	var keyOf = __webpack_require__(79);
	var warning = __webpack_require__(25);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	var warnedSetProps = false;
	function warnSetProps() {
	  if (!warnedSetProps) {
	    warnedSetProps = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
	  }
	}

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = (name in RESERVED_SPEC_KEYS);
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;

	    var isInherited = (name in Constructor);
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function (partialProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueSetProps(this, partialProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function (newProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  }
	};

	var ReactClassComponent = function () {};
	assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactNoopUpdateQueue = __webpack_require__(124);

	var canDefineProperty = __webpack_require__(43);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
	    setProps: ['setProps', 'Instead, call render again at the top level.']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(25);

	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    warnTDZ(publicInstance, 'setProps');
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    warnTDZ(publicInstance, 'replaceProps');
	  }

	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(55);
	var PooledClass = __webpack_require__(56);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactDOMFeatureFlags = __webpack_require__(41);
	var ReactInputSelection = __webpack_require__(126);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);

	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};

	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function () {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },

	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
	  close: function (previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};

	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },

	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function () {
	    this.reactMountReady.notifyAll();
	  }
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction(forceHTML) {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactReconcileTransaction);

	module.exports = ReactReconcileTransaction;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	var ReactDOMSelection = __webpack_require__(127);

	var containsNode = __webpack_require__(59);
	var focusNode = __webpack_require__(95);
	var getActiveElement = __webpack_require__(129);

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function (elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },

	  getSelectionInformation: function () {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function (priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      focusNode(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function (input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }

	    return selection || { start: 0, end: 0 };
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function (input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};

	module.exports = ReactInputSelection;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var getNodeForCharacterOffset = __webpack_require__(128);
	var getTextContentAccessor = __webpack_require__(75);

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;

	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);

	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;

	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;

	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }

	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};

	module.exports = ReactDOMSelection;

/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	module.exports = getNodeForCharacterOffset;

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	'use strict';

	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactInputSelection = __webpack_require__(126);
	var SyntheticEvent = __webpack_require__(77);

	var getActiveElement = __webpack_require__(129);
	var isTextInputElement = __webpack_require__(82);
	var keyOf = __webpack_require__(79);
	var shallowEqual = __webpack_require__(117);

	var topLevelTypes = EventConstants.topLevelTypes;

	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSelect: null }),
	      captured: keyOf({ onSelectCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events.
	var hasListener = false;
	var ON_SELECT_KEY = keyOf({ onSelect: null });

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  },

	  didPutListener: function (id, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};

	module.exports = SelectEventPlugin;

/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	'use strict';

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function () {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventListener = __webpack_require__(119);
	var EventPropagators = __webpack_require__(73);
	var ReactMount = __webpack_require__(28);
	var SyntheticClipboardEvent = __webpack_require__(133);
	var SyntheticEvent = __webpack_require__(77);
	var SyntheticFocusEvent = __webpack_require__(134);
	var SyntheticKeyboardEvent = __webpack_require__(135);
	var SyntheticMouseEvent = __webpack_require__(86);
	var SyntheticDragEvent = __webpack_require__(138);
	var SyntheticTouchEvent = __webpack_require__(139);
	var SyntheticUIEvent = __webpack_require__(87);
	var SyntheticWheelEvent = __webpack_require__(140);

	var emptyFunction = __webpack_require__(15);
	var getEventCharCode = __webpack_require__(136);
	var invariant = __webpack_require__(13);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  abort: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAbort: true }),
	      captured: keyOf({ onAbortCapture: true })
	    }
	  },
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBlur: true }),
	      captured: keyOf({ onBlurCapture: true })
	    }
	  },
	  canPlay: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlay: true }),
	      captured: keyOf({ onCanPlayCapture: true })
	    }
	  },
	  canPlayThrough: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlayThrough: true }),
	      captured: keyOf({ onCanPlayThroughCapture: true })
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onClick: true }),
	      captured: keyOf({ onClickCapture: true })
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onContextMenu: true }),
	      captured: keyOf({ onContextMenuCapture: true })
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCopy: true }),
	      captured: keyOf({ onCopyCapture: true })
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCut: true }),
	      captured: keyOf({ onCutCapture: true })
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDoubleClick: true }),
	      captured: keyOf({ onDoubleClickCapture: true })
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrag: true }),
	      captured: keyOf({ onDragCapture: true })
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnd: true }),
	      captured: keyOf({ onDragEndCapture: true })
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnter: true }),
	      captured: keyOf({ onDragEnterCapture: true })
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragExit: true }),
	      captured: keyOf({ onDragExitCapture: true })
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragLeave: true }),
	      captured: keyOf({ onDragLeaveCapture: true })
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragOver: true }),
	      captured: keyOf({ onDragOverCapture: true })
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragStart: true }),
	      captured: keyOf({ onDragStartCapture: true })
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrop: true }),
	      captured: keyOf({ onDropCapture: true })
	    }
	  },
	  durationChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDurationChange: true }),
	      captured: keyOf({ onDurationChangeCapture: true })
	    }
	  },
	  emptied: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEmptied: true }),
	      captured: keyOf({ onEmptiedCapture: true })
	    }
	  },
	  encrypted: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEncrypted: true }),
	      captured: keyOf({ onEncryptedCapture: true })
	    }
	  },
	  ended: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEnded: true }),
	      captured: keyOf({ onEndedCapture: true })
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onError: true }),
	      captured: keyOf({ onErrorCapture: true })
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onFocus: true }),
	      captured: keyOf({ onFocusCapture: true })
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInput: true }),
	      captured: keyOf({ onInputCapture: true })
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyDown: true }),
	      captured: keyOf({ onKeyDownCapture: true })
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyPress: true }),
	      captured: keyOf({ onKeyPressCapture: true })
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyUp: true }),
	      captured: keyOf({ onKeyUpCapture: true })
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoad: true }),
	      captured: keyOf({ onLoadCapture: true })
	    }
	  },
	  loadedData: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedData: true }),
	      captured: keyOf({ onLoadedDataCapture: true })
	    }
	  },
	  loadedMetadata: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedMetadata: true }),
	      captured: keyOf({ onLoadedMetadataCapture: true })
	    }
	  },
	  loadStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadStart: true }),
	      captured: keyOf({ onLoadStartCapture: true })
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseDown: true }),
	      captured: keyOf({ onMouseDownCapture: true })
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseMove: true }),
	      captured: keyOf({ onMouseMoveCapture: true })
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOut: true }),
	      captured: keyOf({ onMouseOutCapture: true })
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOver: true }),
	      captured: keyOf({ onMouseOverCapture: true })
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseUp: true }),
	      captured: keyOf({ onMouseUpCapture: true })
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPaste: true }),
	      captured: keyOf({ onPasteCapture: true })
	    }
	  },
	  pause: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPause: true }),
	      captured: keyOf({ onPauseCapture: true })
	    }
	  },
	  play: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlay: true }),
	      captured: keyOf({ onPlayCapture: true })
	    }
	  },
	  playing: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlaying: true }),
	      captured: keyOf({ onPlayingCapture: true })
	    }
	  },
	  progress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onProgress: true }),
	      captured: keyOf({ onProgressCapture: true })
	    }
	  },
	  rateChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onRateChange: true }),
	      captured: keyOf({ onRateChangeCapture: true })
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onReset: true }),
	      captured: keyOf({ onResetCapture: true })
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onScroll: true }),
	      captured: keyOf({ onScrollCapture: true })
	    }
	  },
	  seeked: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeked: true }),
	      captured: keyOf({ onSeekedCapture: true })
	    }
	  },
	  seeking: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeking: true }),
	      captured: keyOf({ onSeekingCapture: true })
	    }
	  },
	  stalled: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onStalled: true }),
	      captured: keyOf({ onStalledCapture: true })
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSubmit: true }),
	      captured: keyOf({ onSubmitCapture: true })
	    }
	  },
	  suspend: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSuspend: true }),
	      captured: keyOf({ onSuspendCapture: true })
	    }
	  },
	  timeUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTimeUpdate: true }),
	      captured: keyOf({ onTimeUpdateCapture: true })
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchCancel: true }),
	      captured: keyOf({ onTouchCancelCapture: true })
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchEnd: true }),
	      captured: keyOf({ onTouchEndCapture: true })
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchMove: true }),
	      captured: keyOf({ onTouchMoveCapture: true })
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchStart: true }),
	      captured: keyOf({ onTouchStartCapture: true })
	    }
	  },
	  volumeChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onVolumeChange: true }),
	      captured: keyOf({ onVolumeChangeCapture: true })
	    }
	  },
	  waiting: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWaiting: true }),
	      captured: keyOf({ onWaitingCapture: true })
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWheel: true }),
	      captured: keyOf({ onWheelCapture: true })
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topAbort: eventTypes.abort,
	  topBlur: eventTypes.blur,
	  topCanPlay: eventTypes.canPlay,
	  topCanPlayThrough: eventTypes.canPlayThrough,
	  topClick: eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy: eventTypes.copy,
	  topCut: eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag: eventTypes.drag,
	  topDragEnd: eventTypes.dragEnd,
	  topDragEnter: eventTypes.dragEnter,
	  topDragExit: eventTypes.dragExit,
	  topDragLeave: eventTypes.dragLeave,
	  topDragOver: eventTypes.dragOver,
	  topDragStart: eventTypes.dragStart,
	  topDrop: eventTypes.drop,
	  topDurationChange: eventTypes.durationChange,
	  topEmptied: eventTypes.emptied,
	  topEncrypted: eventTypes.encrypted,
	  topEnded: eventTypes.ended,
	  topError: eventTypes.error,
	  topFocus: eventTypes.focus,
	  topInput: eventTypes.input,
	  topKeyDown: eventTypes.keyDown,
	  topKeyPress: eventTypes.keyPress,
	  topKeyUp: eventTypes.keyUp,
	  topLoad: eventTypes.load,
	  topLoadedData: eventTypes.loadedData,
	  topLoadedMetadata: eventTypes.loadedMetadata,
	  topLoadStart: eventTypes.loadStart,
	  topMouseDown: eventTypes.mouseDown,
	  topMouseMove: eventTypes.mouseMove,
	  topMouseOut: eventTypes.mouseOut,
	  topMouseOver: eventTypes.mouseOver,
	  topMouseUp: eventTypes.mouseUp,
	  topPaste: eventTypes.paste,
	  topPause: eventTypes.pause,
	  topPlay: eventTypes.play,
	  topPlaying: eventTypes.playing,
	  topProgress: eventTypes.progress,
	  topRateChange: eventTypes.rateChange,
	  topReset: eventTypes.reset,
	  topScroll: eventTypes.scroll,
	  topSeeked: eventTypes.seeked,
	  topSeeking: eventTypes.seeking,
	  topStalled: eventTypes.stalled,
	  topSubmit: eventTypes.submit,
	  topSuspend: eventTypes.suspend,
	  topTimeUpdate: eventTypes.timeUpdate,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd: eventTypes.touchEnd,
	  topTouchMove: eventTypes.touchMove,
	  topTouchStart: eventTypes.touchStart,
	  topVolumeChange: eventTypes.volumeChange,
	  topWaiting: eventTypes.waiting,
	  topWheel: eventTypes.wheel
	};

	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}

	var ON_CLICK_KEY = keyOf({ onClick: null });
	var onClickListeners = {};

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
	    var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  },

	  didPutListener: function (id, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var node = ReactMount.getNode(id);
	      if (!onClickListeners[id]) {
	        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
	      }
	    }
	  },

	  willDeleteListener: function (id, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      onClickListeners[id].remove();
	      delete onClickListeners[id];
	    }
	  }

	};

	module.exports = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	module.exports = SyntheticClipboardEvent;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	module.exports = SyntheticFocusEvent;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	var getEventCharCode = __webpack_require__(136);
	var getEventKey = __webpack_require__(137);
	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	module.exports = SyntheticKeyboardEvent;

/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	module.exports = getEventCharCode;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */

	'use strict';

	var getEventCharCode = __webpack_require__(136);

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	module.exports = getEventKey;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(86);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	module.exports = SyntheticDragEvent;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	module.exports = SyntheticTouchEvent;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(86);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	module.exports = SyntheticWheelEvent;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    xlinkActuate: MUST_USE_ATTRIBUTE,
	    xlinkArcrole: MUST_USE_ATTRIBUTE,
	    xlinkHref: MUST_USE_ATTRIBUTE,
	    xlinkRole: MUST_USE_ATTRIBUTE,
	    xlinkShow: MUST_USE_ATTRIBUTE,
	    xlinkTitle: MUST_USE_ATTRIBUTE,
	    xlinkType: MUST_USE_ATTRIBUTE,
	    xmlBase: MUST_USE_ATTRIBUTE,
	    xmlLang: MUST_USE_ATTRIBUTE,
	    xmlSpace: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox',
	    xlinkActuate: 'xlink:actuate',
	    xlinkArcrole: 'xlink:arcrole',
	    xlinkHref: 'xlink:href',
	    xlinkRole: 'xlink:role',
	    xlinkShow: 'xlink:show',
	    xlinkTitle: 'xlink:title',
	    xlinkType: 'xlink:type',
	    xmlBase: 'xml:base',
	    xmlLang: 'xml:lang',
	    xmlSpace: 'xml:space'
	  }
	};

	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactDefaultPerfAnalysis = __webpack_require__(143);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);

	var performanceNow = __webpack_require__(144);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function () {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function () {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function () {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  getMeasurementsSummaryMap: function (measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
	    return summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  printDOM: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function (item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result.type = item.type;
	      result.args = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  _recordWrite: function (id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function (moduleName, fnName, func) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0,
	          created: {}
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function (update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
	          });
	        } else {
	          // basic format
	          var id = args[0];
	          if (typeof id === 'object') {
	            id = ReactMount.getID(args[0]);
	          }
	          ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || // TODO: receiveComponent()?
	      fnName === '_renderValidatedComponent')) {

	        if (this._currentElement.type === ReactMount.TopLevelWrapper) {
	          return func.apply(this, args);
	        }

	        var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          entry.created[rootNodeID] = true;
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	'use strict';

	var assign = __webpack_require__(39);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  SET_MARKUP: 'set innerHTML',
	  TEXT_CONTENT: 'set textContent',
	  'setValueForProperty': 'update attribute',
	  'setValueForAttribute': 'update attribute',
	  'deleteValueForProperty': 'remove attribute',
	  'setValueForStyles': 'update styles',
	  'replaceNodeWithMarkup': 'replace',
	  'updateTextContent': 'set textContent'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  measurements.forEach(function (measurement) {
	    Object.keys(measurement.writes).forEach(function (id) {
	      measurement.writes[id].forEach(function (write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    });
	  });
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    // check if component newly created
	    if (measurement.created[id]) {
	      isDirty = true;
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	'use strict';

	var performance = __webpack_require__(145);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function () {
	    return performance.now();
	  };
	} else {
	  performanceNow = function () {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 146 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '0.14.8';

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/

	'use strict';

	var ReactMount = __webpack_require__(28);

	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */

	'use strict';

	var ReactDefaultInjection = __webpack_require__(71);
	var ReactServerRendering = __webpack_require__(149);
	var ReactVersion = __webpack_require__(146);

	ReactDefaultInjection.inject();

	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};

	module.exports = ReactDOMServer;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactDefaultBatchingStrategy = __webpack_require__(92);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMarkupChecksum = __webpack_require__(48);
	var ReactServerBatchingStrategy = __webpack_require__(150);
	var ReactServerRenderingTransaction = __webpack_require__(151);
	var ReactUpdates = __webpack_require__(54);

	var emptyObject = __webpack_require__(58);
	var instantiateReactComponent = __webpack_require__(62);
	var invariant = __webpack_require__(13);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 * @typechecks
	 */

	'use strict';

	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};

	module.exports = ReactServerBatchingStrategy;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);
	var CallbackQueue = __webpack_require__(55);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = false;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactIsomorphic
	 */

	'use strict';

	var ReactChildren = __webpack_require__(110);
	var ReactComponent = __webpack_require__(123);
	var ReactClass = __webpack_require__(122);
	var ReactDOMFactories = __webpack_require__(153);
	var ReactElement = __webpack_require__(42);
	var ReactElementValidator = __webpack_require__(154);
	var ReactPropTypes = __webpack_require__(107);
	var ReactVersion = __webpack_require__(146);

	var assign = __webpack_require__(39);
	var onlyChild = __webpack_require__(156);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 * @typechecks static-only
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactElementValidator = __webpack_require__(154);

	var mapObject = __webpack_require__(155);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactCurrentOwner = __webpack_require__(5);

	var canDefineProperty = __webpack_require__(43);
	var getIteratorFn = __webpack_require__(108);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }

	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;

	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  return addenda;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(42);

	var invariant = __webpack_require__(13);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} fnName The name of the function
	 * @param {string} newModule The module that fn will exist in
	 * @param {string} newPackage The module that fn will exist in
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {function} The function that will warn once and then call fn
	 */
	function deprecated(fnName, newModule, newPackage, ctx, fn) {
	  var warned = false;
	  if (process.env.NODE_ENV !== 'production') {
	    var newFn = function () {
	      process.env.NODE_ENV !== 'production' ? warning(warned,
	      // Require examples in this string must be split to prevent React's
	      // build tools from mistaking them for real requires.
	      // Otherwise the build tools will attempt to build a '%s' module.
	      'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }

	  return fn;
	}

	module.exports = deprecated;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ReactHighmaps = __webpack_require__(160);

	var _ReactHighmaps2 = _interopRequireDefault(_ReactHighmaps);

	var _usAll = __webpack_require__(162);

	var _usAll2 = _interopRequireDefault(_usAll);

	var _usData = __webpack_require__(163);

	var _usData2 = _interopRequireDefault(_usData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var USAMap = function USAMap(props) {
	  var data = _usData2.default;
	  var config = {
	    title: {
	      text: 'US Election Results 2016'
	    },

	    legend: {
	      enabled: true
	    },

	    mapNavigation: {
	      enabled: true,
	      buttonOptions: {
	        verticalAlign: 'bottom'
	      }
	    },

	    colors: ['#e01405', '#0070ca'],
	    colorAxis: {

	      dataClassColor: 'category',
	      dataClasses: [{
	        from: 0,
	        to: 0.1,
	        name: 'Trump'
	      }, {
	        from: 0.2,
	        to: 1,
	        name: 'Clinton'
	      }]
	    },
	    plotOptions: {
	      map: {
	        tooltip: {
	          pointFormatter: function pointFormatter() {
	            return this.name + ': ' + (this.value < 0.2 ? 'Trump' : 'Clinton');
	          }
	        }
	      }
	    },
	    series: [{
	      data: data,
	      name: 'Voting Info',
	      mapData: _usAll2.default,
	      joinBy: 'postal-code',
	      states: {
	        hover: {
	          color: '#a4edba'
	        }
	      },
	      dataLabels: {
	        enabled: true,
	        format: '{point.postal-code}',
	        style: {
	          textTransform: 'uppercase'
	        }
	      }
	    }, {
	      name: 'Separators',
	      type: 'mapline',
	      data: _usAll2.default,
	      color: 'silver',
	      showInLegend: false,
	      enableMouseTracking: false
	    }]
	  };
	  return _react2.default.createElement(_ReactHighmaps2.default, { config: config });
	};

	exports.default = USAMap;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,r){ true?module.exports=r(__webpack_require__(1),__webpack_require__(161)):"function"==typeof define&&define.amd?define(["react","highcharts/highmaps"],r):"object"==typeof exports?exports.ReactHighmaps=r(require("react"),require("highcharts/highmaps")):t.ReactHighmaps=r(t.React,t.Highcharts)}(this,function(t,r){return function(t){function r(o){if(e[o])return e[o].exports;var n=e[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){t.exports=e(5)},function(r,e){r.exports=t},function(t,r,e){(function(r){"use strict";var o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},n=e(1),i="undefined"==typeof r?window:r;t.exports=function(r,e){var c="Highcharts"+r,s=n.createClass({displayName:c,propTypes:{config:n.PropTypes.object.isRequired,isPureConfig:n.PropTypes.bool,neverReflow:n.PropTypes.bool,callback:n.PropTypes.func,domProps:n.PropTypes.object},defaultProps:{callback:function(){},domProps:{}},renderChart:function(t){var n=this;if(!t)throw new Error("Config must be specified for the "+c+" component");var s=t.chart;this.chart=new e[r](o({},t,{chart:o({},s,{renderTo:this.refs.chart})}),this.props.callback),this.props.neverReflow||i.requestAnimationFrame&&requestAnimationFrame(function(){n.chart&&n.chart.options&&n.chart.reflow()})},shouldComponentUpdate:function(t){return!!(t.neverReflow||t.isPureConfig&&this.props.config===t.config)||(this.renderChart(t.config),!1)},getChart:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart},componentDidMount:function(){this.renderChart(this.props.config)},componentWillUnmount:function(){this.chart.destroy()},render:function(){return n.createElement("div",o({ref:"chart"},this.props.domProps))}});return s.Highcharts=e,s.withHighcharts=function(e){return t.exports(r,e)},s}}).call(r,function(){return this}())},,,function(t,r,e){"use strict";t.exports=e(2)("Map",e(8))},,,function(t,e){t.exports=r}])});

/***/ },
/* 161 */
/***/ function(module, exports) {

	/*
	 Highmaps JS v5.0.5 (2016-11-29)

	 (c) 2011-2016 Torstein Honsi

	 License: www.highcharts.com/license
	*/
	(function(K,a){"object"===typeof module&&module.exports?module.exports=K.document?a(K):a:K.Highcharts=a(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,B=a.document,F=a.navigator&&a.navigator.userAgent||"",D=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,E=/(edge|msie|trident)/i.test(F)&&!window.opera,g=!D,e=/Firefox/.test(F),q=e&&4>parseInt(F.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highmaps",
	version:"5.0.5",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:q,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:E,isWebKit:/AppleWebKit/.test(F),isFirefox:e,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,vml:g,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var B=[],F=a.charts,D=a.doc,E=a.win;a.error=function(a,e){a="Highcharts error #"+
	a+": www.highcharts.com/errors/"+a;if(e)throw Error(a);E.console&&console.log(a)};a.Fx=function(a,e,q){this.options=e;this.elem=a;this.prop=q};a.Fx.prototype={dSetter:function(){var a=this.paths[0],e=this.paths[1],q=[],t=this.now,h=a.length,u;if(1===t)q=this.toD;else if(h===e.length&&1>t)for(;h--;)u=parseFloat(a[h]),q[h]=isNaN(u)?a[h]:t*parseFloat(e[h]-u)+u;else q=e;this.elem.attr("d",q,null,!0)},update:function(){var a=this.elem,e=this.prop,q=this.now,t=this.options.step;if(this[e+"Setter"])this[e+
	"Setter"]();else a.attr?a.element&&a.attr(e,q,null,!0):a.style[e]=q+this.unit;t&&t.call(a,q,this)},run:function(a,e,q){var g=this,h=function(a){return h.stopped?!1:g.step(a)},u;this.startTime=+new Date;this.start=a;this.end=e;this.unit=q;this.now=this.start;this.pos=0;h.elem=this.elem;h.prop=this.prop;h()&&1===B.push(h)&&(h.timerId=setInterval(function(){for(u=0;u<B.length;u++)B[u]()||B.splice(u--,1);B.length||clearInterval(h.timerId)},13))},step:function(a){var g=+new Date,q,t=this.options;q=this.elem;
	var h=t.complete,u=t.duration,d=t.curAnim,m;if(q.attr&&!q.element)q=!1;else if(a||g>=u+this.startTime){this.now=this.end;this.pos=1;this.update();a=d[this.prop]=!0;for(m in d)!0!==d[m]&&(a=!1);a&&h&&h.call(q);q=!1}else this.pos=t.easing((g-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),q=!0;return q},initPath:function(a,e,q){function g(a){var c,n;for(b=a.length;b--;)c="M"===a[b]||"L"===a[b],n=/[a-zA-Z]/.test(a[b+3]),c&&n&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+
	2])}function h(a,c){for(;a.length<f;){a[0]=c[f-a.length];var n=a.slice(0,k);[].splice.apply(a,[0,0].concat(n));C&&(n=a.slice(a.length-k),[].splice.apply(a,[a.length,0].concat(n)),b--)}a[0]="M"}function u(a,b){for(var n=(f-a.length)/k;0<n&&n--;)c=a.slice().splice(a.length/r-k,k*r),c[0]=b[f-k-n*k],p&&(c[k-6]=c[k-2],c[k-5]=c[k-1]),[].splice.apply(a,[a.length/r,0].concat(c)),C&&n--}e=e||"";var d,m=a.startX,w=a.endX,p=-1<e.indexOf("C"),k=p?7:3,f,c,b;e=e.split(" ");q=q.slice();var C=a.isArea,r=C?2:1,n;
	p&&(g(e),g(q));if(m&&w){for(b=0;b<m.length;b++)if(m[b]===w[0]){d=b;break}else if(m[0]===w[w.length-m.length+b]){d=b;n=!0;break}void 0===d&&(e=[])}e.length&&(f=q.length+(d||0)*r*k,n?(h(e,q),u(q,e)):(h(q,e),u(e,q)));return[e,q]}};a.extend=function(a,e){var g;a||(a={});for(g in e)a[g]=e[g];return a};a.merge=function(){var g,e=arguments,q,t={},h=function(g,d){var m,w;"object"!==typeof g&&(g={});for(w in d)d.hasOwnProperty(w)&&(m=d[w],a.isObject(m,!0)&&"renderTo"!==w&&"number"!==typeof m.nodeType?g[w]=
	h(g[w]||{},m):g[w]=d[w]);return g};!0===e[0]&&(t=e[1],e=Array.prototype.slice.call(e,2));q=e.length;for(g=0;g<q;g++)t=h(t,e[g]);return t};a.pInt=function(a,e){return parseInt(a,e||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(g,e){return g&&"object"===typeof g&&(!e||!a.isArray(g))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,
	e){for(var g=a.length;g--;)if(a[g]===e){a.splice(g,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(g,e,q){var t,h;if(a.isString(e))a.defined(q)?g.setAttribute(e,q):g&&g.getAttribute&&(h=g.getAttribute(e));else if(a.defined(e)&&a.isObject(e))for(t in e)g.setAttribute(t,e[t]);return h};a.splat=function(g){return a.isArray(g)?g:[g]};a.syncTimeout=function(a,e,q){if(e)return setTimeout(a,e,q);a.call(0,q)};a.pick=function(){var a=arguments,e,q,t=a.length;for(e=0;e<t;e++)if(q=
	a[e],void 0!==q&&null!==q)return q};a.css=function(g,e){a.isMS&&!a.svg&&e&&void 0!==e.opacity&&(e.filter="alpha(opacity\x3d"+100*e.opacity+")");a.extend(g.style,e)};a.createElement=function(g,e,q,t,h){g=D.createElement(g);var u=a.css;e&&a.extend(g,e);h&&u(g,{padding:0,border:"none",margin:0});q&&u(g,q);t&&t.appendChild(g);return g};a.extendClass=function(g,e){var q=function(){};q.prototype=new g;a.extend(q.prototype,e);return q};a.pad=function(a,e,q){return Array((e||2)+1-String(a).length).join(q||
	0)+a};a.relativeLength=function(a,e){return/%$/.test(a)?e*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,e,q){var g=a[e];a[e]=function(){var a=Array.prototype.slice.call(arguments),e=arguments,d=this;d.proceed=function(){g.apply(d,arguments.length?arguments:e)};a.unshift(g);a=q.apply(this,a);d.proceed=null;return a}};a.getTZOffset=function(g){var e=a.Date;return 6E4*(e.hcGetTimezoneOffset&&e.hcGetTimezoneOffset(g)||e.hcTimezoneOffset||0)};a.dateFormat=function(g,e,q){if(!a.defined(e)||isNaN(e))return a.defaultOptions.lang.invalidDate||
	"";g=a.pick(g,"%Y-%m-%d %H:%M:%S");var t=a.Date,h=new t(e-a.getTZOffset(e)),u,d=h[t.hcGetHours](),m=h[t.hcGetDay](),w=h[t.hcGetDate](),p=h[t.hcGetMonth](),k=h[t.hcGetFullYear](),f=a.defaultOptions.lang,c=f.weekdays,b=f.shortWeekdays,C=a.pad,t=a.extend({a:b?b[m]:c[m].substr(0,3),A:c[m],d:C(w),e:C(w,2," "),w:m,b:f.shortMonths[p],B:f.months[p],m:C(p+1),y:k.toString().substr(2,2),Y:k,H:C(d),k:d,I:C(d%12||12),l:d%12||12,M:C(h[t.hcGetMinutes]()),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:C(h.getSeconds()),L:C(Math.round(e%
	1E3),3)},a.dateFormats);for(u in t)for(;-1!==g.indexOf("%"+u);)g=g.replace("%"+u,"function"===typeof t[u]?t[u](e):t[u]);return q?g.substr(0,1).toUpperCase()+g.substr(1):g};a.formatSingle=function(g,e){var q=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(g)?(q=(q=g.match(q))?q[1]:-1,null!==e&&(e=a.numberFormat(e,q,t.decimalPoint,-1<g.indexOf(",")?t.thousandsSep:""))):e=a.dateFormat(g,e);return e};a.format=function(g,e){for(var q="{",t=!1,h,u,d,m,w=[],p;g;){q=g.indexOf(q);if(-1===q)break;h=g.slice(0,
	q);if(t){h=h.split(":");u=h.shift().split(".");m=u.length;p=e;for(d=0;d<m;d++)p=p[u[d]];h.length&&(p=a.formatSingle(h.join(":"),p));w.push(p)}else w.push(h);g=g.slice(q+1);q=(t=!t)?"}":"{"}w.push(g);return w.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(g,e,q,t,h){var u,d=g;q=a.pick(q,1);u=g/q;e||(e=h?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===q?e=a.grep(e,function(a){return 0===a%1}):.1>=q&&(e=[1/q])));
	for(t=0;t<e.length&&!(d=e[t],h&&d*q>=g||!h&&u<=(e[t]+(e[t+1]||e[t]))/2);t++);return d*q};a.stableSort=function(a,e){var g=a.length,t,h;for(h=0;h<g;h++)a[h].safeI=h;a.sort(function(a,d){t=e(a,d);return 0===t?a.safeI-d.safeI:t});for(h=0;h<g;h++)delete a[h].safeI};a.arrayMin=function(a){for(var e=a.length,g=a[0];e--;)a[e]<g&&(g=a[e]);return g};a.arrayMax=function(a){for(var e=a.length,g=a[0];e--;)a[e]>g&&(g=a[e]);return g};a.destroyObjectProperties=function(a,e){for(var g in a)a[g]&&a[g]!==e&&a[g].destroy&&
	a[g].destroy(),delete a[g]};a.discardElement=function(g){var e=a.garbageBin;e||(e=a.createElement("div"));g&&e.appendChild(g);e.innerHTML=""};a.correctFloat=function(a,e){return parseFloat(a.toPrecision(e||14))};a.setAnimation=function(g,e){e.renderer.globalAnimation=a.pick(g,e.options.chart.animation,!0)};a.animObject=function(g){return a.isObject(g)?a.merge(g):{duration:g?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=
	function(g,e,q,t){g=+g||0;e=+e;var h=a.defaultOptions.lang,u=(g.toString().split(".")[1]||"").length,d,m,w=Math.abs(g);-1===e?e=Math.min(u,20):a.isNumber(e)||(e=2);d=String(a.pInt(w.toFixed(e)));m=3<d.length?d.length%3:0;q=a.pick(q,h.decimalPoint);t=a.pick(t,h.thousandsSep);g=(0>g?"-":"")+(m?d.substr(0,m)+t:"");g+=d.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+t);e&&(t=Math.abs(w-d+Math.pow(10,-Math.max(e,u)-1)),g+=q+t.toFixed(e).slice(2));return g};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*
	a)-1)};a.getStyle=function(g,e){return"width"===e?Math.min(g.offsetWidth,g.scrollWidth)-a.getStyle(g,"padding-left")-a.getStyle(g,"padding-right"):"height"===e?Math.min(g.offsetHeight,g.scrollHeight)-a.getStyle(g,"padding-top")-a.getStyle(g,"padding-bottom"):(g=E.getComputedStyle(g,void 0))&&a.pInt(g.getPropertyValue(e))};a.inArray=function(a,e){return e.indexOf?e.indexOf(a):[].indexOf.call(e,a)};a.grep=function(a,e){return[].filter.call(a,e)};a.map=function(a,e){for(var g=[],t=0,h=a.length;t<h;t++)g[t]=
	e.call(a[t],a[t],t,a);return g};a.offset=function(a){var e=D.documentElement;a=a.getBoundingClientRect();return{top:a.top+(E.pageYOffset||e.scrollTop)-(e.clientTop||0),left:a.left+(E.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};a.stop=function(a,e){for(var g=B.length;g--;)B[g].elem!==a||e&&e!==B[g].prop||(B[g].stopped=!0)};a.each=function(a,e,q){return Array.prototype.forEach.call(a,e,q)};a.addEvent=function(g,e,q){function t(a){a.target=a.srcElement||E;q.call(g,a)}var h=g.hcEvents=g.hcEvents||
	{};g.addEventListener?g.addEventListener(e,q,!1):g.attachEvent&&(g.hcEventsIE||(g.hcEventsIE={}),g.hcEventsIE[q.toString()]=t,g.attachEvent("on"+e,t));h[e]||(h[e]=[]);h[e].push(q);return function(){a.removeEvent(g,e,q)}};a.removeEvent=function(g,e,q){function t(a,d){g.removeEventListener?g.removeEventListener(a,d,!1):g.attachEvent&&(d=g.hcEventsIE[d.toString()],g.detachEvent("on"+a,d))}function h(){var a,m;if(g.nodeName)for(m in e?(a={},a[e]=!0):a=d,a)if(d[m])for(a=d[m].length;a--;)t(m,d[m][a])}var u,
	d=g.hcEvents,m;d&&(e?(u=d[e]||[],q?(m=a.inArray(q,u),-1<m&&(u.splice(m,1),d[e]=u),t(e,q)):(h(),d[e]=[])):(h(),g.hcEvents={}))};a.fireEvent=function(g,e,q,t){var h;h=g.hcEvents;var u,d;q=q||{};if(D.createEvent&&(g.dispatchEvent||g.fireEvent))h=D.createEvent("Events"),h.initEvent(e,!0,!0),a.extend(h,q),g.dispatchEvent?g.dispatchEvent(h):g.fireEvent(e,h);else if(h)for(h=h[e]||[],u=h.length,q.target||a.extend(q,{preventDefault:function(){q.defaultPrevented=!0},target:g,type:e}),e=0;e<u;e++)(d=h[e])&&
	!1===d.call(g,q)&&q.preventDefault();t&&!q.defaultPrevented&&t(q)};a.animate=function(g,e,q){var t,h="",u,d,m;a.isObject(q)||(t=arguments,q={duration:t[2],easing:t[3],complete:t[4]});a.isNumber(q.duration)||(q.duration=400);q.easing="function"===typeof q.easing?q.easing:Math[q.easing]||Math.easeInOutSine;q.curAnim=a.merge(e);for(m in e)a.stop(g,m),d=new a.Fx(g,q,m),u=null,"d"===m?(d.paths=d.initPath(g,g.d,e.d),d.toD=e.d,t=0,u=1):g.attr?t=g.attr(m):(t=parseFloat(a.getStyle(g,m))||0,"opacity"!==m&&
	(h="px")),u||(u=e[m]),u.match&&u.match("px")&&(u=u.replace(/px/g,"")),d.run(t,u,h)};a.seriesType=function(g,e,q,t,h){var u=a.getOptions(),d=a.seriesTypes;u.plotOptions[g]=a.merge(u.plotOptions[e],q);d[g]=a.extendClass(d[e]||function(){},t);d[g].prototype.type=g;h&&(d[g].prototype.pointClass=a.extendClass(a.Point,h));return d[g]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),e=0;return function(){return"highcharts-"+a+"-"+e++}}();E.jQuery&&(E.jQuery.fn.highcharts=function(){var g=
	[].slice.call(arguments);if(this[0])return g[0]?(new (a[a.isString(g[0])?g.shift():"Chart"])(this[0],g[0],g[1]),this):F[a.attr(this[0],"data-highcharts-chart")]});D&&!D.defaultView&&(a.getStyle=function(g,e){var q={width:"clientWidth",height:"clientHeight"}[e];if(g.style[e])return a.pInt(g.style[e]);"opacity"===e&&(e="filter");if(q)return g.style.zoom=1,Math.max(g[q]-2*a.getStyle(g,"padding"),0);g=g.currentStyle[e.replace(/\-(\w)/g,function(a,h){return h.toUpperCase()})];"filter"===e&&(g=g.replace(/alpha\(opacity=([0-9]+)\)/,
	function(a,h){return h/100}));return""===g?1:a.pInt(g)});Array.prototype.forEach||(a.each=function(a,e,q){for(var g=0,h=a.length;g<h;g++)if(!1===e.call(q,a[g],g,a))return g});Array.prototype.indexOf||(a.inArray=function(a,e){var g,t=0;if(e)for(g=e.length;t<g;t++)if(e[t]===a)return t;return-1});Array.prototype.filter||(a.grep=function(a,e){for(var g=[],t=0,h=a.length;t<h;t++)e(a[t],t)&&g.push(a[t]);return g})})(K);(function(a){var B=a.each,F=a.isNumber,D=a.map,E=a.merge,g=a.pInt;a.Color=function(e){if(!(this instanceof
	a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[g(a[1],16),g(a[2],16),g(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),1]}}],names:{white:"#ffffff",
	black:"#000000"},init:function(e){var g,t,h,u;if((this.input=e=this.names[e]||e)&&e.stops)this.stops=D(e.stops,function(d){return new a.Color(d[1])});else for(h=this.parsers.length;h--&&!t;)u=this.parsers[h],(g=u.regex.exec(e))&&(t=u.parse(g));this.rgba=t||[]},get:function(a){var g=this.input,e=this.rgba,h;this.stops?(h=E(g),h.stops=[].concat(h.stops),B(this.stops,function(e,d){h.stops[d]=[h.stops[d][0],e.get(a)]})):h=e&&F(e[0])?"rgb"===a||!a&&1===e[3]?"rgb("+e[0]+","+e[1]+","+e[2]+")":"a"===a?e[3]:
	"rgba("+e.join(",")+")":g;return h},brighten:function(a){var e,t=this.rgba;if(this.stops)B(this.stops,function(h){h.brighten(a)});else if(F(a)&&0!==a)for(e=0;3>e;e++)t[e]+=g(255*a),0>t[e]&&(t[e]=0),255<t[e]&&(t[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};a.color=function(e){return new a.Color(e)}})(K);(function(a){function B(){var g=a.defaultOptions.global,h,u=g.useUTC,d=u?"getUTC":"get",m=u?"setUTC":"set";a.Date=h=g.Date||q.Date;h.hcTimezoneOffset=u&&g.timezoneOffset;
	h.hcGetTimezoneOffset=u&&g.getTimezoneOffset;h.hcMakeTime=function(a,d,k,f,c,b){var m;u?(m=h.UTC.apply(0,arguments),m+=E(m)):m=(new h(a,d,e(k,1),e(f,0),e(c,0),e(b,0))).getTime();return m};D("Minutes Hours Day Date Month FullYear".split(" "),function(a){h["hcGet"+a]=d+a});D("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){h["hcSet"+a]=m+a})}var F=a.color,D=a.each,E=a.getTZOffset,g=a.merge,e=a.pick,q=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
	symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.5/gfx/vml-radial-gradient.png"},
	chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",
	labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",
	top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:F("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
	pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(e){a.defaultOptions=g(!0,a.defaultOptions,e);B();
	return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;B()})(K);(function(a){var B,F,D=a.addEvent,E=a.animate,g=a.attr,e=a.charts,q=a.color,t=a.css,h=a.createElement,u=a.defined,d=a.deg2rad,m=a.destroyObjectProperties,w=a.doc,p=a.each,k=a.extend,f=a.erase,c=a.grep,b=a.hasTouch,C=a.isArray,r=a.isFirefox,n=a.isMS,v=a.isObject,I=a.isString,J=a.isWebKit,H=a.merge,L=a.noop,G=a.pick,A=a.pInt,N=a.removeEvent,M=a.stop,l=a.svg,x=a.SVG_NS,
	P=a.symbolSizes,O=a.win;B=a.SVGElement=function(){return this};B.prototype={opacity:1,SVG_NS:x,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textOutline".split(" "),init:function(a,z){this.element="span"===z?h(z):w.createElementNS(this.SVG_NS,z);this.renderer=a},animate:function(a,z,l){(z=G(z,this.renderer.globalAnimation,!0))?(l&&(z.complete=l),E(this,a,z)):this.attr(a,null,l);return this},colorGradient:function(y,z,l){var n=this.renderer,
	c,b,x,f,v,d,k,m,S,r,I,A=[],h;y.linearGradient?b="linearGradient":y.radialGradient&&(b="radialGradient");if(b){x=y[b];v=n.gradients;k=y.stops;r=l.radialReference;C(x)&&(y[b]=x={x1:x[0],y1:x[1],x2:x[2],y2:x[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===b&&r&&!u(x.gradientUnits)&&(f=x,x=H(x,n.getRadialAttr(r,f),{gradientUnits:"userSpaceOnUse"}));for(I in x)"id"!==I&&A.push(I,x[I]);for(I in k)A.push(k[I]);A=A.join(",");v[A]?r=v[A].attr("id"):(x.id=r=a.uniqueKey(),v[A]=d=n.createElement(b).attr(x).add(n.defs),
	d.radAttr=f,d.stops=[],p(k,function(y){0===y[1].indexOf("rgba")?(c=a.color(y[1]),m=c.get("rgb"),S=c.get("a")):(m=y[1],S=1);y=n.createElement("stop").attr({offset:y[0],"stop-color":m,"stop-opacity":S}).add(d);d.stops.push(y)}));h="url("+n.url+"#"+r+")";l.setAttribute(z,h);l.gradient=A;y.toString=function(){return h}}},applyTextOutline:function(a){var y=this.element,l,n,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(y.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;
	l=[].slice.call(y.getElementsByTagName("tspan"));a=a.split(" ");n=a[a.length-1];(b=a[0])&&"none"!==b&&(b=b.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,z){return 2*y+z}),p(l,function(a){"highcharts-text-outline"===a.getAttribute("class")&&f(l,y.removeChild(a))}),p(l,function(a,z){0===z&&(a.setAttribute("x",y.getAttribute("x")),z=y.getAttribute("y"),a.setAttribute("y",z||0),null===z&&y.setAttribute("y",0));a=a.cloneNode(1);g(a,{"class":"highcharts-text-outline",fill:n,stroke:n,"stroke-width":b,"stroke-linejoin":"round"});
	y.insertBefore(a,y.firstChild)}))},attr:function(a,z,l,b){var y,n=this.element,c,x=this,f;"string"===typeof a&&void 0!==z&&(y=a,a={},a[y]=z);if("string"===typeof a)x=(this[a+"Getter"]||this._defaultGetter).call(this,a,n);else{for(y in a)z=a[y],f=!1,b||M(this,y),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(y)&&(c||(this.symbolAttr(a),c=!0),f=!0),!this.rotation||"x"!==y&&"y"!==y||(this.doTransform=!0),f||(f=this[y+"Setter"]||this._defaultSetter,f.call(this,z,y,n),this.shadows&&
	/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(y)&&this.updateShadows(y,z,f));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}l&&l();return x},updateShadows:function(a,z,l){for(var y=this.shadows,b=y.length;b--;)l.call(y[b],"height"===a?Math.max(z-(y[b].cutHeight||0),0):"d"===a?this.d:z,a,y[b])},addClass:function(a,z){var y=this.attr("class")||"";-1===y.indexOf(a)&&(z||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
	g(this.element,"class").indexOf(a)},removeClass:function(a){g(this.element,"class",(g(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var y=this;p("x y r start end width height innerR anchorX anchorY".split(" "),function(z){y[z]=G(a[z],y[z])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,z){var y,b={},l;z=z||a.strokeWidth||0;l=Math.round(z)%
	2/2;a.x=Math.floor(a.x||this.x||0)+l;a.y=Math.floor(a.y||this.y||0)+l;a.width=Math.floor((a.width||this.width||0)-2*l);a.height=Math.floor((a.height||this.height||0)-2*l);u(a.strokeWidth)&&(a.strokeWidth=z);for(y in a)this[y]!==a[y]&&(this[y]=b[y]=a[y]);return b},css:function(a){var y=this.styles,b={},c=this.element,x,f,v="";x=!y;a&&a.color&&(a.fill=a.color);if(y)for(f in a)a[f]!==y[f]&&(b[f]=a[f],x=!0);if(x){x=this.textWidth=a&&a.width&&"text"===c.nodeName.toLowerCase()&&A(a.width)||this.textWidth;
	y&&(a=k(y,b));this.styles=a;x&&!l&&this.renderer.forExport&&delete a.width;if(n&&!l)t(this.element,a);else{y=function(a,y){return"-"+y.toLowerCase()};for(f in a)v+=f.replace(/([A-Z])/g,y)+":"+a[f]+";";g(c,"style",v)}this.added&&(x&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,z){var y=this,l=y.element;b&&"click"===a?(l.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();
	z.call(l,a)},l.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&z.call(l,a)}):l["on"+a]=z;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,z){return this.attr({translateX:a,translateY:z})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
	this.translateX||0,z=this.translateY||0,l=this.scaleX,b=this.scaleY,n=this.inverted,c=this.rotation,x=this.element;n&&(a+=this.attr("width"),z+=this.attr("height"));a=["translate("+a+","+z+")"];n?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+(x.getAttribute("x")||0)+" "+(x.getAttribute("y")||0)+")");(u(l)||u(b))&&a.push("scale("+G(l,1)+" "+G(b,1)+")");a.length&&x.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,
	z,l){var y,b,n,c,x={};b=this.renderer;n=b.alignedObjects;var v,d;if(a){if(this.alignOptions=a,this.alignByTranslate=z,!l||I(l))this.alignTo=y=l||"renderer",f(n,this),n.push(this),l=null}else a=this.alignOptions,z=this.alignByTranslate,y=this.alignTo;l=G(l,b[y],b);y=a.align;b=a.verticalAlign;n=(l.x||0)+(a.x||0);c=(l.y||0)+(a.y||0);"right"===y?v=1:"center"===y&&(v=2);v&&(n+=(l.width-(a.width||0))/v);x[z?"translateX":"x"]=Math.round(n);"bottom"===b?d=1:"middle"===b&&(d=2);d&&(c+=(l.height-(a.height||
	0))/d);x[z?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](x);this.placed=!0;this.alignAttr=x;return this},getBBox:function(a,l){var y,z=this.renderer,b,c=this.element,x=this.styles,f,v=this.textStr,m,r=z.cache,I=z.cacheKeys,A;l=G(l,this.rotation);b=l*d;f=x&&x.fontSize;void 0!==v&&(A=v.toString(),-1===A.indexOf("\x3c")&&(A=A.replace(/[0-9]/g,"0")),A+=["",l||0,f,c.style.width,c.style["text-overflow"]].join());A&&!a&&(y=r[A]);if(!y){if(c.namespaceURI===this.SVG_NS||z.forExport){try{(m=
	this.fakeTS&&function(a){p(c.querySelectorAll(".highcharts-text-outline"),function(y){y.style.display=a})})&&m("none"),y=c.getBBox?k({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight},m&&m("")}catch(T){}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();z.isSVG&&(a=y.width,z=y.height,n&&x&&"11px"===x.fontSize&&"16.9"===z.toPrecision(3)&&(y.height=z=14),l&&(y.width=Math.abs(z*Math.sin(b))+Math.abs(a*Math.cos(b)),y.height=Math.abs(z*Math.cos(b))+Math.abs(a*Math.sin(b))));if(A&&
	0<y.height){for(;250<I.length;)delete r[I.shift()];r[A]||I.push(A);r[A]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var y=this;y.animate({opacity:0},{duration:a||150,complete:function(){y.attr({y:-9999})}})},add:function(a){var y=this.renderer,l=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&y.buildText(this);this.added=!0;if(!a||a.handleZ||
	this.zIndex)b=this.zIndexSetter();b||(a?a.element:y.box).appendChild(l);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var y=a.parentNode;y&&y.removeChild(a)},destroy:function(){var a=this.element||{},l=this.renderer.isSVG&&"SPAN"===a.nodeName&&this.parentGroup,b,c;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;M(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(c=0;c<this.stops.length;c++)this.stops[c]=this.stops[c].destroy();this.stops=
	null}this.safeRemoveChild(a);for(this.destroyShadows();l&&l.div&&0===l.div.childNodes.length;)a=l.parentGroup,this.safeRemoveChild(l.div),delete l.div,l=a;this.alignTo&&f(this.renderer.alignedObjects,this);for(b in this)delete this[b];return null},shadow:function(a,l,b){var y=[],c,z,n=this.element,x,f,v,d;if(!a)this.destroyShadows();else if(!this.shadows){f=G(a.width,3);v=(a.opacity||.15)/f;d=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(c=1;c<=f;c++)z=n.cloneNode(0),
	x=2*f+1-2*c,g(z,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":v*c,"stroke-width":x,transform:"translate"+d,fill:"none"}),b&&(g(z,"height",Math.max(g(z,"height")-x,0)),z.cutHeight=x),l?l.element.appendChild(z):n.parentNode.insertBefore(z,n),y.push(z);this.shadows=y}return this},destroyShadows:function(){p(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},
	_defaultGetter:function(a){a=G(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,l,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");b.setAttribute(l,a);this[l]=a},dashstyleSetter:function(a){var l,b=this["stroke-width"];"inherit"===b&&(b=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
	"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(l=a.length;l--;)a[l]=A(a[l])*b;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,l,b){this[l]=a;b.setAttribute(l,a)},titleSetter:function(a){var l=this.element.getElementsByTagName("title")[0];l||(l=w.createElementNS(this.SVG_NS,"title"),this.element.appendChild(l));
	l.firstChild&&l.removeChild(l.firstChild);l.appendChild(w.createTextNode(String(G(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,l,b){"string"===typeof a?b.setAttribute(l,a):a&&this.colorGradient(a,l,b)},visibilitySetter:function(a,l,b){"inherit"===a?b.removeAttribute(l):b.setAttribute(l,a)},zIndexSetter:function(a,l){var b=this.renderer,c=this.parentGroup,n=(c||b).element||
	b.box,y,z=this.element,x;y=this.added;var f;u(a)&&(z.zIndex=a,a=+a,this[l]===a&&(y=!1),this[l]=a);if(y){(a=this.zIndex)&&c&&(c.handleZ=!0);l=n.childNodes;for(f=0;f<l.length&&!x;f++)c=l[f],y=c.zIndex,c!==z&&(A(y)>a||!u(a)&&u(y)||0>a&&!u(y)&&n!==b.box)&&(n.insertBefore(z,c),x=!0);x||n.appendChild(z)}return x},_defaultSetter:function(a,l,b){b.setAttribute(l,a)}};B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=B.prototype.rotationSetter=B.prototype.verticalAlignSetter=
	B.prototype.scaleXSetter=B.prototype.scaleYSetter=function(a,l){this[l]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,l,b){this[l]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===l&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,arguments)};F.prototype=
	{Element:B,SVG_NS:x,init:function(a,l,b,c,n,x){var y;c=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(c));y=c.element;a.appendChild(y);-1===a.innerHTML.indexOf("xmlns")&&g(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=c;this.alignedObjects=[];this.url=(r||J)&&w.getElementsByTagName("base").length?O.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(w.createTextNode("Created with Highmaps 5.0.5"));
	this.defs=this.createElement("defs").add();this.allowHTML=x;this.forExport=n;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(l,b,!1);var z;r&&a.getBoundingClientRect&&(l=function(){t(a,{left:0,top:0});z=a.getBoundingClientRect();t(a,{left:Math.ceil(z.left)-z.left+"px",top:Math.ceil(z.top)-z.top+"px"})},l(),this.unSubPixelFix=D(O,"resize",l))},getStyle:function(a){return this.style=k({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
	a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();m(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var l=new this.Element;l.init(this,a);return l},draw:L,getRadialAttr:function(a,l){return{cx:a[0]-a[2]/2+l.cx*a[2],cy:a[1]-
	a[2]/2+l.cy*a[2],r:l.r*a[2]}},buildText:function(a){for(var b=a.element,n=this,y=n.forExport,f=G(a.textStr,"").toString(),v=-1!==f.indexOf("\x3c"),d=b.childNodes,k,m,r,I,h=g(b,"x"),e=a.styles,C=a.textWidth,u=e&&e.lineHeight,H=e&&e.textOutline,N=e&&"ellipsis"===e.textOverflow,O=d.length,J=C&&!a.added&&this.box,P=function(a){var l;l=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:e&&e.fontSize||n.style.fontSize||12;return u?A(u):n.fontMetrics(l,a.getAttribute("style")?a:b).h};O--;)b.removeChild(d[O]);
	v||H||N||C||-1!==f.indexOf(" ")?(k=/<.*class="([^"]+)".*>/,m=/<.*style="([^"]+)".*>/,r=/<.*href="(http[^"]+)".*>/,J&&J.appendChild(b),f=v?f.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[f],f=c(f,function(a){return""!==a}),p(f,function(c,f){var z,v=0;c=c.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,
	"\x3c/span\x3e|||");z=c.split("|||");p(z,function(c){if(""!==c||1===z.length){var d={},A=w.createElementNS(n.SVG_NS,"tspan"),p,G;k.test(c)&&(p=c.match(k)[1],g(A,"class",p));m.test(c)&&(G=c.match(m)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),g(A,"style",G));r.test(c)&&!y&&(g(A,"onclick",'location.href\x3d"'+c.match(r)[1]+'"'),t(A,{cursor:"pointer"}));c=(c.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==c){A.appendChild(w.createTextNode(c));v?d.dx=0:f&&null!==
	h&&(d.x=h);g(A,d);b.appendChild(A);!v&&f&&(!l&&y&&t(A,{display:"block"}),g(A,"dy",P(A)));if(C){d=c.replace(/([^\^])-/g,"$1- ").split(" ");p="nowrap"===e.whiteSpace;for(var u=1<z.length||f||1<d.length&&!p,H,O,J=[],S=P(A),R=a.rotation,M=c,Q=M.length;(u||N)&&(d.length||J.length);)a.rotation=0,H=a.getBBox(!0),O=H.width,!l&&n.forExport&&(O=n.measureSpanWidth(A.firstChild.data,a.styles)),H=O>C,void 0===I&&(I=H),N&&I?(Q/=2,""===M||!H&&.5>Q?d=[]:(M=c.substring(0,M.length+(H?-1:1)*Math.ceil(Q)),d=[M+(3<C?
	"\u2026":"")],A.removeChild(A.firstChild))):H&&1!==d.length?(A.removeChild(A.firstChild),J.unshift(d.pop())):(d=J,J=[],d.length&&!p&&(A=w.createElementNS(x,"tspan"),g(A,{dy:S,x:h}),G&&g(A,"style",G),b.appendChild(A)),O>C&&(C=O)),d.length&&A.appendChild(w.createTextNode(d.join(" ").replace(/- /g,"-")));a.rotation=R}v++}}})}),I&&a.attr("title",a.textStr),J&&J.removeChild(b),H&&a.applyTextOutline&&a.applyTextOutline(H)):b.appendChild(w.createTextNode(f.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},
	getContrast:function(a){a=q(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,l,b,c,x,f,v,d,m){var z=this.label(a,l,b,m,null,null,null,null,"button"),y=0;z.attr(H({padding:8,r:2},x));var r,A,I,p;x=H({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},x);r=x.style;delete x.style;f=H(x,{fill:"#e6e6e6"},f);A=f.style;delete f.style;v=H(x,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},v);I=v.style;delete v.style;
	d=H(x,{style:{color:"#cccccc"}},d);p=d.style;delete d.style;D(z.element,n?"mouseover":"mouseenter",function(){3!==y&&z.setState(1)});D(z.element,n?"mouseout":"mouseleave",function(){3!==y&&z.setState(y)});z.setState=function(a){1!==a&&(z.state=y=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);z.attr([x,f,v,d][a||0]).css([r,A,I,p][a||0])};z.attr(x).css(k({cursor:"default"},r));return z.on("click",function(a){3!==
	y&&c.call(z,a)})},crispLine:function(a,l){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-l%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+l%2/2);return a},path:function(a){var l={fill:"none"};C(a)?l.d=a:v(a)&&k(l,a);return this.createElement("path").attr(l)},circle:function(a,l,b){a=v(a)?a:{x:a,y:l,r:b};l=this.createElement("circle");l.xSetter=l.ySetter=function(a,l,b){b.setAttribute("c"+l,a)};return l.attr(a)},arc:function(a,l,b,c,n,x){v(a)&&(l=a.y,b=a.r,c=a.innerR,n=a.start,x=a.end,a=a.x);a=this.symbol("arc",
	a||0,l||0,b||0,b||0,{innerR:c||0,start:n||0,end:x||0});a.r=b;return a},rect:function(a,l,b,c,n,x){n=v(a)?a.r:n;var f=this.createElement("rect");a=v(a)?a:void 0===a?{}:{x:a,y:l,width:Math.max(b,0),height:Math.max(c,0)};void 0!==x&&(a.strokeWidth=x,a=f.crisp(a));a.fill="none";n&&(a.r=n);f.rSetter=function(a,l,b){g(b,{rx:a,ry:a})};return f.attr(a)},setSize:function(a,l,b){var c=this.alignedObjects,n=c.length;this.width=a;this.height=l;for(this.boxWrapper.animate({width:a,height:l},{step:function(){this.attr({viewBox:"0 0 "+
	this.attr("width")+" "+this.attr("height")})},duration:G(b,!0)?void 0:0});n--;)c[n].align()},g:function(a){var l=this.createElement("g");return a?l.attr({"class":"highcharts-"+a}):l},image:function(a,l,b,c,n){var x={preserveAspectRatio:"none"};1<arguments.length&&k(x,{x:l,y:b,width:c,height:n});x=this.createElement("image").attr(x);x.element.setAttributeNS?x.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):x.element.setAttribute("hc-svg-href",a);return x},symbol:function(a,l,b,c,n,
	x){var f=this,v,z=this.symbols[a],d=u(l)&&z&&z(Math.round(l),Math.round(b),c,n,x),y=/^url\((.*?)\)$/,m,r;z?(v=this.path(d),v.attr("fill","none"),k(v,{symbolName:a,x:l,y:b,width:c,height:n}),x&&k(v,x)):y.test(a)&&(m=a.match(y)[1],v=this.image(m),v.imgwidth=G(P[m]&&P[m].width,x&&x.width),v.imgheight=G(P[m]&&P[m].height,x&&x.height),r=function(){v.attr({width:v.width,height:v.height})},p(["width","height"],function(a){v[a+"Setter"]=function(a,l){var b={},c=this["img"+l],n="width"===l?"translateX":"translateY";
	this[l]=a;u(c)&&(this.element&&this.element.setAttribute(l,c),this.alignByTranslate||(b[n]=((this[l]||0)-c)/2,this.attr(b)))}}),u(l)&&v.attr({x:l,y:b}),v.isImg=!0,u(v.imgwidth)&&u(v.imgheight)?r():(v.attr({width:0,height:0}),h("img",{onload:function(){var a=e[f.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),w.body.appendChild(this));P[m]={width:this.width,height:this.height};v.imgwidth=this.width;v.imgheight=this.height;v.element&&r();this.parentNode&&this.parentNode.removeChild(this);
	f.imgCount--;if(!f.imgCount&&a&&a.onload)a.onload()},src:m}),this.imgCount++));return v},symbols:{circle:function(a,l,b,c){var n=.166*b;return["M",a+b/2,l,"C",a+b+n,l,a+b+n,l+c,a+b/2,l+c,"C",a-n,l+c,a-n,l,a+b/2,l,"Z"]},square:function(a,l,b,c){return["M",a,l,"L",a+b,l,a+b,l+c,a,l+c,"Z"]},triangle:function(a,l,b,c){return["M",a+b/2,l,"L",a+b,l+c,a,l+c,"Z"]},"triangle-down":function(a,l,b,c){return["M",a,l,"L",a+b,l,a+b/2,l+c,"Z"]},diamond:function(a,l,b,c){return["M",a+b/2,l,"L",a+b,l+c/2,a+b/2,l+
	c,a,l+c/2,"Z"]},arc:function(a,l,b,c,n){var x=n.start;b=n.r||b||c;var f=n.end-.001;c=n.innerR;var v=n.open,d=Math.cos(x),z=Math.sin(x),k=Math.cos(f),f=Math.sin(f);n=n.end-x<Math.PI?0:1;return["M",a+b*d,l+b*z,"A",b,b,0,n,1,a+b*k,l+b*f,v?"M":"L",a+c*k,l+c*f,"A",c,c,0,n,0,a+c*d,l+c*z,v?"":"Z"]},callout:function(a,l,b,c,n){var x=Math.min(n&&n.r||0,b,c),f=x+6,v=n&&n.anchorX;n=n&&n.anchorY;var d;d=["M",a+x,l,"L",a+b-x,l,"C",a+b,l,a+b,l,a+b,l+x,"L",a+b,l+c-x,"C",a+b,l+c,a+b,l+c,a+b-x,l+c,"L",a+x,l+c,"C",
	a,l+c,a,l+c,a,l+c-x,"L",a,l+x,"C",a,l,a,l,a+x,l];v&&v>b?n>l+f&&n<l+c-f?d.splice(13,3,"L",a+b,n-6,a+b+6,n,a+b,n+6,a+b,l+c-x):d.splice(13,3,"L",a+b,c/2,v,n,a+b,c/2,a+b,l+c-x):v&&0>v?n>l+f&&n<l+c-f?d.splice(33,3,"L",a,n+6,a-6,n,a,n-6,a,l+x):d.splice(33,3,"L",a,c/2,v,n,a,c/2,a,l+x):n&&n>c&&v>a+f&&v<a+b-f?d.splice(23,3,"L",v+6,l+c,v,l+c+6,v-6,l+c,a+x,l+c):n&&0>n&&v>a+f&&v<a+b-f&&d.splice(3,3,"L",v-6,l,v,l-6,v+6,l,b-x,l);return d}},clipRect:function(l,b,c,n){var x=a.uniqueKey(),f=this.createElement("clipPath").attr({id:x}).add(this.defs);
	l=this.rect(l,b,c,n,0).add(f);l.id=x;l.clipPath=f;l.count=0;return l},text:function(a,b,c,n){var x=!l&&this.forExport,f={};if(n&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);c&&(f.y=Math.round(c));if(a||0===a)f.text=a;a=this.createElement("text").attr(f);x&&a.css({position:"absolute"});n||(a.xSetter=function(a,l,b){var c=b.getElementsByTagName("tspan"),n,x=b.getAttribute(l),f;for(f=0;f<c.length;f++)n=c[f],n.getAttribute(l)===x&&n.setAttribute(l,a);b.setAttribute(l,
	a)});return a},fontMetrics:function(a,l){a=a||l&&l.style&&l.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?A(a):/em/.test(a)?parseFloat(a)*(l?this.fontMetrics(null,l.parentNode).f:16):12;l=24>a?a+3:Math.round(1.2*a);return{h:l,b:Math.round(.8*l),f:a}},rotCorr:function(a,l,b){var c=a;l&&b&&(c=Math.max(c*Math.cos(l*d),4));return{x:-a/3*Math.sin(l*d),y:c}},label:function(a,l,b,c,n,x,f,v,d){var m=this,z=m.g("button"!==d&&"label"),r=z.text=m.text("",0,0,f).attr({zIndex:1}),A,I,h=0,y=3,
	e=0,G,C,g,w,O,J={},P,M,t=/^url\((.*?)\)$/.test(c),q=t,S,L,R,Q;d&&z.addClass("highcharts-"+d);q=t;S=function(){return(P||0)%2/2};L=function(){var a=r.element.style,l={};I=(void 0===G||void 0===C||O)&&u(r.textStr)&&r.getBBox();z.width=(G||I.width||0)+2*y+e;z.height=(C||I.height||0)+2*y;M=y+m.fontMetrics(a&&a.fontSize,r).b;q&&(A||(z.box=A=m.symbols[c]||t?m.symbol(c):m.rect(),A.addClass(("button"===d?"":"highcharts-label-box")+(d?" highcharts-"+d+"-box":"")),A.add(z),a=S(),l.x=a,l.y=(v?-M:0)+a),l.width=
	Math.round(z.width),l.height=Math.round(z.height),A.attr(k(l,J)),J={})};R=function(){var a=e+y,l;l=v?0:M;u(G)&&I&&("center"===O||"right"===O)&&(a+={center:.5,right:1}[O]*(G-I.width));if(a!==r.x||l!==r.y)r.attr("x",a),void 0!==l&&r.attr("y",l);r.x=a;r.y=l};Q=function(a,l){A?A.attr(a,l):J[a]=l};z.onAdd=function(){r.add(z);z.attr({text:a||0===a?a:"",x:l,y:b});A&&u(n)&&z.attr({anchorX:n,anchorY:x})};z.widthSetter=function(a){G=a};z.heightSetter=function(a){C=a};z["text-alignSetter"]=function(a){O=a};
	z.paddingSetter=function(a){u(a)&&a!==y&&(y=z.padding=a,R())};z.paddingLeftSetter=function(a){u(a)&&a!==e&&(e=a,R())};z.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==h&&(h=a,I&&z.attr({x:g}))};z.textSetter=function(a){void 0!==a&&r.textSetter(a);L();R()};z["stroke-widthSetter"]=function(a,l){a&&(q=!0);P=this["stroke-width"]=a;Q(l,a)};z.strokeSetter=z.fillSetter=z.rSetter=function(a,l){"fill"===l&&a&&(q=!0);Q(l,a)};z.anchorXSetter=function(a,l){n=a;Q(l,Math.round(a)-S()-g)};z.anchorYSetter=
	function(a,l){x=a;Q(l,a-w)};z.xSetter=function(a){z.x=a;h&&(a-=h*((G||I.width)+2*y));g=Math.round(a);z.attr("translateX",g)};z.ySetter=function(a){w=z.y=Math.round(a);z.attr("translateY",w)};var V=z.css;return k(z,{css:function(a){if(a){var l={};a=H(a);p(z.textProps,function(b){void 0!==a[b]&&(l[b]=a[b],delete a[b])});r.css(l)}return V.call(z,a)},getBBox:function(){return{width:I.width+2*y,height:I.height+2*y,x:I.x-y,y:I.y-y}},shadow:function(a){a&&(L(),A&&A.shadow(a));return z},destroy:function(){N(z.element,
	"mouseenter");N(z.element,"mouseleave");r&&(r=r.destroy());A&&(A=A.destroy());B.prototype.destroy.call(z);z=m=L=R=Q=null}})}};a.Renderer=F})(K);(function(a){var B=a.attr,F=a.createElement,D=a.css,E=a.defined,g=a.each,e=a.extend,q=a.isFirefox,t=a.isMS,h=a.isWebKit,u=a.pInt,d=a.SVGRenderer,m=a.win,w=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var d=this.element;if(d=a&&"SPAN"===d.tagName&&a.width)delete a.width,this.textWidth=d,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace=
	"nowrap",a.overflow="hidden");this.styles=e(this.styles,a);D(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,f=this.translateX||0,c=this.translateY||0,b=this.x||0,m=this.y||0,r=this.textAlign||"left",n={left:0,center:.5,right:1}[r],v=this.styles;D(d,{marginLeft:f,marginTop:c});
	this.shadows&&g(this.shadows,function(a){D(a,{marginLeft:f+1,marginTop:c+1})});this.inverted&&g(d.childNodes,function(b){a.invertChild(b,d)});if("SPAN"===d.tagName){var I=this.rotation,e=u(this.textWidth),w=v&&v.whiteSpace,t=[I,r,d.innerHTML,this.textWidth,this.textAlign].join();t!==this.cTT&&(v=a.fontMetrics(d.style.fontSize).b,E(I)&&this.setSpanRotation(I,n,v),D(d,{width:"",whiteSpace:w||"nowrap"}),d.offsetWidth>e&&/[ \-]/.test(d.textContent||d.innerText)&&D(d,{width:e+"px",display:"block",whiteSpace:w||
	"normal"}),this.getSpanCorrection(d.offsetWidth,v,n,I,r));D(d,{left:b+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});h&&(v=d.offsetHeight);this.cTT=t}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,f){var c={},b=t?"-ms-transform":h?"-webkit-transform":q?"MozTransform":m.opera?"-o-transform":"";c[b]=c.transform="rotate("+a+"deg)";c[b+(q?"Origin":"-origin")]=c.transformOrigin=100*d+"% "+f+"px";D(this.element,c)},getSpanCorrection:function(a,d,f){this.xCorr=-a*f;this.yCorr=-d}});e(d.prototype,
	{html:function(a,d,f){var c=this.createElement("span"),b=c.element,m=c.renderer,k=m.isSVG,n=function(a,b){g(["opacity","visibility"],function(c){w(a,c+"Setter",function(a,c,n,f){a.call(this,c,n,f);b[n]=c})})};c.textSetter=function(a){a!==b.innerHTML&&delete this.bBox;b.innerHTML=this.textStr=a;c.htmlUpdateTransform()};k&&n(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.htmlUpdateTransform()};c.attr({text:a,x:Math.round(d),
	y:Math.round(f)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});b.style.whiteSpace="nowrap";c.css=c.htmlCss;k&&(c.add=function(a){var f,d=m.box.parentNode,v=[];if(this.parentGroup=a){if(f=a.div,!f){for(;a;)v.push(a),a=a.parentGroup;g(v.reverse(),function(a){var b,m=B(a.element,"class");m&&(m={className:m});f=a.div=a.div||F("div",m,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&
	a.styles.pointerEvents},f||d);b=f.style;e(a,{on:function(){c.on.apply({element:v[0].div},arguments);return a},translateXSetter:function(c,n){b.left=c+"px";a[n]=c;a.doTransform=!0},translateYSetter:function(c,n){b.top=c+"px";a[n]=c;a.doTransform=!0}});n(a,b)})}}else f=d;f.appendChild(b);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(K);(function(a){var B,F,D=a.createElement,E=a.css,g=a.defined,e=a.deg2rad,q=a.discardElement,t=a.doc,h=a.each,u=a.erase,d=a.extend;B=a.extendClass;
	var m=a.isArray,w=a.isNumber,p=a.isObject,k=a.merge;F=a.noop;var f=a.pick,c=a.pInt,b=a.SVGElement,C=a.SVGRenderer,r=a.win;a.svg||(F={docMode8:t&&8===t.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],n=["position: ","absolute",";"],f="div"===b;("shape"===b||f)&&n.push("left:0;top:0;width:1px;height:1px;");n.push("visibility: ",f?"hidden":"visible");c.push(' style\x3d"',n.join(""),'"/\x3e');b&&(c=f||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=D(c));this.renderer=
	a},add:function(a){var b=this.renderer,c=this.element,n=b.box,f=a&&a.inverted,n=a?a.element||a:n;a&&(this.parentGroup=a);f&&b.invertChild(c,n);n.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:b.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*e),c=Math.sin(a*e);E(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",
	b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,m){var n=d?Math.cos(d*e):1,v=d?Math.sin(d*e):0,k=f(this.elemHeight,this.element.offsetHeight),r;this.xCorr=0>n&&-a;this.yCorr=0>v&&-k;r=0>n*v;this.xCorr+=v*b*(r?1-c:c);this.yCorr-=n*b*(d?r?c:1-c:1);m&&"left"!==m&&(this.xCorr-=a*c*(0>n?-1:1),d&&(this.yCorr-=k*c*(0>v?-1:1)),E(this.element,{textAlign:m}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)w(a[b])?c[b]=
	Math.round(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,u(c,b),c.push(b),b.destroyClip=function(){u(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:b.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&q(a)},destroy:function(){this.destroyClip&&
	this.destroyClip();return b.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=r.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var n;a=a.split(/[ ,]/);n=a.length;if(9===n||11===n)a[n-4]=a[n-2]=c(a[n-2])-10*b;return a.join(" ")},shadow:function(a,b,d){var n=[],v,m=this.element,k=this.renderer,r,e=m.style,h,l=m.path,x,C,g,y;l&&"string"!==typeof l.value&&(l="x");C=l;if(a){g=f(a.width,3);y=(a.opacity||.15)/g;for(v=1;3>=v;v++)x=2*g+1-2*v,d&&
	(C=this.cutOffPath(l.value,x+.5)),h=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',x,'" filled\x3d"false" path\x3d"',C,'" coordsize\x3d"10 10" style\x3d"',m.style.cssText,'" /\x3e'],r=D(k.prepVML(h),null,{left:c(e.left)+f(a.offsetX,1),top:c(e.top)+f(a.offsetY,1)}),d&&(r.cutOff=x+1),h=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',y*v,'"/\x3e'],D(k.prepVML(h),null,null,r),b?b.element.appendChild(r):m.parentNode.insertBefore(r,m),n.push(r);this.shadows=n}return this},updateShadows:F,
	setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||D(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var n=this.shadows;a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(n)for(c=n.length;c--;)n[c].path=n[c].cutOff?this.cutOffPath(a,n[c].cutOff):a;this.setAttr(b,
	a)},fillSetter:function(a,b,c){var n=c.nodeName;"SPAN"===n?c.style.color=a:"IMG"!==n&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){D(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:F,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*e)+1)+"px";c.top=Math.round(Math.cos(a*e))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",
	this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;w(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&h(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?
	(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},F["stroke-opacitySetter"]=F["fill-opacitySetter"],a.VMLElement=F=B(b,F),F.prototype.ySetter=F.prototype.widthSetter=F.prototype.heightSetter=F.prototype.xSetter,F={Element:F,isIE8:-1<r.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var f,n;this.alignedObjects=[];f=this.createElement("div").css({position:"relative"});n=f.element;a.appendChild(f.element);this.isVML=!0;this.box=n;this.boxWrapper=
	f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!t.namespaces.hcv){t.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{t.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(L){t.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},
	clipRect:function(a,b,c,f){var n=this.createElement(),m=p(a);return d(n,{members:[],count:0,left:(m?a.x:a)+1,top:(m?a.y:b)+1,width:(m?a.width:c)-1,height:(m?a.height:f)-1,getCSS:function(a){var b=a.element,c=b.nodeName,f=a.inverted,l=this.top-("shape"===c?b.offsetTop:0),x=this.left,b=x+this.width,n=l+this.height,l={clip:"rect("+Math.round(f?x:l)+"px,"+Math.round(f?n:b)+"px,"+Math.round(f?b:n)+"px,"+Math.round(f?l:x)+"px)"};!f&&a.docMode8&&"DIV"===c&&d(l,{width:b+"px",height:n+"px"});return l},updateClipping:function(){h(n.members,
	function(a){a.element&&a.css(n.getCSS(a))})}})},color:function(b,c,f,d){var n=this,m,v=/^rgba/,k,r,e="none";b&&b.linearGradient?r="gradient":b&&b.radialGradient&&(r="pattern");if(r){var l,x,C=b.linearGradient||b.radialGradient,g,y,z,p,w,u="";b=b.stops;var I,t=[],J=function(){k=['\x3cfill colors\x3d"'+t.join(",")+'" opacity\x3d"',z,'" o:opacity2\x3d"',y,'" type\x3d"',r,'" ',u,'focus\x3d"100%" method\x3d"any" /\x3e'];D(n.prepVML(k),null,null,c)};g=b[0];I=b[b.length-1];0<g[0]&&b.unshift([0,g[1]]);1>
	I[0]&&b.push([1,I[1]]);h(b,function(b,c){v.test(b[1])?(m=a.color(b[1]),l=m.get("rgb"),x=m.get("a")):(l=b[1],x=1);t.push(100*b[0]+"% "+l);c?(z=x,p=l):(y=x,w=l)});if("fill"===f)if("gradient"===r)f=C.x1||C[0]||0,b=C.y1||C[1]||0,g=C.x2||C[2]||0,C=C.y2||C[3]||0,u='angle\x3d"'+(90-180*Math.atan((C-b)/(g-f))/Math.PI)+'"',J();else{var e=C.r,q=2*e,E=2*e,B=C.cx,F=C.cy,U=c.radialReference,T,e=function(){U&&(T=d.getBBox(),B+=(U[0]-T.x)/T.width-.5,F+=(U[1]-T.y)/T.height-.5,q*=U[2]/T.width,E*=U[2]/T.height);u=
	'src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+q+","+E+'" origin\x3d"0.5,0.5" position\x3d"'+B+","+F+'" color2\x3d"'+w+'" ';J()};d.added?e():d.onAdd=e;e=p}else e=l}else v.test(b)&&"IMG"!==c.tagName?(m=a.color(b),d[f+"-opacitySetter"](m.get("a"),f,c),e=m.get("rgb")):(e=c.getElementsByTagName(f),e.length&&(e[0].opacity=1,e[0].type="solid"),e=b);return e},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=
	-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:C.prototype.html,path:function(a){var b={coordsize:"10 10"};m(a)?b.d=a:p(a)&&d(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var f=this.symbol("circle");p(a)&&(c=a.r,b=a.y,a=a.x);f.isCircle=!0;f.r=c;return f.attr({x:a,y:b})},g:function(a){var b;
	a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,f,d){var n=this.createElement("img").attr({src:a});1<arguments.length&&n.attr({x:b,y:c,width:f,height:d});return n},createElement:function(a){return"rect"===a?this.symbol(a):C.prototype.createElement.call(this,a)},invertChild:function(a,b){var f=this;b=b.style;var d="IMG"===a.tagName&&a.style;E(a,{flip:"x",left:c(b.width)-(d?c(d.top):1),top:c(b.height)-(d?c(d.left):1),rotation:-90});
	h(a.childNodes,function(b){f.invertChild(b,a)})},symbols:{arc:function(a,b,c,f,d){var n=d.start,m=d.end,k=d.r||c||f;c=d.innerR;f=Math.cos(n);var r=Math.sin(n),v=Math.cos(m),l=Math.sin(m);if(0===m-n)return["x"];n=["wa",a-k,b-k,a+k,b+k,a+k*f,b+k*r,a+k*v,b+k*l];d.open&&!c&&n.push("e","M",a,b);n.push("at",a-c,b-c,a+c,b+c,a+c*v,b+c*l,a+c*f,b+c*r,"x","e");n.isArc=!0;return n},circle:function(a,b,c,f,d){d&&g(d.r)&&(c=f=2*d.r);d&&d.isCircle&&(a-=c/2,b-=f/2);return["wa",a,b,a+c,b+f,a+c,b+f/2,a+c,b+f/2,"e"]},
	rect:function(a,b,c,f,d){return C.prototype.symbols[g(d)&&d.r?"callout":"square"].call(0,a,b,c,f,d)}}},a.VMLRenderer=B=function(){this.init.apply(this,arguments)},B.prototype=k(C.prototype,F),a.Renderer=B);C.prototype.measureSpanWidth=function(a,b){var c=t.createElement("span");a=t.createTextNode(a);c.appendChild(a);E(c,b);this.box.appendChild(c);b=c.offsetWidth;q(c);return b}})(K);(function(a){var B=a.correctFloat,F=a.defined,D=a.destroyObjectProperties,E=a.isNumber,g=a.merge,e=a.pick,q=a.deg2rad;
	a.Tick=function(a,e,g,d){this.axis=a;this.pos=e;this.type=g||"";this.isNew=!0;g||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,h=a.options,u=a.chart,d=a.categories,m=a.names,w=this.pos,p=h.labels,k=a.tickPositions,f=w===k[0],c=w===k[k.length-1],m=d?e(d[w],m[w],w):w,d=this.label,k=k.info,b;a.isDatetimeAxis&&k&&(b=h.dateTimeLabelFormats[k.higherRanks[w]||k.unitName]);this.isFirst=f;this.isLast=c;h=a.labelFormatter.call({axis:a,chart:u,isFirst:f,isLast:c,dateTimeLabelFormat:b,
	value:a.isLog?B(a.lin2log(m)):m});F(d)?d&&d.attr({text:h}):(this.labelLength=(this.label=d=F(h)&&p.enabled?u.renderer.text(h,0,0,p.useHTML).css(g(p.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var h=this.axis,g=a.x,d=h.chart.chartWidth,m=h.chart.spacing,w=e(h.labelLeft,Math.min(h.pos,m[3])),m=e(h.labelRight,Math.max(h.pos+h.len,d-m[1])),p=this.label,
	k=this.rotation,f={left:0,center:.5,right:1}[h.labelAlign],c=p.getBBox().width,b=h.getSlotWidth(),C=b,r=1,n,v={};if(k)0>k&&g-f*c<w?n=Math.round(g/Math.cos(k*q)-w):0<k&&g+f*c>m&&(n=Math.round((d-g)/Math.cos(k*q)));else if(d=g+(1-f)*c,g-f*c<w?C=a.x+C*(1-f)-w:d>m&&(C=m-a.x+C*f,r=-1),C=Math.min(b,C),C<b&&"center"===h.labelAlign&&(a.x+=r*(b-C-f*(b-Math.min(c,C)))),c>C||h.autoRotation&&(p.styles||{}).width)n=C;n&&(v.width=n,(h.options.labels.style||{}).textOverflow||(v.textOverflow="ellipsis"),p.css(v))},
	getPosition:function(a,e,g,d){var m=this.axis,h=m.chart,p=d&&h.oldChartHeight||h.chartHeight;return{x:a?m.translate(e+g,null,null,d)+m.transB:m.left+m.offset+(m.opposite?(d&&h.oldChartWidth||h.chartWidth)-m.right-m.left:0),y:a?p-m.bottom+m.offset-(m.opposite?m.height:0):p-m.translate(e+g,null,null,d)-m.transB}},getLabelPosition:function(a,e,g,d,m,w,p,k){var f=this.axis,c=f.transA,b=f.reversed,C=f.staggerLines,r=f.tickRotCorr||{x:0,y:0},n=m.y;F(n)||(n=0===f.side?g.rotation?-8:-g.getBBox().height:2===
	f.side?r.y+8:Math.cos(g.rotation*q)*(r.y-g.getBBox(!1,0).height/2));a=a+m.x+r.x-(w&&d?w*c*(b?-1:1):0);e=e+n-(w&&!d?w*c*(b?1:-1):0);C&&(g=p/(k||1)%C,f.opposite&&(g=C-g-1),e+=f.labelOffset/C*g);return{x:a,y:Math.round(e)}},getMarkPath:function(a,e,g,d,m,w){return w.crispLine(["M",a,e,"L",a+(m?0:-g),e+(m?g:0)],d)},render:function(a,g,u){var d=this.axis,m=d.options,h=d.chart.renderer,p=d.horiz,k=this.type,f=this.label,c=this.pos,b=m.labels,C=this.gridLine,r=k?k+"Tick":"tick",n=d.tickSize(r),v=this.mark,
	I=!v,q=b.step,H={},t=!0,G=d.tickmarkOffset,A=this.getPosition(p,c,G,g),N=A.x,A=A.y,M=p&&N===d.pos+d.len||!p&&A===d.pos?-1:1,l=k?k+"Grid":"grid",x=m[l+"LineWidth"],P=m[l+"LineColor"],O=m[l+"LineDashStyle"],l=e(m[r+"Width"],!k&&d.isXAxis?1:0),r=m[r+"Color"];u=e(u,1);this.isActive=!0;C||(H.stroke=P,H["stroke-width"]=x,O&&(H.dashstyle=O),k||(H.zIndex=1),g&&(H.opacity=0),this.gridLine=C=h.path().attr(H).addClass("highcharts-"+(k?k+"-":"")+"grid-line").add(d.gridGroup));if(!g&&C&&(c=d.getPlotLinePath(c+
	G,C.strokeWidth()*M,g,!0)))C[this.isNew?"attr":"animate"]({d:c,opacity:u});n&&(d.opposite&&(n[0]=-n[0]),I&&(this.mark=v=h.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(d.axisGroup),v.attr({stroke:r,"stroke-width":l})),v[I?"attr":"animate"]({d:this.getMarkPath(N,A,n[0],v.strokeWidth()*M,p,h),opacity:u}));f&&E(N)&&(f.xy=A=this.getLabelPosition(N,A,f,p,b,G,a,q),this.isFirst&&!this.isLast&&!e(m.showFirstLabel,1)||this.isLast&&!this.isFirst&&!e(m.showLastLabel,1)?t=!1:!p||d.isRadial||b.step||
	b.rotation||g||0===u||this.handleOverflow(A),q&&a%q&&(t=!1),t&&E(A.y)?(A.opacity=u,f[this.isNew?"attr":"animate"](A)):f.attr("y",-9999),this.isNew=!1)},destroy:function(){D(this,this.axis)}}})(K);(function(a){var B=a.arrayMax,F=a.arrayMin,D=a.defined,E=a.destroyObjectProperties,g=a.each,e=a.erase,q=a.merge,t=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,e=a.axis,d=e.horiz,m=a.options,g=m.label,p=a.label,
	k=m.to,f=m.from,c=m.value,b=D(f)&&D(k),C=D(c),r=a.svgElem,n=!r,v=[],I,J=m.color,H=t(m.zIndex,0),L=m.events,v={"class":"highcharts-plot-"+(b?"band ":"line ")+(m.className||"")},G={},A=e.chart.renderer,N=b?"bands":"lines",M=e.log2lin;e.isLog&&(f=M(f),k=M(k),c=M(c));C?(v={stroke:J,"stroke-width":m.width},m.dashStyle&&(v.dashstyle=m.dashStyle)):b&&(J&&(v.fill=J),m.borderWidth&&(v.stroke=m.borderColor,v["stroke-width"]=m.borderWidth));G.zIndex=H;N+="-"+H;(J=e[N])||(e[N]=J=A.g("plot-"+N).attr(G).add());
	n&&(a.svgElem=r=A.path().attr(v).add(J));if(C)v=e.getPlotLinePath(c,r.strokeWidth());else if(b)v=e.getPlotBandPath(f,k,m);else return;if(n&&v&&v.length){if(r.attr({d:v}),L)for(I in m=function(b){r.on(b,function(c){L[b].apply(a,[c])})},L)m(I)}else r&&(v?(r.show(),r.animate({d:v})):(r.hide(),p&&(a.label=p=p.destroy())));g&&D(g.text)&&v&&v.length&&0<e.width&&0<e.height&&!v.flat?(g=q({align:d&&b&&"center",x:d?!b&&4:10,verticalAlign:!d&&b&&"middle",y:d?b?16:10:b?6:-4,rotation:d&&!b&&90},g),this.renderLabel(g,
	v,b,H)):p&&p.hide();return a},renderLabel:function(a,e,d,m){var g=this.label,p=this.axis.chart.renderer;g||(g={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},g.zIndex=m,this.label=g=p.text(a.text,0,0,a.useHTML).attr(g).add(),g.css(a.style));m=[e[1],e[4],d?e[6]:e[1]];e=[e[2],e[5],d?e[7]:e[2]];d=F(m);p=F(e);g.align(a,!1,{x:d,y:p,width:B(m)-d,height:B(e)-p});g.show()},destroy:function(){e(this.axis.plotLinesAndBands,this);delete this.axis;
	E(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,e){e=this.getPlotLinePath(e,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&e?(a.flat=a.toString()===e.toString(),a.push(e[4],e[5],e[1],e[2],"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,g){var d=(new a.PlotLineOrBand(this,e)).render(),m=this.userOptions;d&&(g&&(m[g]=m[g]||[],m[g].push(e)),
	this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var h=this.plotLinesAndBands,d=this.options,m=this.userOptions,w=h.length;w--;)h[w].id===a&&h[w].destroy();g([d.plotLines||[],m.plotLines||[],d.plotBands||[],m.plotBands||[]],function(d){for(w=d.length;w--;)d[w].id===a&&e(d,d[w])})}}})(K);(function(a){var B=a.addEvent,F=a.animObject,D=a.arrayMax,E=a.arrayMin,g=a.AxisPlotLineOrBandExtension,e=a.color,q=a.correctFloat,t=a.defaultOptions,h=a.defined,u=a.deg2rad,d=a.destroyObjectProperties,
	m=a.each,w=a.error,p=a.extend,k=a.fireEvent,f=a.format,c=a.getMagnitude,b=a.grep,C=a.inArray,r=a.isArray,n=a.isNumber,v=a.isString,I=a.merge,J=a.normalizeTickInterval,H=a.pick,L=a.PlotLineOrBand,G=a.removeEvent,A=a.splat,N=a.syncTimeout,M=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,
	style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,
	tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
	x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.isXAxis=c;this.coll=this.coll||(c?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var l=this.options,f=l.type;this.labelFormatter=l.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=l.reversed;this.visible=
	!1!==l.visible;this.zoomEnabled=!1!==l.zoomEnabled;this.hasNames="category"===f||!0===l.categories;this.categories=l.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===f;this.isDatetimeAxis="datetime"===f;this.isLinked=h(l.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=l.minRange||l.maxZoom;this.range=l.range;this.offset=l.offset||0;this.stacks={};this.oldStacks={};
	this.stacksTouched=0;this.min=this.max=null;this.crosshair=H(l.crosshair,A(a.options.tooltip.crosshairs)[c?0:1],!1);var x;b=this.options.events;-1===C(this,a.axes)&&(c?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&c&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(x in b)B(this,x,b[x]);this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=
	I(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],I(t[this.coll],a))},defaultLabelFormatter:function(){var b=this.axis,c=this.value,d=b.categories,n=this.dateTimeLabelFormat,m=t.lang,z=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,k=z&&z.length,r,e=b.options.labels.format,b=b.isLog?c:b.tickInterval;if(e)r=f(e,this);else if(d)r=c;else if(n)r=a.dateFormat(n,
	c);else if(k&&1E3<=b)for(;k--&&void 0===r;)d=Math.pow(m,k+1),b>=d&&0===10*c%d&&null!==z[k]&&0!==c&&(r=a.numberFormat(c/d,-1)+z[k]);void 0===r&&(r=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,-1,void 0,""));return r},getSeriesExtremes:function(){var a=this,c=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();m(a.series,function(l){if(l.visible||!c.options.chart.ignoreHiddenSeries){var f=l.options,d=f.threshold,x;a.hasVisibleSeries=
	!0;a.isLog&&0>=d&&(d=null);if(a.isXAxis)f=l.xData,f.length&&(l=E(f),n(l)||l instanceof Date||(f=b(f,function(a){return n(a)}),l=E(f)),a.dataMin=Math.min(H(a.dataMin,f[0]),l),a.dataMax=Math.max(H(a.dataMax,f[0]),D(f)));else if(l.getExtremes(),x=l.dataMax,l=l.dataMin,h(l)&&h(x)&&(a.dataMin=Math.min(H(a.dataMin,l),l),a.dataMax=Math.max(H(a.dataMax,x),x)),h(d)&&(a.threshold=d),!f.softThreshold||a.isLog)a.softThreshold=!1}})},translate:function(a,b,c,f,d,m){var l=this.linkedParent||this,x=1,k=0,r=f?l.oldTransA:
	l.transA;f=f?l.oldMin:l.min;var z=l.minPixelPadding;d=(l.isOrdinal||l.isBroken||l.isLog&&d)&&l.lin2val;r||(r=l.transA);c&&(x*=-1,k=l.len);l.reversed&&(x*=-1,k-=x*(l.sector||l.len));b?(a=(a*x+k-z)/r+f,d&&(a=l.lin2val(a))):(d&&(a=l.val2lin(a)),a=x*(a-f)*r+k+x*z+(n(m)?r*m:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,f,d){var l=this.chart,
	x=this.left,m=this.top,k,r,e=c&&l.oldChartHeight||l.chartHeight,v=c&&l.oldChartWidth||l.chartWidth,g;k=this.transB;var A=function(a,b,c){if(a<b||a>c)f?a=Math.min(Math.max(b,a),c):g=!0;return a};d=H(d,this.translate(a,null,null,c));a=c=Math.round(d+k);k=r=Math.round(e-d-k);n(d)?this.horiz?(k=m,r=e-this.bottom,a=c=A(a,x,x+this.width)):(a=x,c=v-this.right,k=r=A(k,m,m+this.height)):g=!0;return g&&!f?null:l.renderer.crispLine(["M",a,k,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var l,f=q(Math.floor(b/
	a)*a),d=q(Math.ceil(c/a)*a),x=[];if(b===c&&n(b))return[b];for(b=f;b<=d;){x.push(b);b=q(b+a);if(b===l)break;l=b}return x},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,f=[],d,n=this.pointRangePadding||0;d=this.min-n;var n=this.max+n,m=n-d;if(m&&m/c<this.len/3)if(this.isLog)for(n=b.length,d=1;d<n;d++)f=f.concat(this.getLogTickPositions(c,b[d-1],b[d],!0));else if(this.isDatetimeAxis&&"auto"===a.minorTickInterval)f=f.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),
	d,n,a.startOfWeek));else for(b=d+(b[0]-d)%c;b<=n&&b!==f[0];b+=c)f.push(b);0!==f.length&&this.trimTicks(f,a.startOnTick,a.endOnTick);return f},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,f,d=this.dataMax-this.dataMin>=this.minRange,n,k,r,e,v,g;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(h(a.min)||h(a.max)?this.minRange=null:(m(this.series,function(a){e=a.xData;for(k=v=a.xIncrement?1:e.length-1;0<k;k--)if(r=e[k]-e[k-1],void 0===n||r<n)n=r}),this.minRange=Math.min(5*
	n,this.dataMax-this.dataMin)));c-b<this.minRange&&(g=this.minRange,f=(g-c+b)/2,f=[b-f,H(a.min,b-f)],d&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=D(f),c=[b+g,H(a.max,b+g)],d&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=E(c),c-b<g&&(f[0]=c-g,f[1]=H(a.min,c-g),b=D(f)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:m(this.series,function(b){var c=b.closestPointRange,l=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&h(c)&&
	l&&(a=h(a)?Math.min(a,c):c)});return a},nameToX:function(a){var b=r(this.categories),c=b?this.categories:this.names,l=a.options.x,f;a.series.requireSorting=!1;h(l)||(l=!1===this.options.uniqueNames?a.series.autoIncrement():C(a.name,c));-1===l?b||(f=c.length):f=l;this.names[f]=a.name;return f},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=void 0,m(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();
	m(b.points,function(c,l){var f;c.options&&void 0===c.options.x&&(f=a.nameToX(c),f!==c.x&&(c.x=f,b.xData[l]=f))})}))},setAxisTranslation:function(a){var b=this,c=b.max-b.min,l=b.axisPointRange||0,f,d=0,n=0,k=b.linkedParent,r=!!b.categories,e=b.transA,g=b.isXAxis;if(g||r||l)f=b.getClosest(),k?(d=k.minPointOffset,n=k.pointRangePadding):m(b.series,function(a){var c=r?1:g?H(a.options.pointRange,f,0):b.axisPointRange||0;a=a.options.pointPlacement;l=Math.max(l,c);b.single||(d=Math.max(d,v(a)?0:c/2),n=Math.max(n,
	"on"===a?0:c))}),k=b.ordinalSlope&&f?b.ordinalSlope/f:1,b.minPointOffset=d*=k,b.pointRangePadding=n*=k,b.pointRange=Math.min(l,c),g&&(b.closestPointRange=f);a&&(b.oldTransA=e);b.translationSlope=b.transA=e=b.len/(c+n||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=e*d},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,l=b.chart,f=b.options,d=b.isLog,r=b.log2lin,e=b.isDatetimeAxis,g=b.isXAxis,v=b.isLinked,A=f.maxPadding,C=f.minPadding,p=f.tickInterval,
	G=f.tickPixelInterval,N=b.categories,u=b.threshold,I=b.softThreshold,M,t,L,E;e||N||v||this.getTickAmount();L=H(b.userMin,f.min);E=H(b.userMax,f.max);v?(b.linkedParent=l[b.coll][f.linkedTo],l=b.linkedParent.getExtremes(),b.min=H(l.min,l.dataMin),b.max=H(l.max,l.dataMax),f.type!==b.linkedParent.options.type&&w(11,1)):(!I&&h(u)&&(b.dataMin>=u?(M=u,C=0):b.dataMax<=u&&(t=u,A=0)),b.min=H(L,M,b.dataMin),b.max=H(E,t,b.dataMax));d&&(!a&&0>=Math.min(b.min,H(b.dataMin,b.min))&&w(10,1),b.min=q(r(b.min),15),b.max=
	q(r(b.max),15));b.range&&h(b.max)&&(b.userMin=b.min=L=Math.max(b.min,b.minFromRange()),b.userMax=E=b.max,b.range=null);k(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(N||b.axisPointRange||b.usePercentage||v)&&h(b.min)&&h(b.max)&&(r=b.max-b.min)&&(!h(L)&&C&&(b.min-=r*C),!h(E)&&A&&(b.max+=r*A));n(f.floor)?b.min=Math.max(b.min,f.floor):n(f.softMin)&&(b.min=Math.min(b.min,f.softMin));n(f.ceiling)?b.max=Math.min(b.max,f.ceiling):n(f.softMax)&&(b.max=Math.max(b.max,f.softMax));
	I&&h(b.dataMin)&&(u=u||0,!h(L)&&b.min<u&&b.dataMin>=u?b.min=u:!h(E)&&b.max>u&&b.dataMax<=u&&(b.max=u));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:v&&!p&&G===b.linkedParent.options.tickPixelInterval?p=b.linkedParent.tickInterval:H(p,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,N?1:(b.max-b.min)*G/Math.max(b.len,G));g&&!a&&m(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();
	b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!p&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=H(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!p&&b.tickInterval<a&&(b.tickInterval=a);e||d||p||(b.tickInterval=J(b.tickInterval,null,c(b.tickInterval),H(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=
	this.options,b,c=a.tickPositions,f=a.tickPositioner,d=a.startOnTick,n=a.endOnTick,m;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
	!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=b=f);this.isLinked||(this.trimTicks(b,d,n),this.min===this.max&&h(this.min)&&!this.tickAmount&&(m=!0,this.min-=.5,this.max+=.5),this.single=m,c||f||this.adjustTickAmount())},trimTicks:function(a,b,c){var l=a[0],f=a[a.length-1],d=this.minPointOffset||
	0;if(b)this.min=l;else for(;this.min-d>a[0];)a.shift();if(c)this.max=f;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&h(l)&&a.push((f+l)/2)},alignToOthers:function(){var a={},b,c=this.options;!1!==this.chart.options.chart.alignTicks&&!1!==c.alignTicks&&m(this.chart[this.coll],function(c){var l=c.options,l=[c.horiz?l.left:l.top,l.width,l.height,l.pane].join();c.series.length&&(a[l]?b=!0:a[l]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;
	!h(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,d=b&&b.length;if(d<c){for(;b.length<c;)b.push(q(b[b.length-1]+a));this.transA*=(d-1)/(c-1);this.max=b[b.length-1]}else d>c&&(this.tickInterval*=2,this.setTickPositions());if(h(f)){for(a=c=b.length;a--;)(3===
	f&&1===a%2||2>=f&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;m(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),
	this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,f,d){var l=this,n=l.chart;c=H(c,!0);m(l.series,function(a){delete a.kdTree});d=p(d,{min:a,max:b});k(l,"setExtremes",d,function(){l.userMin=a;l.userMax=b;l.eventArgs=d;c&&n.redraw(f)})},zoom:function(a,b){var c=this.dataMin,l=this.dataMax,f=this.options,d=Math.min(c,H(f.min,c)),
	f=Math.max(l,H(f.max,l));if(a!==this.min||b!==this.max)this.allowZoomOutside||(h(c)&&(a<d&&(a=d),a>f&&(a=f)),h(l)&&(b<d&&(b=d),b>f&&(b=f))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,f=this.horiz,d=H(b.width,a.plotWidth-c+(b.offsetRight||0)),n=H(b.height,a.plotHeight),m=H(b.top,a.plotTop),b=H(b.left,a.plotLeft+c),c=/%$/;c.test(n)&&(n=Math.round(parseFloat(n)/100*a.plotHeight));
	c.test(m)&&(m=Math.round(parseFloat(m)/100*a.plotHeight+a.plotTop));this.left=b;this.top=m;this.width=d;this.height=n;this.bottom=a.chartHeight-n-m;this.right=a.chartWidth-d-b;this.len=Math.max(f?d:n,0);this.pos=f?b:m},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?q(b(this.min)):this.min,max:a?q(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,f=b?c(this.min):this.min,
	b=b?c(this.max):this.max;null===a?a=f:f>a?a=f:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(H(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],f=H(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(f&&c)return"inside"===b[a+"Position"]&&(c=-c),[c,f]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[0]&&
	this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,f=c,d=this.len/(((this.categories?1:0)+this.max-this.min)/c),n,k=a.rotation,r=this.labelMetrics(),e,v=Number.MAX_VALUE,g,A=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return a*c};b?(g=!a.staggerLines&&!a.step&&(h(k)?[k]:d<H(a.autoRotationLimit,80)&&a.autoRotation))&&m(g,function(a){var b;if(a===k||a&&-90<=a&&90>=a)e=A(Math.abs(r.h/Math.sin(u*a))),b=e+Math.abs(a/360),b<v&&(v=b,n=a,f=e)}):a.step||(f=A(r.h));
	this.autoRotation=g;this.labelRotation=H(n,k);return f},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,f=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/f||!b&&(d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,f=this.ticks,d=this.options.labels,n=this.horiz,k=this.getSlotWidth(),r=Math.max(1,Math.round(k-2*
	(d.padding||5))),e={},g=this.labelMetrics(),A=d.style&&d.style.textOverflow,C,p=0,h,G;v(d.rotation)||(e.rotation=d.rotation||0);m(c,function(a){(a=f[a])&&a.labelLength>p&&(p=a.labelLength)});this.maxLabelLength=p;if(this.autoRotation)p>r&&p>g.h?e.rotation=this.labelRotation:this.labelRotation=0;else if(k&&(C={width:r+"px"},!A))for(C.textOverflow="clip",h=c.length;!n&&h--;)if(G=c[h],r=f[G].label)r.styles&&"ellipsis"===r.styles.textOverflow?r.css({textOverflow:"clip"}):f[G].labelLength>k&&r.css({width:k+
	"px"}),r.getBBox().height>this.len/c.length-(g.h-g.f)&&(r.specCss={textOverflow:"ellipsis"});e.rotation&&(C={width:(p>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},A||(C.textOverflow="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))e.align=this.labelAlign;m(c,function(a){var b=(a=f[a])&&a.label;b&&(b.attr(e),C&&b.css(I(C,b.specCss)),delete b.specCss,a.rotation=e.rotation)});this.tickRotCorr=b.rotCorr(g.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||
	h(this.min)&&h(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,d=a.tickPositions,n=a.ticks,k=a.horiz,r=a.side,e=b.inverted?[1,0,3,2][r]:r,g,v,A=0,C,p=0,G=f.title,w=f.labels,N=0,u=a.opposite,I=b.axisOffset,b=b.clipOffset,q=[-1,1,1,-1][r],t,J=f.className,L=a.axisParent,E=this.tickSize("tick");g=a.hasData();a.showAxis=v=g||H(f.showEmpty,!0);a.staggerLines=a.horiz&&w.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+
	this.coll.toLowerCase()+"-grid "+(J||"")).add(L),a.axisGroup=c.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(J||"")).add(L),a.labelGroup=c.g("axis-labels").attr({zIndex:w.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(J||"")).add(L));if(g||a.isLinked)m(d,function(b){n[b]?n[b].addLabel():n[b]=new M(a,b)}),a.renderUnsquish(),!1===w.reserveSpace||0!==r&&2!==r&&{1:"left",3:"right"}[r]!==a.labelAlign&&"center"!==a.labelAlign||m(d,function(a){N=
	Math.max(n[a].getLabelSize(),N)}),a.staggerLines&&(N*=a.staggerLines,a.labelOffset=N*(a.opposite?-1:1));else for(t in n)n[t].destroy(),delete n[t];G&&G.text&&!1!==G.enabled&&(a.axisTitle||((t=G.textAlign)||(t=(k?{low:"left",middle:"center",high:"right"}:{low:u?"right":"left",middle:"center",high:u?"left":"right"})[G.align]),a.axisTitle=c.text(G.text,0,0,G.useHTML).attr({zIndex:7,rotation:G.rotation||0,align:t}).addClass("highcharts-axis-title").css(G.style).add(a.axisGroup),a.axisTitle.isNew=!0),
	v&&(A=a.axisTitle.getBBox()[k?"height":"width"],C=G.offset,p=h(C)?0:H(G.margin,k?5:10)),a.axisTitle[v?"show":"hide"](!0));a.renderLine();a.offset=q*H(f.offset,I[r]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===r?-a.labelMetrics().h:2===r?a.tickRotCorr.y:0;p=Math.abs(N)+p;N&&(p=p-c+q*(k?H(w.y,a.tickRotCorr.y+8*q):w.x));a.axisTitleMargin=H(C,p);I[r]=Math.max(I[r],a.axisTitleMargin+A+q*a.offset,p,g&&d.length&&E?E[0]:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[e]=Math.max(b[e],f)},getLinePath:function(a){var b=
	this.chart,c=this.opposite,f=this.offset,d=this.horiz,l=this.left+(c?this.width:0)+f,f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",d?this.left:l,d?f:this.top,"L",d?b.chartWidth-this.right:l,d?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},
	getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,d=this.options.title,n=a?b:c,r=this.opposite,k=this.offset,m=d.x||0,e=d.y||0,g=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,this.axisTitle).f,f={low:n+(a?0:f),middle:n+f/2,high:n+(a?f:0)}[d.align],b=(a?c+this.height:b)+(a?1:-1)*(r?-1:1)*this.axisTitleMargin+(2===this.side?g:0);return{x:a?f+m:b+(r?this.width:0)+k+m,y:a?b+e-(r?this.height:0)+k:f+e}},render:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,
	d=a.isLog,r=a.lin2log,k=a.isLinked,e=a.tickPositions,g=a.axisTitle,v=a.ticks,A=a.minorTicks,C=a.alternateBands,p=f.stackLabels,G=f.alternateGridColor,h=a.tickmarkOffset,w=a.axisLine,u=b.hasRendered&&n(a.oldMin),I=a.showAxis,H=F(c.globalAnimation),q,t;a.labelEdge.length=0;a.overlap=!1;m([v,A,C],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||k)a.minorTickInterval&&!a.categories&&m(a.getMinorTickPositions(),function(b){A[b]||(A[b]=new M(a,b,"minor"));u&&A[b].isNew&&A[b].render(null,!0);
	A[b].render(null,!1,1)}),e.length&&(m(e,function(b,c){if(!k||b>=a.min&&b<=a.max)v[b]||(v[b]=new M(a,b)),u&&v[b].isNew&&v[b].render(c,!0,.1),v[b].render(c)}),h&&(0===a.min||a.single)&&(v[-1]||(v[-1]=new M(a,-1,null,!0)),v[-1].render(-1))),G&&m(e,function(c,f){t=void 0!==e[f+1]?e[f+1]+h:a.max-h;0===f%2&&c<a.max&&t<=a.max+(b.polar?-h:h)&&(C[c]||(C[c]=new L(a)),q=c+h,C[c].options={from:d?r(q):q,to:d?r(t):t,color:G},C[c].render(),C[c].isActive=!0)}),a._addedPlotLB||(m((f.plotLines||[]).concat(f.plotBands||
	[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);m([v,A,C],function(a){var c,f,d=[],l=H.duration;for(c in a)a[c].isActive||(a[c].render(c,!1,0),a[c].isActive=!1,d.push(c));N(function(){for(f=d.length;f--;)a[d[f]]&&!a[d[f]].isActive&&(a[d[f]].destroy(),delete a[d[f]])},a!==C&&b.hasRendered&&l?l:0)});w&&(w[w.isPlaced?"animate":"attr"]({d:this.getLinePath(w.strokeWidth())}),w.isPlaced=!0,w[I?"show":"hide"](!0));g&&I&&(g[g.isNew?"attr":"animate"](a.getTitlePosition()),g.isNew=!1);p&&p.enabled&&
	a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),m(this.plotLinesAndBands,function(a){a.render()}));m(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,f,l=b.plotLinesAndBands,n;a||G(b);for(f in c)d(c[f]),c[f]=null;m([b.ticks,b.minorTicks,b.alternateBands],function(a){d(a)});if(l)for(a=l.length;a--;)l[a].destroy();m("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
	function(a){b[a]&&(b[a]=b[a].destroy())});for(n in b)b.hasOwnProperty(n)&&-1===C(n,b.keepProps)&&delete b[n]},drawCrosshair:function(a,b){var c,f=this.crosshair,d=H(f.snap,!0),l,n=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(h(b)||!d)?(d?h(b)&&(l=this.isXAxis?b.plotX:this.len-b.plotY):l=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),h(l)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:H(b.stackY,b.y)),null,null,null,l)||null),h(c)?(b=this.categories&&!this.isRadial,
	n||(this.cross=n=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:H(f.zIndex,2)}).add(),n.attr({stroke:f.color||(b?e("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":H(f.width,1)}),f.dashStyle&&n.attr({dashstyle:f.dashStyle})),n.show().attr({d:c}),b&&!f.width&&n.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};
	p(a.Axis.prototype,g)})(K);(function(a){var B=a.Axis,F=a.getMagnitude,D=a.map,E=a.normalizeTickInterval,g=a.pick;B.prototype.getLogTickPositions=function(a,q,t,h){var e=this.options,d=this.len,m=this.lin2log,w=this.log2lin,p=[];h||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),p=this.getLinearTickPositions(a,q,t);else if(.08<=a)for(var d=Math.floor(q),k,f,c,b,C,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];d<t+1&&!C;d++)for(f=e.length,k=0;k<f&&!C;k++)c=w(m(d)*e[k]),c>q&&(!h||b<=t)&&
	void 0!==b&&p.push(b),b>t&&(C=!0),b=c;else q=m(q),t=m(t),a=e[h?"minorTickInterval":"tickInterval"],a=g("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(h?5:1)*(t-q)/((h?d/this.tickPositions.length:d)||1)),a=E(a,null,F(a)),p=D(this.getLinearTickPositions(a,q,t),w),h||(this._minorAutoInterval=a/5);h||(this.tickInterval=a);return p};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a){var B=a.dateFormat,F=
	a.each,D=a.extend,E=a.format,g=a.isNumber,e=a.map,q=a.merge,t=a.pick,h=a.splat,u=a.syncTimeout,d=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},cleanSplit:function(a){F(this.chart.series,function(d){var m=d&&d.tt;m&&(!m.isActive||a?d.tt=m.destroy():m.isActive=!1)})},getLabel:function(){var a=
	this.chart.renderer,d=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,q(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());
	this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,d,e,k){var f=this,c=f.now,b=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(a-c.x)||1<Math.abs(d-c.y)),m=f.followPointer||1<f.len;D(c,{x:b?(2*c.x+a)/3:a,y:b?(c.y+d)/2:d,anchorX:m?void 0:b?(2*c.anchorX+e)/3:e,anchorY:m?void 0:b?(c.anchorY+k)/2:k});f.getLabel().attr(c);b&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&
	f.move(a,d,e,k)},32))},hide:function(a){var d=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){d.getLabel()[a?"fadeOut":"hide"]();d.isHidden=!0},a))},getAnchor:function(a,d){var m,k=this.chart,f=k.inverted,c=k.plotTop,b=k.plotLeft,g=0,r=0,n,v;a=h(a);m=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=k.pointer.normalize(d)),m=[d.chartX-k.plotLeft,d.chartY-c]);m||(F(a,function(a){n=a.series.yAxis;v=a.series.xAxis;g+=a.plotX+
	(!f&&v?v.left-b:0);r+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&n?n.top-c:0)}),g/=a.length,r/=a.length,m=[f?k.plotWidth-r:g,this.shared&&!f&&1<a.length&&d?d.chartY-c:f?k.plotHeight-g:r]);return e(m,Math.round)},getPosition:function(a,d,e){var k=this.chart,f=this.distance,c={},b=e.h||0,m,r=["y",k.chartHeight,d,e.plotY+k.plotTop,k.plotTop,k.plotTop+k.plotHeight],n=["x",k.chartWidth,a,e.plotX+k.plotLeft,k.plotLeft,k.plotLeft+k.plotWidth],g=!this.followPointer&&t(e.ttBelow,!k.inverted===!!e.negative),
	p=function(a,d,n,r,l,k){var m=n<r-f,e=r+f+n<d,v=r-f-n;r+=f;if(g&&e)c[a]=r;else if(!g&&m)c[a]=v;else if(m)c[a]=Math.min(k-n,0>v-b?v:v-b);else if(e)c[a]=Math.max(l,r+b+n>d?r:r+b);else return!1},h=function(a,b,d,n){var l;n<f||n>b-f?l=!1:c[a]=n<d/2?1:n>b-d/2?b-d-2:n-d/2;return l},w=function(a){var b=r;r=n;n=b;m=a},u=function(){!1!==p.apply(0,r)?!1!==h.apply(0,n)||m||(w(!0),u()):m?c.x=c.y=0:(w(!0),u())};(k.inverted||1<this.len)&&w();u();return c},defaultFormatter:function(a){var d=this.points||h(this),
	m;m=[a.tooltipFooterHeaderFormatter(d[0])];m=m.concat(a.bodyFormatter(d));m.push(a.tooltipFooterHeaderFormatter(d[0],!0));return m},refresh:function(a,d){var m=this.chart,k,f=this.options,c,b,e={},r=[];k=f.formatter||this.defaultFormatter;var e=m.hoverPoints,n=this.shared;clearTimeout(this.hideTimer);this.followPointer=h(a)[0].series.tooltipOptions.followPointer;b=this.getAnchor(a,d);d=b[0];c=b[1];!n||a.series&&a.series.noSharedTooltip?e=a.getLabelConfig():(m.hoverPoints=a,e&&F(e,function(a){a.setState()}),
	F(a,function(a){a.setState("hover");r.push(a.getLabelConfig())}),e={x:a[0].category,y:a[0].y},e.points=r,this.len=r.length,a=a[0]);e=k.call(e,this);n=a.series;this.distance=t(n.tooltipOptions.distance,16);!1===e?this.hide():(k=this.getLabel(),this.isHidden&&k.attr({opacity:1}).show(),this.split?this.renderSplit(e,m.hoverPoints):(k.attr({text:e&&e.join?e.join(""):e}),k.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(a.colorIndex,n.colorIndex)),k.attr({stroke:f.borderColor||a.color||
	n.color||"#666666"}),this.updatePosition({plotX:d,plotY:c,negative:a.negative,ttBelow:a.ttBelow,h:b[2]||0})),this.isHidden=!1)},renderSplit:function(d,e){var m=this,k=[],f=this.chart,c=f.renderer,b=!0,g=this.options,r,n=this.getLabel();F(d.slice(0,d.length-1),function(a,d){d=e[d-1]||{isHeader:!0,plotX:e[0].plotX};var v=d.series||m,C=v.tt,h=d.series||{},G="highcharts-color-"+t(d.colorIndex,h.colorIndex,"none");C||(v.tt=C=c.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+G).attr({padding:g.padding,
	r:g.borderRadius,fill:g.backgroundColor,stroke:d.color||h.color||"#333333","stroke-width":g.borderWidth}).add(n));C.isActive=!0;C.attr({text:a});C.css(g.style);a=C.getBBox();h=a.width+C.strokeWidth();d.isHeader?(r=a.height,h=Math.max(0,Math.min(d.plotX+f.plotLeft-h/2,f.chartWidth-h))):h=d.plotX+f.plotLeft-t(g.distance,16)-h;0>h&&(b=!1);a=(d.series&&d.series.yAxis&&d.series.yAxis.pos)+(d.plotY||0);a-=f.plotTop;k.push({target:d.isHeader?f.plotHeight+r:a,rank:d.isHeader?1:0,size:v.tt.getBBox().height+
	1,point:d,x:h,tt:C})});this.cleanSplit();a.distribute(k,f.plotHeight+r);F(k,function(a){var c=a.point;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:b||c.isHeader?a.x:c.plotX+f.plotLeft+t(g.distance,16),y:a.pos+f.plotTop,anchorX:c.plotX+f.plotLeft,anchorY:c.isHeader?a.pos+f.plotTop-15:c.plotY+f.plotTop})})},updatePosition:function(a){var d=this.chart,e=this.getLabel(),e=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),
	a.plotX+d.plotLeft,a.plotY+d.plotTop)},getXDateFormat:function(a,e,g){var k;e=e.dateTimeLabelFormats;var f=g&&g.closestPointRange,c,b={millisecond:15,second:12,minute:9,hour:6,day:3},m,r="millisecond";if(f){m=B("%m-%d %H:%M:%S.%L",a.x);for(c in d){if(f===d.week&&+B("%w",a.x)===g.options.startOfWeek&&"00:00:00.000"===m.substr(6)){c="week";break}if(d[c]>f){c=r;break}if(b[c]&&m.substr(b[c])!=="01-01 00:00:00.000".substr(b[c]))break;"week"!==c&&(r=c)}c&&(k=e[c])}else k=e.day;return k||e.year},tooltipFooterHeaderFormatter:function(a,
	d){var e=d?"footer":"header";d=a.series;var k=d.tooltipOptions,f=k.xDateFormat,c=d.xAxis,b=c&&"datetime"===c.options.type&&g(a.key),e=k[e+"Format"];b&&!f&&(f=this.getXDateFormat(a,k,c));b&&f&&(e=e.replace("{point.key}","{point.key:"+f+"}"));return E(e,{point:a,series:d})},bodyFormatter:function(a){return e(a,function(a){var d=a.series.tooltipOptions;return(d.pointFormatter||a.point.tooltipFormatter).call(a.point,d.pointFormat)})}}})(K);(function(a){var B=a.addEvent,F=a.attr,D=a.charts,E=a.color,g=
	a.css,e=a.defined,q=a.doc,t=a.each,h=a.extend,u=a.fireEvent,d=a.offset,m=a.pick,w=a.removeEvent,p=a.splat,k=a.Tooltip,f=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};k&&b.tooltip.enabled&&(a.tooltip=new k(a,b.tooltip),this.followTouchMove=m(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=
	b.options.chart,f=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(f=m(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=f&&!b||a&&b;this.hasZoom=a||f},normalize:function(a,b){var c,r;a=a||f.event;a.target||(a.target=a.srcElement);r=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=d(this.chart.container));void 0===r.pageX?(c=Math.max(a.x,a.clientX-b.left),b=a.y):(c=r.pageX-b.left,b=r.pageY-b.top);return h(a,
	{chartX:Math.round(c),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(c){var b=this.chart,f=b.series,d=b.tooltip,n=d?d.shared:!1,k=!0,e=b.hoverPoint,g=b.hoverSeries,h,p,G,A=[],u;if(!n&&!g)for(h=0;h<f.length;h++)if(f[h].directTouch||!f[h].options.stickyTracking)f=[];g&&(n?g.noSharedTooltip:g.directTouch)&&e?A=[e]:(n||
	!g||g.options.stickyTracking||(f=[g]),t(f,function(a){p=a.noSharedTooltip&&n;G=!n&&a.directTouch;a.visible&&!p&&!G&&m(a.options.enableMouseTracking,!0)&&(u=a.searchPoint(c,!p&&1===a.kdDimensions))&&u.series&&A.push(u)}),A.sort(function(a,b){var c=a.distX-b.distX,f=a.dist-b.dist,d=b.series.group.zIndex-a.series.group.zIndex;return 0!==c&&n?c:0!==f?f:0!==d?d:a.series.index>b.series.index?-1:1}));if(n)for(h=A.length;h--;)(A[h].x!==A[0].x||A[h].series.noSharedTooltip)&&A.splice(h,1);if(A[0]&&(A[0]!==
	this.prevKDPoint||d&&d.isHidden)){if(n&&!A[0].series.noSharedTooltip){for(h=0;h<A.length;h++)A[h].onMouseOver(c,A[h]!==(g&&g.directTouch&&e||A[0]));A.length&&d&&d.refresh(A.sort(function(a,b){return a.series.index-b.series.index}),c)}else if(d&&d.refresh(A[0],c),!g||!g.directTouch)A[0].onMouseOver(c);this.prevKDPoint=A[0];k=!1}k&&(f=g&&g.tooltipOptions.followPointer,d&&f&&!d.isHidden&&(f=d.getAnchor([{}],c),d.updatePosition({plotX:f[0],plotY:f[1]})));this.unDocMouseMove||(this.unDocMouseMove=B(q,
	"mousemove",function(b){if(D[a.hoverChartIndex])D[a.hoverChartIndex].pointer.onDocumentMouseMove(b)}));t(n?A:[m(e,A[0])],function(a){t(b.axes,function(b){(!a||a.series&&a.series[b.coll]===b)&&b.drawCrosshair(c,a)})})},reset:function(a,b){var c=this.chart,f=c.hoverSeries,d=c.hoverPoint,k=c.hoverPoints,e=c.tooltip,g=e&&e.shared?k:d;a&&g&&t(p(g),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)e&&g&&(e.refresh(g),d&&(d.setState(d.state,!0),t(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,
	d)})));else{if(d)d.onMouseOut();k&&t(k,function(a){a.setState()});if(f)f.onMouseOut();e&&e.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(c.axes,function(a){a.hideCrosshair()});this.hoverX=this.prevKDPoint=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,f;t(c.series,function(d){f=a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(f),d.markerGroup&&(d.markerGroup.attr(f),d.markerGroup.clip(b?c.clipRect:null)),d.dataLabelsGroup&&
	d.dataLabelsGroup.attr(f))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,f=a.chartX,d=a.chartY,e=this.zoomHor,k=this.zoomVert,g=b.plotLeft,m=b.plotTop,h=b.plotWidth,G=b.plotHeight,A,p=this.selectionMarker,u=this.mouseDownX,l=this.mouseDownY,x=c.panKey&&a[c.panKey+"Key"];p&&p.touch||(f<g?f=g:f>g+h&&(f=g+h),d<
	m?d=m:d>m+G&&(d=m+G),this.hasDragged=Math.sqrt(Math.pow(u-f,2)+Math.pow(l-d,2)),10<this.hasDragged&&(A=b.isInsidePlot(u-g,l-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&A&&!x&&!p&&(this.selectionMarker=p=b.renderer.rect(g,m,e?1:h,k?1:G,0).attr({fill:c.selectionMarkerFill||E("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),p&&e&&(f-=u,p.attr({width:Math.abs(f),x:(0<f?0:f)+u})),p&&k&&(f=d-l,p.attr({height:Math.abs(f),y:(0<f?0:f)+l})),A&&!p&&c.panning&&b.pan(a,
	c.panning)))},drop:function(a){var b=this,c=this.chart,f=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,m=k.attr?k.attr("x"):k.x,p=k.attr?k.attr("y"):k.y,w=k.attr?k.attr("width"):k.width,q=k.attr?k.attr("height"):k.height,G;if(this.hasDragged||f)t(c.axes,function(c){if(c.zoomEnabled&&e(c.min)&&(f||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var n=c.horiz,k="touchend"===a.type?c.minPixelPadding:0,l=c.toValue((n?m:p)+k),n=c.toValue((n?m+w:p+
	q)-k);d[c.coll].push({axis:c,min:Math.min(l,n),max:Math.max(l,n)});G=!0}}),G&&u(c,"selection",d,function(a){c.zoom(h(a,f?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();f&&this.scaleGroups()}c&&(g(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(c){D[a.hoverChartIndex]&&
	D[a.hoverChartIndex].pointer.drop(c)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(c){var b=D[a.hoverChartIndex];b&&(c.relatedTarget||c.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(c){var b=this.chart;e(a.hoverChartIndex)&&D[a.hoverChartIndex]&&D[a.hoverChartIndex].mouseIsDown||
	(a.hoverChartIndex=b.index);c=this.normalize(c);c.returnValue=!1;"mousedown"===b.mouseIsDown&&this.drag(c);!this.inClass(c.target,"highcharts-tracker")&&!b.isInsidePlot(c.chartX-b.plotLeft,c.chartY-b.plotTop)||b.openMenu||this.runPointActions(c)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||
	b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,f=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",h(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(h(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-d)&&u(b,"click",a)))},setDOMEvents:function(){var c=
	this,b=c.chart.container;b.onmousedown=function(a){c.onContainerMouseDown(a)};b.onmousemove=function(a){c.onContainerMouseMove(a)};b.onclick=function(a){c.onContainerClick(a)};B(b,"mouseleave",c.onContainerMouseLeave);1===a.chartCount&&B(q,"mouseup",c.onDocumentMouseUp);a.hasTouch&&(b.ontouchstart=function(a){c.onContainerTouchStart(a)},b.ontouchmove=function(a){c.onContainerTouchMove(a)},1===a.chartCount&&B(q,"touchend",c.onDocumentTouchEnd))},destroy:function(){var c;w(this.chart.container,"mouseleave",
	this.onContainerMouseLeave);a.chartCount||(w(q,"mouseup",this.onDocumentMouseUp),w(q,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(c in this)this[c]=null}}})(K);(function(a){var B=a.charts,F=a.each,D=a.extend,E=a.map,g=a.noop,e=a.pick;D(a.Pointer.prototype,{pinchTranslate:function(a,e,g,u,d,m){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,g,u,d,m);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,g,u,d,m)},pinchTranslateDirection:function(a,e,g,u,d,m,w,p){var k=
	this.chart,f=a?"x":"y",c=a?"X":"Y",b="chart"+c,h=a?"width":"height",r=k["plot"+(a?"Left":"Top")],n,v,q=p||1,t=k.inverted,H=k.bounds[a?"h":"v"],L=1===e.length,G=e[0][b],A=g[0][b],N=!L&&e[1][b],M=!L&&g[1][b],l;g=function(){!L&&20<Math.abs(G-N)&&(q=p||Math.abs(A-M)/Math.abs(G-N));v=(r-A)/q+G;n=k["plot"+(a?"Width":"Height")]/q};g();e=v;e<H.min?(e=H.min,l=!0):e+n>H.max&&(e=H.max-n,l=!0);l?(A-=.8*(A-w[f][0]),L||(M-=.8*(M-w[f][1])),g()):w[f]=[A,M];t||(m[f]=v-r,m[h]=n);m=t?1/q:q;d[h]=n;d[f]=e;u[t?a?"scaleY":
	"scaleX":"scale"+c]=q;u["translate"+c]=m*r+(A-m*G)},pinch:function(a){var q=this,h=q.chart,u=q.pinchDown,d=a.touches,m=d.length,w=q.lastValidTouch,p=q.hasZoom,k=q.selectionMarker,f={},c=1===m&&(q.inClass(a.target,"highcharts-tracker")&&h.runTrackerClick||q.runChartClick),b={};1<m&&(q.initiated=!0);p&&q.initiated&&!c&&a.preventDefault();E(d,function(a){return q.normalize(a)});"touchstart"===a.type?(F(d,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),w.x=[u[0].chartX,u[1]&&u[1].chartX],w.y=[u[0].chartY,
	u[1]&&u[1].chartY],F(h.axes,function(a){if(a.zoomEnabled){var b=h.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,f=a.toPixels(e(a.options.min,a.dataMin)),d=a.toPixels(e(a.options.max,a.dataMax)),k=Math.max(f,d);b.min=Math.min(a.pos,Math.min(f,d)-c);b.max=Math.max(a.pos+a.len,k+c)}}),q.res=!0):q.followTouchMove&&1===m?this.runPointActions(q.normalize(a)):u.length&&(k||(q.selectionMarker=k=D({destroy:g,touch:!0},h.plotBox)),q.pinchTranslate(u,d,f,k,b,w),q.hasPinched=p,q.scaleGroups(f,b),q.res&&(q.res=
	!1,this.reset(!1,0)))},touch:function(g,t){var h=this.chart,u,d;if(h.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=h.index;1===g.touches.length?(g=this.normalize(g),(d=h.isInsidePlot(g.chartX-h.plotLeft,g.chartY-h.plotTop))&&!h.openMenu?(t&&this.runPointActions(g),"touchmove"===g.type&&(t=this.pinchDown,u=t[0]?4<=Math.sqrt(Math.pow(t[0].chartX-g.chartX,2)+Math.pow(t[0].chartY-g.chartY,2)):!1),e(u,!0)&&this.pinch(g)):t&&this.reset()):2===g.touches.length&&
	this.pinch(g)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(e)}})})(K);(function(a){var B=a.addEvent,F=a.charts,D=a.css,E=a.doc,g=a.extend,e=a.noop,q=a.Pointer,t=a.removeEvent,h=a.win,u=a.wrap;if(h.PointerEvent||h.MSPointerEvent){var d={},m=!!h.PointerEvent,w=function(){var a,f=[];f.item=function(a){return this[a]};for(a in d)d.hasOwnProperty(a)&&
	f.push({pageX:d[a].pageX,pageY:d[a].pageY,target:d[a].target});return f},p=function(d,f,c,b){"touch"!==d.pointerType&&d.pointerType!==d.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(b(d),b=F[a.hoverChartIndex].pointer,b[f]({type:c,target:d.currentTarget,preventDefault:e,touches:w()}))};g(q.prototype,{onContainerPointerDown:function(a){p(a,"onContainerTouchStart","touchstart",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){p(a,"onContainerTouchMove",
	"touchmove",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY};d[a.pointerId].target||(d[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){p(a,"onDocumentTouchEnd","touchend",function(a){delete d[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,m?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,m?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(E,m?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(q.prototype,
	"init",function(a,f,c){a.call(this,f,c);this.hasZoom&&D(f.container,{"-ms-touch-action":"none","touch-action":"none"})});u(q.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});u(q.prototype,"destroy",function(a){this.batchMSEvents(t);a.call(this)})}})(K);(function(a){var B,F=a.addEvent,D=a.css,E=a.discardElement,g=a.defined,e=a.each,q=a.extend,t=a.isFirefox,h=a.marginNames,u=a.merge,d=a.pick,m=a.setAnimation,w=a.stableSort,p=a.win,k=a.wrap;
	B=a.Legend=function(a,c){this.init(a,c)};B.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),F(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=d(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=u(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=d(a.symbolWidth,
	16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(u(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;d(c,!0)&&b.redraw()},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,d=a.legendItem,f=a.legendLine,n=a.legendSymbol,e=this.itemHiddenStyle.color,b=c?b.itemStyle.color:e,g=c?a.color||e:e,k=a.options&&a.options.marker,m={fill:g},h;d&&d.css({fill:b,color:b});f&&f.attr({stroke:g});if(n){if(k&&
	n.isMarker&&(m=a.pointAttribs(),!c))for(h in m)m[h]=e;n.attr(m)}},positionItem:function(a){var c=this.options,b=c.symbolPadding,c=!c.rtl,d=a._legendItemPos,f=d[0],d=d[1],n=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?f:this.legendWidth-f-2*b-4,d);n&&(n.x=f,n.y=d)},destroyItem:function(a){var c=a.checkbox;e(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});c&&E(a.checkbox)},destroy:function(){var a=this.group,c=this.box;c&&(this.box=c.destroy());
	e(this.getAllItems(),function(a){e(["legendItem","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())})});a&&(this.group=a.destroy());this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,b,d=this.clipHeight||this.legendHeight,f=this.titleHeight;c&&(b=c.translateY,e(this.allItems,function(n){var e=n.checkbox,g;e&&(g=b+f+e.y+(a||0)+3,D(e,{left:c.translateX+n.checkboxOffset+e.x-20+"px",top:g+"px",display:g>b-6&&g<b+d-6?"":"none"}))}))},renderTitle:function(){var a=
	this.padding,c=this.options.title,b=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(d){var c=this.options;d.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,d):c.labelFormatter.call(d)})},renderItem:function(a){var c=this.chart,b=c.renderer,
	f=this.options,e="horizontal"===f.layout,n=this.symbolWidth,g=f.symbolPadding,k=this.itemStyle,m=this.itemHiddenStyle,h=this.padding,p=e?d(f.itemDistance,20):0,G=!f.rtl,A=f.width,w=f.itemMarginBottom||0,q=this.itemMarginTop,l=this.initialItemX,x=a.legendItem,t=!a.series,O=!t&&a.series.drawLegendSymbol?a.series:a,y=O.options,y=this.createCheckboxForItem&&y&&y.showCheckbox,z=f.useHTML;x||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+O.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?
	" "+a.options.className:"")+(t?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=x=b.text("",G?n+g:-g,this.baseline||0,z).css(u(a.visible?k:m)).attr({align:G?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(k=k.fontSize,this.fontMetrics=b.fontMetrics(k,x),this.baseline=this.fontMetrics.f+3+q,x.attr("y",this.baseline)),O.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,x,z),y&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);
	this.setText(a);b=x.getBBox();n=a.checkboxOffset=f.itemWidth||a.legendItemWidth||n+g+b.width+p+(y?20:0);this.itemHeight=g=Math.round(a.legendItemHeight||b.height);e&&this.itemX-l+n>(A||c.chartWidth-2*h-l-f.x)&&(this.itemX=l,this.itemY+=q+this.lastLineHeight+w,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,n);this.lastItemY=q+this.itemY+w;this.lastLineHeight=Math.max(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=n:(this.itemY+=q+g+w,this.lastLineHeight=
	g);this.offsetWidth=A||Math.max((e?this.itemX-l-p:n)+h,this.offsetWidth)},getAllItems:function(){var a=[];e(this.chart.series,function(c){var b=c&&c.options;c&&d(b.showInLegend,g(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});return a},adjustMargins:function(a,c){var b=this.chart,f=this.options,k=f.align.charAt(0)+f.verticalAlign.charAt(0)+f.layout.charAt(0);f.floating||e([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(n,e){n.test(k)&&
	!g(a[e])&&(b[h[e]]=Math.max(b[h[e]],b.legend[(e+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][e]*f[e%2?"x":"y"]+d(f.margin,12)+c[e]))})},render:function(){var a=this,c=a.chart,b=c.renderer,d=a.group,g,n,k,m,h=a.box,p=a.options,u=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;d||(a.group=d=b.g("legend").attr({zIndex:7}).add(),a.contentGroup=b.g().attr({zIndex:1}).add(d),a.scrollGroup=b.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();w(g,function(a,
	b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});p.reversed&&g.reverse();a.allItems=g;a.display=n=!!g.length;a.lastLineHeight=0;e(g,function(b){a.renderItem(b)});k=(p.width||a.offsetWidth)+u;m=a.lastItemY+a.lastLineHeight+a.titleHeight;m=a.handleOverflow(m);m+=u;h||(a.box=h=b.rect().addClass("highcharts-legend-box").attr({r:p.borderRadius}).add(d),h.isNew=!0);h.attr({stroke:p.borderColor,"stroke-width":p.borderWidth||0,fill:p.backgroundColor||"none"}).shadow(p.shadow);
	0<k&&0<m&&(h[h.isNew?"attr":"animate"](h.crisp({x:0,y:0,width:k,height:m},h.strokeWidth())),h.isNew=!1);h[n?"show":"hide"]();a.legendWidth=k;a.legendHeight=m;e(g,function(b){a.positionItem(b)});n&&d.align(q({width:k,height:m},p),!0,"spacingBox");c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,b=this.chart,f=b.renderer,g=this.options,n=g.y,b=b.spacingBox.height+("top"===g.verticalAlign?-n:n)-this.padding,n=g.maxHeight,k,m=this.clipRect,h=g.navigation,p=d(h.animation,
	!0),u=h.arrowSize||12,G=this.nav,A=this.pages,w=this.padding,q,l=this.allItems,x=function(a){a?m.attr({height:a}):m&&(c.clipRect=m.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+w+"px,9999px,"+(w+a)+"px,0)":"auto")};"horizontal"!==g.layout||"middle"===g.verticalAlign||g.floating||(b/=2);n&&(b=Math.min(b,n));A.length=0;a>b&&!1!==h.enabled?(this.clipHeight=k=Math.max(b-20-this.titleHeight-w,0),this.currentPage=d(this.currentPage,1),this.fullHeight=a,e(l,
	function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=A.length;if(!d||c-A[d-1]>k&&(q||c)!==A[d-1])A.push(q||c),d++;b===l.length-1&&c+a-A[d-1]>k&&A.push(c);c!==q&&(q=c)}),m||(m=c.clipRect=f.clipRect(0,w,9999,0),c.contentGroup.clip(m)),x(k),G||(this.nav=G=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,u,u).on("click",function(){c.scroll(-1,p)}).add(G),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation").css(h.style).add(G),
	this.down=f.symbol("triangle-down",0,0,u,u).on("click",function(){c.scroll(1,p)}).add(G)),c.scroll(0),a=b):G&&(x(),G.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,d=b.length;a=this.currentPage+a;var f=this.clipHeight,e=this.options.navigation,g=this.pager,k=this.padding;a>d&&(a=d);0<a&&(void 0!==c&&m(c,this.chart),this.nav.attr({translateX:k,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===
	a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?e.inactiveColor:e.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?e.inactiveColor:e.activeColor}).css({cursor:a===d?"default":"pointer"}),c=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=
	a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=a.options,f=b.symbolHeight||a.fontMetrics.f,b=b.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-f)/2:0,a.baseline-f+1,b?f:a.symbolWidth,f,d(a.options.symbolRadius,f/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,b=c.marker,d=a.symbolWidth,f=this.chart.renderer,e=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);
	var g;g={"stroke-width":c.lineWidth||0};c.dashStyle&&(g.dashstyle=c.dashStyle);this.legendLine=f.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(g).add(e);b&&!1!==b.enabled&&(c=0===this.symbol.indexOf("url")?0:b.radius,this.legendSymbol=b=f.symbol(this.symbol,d/2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(e),b.isMarker=!0)}};(/Trident\/7\.0/.test(p.navigator.userAgent)||t)&&k(B.prototype,"positionItem",function(a,c){var b=this,d=function(){c._legendItemPos&&a.call(b,c)};d();setTimeout(d)})})(K);
	(function(a){var B=a.addEvent,F=a.animate,D=a.animObject,E=a.attr,g=a.doc,e=a.Axis,q=a.createElement,t=a.defaultOptions,h=a.discardElement,u=a.charts,d=a.css,m=a.defined,w=a.each,p=a.error,k=a.extend,f=a.fireEvent,c=a.getStyle,b=a.grep,C=a.isNumber,r=a.isObject,n=a.isString,v=a.Legend,I=a.marginNames,J=a.merge,H=a.Pointer,L=a.pick,G=a.pInt,A=a.removeEvent,N=a.seriesTypes,M=a.splat,l=a.svg,x=a.syncTimeout,P=a.win,O=a.Renderer,y=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,
	b,c){return new y(a,b,c)};y.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(n(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,f=b.series;b.series=null;d=J(t,b);d.series=b.series=f;this.userOptions=b;this.respRules=[];b=d.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var l;this.index=u.length;
	u.push(this);a.chartCount++;if(f)for(l in f)B(this,l,f[l]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(a){var b=this.options.chart;(b=N[a.type||b.type||b.defaultSeriesType])||p(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,d=this.series,l=this.pointer,e=this.legend,g=this.isDirtyLegend,
	n,m,r=this.hasCartesianSeries,h=this.isDirtyBox,A=d.length,v=A,p=this.renderer,z=p.isHidden(),G=[];a.setAnimation(b,this);z&&this.cloneRenderTo();for(this.layOutTitles();v--;)if(b=d[v],b.options.stacking&&(n=!0,b.isDirty)){m=!0;break}if(m)for(v=A;v--;)b=d[v],b.options.stacking&&(b.isDirty=!0);w(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),g=!0);a.isDirtyData&&f(a,"updatedData")});g&&e.options.enabled&&(e.render(),this.isDirtyLegend=!1);n&&this.getStacks();
	r&&w(c,function(a){a.updateNames();a.setScale()});this.getMargins();r&&(w(c,function(a){a.isDirty&&(h=!0)}),w(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,G.push(function(){f(a,"afterSetExtremes",k(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(h||n)&&a.redraw()}));h&&this.drawChartBox();w(d,function(a){(h||a.isDirty)&&a.visible&&a.redraw()});l&&l.reset(!0);p.draw();f(this,"redraw");z&&this.cloneRenderTo(!0);w(G,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,
	d,f;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++)for(f=c[d].points||[],b=0;b<f.length;b++)if(f[b].id===a)return f[b];return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=M(b.xAxis||{}),b=b.yAxis=M(b.yAxis||{});w(c,function(a,b){a.index=b;a.isX=!0});w(b,function(a,b){a.index=b});c=c.concat(b);w(c,function(b){new e(a,b)})},getSelectedPoints:function(){var a=[];w(this.series,function(c){a=a.concat(b(c.points||
	[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return b(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,l;l=f.title=J({style:{color:"#333333",fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=J({style:{color:"#666666"}},f.subtitle,b);w([["title",a,l],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],l=a[1];a=a[2];f&&l&&(d[c]=f=f.destroy());a&&a.text&&!f&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,
	"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,f=this.spacingBox;w(["title","subtitle"],function(a){var c=this[a],l=this.options[a],e;c&&(e=l.style.fontSize,e=d.fontMetrics(e,c).b,c.css({width:(l.width||f.width+l.widthAdjust)+"px"}).align(k({y:b+e+("title"===a?-3:2)},l),!1,"spacingBox"),l.floating||l.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);
	c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&L(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,d=this.renderToClone||this.renderTo;m(b)||(this.containerWidth=c(d,"width"));m(a)||(this.containerHeight=c(d,"height"));this.chartWidth=Math.max(0,b||this.containerWidth||600);this.chartHeight=Math.max(0,L(a,19<this.containerHeight?this.containerHeight:400))},cloneRenderTo:function(a){var b=
	this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);h(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),d(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),g.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+
	(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,f,l;b=this.renderTo;var e=a.uniqueKey(),m;b||(this.renderTo=b=d.renderTo);n(b)&&(this.renderTo=b=g.getElementById(b));b||p(13,!0);f=G(E(b,"data-highcharts-chart"));C(f)&&u[f]&&u[f].hasRendered&&u[f].destroy();E(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.cloneRenderTo();this.getChartSize();f=this.chartWidth;l=this.chartHeight;m=k({position:"relative",overflow:"hidden",width:f+"px",height:l+"px",
	textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=q("div",{id:e},m,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||O)(b,f,l,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d&&!m(c[0])&&(this.plotTop=
	Math.max(this.plotTop,d+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&w(a.axes,function(a){a.visible&&a.getOffset()});w(I,function(d,f){m(c[f])||(a[d]+=b[f])});a.setChartSize()},reflow:function(a){var b=this,d=b.options.chart,
	f=b.renderTo,l=m(d.width),e=d.width||c(f,"width"),d=d.height||c(f,"height"),f=a?a.target:P;if(!l&&!b.isPrinting&&e&&d&&(f===P||f===g)){if(e!==b.containerWidth||d!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=x(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=e;b.containerHeight=d}},initReflow:function(){var a=this,b;b=B(P,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(b,c,l){var e=this,g=e.renderer;e.isResizing+=1;a.setAnimation(l,
	e);e.oldChartHeight=e.chartHeight;e.oldChartWidth=e.chartWidth;void 0!==b&&(e.options.chart.width=b);void 0!==c&&(e.options.chart.height=c);e.getChartSize();b=g.globalAnimation;(b?F:d)(e.container,{width:e.chartWidth+"px",height:e.chartHeight+"px"},b);e.setChartSize(!0);g.setSize(e.chartWidth,e.chartHeight,l);w(e.axes,function(a){a.isDirty=!0;a.setScale()});e.isDirtyLegend=!0;e.isDirtyBox=!0;e.layOutTitles();e.getMargins();e.setResponsive&&e.setResponsive(!1);e.redraw(l);e.oldChartHeight=null;f(e,
	"resize");x(function(){e&&f(e,"endResize",null,function(){--e.isResizing})},D(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,f=this.chartHeight,l=this.options.chart,e=this.spacing,g=this.clipOffset,n,k,m,r;this.plotLeft=n=Math.round(this.plotLeft);this.plotTop=k=Math.round(this.plotTop);this.plotWidth=m=Math.max(0,Math.round(d-n-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(f-k-this.marginBottom));this.plotSizeX=b?r:m;this.plotSizeY=b?m:r;
	this.plotBorderWidth=l.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:f-e[0]-e[2]};this.plotBox=c.plotBox={x:n,y:k,width:m,height:r};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,g[3])/2);c=Math.ceil(Math.max(d,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,g[2])/2-c))};a||w(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=
	this,b=a.options.chart;w(["margin","spacing"],function(c){var d=b[c],f=r(d)?d:[d,d,d,d];w(["Top","Right","Bottom","Left"],function(d,l){a[c][l]=L(b[c+d],f[l])})});w(I,function(b,c){a[b]=L(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,f=this.chartBackground,l=this.plotBackground,e=this.plotBorder,g,n=this.plotBGImage,k=a.backgroundColor,m=a.plotBackgroundColor,r=a.plotBackgroundImage,
	h,A=this.plotLeft,v=this.plotTop,p=this.plotWidth,G=this.plotHeight,u=this.plotBox,w=this.clipRect,x=this.clipBox,q="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),q="attr");g=a.borderWidth||0;h=g+(a.shadow?8:0);k={fill:k||"none"};if(g||f["stroke-width"])k.stroke=a.borderColor,k["stroke-width"]=g;f.attr(k).shadow(a.shadow);f[q]({x:h/2,y:h/2,width:c-h-g%2,height:d-h-g%2,r:a.borderRadius});q="animate";l||(q="attr",this.plotBackground=l=b.rect().addClass("highcharts-plot-background").add());
	l[q](u);l.attr({fill:m||"none"}).shadow(a.plotShadow);r&&(n?n.animate(u):this.plotBGImage=b.image(r,A,v,p,G).add());w?w.animate({width:x.width,height:x.height}):this.clipRect=b.clipRect(x);q="animate";e||(q="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[q](e.crisp({x:A,y:v,width:p,height:G},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=
	a.options.chart,c,d=a.options.series,f,l;w(["inverted","angular","polar"],function(e){c=N[b.type||b.defaultSeriesType];l=b[e]||c&&c.prototype[e];for(f=d&&d.length;!l&&f--;)(c=N[d[f].type])&&c.prototype[e]&&(l=!0);a[e]=l})},linkSeries:function(){var a=this,b=a.series;w(b,function(a){a.linkedSeries.length=0});w(b,function(b){var c=b.options.linkedTo;n(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=L(b.options.visible,c.options.visible,
	b.visible))})},renderSeries:function(){w(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&w(b.items,function(c){var d=k(b.style,c.style),f=G(d.left)+a.plotLeft,l=G(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,f,l).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,f,l;this.setTitle();this.legend=new v(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);
	this.setChartSize();c=this.plotWidth;d=this.plotHeight-=21;w(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<c/this.plotWidth;l=1.05<d/this.plotHeight;if(f||l)w(a,function(a){(a.horiz&&f||!a.horiz&&l)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&w(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();
	this.hasRendered=!0},addCredits:function(a){var b=this;a=J(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(P.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,l=b.container,e,g=l&&l.parentNode;
	f(b,"destroy");u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");A(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();w("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});l&&(l.innerHTML="",A(l),
	g&&h(l));for(e in b)delete b[e]},isReadyToRender:function(){var a=this;return l||P!=P.top||"complete"===g.readyState?!0:(g.attachEvent("onreadystatechange",function(){g.detachEvent("onreadystatechange",a.firstRender);"complete"===g.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();f(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();w(b.series||[],function(b){a.initSeries(b)});a.linkSeries();f(a,"beforeRender");
	H&&(a.pointer=new H(a,b));a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){w([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);f(this,"load");!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(K);(function(a){var B,F=a.each,D=a.extend,E=a.erase,g=a.fireEvent,e=a.format,q=a.isArray,t=a.isNumber,h=a.pick,u=a.removeEvent;B=a.Point=function(){};B.prototype={init:function(a,
	e,g){this.series=a;this.color=a.color;this.applyOptions(e,g);a.options.colorByPoint?(e=a.options.colors||a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=h(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,e){var d=this.series,g=d.options.pointValKey||d.pointValKey;a=B.prototype.optionsToObject.call(this,a);D(this,a);this.options=this.options?
	D(this.options,a):a;a.group&&delete this.group;g&&(this.y=this[g]);this.isNull=h(this.isValid&&!this.isValid(),null===this.x||!t(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===e&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===e?d.autoIncrement(this):e);return this},optionsToObject:function(a){var d={},e=this.series,g=e.options.keys,k=g||e.pointArrayMap||["y"],f=k.length,c=0,b=0;if(t(a)||null===a)d[k[0]]=a;else if(q(a))for(!g&&
	a.length>f&&(e=typeof a[0],"string"===e?d.name=a[0]:"number"===e&&(d.x=a[0]),c++);b<f;)g&&void 0===a[c]||(d[k[b]]=a[c]),c++,b++;else"object"===typeof a&&(d=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?
	" "+this.options.className:"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",g=0,h;for(h=e[g];this[a]>=h.value;)h=e[++g];h&&h.color&&!this.options.color&&(this.color=h.color);return h},destroy:function(){var a=this.series.chart,e=a.hoverPoints,g;a.pointCount--;e&&(this.setState(),E(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(g in this)this[g]=
	null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],e,g=6;g--;)e=a[g],this[e]&&(this[e]=this[e].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,g=d.tooltipOptions,p=h(g.valueDecimals,""),k=g.valuePrefix||"",f=g.valueSuffix||"";F(d.pointArrayMap||
	["y"],function(c){c="{point."+c;if(k||f)a=a.replace(c+"}",k+c+"}"+f);a=a.replace(c+"}",c+":,."+p+"f}")});return e(a,{point:this,series:this.series})},firePointEvent:function(a,e,h){var d=this,k=this.series.options;(k.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&k.allowPointSelect&&(h=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});g(this,a,e,h)},visible:!0}})(K);(function(a){var B=a.addEvent,F=a.animObject,D=a.arrayMax,
	E=a.arrayMin,g=a.correctFloat,e=a.Date,q=a.defaultOptions,t=a.defaultPlotOptions,h=a.defined,u=a.each,d=a.erase,m=a.error,w=a.extend,p=a.fireEvent,k=a.grep,f=a.isArray,c=a.isNumber,b=a.isString,C=a.merge,r=a.pick,n=a.removeEvent,v=a.splat,I=a.stableSort,J=a.SVGElement,H=a.syncTimeout,L=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,
	radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},
	{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,f,e=a.series,g,n=function(a,b){return r(a.options.index,a._i)-r(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();w(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});f=b.events;for(d in f)B(c,d,f[d]);if(f&&f.click||b.point&&b.point.events&&b.point.events.click||
	b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);e.length&&(g=e[e.length-1]);c._i=r(g&&g._i,-1)+1;e.push(c);I(e,n);this.yAxis&&I(this.yAxis.series,n);u(e,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;u(a.axisTypes||[],function(f){u(c[f],function(c){d=c.options;if(b[f]===d.index||void 0!==b[f]&&b[f]===d.id||
	void 0===b[f]&&0===d.index)c.series.push(a),a[f]=c,c.isDirty=!0});a[f]||a.optionalAxis===f||m(18,!0)})},updateParallelArrays:function(a,b){var d=a.series,f=arguments,e=c(b)?function(c){var f="y"===c&&d.toYData?d.toYData(a):a[c];d[c+"Data"][b]=f}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(f,2))};u(d.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=r(b,a.pointStart,0);this.pointInterval=c=r(this.pointInterval,
	a.pointInterval,1);d&&(a=new e(b),"day"===d?a=+a[e.hcSetDate](a[e.hcGetDate]()+c):"month"===d?a=+a[e.hcSetMonth](a[e.hcGetMonth]()+c):"year"===d&&(a=+a[e.hcSetFullYear](a[e.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=C(f,c.series,a);this.tooltipOptions=C(q.tooltip,q.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&
	d[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&h(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d,f=this.userOptions,e=a+"Index",g=a+"Counter",n=c?c.length:
	r(this.chart.options.chart[a+"Count"],this.chart[a+"Count"]);b||(d=r(f[e],f["_"+e]),h(d)||(f["_"+e]=d=this.chart[g]%n,this.chart[g]+=1),c&&(b=c[d]));void 0!==d&&(this[e]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(a,
	d,e,g){var l=this,n=l.points,k=n&&n.length||0,h,v=l.options,A=l.chart,p=null,q=l.xAxis,G=v.turboThreshold,w=this.xData,t=this.yData,H=(h=l.pointArrayMap)&&h.length;a=a||[];h=a.length;d=r(d,!0);if(!1!==g&&h&&k===h&&!l.cropped&&!l.hasGroupedData&&l.visible)u(a,function(a,b){n[b].update&&a!==v.data[b]&&n[b].update(a,!1,null,!1)});else{l.xIncrement=null;l.colorCounter=0;u(this.parallelArrays,function(a){l[a+"Data"].length=0});if(G&&h>G){for(e=0;null===p&&e<h;)p=a[e],e++;if(c(p))for(e=0;e<h;e++)w[e]=this.autoIncrement(),
	t[e]=a[e];else if(f(p))if(H)for(e=0;e<h;e++)p=a[e],w[e]=p[0],t[e]=p.slice(1,H+1);else for(e=0;e<h;e++)p=a[e],w[e]=p[0],t[e]=p[1];else m(12)}else for(e=0;e<h;e++)void 0!==a[e]&&(p={series:l},l.pointClass.prototype.applyOptions.apply(p,[a[e]]),l.updateParallelArrays(p,e));b(t[0])&&m(14,!0);l.data=[];l.options.data=l.userOptions.data=a;for(e=k;e--;)n[e]&&n[e].destroy&&n[e].destroy();q&&(q.minRange=q.userMinRange);l.isDirty=A.isDirtyBox=!0;l.isDirtyData=!!n;e=!1}"point"===v.legendType&&(this.processData(),
	this.generatePoints());d&&A.redraw(e)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,f;f=0;var e,g,n=this.xAxis,k,r=this.options;k=r.cropThreshold;var h=this.getExtremesFromAll||r.getExtremesFromAll,v=this.isCartesian,r=n&&n.val2lin,p=n&&n.isLog,u,q;if(v&&!this.isDirty&&!n.isDirty&&!this.yAxis.isDirty&&!a)return!1;n&&(a=n.getExtremes(),u=a.min,q=a.max);if(v&&this.sorted&&!h&&(!k||d>k||this.forceCrop))if(b[d-1]<u||b[0]>q)b=[],c=[];else if(b[0]<u||b[d-1]>q)f=this.cropData(this.xData,
	this.yData,u,q),b=f.xData,c=f.yData,f=f.start,e=!0;for(k=b.length||1;--k;)d=p?r(b[k])-r(b[k-1]):b[k]-b[k-1],0<d&&(void 0===g||d<g)?g=d:0>d&&this.requireSorting&&m(15);this.cropped=e;this.cropStart=f;this.processedXData=b;this.processedYData=c;this.closestPointRange=g},cropData:function(a,b,c,d){var f=a.length,e=0,g=f,n=r(this.cropShoulder,1),k;for(k=0;k<f;k++)if(a[k]>=c){e=Math.max(0,k-n);break}for(c=k;c<f;c++)if(a[c]>d){g=c+n;break}return{xData:a.slice(e,g),yData:b.slice(e,g),start:e,end:g}},generatePoints:function(){var a=
	this.options.data,b=this.data,c,d=this.processedXData,f=this.processedYData,e=this.pointClass,g=d.length,n=this.cropStart||0,k,m=this.hasGroupedData,r,h=[],p;b||m||(b=[],b.length=a.length,b=this.data=b);for(p=0;p<g;p++)k=n+p,m?(r=(new e).init(this,[d[p]].concat(v(f[p]))),r.dataGroup=this.groupMap[p]):(r=b[k])||void 0===a[k]||(b[k]=r=(new e).init(this,a[k],d[p])),r.index=k,h[p]=r;if(b&&(g!==(c=b.length)||m))for(p=0;p<c;p++)p!==n||m||(p+=g),b[p]&&(b[p].destroyElements(),b[p].plotX=void 0);this.data=
	b;this.points=h},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,e,g=[],n=0;e=this.xAxis.getExtremes();var k=e.min,m=e.max,r,h,v,p;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(p=0;p<e;p++)if(h=d[p],v=a[p],r=(c(v,!0)||f(v))&&(!b.isLog||v.length||0<v),h=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[p+1]||h)>=k&&(d[p-1]||h)<=m,r&&h)if(r=v.length)for(;r--;)null!==v[r]&&(g[n++]=v[r]);else g[n++]=v;this.dataMin=E(g);this.dataMax=D(g)},translate:function(){this.processedXData||
	this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,f=d.categories,e=this.yAxis,n=this.points,k=n.length,m=!!this.modifyValue,v=a.pointPlacement,p="between"===v||c(v),u=a.threshold,q=a.startFromThreshold?u:0,w,t,H,C,I=Number.MAX_VALUE;"between"===v&&(v=.5);c(v)&&(v*=r(a.pointRange||d.pointRange));for(a=0;a<k;a++){var J=n[a],L=J.x,E=J.y;t=J.low;var B=b&&e.stacks[(this.negStacks&&E<(q?0:u)?"-":"")+this.stackKey],D;e.isLog&&null!==E&&0>=E&&(J.isNull=!0);J.plotX=w=g(Math.min(Math.max(-1E5,
	d.translate(L,0,0,0,1,v,"flags"===this.type)),1E5));b&&this.visible&&!J.isNull&&B&&B[L]&&(C=this.getStackIndicator(C,L,this.index),D=B[L],E=D.points[C.key],t=E[0],E=E[1],t===q&&C.key===B[L].base&&(t=r(u,e.min)),e.isLog&&0>=t&&(t=null),J.total=J.stackTotal=D.total,J.percentage=D.total&&J.y/D.total*100,J.stackY=E,D.setOffset(this.pointXOffset||0,this.barW||0));J.yBottom=h(t)?e.translate(t,0,1,0,1):null;m&&(E=this.modifyValue(E,J));J.plotY=t="number"===typeof E&&Infinity!==E?Math.min(Math.max(-1E5,e.translate(E,
	0,1,0,1)),1E5):void 0;J.isInside=void 0!==t&&0<=t&&t<=e.len&&0<=w&&w<=d.len;J.clientX=p?g(d.translate(L,0,0,0,1,v)):w;J.negative=J.y<(u||0);J.category=f&&void 0!==f[J.x]?f[J.x]:J.x;J.isNull||(void 0!==H&&(I=Math.min(I,Math.abs(w-H))),H=w)}this.closestPointRangePx=I},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,
	e=this.clipBox,g=e||b.clipBox,n=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(),k=b[n],m=b[n+"m"];k||(a&&(g.width=0,b[n+"m"]=m=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[n]=k=d.clipRect(g),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);!1!==c.clip&&(this.group.clip(a||e?k:b.clipRect),this.markerGroup.clip(m),this.sharedClipKey=n);a||(k.count[this.index]&&(delete k.count[this.index],
	--k.count.length),0===k.count.length&&n&&b[n]&&(e||(b[n]=b[n].destroy()),b[n+"m"]&&(b[n+"m"]=b[n+"m"].destroy())))},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();p(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,d,f,e,g,n=this.options.marker,k,m,h,v,p=this.markerGroup,
	u=r(n.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>2*n.radius);if(!1!==n.enabled||this._hasPointMarkers)for(f=a.length;f--;)e=a[f],d=e.plotY,g=e.graphic,k=e.marker||{},m=!!e.marker,h=u&&void 0===k.enabled||k.enabled,v=e.isInside,h&&c(d)&&null!==e.y?(d=r(k.symbol,this.symbol),e.hasImage=0===d.indexOf("url"),h=this.markerAttribs(e,e.selected&&"select"),g?g[v?"show":"hide"](!0).animate(h):v&&(0<h.width||e.hasImage)&&(e.graphic=g=b.renderer.symbol(d,h.x,h.y,h.width,h.height,m?k:n).add(p)),
	g&&g.attr(this.pointAttribs(e,e.selected&&"select")),g&&g.addClass(e.getClassName(),!0)):g&&(e.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},d=r(f.radius,c.radius);b&&(c=c.states[b],b=f.states&&f.states[b],d=r(b&&b.radius,c&&c.radius,d+(c&&c.radiusPlus||0)));a.hasImage&&(d=0);a={x:Math.floor(a.plotX)-d,y:a.plotY-d};d&&(a.width=a.height=2*d);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},
	e=this.color,g=d&&d.color,n=a&&a.color,d=r(f.lineWidth,c.lineWidth),k;a&&this.zones.length&&(a=a.getZone())&&a.color&&(k=a.color);e=g||k||n||e;k=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=r(b.lineWidth,c.lineWidth,d+r(b.lineWidthPlus,c.lineWidthPlus,0)),k=b.fillColor||c.fillColor||k,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,fill:k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(L.navigator.userAgent),
	f,e=a.data||[],g,k,m;p(a,"destroy");n(a);u(a.axisTypes||[],function(b){(m=a[b])&&m.series&&(d(m.series,a),m.isDirty=m.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=e.length;f--;)(g=e[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);for(k in a)a[k]instanceof J&&!a[k].survive&&(f=c&&"group"===k?"hide":"destroy",a[k][f]());b.hoverSeries===a&&(b.hoverSeries=null);d(b.series,a);for(k in a)delete a[k]},getGraphPath:function(a,b,c){var d=this,f=d.options,e=
	f.step,g,n=[],k=[],m;a=a||d.points;(g=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&g&&(e=4-e);!f.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(g,l){var r=g.plotX,v=g.plotY,p=a[l-1];(g.leftCliff||p&&p.rightCliff)&&!c&&(m=!0);g.isNull&&!h(b)&&0<l?m=!f.connectNulls:g.isNull&&!b?m=!0:(0===l||m?l=["M",g.plotX,g.plotY]:d.getPointSpline?l=d.getPointSpline(a,g,l):e?(l=1===e?["L",p.plotX,v]:2===e?["L",(p.plotX+r)/2,p.plotY,"L",(p.plotX+r)/2,v]:["L",r,p.plotY],l.push("L",r,v)):l=
	["L",r,v],k.push(g.x),e&&k.push(g.x),n.push.apply(n,l),m=!1)});n.xMap=k;return d.graphPath=n},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,f){d.push(["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});u(d,function(d,f){var e=d[0],g=a[e];g?(g.endX=c.xMap,g.animate({d:c})):c.length&&
	(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),g={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?g.dashstyle=d[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[e].attr(g).shadow(2>f&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,f,e,g=this.clips||[],n,k=this.graph,m=this.area,h=Math.max(b.chartWidth,b.chartHeight),v=this[(this.zoneAxis||
	"y")+"Axis"],p,q,w=b.inverted,t,H,J,C,I=!1;d.length&&(k||m)&&v&&void 0!==v.min&&(q=v.reversed,t=v.horiz,k&&k.hide(),m&&m.hide(),p=v.getExtremes(),u(d,function(d,l){f=q?t?b.plotWidth:0:t?0:v.toPixels(p.min);f=Math.min(Math.max(r(e,f),0),h);e=Math.min(Math.max(Math.round(v.toPixels(r(d.value,p.max),!0)),0),h);I&&(f=e=v.toPixels(p.max));H=Math.abs(f-e);J=Math.min(f,e);C=Math.max(f,e);v.isXAxis?(n={x:w?C:J,y:0,width:H,height:h},t||(n.x=b.plotHeight-n.x)):(n={x:0,y:w?C:J,width:h,height:H},t&&(n.y=b.plotWidth-
	n.y));w&&c.isVML&&(n=v.isXAxis?{x:0,y:q?J:C,height:n.width,width:b.chartWidth}:{x:n.y-b.plotLeft-b.spacingBox.x,y:0,width:n.height,height:b.chartHeight});g[l]?g[l].animate(n):(g[l]=c.clipRect(n),k&&a["zone-graph-"+l].clip(g[l]),m&&a["zone-area-"+l].clip(g[l]));I=d.value>p.max}),this.clips=g)},invertGroups:function(a){function b(){var b={width:c.yAxis.len,height:c.xAxis.len};u(["group","markerGroup"],function(d){c[d]&&c[d].attr(b).invert(a)})}var c=this,d;c.xAxis&&(d=B(c.chart,"resize",b),B(c,"destroy",
	d),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],g=!e;g&&(this[a]=e=this.chart.renderer.g(b).attr({zIndex:d||.1}).add(f),e.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));e.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?
	c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&F(d.animation).duration,e=a.visible?"inherit":"hidden",g=d.zIndex,n=a.hasRendered,k=b.seriesGroup,m=b.inverted;c=a.plotGroup("group","series",e,g,k);a.markerGroup=a.plotGroup("markerGroup","markers",e,g,k);f&&a.animate(!0);c.inverted=a.isCartesian?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==
	a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);!1===d.clip||a.sharedClipKey||n||c.clip(b.clipRect);f&&a.animate();n||(a.animationTimeout=H(function(){a.afterAnimate()},f));a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:r(d&&d.left,a.plotLeft),translateY:r(f&&f.top,a.plotTop)}));this.translate();
	this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var e,g;if(g=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),g=Math.floor(g/2),{point:c[g],left:a(c.slice(0,g),d+1,f),right:a(c.slice(g+1),d+1,f)}}
	var b=this,c=b.kdDimensions;delete b.kdTree;H(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,n,k){var l=b.point,m=d.kdAxisArray[n%k],r,v,p=l;v=h(a[f])&&h(l[f])?Math.pow(a[f]-l[f],2):null;r=h(a[e])&&h(l[e])?Math.pow(a[e]-l[e],2):null;r=(v||0)+(r||0);l.dist=h(r)?Math.sqrt(r):Number.MAX_VALUE;l.distX=h(v)?Math.sqrt(v):Number.MAX_VALUE;m=a[m]-l[m];r=0>m?"left":"right";v=0>m?"right":"left";b[r]&&(r=c(a,b[r],n+1,k),p=r[g]<
	p[g]?r:l);b[v]&&Math.sqrt(m*m)<p[g]&&(a=c(a,b[v],n+1,k),p=a[g]<p[g]?a:p);return p}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(K);(function(a){var B=a.addEvent,F=a.animate,D=a.Axis,E=a.createElement,g=a.css,e=a.defined,q=a.each,t=a.erase,h=a.extend,u=a.fireEvent,d=a.inArray,m=a.isNumber,w=a.isObject,p=a.merge,k=a.pick,f=a.Point,c=a.Series,b=a.seriesTypes,C=a.setAnimation,
	r=a.splat;h(a.Chart.prototype,{addSeries:function(a,b,c){var d,f=this;a&&(b=k(b,!0),u(f,"addSeries",{options:a},function(){d=f.initSeries(a);f.isDirtyLegend=!0;f.linkSeries();b&&f.redraw(c)}));return d},addAxis:function(a,b,c,d){var f=b?"xAxis":"yAxis",e=this.options;a=p(a,{index:this[f].length,isX:b});new D(this,a);e[f]=r(e[f]||{});e[f].push(a);k(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,e=function(){d&&g(d,{left:b.plotLeft+"px",top:b.plotTop+
	"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;g(d,h(f.style,{zIndex:10}));g(b.loadingSpan,f.labelStyle);b.loadingShown||(g(d,{opacity:0,display:""}),F(d,{opacity:f.style.opacity||.5},{duration:f.showDuration||0}));b.loadingShown=
	!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){g(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
	propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,b){var c,f={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},g=a.chart,n,h;if(g){p(!0,this.options.chart,g);"className"in g&&this.setClassName(g.className);if("inverted"in g||"polar"in g)this.propFromSeries(),n=!0;for(c in g)g.hasOwnProperty(c)&&(-1!==d("chart."+c,this.propsRequireUpdateSeries)&&(h=!0),-1!==d(c,this.propsRequireDirtyBox)&&(this.isDirtyBox=
	!0));"style"in g&&this.renderer.setStyle(g.style)}for(c in a){if(this[c]&&"function"===typeof this[c].update)this[c].update(a[c],!1);else if("function"===typeof this[f[c]])this[f[c]](a[c]);"chart"!==c&&-1!==d(c,this.propsRequireUpdateSeries)&&(h=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&p(!0,this.options.plotOptions,a.plotOptions);q(["xAxis","yAxis","series"],function(b){a[b]&&q(r(a[b]),function(a){var c=e(a.id)&&this.get(a.id)||this[b][0];c&&c.coll===b&&c.update(a,!1)},this)},this);
	n&&q(this.axes,function(a){a.update({},!1)});h&&q(this.series,function(a){a.update({},!1)});a.loading&&p(!0,this.options.loading,a.loading);c=g&&g.width;g=g&&g.height;m(c)&&c!==this.chartWidth||m(g)&&g!==this.chartHeight?this.setSize(c,g):k(b,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});h(f.prototype,{update:function(a,b,c,d){function f(){e.applyOptions(a);null===e.y&&n&&(e.graphic=n.destroy());w(a,!0)&&(n&&n.element&&a&&a.marker&&a.marker.symbol&&(e.graphic=n.destroy()),
	a&&a.dataLabels&&e.dataLabel&&(e.dataLabel=e.dataLabel.destroy()));m=e.index;g.updateParallelArrays(e,m);l.data[m]=w(l.data[m],!0)?e.options:a;g.isDirty=g.isDirtyData=!0;!g.fixedBox&&g.hasCartesianSeries&&(r.isDirtyBox=!0);"point"===l.legendType&&(r.isDirtyLegend=!0);b&&r.redraw(c)}var e=this,g=e.series,n=e.graphic,m,r=g.chart,l=g.options;b=k(b,!0);!1===d?f():e.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(d(this,this.series.data),a,b)}});h(c.prototype,{addPoint:function(a,
	b,c,d){var f=this.options,e=this.data,g=this.chart,n=this.xAxis&&this.xAxis.names,m=f.data,r,l,h=this.xData,p,v;b=k(b,!0);r={series:this};this.pointClass.prototype.applyOptions.apply(r,[a]);v=r.x;p=h.length;if(this.requireSorting&&v<h[p-1])for(l=!0;p&&h[p-1]>v;)p--;this.updateParallelArrays(r,"splice",p,0,0);this.updateParallelArrays(r,p);n&&r.name&&(n[v]=r.name);m.splice(p,0,a);l&&(this.data.splice(p,0,null),this.processData());"point"===f.legendType&&this.generatePoints();c&&(e[0]&&e[0].remove?
	e[0].remove(!1):(e.shift(),this.updateParallelArrays(r,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&g.redraw(d)},removePoint:function(a,b,c){var d=this,f=d.data,e=f[a],g=d.points,n=d.chart,m=function(){g&&g.length===f.length&&g.splice(a,1);f.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(e||{series:d},"splice",a,1);e&&e.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&n.redraw()};C(c,n);b=k(b,!0);e?e.firePointEvent("remove",null,m):m()},remove:function(a,b,c){function d(){f.destroy();
	e.isDirtyLegend=e.isDirtyBox=!0;e.linkSeries();k(a,!0)&&e.redraw(b)}var f=this,e=f.chart;!1!==c?u(f,"remove",null,d):d()},update:function(a,c){var d=this,f=this.chart,e=this.userOptions,g=this.type,n=a.type||e.type||f.options.chart.type,m=b[g].prototype,r=["group","markerGroup","dataLabelsGroup"],v;if(n&&n!==g||void 0!==a.zIndex)r.length=0;q(r,function(a){r[a]=d[a];delete d[a]});a=p(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1,null,!1);for(v in m)this[v]=
	void 0;h(this,b[n||g].prototype);q(r,function(a){d[a]=r[a]});this.init(f,a);f.linkSeries();k(c,!0)&&f.redraw(!1)}});h(D.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=p(this.userOptions,a);this.destroy(!0);this.init(c,h(a,{events:void 0}));c.isDirtyBox=!0;k(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,f=d.length;f--;)d[f]&&d[f].remove(!1);t(b.axes,this);t(b[c],this);b.options[c].splice(this.options.index,1);q(b[c],
	function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;k(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var B=a.animObject,F=a.color,D=a.each,E=a.extend,g=a.isNumber,e=a.merge,q=a.pick,t=a.Series,h=a.seriesType,u=a.svg;h("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},
	select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&D(e.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,
	g=a.xAxis,h=a.yAxis,k=g.reversed,f,c={},b=0;!1===e.grouping?b=1:D(a.chart.series,function(d){var e=d.options,g=d.yAxis,k;d.type===a.type&&d.visible&&h.len===g.len&&h.pos===g.pos&&(e.stacking?(f=d.stackKey,void 0===c[f]&&(c[f]=b++),k=c[f]):!1!==e.grouping&&(k=b++),d.columnIndex=k)});var u=Math.min(Math.abs(g.transA)*(g.ordinalSlope||e.pointRange||g.closestPointRange||g.tickInterval||1),g.len),r=u*e.groupPadding,n=(u-2*r)/b,e=Math.min(e.maxPointWidth||g.len,q(e.pointWidth,n*(1-2*e.pointPadding)));a.columnMetrics=
	{width:e,offset:(n-e)/2+(r+((a.columnIndex||0)+(k?1:0))*n-u/2)*(k?-1:1)};return a.columnMetrics},crispCol:function(a,e,g,h){var d=this.chart,f=this.borderWidth,c=-(f%2?.5:0),f=f%2?.5:1;d.inverted&&d.renderer.isVML&&(f+=1);g=Math.round(a+g)+c;a=Math.round(a)+c;h=Math.round(e+h)+f;c=.5>=Math.abs(e)&&.5<h;e=Math.round(e)+f;h-=e;c&&h&&(--e,h+=1);return{x:a,y:e,width:g-a,height:h}},translate:function(){var a=this,e=a.chart,g=a.options,h=a.dense=2>a.closestPointRange*a.xAxis.transA,h=a.borderWidth=q(g.borderWidth,
	h?0:1),k=a.yAxis,f=a.translatedThreshold=k.getThreshold(g.threshold),c=q(g.minPointLength,5),b=a.getColumnMetrics(),u=b.width,r=a.barW=Math.max(u,1+2*h),n=a.pointXOffset=b.offset;e.inverted&&(f-=.5);g.pointPadding&&(r=Math.ceil(r));t.prototype.translate.apply(a);D(a.points,function(b){var d=q(b.yBottom,f),g=999+Math.abs(d),g=Math.min(Math.max(-g,b.plotY),k.len+g),m=b.plotX+n,h=r,p=Math.min(g,d),v,t=Math.max(g,d)-p;Math.abs(t)<c&&c&&(t=c,v=!k.reversed&&!b.negative||k.reversed&&b.negative,p=Math.abs(p-
	f)>c?d-c:f-(v?c:0));b.barX=m;b.pointWidth=u;b.tooltipPos=e.inverted?[k.len+k.pos-e.plotLeft-g,a.xAxis.len-m-h/2,t]:[m+h/2,g+k.pos-e.plotTop,t];b.shapeType="rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?[b.plotX,k.len/2,0,0]:[m,p,h,t])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var d=this.options,g=this.pointAttrToOptions||{},k=g.stroke||"borderColor",
	f=g["stroke-width"]||"borderWidth",c=a&&a.color||this.color,b=a[k]||d[k]||this.color||c,g=d.dashStyle,m;a&&this.zones.length&&(c=(c=a.getZone())&&c.color||a.options.color||this.color);e&&(e=d.states[e],m=e.brightness,c=e.color||void 0!==m&&F(c).brighten(e.brightness).get()||c,b=e[k]||b,g=e.dashStyle||g);a={fill:c,stroke:b,"stroke-width":a[f]||d[f]||this[f]||0};d.borderRadius&&(a.r=d.borderRadius);g&&(a.dashstyle=g);return a},drawPoints:function(){var a=this,m=this.chart,h=a.options,p=m.renderer,k=
	h.animationLimit||250,f;D(a.points,function(c){var b=c.graphic;if(g(c.plotY)&&null!==c.y){f=c.shapeArgs;if(b)b[m.pointCount<k?"animate":"attr"](e(f));else c.graphic=b=p[c.shapeType](f).attr({"class":c.getClassName()}).add(c.group||a.group);b.attr(a.pointAttribs(c,c.selected&&"select")).shadow(h.shadow,null,h.stacking&&!h.borderRadius)}else b&&(c.graphic=b.destroy())})},animate:function(a){var d=this,e=this.yAxis,g=d.options,k=this.chart.inverted,f={};u&&(a?(f.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,
	e.toPixels(g.threshold))),k?f.translateX=a-e.len:f.translateY=a,d.group.attr(f)):(f[k?"translateX":"translateY"]=e.pos,d.group.animate(f,E(B(d.options.animation),{step:function(a,b){d.group.attr({scaleY:Math.max(.001,b.pos)})}})),d.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&D(e.series,function(d){d.type===a.type&&(d.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(K);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
	pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(K);(function(a){var B=a.addEvent,F=a.arrayMax,D=a.defined,E=a.each,g=a.extend,e=a.format,q=a.map,t=a.merge,h=a.noop,u=a.pick,d=a.relativeLength,m=a.Series,w=a.seriesTypes,p=a.stableSort;
	a.distribute=function(a,d){function c(a,b){return a.target-b.target}var b,f=!0,e=a,g=[],k;k=0;for(b=a.length;b--;)k+=a[b].size;if(k>d){p(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(k=b=0;k<=d;)k+=a[b].size,b++;g=a.splice(b-1,a.length)}p(a,c);for(a=q(a,function(a){return{size:a.size,targets:[a.target]}});f;){for(b=a.length;b--;)f=a[b],k=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,k-f.size/2),d-f.size);b=a.length;for(f=!1;b--;)0<b&&a[b-1].pos+a[b-1].size>
	a[b].pos&&(a[b-1].size+=a[b].size,a[b-1].targets=a[b-1].targets.concat(a[b].targets),a[b-1].pos+a[b-1].size>d&&(a[b-1].pos=d-a[b-1].size),a.splice(b,1),f=!0)}b=0;E(a,function(a){var c=0;E(a.targets,function(){e[b].pos=a.pos+c;c+=e[b].size;b++})});e.push.apply(e,g);p(e,c)};m.prototype.drawDataLabels=function(){var a=this,d=a.options,c=d.dataLabels,b=a.points,m,r,n=a.hasRendered||0,h,p,q=u(c.defer,!0),w=a.chart.renderer;if(c.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(c),p=a.plotGroup("dataLabelsGroup",
	"data-labels",q&&!n?"hidden":"visible",c.zIndex||6),q&&(p.attr({opacity:+n}),n||B(a,"afterAnimate",function(){a.visible&&p.show(!0);p[d.animation?"animate":"attr"]({opacity:1},{duration:200})})),r=c,E(b,function(b){var f,k=b.dataLabel,n,v,l=b.connector,q=!0,C,J={};m=b.dlOptions||b.options&&b.options.dataLabels;f=u(m&&m.enabled,r.enabled)&&null!==b.y;if(k&&!f)b.dataLabel=k.destroy();else if(f){c=t(r,m);C=c.style;f=c.rotation;n=b.getLabelConfig();h=c.format?e(c.format,n):c.formatter.call(n,c);C.color=
	u(c.color,C.color,a.color,"#000000");if(k)D(h)?(k.attr({text:h}),q=!1):(b.dataLabel=k=k.destroy(),l&&(b.connector=l.destroy()));else if(D(h)){k={fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.borderWidth,r:c.borderRadius||0,rotation:f,padding:c.padding,zIndex:1};"contrast"===C.color&&(J.color=c.inside||0>c.distance||d.stacking?w.getContrast(b.color||a.color):"#000000");d.cursor&&(J.cursor=d.cursor);for(v in k)void 0===k[v]&&delete k[v];k=b.dataLabel=w[f?"text":"label"](h,0,-9999,c.shape,
	null,null,c.useHTML,null,"data-label").attr(k);k.addClass("highcharts-data-label-color-"+b.colorIndex+" "+(c.className||"")+(c.useHTML?"highcharts-tracker":""));k.css(g(C,J));k.add(p);k.shadow(c.shadow)}k&&a.alignDataLabel(b,k,c,null,q)}})};m.prototype.alignDataLabel=function(a,d,c,b,e){var f=this.chart,k=f.inverted,m=u(a.plotX,-9999),h=u(a.plotY,-9999),p=d.getBBox(),q,t=c.rotation,w=c.align,C=this.visible&&(a.series.forceDL||f.isInsidePlot(m,Math.round(h),k)||b&&f.isInsidePlot(m,k?b.x+1:b.y+b.height-
	1,k)),E="justify"===u(c.overflow,"justify");C&&(q=c.style.fontSize,q=f.renderer.fontMetrics(q,d).b,b=g({x:k?f.plotWidth-h:m,y:Math.round(k?f.plotHeight-m:h),width:0,height:0},b),g(c,{width:p.width,height:p.height}),t?(E=!1,k=f.renderer.rotCorr(q,t),k={x:b.x+c.x+b.width/2+k.x,y:b.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*b.height},d[e?"attr":"animate"](k).attr({align:w}),m=(t+720)%360,m=180<m&&360>m,"left"===w?k.y-=m?p.height:0:"center"===w?(k.x-=p.width/2,k.y-=p.height/2):"right"===w&&(k.x-=
	p.width,k.y-=m?0:p.height)):(d.align(c,null,b),k=d.alignAttr),E?this.justifyDataLabel(d,c,k,p,b,e):u(c.crop,!0)&&(C=f.isInsidePlot(k.x,k.y)&&f.isInsidePlot(k.x+p.width,k.y+p.height)),c.shape&&!t&&d.attr({anchorX:a.plotX,anchorY:a.plotY}));C||(d.attr({y:-9999}),d.placed=!1)};m.prototype.justifyDataLabel=function(a,d,c,b,e,g){var f=this.chart,k=d.align,m=d.verticalAlign,h,r,p=a.box?0:a.padding||0;h=c.x+p;0>h&&("right"===k?d.align="left":d.x=-h,r=!0);h=c.x+b.width-p;h>f.plotWidth&&("left"===k?d.align=
	"right":d.x=f.plotWidth-h,r=!0);h=c.y+p;0>h&&("bottom"===m?d.verticalAlign="top":d.y=-h,r=!0);h=c.y+b.height-p;h>f.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=f.plotHeight-h,r=!0);r&&(a.placed=!g,a.align(d,null,e))};w.pie&&(w.pie.prototype.drawDataLabels=function(){var d=this,f=d.data,c,b=d.chart,e=d.options.dataLabels,g=u(e.connectorPadding,10),n=u(e.connectorWidth,1),h=b.plotWidth,p=b.plotHeight,t,w=e.distance,B=d.center,D=B[2]/2,A=B[1],N=0<w,M,l,x,P,O=[[],[]],y,z,K,Q,R=[0,0,0,0];d.visible&&
	(e.enabled||d._hasPointLabels)&&(m.prototype.drawDataLabels.apply(d),E(f,function(a){a.dataLabel&&a.visible&&(O[a.half].push(a),a.dataLabel._pos=null)}),E(O,function(f,k){var n,m,r=f.length,v,u,t;if(r)for(d.sortByAngle(f,k-.5),0<w&&(n=Math.max(0,A-D-w),m=Math.min(A+D+w,b.plotHeight),v=q(f,function(a){if(a.dataLabel)return t=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-n+t/2,size:t,rank:a.y}}),a.distribute(v,m+t-n)),Q=0;Q<r;Q++)c=f[Q],x=c.labelPos,M=c.dataLabel,K=!1===c.visible?"hidden":
	"inherit",u=x[1],v?void 0===v[Q].pos?K="hidden":(P=v[Q].size,z=n+v[Q].pos):z=u,y=e.justify?B[0]+(k?-1:1)*(D+w):d.getX(z<n+2||z>m-2?u:z,k),M._attr={visibility:K,align:x[6]},M._pos={x:y+e.x+({left:g,right:-g}[x[6]]||0),y:z+e.y-10},x.x=y,x.y=z,null===d.options.size&&(l=M.width,y-l<g?R[3]=Math.max(Math.round(l-y+g),R[3]):y+l>h-g&&(R[1]=Math.max(Math.round(y+l-h+g),R[1])),0>z-P/2?R[0]=Math.max(Math.round(-z+P/2),R[0]):z+P/2>p&&(R[2]=Math.max(Math.round(z+P/2-p),R[2])))}),0===F(R)||this.verifyDataLabelOverflow(R))&&
	(this.placeDataLabels(),N&&n&&E(this.points,function(a){var c;t=a.connector;if((M=a.dataLabel)&&M._pos&&a.visible){K=M._attr.visibility;if(c=!t)a.connector=t=b.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(d.dataLabelsGroup),t.attr({"stroke-width":n,stroke:e.connectorColor||a.color||"#666666"});t[c?"attr":"animate"]({d:d.connectorPath(a.labelPos)});t.attr("visibility",K)}else t&&(a.connector=t.destroy())}))},w.pie.prototype.connectorPath=function(a){var d=
	a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",d+("left"===a[6]?5:-5),c,"C",d,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",d+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},w.pie.prototype.placeDataLabels=function(){E(this.points,function(a){var d=a.dataLabel;d&&a.visible&&((a=d._pos)?(d.attr(d._attr),d[d.moved?"animate":"attr"](a),d.moved=!0):d&&d.attr({y:-9999}))})},w.pie.prototype.alignDataLabel=h,w.pie.prototype.verifyDataLabelOverflow=function(a){var f=this.center,
	c=this.options,b=c.center,e=c.minSize||80,g,k;null!==b[0]?g=Math.max(f[2]-Math.max(a[1],a[3]),e):(g=Math.max(f[2]-a[1]-a[3],e),f[0]+=(a[3]-a[1])/2);null!==b[1]?g=Math.max(Math.min(g,f[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,f[2]-a[0]-a[2]),e),f[1]+=(a[0]-a[2])/2);g<f[2]?(f[2]=g,f[3]=Math.min(d(c.innerSize||0,g),g),this.translate(f),this.drawDataLabels&&this.drawDataLabels()):k=!0;return k});w.column&&(w.column.prototype.alignDataLabel=function(a,d,c,b,e){var f=this.chart.inverted,g=a.series,
	k=a.dlBox||a.shapeArgs,h=u(a.below,a.plotY>u(this.translatedThreshold,g.yAxis.len)),p=u(c.inside,!!this.options.stacking);k&&(b=t(k),0>b.y&&(b.height+=b.y,b.y=0),k=b.y+b.height-g.yAxis.len,0<k&&(b.height-=k),f&&(b={x:g.yAxis.len-b.y-b.height,y:g.xAxis.len-b.x-b.width,width:b.height,height:b.width}),p||(f?(b.x+=h?0:b.width,b.width=0):(b.y+=h?b.height:0,b.height=0)));c.align=u(c.align,!f||p?"center":h?"right":"left");c.verticalAlign=u(c.verticalAlign,f||p?"middle":h?"top":"bottom");m.prototype.alignDataLabel.call(this,
	a,d,c,b,e)})})(K);(function(a){var B=a.Chart,F=a.each,D=a.pick,E=a.addEvent;B.prototype.callbacks.push(function(a){function e(){var e=[];F(a.series,function(a){var g=a.options.dataLabels,u=a.dataLabelCollections||["dataLabel"];(g.enabled||a._hasPointLabels)&&!g.allowOverlap&&a.visible&&F(u,function(d){F(a.points,function(a){a[d]&&(a[d].labelrank=D(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[d]))})})});a.hideOverlappingLabels(e)}e();E(a,"redraw",e)});B.prototype.hideOverlappingLabels=function(a){var e=
	a.length,g,t,h,u,d,m,w,p,k,f=function(a,b,d,f,e,g,k,m){return!(e>a+d||e+k<a||g>b+f||g+m<b)};for(t=0;t<e;t++)if(g=a[t])g.oldOpacity=g.opacity,g.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(t=0;t<e;t++)for(h=a[t],g=t+1;g<e;++g)if(u=a[g],h&&u&&h.placed&&u.placed&&0!==h.newOpacity&&0!==u.newOpacity&&(d=h.alignAttr,m=u.alignAttr,w=h.parentGroup,p=u.parentGroup,k=2*(h.box?0:h.padding),d=f(d.x+w.translateX,d.y+w.translateY,h.width-k,h.height-k,m.x+p.translateX,m.y+p.translateY,
	u.width-k,u.height-k)))(h.labelrank<u.labelrank?h:u).newOpacity=0;F(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var B=a.Axis,F=a.each,D=a.pick;a=a.wrap;a(B.prototype,"getSeriesExtremes",function(a){var g=this.isXAxis,e,q,t=[],h;g&&F(this.series,function(a,d){a.useMapGeometry&&(t[d]=a.xData,a.xData=[])});a.call(this);g&&(e=D(this.dataMin,
	Number.MAX_VALUE),q=D(this.dataMax,-Number.MAX_VALUE),F(this.series,function(a,d){a.useMapGeometry&&(e=Math.min(e,D(a.minX,e)),q=Math.max(q,D(a.maxX,e)),a.xData=t[d],h=!0)}),h&&(this.dataMin=e,this.dataMax=q))});a(B.prototype,"setAxisTranslation",function(a){var g=this.chart,e=g.plotWidth/g.plotHeight,g=g.xAxis[0],q;a.call(this);"yAxis"===this.coll&&void 0!==g.transA&&F(this.series,function(a){a.preserveAspectRatio&&(q=!0)});if(q&&(this.transA=g.transA=Math.min(this.transA,g.transA),a=e/((g.max-g.min)/
	(this.max-this.min)),a=1>a?this:g,e=(a.max-a.min)*a.transA,a.pixelPadding=a.len-e,a.minPixelPadding=a.pixelPadding/2,e=a.fixTo)){e=e[1]-a.toValue(e[0],!0);e*=a.transA;if(Math.abs(e)>a.minPixelPadding||a.min===a.dataMin&&a.max===a.dataMax)e=0;a.minPixelPadding-=e}});a(B.prototype,"render",function(a){a.call(this);this.fixTo=null})})(K);(function(a){var B=a.Axis,F=a.Chart,D=a.color,E,g=a.each,e=a.extend,q=a.isNumber,t=a.Legend,h=a.LegendSymbolMixin,u=a.noop,d=a.merge,m=a.pick,w=a.wrap;E=a.ColorAxis=
	function(){this.init.apply(this,arguments)};e(E.prototype,B.prototype);e(E.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify"},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItem","legendSymbol"].concat(B.prototype.keepProps),init:function(a,e){var f="vertical"!==a.options.legend.layout,
	c;this.coll="colorAxis";c=d(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},e,{opposite:!f,showEmpty:!1,title:null});B.prototype.init.call(this,a,c);e.dataClasses&&this.initDataClasses(e);this.initStops(e);this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},tweenColors:function(a,d,f){var c;d.rgba.length&&a.rgba.length?(a=a.rgba,d=d.rgba,c=1!==d[3]||1!==a[3],a=(c?"rgba(":"rgb(")+Math.round(d[0]+(a[0]-d[0])*(1-f))+","+Math.round(d[1]+(a[1]-d[1])*(1-f))+","+Math.round(d[2]+(a[2]-d[2])*
	(1-f))+(c?","+(d[3]+(a[3]-d[3])*(1-f)):"")+")"):a=d.input||"none";return a},initDataClasses:function(a){var e=this,f=this.chart,c,b=0,m=f.options.chart.colorCount,h=this.options,n=a.dataClasses.length;this.dataClasses=c=[];this.legendItems=[];g(a.dataClasses,function(a,g){a=d(a);c.push(a);a.color||("category"===h.dataClassColor?(g=f.options.colors,m=g.length,a.color=g[b],a.colorIndex=b,b++,b===m&&(b=0)):a.color=e.tweenColors(D(h.minColor),D(h.maxColor),2>n?.5:g/(n-1)))})},initStops:function(a){this.stops=
	a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];g(this.stops,function(a){a.color=D(a[1])})},setOptions:function(a){B.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,e=d.options.legend||{},c,b;a?(this.left=e=a.attr("x"),this.top=c=a.attr("y"),this.width=b=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-e-b,this.bottom=d.chartHeight-c-a,this.len=this.horiz?b:a,this.pos=this.horiz?
	e:c):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||this.defaultLegendLength},toColor:function(a,d){var e=this.stops,c,b,g=this.dataClasses,k,n;if(g)for(n=g.length;n--;){if(k=g[n],c=k.from,e=k.to,(void 0===c||a>=c)&&(void 0===e||a<=e)){b=k.color;d&&(d.dataClass=n,d.colorIndex=k.colorIndex);break}}else{this.isLog&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min||1);for(n=e.length;n--&&!(a>e[n][0]););c=e[n]||e[n+1];e=e[n+1]||c;a=1-(e[0]-a)/(e[0]-c[0]||1);b=this.tweenColors(c.color,e.color,
	a)}return b},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,B.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.options,e=this.reversed;a=e?1:0;e=e?0:1;a=this.horiz?[a,0,e,0]:[0,e,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:d.stops||[[0,d.minColor],[1,d.maxColor]]}},drawLegendSymbol:function(a,
	d){var e=a.padding,c=a.options,b=this.horiz,g=m(c.symbolWidth,b?this.defaultLegendLength:12),k=m(c.symbolHeight,b?12:this.defaultLegendLength),n=m(c.labelPadding,b?16:30),c=m(c.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,g,k).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=g+e+(b?c:n);this.legendItemHeight=k+e+(b?n:0)},setState:u,visible:!0,setVisible:u,getSeriesExtremes:function(){var a;this.series.length&&(a=this.series[0],this.dataMin=
	a.valueMin,this.dataMax=a.valueMax)},drawCrosshair:function(a,d){var e=d&&d.plotX,c=d&&d.plotY,b,g=this.pos,k=this.len;d&&(b=this.toPixels(d[d.series.colorKey]),b<g?b=g-2:b>g+k&&(b=g+k+2),d.plotX=b,d.plotY=this.len-b,B.prototype.drawCrosshair.call(this,a,d),d.plotX=e,d.plotY=c,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,e,c,b){return q(b)?this.horiz?["M",b-4,this.top-6,"L",b+4,this.top-
	6,b,this.top,"Z"]:["M",this.left,b,"L",this.left-6,b+6,this.left-6,b-6,"Z"]:B.prototype.getPlotLinePath.call(this,a,d,e,c)},update:function(a,e){var f=this.chart,c=f.legend;g(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&c.allItems&&(g(c.allItems,function(a){a.isDataClass&&a.legendGroup.destroy()}),f.isDirtyLegend=!0);f.options[this.coll]=d(this.userOptions,a);B.prototype.update.call(this,a,e);this.legendItem&&(this.setLegendColor(),c.colorizeItem(this,!0))},getDataClassLegendSymbols:function(){var d=
	this,k=this.chart,f=this.legendItems,c=k.options.legend,b=c.valueDecimals,m=c.valueSuffix||"",r;f.length||g(this.dataClasses,function(c,p){var n=!0,v=c.from,q=c.to;r="";void 0===v?r="\x3c ":void 0===q&&(r="\x3e ");void 0!==v&&(r+=a.numberFormat(v,b)+m);void 0!==v&&void 0!==q&&(r+=" - ");void 0!==q&&(r+=a.numberFormat(q,b)+m);f.push(e({chart:k,name:r,options:{},drawLegendSymbol:h.drawRectangle,visible:!0,setState:u,isDataClass:!0,setVisible:function(){n=this.visible=!n;g(d.series,function(a){g(a.points,
	function(a){a.dataClass===p&&a.setVisible(n)})});k.legend.colorizeItem(this,n)}},c))});return f},name:""});g(["fill","stroke"],function(d){a.Fx.prototype[d+"Setter"]=function(){this.elem.attr(d,E.prototype.tweenColors(D(this.start),D(this.end),this.pos),null,!0)}});w(F.prototype,"getAxes",function(a){var d=this.options.colorAxis;a.call(this);this.colorAxis=[];d&&new E(this,d)});w(t.prototype,"getAllItems",function(a){var d=[],e=this.chart.colorAxis[0];e&&e.options&&(e.options.showInLegend&&(e.options.dataClasses?
	d=d.concat(e.getDataClassLegendSymbols()):d.push(e)),g(e.series,function(a){a.options.showInLegend=!1}));return d.concat(a.call(this))});w(t.prototype,"colorizeItem",function(a,d,e){a.call(this,d,e);e&&d.legendColor&&d.legendSymbol.attr({fill:d.legendColor})})})(K);(function(a){var B=a.defined,F=a.each,D=a.noop,E=a.seriesTypes;a.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(a){var e=this,g=a?"show":"hide";F(["graphic","dataLabel"],function(a){if(e[a])e[a][g]()})}};
	a.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:D,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:E.column.prototype.pointAttribs,translateColors:function(){var a=this,e=this.options.nullColor,q=this.colorAxis,t=this.colorKey;F(this.data,function(g){var h=g[t];if(h=g.options.color||(g.isNull?e:q&&void 0!==h?q.toColor(h,g):g.color||a.color))g.color=h})},colorAttribs:function(a){var e=
	{};B(a.color)&&(e[this.colorProp||"fill"]=a.color);return e}}})(K);(function(a){var B=a.color,F=a.ColorAxis,D=a.colorPointMixin,E=a.each,g=a.extend,e=a.isNumber,q=a.map,t=a.merge,h=a.noop,u=a.pick,d=a.isArray,m=a.Point,w=a.Series,p=a.seriesType,k=a.seriesTypes,f=a.splat,c=void 0!==a.doc.documentElement.style.vectorEffect;p("map","scatter",{allAreas:!0,animation:!1,nullColor:"#f7f7f7",borderColor:"#cccccc",borderWidth:1,marker:null,stickyTracking:!1,joinBy:"hc-key",dataLabels:{formatter:function(){return this.point.value},
	inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},turboThreshold:0,tooltip:{followPointer:!0,pointFormat:"{point.name}: {point.value}\x3cbr/\x3e"},states:{normal:{animation:!0},hover:{brightness:.2,halo:null},select:{color:"#cccccc"}}},t(a.colorSeriesMixin,{type:"map",supportsDrilldown:!0,getExtremesFromAll:!0,useMapGeometry:!0,forceDL:!0,searchPoint:h,directTouch:!0,preserveAspectRatio:!0,pointArrayMap:["value"],getBox:function(b){var c=Number.MAX_VALUE,d=-c,f=c,g=-c,k=c,m=c,h=this.xAxis,
	p=this.yAxis,q;E(b||[],function(b){if(b.path){"string"===typeof b.path&&(b.path=a.splitPath(b.path));var n=b.path||[],h=n.length,l=!1,r=-c,p=c,v=-c,t=c,w=b.properties;if(!b._foundBox){for(;h--;)e(n[h])&&(l?(r=Math.max(r,n[h]),p=Math.min(p,n[h])):(v=Math.max(v,n[h]),t=Math.min(t,n[h])),l=!l);b._midX=p+(r-p)*(b.middleX||w&&w["hc-middle-x"]||.5);b._midY=t+(v-t)*(b.middleY||w&&w["hc-middle-y"]||.5);b._maxX=r;b._minX=p;b._maxY=v;b._minY=t;b.labelrank=u(b.labelrank,(r-p)*(v-t));b._foundBox=!0}d=Math.max(d,
	b._maxX);f=Math.min(f,b._minX);g=Math.max(g,b._maxY);k=Math.min(k,b._minY);m=Math.min(b._maxX-b._minX,b._maxY-b._minY,m);q=!0}});q&&(this.minY=Math.min(k,u(this.minY,c)),this.maxY=Math.max(g,u(this.maxY,-c)),this.minX=Math.min(f,u(this.minX,c)),this.maxX=Math.max(d,u(this.maxX,-c)),h&&void 0===h.options.minRange&&(h.minRange=Math.min(5*m,(this.maxX-this.minX)/5,h.minRange||c)),p&&void 0===p.options.minRange&&(p.minRange=Math.min(5*m,(this.maxY-this.minY)/5,p.minRange||c)))},getExtremes:function(){w.prototype.getExtremes.call(this,
	this.valueData);this.chart.hasRendered&&this.isDirtyData&&this.getBox(this.options.data);this.valueMin=this.dataMin;this.valueMax=this.dataMax;this.dataMin=this.minY;this.dataMax=this.maxY},translatePath:function(a){var b=!1,c=this.xAxis,d=this.yAxis,f=c.min,g=c.transA,c=c.minPixelPadding,k=d.min,m=d.transA,d=d.minPixelPadding,h,p=[];if(a)for(h=a.length;h--;)e(a[h])?(p[h]=b?(a[h]-f)*g+c:(a[h]-k)*m+d,b=!b):p[h]=a[h];return p},setData:function(b,c,g,n){var k=this.options,m=this.chart.options.chart,
	h=m&&m.map,r=k.mapData,p=k.joinBy,u=null===p,A=k.keys||this.pointArrayMap,C=[],B={},l,x=this.chart.mapTransforms;!r&&h&&(r="string"===typeof h?a.maps[h]:h);u&&(p="_i");p=this.joinBy=f(p);p[1]||(p[1]=p[0]);b&&E(b,function(a,c){var f=0;if(e(a))b[c]={value:a};else if(d(a)){b[c]={};!k.keys&&a.length>A.length&&"string"===typeof a[0]&&(b[c]["hc-key"]=a[0],++f);for(var g=0;g<A.length;++g,++f)A[g]&&(b[c][A[g]]=a[f])}u&&(b[c]._i=c)});this.getBox(b);if(this.chart.mapTransforms=x=m&&m.mapTransforms||r&&r["hc-transform"]||
	x)for(l in x)x.hasOwnProperty(l)&&l.rotation&&(l.cosAngle=Math.cos(l.rotation),l.sinAngle=Math.sin(l.rotation));if(r){"FeatureCollection"===r.type&&(this.mapTitle=r.title,r=a.geojson(r,this.type,this));this.mapData=r;this.mapMap={};for(l=0;l<r.length;l++)m=r[l],h=m.properties,m._i=l,p[0]&&h&&h[p[0]]&&(m[p[0]]=h[p[0]]),B[m[p[0]]]=m;this.mapMap=B;b&&p[1]&&E(b,function(a){B[a[p[1]]]&&C.push(B[a[p[1]]])});k.allAreas?(this.getBox(r),b=b||[],p[1]&&E(b,function(a){C.push(a[p[1]])}),C="|"+q(C,function(a){return a&&
	a[p[0]]}).join("|")+"|",E(r,function(a){p[0]&&-1!==C.indexOf("|"+a[p[0]]+"|")||(b.push(t(a,{value:null})),n=!1)})):this.getBox(C)}w.prototype.setData.call(this,b,c,g,n)},drawGraph:h,drawDataLabels:h,doFullTranslate:function(){return this.isDirtyData||this.chart.isResizing||this.chart.renderer.isVML||!this.baseTrans},translate:function(){var a=this,c=a.xAxis,d=a.yAxis,e=a.doFullTranslate();a.generatePoints();E(a.data,function(b){b.plotX=c.toPixels(b._midX,!0);b.plotY=d.toPixels(b._midY,!0);e&&(b.shapeType=
	"path",b.shapeArgs={d:a.translatePath(b.path)})});a.translateColors()},pointAttribs:function(a,d){d=k.column.prototype.pointAttribs.call(this,a,d);a.isFading&&delete d.fill;c?d["vector-effect"]="non-scaling-stroke":d["stroke-width"]="inherit";return d},drawPoints:function(){var a=this,d=a.xAxis,e=a.yAxis,f=a.group,g=a.chart,m=g.renderer,h,p,u,q,t=this.baseTrans,w,B,l,x,D;a.transformGroup||(a.transformGroup=m.g().attr({scaleX:1,scaleY:1}).add(f),a.transformGroup.survive=!0);a.doFullTranslate()?(g.hasRendered&&
	E(a.points,function(b){b.shapeArgs&&(b.shapeArgs.fill=a.pointAttribs(b,b.state).fill)}),a.group=a.transformGroup,k.column.prototype.drawPoints.apply(a),a.group=f,E(a.points,function(a){a.graphic&&(a.name&&a.graphic.addClass("highcharts-name-"+a.name.replace(/ /g,"-").toLowerCase()),a.properties&&a.properties["hc-key"]&&a.graphic.addClass("highcharts-key-"+a.properties["hc-key"].toLowerCase()))}),this.baseTrans={originX:d.min-d.minPixelPadding/d.transA,originY:e.min-e.minPixelPadding/e.transA+(e.reversed?
	0:e.len/e.transA),transAX:d.transA,transAY:e.transA},this.transformGroup.animate({translateX:0,translateY:0,scaleX:1,scaleY:1})):(h=d.transA/t.transAX,p=e.transA/t.transAY,u=d.toPixels(t.originX,!0),q=e.toPixels(t.originY,!0),.99<h&&1.01>h&&.99<p&&1.01>p&&(p=h=1,u=Math.round(u),q=Math.round(q)),w=this.transformGroup,g.renderer.globalAnimation?(B=w.attr("translateX"),l=w.attr("translateY"),x=w.attr("scaleX"),D=w.attr("scaleY"),w.attr({animator:0}).animate({animator:1},{step:function(a,b){w.attr({translateX:B+
	(u-B)*b.pos,translateY:l+(q-l)*b.pos,scaleX:x+(h-x)*b.pos,scaleY:D+(p-D)*b.pos})}})):w.attr({translateX:u,translateY:q,scaleX:h,scaleY:p}));c||a.group.element.setAttribute("stroke-width",a.options[a.pointAttrToOptions&&a.pointAttrToOptions["stroke-width"]||"borderWidth"]/(h||1));this.drawMapDataLabels()},drawMapDataLabels:function(){w.prototype.drawDataLabels.call(this);this.dataLabelsGroup&&this.dataLabelsGroup.clip(this.chart.clipRect)},render:function(){var a=this,c=w.prototype.render;a.chart.renderer.isVML&&
	3E3<a.data.length?setTimeout(function(){c.call(a)}):c.call(a)},animate:function(a){var b=this.options.animation,c=this.group,d=this.xAxis,e=this.yAxis,f=d.pos,g=e.pos;this.chart.renderer.isSVG&&(!0===b&&(b={duration:1E3}),a?c.attr({translateX:f+d.len/2,translateY:g+e.len/2,scaleX:.001,scaleY:.001}):(c.animate({translateX:f,translateY:g,scaleX:1,scaleY:1},b),this.animate=null))},animateDrilldown:function(a){var b=this.chart.plotBox,c=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],
	d=c.bBox,e=this.chart.options.drilldown.animation;a||(a=Math.min(d.width/b.width,d.height/b.height),c.shapeArgs={scaleX:a,scaleY:a,translateX:d.x,translateY:d.y},E(this.points,function(a){a.graphic&&a.graphic.attr(c.shapeArgs).animate({scaleX:1,scaleY:1,translateX:0,translateY:0},e)}),this.animate=null)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,animateDrillupFrom:function(a){k.column.prototype.animateDrillupFrom.call(this,a)},animateDrillupTo:function(a){k.column.prototype.animateDrillupTo.call(this,
	a)}}),g({applyOptions:function(a,c){a=m.prototype.applyOptions.call(this,a,c);c=this.series;var b=c.joinBy;c.mapData&&((b=void 0!==a[b[1]]&&c.mapMap[a[b[1]]])?(c.xyFromShape&&(a.x=b._midX,a.y=b._midY),g(a,b)):a.value=a.value||null);return a},onMouseOver:function(a){clearTimeout(this.colorInterval);if(null!==this.value)m.prototype.onMouseOver.call(this,a);else this.series.onMouseOut(a)},onMouseOut:function(){var a=this,c=+new Date,d=B(this.series.pointAttribs(a).fill),e=B(this.series.pointAttribs(a,
	"hover").fill),f=a.series.options.states.normal.animation,g=f&&(f.duration||500);g&&4===d.rgba.length&&4===e.rgba.length&&"select"!==a.state&&(clearTimeout(a.colorInterval),a.colorInterval=setInterval(function(){var b=(new Date-c)/g,f=a.graphic;1<b&&(b=1);f&&f.attr("fill",F.prototype.tweenColors.call(0,e,d,b));1<=b&&clearTimeout(a.colorInterval)},13),a.isFading=!0);m.prototype.onMouseOut.call(a);a.isFading=null},zoomTo:function(){var a=this.series;a.xAxis.setExtremes(this._minX,this._maxX,!1);a.yAxis.setExtremes(this._minY,
	this._maxY,!1);a.chart.redraw()}},D))})(K);(function(a){function B(a){a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)}var F=a.addEvent,D=a.Chart,E=a.doc,g=a.each,e=a.extend,q=a.merge,t=a.pick;a=a.wrap;e(D.prototype,{renderMapNavigation:function(){var a=this,g=this.options.mapNavigation,d=g.buttons,m,w,p,k,f,c=function(b){this.handler.call(a,b);B(b)};if(t(g.enableButtons,g.enabled)&&!a.renderer.forExport)for(m in a.mapNavButtons=[],d)d.hasOwnProperty(m)&&
	(p=q(g.buttonOptions,d[m]),w=p.theme,w.style=q(p.theme.style,p.style),f=(k=w.states)&&k.hover,k=k&&k.select,w=a.renderer.button(p.text,0,0,c,w,f,k,0,"zoomIn"===m?"topbutton":"bottombutton").addClass("highcharts-map-navigation").attr({width:p.width,height:p.height,title:a.options.lang[m],padding:p.padding,zIndex:5}).add(),w.handler=p.onclick,w.align(e(p,{width:w.width,height:2*w.height}),null,p.alignTo),F(w.element,"dblclick",B),a.mapNavButtons.push(w))},fitToBox:function(a,e){g([["x","width"],["y",
	"height"]],function(d){var g=d[0];d=d[1];a[g]+a[d]>e[g]+e[d]&&(a[d]>e[d]?(a[d]=e[d],a[g]=e[g]):a[g]=e[g]+e[d]-a[d]);a[d]>e[d]&&(a[d]=e[d]);a[g]<e[g]&&(a[g]=e[g])});return a},mapZoom:function(a,e,d,g,q){var m=this.xAxis[0],k=m.max-m.min,f=t(e,m.min+k/2),c=k*a,k=this.yAxis[0],b=k.max-k.min,h=t(d,k.min+b/2),b=b*a,f=this.fitToBox({x:f-c*(g?(g-m.pos)/m.len:.5),y:h-b*(q?(q-k.pos)/k.len:.5),width:c,height:b},{x:m.dataMin,y:k.dataMin,width:m.dataMax-m.dataMin,height:k.dataMax-k.dataMin}),c=f.x<=m.dataMin&&
	f.width>=m.dataMax-m.dataMin&&f.y<=k.dataMin&&f.height>=k.dataMax-k.dataMin;g&&(m.fixTo=[g-m.pos,e]);q&&(k.fixTo=[q-k.pos,d]);void 0===a||c?(m.setExtremes(void 0,void 0,!1),k.setExtremes(void 0,void 0,!1)):(m.setExtremes(f.x,f.x+f.width,!1),k.setExtremes(f.y,f.y+f.height,!1));this.redraw()}});a(D.prototype,"render",function(a){var e=this,d=e.options.mapNavigation;e.renderMapNavigation();a.call(e);(t(d.enableDoubleClickZoom,d.enabled)||d.enableDoubleClickZoomTo)&&F(e.container,"dblclick",function(a){e.pointer.onContainerDblClick(a)});
	t(d.enableMouseWheelZoom,d.enabled)&&F(e.container,void 0===E.onmousewheel?"DOMMouseScroll":"mousewheel",function(a){e.pointer.onContainerMouseWheel(a);B(a);return!1})})})(K);(function(a){var B=a.extend,F=a.pick,D=a.Pointer;a=a.wrap;B(D.prototype,{onContainerDblClick:function(a){var g=this.chart;a=this.normalize(a);g.options.mapNavigation.enableDoubleClickZoomTo?g.pointer.inClass(a.target,"highcharts-tracker")&&g.hoverPoint&&g.hoverPoint.zoomTo():g.isInsidePlot(a.chartX-g.plotLeft,a.chartY-g.plotTop)&&
	g.mapZoom(.5,g.xAxis[0].toValue(a.chartX),g.yAxis[0].toValue(a.chartY),a.chartX,a.chartY)},onContainerMouseWheel:function(a){var g=this.chart,e;a=this.normalize(a);e=a.detail||-(a.wheelDelta/120);g.isInsidePlot(a.chartX-g.plotLeft,a.chartY-g.plotTop)&&g.mapZoom(Math.pow(g.options.mapNavigation.mouseWheelSensitivity,e),g.xAxis[0].toValue(a.chartX),g.yAxis[0].toValue(a.chartY),a.chartX,a.chartY)}});a(D.prototype,"zoomOption",function(a){var g=this.chart.options.mapNavigation;F(g.enableTouchZoom,g.enabled)&&
	(this.chart.options.chart.pinchType="xy");a.apply(this,[].slice.call(arguments,1))});a(D.prototype,"pinchTranslate",function(a,g,e,q,t,h,u){a.call(this,g,e,q,t,h,u);"map"===this.chart.options.chart.type&&this.hasZoom&&(a=q.scaleX>q.scaleY,this.pinchTranslateDirection(!a,g,e,q,t,h,u,a?q.scaleX:q.scaleY))})})(K);(function(a){var B=a.seriesType,F=a.seriesTypes;B("mapline","map",{lineWidth:1,fillColor:"none"},{type:"mapline",colorProp:"stroke",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},
	pointAttribs:function(a,B){a=F.map.prototype.pointAttribs.call(this,a,B);a.fill=this.options.fillColor;return a},drawLegendSymbol:F.line.prototype.drawLegendSymbol})})(K);(function(a){var B=a.merge,F=a.Point;a=a.seriesType;a("mappoint","scatter",{dataLabels:{enabled:!0,formatter:function(){return this.point.name},crop:!1,defer:!1,overflow:!1,style:{color:"#000000"}}},{type:"mappoint",forceDL:!0},{applyOptions:function(a,E){a=void 0!==a.lat&&void 0!==a.lon?B(a,this.series.chart.fromLatLonToPoint(a)):
	a;return F.prototype.applyOptions.call(this,a,E)}})})(K);(function(a){var B=a.arrayMax,F=a.arrayMin,D=a.Axis,E=a.color,g=a.each,e=a.isNumber,q=a.noop,t=a.pick,h=a.pInt,u=a.Point,d=a.Series,m=a.seriesType,w=a.seriesTypes;m("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}}},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},
	turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",markerAttribs:q,pointAttribs:function(a,e){var f=t(this.options.marker.fillOpacity,.5);a=d.prototype.pointAttribs.call(this,a,e);1!==f&&(a.fill=E(a.fill).setOpacity(f).get("rgba"));return a},getRadii:function(a,d,e,c){var b,f,g,m=this.zData,k=[],h=this.options,p="width"!==h.sizeBy,q=h.zThreshold,u=d-a;f=0;for(b=m.length;f<b;f++)g=
	m[f],h.sizeByAbsoluteValue&&null!==g&&(g=Math.abs(g-q),d=Math.max(d-q,Math.abs(a-q)),a=0),null===g?g=null:g<a?g=e/2-1:(g=0<u?(g-a)/u:.5,p&&0<=g&&(g=Math.sqrt(g)),g=Math.ceil(e+g*(c-e))/2),k.push(g);this.radii=k},animate:function(a){var d=this.options.animation;a||(g(this.points,function(a){var c=a.graphic;a=a.shapeArgs;c&&a&&(c.attr("r",1),c.animate({r:a.r},d))}),this.animate=null)},translate:function(){var a,d=this.data,f,c,b=this.radii;w.scatter.prototype.translate.call(this);for(a=d.length;a--;)f=
	d[a],c=b?b[a]:0,e(c)&&c>=this.minPxSize/2?(f.shapeType="circle",f.shapeArgs={x:f.plotX,y:f.plotY,r:c},f.dlBox={x:f.plotX-c,y:f.plotY-c,width:2*c,height:2*c}):f.shapeArgs=f.plotY=f.dlBox=void 0},drawLegendSymbol:function(a,d){var e=this.chart.renderer,c=e.fontMetrics(a.itemStyle&&a.itemStyle.fontSize,d.legendItem).f/2;d.legendSymbol=e.circle(c,a.baseline-c,c).attr({zIndex:3}).add(d.legendGroup);d.legendSymbol.isMarker=!0},drawPoints:w.column.prototype.drawPoints,alignDataLabel:w.column.prototype.alignDataLabel,
	buildKDTree:q,applyZones:q},{haloPath:function(a){return u.prototype.haloPath.call(this,this.shapeArgs.r+a)},ttBelow:!1});D.prototype.beforePadding=function(){var a=this,d=this.len,f=this.chart,c=0,b=d,m=this.isXAxis,r=m?"xData":"yData",n=this.min,q={},u=Math.min(f.plotWidth,f.plotHeight),w=Number.MAX_VALUE,H=-Number.MAX_VALUE,D=this.max-n,E=d/D,A=[];g(this.series,function(b){var c=b.options;!b.bubblePadding||!b.visible&&f.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,A.push(b),m&&(g(["minSize",
	"maxSize"],function(a){var b=c[a],d=/%$/.test(b),b=h(b);q[a]=d?u*b/100:b}),b.minPxSize=q.minSize,b.maxPxSize=Math.max(q.maxSize,q.minSize),b=b.zData,b.length&&(w=t(c.zMin,Math.min(w,Math.max(F(b),!1===c.displayNegative?c.zThreshold:-Number.MAX_VALUE))),H=t(c.zMax,Math.max(H,B(b))))))});g(A,function(d){var f=d[r],g=f.length,k;m&&d.getRadii(w,H,d.minPxSize,d.maxPxSize);if(0<D)for(;g--;)e(f[g])&&a.dataMin<=f[g]&&f[g]<=a.dataMax&&(k=d.radii[g],c=Math.min((f[g]-n)*E-k,c),b=Math.max((f[g]-n)*E+k,b))});
	A.length&&0<D&&!this.isLog&&(b-=d,E*=(d+c-b)/d,g([["min","userMin",c],["max","userMax",b]],function(b){void 0===t(a.options[b[0]],a[b[1]])&&(a[b[0]]+=b[2]/E)}))}})(K);(function(a){var B=a.merge,F=a.Point,D=a.seriesType,E=a.seriesTypes;E.bubble&&D("mapbubble","bubble",{animationLimit:500,tooltip:{pointFormat:"{point.name}: {point.z}"}},{xyFromShape:!0,type:"mapbubble",pointArrayMap:["z"],getMapData:E.map.prototype.getMapData,getBox:E.map.prototype.getBox,setData:E.map.prototype.setData},{applyOptions:function(a,
	e){return a&&void 0!==a.lat&&void 0!==a.lon?F.prototype.applyOptions.call(this,B(a,this.series.chart.fromLatLonToPoint(a)),e):E.map.prototype.pointClass.prototype.applyOptions.call(this,a,e)},ttBelow:!1})})(K);(function(a){function B(a,d){var e,g,h,k=!1,f=a.x,c=a.y;a=0;for(e=d.length-1;a<d.length;e=a++)g=d[a][1]>c,h=d[e][1]>c,g!==h&&f<(d[e][0]-d[a][0])*(c-d[a][1])/(d[e][1]-d[a][1])+d[a][0]&&(k=!k);return k}var F=a.Chart,D=a.each,E=a.extend,g=a.error,e=a.format,q=a.merge,t=a.win,h=a.wrap;F.prototype.transformFromLatLon=
	function(a,d){if(void 0===t.proj4)return g(21),{x:0,y:null};a=t.proj4(d.crs,[a.lon,a.lat]);var e=d.cosAngle||d.rotation&&Math.cos(d.rotation),h=d.sinAngle||d.rotation&&Math.sin(d.rotation);a=d.rotation?[a[0]*e+a[1]*h,-a[0]*h+a[1]*e]:a;return{x:((a[0]-(d.xoffset||0))*(d.scale||1)+(d.xpan||0))*(d.jsonres||1)+(d.jsonmarginX||0),y:(((d.yoffset||0)-a[1])*(d.scale||1)+(d.ypan||0))*(d.jsonres||1)-(d.jsonmarginY||0)}};F.prototype.transformToLatLon=function(a,d){if(void 0===t.proj4)g(21);else{a={x:((a.x-(d.jsonmarginX||
	0))/(d.jsonres||1)-(d.xpan||0))/(d.scale||1)+(d.xoffset||0),y:((-a.y-(d.jsonmarginY||0))/(d.jsonres||1)+(d.ypan||0))/(d.scale||1)+(d.yoffset||0)};var e=d.cosAngle||d.rotation&&Math.cos(d.rotation),h=d.sinAngle||d.rotation&&Math.sin(d.rotation);d=t.proj4(d.crs,"WGS84",d.rotation?{x:a.x*e+a.y*-h,y:a.x*h+a.y*e}:a);return{lat:d.y,lon:d.x}}};F.prototype.fromPointToLatLon=function(a){var d=this.mapTransforms,e;if(d){for(e in d)if(d.hasOwnProperty(e)&&d[e].hitZone&&B({x:a.x,y:-a.y},d[e].hitZone.coordinates[0]))return this.transformToLatLon(a,
	d[e]);return this.transformToLatLon(a,d["default"])}g(22)};F.prototype.fromLatLonToPoint=function(a){var d=this.mapTransforms,e,h;if(!d)return g(22),{x:0,y:null};for(e in d)if(d.hasOwnProperty(e)&&d[e].hitZone&&(h=this.transformFromLatLon(a,d[e]),B({x:h.x,y:-h.y},d[e].hitZone.coordinates[0])))return h;return this.transformFromLatLon(a,d["default"])};a.geojson=function(a,d,g){var h=[],m=[],k=function(a){var c,b=a.length;m.push("M");for(c=0;c<b;c++)1===c&&m.push("L"),m.push(a[c][0],-a[c][1])};d=d||
	"map";D(a.features,function(a){var c=a.geometry,b=c.type,c=c.coordinates;a=a.properties;var e;m=[];"map"===d||"mapbubble"===d?("Polygon"===b?(D(c,k),m.push("Z")):"MultiPolygon"===b&&(D(c,function(a){D(a,k)}),m.push("Z")),m.length&&(e={path:m})):"mapline"===d?("LineString"===b?k(c):"MultiLineString"===b&&D(c,k),m.length&&(e={path:m})):"mappoint"===d&&"Point"===b&&(e={x:c[0],y:-c[1]});e&&h.push(E(e,{name:a.name||a.NAME,properties:a}))});g&&a.copyrightShort&&(g.chart.mapCredits=e(g.chart.options.credits.mapText,
	{geojson:a}),g.chart.mapCreditsFull=e(g.chart.options.credits.mapTextFull,{geojson:a}));return h};h(F.prototype,"addCredits",function(a,d){d=q(!0,this.options.credits,d);this.mapCredits&&(d.href=null);a.call(this,d);this.credits&&this.mapCreditsFull&&this.credits.attr({title:this.mapCreditsFull})})})(K);(function(a){function B(a,e,g,h,k,f,c,b){return["M",a+k,e,"L",a+g-f,e,"C",a+g-f/2,e,a+g,e+f/2,a+g,e+f,"L",a+g,e+h-c,"C",a+g,e+h-c/2,a+g-c/2,e+h,a+g-c,e+h,"L",a+b,e+h,"C",a+b/2,e+h,a,e+h-b/2,a,e+h-
	b,"L",a,e+k,"C",a,e+k/2,a+k/2,e,a+k,e,"Z"]}var F=a.Chart,D=a.defaultOptions,E=a.each,g=a.extend,e=a.merge,q=a.pick,t=a.Renderer,h=a.SVGRenderer,u=a.VMLRenderer;g(D.lang,{zoomIn:"Zoom in",zoomOut:"Zoom out"});D.mapNavigation={buttonOptions:{alignTo:"plotBox",align:"left",verticalAlign:"top",x:0,width:18,height:18,padding:5,style:{fontSize:"15px",fontWeight:"bold"},theme:{"stroke-width":1,"text-align":"center"}},buttons:{zoomIn:{onclick:function(){this.mapZoom(.5)},text:"+",y:0},zoomOut:{onclick:function(){this.mapZoom(2)},
	text:"-",y:28}},mouseWheelSensitivity:1.1};a.splitPath=function(a){var d;a=a.replace(/([A-Za-z])/g," $1 ");a=a.replace(/^\s*/,"").replace(/\s*$/,"");a=a.split(/[ ,]+/);for(d=0;d<a.length;d++)/[a-zA-Z]/.test(a[d])||(a[d]=parseFloat(a[d]));return a};a.maps={};h.prototype.symbols.topbutton=function(a,e,g,h,k){return B(a-1,e-1,g,h,k.r,k.r,0,0)};h.prototype.symbols.bottombutton=function(a,e,g,h,k){return B(a-1,e-1,g,h,0,0,k.r,k.r)};t===u&&E(["topbutton","bottombutton"],function(a){u.prototype.symbols[a]=
	h.prototype.symbols[a]});a.Map=a.mapChart=function(d,g,h){var m="string"===typeof d||d.nodeName,k=arguments[m?1:0],f={endOnTick:!1,visible:!1,minPadding:0,maxPadding:0,startOnTick:!1},c,b=a.getOptions().credits;c=k.series;k.series=null;k=e({chart:{panning:"xy",type:"map"},credits:{mapText:q(b.mapText,' \u00a9 \x3ca href\x3d"{geojson.copyrightUrl}"\x3e{geojson.copyrightShort}\x3c/a\x3e'),mapTextFull:q(b.mapTextFull,"{geojson.copyright}")},tooltip:{followTouchMove:!1},xAxis:f,yAxis:e(f,{reversed:!0})},
	k,{chart:{inverted:!1,alignTicks:!1}});k.series=c;return m?new F(d,k,h):new F(k,g)}})(K);(function(a){var B=a.colorPointMixin,F=a.each,D=a.merge,E=a.noop,g=a.pick,e=a.Series,q=a.seriesType,t=a.seriesTypes;q("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{normal:{animation:!0},
	hover:{halo:!1,brightness:.2}}},D(a.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,supportsDrilldown:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var a;t.scatter.prototype.init.apply(this,arguments);a=this.options;a.pointRange=g(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1},translate:function(){var a=this.options,e=this.xAxis,d=this.yAxis,g=function(a,d,e){return Math.min(Math.max(d,a),e)};this.generatePoints();F(this.points,function(h){var m=
	(a.colsize||1)/2,k=(a.rowsize||1)/2,f=g(Math.round(e.len-e.translate(h.x-m,0,1,0,1)),-e.len,2*e.len),m=g(Math.round(e.len-e.translate(h.x+m,0,1,0,1)),-e.len,2*e.len),c=g(Math.round(d.translate(h.y-k,0,1,0,1)),-d.len,2*d.len),k=g(Math.round(d.translate(h.y+k,0,1,0,1)),-d.len,2*d.len);h.plotX=h.clientX=(f+m)/2;h.plotY=(c+k)/2;h.shapeType="rect";h.shapeArgs={x:Math.min(f,m),y:Math.min(c,k),width:Math.abs(m-f),height:Math.abs(k-c)}});this.translateColors()},drawPoints:function(){t.column.prototype.drawPoints.call(this);
	F(this.points,function(a){a.graphic.attr(this.colorAttribs(a,a.state))},this)},animate:E,getBox:E,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,alignDataLabel:t.column.prototype.alignDataLabel,getExtremes:function(){e.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;e.prototype.getExtremes.call(this)}}),B)})(K);(function(a){var B=a.addEvent,F=a.Chart,D=a.createElement,E=a.css,g=a.defaultOptions,e=a.defaultPlotOptions,q=a.each,t=a.extend,h=
	a.fireEvent,u=a.hasTouch,d=a.inArray,m=a.isObject,w=a.Legend,p=a.merge,k=a.pick,f=a.Point,c=a.Series,b=a.seriesTypes,C=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(void 0!==d&&d!==b.hoverPoint)d.onMouseOver(a)};q(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(q(a.trackerGroups,
	function(b){if(a[b]){a[b].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(u)a[b].on("touchstart",d);a.options.cursor&&a[b].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,k=f.options.tooltip.snap,m=a.tracker,p,l=function(){if(f.hoverSeries!==a)a.onMouseOver()},t="rgba(192,192,192,"+
	(C?.0001:.002)+")";if(e&&!c)for(p=e+1;p--;)"M"===d[p]&&d.splice(p+1,0,d[p+1]-k,d[p+2],"L"),(p&&"M"===d[p]||p===e)&&d.splice(p,0,"L",d[p-2]+k,d[p-1]);m?m.attr({d:d}):a.graph&&(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:t,fill:c?t:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*k),zIndex:2}).add(a.group),q([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",l).on("mouseout",function(a){g.onTrackerMouseOut(a)});
	b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",l)}))}};b.column&&(b.column.prototype.drawTracker=a.drawTrackerPoint);b.pie&&(b.pie.prototype.drawTracker=a.drawTrackerPoint);b.scatter&&(b.scatter.prototype.drawTracker=a.drawTrackerPoint);t(w.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart,f="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.seriesGroup.addClass(f);b.css(d.options.itemHoverStyle)}).on("mouseout",
	function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);e.seriesGroup.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):h(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=D("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){h(a.series||a,"checkboxClick",
	{checked:b.target.checked,item:a},function(){a.select()})})}});g.legend.itemStyle.cursor="pointer";t(F.prototype,{showResetZoom:function(){var a=this,b=g.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,f)},zoomOut:function(){var a=this;
	h(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?q(this.axes,function(a){b=a.zoom()}):q(a.xAxis.concat(a.yAxis),function(a){var e=a.axis;c[e.isXAxis?"zoomX":"zoomY"]&&(b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0))});e=this.resetZoomButton;d&&!e?this.showResetZoom():!d&&m(e)&&(this.resetZoomButton=e.destroy());b&&this.redraw(k(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
	e;d&&q(d,function(a){a.setState()});q("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=b.reversed,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],k=(b.pointRange||0)/(f?-2:2),l=b.getExtremes(),n=b.toValue(h-g,!0)+k,k=b.toValue(h+b.len-g,!0)-k,h=h>g;f&&(h=!h,f=n,n=k,k=f);b.series.length&&(h||n>Math.min(l.dataMin,l.min))&&(!h||k<Math.max(l.dataMax,l.max))&&(b.setExtremes(n,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);E(c.container,{cursor:"move"})}});
	t(f.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;a=k(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[d(c,e.data)]=c.options;c.setState(a&&"select");b||q(f.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,e.options.data[d(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;
	if(this.series){if(!b){if(f&&f!==this)f.onMouseOut();if(d.hoverSeries!==c)c.onMouseOver();d.hoverPoint=this}!e||e.shared&&!c.noSharedTooltip?e||this.setState("hover"):(this.setState("hover"),e.refresh(this,a));this.firePointEvent("mouseOver")}},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");b&&-1!==d(this,b)||(this.setState(),a.hoverPoint=null)},importEvents:function(){if(!this.hasImportedEvents){var a=p(this.series.options.point,this.options).events,
	b;this.events=a;for(b in a)B(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,g=f.options.states[a]||{},h=e[f.type].marker&&f.options.marker,m=h&&!1===h.enabled,n=h&&h.states&&h.states[a]||{},q=!1===n.enabled,r=f.stateMarkerGraphic,l=this.marker||{},p=f.chart,u=f.halo,w,y=h&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(q||m&&!1===n.enabled)||a&&l.states&&l.states[a]&&!1===l.states[a].enabled)){y&&
	(w=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),w&&this.graphic.animate(w,k(p.options.chart.animation,n.animation,h.animation)),r&&r.hide();else{if(a&&n){h=l.symbol||f.symbol;r&&r.currentSymbol!==h&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:w.x,y:w.y});else h&&(f.stateMarkerGraphic=r=p.renderer.symbol(h,w.x,w.y,w.width,w.height).add(f.markerGroup),
	r.currentSymbol=h);r&&r.attr(f.pointAttribs(this,a))}r&&(r[a&&p.isInsidePlot(c,d,p.inverted)?"show":"hide"](),r.element.point=this)}(c=g.halo)&&c.size?(u||(f.halo=u=p.renderer.path().add(y?f.markerGroup:f.group)),u[b?"animate":"attr"]({d:this.haloPath(c.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+k(this.colorIndex,f.colorIndex)}),u.attr(t({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):u&&u.animate({d:this.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
	a,this.plotY-a,2*a,2*a)}});t(c.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&h(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&h(this,"mouseOut");!c||a.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=
	b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(q([b.group,b.markerGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(e={"stroke-width":f},d.attr(e);b["zone-graph-"+c];)b["zone-graph-"+c].attr(e),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,
	k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";q(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&q(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});q(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();h(c,f)},show:function(){this.setVisible(!0)},
	hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);h(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(K);(function(a){var B=a.Chart,F=a.each,D=a.inArray,E=a.isObject,g=a.pick,e=a.splat;B.prototype.setResponsive=function(a){var e=this.options.responsive;e&&e.rules&&F(e.rules,function(e){this.matchResponsiveRule(e,a)},this)};B.prototype.matchResponsiveRule=function(e,t){var h=this.respRules,q=e.condition,
	d;d=q.callback||function(){return this.chartWidth<=g(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=g(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=g(q.minWidth,0)&&this.chartHeight>=g(q.minHeight,0)};void 0===e._id&&(e._id=a.uniqueKey());d=d.call(this);!h[e._id]&&d?e.chartOptions&&(h[e._id]=this.currentOptions(e.chartOptions),this.update(e.chartOptions,t)):h[e._id]&&!d&&(this.update(h[e._id],t),delete h[e._id])};B.prototype.currentOptions=function(a){function g(a,d,h){var m,p;for(m in a)if(-1<
	D(m,["series","xAxis","yAxis"]))for(a[m]=e(a[m]),h[m]=[],p=0;p<a[m].length;p++)h[m][p]={},g(a[m][p],d[m][p],h[m][p]);else E(a[m])?(h[m]={},g(a[m],d[m]||{},h[m])):h[m]=d[m]||null}var h={};g(a,this.options,h);return h}})(K);return K});


/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={"title":"United States of America","version":"1.1.2","type":"FeatureCollection","copyright":"Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth","copyrightShort":"Natural Earth","copyrightUrl":"http://www.naturalearthdata.com","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:102004"}},"hc-transform":{"default":{"crs":"+proj=lcc +lat_1=33 +lat_2=45 +lat_0=39 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs","scale":1.5148132E-4,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":-2361356,"yoffset":1398996.8},"us-all-hawaii":{"xpan":190,"ypan":417,"hitZone":{"type":"Polygon","coordinates":[[[1747,3920],[3651,2950],[3651,-999],[1747,-999],[1747,3920]]]},"crs":"+proj=aea +lat_1=8 +lat_2=18 +lat_0=13 +lon_0=-157 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs","scale":1.2309094E-4,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":-338610.47,"yoffset":1022754.3},"us-all-alaska":{"rotation":-0.017453292,"xpan":5,"ypan":357,"hitZone":{"type":"Polygon","coordinates":[[[-999,5188],[-707,5188],[1747,3920],[1747,-999],[-999,-999],[-999,5188]]]},"crs":"+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","scale":5.8439706E-5,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":-1566154,"yoffset":1992671.1}},"features":[{"type":"Feature","id":"US.MA","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.47,"hc-key":"us-ma","hc-a2":"MA","labelrank":"0","hasc":"US.MA","woe-id":"2347580","state-fips":"25","fips":"US25","postal-code":"MA","name":"Massachusetts","country":"United States of America","region":"Northeast","longitude":"-71.99930000000001","woe-name":"Massachusetts","latitude":"42.3739","woe-label":"Massachusetts, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[9430,7889],[9476,7878],[9436,7864],[9417,7844],[9430,7889]]],[[[9314,7915],[9312,7927],[9304,7921],[9278,7938],[9254,7990],[9177,7968],[8997,7925],[8860,7896],[8853,7901],[8856,8080],[8922,8096],[9005,8115],[9005,8115],[9222,8166],[9242,8201],[9300,8236],[9318,8197],[9357,8186],[9312,8147],[9299,8081],[9324,8091],[9365,8074],[9428,7985],[9483,7974],[9525,8007],[9501,8067],[9535,8028],[9549,7982],[9504,7965],[9420,7906],[9411,7955],[9371,7921],[9373,7898],[9339,7878],[9327,7915],[9314,7915]]]]}},{"type":"Feature","id":"US.WA","properties":{"hc-group":"admin1","hc-middle-x":0.56,"hc-middle-y":0.52,"hc-key":"us-wa","hc-a2":"WA","labelrank":"0","hasc":"US.WA","woe-id":"2347606","state-fips":"53","fips":"US53","postal-code":"WA","name":"Washington","country":"United States of America","region":"West","longitude":"-120.361","woe-name":"Washington","latitude":"47.4865","woe-label":"Washington, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77,9797],[-56,9768],[-91,9757],[-86,9712],[-136,9751],[-111,9756],[-77,9797]]],[[[-52,9689],[-85,9658],[-66,9645],[-43,9568],[-77,9588],[-74,9635],[-89,9664],[-52,9690],[-60,9697],[-61,9737],[-31,9701],[-12,9731],[-9,9774],[-33,9788],[-46,9839],[-32,9851],[926,9593],[767,8925],[779,8870],[774,8822],[398,8914],[378,8905],[289,8922],[163,8905],[94,8923],[38,8914],[-10,8925],[-22,8950],[-113,8979],[-207,8965],[-283,9014],[-271,9096],[-280,9134],[-321,9167],[-357,9171],[-365,9207],[-400,9226],[-436,9219],[-460,9259],[-436,9333],[-441,9279],[-416,9297],[-401,9347],[-434,9357],[-429,9395],[-369,9396],[-424,9436],[-424,9523],[-410,9624],[-433,9678],[-428,9749],[-385,9790],[-313,9713],[-183,9655],[-161,9666],[-146,9623],[-100,9637],[-95,9567],[-135,9518],[-77,9566],[-112,9491],[-89,9426],[-154,9433],[-175,9394],[-167,9449],[-222,9394],[-157,9376],[-124,9418],[-82,9426],[-82,9476],[-66,9527],[-18,9570],[-37,9644],[-24,9661],[-52,9689]]]]}},{"type":"Feature","id":"US.CA","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.67,"hc-key":"us-ca","hc-a2":"CA","labelrank":"0","hasc":"US.CA","woe-id":"2347563","state-fips":"6","fips":"US06","postal-code":"CA","name":"California","country":"United States of America","region":"West","longitude":"-119.591","woe-name":"California","latitude":"36.7496","woe-label":"California, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[-833,8186],[-50,7955],[-253,7203],[32,6779],[261,6430],[593,5936],[620,5788],[660,5730],[598,5702],[559,5661],[555,5605],[510,5537],[489,5536],[476,5452],[519,5416],[492,5355],[451,5357],[-76,5426],[-69,5467],[-95,5476],[-84,5583],[-110,5649],[-224,5792],[-276,5799],[-265,5822],[-284,5881],[-342,5885],[-417,5946],[-422,5975],[-484,6035],[-539,6046],[-588,6077],[-659,6091],[-686,6135],[-647,6273],[-691,6316],[-672,6333],[-720,6428],[-742,6442],[-793,6601],[-820,6637],[-816,6709],[-775,6726],[-761,6756],[-778,6807],[-821,6819],[-855,6888],[-842,6929],[-853,6979],[-833,7041],[-810,7042],[-816,6985],[-764,6931],[-772,6991],[-797,7030],[-787,7089],[-738,7083],[-782,7126],[-806,7122],[-833,7050],[-892,7126],[-903,7243],[-983,7395],[-967,7420],[-969,7507],[-943,7553],[-936,7629],[-964,7712],[-999,7766],[-993,7813],[-890,7943],[-849,8038],[-844,8118],[-860,8134],[-833,8186]]]}},{"type":"Feature","id":"US.OR","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.52,"hc-key":"us-or","hc-a2":"OR","labelrank":"0","hasc":"US.OR","woe-id":"2347596","state-fips":"41","fips":"US41","postal-code":"OR","name":"Oregon","country":"United States of America","region":"West","longitude":"-120.386","woe-name":"Oregon","latitude":"43.8333","woe-label":"Oregon, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[-50,7955],[-833,8186],[-851,8223],[-847,8281],[-817,8362],[-827,8415],[-793,8455],[-756,8527],[-714,8570],[-672,8648],[-594,8829],[-582,8877],[-494,9051],[-493,9108],[-468,9158],[-460,9216],[-396,9192],[-367,9202],[-359,9169],[-321,9167],[-280,9134],[-271,9096],[-283,9014],[-207,8965],[-113,8979],[-22,8950],[-10,8925],[38,8914],[94,8923],[163,8905],[289,8922],[378,8905],[398,8914],[774,8822],[785,8775],[821,8744],[823,8698],[776,8646],[718,8545],[624,8450],[615,8403],[662,8361],[616,8265],[510,7813],[-50,7955]]]}},{"type":"Feature","id":"US.WI","properties":{"hc-group":"admin1","hc-middle-x":0.41,"hc-middle-y":0.38,"hc-key":"us-wi","hc-a2":"WI","labelrank":"0","hasc":"US.WI","woe-id":"2347608","state-fips":"55","fips":"US55","postal-code":"WI","name":"Wisconsin","country":"United States of America","region":"Midwest","longitude":"-89.5831","woe-name":"Wisconsin","latitude":"44.3709","woe-label":"Wisconsin, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6206,8297],[6197,8237],[6159,8156],[6136,8180],[6161,8249],[6206,8297]]],[[[5575,7508],[5561,7544],[5494,7563],[5465,7670],[5479,7702],[5445,7758],[5431,7866],[5405,7892],[5360,7903],[5273,7994],[5217,8029],[5181,8035],[5136,8072],[5146,8117],[5144,8214],[5158,8253],[5117,8285],[5116,8322],[5147,8375],[5220,8422],[5214,8573],[5245,8603],[5303,8589],[5410,8635],[5449,8660],[5489,8656],[5481,8617],[5508,8583],[5554,8572],[5588,8553],[5611,8510],[5795,8473],[5849,8447],[5968,8437],[5993,8394],[6045,8372],[6042,8286],[6080,8287],[6071,8242],[6096,8224],[6058,8180],[6028,8078],[6049,8076],[6099,8156],[6129,8170],[6153,8151],[6124,8019],[6136,7996],[6101,7916],[6110,7860],[6082,7742],[6089,7679],[6116,7626],[6119,7543],[5780,7519],[5606,7509],[5575,7508]]]]}},{"type":"Feature","id":"US.ME","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.4,"hc-key":"us-me","hc-a2":"ME","labelrank":"0","hasc":"US.ME","woe-id":"2347578","state-fips":"23","fips":"US23","postal-code":"ME","name":"Maine","country":"United States of America","region":"Northeast","longitude":"-69.1973","woe-name":"Maine","latitude":"45.148","woe-label":"Maine, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[9623,8727],[9643,8763],[9665,8747],[9641,8690],[9623,8727]]],[[[9225,8399],[9079,8830],[9115,8824],[9130,8917],[9168,8971],[9177,9035],[9160,9062],[9160,9140],[9176,9161],[9166,9236],[9238,9459],[9272,9467],[9292,9423],[9319,9415],[9428,9491],[9519,9435],[9630,9097],[9697,9099],[9717,9017],[9747,8995],[9778,9009],[9851,8939],[9818,8875],[9789,8883],[9784,8851],[9706,8811],[9712,8773],[9690,8747],[9669,8782],[9611,8766],[9590,8707],[9615,8647],[9554,8716],[9552,8761],[9517,8719],[9529,8622],[9505,8581],[9483,8586],[9467,8544],[9433,8531],[9420,8493],[9387,8524],[9346,8471],[9362,8439],[9314,8347],[9298,8291],[9235,8354],[9225,8399]]]]}},{"type":"Feature","id":"US.MI","properties":{"hc-group":"admin1","hc-middle-x":0.71,"hc-middle-y":0.67,"hc-key":"us-mi","hc-a2":"MI","labelrank":"0","hasc":"US.MI","woe-id":"2347581","state-fips":"26","fips":"US26","postal-code":"MI","name":"Michigan","country":"United States of America","region":"Midwest","longitude":"-84.9479","woe-name":"Michigan","latitude":"43.4343","woe-label":"Michigan, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6802,8561],[6808,8523],[6764,8521],[6774,8565],[6802,8561]]],[[[5863,9010],[5834,8966],[5759,8913],[5758,8947],[5863,9010]]],[[[6976,7443],[6815,7415],[6718,7400],[6716,7416],[6323,7372],[6364,7423],[6399,7509],[6417,7630],[6409,7695],[6330,7861],[6345,7903],[6322,7979],[6361,8059],[6352,8141],[6381,8159],[6381,8204],[6423,8217],[6453,8283],[6469,8252],[6460,8196],[6479,8180],[6501,8221],[6497,8298],[6533,8342],[6567,8348],[6542,8410],[6593,8461],[6646,8436],[6627,8469],[6669,8467],[6654,8434],[6698,8433],[6726,8400],[6837,8377],[6863,8359],[6884,8307],[6860,8285],[6902,8213],[6903,8115],[6872,8094],[6868,8040],[6821,8014],[6824,7934],[6868,7920],[6900,7950],[6937,8030],[6993,8059],[7042,8027],[7097,7866],[7128,7802],[7124,7704],[7066,7697],[7061,7631],[7021,7590],[7008,7500],[6976,7443]]],[[[5874,8741],[5900,8700],[5901,8651],[5938,8693],[6017,8689],[6049,8673],[6107,8596],[6174,8609],[6192,8589],[6244,8596],[6318,8663],[6430,8674],[6485,8705],[6529,8713],[6518,8645],[6560,8631],[6591,8646],[6609,8627],[6633,8653],[6688,8665],[6692,8589],[6745,8536],[6723,8521],[6631,8516],[6606,8530],[6598,8476],[6541,8514],[6480,8529],[6444,8521],[6426,8490],[6320,8470],[6302,8429],[6244,8388],[6264,8448],[6227,8437],[6192,8395],[6185,8444],[6096,8224],[6071,8242],[6080,8287],[6042,8286],[6045,8372],[5993,8394],[5968,8437],[5849,8447],[5795,8473],[5611,8510],[5588,8553],[5554,8572],[5623,8604],[5661,8642],[5731,8656],[5776,8696],[5805,8702],[5860,8764],[5868,8750],[5893,8802],[5958,8837],[6017,8829],[5931,8757],[5903,8703],[5900,8738],[5874,8741]]]]}},{"type":"Feature","id":"US.NV","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.38,"hc-key":"us-nv","hc-a2":"NV","labelrank":"0","hasc":"US.NV","woe-id":"2347587","state-fips":"32","fips":"US32","postal-code":"NV","name":"Nevada","country":"United States of America","region":"West","longitude":"-117.02","woe-name":"Nevada","latitude":"39.4299","woe-label":"Nevada, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[-50,7955],[510,7813],[897,7727],[1073,7690],[929,6975],[818,6420],[777,6221],[752,6180],[669,6227],[631,6217],[631,6159],[611,6068],[614,5982],[593,5936],[261,6430],[32,6779],[-253,7203],[-50,7955]]]}},{"type":"Feature","id":"US.NM","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.5,"hc-key":"us-nm","hc-a2":"NM","labelrank":"0","hasc":"US.NM","woe-id":"2347590","state-fips":"35","fips":"US35","postal-code":"NM","name":"New Mexico","country":"United States of America","region":"West","longitude":"-106.024","woe-name":"New Mexico","latitude":"34.5002","woe-label":"New Mexico, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[1841,6242],[3091,6104],[3083,6007],[3081,5975],[3072,5970],[2976,4810],[2181,4887],[2208,4823],[1830,4873],[1815,4756],[1630,4782],[1736,5514],[1841,6242]]]}},{"type":"Feature","id":"US.CO","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.5,"hc-key":"us-co","hc-a2":"CO","labelrank":"0","hasc":"US.CO","woe-id":"2347564","state-fips":"8","fips":"US08","postal-code":"CO","name":"Colorado","country":"United States of America","region":"West","longitude":"-105.543","woe-name":"Colorado","latitude":"38.9998","woe-label":"Colorado, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[3091,6104],[1841,6242],[1966,7108],[1990,7269],[2964,7155],[3357,7124],[3339,6866],[3329,6696],[3290,6089],[3091,6104]]]}},{"type":"Feature","id":"US.WY","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.5,"hc-key":"us-wy","hc-a2":"WY","labelrank":"0","hasc":"US.WY","woe-id":"2347609","state-fips":"56","fips":"US56","postal-code":"WY","name":"Wyoming","country":"United States of America","region":"West","longitude":"-107.552","woe-name":"Wyoming","latitude":"42.9999","woe-label":"Wyoming, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[2964,7155],[1990,7269],[1600,7329],[1643,7585],[1677,7785],[1750,8226],[1772,8355],[3056,8191],[3019,7770],[3010,7672],[3002,7575],[2964,7155]]]}},{"type":"Feature","id":"US.KS","properties":{"hc-group":"admin1","hc-middle-x":0.3,"hc-middle-y":0.49,"hc-key":"us-ks","hc-a2":"KS","labelrank":"0","hasc":"US.KS","woe-id":"2347575","state-fips":"20","fips":"US20","postal-code":"KS","name":"Kansas","country":"United States of America","region":"Midwest","longitude":"-98.3309","woe-name":"Kansas","latitude":"38.5","woe-label":"Kansas, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[3339,6866],[4682,6826],[4769,6780],[4726,6705],[4767,6667],[4781,6624],[4824,6600],[4833,6050],[3290,6089],[3329,6696],[3339,6866]]]}},{"type":"Feature","id":"US.NE","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.5,"hc-key":"us-ne","hc-a2":"NE","labelrank":"0","hasc":"US.NE","woe-id":"2347586","state-fips":"31","fips":"US31","postal-code":"NE","name":"Nebraska","country":"United States of America","region":"Midwest","longitude":"-99.68550000000001","woe-name":"Nebraska","latitude":"41.5002","woe-label":"Nebraska, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[4682,6826],[3339,6866],[3357,7124],[2964,7155],[3002,7575],[3010,7672],[4071,7611],[4148,7558],[4194,7574],[4297,7577],[4330,7551],[4409,7521],[4453,7479],[4469,7474],[4478,7398],[4515,7341],[4533,7291],[4529,7228],[4559,7206],[4571,7165],[4579,7031],[4592,6986],[4592,6981],[4592,6981],[4591,6981],[4591,6981],[4619,6915],[4682,6826]]]}},{"type":"Feature","id":"US.OK","properties":{"hc-group":"admin1","hc-middle-x":0.78,"hc-middle-y":0.52,"hc-key":"us-ok","hc-a2":"OK","labelrank":"0","hasc":"US.OK","woe-id":"2347595","state-fips":"40","fips":"US40","postal-code":"OK","name":"Oklahoma","country":"United States of America","region":"South","longitude":"-97.1309","woe-name":"Oklahoma","latitude":"35.452","woe-label":"Oklahoma, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[3290,6089],[4833,6050],[4833,6017],[4835,5920],[4877,5632],[4875,5180],[4790,5207],[4714,5260],[4685,5235],[4632,5257],[4595,5233],[4559,5242],[4474,5191],[4405,5248],[4360,5237],[4347,5258],[4312,5234],[4304,5199],[4283,5247],[4248,5227],[4181,5268],[4121,5246],[4093,5310],[4007,5296],[3908,5334],[3856,5341],[3842,5388],[3753,5388],[3686,5437],[3707,5936],[3081,5975],[3083,6007],[3091,6104],[3290,6089]]]}},{"type":"Feature","id":"US.MO","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.51,"hc-key":"us-mo","hc-a2":"MO","labelrank":"0","hasc":"US.MO","woe-id":"2347584","state-fips":"29","fips":"US29","postal-code":"MO","name":"Missouri","country":"United States of America","region":"Midwest","longitude":"-92.446","woe-name":"Missouri","latitude":"38.5487","woe-label":"Missouri, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[4835,5920],[4833,6017],[4833,6050],[4824,6600],[4781,6624],[4767,6667],[4726,6705],[4769,6780],[4682,6826],[4619,6915],[4591,6981],[4591,6981],[4592,6981],[4846,6977],[5120,6985],[5389,7006],[5449,6947],[5449,6947],[5449,6947],[5436,6893],[5454,6813],[5475,6774],[5540,6711],[5588,6679],[5616,6596],[5642,6567],[5672,6592],[5735,6561],[5692,6420],[5752,6350],[5792,6336],[5873,6276],[5898,6211],[5886,6165],[5918,6121],[5975,6097],[5976,6033],[5956,5988],[5932,6005],[5921,5968],[5911,5955],[5907,5967],[5890,5980],[5893,5966],[5901,5936],[5869,5898],[5888,5872],[5868,5834],[5731,5821],[5790,5904],[5767,5957],[4835,5920]]]}},{"type":"Feature","id":"US.IL","properties":{"hc-group":"admin1","hc-middle-x":0.56,"hc-middle-y":0.45,"hc-key":"us-il","hc-a2":"IL","labelrank":"0","hasc":"US.IL","woe-id":"2347572","state-fips":"17","fips":"US17","postal-code":"IL","name":"Illinois","country":"United States of America","region":"Midwest","longitude":"-89.1991","woe-name":"Illinois","latitude":"39.946","woe-label":"Illinois, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6119,7543],[6121,7488],[6192,7351],[6247,6739],[6226,6674],[6254,6638],[6266,6585],[6244,6520],[6222,6503],[6194,6422],[6176,6404],[6179,6328],[6159,6283],[6171,6241],[6102,6218],[6105,6131],[6015,6162],[5987,6157],[5962,6117],[5975,6097],[5918,6121],[5886,6165],[5898,6211],[5873,6276],[5792,6336],[5752,6350],[5692,6420],[5735,6561],[5672,6592],[5642,6567],[5616,6596],[5588,6679],[5540,6711],[5475,6774],[5454,6813],[5436,6893],[5449,6947],[5449,6947],[5449,6947],[5458,7004],[5496,7020],[5535,7098],[5536,7132],[5509,7160],[5523,7224],[5579,7232],[5646,7276],[5671,7332],[5672,7411],[5625,7441],[5575,7508],[5575,7508],[5606,7509],[5848,7523],[6119,7543]]]}},{"type":"Feature","id":"US.IN","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.43,"hc-key":"us-in","hc-a2":"IN","labelrank":"0","hasc":"US.IN","woe-id":"2347573","state-fips":"18","fips":"US18","postal-code":"IN","name":"Indiana","country":"United States of America","region":"Midwest","longitude":"-86.1396","woe-name":"Indiana","latitude":"39.8874","woe-label":"Indiana, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6192,7351],[6239,7329],[6323,7372],[6716,7416],[6718,7400],[6732,7296],[6797,6730],[6792,6683],[6808,6651],[6737,6617],[6682,6619],[6693,6572],[6657,6540],[6652,6507],[6622,6498],[6608,6438],[6583,6411],[6531,6450],[6485,6413],[6485,6390],[6444,6379],[6426,6401],[6359,6356],[6303,6376],[6269,6350],[6209,6363],[6179,6328],[6176,6404],[6194,6422],[6222,6503],[6244,6520],[6266,6585],[6254,6638],[6226,6674],[6247,6739],[6192,7351]]]}},{"type":"Feature","id":"US.VT","properties":{"hc-group":"admin1","hc-middle-x":0.42,"hc-middle-y":0.43,"hc-key":"us-vt","hc-a2":"VT","labelrank":"0","hasc":"US.VT","woe-id":"2347604","state-fips":"50","fips":"US50","postal-code":"VT","name":"Vermont","country":"United States of America","region":"Northeast","longitude":"-72.7317","woe-name":"Vermont","latitude":"44.0886","woe-label":"Vermont, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8922,8096],[8856,8080],[8807,8284],[8772,8287],[8772,8328],[8740,8402],[8748,8453],[8739,8514],[8720,8537],[8695,8646],[8811,8677],[9024,8736],[9020,8661],[9045,8629],[9033,8585],[8978,8526],[8986,8490],[8981,8392],[8964,8320],[8979,8261],[8979,8148],[9005,8115],[9005,8115],[8922,8096]]]}},{"type":"Feature","id":"US.AR","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.43,"hc-key":"us-ar","hc-a2":"AR","labelrank":"0","hasc":"US.AR","woe-id":"2347562","state-fips":"5","fips":"US05","postal-code":"AR","name":"Arkansas","country":"United States of America","region":"South","longitude":"-92.14279999999999","woe-name":"Arkansas","latitude":"34.7563","woe-label":"Arkansas, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[4975,5016],[4971,5157],[4910,5157],[4875,5180],[4877,5632],[4835,5920],[5767,5957],[5790,5904],[5731,5821],[5868,5834],[5871,5791],[5827,5763],[5835,5714],[5798,5670],[5802,5602],[5762,5567],[5770,5547],[5730,5520],[5706,5470],[5709,5414],[5635,5340],[5647,5309],[5609,5297],[5620,5250],[5583,5215],[5607,5162],[5598,5120],[5618,5077],[5605,5041],[5563,5038],[4975,5016]]]}},{"type":"Feature","id":"US.TX","properties":{"hc-group":"admin1","hc-middle-x":0.69,"hc-middle-y":0.52,"hc-key":"us-tx","hc-a2":"TX","labelrank":"0","hasc":"US.TX","woe-id":"2347602","state-fips":"48","fips":"US48","postal-code":"TX","name":"Texas","country":"United States of America","region":"South","longitude":"-98.7607","woe-name":"Texas","latitude":"31.131","woe-label":"Texas, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4875,5180],[4910,5157],[4971,5157],[4975,5016],[4980,4752],[5033,4679],[5031,4646],[5105,4506],[5093,4447],[5059,4380],[5065,4253],[5047,4228],[5018,4172],[5032,4146],[4989,4147],[4854,4084],[4875,4116],[4831,4102],[4842,4162],[4778,4141],[4769,4106],[4839,4052],[4789,4023],[4801,4063],[4739,3976],[4638,3901],[4557,3881],[4544,3857],[4451,3804],[4448,3787],[4381,3749],[4308,3672],[4340,3735],[4307,3756],[4261,3721],[4306,3712],[4263,3655],[4221,3658],[4249,3617],[4213,3527],[4195,3545],[4141,3510],[4206,3511],[4178,3442],[4232,3206],[4272,3164],[4203,3135],[4114,3192],[4013,3198],[3979,3230],[3915,3245],[3878,3279],[3810,3292],[3795,3375],[3727,3467],[3715,3534],[3721,3603],[3677,3628],[3595,3762],[3548,3801],[3525,3881],[3477,3970],[3469,4021],[3393,4097],[3411,4119],[3365,4132],[3310,4204],[3150,4220],[3103,4248],[3082,4218],[3018,4214],[2959,4096],[2967,4083],[2896,4024],[2861,4031],[2754,4113],[2695,4134],[2651,4187],[2595,4230],[2567,4305],[2573,4370],[2512,4503],[2437,4557],[2309,4714],[2275,4731],[2239,4806],[2208,4823],[2181,4887],[2976,4810],[3072,5970],[3081,5975],[3707,5936],[3686,5437],[3753,5388],[3842,5388],[3856,5341],[3908,5334],[4007,5296],[4093,5310],[4121,5246],[4181,5268],[4248,5227],[4283,5247],[4304,5199],[4312,5234],[4347,5258],[4360,5237],[4405,5248],[4474,5191],[4559,5242],[4595,5233],[4632,5257],[4685,5235],[4714,5260],[4790,5207],[4875,5180]]],[[[4269,3610],[4220,3493],[4219,3420],[4245,3297],[4214,3394],[4222,3530],[4269,3610]]]]}},{"type":"Feature","id":"US.RI","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.78,"hc-key":"us-ri","hc-a2":"RI","labelrank":"0","hasc":"US.RI","woe-id":"2347598","state-fips":"44","fips":"US44","postal-code":"RI","name":"Rhode Island","country":"United States of America","region":"Northeast","longitude":"-71.5082","woe-name":"Rhode Island","latitude":"41.6242","woe-label":"Rhode Island, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[9339,7878],[9325,7871],[9314,7915],[9327,7915],[9339,7878]]],[[[9177,7968],[9254,7990],[9278,7938],[9304,7921],[9320,7866],[9285,7851],[9279,7822],[9216,7790],[9212,7845],[9177,7968]]]]}},{"type":"Feature","id":"US.AL","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.42,"hc-key":"us-al","hc-a2":"AL","labelrank":"0","hasc":"US.AL","woe-id":"2347559","state-fips":"1","fips":"US01","postal-code":"AL","name":"Alabama","country":"United States of America","region":"South","longitude":"-86.7184","woe-name":"Alabama","latitude":"32.8551","woe-label":"Alabama, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6487,4443],[6440,4378],[6291,4361],[6336,4375],[6317,4398],[6267,4399],[6216,4788],[6236,5574],[6215,5600],[6213,5603],[6762,5652],[6912,5135],[6947,5053],[6998,4970],[6970,4930],[6958,4846],[6990,4774],[6983,4704],[7015,4637],[6436,4574],[6431,4541],[6487,4486],[6487,4443]]]}},{"type":"Feature","id":"US.MS","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.48,"hc-key":"us-ms","hc-a2":"MS","labelrank":"0","hasc":"US.MS","woe-id":"2347583","state-fips":"28","fips":"US28","postal-code":"MS","name":"Mississippi","country":"United States of America","region":"South","longitude":"-89.71890000000001","woe-name":"Mississippi","latitude":"32.8657","woe-label":"Mississippi, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6267,4399],[6164,4396],[6059,4360],[6017,4328],[5936,4451],[5955,4536],[5523,4510],[5540,4526],[5522,4581],[5545,4585],[5545,4642],[5565,4662],[5584,4738],[5636,4781],[5670,4868],[5629,4895],[5611,4977],[5627,5018],[5605,5041],[5618,5077],[5598,5120],[5607,5162],[5583,5215],[5620,5250],[5609,5297],[5647,5309],[5635,5340],[5709,5414],[5706,5470],[5730,5520],[5770,5547],[5762,5567],[6122,5592],[6215,5600],[6236,5574],[6216,4788],[6267,4399]]]}},{"type":"Feature","id":"US.NC","properties":{"hc-group":"admin1","hc-middle-x":0.62,"hc-middle-y":0.5,"hc-key":"us-nc","hc-a2":"NC","labelrank":"0","hasc":"US.NC","woe-id":"2347592","state-fips":"37","fips":"US37","postal-code":"NC","name":"North Carolina","country":"United States of America","region":"South","longitude":"-78.866","woe-name":"North Carolina","latitude":"35.6152","woe-label":"North Carolina, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8716,6394],[8720,6381],[8694,6389],[8694,6389],[8704,6391],[8705,6390],[8709,6392],[8712,6393],[8716,6394]]],[[[8727,6396],[8756,6332],[8852,6203],[8782,6278],[8722,6395],[8724,6396],[8727,6396]]],[[[7532,6183],[7623,6187],[7858,6219],[8691,6388],[8768,6281],[8670,6318],[8707,6291],[8620,6230],[8584,6234],[8581,6204],[8719,6244],[8742,6161],[8737,6222],[8760,6252],[8795,6220],[8797,6153],[8772,6164],[8750,6091],[8709,6073],[8638,6097],[8638,6070],[8551,6078],[8664,6053],[8635,6009],[8661,6003],[8610,5957],[8551,5988],[8590,5949],[8631,5940],[8676,5955],[8686,5995],[8721,5956],[8670,5890],[8565,5865],[8469,5764],[8443,5714],[8432,5616],[8368,5624],[8302,5600],[8029,5790],[7791,5756],[7782,5790],[7714,5830],[7457,5802],[7290,5724],[7210,5711],[7034,5685],[7038,5756],[7073,5762],[7085,5807],[7131,5847],[7188,5859],[7269,5928],[7298,5973],[7352,6010],[7365,5989],[7437,6050],[7464,6038],[7490,6093],[7523,6123],[7532,6183]]]]}},{"type":"Feature","id":"US.VA","properties":{"hc-group":"admin1","hc-middle-x":0.64,"hc-middle-y":0.54,"hc-key":"us-va","hc-a2":"VA","labelrank":"0","hasc":"US.VA","woe-id":"2347605","state-fips":"51","fips":"US51","postal-code":"VA","name":"Virginia","country":"United States of America","region":"South","longitude":"-78.2431","woe-name":"Virginia","latitude":"37.7403","woe-label":"Virginia, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8722,6395],[8696,6432],[8704,6391],[8694,6389],[8694,6389],[8686,6398],[8691,6388],[7858,6219],[7623,6187],[7532,6183],[7472,6170],[7116,6120],[7221,6173],[7268,6217],[7309,6294],[7363,6332],[7431,6411],[7470,6351],[7530,6341],[7567,6378],[7595,6360],[7649,6382],[7664,6419],[7690,6412],[7773,6459],[7767,6505],[7840,6674],[7857,6759],[7932,6729],[7974,6848],[7998,6837],[8048,6900],[8072,6952],[8076,7028],[8188,6969],[8198,7020],[8256,7009],[8251,6984],[8341,6945],[8347,6939],[8353,6939],[8367,6892],[8334,6870],[8323,6802],[8347,6786],[8385,6812],[8429,6763],[8484,6768],[8507,6740],[8571,6721],[8572,6647],[8536,6648],[8499,6683],[8431,6711],[8532,6636],[8597,6606],[8561,6578],[8558,6548],[8577,6545],[8611,6494],[8586,6478],[8526,6534],[8449,6533],[8518,6510],[8580,6459],[8619,6482],[8679,6482],[8727,6396],[8724,6396],[8722,6395]],[[8558,6548],[8552,6548],[8552,6548],[8552,6548],[8484,6605],[8532,6551],[8552,6548],[8552,6548],[8552,6548],[8557,6544],[8558,6548]]],[[[8709,6392],[8713,6400],[8716,6394],[8712,6393],[8709,6392]]],[[[8765,6797],[8756,6760],[8761,6796],[8765,6797]]],[[[8688,6764],[8691,6772],[8739,6789],[8726,6737],[8674,6599],[8696,6561],[8678,6528],[8652,6583],[8652,6652],[8688,6764]]]]}},{"type":"Feature","id":"US.IA","properties":{"hc-group":"admin1","hc-middle-x":0.35,"hc-middle-y":0.49,"hc-key":"us-ia","hc-a2":"IA","labelrank":"0","hasc":"US.IA","woe-id":"2347574","state-fips":"19","fips":"US19","postal-code":"IA","name":"Iowa","country":"United States of America","region":"Midwest","longitude":"-93.3891","woe-name":"Iowa","latitude":"42.0423","woe-label":"Iowa, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[5575,7508],[5625,7441],[5672,7411],[5671,7332],[5646,7276],[5579,7232],[5523,7224],[5509,7160],[5536,7132],[5535,7098],[5496,7020],[5458,7004],[5449,6947],[5449,6947],[5449,6947],[5389,7006],[5120,6985],[4846,6977],[4592,6981],[4591,6981],[4579,7031],[4571,7165],[4559,7206],[4529,7228],[4533,7291],[4515,7341],[4478,7398],[4469,7474],[4453,7479],[4423,7540],[4459,7636],[4438,7663],[4433,7734],[4459,7735],[5137,7745],[5445,7758],[5479,7702],[5465,7670],[5494,7563],[5561,7544],[5577,7513],[5575,7508],[5575,7508]]]}},{"type":"Feature","id":"US.MD","properties":{"hc-group":"admin1","hc-middle-x":0.61,"hc-middle-y":0.27,"hc-key":"us-md","hc-a2":"MD","labelrank":"0","hasc":"US.MD","woe-id":"2347579","state-fips":"24","fips":"US24","postal-code":"MD","name":"Maryland","country":"United States of America","region":"South","longitude":"-77.0454","woe-name":"Maryland","latitude":"39.3874","woe-label":"Maryland, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8761,6796],[8769,6819],[8765,6797],[8761,6796]]],[[[8779,6915],[8779,6884],[8777,6914],[8777,6914],[8779,6915]]],[[[8739,6789],[8691,6772],[8688,6764],[8647,6746],[8650,6806],[8590,6833],[8592,6815],[8525,6862],[8581,6899],[8555,6926],[8511,6936],[8544,6974],[8512,6986],[8496,7036],[8530,7108],[8537,7165],[8497,7093],[8472,7099],[8469,7056],[8432,7052],[8471,7014],[8458,6959],[8483,6868],[8513,6820],[8462,6849],[8543,6778],[8548,6753],[8491,6782],[8433,6785],[8382,6834],[8354,6797],[8335,6827],[8370,6891],[8367,6916],[8385,6943],[8341,6945],[8251,6984],[8256,7009],[8198,7020],[8162,7087],[8101,7099],[8046,7067],[8043,7043],[8000,7038],[7977,7057],[7949,7003],[7928,7007],[7857,6922],[7835,7053],[8176,7119],[8559,7201],[8650,6887],[8771,6913],[8770,6856],[8753,6848],[8739,6789]]]]}},{"type":"Feature","id":"US.DE","properties":{"hc-group":"admin1","hc-middle-x":0.91,"hc-middle-y":0.77,"hc-key":"us-de","hc-a2":"DE","labelrank":"0","hasc":"US.DE","woe-id":"2347566","state-fips":"10","fips":"US10","postal-code":"DE","name":"Delaware","country":"United States of America","region":"South","longitude":"-75.41119999999999","woe-name":"Delaware","latitude":"38.8657","woe-label":"Delaware, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8777,6914],[8771,6915],[8771,6913],[8650,6887],[8559,7201],[8589,7239],[8625,7239],[8601,7183],[8613,7145],[8652,7114],[8675,7051],[8735,6995],[8751,6999],[8779,6915],[8777,6914],[8777,6914]]]}},{"type":"Feature","id":"US.PA","properties":{"hc-group":"admin1","hc-middle-x":0.5,"hc-middle-y":0.49,"hc-key":"us-pa","hc-a2":"PA","labelrank":"0","hasc":"US.PA","woe-id":"2347597","state-fips":"42","fips":"US42","postal-code":"PA","name":"Pennsylvania","country":"United States of America","region":"Northeast","longitude":"-77.60939999999999","woe-name":"Pennsylvania","latitude":"40.8601","woe-label":"Pennsylvania, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8611,7549],[8632,7530],[8615,7490],[8627,7443],[8646,7444],[8739,7361],[8691,7310],[8673,7276],[8625,7239],[8589,7239],[8559,7201],[8176,7119],[7835,7053],[7630,7017],[7589,7253],[7589,7253],[7530,7595],[7556,7610],[7662,7693],[7674,7625],[8514,7797],[8573,7765],[8588,7712],[8673,7663],[8673,7663],[8611,7549]]]}},{"type":"Feature","id":"US.NJ","properties":{"hc-group":"admin1","hc-middle-x":0.68,"hc-middle-y":0.64,"hc-key":"us-nj","hc-a2":"NJ","labelrank":"0","hasc":"US.NJ","woe-id":"2347589","state-fips":"34","fips":"US34","postal-code":"NJ","name":"New Jersey","country":"United States of America","region":"Northeast","longitude":"-74.4653","woe-name":"New Jersey","latitude":"40.0449","woe-label":"New Jersey, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8611,7549],[8673,7663],[8759,7635],[8846,7608],[8840,7532],[8810,7504],[8805,7466],[8866,7456],[8875,7438],[8886,7281],[8853,7228],[8849,7172],[8812,7122],[8784,7047],[8766,7040],[8769,7097],[8716,7095],[8623,7151],[8610,7186],[8624,7231],[8676,7269],[8691,7310],[8739,7361],[8646,7444],[8627,7443],[8615,7490],[8632,7530],[8611,7549]]]}},{"type":"Feature","id":"US.NY","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.49,"hc-key":"us-ny","hc-a2":"NY","labelrank":"0","hasc":"US.NY","woe-id":"2347591","state-fips":"36","fips":"US36","postal-code":"NY","name":"New York","country":"United States of America","region":"Northeast","longitude":"-75.32420000000001","woe-name":"New York","latitude":"43.1988","woe-label":"New York, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8673,7663],[8588,7712],[8573,7765],[8514,7797],[7674,7625],[7662,7693],[7763,7795],[7803,7872],[7754,7932],[7747,7976],[7812,8010],[7918,8040],[7988,8041],[8031,8026],[8061,8043],[8133,8055],[8180,8080],[8224,8141],[8264,8164],[8243,8232],[8257,8274],[8225,8259],[8202,8296],[8230,8345],[8280,8379],[8297,8437],[8358,8526],[8422,8581],[8453,8585],[8695,8646],[8720,8537],[8739,8514],[8748,8453],[8740,8402],[8772,8328],[8772,8287],[8807,8284],[8856,8080],[8853,7901],[8860,7896],[8896,7702],[8912,7685],[8874,7645],[8896,7623],[8881,7575],[8930,7617],[8982,7620],[9002,7641],[9094,7671],[9134,7722],[9173,7697],[9177,7721],[9184,7702],[9231,7730],[9141,7649],[9083,7619],[9032,7570],[8936,7519],[8857,7498],[8812,7468],[8814,7503],[8840,7506],[8858,7554],[8843,7544],[8846,7608],[8759,7635],[8695,7656],[8673,7663],[8673,7663]]]}},{"type":"Feature","id":"US.ID","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.75,"hc-key":"us-id","hc-a2":"ID","labelrank":"0","hasc":"US.ID","woe-id":"2347571","state-fips":"16","fips":"US16","postal-code":"ID","name":"Idaho","country":"United States of America","region":"West","longitude":"-114.133","woe-name":"Idaho","latitude":"43.7825","woe-label":"Idaho, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[926,9593],[1093,9555],[1036,9301],[1076,9210],[1061,9142],[1117,9085],[1172,8979],[1170,8959],[1219,8896],[1258,8897],[1253,8859],[1219,8796],[1204,8727],[1211,8698],[1177,8675],[1167,8620],[1200,8590],[1278,8630],[1303,8596],[1303,8522],[1338,8434],[1326,8419],[1347,8377],[1374,8375],[1391,8331],[1392,8280],[1415,8254],[1451,8281],[1508,8261],[1536,8282],[1614,8258],[1671,8261],[1686,8296],[1713,8295],[1750,8226],[1677,7785],[1643,7585],[1393,7629],[1073,7690],[897,7727],[510,7813],[616,8265],[662,8361],[615,8403],[624,8450],[718,8545],[776,8646],[823,8698],[821,8744],[785,8775],[774,8822],[779,8870],[767,8925],[926,9593]]]}},{"type":"Feature","id":"US.SD","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.44,"hc-key":"us-sd","hc-a2":"SD","labelrank":"0","hasc":"US.SD","woe-id":"2347600","state-fips":"46","fips":"US46","postal-code":"SD","name":"South Dakota","country":"United States of America","region":"Midwest","longitude":"-100.255","woe-name":"South Dakota","latitude":"44.4711","woe-label":"South Dakota, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[3010,7672],[3019,7770],[3056,8191],[3059,8191],[3080,8436],[4231,8374],[4444,8372],[4429,8325],[4387,8283],[4419,8232],[4462,8203],[4459,7735],[4433,7734],[4438,7663],[4459,7636],[4423,7540],[4453,7479],[4409,7521],[4330,7551],[4297,7577],[4194,7574],[4148,7558],[4071,7611],[3010,7672]]]}},{"type":"Feature","id":"US.CT","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.5,"hc-key":"us-ct","hc-a2":"CT","labelrank":"0","hasc":"US.CT","woe-id":"2347565","state-fips":"9","fips":"US09","postal-code":"CT","name":"Connecticut","country":"United States of America","region":"Northeast","longitude":"-72.7594","woe-name":"Connecticut","latitude":"41.6486","woe-label":"Connecticut, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[9216,7790],[9204,7796],[9095,7743],[9023,7721],[8972,7689],[8896,7623],[8874,7645],[8912,7685],[8896,7702],[8860,7896],[8997,7925],[9177,7968],[9212,7845],[9216,7790]]]}},{"type":"Feature","id":"US.NH","properties":{"hc-group":"admin1","hc-middle-x":0.38,"hc-middle-y":0.57,"hc-key":"us-nh","hc-a2":"NH","labelrank":"0","hasc":"US.NH","woe-id":"2347588","state-fips":"33","fips":"US33","postal-code":"NH","name":"New Hampshire","country":"United States of America","region":"Northeast","longitude":"-71.6301","woe-name":"New Hampshire","latitude":"43.5993","woe-label":"New Hampshire, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[9298,8291],[9306,8288],[9300,8236],[9242,8201],[9222,8166],[9005,8115],[9005,8115],[8979,8148],[8979,8261],[8964,8320],[8981,8392],[8986,8490],[8978,8526],[9033,8585],[9045,8629],[9020,8661],[9024,8736],[9036,8814],[9079,8830],[9225,8399],[9235,8354],[9298,8291]]]}},{"type":"Feature","id":"US.KY","properties":{"hc-group":"admin1","hc-middle-x":0.65,"hc-middle-y":0.5,"hc-key":"us-ky","hc-a2":"KY","labelrank":"0","hasc":"US.KY","woe-id":"2347576","state-fips":"21","fips":"US21","postal-code":"KY","name":"Kentucky","country":"United States of America","region":"South","longitude":"-85.5729","woe-name":"Kentucky","latitude":"37.3994","woe-label":"Kentucky, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5893,5966],[5890,5980],[5907,5967],[5893,5966]]],[[[5921,5968],[5932,6005],[5956,5988],[5976,6033],[5975,6097],[5962,6117],[5987,6157],[6015,6162],[6105,6131],[6102,6218],[6171,6241],[6159,6283],[6179,6328],[6209,6363],[6269,6350],[6303,6376],[6359,6356],[6426,6401],[6444,6379],[6485,6390],[6485,6413],[6531,6450],[6583,6411],[6608,6438],[6622,6498],[6652,6507],[6657,6540],[6693,6572],[6682,6619],[6737,6617],[6808,6651],[6792,6683],[6797,6730],[6873,6741],[6900,6725],[6933,6672],[7001,6669],[7036,6641],[7069,6664],[7119,6643],[7198,6692],[7216,6653],[7270,6617],[7270,6617],[7270,6617],[7272,6548],[7358,6439],[7431,6411],[7363,6332],[7309,6294],[7268,6217],[7221,6173],[7116,6120],[7104,6113],[6814,6086],[6751,6077],[6516,6061],[6250,6032],[6200,6040],[6210,5991],[5921,5968]]],[[[7270,6617],[7271,6617],[7270,6617],[7270,6617],[7270,6617],[7270,6617]]]]}},{"type":"Feature","id":"US.OH","properties":{"hc-group":"admin1","hc-middle-x":0.45,"hc-middle-y":0.53,"hc-key":"us-oh","hc-a2":"OH","labelrank":"0","hasc":"US.OH","woe-id":"2347594","state-fips":"39","fips":"US39","postal-code":"OH","name":"Ohio","country":"United States of America","region":"Midwest","longitude":"-82.67189999999999","woe-name":"Ohio","latitude":"40.0924","woe-label":"Ohio, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6718,7400],[6815,7415],[6976,7443],[7095,7408],[7082,7394],[7173,7383],[7258,7426],[7329,7440],[7383,7503],[7530,7595],[7589,7253],[7561,7233],[7587,7158],[7558,7018],[7564,6981],[7504,6911],[7454,6903],[7419,6863],[7399,6809],[7416,6775],[7391,6755],[7354,6783],[7333,6723],[7346,6679],[7321,6631],[7271,6617],[7270,6617],[7216,6653],[7198,6692],[7119,6643],[7069,6664],[7036,6641],[7001,6669],[6933,6672],[6900,6725],[6873,6741],[6797,6730],[6732,7296],[6718,7400]]]}},{"type":"Feature","id":"US.TN","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.54,"hc-key":"us-tn","hc-a2":"TN","labelrank":"0","hasc":"US.TN","woe-id":"2347601","state-fips":"47","fips":"US47","postal-code":"TN","name":"Tennessee","country":"United States of America","region":"South","longitude":"-86.3415","woe-name":"Tennessee","latitude":"35.7514","woe-label":"Tennessee, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6215,5600],[6122,5592],[5762,5567],[5802,5602],[5798,5670],[5835,5714],[5827,5763],[5871,5791],[5868,5834],[5888,5872],[5869,5898],[5901,5936],[5893,5966],[5907,5967],[5911,5955],[5921,5968],[6210,5991],[6200,6040],[6250,6032],[6516,6061],[6751,6077],[6814,6086],[7104,6113],[7116,6120],[7472,6170],[7532,6183],[7523,6123],[7490,6093],[7464,6038],[7437,6050],[7365,5989],[7352,6010],[7298,5973],[7269,5928],[7188,5859],[7131,5847],[7085,5807],[7073,5762],[7038,5756],[7034,5685],[6918,5671],[6762,5652],[6213,5603],[6215,5600]]]}},{"type":"Feature","id":"US.WV","properties":{"hc-group":"admin1","hc-middle-x":0.35,"hc-middle-y":0.56,"hc-key":"us-wv","hc-a2":"WV","labelrank":"0","hasc":"US.WV","woe-id":"2347607","state-fips":"54","fips":"US54","postal-code":"WV","name":"West Virginia","country":"United States of America","region":"South","longitude":"-80.7128","woe-name":"West Virginia","latitude":"38.6422","woe-label":"West Virginia, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[7270,6617],[7271,6617],[7321,6631],[7346,6679],[7333,6723],[7354,6783],[7391,6755],[7416,6775],[7399,6809],[7419,6863],[7454,6903],[7504,6911],[7564,6981],[7558,7018],[7587,7158],[7561,7233],[7589,7253],[7630,7017],[7835,7053],[7857,6922],[7928,7007],[7949,7003],[7977,7057],[8000,7038],[8043,7043],[8046,7067],[8101,7099],[8162,7087],[8198,7020],[8188,6969],[8076,7028],[8072,6952],[8048,6900],[7998,6837],[7974,6848],[7932,6729],[7857,6759],[7840,6674],[7767,6505],[7773,6459],[7690,6412],[7664,6419],[7649,6382],[7595,6360],[7567,6378],[7530,6341],[7470,6351],[7431,6411],[7358,6439],[7272,6548],[7270,6617],[7270,6617],[7270,6617],[7270,6617],[7270,6617]]]}},{"type":"Feature","id":"US.DC","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.14,"hc-key":"us-dc","hc-a2":"DC","labelrank":"9","hasc":"US.DC","woe-id":"2347567","state-fips":"11","fips":"US11","postal-code":"DC","name":"District of Columbia","country":"United States of America","region":"South","longitude":"-77.01130000000001","woe-name":"District of Columbia","latitude":"38.8922","woe-label":"District of Columbia, US, United States","type":"Federal District"},"geometry":{"type":"Polygon","coordinates":[[[8367,6916],[8366,6929],[8353,6939],[8347,6939],[8341,6945],[8385,6943],[8367,6916]]]}},{"type":"Feature","id":"US.LA","properties":{"hc-group":"admin1","hc-middle-x":0.34,"hc-middle-y":0.46,"hc-key":"us-la","hc-a2":"LA","labelrank":"0","hasc":"US.LA","woe-id":"2347577","state-fips":"22","fips":"US22","postal-code":"LA","name":"Louisiana","country":"United States of America","region":"South","longitude":"-91.9991","woe-name":"Louisiana","latitude":"30.5274","woe-label":"Louisiana, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6017,4328],[5915,4340],[5856,4368],[5812,4302],[5834,4283],[5904,4280],[5937,4313],[5992,4313],[5957,4259],[6001,4245],[6035,4298],[6067,4259],[5982,4181],[6027,4123],[6107,4114],[6148,4081],[6125,4035],[6070,4042],[6042,4077],[5966,4094],[5980,4115],[5902,4141],[5913,4064],[5876,4028],[5860,4066],[5811,4082],[5780,4036],[5724,4031],[5620,4068],[5631,4121],[5569,4128],[5532,4184],[5493,4173],[5494,4203],[5430,4175],[5437,4145],[5478,4154],[5526,4139],[5500,4112],[5431,4136],[5399,4121],[5305,4135],[5186,4176],[5128,4173],[5042,4153],[5047,4228],[5065,4253],[5059,4380],[5093,4447],[5105,4506],[5031,4646],[5033,4679],[4980,4752],[4975,5016],[5563,5038],[5605,5041],[5627,5018],[5611,4977],[5629,4895],[5670,4868],[5636,4781],[5584,4738],[5565,4662],[5545,4642],[5545,4585],[5522,4581],[5540,4526],[5523,4510],[5955,4536],[5936,4451],[6017,4328]]]}},{"type":"Feature","id":"US.FL","properties":{"hc-group":"admin1","hc-middle-x":0.77,"hc-middle-y":0.5,"hc-key":"us-fl","hc-a2":"FL","labelrank":"0","hasc":"US.FL","woe-id":"2347568","state-fips":"12","fips":"US12","postal-code":"FL","name":"Florida","country":"United States of America","region":"South","longitude":"-81.6228","woe-name":"Florida","latitude":"28.1568","woe-label":"Florida, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[6487,4443],[6487,4486],[6431,4541],[6436,4574],[7015,4637],[7055,4568],[7649,4609],[7670,4559],[7699,4566],[7687,4660],[7713,4686],[7808,4673],[7822,4672],[7849,4570],[7908,4430],[8008,4269],[8125,4130],[8113,4109],[8144,4012],[8198,3936],[8297,3758],[8321,3651],[8331,3476],[8302,3361],[8313,3273],[8270,3209],[8291,3273],[8273,3290],[8230,3255],[8194,3260],[8141,3234],[8115,3258],[8115,3303],[8070,3379],[7979,3429],[7953,3420],[7907,3543],[7846,3536],[7839,3654],[7796,3674],[7819,3634],[7779,3640],[7675,3779],[7722,3884],[7712,3915],[7671,3899],[7670,3851],[7622,3872],[7618,3966],[7635,4045],[7626,4157],[7576,4229],[7525,4222],[7473,4277],[7425,4302],[7349,4395],[7265,4433],[7186,4403],[7198,4370],[7162,4370],[7148,4336],[7067,4277],[6979,4284],[6986,4316],[6958,4349],[6892,4391],[6798,4429],[6694,4444],[6468,4388],[6505,4431],[6487,4443]]]}},{"type":"Feature","id":"US.GA","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.52,"hc-key":"us-ga","hc-a2":"GA","labelrank":"0","hasc":"US.GA","woe-id":"2347569","state-fips":"13","fips":"US13","postal-code":"GA","name":"Georgia","country":"United States of America","region":"South","longitude":"-83.4078","woe-name":"Georgia","latitude":"32.8547","woe-label":"Georgia, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[7713,4686],[7687,4660],[7699,4566],[7670,4559],[7649,4609],[7055,4568],[7015,4637],[6983,4704],[6990,4774],[6958,4846],[6970,4930],[6998,4970],[6947,5053],[6912,5135],[6762,5652],[6918,5671],[7034,5685],[7210,5711],[7290,5724],[7249,5641],[7323,5596],[7364,5593],[7401,5526],[7444,5475],[7523,5430],[7538,5402],[7600,5369],[7606,5340],[7651,5293],[7708,5272],[7750,5169],[7800,5140],[7844,5042],[7887,5035],[7901,5029],[7811,4893],[7836,4826],[7798,4798],[7817,4730],[7808,4673],[7713,4686]]]}},{"type":"Feature","id":"US.SC","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.35,"hc-key":"us-sc","hc-a2":"SC","labelrank":"0","hasc":"US.SC","woe-id":"2347599","state-fips":"45","fips":"US45","postal-code":"SC","name":"South Carolina","country":"United States of America","region":"South","longitude":"-80.6471","woe-name":"South Carolina","latitude":"33.8578","woe-label":"South Carolina, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[8302,5600],[8236,5523],[8205,5458],[8206,5396],[8173,5348],[8140,5346],[8131,5311],[8056,5219],[7989,5173],[7913,5166],[7971,5149],[7887,5035],[7844,5042],[7800,5140],[7750,5169],[7708,5272],[7651,5293],[7606,5340],[7600,5369],[7538,5402],[7523,5430],[7444,5475],[7401,5526],[7364,5593],[7323,5596],[7249,5641],[7290,5724],[7457,5802],[7714,5830],[7782,5790],[7791,5756],[8029,5790],[8302,5600]]]}},{"type":"Feature","id":"US.MN","properties":{"hc-group":"admin1","hc-middle-x":0.38,"hc-middle-y":0.6,"hc-key":"us-mn","hc-a2":"MN","labelrank":"0","hasc":"US.MN","woe-id":"2347582","state-fips":"27","fips":"US27","postal-code":"MN","name":"Minnesota","country":"United States of America","region":"Midwest","longitude":"-93.364","woe-name":"Minnesota","latitude":"46.0592","woe-label":"Minnesota, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[4333,9174],[4688,9173],[4690,9272],[4748,9253],[4770,9125],[4791,9104],[4854,9085],[4916,9083],[4938,9052],[4984,9060],[5024,9084],[5073,9082],[5132,9063],[5181,8985],[5194,9006],[5240,9014],[5304,8955],[5351,8941],[5438,8996],[5463,8964],[5570,8974],[5607,8949],[5668,8950],[5592,8895],[5514,8864],[5432,8802],[5349,8700],[5245,8603],[5214,8573],[5220,8422],[5147,8375],[5116,8322],[5117,8285],[5158,8253],[5144,8214],[5146,8117],[5136,8072],[5181,8035],[5217,8029],[5273,7994],[5360,7903],[5405,7892],[5431,7866],[5445,7758],[5137,7745],[4459,7735],[4462,8203],[4419,8232],[4387,8283],[4429,8325],[4444,8372],[4436,8472],[4402,8555],[4409,8628],[4397,8650],[4394,8777],[4347,8957],[4343,9053],[4353,9083],[4333,9174]]]}},{"type":"Feature","id":"US.MT","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.53,"hc-key":"us-mt","hc-a2":"MT","labelrank":"0","hasc":"US.MT","woe-id":"2347585","state-fips":"30","fips":"US30","postal-code":"MT","name":"Montana","country":"United States of America","region":"West","longitude":"-110.044","woe-name":"Montana","latitude":"46.9965","woe-label":"Montana, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[1093,9555],[1689,9433],[3150,9234],[3084,8486],[3080,8436],[3059,8191],[3056,8191],[1772,8355],[1750,8226],[1713,8295],[1686,8296],[1671,8261],[1614,8258],[1536,8282],[1508,8261],[1451,8281],[1415,8254],[1392,8280],[1391,8331],[1374,8375],[1347,8377],[1326,8419],[1338,8434],[1303,8522],[1303,8596],[1278,8630],[1200,8590],[1167,8620],[1177,8675],[1211,8698],[1204,8727],[1219,8796],[1253,8859],[1258,8897],[1219,8896],[1170,8959],[1172,8979],[1117,9085],[1061,9142],[1076,9210],[1036,9301],[1093,9555]]]}},{"type":"Feature","id":"US.ND","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.5,"hc-key":"us-nd","hc-a2":"ND","labelrank":"0","hasc":"US.ND","woe-id":"2347593","state-fips":"38","fips":"US38","postal-code":"ND","name":"North Dakota","country":"United States of America","region":"Midwest","longitude":"-100.302","woe-name":"North Dakota","latitude":"47.4675","woe-label":"North Dakota, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[3080,8436],[3084,8486],[3150,9234],[3468,9209],[4333,9174],[4353,9083],[4343,9053],[4347,8957],[4394,8777],[4397,8650],[4409,8628],[4402,8555],[4436,8472],[4444,8372],[4231,8374],[3080,8436]]]}},{"type":"Feature","id":"US.AZ","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.45,"hc-key":"us-az","hc-a2":"AZ","labelrank":"0","hasc":"US.AZ","woe-id":"2347561","state-fips":"4","fips":"US04","postal-code":"AZ","name":"Arizona","country":"United States of America","region":"West","longitude":"-111.935","woe-name":"Arizona","latitude":"34.3046","woe-label":"Arizona, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[1630,4782],[1196,4850],[1092,4906],[418,5307],[451,5357],[492,5355],[519,5416],[476,5452],[489,5536],[510,5537],[555,5605],[559,5661],[598,5702],[660,5730],[620,5788],[593,5936],[614,5982],[611,6068],[631,6159],[631,6217],[669,6227],[752,6180],[777,6221],[818,6420],[1488,6297],[1841,6242],[1736,5514],[1630,4782]]]}},{"type":"Feature","id":"US.UT","properties":{"hc-group":"admin1","hc-middle-x":0.52,"hc-middle-y":0.59,"hc-key":"us-ut","hc-a2":"UT","labelrank":"0","hasc":"US.UT","woe-id":"2347603","state-fips":"49","fips":"US49","postal-code":"UT","name":"Utah","country":"United States of America","region":"West","longitude":"-111.544","woe-name":"Utah","latitude":"39.5007","woe-label":"Utah, US, United States","type":"State"},"geometry":{"type":"Polygon","coordinates":[[[1841,6242],[1488,6297],[818,6420],[929,6975],[1073,7690],[1393,7629],[1643,7585],[1600,7329],[1990,7269],[1966,7108],[1841,6242]]]}},{"type":"Feature","id":"US.HI","properties":{"hc-group":"admin1","hc-middle-x":0.87,"hc-middle-y":0.79,"hc-key":"us-hi","hc-a2":"HI","labelrank":"0","hasc":"US.HI","woe-id":"2347570","state-fips":"15","fips":"US15","postal-code":"HI","name":"Hawaii","country":"United States of America","region":"West","longitude":"-157.999","woe-name":"Hawaii","latitude":"21.4919","woe-label":"Hawaii, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2871.1,2945.9],[2875.2,2942.7],[2879.9,2943.9],[2887,2943.5],[2908.4,2936],[2926.2,2927],[2959.3,2906.2],[2969.8,2895.8],[2975.6,2888.1],[2975.6,2868.8],[2976.2,2860.2],[2981.8,2860.4],[2989.5,2864.1],[2995.3,2860.2],[2998,2855.8],[2997.4,2846.7],[3000.1,2841.1],[3003.5,2836],[3013.7,2826.7],[3024.4,2822.1],[3028.7,2818.5],[3031,2814.1],[3030.4,2808.4],[3019,2794.3],[3010.1,2790.9],[2997.5,2778.6],[2988.9,2776],[2988.6,2773.6],[2981.4,2771.8],[2975.3,2767.2],[2953.3,2760.6],[2944.8,2762.6],[2939.9,2762.7],[2935.5,2761.3],[2924.6,2753.9],[2920.9,2749.4],[2913.7,2747.3],[2906.4,2742.2],[2896.2,2736.4],[2893.2,2735.4],[2884.5,2727],[2883,2723.6],[2883.3,2715.9],[2873.3,2705.7],[2870.1,2696.8],[2867.2,2693.6],[2858.8,2686.4],[2857,2687.4],[2857.1,2692],[2852.9,2695.4],[2844.7,2699.6],[2830,2708.8],[2817.8,2712.1],[2815.1,2719.8],[2812.5,2720.6],[2810.9,2726.2],[2809.3,2735.1],[2811.5,2745.8],[2816,2776.4],[2815.6,2781.7],[2812.9,2786.6],[2805.6,2807.3],[2801.6,2814.3],[2802.1,2818.9],[2799.7,2823.2],[2796.3,2833.9],[2792.8,2839.1],[2789.8,2841.4],[2785.4,2846.6],[2780.6,2859.9],[2784.8,2870.8],[2795.1,2879.5],[2796.2,2883.5],[2799,2885.8],[2807.4,2888.9],[2813.4,2898.4],[2817.9,2906.3],[2822.3,2911.4],[2825.4,2911.5],[2827.7,2920.9],[2826.3,2924.9],[2822.9,2928.1],[2815.9,2938.7],[2813,2947.9],[2812.4,2962.2],[2816.2,2969.6],[2818.8,2972],[2826,2972],[2844.7,2968],[2850,2958],[2857.7,2955],[2862.8,2952.2],[2866.3,2948],[2871.1,2945.9]]],[[[2685.2,3028],[2683.1,3024.1],[2677.4,3024.1],[2672.1,3025],[2662.7,3023],[2656.2,3022.3],[2651.9,3026.6],[2654.3,3029.7],[2658.6,3033.4],[2670.2,3040.4],[2675.5,3042.3],[2679.6,3041.9],[2684.7,3036.2],[2682.1,3030],[2685.2,3028]]],[[[2609.3,3070.6],[2599.6,3070.1],[2595.6,3075.8],[2594.6,3080.7],[2594.3,3089.5],[2593.6,3094],[2590.2,3096],[2581.9,3099.3],[2579.4,3103.3],[2581,3107.7],[2585.7,3110.1],[2594,3111.1],[2613.5,3108.3],[2622.3,3100.4],[2628.7,3093.1],[2631.3,3086.9],[2630,3083.4],[2625.7,3076.7],[2616.7,3072.6],[2609.3,3070.6]]],[[[2673.9,3132.2],[2675.6,3130.2],[2683.4,3127.1],[2684.3,3124.4],[2686.7,3123.7],[2687.2,3118.4],[2690,3115.9],[2695.5,3106.3],[2699,3106.6],[2701.3,3109.2],[2705.1,3109.1],[2716.1,3110.5],[2722.5,3115.1],[2725.7,3116.2],[2732.1,3116.5],[2743.2,3114.2],[2746.4,3112.2],[2747.4,3109.8],[2752.3,3104.5],[2758.6,3099.6],[2758.8,3097.7],[2762.9,3098.7],[2765.5,3096.6],[2767.9,3092.2],[2774.8,3091.2],[2781.6,3088],[2791.4,3084.8],[2795.9,3075.7],[2794.9,3067.4],[2791.3,3060.7],[2786.3,3059.3],[2782.2,3053.3],[2776.8,3053.2],[2766,3047.7],[2754.9,3048.2],[2751.2,3048],[2731.5,3038.5],[2721.5,3040.8],[2718.9,3040.1],[2710.5,3039.7],[2704.9,3044.9],[2701.6,3049.9],[2703.3,3051.3],[2703.4,3055.1],[2701.8,3068.9],[2700.2,3072.7],[2700.3,3077],[2699,3080.5],[2694.8,3083.7],[2688.7,3082.3],[2687.7,3079.4],[2685.2,3078.9],[2679.4,3082.6],[2675,3083.4],[2670.7,3086.1],[2667.9,3085.8],[2660.5,3094.3],[2655,3101.5],[2654.7,3106.1],[2652.7,3108.6],[2654.7,3118.8],[2656.5,3123.8],[2658.6,3127.1],[2661.1,3127.3],[2664.7,3132],[2668.7,3131.6],[2672.3,3133.2],[2673.9,3132.2]]],[[[2542.4,3172.8],[2550.3,3172.5],[2552.8,3171.9],[2554.4,3169.4],[2557.4,3169.4],[2586.4,3165],[2594.1,3164.7],[2596.9,3170.6],[2598.9,3171.1],[2601.5,3167.6],[2602.5,3163.6],[2612.6,3161],[2622.6,3161.3],[2627,3161.9],[2631.9,3163.6],[2637.2,3163.5],[2642.1,3162.2],[2644.1,3162.6],[2646.1,3160.1],[2650.7,3159.2],[2646.9,3152.3],[2640.8,3146.4],[2633.3,3142.2],[2625.8,3139.1],[2618.1,3137.5],[2610.3,3138.3],[2602.5,3139.8],[2587.1,3143.9],[2577.6,3147.2],[2554.7,3145.6],[2547.6,3144.5],[2537.6,3144.7],[2533.7,3146.2],[2531.4,3149.3],[2531.3,3153.2],[2535.1,3159.1],[2538.7,3160.4],[2541.9,3164.2],[2542.9,3168.2],[2540.2,3172.9],[2542.4,3172.8]]],[[[2414.1,3252.1],[2415.3,3248.5],[2417.5,3247.3],[2418.6,3243.6],[2422.1,3243.3],[2425.5,3238.6],[2425.5,3233.8],[2422.8,3232.6],[2424.3,3223.3],[2428.6,3221.7],[2432,3216.6],[2435,3215.5],[2437.4,3213.2],[2440.6,3217.4],[2437.6,3219.4],[2437.9,3221.8],[2440.1,3222.8],[2448,3221.2],[2445.1,3218.3],[2444.8,3211.6],[2448.1,3209.6],[2451.4,3205.2],[2450.5,3202.8],[2453.3,3197.1],[2461.8,3192],[2463,3190.8],[2453.8,3181.6],[2451.7,3180.9],[2451.1,3184.2],[2449.4,3185.6],[2439.8,3183.8],[2433.5,3180],[2429,3180.6],[2426.4,3184.7],[2416.6,3189.1],[2413.7,3194.2],[2413.7,3196.2],[2409.6,3193],[2411.6,3190.7],[2403.3,3190.2],[2404.6,3191.8],[2399.9,3193],[2399.1,3199.7],[2405.5,3202.8],[2406.3,3204.6],[2400.6,3208.2],[2398.9,3204.7],[2394.5,3208.7],[2395.9,3202.7],[2394.8,3202],[2388.7,3207.1],[2390.1,3203.7],[2397.6,3196.7],[2396.6,3193.5],[2393,3192],[2373.9,3188.4],[2369.7,3190.8],[2368,3197.9],[2365.9,3203.5],[2361.4,3209.6],[2357.7,3211.5],[2356.8,3217.1],[2355.5,3220.1],[2349.9,3224.5],[2347.5,3228.2],[2347.2,3238.6],[2345.9,3240.5],[2337.4,3247.6],[2345.9,3249.6],[2354.3,3250],[2368.8,3249.7],[2370.5,3253.5],[2374.1,3255.5],[2379.9,3260.1],[2379.6,3261.3],[2382.9,3267.5],[2390.2,3273.8],[2396.5,3275.6],[2400.5,3274.5],[2406.2,3268.8],[2409.8,3262],[2408.9,3258.2],[2414.1,3252.1]]],[[[1955.8,3294.7],[1953.2,3293.9],[1948.4,3296.6],[1946,3304.1],[1946.6,3308.8],[1948.8,3313.7],[1956.7,3321.5],[1963,3326.1],[1971.1,3330.6],[1973.3,3335.9],[1973.1,3339.8],[1976.7,3341.3],[1980.1,3341.2],[1983.8,3339.7],[1985.5,3336],[1981.3,3331.1],[1979.8,3326.6],[1981.2,3321],[1978.5,3317.4],[1972.1,3314.3],[1968.3,3313.2],[1961.2,3308.2],[1959.7,3305],[1955.8,3294.7]]],[[[2117.8,3386.1],[2120.7,3384.6],[2123.8,3384.8],[2127.6,3382.7],[2129.1,3379.5],[2132.9,3376.7],[2134.9,3369.7],[2136.6,3368.7],[2136.1,3360.5],[2134.2,3358],[2131.3,3350.1],[2128.4,3348.5],[2128,3342.6],[2128.8,3334.9],[2128,3329.3],[2123,3328.3],[2125.2,3324.9],[2121.7,3323.7],[2118.3,3320.9],[2116.9,3318.4],[2109.4,3313],[2107.3,3310.8],[2098.5,3314],[2089,3314.5],[2078.6,3316.4],[2076.9,3318],[2074,3315.9],[2073.1,3317.6],[2068.2,3320.6],[2065.1,3326.1],[2062.8,3326.7],[2060,3329.4],[2056.1,3330],[2050.6,3332.5],[2043.4,3334.4],[2041.2,3340.1],[2038.1,3343],[2038.3,3352.8],[2040.3,3353.5],[2048.5,3363],[2049.2,3368.3],[2052.4,3371.8],[2062.1,3374.2],[2067.8,3377.5],[2071.4,3380.6],[2076.1,3382.7],[2077.8,3384.8],[2086,3386.8],[2088.1,3384.2],[2095.7,3382.1],[2095.7,3385.2],[2099.3,3386.6],[2107.5,3385.9],[2111.6,3384.7],[2115.5,3387.5],[2117.8,3386.1]]]]}},{"type":"Feature","id":"US.AK","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.33,"hc-key":"us-ak","hc-a2":"AK","labelrank":"0","hasc":"US.AK","woe-id":"2347560","state-fips":"2","fips":"US02","postal-code":"AK","name":"Alaska","country":"United States of America","region":"West","longitude":"-151.604","woe-name":"Alaska","latitude":"65.3609","woe-label":"Alaska, US, United States","type":"State"},"geometry":{"type":"MultiPolygon","coordinates":[[[[322,4275],[321,4280],[339,4292],[360,4283],[392,4281],[424,4297],[443,4318],[478,4297],[476,4285],[459,4279],[461,4263],[472,4263],[490,4288],[507,4272],[503,4256],[519,4248],[528,4258],[548,4257],[582,4240],[564,4217],[594,4212],[584,4202],[611,4198],[655,4200],[684,4194],[704,4174],[712,4178],[723,4165],[746,4156],[788,4155],[808,4136],[832,4134],[851,4144],[877,4147],[901,4136],[913,4120],[929,4117],[943,4100],[957,4101],[989,3159],[1039,3148],[1057,3163],[1084,3166],[1081,3138],[1107,3121],[1113,3108],[1167,3060],[1180,3028],[1208,3055],[1220,3056],[1229,3102],[1271,3127],[1297,3104],[1295,3091],[1335,3059],[1347,3039],[1367,3031],[1397,3002],[1477,2890],[1491,2875],[1490,2858],[1504,2853],[1511,2833],[1523,2836],[1613,2802],[1622,2783],[1617,2766],[1636,2722],[1622,2680],[1606,2663],[1592,2664],[1577,2702],[1585,2718],[1577,2755],[1555,2778],[1526,2764],[1520,2723],[1499,2746],[1510,2753],[1513,2796],[1473,2829],[1468,2844],[1424,2880],[1406,2878],[1414,2903],[1397,2917],[1390,2938],[1366,2963],[1364,2998],[1355,2976],[1348,2979],[1354,2974],[1334,2977],[1331,2984],[1344,2982],[1324,2991],[1283,3075],[1286,3041],[1310,2985],[1307,2971],[1288,2985],[1264,2982],[1266,2998],[1249,3031],[1245,3018],[1199,3046],[1202,3028],[1224,3026],[1254,2995],[1255,2977],[1229,2976],[1225,2963],[1169,2999],[1134,3041],[1085,3062],[1050,3083],[1069,3102],[1060,3119],[1025,3098],[969,3113],[977,3128],[953,3122],[899,3136],[842,3125],[826,3141],[792,3157],[802,3194],[788,3179],[783,3158],[761,3173],[742,3174],[759,3196],[727,3195],[706,3205],[716,3212],[705,3227],[679,3222],[658,3229],[636,3221],[637,3247],[620,3199],[631,3213],[642,3184],[628,3167],[614,3132],[576,3140],[552,3130],[545,3108],[537,3114],[509,3089],[521,3115],[493,3078],[478,3071],[455,3077],[433,3070],[426,3086],[455,3099],[483,3126],[457,3115],[438,3133],[464,3170],[478,3204],[473,3223],[491,3228],[524,3249],[543,3235],[554,3240],[588,3228],[544,3260],[549,3268],[527,3271],[524,3284],[490,3256],[469,3252],[424,3205],[428,3196],[407,3182],[408,3170],[377,3133],[343,3131],[339,3114],[317,3109],[309,3075],[334,3075],[352,3048],[305,3020],[308,3008],[287,2998],[271,2977],[246,2981],[222,2955],[212,2964],[200,2941],[186,2947],[152,2925],[163,2924],[146,2893],[133,2901],[107,2879],[96,2891],[89,2869],[73,2877],[24,2852],[40,2842],[7,2817],[-44,2808],[-61,2821],[-118,2794],[-130,2803],[-155,2792],[-167,2799],[-155,2816],[-167,2823],[-200,2781],[-223,2772],[-230,2808],[-252,2775],[-262,2795],[-286,2772],[-278,2800],[-223,2823],[-171,2853],[-115,2850],[-113,2838],[-84,2825],[-99,2845],[-80,2870],[-38,2892],[12,2907],[27,2896],[31,2922],[57,2946],[97,2964],[126,3051],[154,3072],[156,3089],[95,3074],[79,3099],[90,3123],[60,3099],[61,3072],[44,3066],[28,3121],[8,3111],[-6,3123],[-7,3147],[-37,3132],[-62,3132],[-69,3120],[-112,3131],[-85,3135],[-82,3162],[-87,3191],[-63,3208],[-76,3277],[-72,3305],[-89,3269],[-149,3267],[-172,3278],[-167,3295],[-184,3332],[-198,3342],[-212,3370],[-166,3383],[-134,3368],[-125,3345],[-109,3358],[-131,3376],[-161,3385],[-185,3401],[-173,3407],[-186,3433],[-191,3419],[-205,3460],[-194,3469],[-211,3484],[-189,3485],[-198,3504],[-175,3498],[-170,3526],[-130,3555],[-118,3553],[-108,3582],[-85,3606],[-61,3612],[-46,3602],[-34,3577],[-22,3576],[7,3591],[28,3609],[31,3600],[76,3594],[100,3613],[106,3664],[92,3688],[125,3701],[117,3734],[102,3721],[73,3725],[45,3711],[20,3709],[8,3729],[-28,3742],[-59,3740],[-101,3771],[-108,3789],[-98,3804],[-111,3837],[-95,3829],[-73,3837],[-119,3868],[-138,3897],[-124,3909],[-95,3914],[-87,3908],[-68,3921],[-2,3935],[36,3937],[67,3929],[47,3893],[52,3877],[111,3858],[119,3845],[140,3868],[162,3859],[147,3882],[128,3880],[135,3893],[119,3943],[132,3945],[139,3923],[133,3914],[145,3887],[163,3891],[175,3870],[196,3867],[201,3879],[179,3900],[152,3894],[142,3915],[154,3949],[129,3950],[86,3976],[89,4000],[86,4032],[55,4092],[40,4106],[27,4135],[45,4151],[57,4180],[76,4171],[124,4160],[156,4170],[182,4190],[189,4216],[201,4233],[224,4253],[229,4246],[253,4268],[256,4258],[287,4258],[317,4277],[322,4275]],[[322,4275],[323,4272],[323,4272],[323,4272],[311,4248],[326,4263],[323,4272],[323,4272],[323,4272],[324,4274],[322,4275]]],[[[-905,2721],[-922,2724],[-904,2733],[-898,2724],[-905,2721]]],[[[-739,2715],[-724,2712],[-729,2702],[-734,2709],[-739,2715]]],[[[-645,2693],[-651,2700],[-684,2693],[-643,2725],[-634,2718],[-623,2738],[-597,2740],[-595,2719],[-626,2714],[-645,2693]]],[[[-439,2748],[-458,2742],[-469,2755],[-457,2762],[-439,2748]]],[[[-268,2722],[-267,2733],[-255,2724],[-252,2715],[-268,2722]]],[[[-303,2804],[-293,2800],[-290,2768],[-309,2757],[-338,2767],[-359,2754],[-385,2761],[-386,2779],[-369,2783],[-354,2800],[-335,2796],[-303,2804]]],[[[-59,2737],[-58,2733],[-70,2740],[-62,2746],[-59,2737]]],[[[1485,2651],[1482,2635],[1455,2672],[1458,2688],[1473,2659],[1485,2651]]],[[[1568,2687],[1567,2665],[1547,2678],[1548,2705],[1568,2687]]],[[[-81,2759],[-83,2747],[-107,2735],[-88,2750],[-81,2759]]],[[[-100,2783],[-114,2781],[-119,2759],[-135,2762],[-131,2784],[-100,2783]]],[[[1530,2716],[1542,2706],[1538,2690],[1528,2711],[1530,2716]]],[[[1427,2708],[1429,2706],[1439,2711],[1430,2683],[1427,2708]]],[[[1439,2743],[1430,2731],[1420,2735],[1421,2742],[1439,2743]]],[[[1555,2775],[1573,2753],[1578,2721],[1569,2699],[1529,2721],[1537,2731],[1531,2760],[1555,2775]]],[[[1408,2747],[1414,2765],[1435,2776],[1437,2763],[1408,2747]]],[[[1480,2788],[1503,2783],[1494,2762],[1468,2778],[1475,2803],[1480,2788]]],[[[1467,2811],[1469,2795],[1445,2798],[1451,2810],[1467,2811]]],[[[1495,2807],[1510,2793],[1504,2784],[1485,2797],[1482,2819],[1495,2807]]],[[[253,2834],[251,2826],[235,2816],[239,2829],[253,2834]]],[[[276,2825],[279,2820],[259,2824],[263,2832],[276,2825]]],[[[1448,2845],[1470,2828],[1458,2816],[1449,2816],[1448,2845]]],[[[333,2880],[345,2878],[321,2864],[319,2872],[333,2880]]],[[[1295,2870],[1295,2846],[1283,2843],[1288,2862],[1295,2870]]],[[[1246,2943],[1241,2926],[1234,2942],[1237,2951],[1246,2943]]],[[[345,2973],[360,2960],[353,2961],[333,2971],[345,2973]]],[[[370,2989],[380,3007],[393,2992],[407,2995],[413,2978],[404,2970],[365,2959],[347,2974],[353,2990],[370,2989]]],[[[389,3006],[380,3014],[397,3021],[396,3012],[389,3006]]],[[[-42,3112],[-58,3105],[-53,3120],[-31,3126],[-42,3112]]],[[[643,3141],[641,3133],[628,3129],[639,3150],[643,3141]]],[[[683,3167],[692,3162],[662,3126],[639,3113],[651,3133],[678,3156],[683,3167]]],[[[-250,3366],[-233,3350],[-243,3328],[-239,3312],[-272,3312],[-294,3323],[-315,3350],[-321,3371],[-293,3362],[-286,3369],[-250,3366]]],[[[712,3177],[732,3173],[708,3154],[714,3166],[712,3177]]],[[[655,3184],[659,3177],[651,3159],[646,3171],[655,3184]]],[[[-553,3496],[-557,3490],[-570,3515],[-566,3524],[-553,3496]]],[[[735,3177],[725,3175],[725,3181],[752,3187],[735,3177]]],[[[-478,2741],[-509,2724],[-476,2727],[-492,2716],[-574,2704],[-597,2711],[-551,2713],[-526,2758],[-501,2752],[-507,2737],[-487,2749],[-478,2741]]],[[[1452,2689],[1461,2728],[1438,2724],[1443,2751],[1435,2778],[1419,2778],[1414,2794],[1439,2796],[1449,2769],[1468,2766],[1516,2700],[1532,2652],[1522,2641],[1495,2679],[1475,2669],[1476,2693],[1452,2689]]],[[[1292,2882],[1302,2902],[1330,2883],[1354,2825],[1358,2769],[1323,2816],[1325,2832],[1311,2830],[1320,2852],[1308,2856],[1308,2872],[1292,2882]]],[[[362,2955],[355,2938],[381,2954],[386,2936],[380,2918],[395,2917],[382,2900],[349,2913],[366,2899],[363,2889],[337,2894],[303,2868],[278,2838],[275,2849],[298,2883],[281,2883],[271,2862],[256,2873],[259,2892],[247,2904],[253,2919],[284,2939],[295,2933],[298,2909],[306,2934],[302,2950],[318,2956],[321,2936],[329,2963],[348,2946],[340,2965],[362,2955]]],[[[1277,2920],[1294,2891],[1278,2884],[1270,2906],[1243,2925],[1247,2941],[1271,2972],[1321,2953],[1323,2931],[1299,2928],[1309,2919],[1325,2926],[1333,2899],[1320,2896],[1277,2920]]],[[[1355,2884],[1341,2912],[1326,2962],[1314,2989],[1331,2969],[1358,2968],[1379,2937],[1376,2926],[1357,2961],[1361,2939],[1379,2919],[1383,2888],[1350,2853],[1347,2875],[1355,2884]]],[[[-347,3767],[-339,3759],[-322,3764],[-307,3758],[-307,3734],[-290,3713],[-256,3692],[-266,3681],[-286,3692],[-315,3679],[-313,3698],[-337,3738],[-353,3750],[-371,3746],[-381,3757],[-379,3773],[-362,3796],[-362,3776],[-347,3767]]],[[[1402,2834],[1394,2792],[1400,2779],[1385,2761],[1377,2790],[1389,2804],[1373,2811],[1364,2838],[1379,2842],[1395,2828],[1402,2835],[1401,2839],[1383,2863],[1396,2866],[1441,2858],[1445,2825],[1422,2845],[1441,2817],[1439,2809],[1410,2805],[1402,2834]]]]}},{"type":"Feature","properties":{"hc-group":"__separator_lines__"},"geometry":{"type":"MultiLineString","coordinates":[[[-707,5188],[3651,2950]],[[1747,2584],[1747,3799]]]}}]};

/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var random = [{
	  "hc-key": "us-ma",
	  "value": 0
	}, {
	  "hc-key": "us-wa",
	  "value": 1
	}, {
	  "hc-key": "us-ca",
	  "value": 2
	}, {
	  "hc-key": "us-or",
	  "value": 3
	}, {
	  "hc-key": "us-wi",
	  "value": 4
	}, {
	  "hc-key": "us-me",
	  "value": 5
	}, {
	  "hc-key": "us-mi",
	  "value": 6
	}, {
	  "hc-key": "us-nv",
	  "value": 7
	}, {
	  "hc-key": "us-nm",
	  "value": 8
	}, {
	  "hc-key": "us-co",
	  "value": 9
	}, {
	  "hc-key": "us-wy",
	  "value": 10
	}, {
	  "hc-key": "us-ks",
	  "value": 11
	}, {
	  "hc-key": "us-ne",
	  "value": 12
	}, {
	  "hc-key": "us-ok",
	  "value": 13
	}, {
	  "hc-key": "us-mo",
	  "value": 14
	}, {
	  "hc-key": "us-il",
	  "value": 15
	}, {
	  "hc-key": "us-in",
	  "value": 16
	}, {
	  "hc-key": "us-vt",
	  "value": 17
	}, {
	  "hc-key": "us-ar",
	  "value": 18
	}, {
	  "hc-key": "us-tx",
	  "value": 19
	}, {
	  "hc-key": "us-ri",
	  "value": 20
	}, {
	  "hc-key": "us-al",
	  "value": 21
	}, {
	  "hc-key": "us-ms",
	  "value": 22
	}, {
	  "hc-key": "us-nc",
	  "value": 23
	}, {
	  "hc-key": "us-va",
	  "value": 24
	}, {
	  "hc-key": "us-ia",
	  "value": 25
	}, {
	  "hc-key": "us-md",
	  "value": 26
	}, {
	  "hc-key": "us-de",
	  "value": 27
	}, {
	  "hc-key": "us-pa",
	  "value": 28
	}, {
	  "hc-key": "us-nj",
	  "value": 29
	}, {
	  "hc-key": "us-ny",
	  "value": 30
	}, {
	  "hc-key": "us-id",
	  "value": 31
	}, {
	  "hc-key": "us-sd",
	  "value": 32
	}, {
	  "hc-key": "us-ct",
	  "value": 33
	}, {
	  "hc-key": "us-nh",
	  "value": 34
	}, {
	  "hc-key": "us-ky",
	  "value": 35
	}, {
	  "hc-key": "us-oh",
	  "value": 36
	}, {
	  "hc-key": "us-tn",
	  "value": 37
	}, {
	  "hc-key": "us-wv",
	  "value": 38
	}, {
	  "hc-key": "us-dc",
	  "value": 39
	}, {
	  "hc-key": "us-la",
	  "value": 40
	}, {
	  "hc-key": "us-fl",
	  "value": 41
	}, {
	  "hc-key": "us-ga",
	  "value": 42
	}, {
	  "hc-key": "us-sc",
	  "value": 43
	}, {
	  "hc-key": "us-mn",
	  "value": 44
	}, {
	  "hc-key": "us-mt",
	  "value": 45
	}, {
	  "hc-key": "us-nd",
	  "value": 46
	}, {
	  "hc-key": "us-az",
	  "value": 47
	}, {
	  "hc-key": "us-ut",
	  "value": 48
	}, {
	  "hc-key": "us-hi",
	  "value": 49
	}, {
	  "hc-key": "us-ak",
	  "value": 50
	}, {
	  "value": 51
	}];
	random = random.filter(function (state) {
	  return typeof state['hc-key'] !== 'undefined';
	}).map(function (state, index) {
	  return { "hc-key": state['hc-key'], value: state['value'] < 30 ? 1 : 0, 'name': index > 30 ? 'Clinton' : 'Trump', 'postal-code': state['hc-key'].substring(3).toUpperCase() };
	});
	exports.default = random;

/***/ }
/******/ ]);