(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f }
            var l = n[o] = { exports: {} };
            t[o][0].call(l.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        $ = require('./node_modules/jquery/dist/jquery.min.js');
        var $ = require('jquery');

    }, { "./node_modules/jquery/dist/jquery.min.js": 3, "jquery": 2 }],
    2: [function(require, module, exports) {
        (function(global) {;
            var __browserify_shim_require__ = require;
            (function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
                /*!
                 * jQuery JavaScript Library v3.3.1
                 * https://jquery.com/
                 *
                 * Includes Sizzle.js
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://jquery.org/license
                 *
                 * Date: 2018-01-20T17:24Z
                 */
                (function(global, factory) {

                    "use strict";

                    if (typeof module === "object" && typeof module.exports === "object") {

                        // For CommonJS and CommonJS-like environments where a proper `window`
                        // is present, execute the factory and get jQuery.
                        // For environments that do not have a `window` with a `document`
                        // (such as Node.js), expose a factory as module.exports.
                        // This accentuates the need for the creation of a real `window`.
                        // e.g. var jQuery = require("jquery")(window);
                        // See ticket #14549 for more info.
                        module.exports = global.document ?
                            factory(global, true) :
                            function(w) {
                                if (!w.document) {
                                    throw new Error("jQuery requires a window with a document");
                                }
                                return factory(w);
                            };
                    } else {
                        factory(global);
                    }

                    // Pass this if window is not defined yet
                })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

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

                    var ObjectFunctionString = fnToString.call(Object);

                    var support = {};

                    var isFunction = function isFunction(obj) {

                        // Support: Chrome <=57, Firefox <=52
                        // In some browsers, typeof returns "function" for HTML <object> elements
                        // (i.e., `typeof document.createElement( "object" ) === "function"`).
                        // We don't want to classify *any* DOM node as a function.
                        return typeof obj === "function" && typeof obj.nodeType !== "number";
                    };


                    var isWindow = function isWindow(obj) {
                        return obj != null && obj === obj.window;
                    };




                    var preservedScriptAttributes = {
                        type: true,
                        src: true,
                        noModule: true
                    };

                    function DOMEval(code, doc, node) {
                        doc = doc || document;

                        var i,
                            script = doc.createElement("script");

                        script.text = code;
                        if (node) {
                            for (i in preservedScriptAttributes) {
                                if (node[i]) {
                                    script[i] = node[i];
                                }
                            }
                        }
                        doc.head.appendChild(script).parentNode.removeChild(script);
                    }


                    function toType(obj) {
                        if (obj == null) {
                            return obj + "";
                        }

                        // Support: Android <=2.3 only (functionish RegExp)
                        return typeof obj === "object" || typeof obj === "function" ?
                            class2type[toString.call(obj)] || "object" :
                            typeof obj;
                    }
                    /* global Symbol */
                    // Defining this global in .eslintrc.json would create a danger of using the global
                    // unguarded in another place, it seems safer to define global only for this module



                    var
                        version = "3.3.1",

                        // Define a local copy of jQuery
                        jQuery = function(selector, context) {

                            // The jQuery object is actually just the init constructor 'enhanced'
                            // Need init if jQuery is called (just allow error to be thrown if not included)
                            return new jQuery.fn.init(selector, context);
                        },

                        // Support: Android <=4.0 only
                        // Make sure we trim BOM and NBSP
                        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                    jQuery.fn = jQuery.prototype = {

                        // The current version of jQuery being used
                        jquery: version,

                        constructor: jQuery,

                        // The default length of a jQuery object is 0
                        length: 0,

                        toArray: function() {
                            return slice.call(this);
                        },

                        // Get the Nth element in the matched element set OR
                        // Get the whole matched element set as a clean array
                        get: function(num) {

                            // Return all the elements in a clean array
                            if (num == null) {
                                return slice.call(this);
                            }

                            // Return just the one element from the set
                            return num < 0 ? this[num + this.length] : this[num];
                        },

                        // Take an array of elements and push it onto the stack
                        // (returning the new matched element set)
                        pushStack: function(elems) {

                            // Build a new jQuery matched element set
                            var ret = jQuery.merge(this.constructor(), elems);

                            // Add the old object onto the stack (as a reference)
                            ret.prevObject = this;

                            // Return the newly-formed element set
                            return ret;
                        },

                        // Execute a callback for every element in the matched set.
                        each: function(callback) {
                            return jQuery.each(this, callback);
                        },

                        map: function(callback) {
                            return this.pushStack(jQuery.map(this, function(elem, i) {
                                return callback.call(elem, i, elem);
                            }));
                        },

                        slice: function() {
                            return this.pushStack(slice.apply(this, arguments));
                        },

                        first: function() {
                            return this.eq(0);
                        },

                        last: function() {
                            return this.eq(-1);
                        },

                        eq: function(i) {
                            var len = this.length,
                                j = +i + (i < 0 ? len : 0);
                            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
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
                            target = arguments[0] || {},
                            i = 1,
                            length = arguments.length,
                            deep = false;

                        // Handle a deep copy situation
                        if (typeof target === "boolean") {
                            deep = target;

                            // Skip the boolean and the target
                            target = arguments[i] || {};
                            i++;
                        }

                        // Handle case when target is a string or something (possible in deep copy)
                        if (typeof target !== "object" && !isFunction(target)) {
                            target = {};
                        }

                        // Extend jQuery itself if only one argument is passed
                        if (i === length) {
                            target = this;
                            i--;
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
                                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                                            (copyIsArray = Array.isArray(copy)))) {

                                        if (copyIsArray) {
                                            copyIsArray = false;
                                            clone = src && Array.isArray(src) ? src : [];

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
                        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

                        // Assume jQuery is ready without the ready module
                        isReady: true,

                        error: function(msg) {
                            throw new Error(msg);
                        },

                        noop: function() {},

                        isPlainObject: function(obj) {
                            var proto, Ctor;

                            // Detect obvious negatives
                            // Use toString instead of jQuery.type to catch host objects
                            if (!obj || toString.call(obj) !== "[object Object]") {
                                return false;
                            }

                            proto = getProto(obj);

                            // Objects with no prototype (e.g., `Object.create( null )`) are plain
                            if (!proto) {
                                return true;
                            }

                            // Objects with prototype are plain iff they were constructed by a global Object function
                            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                        },

                        isEmptyObject: function(obj) {

                            /* eslint-disable no-unused-vars */
                            // See https://github.com/eslint/eslint/issues/6125
                            var name;

                            for (name in obj) {
                                return false;
                            }
                            return true;
                        },

                        // Evaluates a script in a global context
                        globalEval: function(code) {
                            DOMEval(code);
                        },

                        each: function(obj, callback) {
                            var length, i = 0;

                            if (isArrayLike(obj)) {
                                length = obj.length;
                                for (; i < length; i++) {
                                    if (callback.call(obj[i], i, obj[i]) === false) {
                                        break;
                                    }
                                }
                            } else {
                                for (i in obj) {
                                    if (callback.call(obj[i], i, obj[i]) === false) {
                                        break;
                                    }
                                }
                            }

                            return obj;
                        },

                        // Support: Android <=4.0 only
                        trim: function(text) {
                            return text == null ?
                                "" :
                                (text + "").replace(rtrim, "");
                        },

                        // results is for internal usage only
                        makeArray: function(arr, results) {
                            var ret = results || [];

                            if (arr != null) {
                                if (isArrayLike(Object(arr))) {
                                    jQuery.merge(ret,
                                        typeof arr === "string" ? [arr] : arr
                                    );
                                } else {
                                    push.call(ret, arr);
                                }
                            }

                            return ret;
                        },

                        inArray: function(elem, arr, i) {
                            return arr == null ? -1 : indexOf.call(arr, elem, i);
                        },

                        // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        merge: function(first, second) {
                            var len = +second.length,
                                j = 0,
                                i = first.length;

                            for (; j < len; j++) {
                                first[i++] = second[j];
                            }

                            first.length = i;

                            return first;
                        },

                        grep: function(elems, callback, invert) {
                            var callbackInverse,
                                matches = [],
                                i = 0,
                                length = elems.length,
                                callbackExpect = !invert;

                            // Go through the array, only saving the items
                            // that pass the validator function
                            for (; i < length; i++) {
                                callbackInverse = !callback(elems[i], i);
                                if (callbackInverse !== callbackExpect) {
                                    matches.push(elems[i]);
                                }
                            }

                            return matches;
                        },

                        // arg is for internal usage only
                        map: function(elems, callback, arg) {
                            var length, value,
                                i = 0,
                                ret = [];

                            // Go through the array, translating each of the items to their new values
                            if (isArrayLike(elems)) {
                                length = elems.length;
                                for (; i < length; i++) {
                                    value = callback(elems[i], i, arg);

                                    if (value != null) {
                                        ret.push(value);
                                    }
                                }

                                // Go through every key on the object,
                            } else {
                                for (i in elems) {
                                    value = callback(elems[i], i, arg);

                                    if (value != null) {
                                        ret.push(value);
                                    }
                                }
                            }

                            // Flatten any nested arrays
                            return concat.apply([], ret);
                        },

                        // A global GUID counter for objects
                        guid: 1,

                        // jQuery.support is not used in Core but other projects attach their
                        // properties to it so it needs to exist.
                        support: support
                    });

                    if (typeof Symbol === "function") {
                        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                    }

                    // Populate the class2type map
                    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                        function(i, name) {
                            class2type["[object " + name + "]"] = name.toLowerCase();
                        });

                    function isArrayLike(obj) {

                        // Support: real iOS 8.2 only (not reproducible in simulator)
                        // `in` check used to prevent JIT error (gh-2145)
                        // hasOwn isn't used here due to false negatives
                        // regarding Nodelist length in IE
                        var length = !!obj && "length" in obj && obj.length,
                            type = toType(obj);

                        if (isFunction(obj) || isWindow(obj)) {
                            return false;
                        }

                        return type === "array" || length === 0 ||
                            typeof length === "number" && length > 0 && (length - 1) in obj;
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
                        (function(window) {

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
                                sortOrder = function(a, b) {
                                    if (a === b) {
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
                                indexOf = function(list, elem) {
                                    var i = 0,
                                        len = list.length;
                                    for (; i < len; i++) {
                                        if (list[i] === elem) {
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
                                rwhitespace = new RegExp(whitespace + "+", "g"),
                                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

                                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

                                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

                                rpseudo = new RegExp(pseudos),
                                ridentifier = new RegExp("^" + identifier + "$"),

                                matchExpr = {
                                    "ID": new RegExp("^#(" + identifier + ")"),
                                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                                    "ATTR": new RegExp("^" + attributes),
                                    "PSEUDO": new RegExp("^" + pseudos),
                                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                                        "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                                    // For use in libraries implementing .is()
                                    // We use this for POS matching in `select`
                                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                                },

                                rinputs = /^(?:input|select|textarea|button)$/i,
                                rheader = /^h\d$/i,

                                rnative = /^[^{]+\{\s*\[native \w/,

                                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                                rsibling = /[+~]/,

                                // CSS escapes
                                // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                                funescape = function(_, escaped, escapedWhitespace) {
                                    var high = "0x" + escaped - 0x10000;
                                    // NaN means non-codepoint
                                    // Support: Firefox<24
                                    // Workaround erroneous numeric interpretation of +"0x"
                                    return high !== high || escapedWhitespace ?
                                        escaped :
                                        high < 0 ?
                                        // BMP codepoint
                                        String.fromCharCode(high + 0x10000) :
                                        // Supplemental Plane codepoint (surrogate pair)
                                        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                                },

                                // CSS string/identifier serialization
                                // https://drafts.csswg.org/cssom/#common-serializing-idioms
                                rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                fcssescape = function(ch, asCodePoint) {
                                    if (asCodePoint) {

                                        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                                        if (ch === "\0") {
                                            return "\uFFFD";
                                        }

                                        // Control characters and (dependent upon position) numbers get escaped as code points
                                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
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
                                    function(elem) {
                                        return elem.disabled === true && ("form" in elem || "label" in elem);
                                    }, { dir: "parentNode", next: "legend" }
                                );

                            // Optimize for push.apply( _, NodeList )
                            try {
                                push.apply(
                                    (arr = slice.call(preferredDoc.childNodes)),
                                    preferredDoc.childNodes
                                );
                                // Support: Android<4.0
                                // Detect silently failing push.apply
                                arr[preferredDoc.childNodes.length].nodeType;
                            } catch (e) {
                                push = {
                                    apply: arr.length ?

                                        // Leverage slice if possible
                                        function(target, els) {
                                            push_native.apply(target, slice.call(els));
                                        } :

                                        // Support: IE<9
                                        // Otherwise append directly
                                        function(target, els) {
                                            var j = target.length,
                                                i = 0;
                                            // Can't trust NodeList.length
                                            while ((target[j++] = els[i++])) {}
                                            target.length = j - 1;
                                        }
                                };
                            }

                            function Sizzle(selector, context, results, seed) {
                                var m, i, elem, nid, match, groups, newSelector,
                                    newContext = context && context.ownerDocument,

                                    // nodeType defaults to 9, since context defaults to document
                                    nodeType = context ? context.nodeType : 9;

                                results = results || [];

                                // Return early from calls with invalid selector or context
                                if (typeof selector !== "string" || !selector ||
                                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                                    return results;
                                }

                                // Try to shortcut find operations (as opposed to filters) in HTML documents
                                if (!seed) {

                                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                                        setDocument(context);
                                    }
                                    context = context || document;

                                    if (documentIsHTML) {

                                        // If the selector is sufficiently simple, try using a "get*By*" DOM method
                                        // (excepting DocumentFragment context, where the methods don't exist)
                                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                                            // ID selector
                                            if ((m = match[1])) {

                                                // Document context
                                                if (nodeType === 9) {
                                                    if ((elem = context.getElementById(m))) {

                                                        // Support: IE, Opera, Webkit
                                                        // TODO: identify versions
                                                        // getElementById can match elements by name instead of ID
                                                        if (elem.id === m) {
                                                            results.push(elem);
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
                                                    if (newContext && (elem = newContext.getElementById(m)) &&
                                                        contains(context, elem) &&
                                                        elem.id === m) {

                                                        results.push(elem);
                                                        return results;
                                                    }
                                                }

                                                // Type selector
                                            } else if (match[2]) {
                                                push.apply(results, context.getElementsByTagName(selector));
                                                return results;

                                                // Class selector
                                            } else if ((m = match[3]) && support.getElementsByClassName &&
                                                context.getElementsByClassName) {

                                                push.apply(results, context.getElementsByClassName(m));
                                                return results;
                                            }
                                        }

                                        // Take advantage of querySelectorAll
                                        if (support.qsa &&
                                            !compilerCache[selector + " "] &&
                                            (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                                            if (nodeType !== 1) {
                                                newContext = context;
                                                newSelector = selector;

                                                // qSA looks outside Element context, which is not what we want
                                                // Thanks to Andrew Dupont for this workaround technique
                                                // Support: IE <=8
                                                // Exclude object elements
                                            } else if (context.nodeName.toLowerCase() !== "object") {

                                                // Capture the context ID, setting it first if necessary
                                                if ((nid = context.getAttribute("id"))) {
                                                    nid = nid.replace(rcssescape, fcssescape);
                                                } else {
                                                    context.setAttribute("id", (nid = expando));
                                                }

                                                // Prefix every selector in the list
                                                groups = tokenize(selector);
                                                i = groups.length;
                                                while (i--) {
                                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                                }
                                                newSelector = groups.join(",");

                                                // Expand context for sibling selectors
                                                newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                                    context;
                                            }

                                            if (newSelector) {
                                                try {
                                                    push.apply(results,
                                                        newContext.querySelectorAll(newSelector)
                                                    );
                                                    return results;
                                                } catch (qsaError) {} finally {
                                                    if (nid === expando) {
                                                        context.removeAttribute("id");
                                                    }
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
                             * @returns {function(string, object)} Returns the Object data after storing it on itself with
                             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
                             *	deleting the oldest entry
                             */
                            function createCache() {
                                var keys = [];

                                function cache(key, value) {
                                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                                    if (keys.push(key + " ") > Expr.cacheLength) {
                                        // Only keep the most recent entries
                                        delete cache[keys.shift()];
                                    }
                                    return (cache[key + " "] = value);
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
                             * @param {Function} fn Passed the created element and returns a boolean result
                             */
                            function assert(fn) {
                                var el = document.createElement("fieldset");

                                try {
                                    return !!fn(el);
                                } catch (e) {
                                    return false;
                                } finally {
                                    // Remove from its parent by default
                                    if (el.parentNode) {
                                        el.parentNode.removeChild(el);
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
                            function addHandle(attrs, handler) {
                                var arr = attrs.split("|"),
                                    i = arr.length;

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
                                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                                    a.sourceIndex - b.sourceIndex;

                                // Use IE sourceIndex if available on both nodes
                                if (diff) {
                                    return diff;
                                }

                                // Check if b follows a
                                if (cur) {
                                    while ((cur = cur.nextSibling)) {
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
                                return function(elem) {
                                    var name = elem.nodeName.toLowerCase();
                                    return name === "input" && elem.type === type;
                                };
                            }

                            /**
                             * Returns a function to use in pseudos for buttons
                             * @param {String} type
                             */
                            function createButtonPseudo(type) {
                                return function(elem) {
                                    var name = elem.nodeName.toLowerCase();
                                    return (name === "input" || name === "button") && elem.type === type;
                                };
                            }

                            /**
                             * Returns a function to use in pseudos for :enabled/:disabled
                             * @param {Boolean} disabled true for :disabled; false for :enabled
                             */
                            function createDisabledPseudo(disabled) {

                                // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                                return function(elem) {

                                    // Only certain elements can match :enabled or :disabled
                                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                                    if ("form" in elem) {

                                        // Check for inherited disabledness on relevant non-disabled elements:
                                        // * listed form-associated elements in a disabled fieldset
                                        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                                        // * option elements in a disabled optgroup
                                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                                        // All such elements have a "form" property.
                                        if (elem.parentNode && elem.disabled === false) {

                                            // Option elements defer to a parent optgroup if present
                                            if ("label" in elem) {
                                                if ("label" in elem.parentNode) {
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
                                                disabledAncestor(elem) === disabled;
                                        }

                                        return elem.disabled === disabled;

                                        // Try to winnow out elements that can't be disabled before trusting the disabled property.
                                        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                                        // even exist on them, let alone have a boolean value.
                                    } else if ("label" in elem) {
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
                            function createPositionalPseudo(fn) {
                                return markFunction(function(argument) {
                                    argument = +argument;
                                    return markFunction(function(seed, matches) {
                                        var j,
                                            matchIndexes = fn([], seed.length, argument),
                                            i = matchIndexes.length;

                                        // Match elements found at the specified indexes
                                        while (i--) {
                                            if (seed[(j = matchIndexes[i])]) {
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
                            function testContext(context) {
                                return context && typeof context.getElementsByTagName !== "undefined" && context;
                            }

                            // Expose support vars for convenience
                            support = Sizzle.support = {};

                            /**
                             * Detects XML nodes
                             * @param {Element|Object} elem An element or a document
                             * @returns {Boolean} True iff elem is a non-HTML XML node
                             */
                            isXML = Sizzle.isXML = function(elem) {
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
                            setDocument = Sizzle.setDocument = function(node) {
                                var hasCompare, subWindow,
                                    doc = node ? node.ownerDocument || node : preferredDoc;

                                // Return early if doc is invalid or already selected
                                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                                    return document;
                                }

                                // Update global variables
                                document = doc;
                                docElem = document.documentElement;
                                documentIsHTML = !isXML(document);

                                // Support: IE 9-11, Edge
                                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                                if (preferredDoc !== document &&
                                    (subWindow = document.defaultView) && subWindow.top !== subWindow) {

                                    // Support: IE 11, Edge
                                    if (subWindow.addEventListener) {
                                        subWindow.addEventListener("unload", unloadHandler, false);

                                        // Support: IE 9 - 10 only
                                    } else if (subWindow.attachEvent) {
                                        subWindow.attachEvent("onunload", unloadHandler);
                                    }
                                }

                                /* Attributes
                                ---------------------------------------------------------------------- */

                                // Support: IE<8
                                // Verify that getAttribute really returns attributes and not properties
                                // (excepting IE8 booleans)
                                support.attributes = assert(function(el) {
                                    el.className = "i";
                                    return !el.getAttribute("className");
                                });

                                /* getElement(s)By*
                                ---------------------------------------------------------------------- */

                                // Check if getElementsByTagName("*") returns only elements
                                support.getElementsByTagName = assert(function(el) {
                                    el.appendChild(document.createComment(""));
                                    return !el.getElementsByTagName("*").length;
                                });

                                // Support: IE<9
                                support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                                // Support: IE<10
                                // Check if getElementById returns elements by name
                                // The broken getElementById methods don't pick up programmatically-set names,
                                // so use a roundabout getElementsByName test
                                support.getById = assert(function(el) {
                                    docElem.appendChild(el).id = expando;
                                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                                });

                                // ID filter and find
                                if (support.getById) {
                                    Expr.filter["ID"] = function(id) {
                                        var attrId = id.replace(runescape, funescape);
                                        return function(elem) {
                                            return elem.getAttribute("id") === attrId;
                                        };
                                    };
                                    Expr.find["ID"] = function(id, context) {
                                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                            var elem = context.getElementById(id);
                                            return elem ? [elem] : [];
                                        }
                                    };
                                } else {
                                    Expr.filter["ID"] = function(id) {
                                        var attrId = id.replace(runescape, funescape);
                                        return function(elem) {
                                            var node = typeof elem.getAttributeNode !== "undefined" &&
                                                elem.getAttributeNode("id");
                                            return node && node.value === attrId;
                                        };
                                    };

                                    // Support: IE 6 - 7 only
                                    // getElementById is not reliable as a find shortcut
                                    Expr.find["ID"] = function(id, context) {
                                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                            var node, i, elems,
                                                elem = context.getElementById(id);

                                            if (elem) {

                                                // Verify the id attribute
                                                node = elem.getAttributeNode("id");
                                                if (node && node.value === id) {
                                                    return [elem];
                                                }

                                                // Fall back on getElementsByName
                                                elems = context.getElementsByName(id);
                                                i = 0;
                                                while ((elem = elems[i++])) {
                                                    node = elem.getAttributeNode("id");
                                                    if (node && node.value === id) {
                                                        return [elem];
                                                    }
                                                }
                                            }

                                            return [];
                                        }
                                    };
                                }

                                // Tag
                                Expr.find["TAG"] = support.getElementsByTagName ?
                                    function(tag, context) {
                                        if (typeof context.getElementsByTagName !== "undefined") {
                                            return context.getElementsByTagName(tag);

                                            // DocumentFragment nodes don't have gEBTN
                                        } else if (support.qsa) {
                                            return context.querySelectorAll(tag);
                                        }
                                    } :

                                    function(tag, context) {
                                        var elem,
                                            tmp = [],
                                            i = 0,
                                            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                                            results = context.getElementsByTagName(tag);

                                        // Filter out possible comments
                                        if (tag === "*") {
                                            while ((elem = results[i++])) {
                                                if (elem.nodeType === 1) {
                                                    tmp.push(elem);
                                                }
                                            }

                                            return tmp;
                                        }
                                        return results;
                                    };

                                // Class
                                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
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
                                // See https://bugs.jquery.com/ticket/13378
                                rbuggyQSA = [];

                                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                                    // Build QSA regex
                                    // Regex strategy adopted from Diego Perini
                                    assert(function(el) {
                                        // Select is set to empty string on purpose
                                        // This is to test IE's treatment of not explicitly
                                        // setting a boolean content attribute,
                                        // since its presence should be enough
                                        // https://bugs.jquery.com/ticket/12359
                                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                                            "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                                            "<option selected=''></option></select>";

                                        // Support: IE8, Opera 11-12.16
                                        // Nothing should be selected when empty strings follow ^= or $= or *=
                                        // The test attribute must be unknown in Opera but "safe" for WinRT
                                        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                        }

                                        // Support: IE8
                                        // Boolean attributes and "value" are not treated correctly
                                        if (!el.querySelectorAll("[selected]").length) {
                                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                        }

                                        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                                            rbuggyQSA.push("~=");
                                        }

                                        // Webkit/Opera - :checked should return selected option elements
                                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                        // IE8 throws error here and will not see later tests
                                        if (!el.querySelectorAll(":checked").length) {
                                            rbuggyQSA.push(":checked");
                                        }

                                        // Support: Safari 8+, iOS 8+
                                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                                        // In-page `selector#id sibling-combinator selector` fails
                                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                                            rbuggyQSA.push(".#.+[+~]");
                                        }
                                    });

                                    assert(function(el) {
                                        el.innerHTML = "<a href='' disabled='disabled'></a>" +
                                            "<select disabled='disabled'><option/></select>";

                                        // Support: Windows 8 Native Apps
                                        // The type and name attributes are restricted during .innerHTML assignment
                                        var input = document.createElement("input");
                                        input.setAttribute("type", "hidden");
                                        el.appendChild(input).setAttribute("name", "D");

                                        // Support: IE8
                                        // Enforce case-sensitivity of name attribute
                                        if (el.querySelectorAll("[name=d]").length) {
                                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                        }

                                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                                        // IE8 throws error here and will not see later tests
                                        if (el.querySelectorAll(":enabled").length !== 2) {
                                            rbuggyQSA.push(":enabled", ":disabled");
                                        }

                                        // Support: IE9-11+
                                        // IE's :disabled selector does not pick up the children of disabled fieldsets
                                        docElem.appendChild(el).disabled = true;
                                        if (el.querySelectorAll(":disabled").length !== 2) {
                                            rbuggyQSA.push(":enabled", ":disabled");
                                        }

                                        // Opera 10-11 does not throw on post-comma invalid pseudos
                                        el.querySelectorAll("*,:x");
                                        rbuggyQSA.push(",.*:");
                                    });
                                }

                                if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                                        docElem.webkitMatchesSelector ||
                                        docElem.mozMatchesSelector ||
                                        docElem.oMatchesSelector ||
                                        docElem.msMatchesSelector)))) {

                                    assert(function(el) {
                                        // Check to see if it's possible to do matchesSelector
                                        // on a disconnected node (IE 9)
                                        support.disconnectedMatch = matches.call(el, "*");

                                        // This should fail with an exception
                                        // Gecko does not error, returns false instead
                                        matches.call(el, "[s!='']:x");
                                        rbuggyMatches.push("!=", pseudos);
                                    });
                                }

                                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

                                /* Contains
                                ---------------------------------------------------------------------- */
                                hasCompare = rnative.test(docElem.compareDocumentPosition);

                                // Element contains another
                                // Purposefully self-exclusive
                                // As in, an element does not contain itself
                                contains = hasCompare || rnative.test(docElem.contains) ?
                                    function(a, b) {
                                        var adown = a.nodeType === 9 ? a.documentElement : a,
                                            bup = b && b.parentNode;
                                        return a === bup || !!(bup && bup.nodeType === 1 && (
                                            adown.contains ?
                                            adown.contains(bup) :
                                            a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                                        ));
                                    } :
                                    function(a, b) {
                                        if (b) {
                                            while ((b = b.parentNode)) {
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
                                sortOrder = hasCompare ?
                                    function(a, b) {

                                        // Flag for duplicate removal
                                        if (a === b) {
                                            hasDuplicate = true;
                                            return 0;
                                        }

                                        // Sort on method existence if only one input has compareDocumentPosition
                                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                        if (compare) {
                                            return compare;
                                        }

                                        // Calculate position if both inputs belong to the same document
                                        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                                            a.compareDocumentPosition(b) :

                                            // Otherwise we know they are disconnected
                                            1;

                                        // Disconnected nodes
                                        if (compare & 1 ||
                                            (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                                            // Choose the first element that is related to our preferred document
                                            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                                return -1;
                                            }
                                            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                                return 1;
                                            }

                                            // Maintain original order
                                            return sortInput ?
                                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                0;
                                        }

                                        return compare & 4 ? -1 : 1;
                                    } :
                                    function(a, b) {
                                        // Exit early if the nodes are identical
                                        if (a === b) {
                                            hasDuplicate = true;
                                            return 0;
                                        }

                                        var cur,
                                            i = 0,
                                            aup = a.parentNode,
                                            bup = b.parentNode,
                                            ap = [a],
                                            bp = [b];

                                        // Parentless nodes are either documents or disconnected
                                        if (!aup || !bup) {
                                            return a === document ? -1 :
                                                b === document ? 1 :
                                                aup ? -1 :
                                                bup ? 1 :
                                                sortInput ?
                                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                0;

                                            // If the nodes are siblings, we can do a quick check
                                        } else if (aup === bup) {
                                            return siblingCheck(a, b);
                                        }

                                        // Otherwise we need full lists of their ancestors for comparison
                                        cur = a;
                                        while ((cur = cur.parentNode)) {
                                            ap.unshift(cur);
                                        }
                                        cur = b;
                                        while ((cur = cur.parentNode)) {
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
                                            ap[i] === preferredDoc ? -1 :
                                            bp[i] === preferredDoc ? 1 :
                                            0;
                                    };

                                return document;
                            };

                            Sizzle.matches = function(expr, elements) {
                                return Sizzle(expr, null, null, elements);
                            };

                            Sizzle.matchesSelector = function(elem, expr) {
                                // Set document vars if needed
                                if ((elem.ownerDocument || elem) !== document) {
                                    setDocument(elem);
                                }

                                // Make sure that attribute selectors are quoted
                                expr = expr.replace(rattributeQuotes, "='$1']");

                                if (support.matchesSelector && documentIsHTML &&
                                    !compilerCache[expr + " "] &&
                                    (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                                    (!rbuggyQSA || !rbuggyQSA.test(expr))) {

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

                            Sizzle.contains = function(context, elem) {
                                // Set document vars if needed
                                if ((context.ownerDocument || context) !== document) {
                                    setDocument(context);
                                }
                                return contains(context, elem);
                            };

                            Sizzle.attr = function(elem, name) {
                                // Set document vars if needed
                                if ((elem.ownerDocument || elem) !== document) {
                                    setDocument(elem);
                                }

                                var fn = Expr.attrHandle[name.toLowerCase()],
                                    // Don't get fooled by Object.prototype properties (jQuery #13807)
                                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                                    fn(elem, name, !documentIsHTML) :
                                    undefined;

                                return val !== undefined ?
                                    val :
                                    support.attributes || !documentIsHTML ?
                                    elem.getAttribute(name) :
                                    (val = elem.getAttributeNode(name)) && val.specified ?
                                    val.value :
                                    null;
                            };

                            Sizzle.escape = function(sel) {
                                return (sel + "").replace(rcssescape, fcssescape);
                            };

                            Sizzle.error = function(msg) {
                                throw new Error("Syntax error, unrecognized expression: " + msg);
                            };

                            /**
                             * Document sorting and removing duplicates
                             * @param {ArrayLike} results
                             */
                            Sizzle.uniqueSort = function(results) {
                                var elem,
                                    duplicates = [],
                                    j = 0,
                                    i = 0;

                                // Unless we *know* we can detect duplicates, assume their presence
                                hasDuplicate = !support.detectDuplicates;
                                sortInput = !support.sortStable && results.slice(0);
                                results.sort(sortOrder);

                                if (hasDuplicate) {
                                    while ((elem = results[i++])) {
                                        if (elem === results[i]) {
                                            j = duplicates.push(i);
                                        }
                                    }
                                    while (j--) {
                                        results.splice(duplicates[j], 1);
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
                            getText = Sizzle.getText = function(elem) {
                                var node,
                                    ret = "",
                                    i = 0,
                                    nodeType = elem.nodeType;

                                if (!nodeType) {
                                    // If no nodeType, this is expected to be an array
                                    while ((node = elem[i++])) {
                                        // Do not traverse comment nodes
                                        ret += getText(node);
                                    }
                                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                                    // Use textContent for elements
                                    // innerText usage removed for consistency of new lines (jQuery #11153)
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
                                    "ATTR": function(match) {
                                        match[1] = match[1].replace(runescape, funescape);

                                        // Move the given value to match[3] whether quoted or unquoted
                                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                                        if (match[2] === "~=") {
                                            match[3] = " " + match[3] + " ";
                                        }

                                        return match.slice(0, 4);
                                    },

                                    "CHILD": function(match) {
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
                                            match[5] = +((match[7] + match[8]) || match[3] === "odd");

                                            // other types prohibit arguments
                                        } else if (match[3]) {
                                            Sizzle.error(match[0]);
                                        }

                                        return match;
                                    },

                                    "PSEUDO": function(match) {
                                        var excess,
                                            unquoted = !match[6] && match[2];

                                        if (matchExpr["CHILD"].test(match[0])) {
                                            return null;
                                        }

                                        // Accept quoted arguments as-is
                                        if (match[3]) {
                                            match[2] = match[4] || match[5] || "";

                                            // Strip excess characters from unquoted arguments
                                        } else if (unquoted && rpseudo.test(unquoted) &&
                                            // Get excess from tokenize (recursively)
                                            (excess = tokenize(unquoted, true)) &&
                                            // advance to the next closing parenthesis
                                            (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                                            // excess is a negative index
                                            match[0] = match[0].slice(0, excess);
                                            match[2] = unquoted.slice(0, excess);
                                        }

                                        // Return only captures needed by the pseudo filter method (type and argument)
                                        return match.slice(0, 3);
                                    }
                                },

                                filter: {

                                    "TAG": function(nodeNameSelector) {
                                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                        return nodeNameSelector === "*" ?
                                            function() { return true; } :
                                            function(elem) {
                                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                            };
                                    },

                                    "CLASS": function(className) {
                                        var pattern = classCache[className + " "];

                                        return pattern ||
                                            (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                                            classCache(className, function(elem) {
                                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                            });
                                    },

                                    "ATTR": function(name, operator, check) {
                                        return function(elem) {
                                            var result = Sizzle.attr(elem, name);

                                            if (result == null) {
                                                return operator === "!=";
                                            }
                                            if (!operator) {
                                                return true;
                                            }

                                            result += "";

                                            return operator === "=" ? result === check :
                                                operator === "!=" ? result !== check :
                                                operator === "^=" ? check && result.indexOf(check) === 0 :
                                                operator === "*=" ? check && result.indexOf(check) > -1 :
                                                operator === "$=" ? check && result.slice(-check.length) === check :
                                                operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                                operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                false;
                                        };
                                    },

                                    "CHILD": function(type, what, argument, first, last) {
                                        var simple = type.slice(0, 3) !== "nth",
                                            forward = type.slice(-4) !== "last",
                                            ofType = what === "of-type";

                                        return first === 1 && last === 0 ?

                                            // Shortcut for :nth-*(n)
                                            function(elem) {
                                                return !!elem.parentNode;
                                            } :

                                            function(elem, context, xml) {
                                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                                    parent = elem.parentNode,
                                                    name = ofType && elem.nodeName.toLowerCase(),
                                                    useCache = !xml && !ofType,
                                                    diff = false;

                                                if (parent) {

                                                    // :(first|last|only)-(child|of-type)
                                                    if (simple) {
                                                        while (dir) {
                                                            node = elem;
                                                            while ((node = node[dir])) {
                                                                if (ofType ?
                                                                    node.nodeName.toLowerCase() === name :
                                                                    node.nodeType === 1) {

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

                                                        // ...in a gzip-friendly way
                                                        node = parent;
                                                        outerCache = node[expando] || (node[expando] = {});

                                                        // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] ||
                                                            (outerCache[node.uniqueID] = {});

                                                        cache = uniqueCache[type] || [];
                                                        nodeIndex = cache[0] === dirruns && cache[1];
                                                        diff = nodeIndex && cache[2];
                                                        node = nodeIndex && parent.childNodes[nodeIndex];

                                                        while ((node = ++nodeIndex && node && node[dir] ||

                                                                // Fallback to seeking `elem` from the start
                                                                (diff = nodeIndex = 0) || start.pop())) {

                                                            // When found, cache indexes on `parent` and break
                                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                                break;
                                                            }
                                                        }

                                                    } else {
                                                        // Use previously-cached element index if available
                                                        if (useCache) {
                                                            // ...in a gzip-friendly way
                                                            node = elem;
                                                            outerCache = node[expando] || (node[expando] = {});

                                                            // Support: IE <9 only
                                                            // Defend against cloned attroperties (jQuery gh-1709)
                                                            uniqueCache = outerCache[node.uniqueID] ||
                                                                (outerCache[node.uniqueID] = {});

                                                            cache = uniqueCache[type] || [];
                                                            nodeIndex = cache[0] === dirruns && cache[1];
                                                            diff = nodeIndex;
                                                        }

                                                        // xml :nth-child(...)
                                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                                        if (diff === false) {
                                                            // Use the same loop as above to seek `elem` from the start
                                                            while ((node = ++nodeIndex && node && node[dir] ||
                                                                    (diff = nodeIndex = 0) || start.pop())) {

                                                                if ((ofType ?
                                                                        node.nodeName.toLowerCase() === name :
                                                                        node.nodeType === 1) &&
                                                                    ++diff) {

                                                                    // Cache the index of each encountered element
                                                                    if (useCache) {
                                                                        outerCache = node[expando] || (node[expando] = {});

                                                                        // Support: IE <9 only
                                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                                        uniqueCache = outerCache[node.uniqueID] ||
                                                                            (outerCache[node.uniqueID] = {});

                                                                        uniqueCache[type] = [dirruns, diff];
                                                                    }

                                                                    if (node === elem) {
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                    // Incorporate the offset, then check against cycle size
                                                    diff -= last;
                                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                                }
                                            };
                                    },

                                    "PSEUDO": function(pseudo, argument) {
                                        // pseudo-class names are case-insensitive
                                        // http://www.w3.org/TR/selectors/#pseudo-classes
                                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                                        // Remember that setFilters inherits from pseudos
                                        var args,
                                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                            Sizzle.error("unsupported pseudo: " + pseudo);

                                        // The user may use createPseudo to indicate that
                                        // arguments are needed to create the filter function
                                        // just as Sizzle does
                                        if (fn[expando]) {
                                            return fn(argument);
                                        }

                                        // But maintain support for old signatures
                                        if (fn.length > 1) {
                                            args = [pseudo, pseudo, "", argument];
                                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                                markFunction(function(seed, matches) {
                                                    var idx,
                                                        matched = fn(seed, argument),
                                                        i = matched.length;
                                                    while (i--) {
                                                        idx = indexOf(seed, matched[i]);
                                                        seed[idx] = !(matches[idx] = matched[i]);
                                                    }
                                                }) :
                                                function(elem) {
                                                    return fn(elem, 0, args);
                                                };
                                        }

                                        return fn;
                                    }
                                },

                                pseudos: {
                                    // Potentially complex pseudos
                                    "not": markFunction(function(selector) {
                                        // Trim the selector passed to compile
                                        // to avoid treating leading and trailing
                                        // spaces as combinators
                                        var input = [],
                                            results = [],
                                            matcher = compile(selector.replace(rtrim, "$1"));

                                        return matcher[expando] ?
                                            markFunction(function(seed, matches, context, xml) {
                                                var elem,
                                                    unmatched = matcher(seed, null, xml, []),
                                                    i = seed.length;

                                                // Match elements unmatched by `matcher`
                                                while (i--) {
                                                    if ((elem = unmatched[i])) {
                                                        seed[i] = !(matches[i] = elem);
                                                    }
                                                }
                                            }) :
                                            function(elem, context, xml) {
                                                input[0] = elem;
                                                matcher(input, null, xml, results);
                                                // Don't keep the element (issue #299)
                                                input[0] = null;
                                                return !results.pop();
                                            };
                                    }),

                                    "has": markFunction(function(selector) {
                                        return function(elem) {
                                            return Sizzle(selector, elem).length > 0;
                                        };
                                    }),

                                    "contains": markFunction(function(text) {
                                        text = text.replace(runescape, funescape);
                                        return function(elem) {
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
                                    "lang": markFunction(function(lang) {
                                        // lang value must be a valid identifier
                                        if (!ridentifier.test(lang || "")) {
                                            Sizzle.error("unsupported lang: " + lang);
                                        }
                                        lang = lang.replace(runescape, funescape).toLowerCase();
                                        return function(elem) {
                                            var elemLang;
                                            do {
                                                if ((elemLang = documentIsHTML ?
                                                        elem.lang :
                                                        elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                                    elemLang = elemLang.toLowerCase();
                                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                                }
                                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                            return false;
                                        };
                                    }),

                                    // Miscellaneous
                                    "target": function(elem) {
                                        var hash = window.location && window.location.hash;
                                        return hash && hash.slice(1) === elem.id;
                                    },

                                    "root": function(elem) {
                                        return elem === docElem;
                                    },

                                    "focus": function(elem) {
                                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                                    },

                                    // Boolean properties
                                    "enabled": createDisabledPseudo(false),
                                    "disabled": createDisabledPseudo(true),

                                    "checked": function(elem) {
                                        // In CSS3, :checked should return both checked and selected elements
                                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                        var nodeName = elem.nodeName.toLowerCase();
                                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                                    },

                                    "selected": function(elem) {
                                        // Accessing this property makes selected-by-default
                                        // options in Safari work properly
                                        if (elem.parentNode) {
                                            elem.parentNode.selectedIndex;
                                        }

                                        return elem.selected === true;
                                    },

                                    // Contents
                                    "empty": function(elem) {
                                        // http://www.w3.org/TR/selectors/#empty-pseudo
                                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                                        // nodeType < 6 works because attributes (2) do not appear as children
                                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                            if (elem.nodeType < 6) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    },

                                    "parent": function(elem) {
                                        return !Expr.pseudos["empty"](elem);
                                    },

                                    // Element/input types
                                    "header": function(elem) {
                                        return rheader.test(elem.nodeName);
                                    },

                                    "input": function(elem) {
                                        return rinputs.test(elem.nodeName);
                                    },

                                    "button": function(elem) {
                                        var name = elem.nodeName.toLowerCase();
                                        return name === "input" && elem.type === "button" || name === "button";
                                    },

                                    "text": function(elem) {
                                        var attr;
                                        return elem.nodeName.toLowerCase() === "input" &&
                                            elem.type === "text" &&

                                            // Support: IE<8
                                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                                            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                                    },

                                    // Position-in-collection
                                    "first": createPositionalPseudo(function() {
                                        return [0];
                                    }),

                                    "last": createPositionalPseudo(function(matchIndexes, length) {
                                        return [length - 1];
                                    }),

                                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                                        return [argument < 0 ? argument + length : argument];
                                    }),

                                    "even": createPositionalPseudo(function(matchIndexes, length) {
                                        var i = 0;
                                        for (; i < length; i += 2) {
                                            matchIndexes.push(i);
                                        }
                                        return matchIndexes;
                                    }),

                                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                                        var i = 1;
                                        for (; i < length; i += 2) {
                                            matchIndexes.push(i);
                                        }
                                        return matchIndexes;
                                    }),

                                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                                        var i = argument < 0 ? argument + length : argument;
                                        for (; --i >= 0;) {
                                            matchIndexes.push(i);
                                        }
                                        return matchIndexes;
                                    }),

                                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
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

                            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                                var matched, match, tokens, type,
                                    soFar, groups, preFilters,
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
                                        groups.push((tokens = []));
                                    }

                                    matched = false;

                                    // Combinators
                                    if ((match = rcombinators.exec(soFar))) {
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
                                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                                                (match = preFilters[type](match)))) {
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
                                return parseOnly ?
                                    soFar.length :
                                    soFar ?
                                    Sizzle.error(selector) :
                                    // Cache the tokens
                                    tokenCache(selector, groups).slice(0);
                            };

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
                                    skip = combinator.next,
                                    key = skip || dir,
                                    checkNonElements = base && key === "parentNode",
                                    doneName = done++;

                                return combinator.first ?
                                    // Check against closest ancestor/preceding element
                                    function(elem, context, xml) {
                                        while ((elem = elem[dir])) {
                                            if (elem.nodeType === 1 || checkNonElements) {
                                                return matcher(elem, context, xml);
                                            }
                                        }
                                        return false;
                                    } :

                                    // Check against all ancestor/preceding elements
                                    function(elem, context, xml) {
                                        var oldCache, uniqueCache, outerCache,
                                            newCache = [dirruns, doneName];

                                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                                        if (xml) {
                                            while ((elem = elem[dir])) {
                                                if (elem.nodeType === 1 || checkNonElements) {
                                                    if (matcher(elem, context, xml)) {
                                                        return true;
                                                    }
                                                }
                                            }
                                        } else {
                                            while ((elem = elem[dir])) {
                                                if (elem.nodeType === 1 || checkNonElements) {
                                                    outerCache = elem[expando] || (elem[expando] = {});

                                                    // Support: IE <9 only
                                                    // Defend against cloned attroperties (jQuery gh-1709)
                                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                                    if (skip && skip === elem.nodeName.toLowerCase()) {
                                                        elem = elem[dir] || elem;
                                                    } else if ((oldCache = uniqueCache[key]) &&
                                                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                                                        // Assign to newCache so results back-propagate to previous elements
                                                        return (newCache[2] = oldCache[2]);
                                                    } else {
                                                        // Reuse newcache so results back-propagate to previous elements
                                                        uniqueCache[key] = newCache;

                                                        // A match means we're done; a fail means we have to keep checking
                                                        if ((newCache[2] = matcher(elem, context, xml))) {
                                                            return true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        return false;
                                    };
                            }

                            function elementMatcher(matchers) {
                                return matchers.length > 1 ?
                                    function(elem, context, xml) {
                                        var i = matchers.length;
                                        while (i--) {
                                            if (!matchers[i](elem, context, xml)) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    } :
                                    matchers[0];
                            }

                            function multipleContexts(selector, contexts, results) {
                                var i = 0,
                                    len = contexts.length;
                                for (; i < len; i++) {
                                    Sizzle(selector, contexts[i], results);
                                }
                                return results;
                            }

                            function condense(unmatched, map, filter, context, xml) {
                                var elem,
                                    newUnmatched = [],
                                    i = 0,
                                    len = unmatched.length,
                                    mapped = map != null;

                                for (; i < len; i++) {
                                    if ((elem = unmatched[i])) {
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
                                return markFunction(function(seed, results, context, xml) {
                                    var temp, i, elem,
                                        preMap = [],
                                        postMap = [],
                                        preexisting = results.length,

                                        // Get initial elements from seed or context
                                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                                        // Prefilter to get matcher input, preserving a map for seed-results synchronization
                                        matcherIn = preFilter && (seed || !selector) ?
                                        condense(elems, preMap, preFilter, context, xml) :
                                        elems,

                                        matcherOut = matcher ?
                                        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                                        postFinder || (seed ? preFilter : preexisting || postFilter) ?

                                        // ...intermediate processing is necessary
                                        [] :

                                        // ...otherwise use results directly
                                        results :
                                        matcherIn;

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
                                            if ((elem = temp[i])) {
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
                                                    if ((elem = matcherOut[i])) {
                                                        // Restore matcherIn since elem is not yet a final match
                                                        temp.push((matcherIn[i] = elem));
                                                    }
                                                }
                                                postFinder(null, (matcherOut = []), temp, xml);
                                            }

                                            // Move matched elements from seed to results to keep them synchronized
                                            i = matcherOut.length;
                                            while (i--) {
                                                if ((elem = matcherOut[i]) &&
                                                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                                    seed[temp] = !(results[temp] = elem);
                                                }
                                            }
                                        }

                                        // Add elements to results, through postFinder if defined
                                    } else {
                                        matcherOut = condense(
                                            matcherOut === results ?
                                            matcherOut.splice(preexisting, matcherOut.length) :
                                            matcherOut
                                        );
                                        if (postFinder) {
                                            postFinder(null, results, matcherOut, xml);
                                        } else {
                                            push.apply(results, matcherOut);
                                        }
                                    }
                                });
                            }

                            function matcherFromTokens(tokens) {
                                var checkContext, matcher, j,
                                    len = tokens.length,
                                    leadingRelative = Expr.relative[tokens[0].type],
                                    implicitRelative = leadingRelative || Expr.relative[" "],
                                    i = leadingRelative ? 1 : 0,

                                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                                    matchContext = addCombinator(function(elem) {
                                        return elem === checkContext;
                                    }, implicitRelative, true),
                                    matchAnyContext = addCombinator(function(elem) {
                                        return indexOf(checkContext, elem) > -1;
                                    }, implicitRelative, true),
                                    matchers = [function(elem, context, xml) {
                                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                                            (checkContext = context).nodeType ?
                                            matchContext(elem, context, xml) :
                                            matchAnyContext(elem, context, xml));
                                        // Avoid hanging onto element (issue #299)
                                        checkContext = null;
                                        return ret;
                                    }];

                                for (; i < len; i++) {
                                    if ((matcher = Expr.relative[tokens[i].type])) {
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
                                            return setMatcher(
                                                i > 1 && elementMatcher(matchers),
                                                i > 1 && toSelector(
                                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                                    tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
                                                ).replace(rtrim, "$1"),
                                                matcher,
                                                i < j && matcherFromTokens(tokens.slice(i, j)),
                                                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                                j < len && toSelector(tokens)
                                            );
                                        }
                                        matchers.push(matcher);
                                    }
                                }

                                return elementMatcher(matchers);
                            }

                            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                                var bySet = setMatchers.length > 0,
                                    byElement = elementMatchers.length > 0,
                                    superMatcher = function(seed, context, xml, results, outermost) {
                                        var elem, j, matcher,
                                            matchedCount = 0,
                                            i = "0",
                                            unmatched = seed && [],
                                            setMatched = [],
                                            contextBackup = outermostContext,
                                            // We must always have either seed elements or outermost context
                                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                                            // Use integer dirruns iff this is the outermost matcher
                                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                                            len = elems.length;

                                        if (outermost) {
                                            outermostContext = context === document || context || outermost;
                                        }

                                        // Add elements passing elementMatchers directly to results
                                        // Support: IE<9, Safari
                                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                                        for (; i !== len && (elem = elems[i]) != null; i++) {
                                            if (byElement && elem) {
                                                j = 0;
                                                if (!context && elem.ownerDocument !== document) {
                                                    setDocument(elem);
                                                    xml = !documentIsHTML;
                                                }
                                                while ((matcher = elementMatchers[j++])) {
                                                    if (matcher(elem, context || document, xml)) {
                                                        results.push(elem);
                                                        break;
                                                    }
                                                }
                                                if (outermost) {
                                                    dirruns = dirrunsUnique;
                                                }
                                            }

                                            // Track unmatched elements for set filters
                                            if (bySet) {
                                                // They will have gone through all possible matchers
                                                if ((elem = !matcher && elem)) {
                                                    matchedCount--;
                                                }

                                                // Lengthen the array for every element, matched or not
                                                if (seed) {
                                                    unmatched.push(elem);
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
                                        if (bySet && i !== matchedCount) {
                                            j = 0;
                                            while ((matcher = setMatchers[j++])) {
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
                                            if (outermost && !seed && setMatched.length > 0 &&
                                                (matchedCount + setMatchers.length) > 1) {

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

                                return bySet ?
                                    markFunction(superMatcher) :
                                    superMatcher;
                            }

                            compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
                                var i,
                                    setMatchers = [],
                                    elementMatchers = [],
                                    cached = compilerCache[selector + " "];

                                if (!cached) {
                                    // Generate a function of recursive functions that can be used to check each element
                                    if (!match) {
                                        match = tokenize(selector);
                                    }
                                    i = match.length;
                                    while (i--) {
                                        cached = matcherFromTokens(match[i]);
                                        if (cached[expando]) {
                                            setMatchers.push(cached);
                                        } else {
                                            elementMatchers.push(cached);
                                        }
                                    }

                                    // Cache the compiled function
                                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

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
                            select = Sizzle.select = function(selector, context, results, seed) {
                                var i, tokens, token, type, find,
                                    compiled = typeof selector === "function" && selector,
                                    match = !seed && tokenize((selector = compiled.selector || selector));

                                results = results || [];

                                // Try to minimize operations if there is only one selector in the list and no seed
                                // (the latter of which guarantees us context)
                                if (match.length === 1) {

                                    // Reduce context if the leading compound selector is an ID
                                    tokens = match[0] = match[0].slice(0);
                                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                                        context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                        if (!context) {
                                            return results;

                                            // Precompiled matchers will still verify ancestry, so step up a level
                                        } else if (compiled) {
                                            context = context.parentNode;
                                        }

                                        selector = selector.slice(tokens.shift().value.length);
                                    }

                                    // Fetch a seed set for right-to-left matching
                                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                                    while (i--) {
                                        token = tokens[i];

                                        // Abort if we hit a combinator
                                        if (Expr.relative[(type = token.type)]) {
                                            break;
                                        }
                                        if ((find = Expr.find[type])) {
                                            // Search, expanding context for leading sibling combinators
                                            if ((seed = find(
                                                    token.matches[0].replace(runescape, funescape),
                                                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                                                ))) {

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

                                // Compile and execute a filtering function if one is not provided
                                // Provide `match` to avoid retokenization if we modified the selector above
                                (compiled || compile(selector, match))(
                                    seed,
                                    context, !documentIsHTML,
                                    results, !context || rsibling.test(selector) && testContext(context.parentNode) || context
                                );
                                return results;
                            };

                            // One-time assignments

                            // Sort stability
                            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

                            // Support: Chrome 14-35+
                            // Always assume duplicates if they aren't passed to the comparison function
                            support.detectDuplicates = !!hasDuplicate;

                            // Initialize against the default document
                            setDocument();

                            // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
                            // Detached nodes confoundingly follow *each other*
                            support.sortDetached = assert(function(el) {
                                // Should return 1, but returns 4 (following)
                                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                            });

                            // Support: IE<8
                            // Prevent attribute/property "interpolation"
                            // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                            if (!assert(function(el) {
                                    el.innerHTML = "<a href='#'></a>";
                                    return el.firstChild.getAttribute("href") === "#";
                                })) {
                                addHandle("type|href|height|width", function(elem, name, isXML) {
                                    if (!isXML) {
                                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                                    }
                                });
                            }

                            // Support: IE<9
                            // Use defaultValue in place of getAttribute("value")
                            if (!support.attributes || !assert(function(el) {
                                    el.innerHTML = "<input/>";
                                    el.firstChild.setAttribute("value", "");
                                    return el.firstChild.getAttribute("value") === "";
                                })) {
                                addHandle("value", function(elem, name, isXML) {
                                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                                        return elem.defaultValue;
                                    }
                                });
                            }

                            // Support: IE<9
                            // Use getAttributeNode to fetch booleans when getAttribute lies
                            if (!assert(function(el) {
                                    return el.getAttribute("disabled") == null;
                                })) {
                                addHandle(booleans, function(elem, name, isXML) {
                                    var val;
                                    if (!isXML) {
                                        return elem[name] === true ? name.toLowerCase() :
                                            (val = elem.getAttributeNode(name)) && val.specified ?
                                            val.value :
                                            null;
                                    }
                                });
                            }

                            return Sizzle;

                        })(window);



                    jQuery.find = Sizzle;
                    jQuery.expr = Sizzle.selectors;

                    // Deprecated
                    jQuery.expr[":"] = jQuery.expr.pseudos;
                    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                    jQuery.text = Sizzle.getText;
                    jQuery.isXMLDoc = Sizzle.isXML;
                    jQuery.contains = Sizzle.contains;
                    jQuery.escapeSelector = Sizzle.escape;




                    var dir = function(elem, dir, until) {
                        var matched = [],
                            truncate = until !== undefined;

                        while ((elem = elem[dir]) && elem.nodeType !== 9) {
                            if (elem.nodeType === 1) {
                                if (truncate && jQuery(elem).is(until)) {
                                    break;
                                }
                                matched.push(elem);
                            }
                        }
                        return matched;
                    };


                    var siblings = function(n, elem) {
                        var matched = [];

                        for (; n; n = n.nextSibling) {
                            if (n.nodeType === 1 && n !== elem) {
                                matched.push(n);
                            }
                        }

                        return matched;
                    };


                    var rneedsContext = jQuery.expr.match.needsContext;



                    function nodeName(elem, name) {

                        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

                    };
                    var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);



                    // Implement the identical functionality for filter and not
                    function winnow(elements, qualifier, not) {
                        if (isFunction(qualifier)) {
                            return jQuery.grep(elements, function(elem, i) {
                                return !!qualifier.call(elem, i, elem) !== not;
                            });
                        }

                        // Single element
                        if (qualifier.nodeType) {
                            return jQuery.grep(elements, function(elem) {
                                return (elem === qualifier) !== not;
                            });
                        }

                        // Arraylike of elements (jQuery, arguments, Array)
                        if (typeof qualifier !== "string") {
                            return jQuery.grep(elements, function(elem) {
                                return (indexOf.call(qualifier, elem) > -1) !== not;
                            });
                        }

                        // Filtered directly for both simple and complex selectors
                        return jQuery.filter(qualifier, elements, not);
                    }

                    jQuery.filter = function(expr, elems, not) {
                        var elem = elems[0];

                        if (not) {
                            expr = ":not(" + expr + ")";
                        }

                        if (elems.length === 1 && elem.nodeType === 1) {
                            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
                        }

                        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                            return elem.nodeType === 1;
                        }));
                    };

                    jQuery.fn.extend({
                        find: function(selector) {
                            var i, ret,
                                len = this.length,
                                self = this;

                            if (typeof selector !== "string") {
                                return this.pushStack(jQuery(selector).filter(function() {
                                    for (i = 0; i < len; i++) {
                                        if (jQuery.contains(self[i], this)) {
                                            return true;
                                        }
                                    }
                                }));
                            }

                            ret = this.pushStack([]);

                            for (i = 0; i < len; i++) {
                                jQuery.find(selector, self[i], ret);
                            }

                            return len > 1 ? jQuery.uniqueSort(ret) : ret;
                        },
                        filter: function(selector) {
                            return this.pushStack(winnow(this, selector || [], false));
                        },
                        not: function(selector) {
                            return this.pushStack(winnow(this, selector || [], true));
                        },
                        is: function(selector) {
                            return !!winnow(
                                this,

                                // If this is a positional/relative selector, check membership in the returned set
                                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                                typeof selector === "string" && rneedsContext.test(selector) ?
                                jQuery(selector) :
                                selector || [],
                                false
                            ).length;
                        }
                    });


                    // Initialize a jQuery object


                    // A central reference to the root jQuery(document)
                    var rootjQuery,

                        // A simple way to check for HTML strings
                        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
                        // Strict HTML recognition (#11290: must start with <)
                        // Shortcut simple #id case for speed
                        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

                        init = jQuery.fn.init = function(selector, context, root) {
                            var match, elem;

                            // HANDLE: $(""), $(null), $(undefined), $(false)
                            if (!selector) {
                                return this;
                            }

                            // Method init() accepts an alternate rootjQuery
                            // so migrate can support jQuery.sub (gh-2101)
                            root = root || rootjQuery;

                            // Handle HTML strings
                            if (typeof selector === "string") {
                                if (selector[0] === "<" &&
                                    selector[selector.length - 1] === ">" &&
                                    selector.length >= 3) {

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

                                        // Option to run scripts is true for back-compat
                                        // Intentionally let the error be thrown if parseHTML is not present
                                        jQuery.merge(this, jQuery.parseHTML(
                                            match[1],
                                            context && context.nodeType ? context.ownerDocument || context : document,
                                            true
                                        ));

                                        // HANDLE: $(html, props)
                                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                            for (match in context) {

                                                // Properties of context are called as methods if possible
                                                if (isFunction(this[match])) {
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

                                        if (elem) {

                                            // Inject the element directly into the jQuery object
                                            this[0] = elem;
                                            this.length = 1;
                                        }
                                        return this;
                                    }

                                    // HANDLE: $(expr, $(...))
                                } else if (!context || context.jquery) {
                                    return (context || root).find(selector);

                                    // HANDLE: $(expr, context)
                                    // (which is just equivalent to: $(context).find(expr)
                                } else {
                                    return this.constructor(context).find(selector);
                                }

                                // HANDLE: $(DOMElement)
                            } else if (selector.nodeType) {
                                this[0] = selector;
                                this.length = 1;
                                return this;

                                // HANDLE: $(function)
                                // Shortcut for document ready
                            } else if (isFunction(selector)) {
                                return root.ready !== undefined ?
                                    root.ready(selector) :

                                    // Execute immediately if ready is not present
                                    selector(jQuery);
                            }

                            return jQuery.makeArray(selector, this);
                        };

                    // Give the init function the jQuery prototype for later instantiation
                    init.prototype = jQuery.fn;

                    // Initialize central reference
                    rootjQuery = jQuery(document);


                    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

                        // Methods guaranteed to produce a unique set when starting from a unique set
                        guaranteedUnique = {
                            children: true,
                            contents: true,
                            next: true,
                            prev: true
                        };

                    jQuery.fn.extend({
                        has: function(target) {
                            var targets = jQuery(target, this),
                                l = targets.length;

                            return this.filter(function() {
                                var i = 0;
                                for (; i < l; i++) {
                                    if (jQuery.contains(this, targets[i])) {
                                        return true;
                                    }
                                }
                            });
                        },

                        closest: function(selectors, context) {
                            var cur,
                                i = 0,
                                l = this.length,
                                matched = [],
                                targets = typeof selectors !== "string" && jQuery(selectors);

                            // Positional selectors never match, since there's no _selection_ context
                            if (!rneedsContext.test(selectors)) {
                                for (; i < l; i++) {
                                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

                                        // Always skip document fragments
                                        if (cur.nodeType < 11 && (targets ?
                                                targets.index(cur) > -1 :

                                                // Don't pass non-elements to Sizzle
                                                cur.nodeType === 1 &&
                                                jQuery.find.matchesSelector(cur, selectors))) {

                                            matched.push(cur);
                                            break;
                                        }
                                    }
                                }
                            }

                            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                        },

                        // Determine the position of an element within the set
                        index: function(elem) {

                            // No argument, return index in parent
                            if (!elem) {
                                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                            }

                            // Index in selector
                            if (typeof elem === "string") {
                                return indexOf.call(jQuery(elem), this[0]);
                            }

                            // Locate the position of the desired element
                            return indexOf.call(this,

                                // If it receives a jQuery object, the first element is used
                                elem.jquery ? elem[0] : elem
                            );
                        },

                        add: function(selector, context) {
                            return this.pushStack(
                                jQuery.uniqueSort(
                                    jQuery.merge(this.get(), jQuery(selector, context))
                                )
                            );
                        },

                        addBack: function(selector) {
                            return this.add(selector == null ?
                                this.prevObject : this.prevObject.filter(selector)
                            );
                        }
                    });

                    function sibling(cur, dir) {
                        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
                        return cur;
                    }

                    jQuery.each({
                        parent: function(elem) {
                            var parent = elem.parentNode;
                            return parent && parent.nodeType !== 11 ? parent : null;
                        },
                        parents: function(elem) {
                            return dir(elem, "parentNode");
                        },
                        parentsUntil: function(elem, i, until) {
                            return dir(elem, "parentNode", until);
                        },
                        next: function(elem) {
                            return sibling(elem, "nextSibling");
                        },
                        prev: function(elem) {
                            return sibling(elem, "previousSibling");
                        },
                        nextAll: function(elem) {
                            return dir(elem, "nextSibling");
                        },
                        prevAll: function(elem) {
                            return dir(elem, "previousSibling");
                        },
                        nextUntil: function(elem, i, until) {
                            return dir(elem, "nextSibling", until);
                        },
                        prevUntil: function(elem, i, until) {
                            return dir(elem, "previousSibling", until);
                        },
                        siblings: function(elem) {
                            return siblings((elem.parentNode || {}).firstChild, elem);
                        },
                        children: function(elem) {
                            return siblings(elem.firstChild);
                        },
                        contents: function(elem) {
                            if (nodeName(elem, "iframe")) {
                                return elem.contentDocument;
                            }

                            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                            // Treat the template element as a regular one in browsers that
                            // don't support it.
                            if (nodeName(elem, "template")) {
                                elem = elem.content || elem;
                            }

                            return jQuery.merge([], elem.childNodes);
                        }
                    }, function(name, fn) {
                        jQuery.fn[name] = function(until, selector) {
                            var matched = jQuery.map(this, fn, until);

                            if (name.slice(-5) !== "Until") {
                                selector = until;
                            }

                            if (selector && typeof selector === "string") {
                                matched = jQuery.filter(selector, matched);
                            }

                            if (this.length > 1) {

                                // Remove duplicates
                                if (!guaranteedUnique[name]) {
                                    jQuery.uniqueSort(matched);
                                }

                                // Reverse order for parents* and prev-derivatives
                                if (rparentsprev.test(name)) {
                                    matched.reverse();
                                }
                            }

                            return this.pushStack(matched);
                        };
                    });
                    var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);



                    // Convert String-formatted options into Object-formatted ones
                    function createOptions(options) {
                        var object = {};
                        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
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
                    jQuery.Callbacks = function(options) {

                        // Convert options from String-formatted to Object-formatted if needed
                        // (we check in cache first)
                        options = typeof options === "string" ?
                            createOptions(options) :
                            jQuery.extend({}, options);

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
                                locked = locked || options.once;

                                // Execute callbacks for all pending executions,
                                // respecting firingIndex overrides and runtime changes
                                fired = firing = true;
                                for (; queue.length; firingIndex = -1) {
                                    memory = queue.shift();
                                    while (++firingIndex < list.length) {

                                        // Run callback and check for early termination
                                        if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                                            options.stopOnFalse) {

                                            // Jump to end and forget the data so .add doesn't re-fire
                                            firingIndex = list.length;
                                            memory = false;
                                        }
                                    }
                                }

                                // Forget the data if we're done with it
                                if (!options.memory) {
                                    memory = false;
                                }

                                firing = false;

                                // Clean up if we're done firing for good
                                if (locked) {

                                    // Keep an empty list if we have data for future add calls
                                    if (memory) {
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
                                    if (list) {

                                        // If we have memory from a past run, we should fire after adding
                                        if (memory && !firing) {
                                            firingIndex = list.length - 1;
                                            queue.push(memory);
                                        }

                                        (function add(args) {
                                            jQuery.each(args, function(_, arg) {
                                                if (isFunction(arg)) {
                                                    if (!options.unique || !self.has(arg)) {
                                                        list.push(arg);
                                                    }
                                                } else if (arg && arg.length && toType(arg) !== "string") {

                                                    // Inspect recursively
                                                    add(arg);
                                                }
                                            });
                                        })(arguments);

                                        if (memory && !firing) {
                                            fire();
                                        }
                                    }
                                    return this;
                                },

                                // Remove a callback from the list
                                remove: function() {
                                    jQuery.each(arguments, function(_, arg) {
                                        var index;
                                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                            list.splice(index, 1);

                                            // Handle firing indexes
                                            if (index <= firingIndex) {
                                                firingIndex--;
                                            }
                                        }
                                    });
                                    return this;
                                },

                                // Check if a given callback is in the list.
                                // If no argument is given, return whether or not list has callbacks attached.
                                has: function(fn) {
                                    return fn ?
                                        jQuery.inArray(fn, list) > -1 :
                                        list.length > 0;
                                },

                                // Remove all callbacks from the list
                                empty: function() {
                                    if (list) {
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
                                    if (!memory && !firing) {
                                        list = memory = "";
                                    }
                                    return this;
                                },
                                locked: function() {
                                    return !!locked;
                                },

                                // Call all callbacks with the given context and arguments
                                fireWith: function(context, args) {
                                    if (!locked) {
                                        args = args || [];
                                        args = [context, args.slice ? args.slice() : args];
                                        queue.push(args);
                                        if (!firing) {
                                            fire();
                                        }
                                    }
                                    return this;
                                },

                                // Call all the callbacks with the given arguments
                                fire: function() {
                                    self.fireWith(this, arguments);
                                    return this;
                                },

                                // To know if the callbacks have already been called at least once
                                fired: function() {
                                    return !!fired;
                                }
                            };

                        return self;
                    };


                    function Identity(v) {
                        return v;
                    }

                    function Thrower(ex) {
                        throw ex;
                    }

                    function adoptValue(value, resolve, reject, noValue) {
                        var method;

                        try {

                            // Check for promise aspect first to privilege synchronous behavior
                            if (value && isFunction((method = value.promise))) {
                                method.call(value).done(resolve).fail(reject);

                                // Other thenables
                            } else if (value && isFunction((method = value.then))) {
                                method.call(value, resolve, reject);

                                // Other non-thenables
                            } else {

                                // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                                // * false: [ value ].slice( 0 ) => resolve( value )
                                // * true: [ value ].slice( 1 ) => resolve()
                                resolve.apply(undefined, [value].slice(noValue));
                            }

                            // For Promises/A+, convert exceptions into rejections
                            // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
                            // Deferred#then to conditionally suppress rejection.
                        } catch (value) {

                            // Support: Android 4.0 only
                            // Strict mode functions invoked without .call/.apply get global-object context
                            reject.apply(undefined, [value]);
                        }
                    }

                    jQuery.extend({

                        Deferred: function(func) {
                            var tuples = [

                                    // action, add listener, callbacks,
                                    // ... .then handlers, argument index, [final state]
                                    ["notify", "progress", jQuery.Callbacks("memory"),
                                        jQuery.Callbacks("memory"), 2
                                    ],
                                    ["resolve", "done", jQuery.Callbacks("once memory"),
                                        jQuery.Callbacks("once memory"), 0, "resolved"
                                    ],
                                    ["reject", "fail", jQuery.Callbacks("once memory"),
                                        jQuery.Callbacks("once memory"), 1, "rejected"
                                    ]
                                ],
                                state = "pending",
                                promise = {
                                    state: function() {
                                        return state;
                                    },
                                    always: function() {
                                        deferred.done(arguments).fail(arguments);
                                        return this;
                                    },
                                    "catch": function(fn) {
                                        return promise.then(null, fn);
                                    },

                                    // Keep pipe for back-compat
                                    pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                                        var fns = arguments;

                                        return jQuery.Deferred(function(newDefer) {
                                            jQuery.each(tuples, function(i, tuple) {

                                                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                                                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                                deferred[tuple[1]](function() {
                                                    var returned = fn && fn.apply(this, arguments);
                                                    if (returned && isFunction(returned.promise)) {
                                                        returned.promise()
                                                            .progress(newDefer.notify)
                                                            .done(newDefer.resolve)
                                                            .fail(newDefer.reject);
                                                    } else {
                                                        newDefer[tuple[0] + "With"](
                                                            this,
                                                            fn ? [returned] : arguments
                                                        );
                                                    }
                                                });
                                            });
                                            fns = null;
                                        }).promise();
                                    },
                                    then: function(onFulfilled, onRejected, onProgress) {
                                        var maxDepth = 0;

                                        function resolve(depth, deferred, handler, special) {
                                            return function() {
                                                var that = this,
                                                    args = arguments,
                                                    mightThrow = function() {
                                                        var returned, then;

                                                        // Support: Promises/A+ section 2.3.3.3.3
                                                        // https://promisesaplus.com/#point-59
                                                        // Ignore double-resolution attempts
                                                        if (depth < maxDepth) {
                                                            return;
                                                        }

                                                        returned = handler.apply(that, args);

                                                        // Support: Promises/A+ section 2.3.1
                                                        // https://promisesaplus.com/#point-48
                                                        if (returned === deferred.promise()) {
                                                            throw new TypeError("Thenable self-resolution");
                                                        }

                                                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                                                        // https://promisesaplus.com/#point-54
                                                        // https://promisesaplus.com/#point-75
                                                        // Retrieve `then` only once
                                                        then = returned &&

                                                            // Support: Promises/A+ section 2.3.4
                                                            // https://promisesaplus.com/#point-64
                                                            // Only check objects and functions for thenability
                                                            (typeof returned === "object" ||
                                                                typeof returned === "function") &&
                                                            returned.then;

                                                        // Handle a returned thenable
                                                        if (isFunction(then)) {

                                                            // Special processors (notify) just wait for resolution
                                                            if (special) {
                                                                then.call(
                                                                    returned,
                                                                    resolve(maxDepth, deferred, Identity, special),
                                                                    resolve(maxDepth, deferred, Thrower, special)
                                                                );

                                                                // Normal processors (resolve) also hook into progress
                                                            } else {

                                                                // ...and disregard older resolution values
                                                                maxDepth++;

                                                                then.call(
                                                                    returned,
                                                                    resolve(maxDepth, deferred, Identity, special),
                                                                    resolve(maxDepth, deferred, Thrower, special),
                                                                    resolve(maxDepth, deferred, Identity,
                                                                        deferred.notifyWith)
                                                                );
                                                            }

                                                            // Handle all other returned values
                                                        } else {

                                                            // Only substitute handlers pass on context
                                                            // and multiple values (non-spec behavior)
                                                            if (handler !== Identity) {
                                                                that = undefined;
                                                                args = [returned];
                                                            }

                                                            // Process the value(s)
                                                            // Default process is resolve
                                                            (special || deferred.resolveWith)(that, args);
                                                        }
                                                    },

                                                    // Only normal processors (resolve) catch and reject exceptions
                                                    process = special ?
                                                    mightThrow :
                                                    function() {
                                                        try {
                                                            mightThrow();
                                                        } catch (e) {

                                                            if (jQuery.Deferred.exceptionHook) {
                                                                jQuery.Deferred.exceptionHook(e,
                                                                    process.stackTrace);
                                                            }

                                                            // Support: Promises/A+ section 2.3.3.3.4.1
                                                            // https://promisesaplus.com/#point-61
                                                            // Ignore post-resolution exceptions
                                                            if (depth + 1 >= maxDepth) {

                                                                // Only substitute handlers pass on context
                                                                // and multiple values (non-spec behavior)
                                                                if (handler !== Thrower) {
                                                                    that = undefined;
                                                                    args = [e];
                                                                }

                                                                deferred.rejectWith(that, args);
                                                            }
                                                        }
                                                    };

                                                // Support: Promises/A+ section 2.3.3.3.1
                                                // https://promisesaplus.com/#point-57
                                                // Re-resolve promises immediately to dodge false rejection from
                                                // subsequent errors
                                                if (depth) {
                                                    process();
                                                } else {

                                                    // Call an optional hook to record the stack, in case of exception
                                                    // since it's otherwise lost when execution goes async
                                                    if (jQuery.Deferred.getStackHook) {
                                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                                    }
                                                    window.setTimeout(process);
                                                }
                                            };
                                        }

                                        return jQuery.Deferred(function(newDefer) {

                                            // progress_handlers.add( ... )
                                            tuples[0][3].add(
                                                resolve(
                                                    0,
                                                    newDefer,
                                                    isFunction(onProgress) ?
                                                    onProgress :
                                                    Identity,
                                                    newDefer.notifyWith
                                                )
                                            );

                                            // fulfilled_handlers.add( ... )
                                            tuples[1][3].add(
                                                resolve(
                                                    0,
                                                    newDefer,
                                                    isFunction(onFulfilled) ?
                                                    onFulfilled :
                                                    Identity
                                                )
                                            );

                                            // rejected_handlers.add( ... )
                                            tuples[2][3].add(
                                                resolve(
                                                    0,
                                                    newDefer,
                                                    isFunction(onRejected) ?
                                                    onRejected :
                                                    Thrower
                                                )
                                            );
                                        }).promise();
                                    },

                                    // Get a promise for this deferred
                                    // If obj is provided, the promise aspect is added to the object
                                    promise: function(obj) {
                                        return obj != null ? jQuery.extend(obj, promise) : promise;
                                    }
                                },
                                deferred = {};

                            // Add list-specific methods
                            jQuery.each(tuples, function(i, tuple) {
                                var list = tuple[2],
                                    stateString = tuple[5];

                                // promise.progress = list.add
                                // promise.done = list.add
                                // promise.fail = list.add
                                promise[tuple[1]] = list.add;

                                // Handle state
                                if (stateString) {
                                    list.add(
                                        function() {

                                            // state = "resolved" (i.e., fulfilled)
                                            // state = "rejected"
                                            state = stateString;
                                        },

                                        // rejected_callbacks.disable
                                        // fulfilled_callbacks.disable
                                        tuples[3 - i][2].disable,

                                        // rejected_handlers.disable
                                        // fulfilled_handlers.disable
                                        tuples[3 - i][3].disable,

                                        // progress_callbacks.lock
                                        tuples[0][2].lock,

                                        // progress_handlers.lock
                                        tuples[0][3].lock
                                    );
                                }

                                // progress_handlers.fire
                                // fulfilled_handlers.fire
                                // rejected_handlers.fire
                                list.add(tuple[3].fire);

                                // deferred.notify = function() { deferred.notifyWith(...) }
                                // deferred.resolve = function() { deferred.resolveWith(...) }
                                // deferred.reject = function() { deferred.rejectWith(...) }
                                deferred[tuple[0]] = function() {
                                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                                    return this;
                                };

                                // deferred.notifyWith = list.fireWith
                                // deferred.resolveWith = list.fireWith
                                // deferred.rejectWith = list.fireWith
                                deferred[tuple[0] + "With"] = list.fireWith;
                            });

                            // Make the deferred a promise
                            promise.promise(deferred);

                            // Call given func if any
                            if (func) {
                                func.call(deferred, deferred);
                            }

                            // All done!
                            return deferred;
                        },

                        // Deferred helper
                        when: function(singleValue) {
                            var

                                // count of uncompleted subordinates
                                remaining = arguments.length,

                                // count of unprocessed arguments
                                i = remaining,

                                // subordinate fulfillment data
                                resolveContexts = Array(i),
                                resolveValues = slice.call(arguments),

                                // the master Deferred
                                master = jQuery.Deferred(),

                                // subordinate callback factory
                                updateFunc = function(i) {
                                    return function(value) {
                                        resolveContexts[i] = this;
                                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                        if (!(--remaining)) {
                                            master.resolveWith(resolveContexts, resolveValues);
                                        }
                                    };
                                };

                            // Single- and empty arguments are adopted like Promise.resolve
                            if (remaining <= 1) {
                                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

                                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                                if (master.state() === "pending" ||
                                    isFunction(resolveValues[i] && resolveValues[i].then)) {

                                    return master.then();
                                }
                            }

                            // Multiple arguments are aggregated like Promise.all array elements
                            while (i--) {
                                adoptValue(resolveValues[i], updateFunc(i), master.reject);
                            }

                            return master.promise();
                        }
                    });


                    // These usually indicate a programmer mistake during development,
                    // warn about them ASAP rather than swallowing them by default.
                    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

                    jQuery.Deferred.exceptionHook = function(error, stack) {

                        // Support: IE 8 - 9 only
                        // Console exists when dev tools are open, which can happen at any time
                        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                            window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                        }
                    };




                    jQuery.readyException = function(error) {
                        window.setTimeout(function() {
                            throw error;
                        });
                    };




                    // The deferred used on DOM ready
                    var readyList = jQuery.Deferred();

                    jQuery.fn.ready = function(fn) {

                        readyList
                            .then(fn)

                            // Wrap jQuery.readyException in a function so that the lookup
                            // happens at the time of error handling instead of callback
                            // registration.
                            .catch(function(error) {
                                jQuery.readyException(error);
                            });

                        return this;
                    };

                    jQuery.extend({

                        // Is the DOM ready to be used? Set to true once it occurs.
                        isReady: false,

                        // A counter to track how many items to wait for before
                        // the ready event fires. See #6781
                        readyWait: 1,

                        // Handle when the DOM is ready
                        ready: function(wait) {

                            // Abort if there are pending holds or we're already ready
                            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                                return;
                            }

                            // Remember that the DOM is ready
                            jQuery.isReady = true;

                            // If a normal DOM Ready event fired, decrement, and wait if need be
                            if (wait !== true && --jQuery.readyWait > 0) {
                                return;
                            }

                            // If there are functions bound, to execute
                            readyList.resolveWith(document, [jQuery]);
                        }
                    });

                    jQuery.ready.then = readyList.then;

                    // The ready event handler and self cleanup method
                    function completed() {
                        document.removeEventListener("DOMContentLoaded", completed);
                        window.removeEventListener("load", completed);
                        jQuery.ready();
                    }

                    // Catch cases where $(document).ready() is called
                    // after the browser event has already occurred.
                    // Support: IE <=9 - 10 only
                    // Older IE sometimes signals "interactive" too soon
                    if (document.readyState === "complete" ||
                        (document.readyState !== "loading" && !document.documentElement.doScroll)) {

                        // Handle it asynchronously to allow scripts the opportunity to delay ready
                        window.setTimeout(jQuery.ready);

                    } else {

                        // Use the handy event callback
                        document.addEventListener("DOMContentLoaded", completed);

                        // A fallback to window.onload, that will always work
                        window.addEventListener("load", completed);
                    }




                    // Multifunctional method to get and set values of a collection
                    // The value/s can optionally be executed if it's a function
                    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                        var i = 0,
                            len = elems.length,
                            bulk = key == null;

                        // Sets many values
                        if (toType(key) === "object") {
                            chainable = true;
                            for (i in key) {
                                access(elems, fn, i, key[i], true, emptyGet, raw);
                            }

                            // Sets one value
                        } else if (value !== undefined) {
                            chainable = true;

                            if (!isFunction(value)) {
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
                                    fn = function(elem, key, value) {
                                        return bulk.call(jQuery(elem), value);
                                    };
                                }
                            }

                            if (fn) {
                                for (; i < len; i++) {
                                    fn(
                                        elems[i], key, raw ?
                                        value :
                                        value.call(elems[i], i, fn(elems[i], key))
                                    );
                                }
                            }
                        }

                        if (chainable) {
                            return elems;
                        }

                        // Gets
                        if (bulk) {
                            return fn.call(elems);
                        }

                        return len ? fn(elems[0], key) : emptyGet;
                    };


                    // Matches dashed string for camelizing
                    var rmsPrefix = /^-ms-/,
                        rdashAlpha = /-([a-z])/g;

                    // Used by camelCase as callback to replace()
                    function fcamelCase(all, letter) {
                        return letter.toUpperCase();
                    }

                    // Convert dashed to camelCase; used by the css and data modules
                    // Support: IE <=9 - 11, Edge 12 - 15
                    // Microsoft forgot to hump their vendor prefix (#9572)
                    function camelCase(string) {
                        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                    }
                    var acceptData = function(owner) {

                        // Accepts only:
                        //  - Node
                        //    - Node.ELEMENT_NODE
                        //    - Node.DOCUMENT_NODE
                        //  - Object
                        //    - Any
                        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
                    };




                    function Data() {
                        this.expando = jQuery.expando + Data.uid++;
                    }

                    Data.uid = 1;

                    Data.prototype = {

                        cache: function(owner) {

                            // Check if the owner object already has a cache
                            var value = owner[this.expando];

                            // If not, create one
                            if (!value) {
                                value = {};

                                // We can accept data for non-element nodes in modern browsers,
                                // but we should not, see #8335.
                                // Always return an empty object.
                                if (acceptData(owner)) {

                                    // If it is a node unlikely to be stringify-ed or looped over
                                    // use plain assignment
                                    if (owner.nodeType) {
                                        owner[this.expando] = value;

                                        // Otherwise secure it in a non-enumerable property
                                        // configurable must be true to allow the property to be
                                        // deleted when data is removed
                                    } else {
                                        Object.defineProperty(owner, this.expando, {
                                            value: value,
                                            configurable: true
                                        });
                                    }
                                }
                            }

                            return value;
                        },
                        set: function(owner, data, value) {
                            var prop,
                                cache = this.cache(owner);

                            // Handle: [ owner, key, value ] args
                            // Always use camelCase key (gh-2257)
                            if (typeof data === "string") {
                                cache[camelCase(data)] = value;

                                // Handle: [ owner, { properties } ] args
                            } else {

                                // Copy the properties one-by-one to the cache object
                                for (prop in data) {
                                    cache[camelCase(prop)] = data[prop];
                                }
                            }
                            return cache;
                        },
                        get: function(owner, key) {
                            return key === undefined ?
                                this.cache(owner) :

                                // Always use camelCase key (gh-2257)
                                owner[this.expando] && owner[this.expando][camelCase(key)];
                        },
                        access: function(owner, key, value) {

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
                            if (key === undefined ||
                                ((key && typeof key === "string") && value === undefined)) {

                                return this.get(owner, key);
                            }

                            // When the key is not a string, or both a key and value
                            // are specified, set or extend (existing objects) with either:
                            //
                            //   1. An object of properties
                            //   2. A key and value
                            //
                            this.set(owner, key, value);

                            // Since the "set" path can have two possible entry points
                            // return the expected data based on which path was taken[*]
                            return value !== undefined ? value : key;
                        },
                        remove: function(owner, key) {
                            var i,
                                cache = owner[this.expando];

                            if (cache === undefined) {
                                return;
                            }

                            if (key !== undefined) {

                                // Support array or space separated string of keys
                                if (Array.isArray(key)) {

                                    // If key is an array of keys...
                                    // We always set camelCase keys, so remove that.
                                    key = key.map(camelCase);
                                } else {
                                    key = camelCase(key);

                                    // If a key with the spaces exists, use it.
                                    // Otherwise, create an array by matching non-whitespace
                                    key = key in cache ? [key] :
                                        (key.match(rnothtmlwhite) || []);
                                }

                                i = key.length;

                                while (i--) {
                                    delete cache[key[i]];
                                }
                            }

                            // Remove the expando if there's no more data
                            if (key === undefined || jQuery.isEmptyObject(cache)) {

                                // Support: Chrome <=35 - 45
                                // Webkit & Blink performance suffers when deleting properties
                                // from DOM nodes, so set to undefined instead
                                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                                if (owner.nodeType) {
                                    owner[this.expando] = undefined;
                                } else {
                                    delete owner[this.expando];
                                }
                            }
                        },
                        hasData: function(owner) {
                            var cache = owner[this.expando];
                            return cache !== undefined && !jQuery.isEmptyObject(cache);
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

                    function getData(data) {
                        if (data === "true") {
                            return true;
                        }

                        if (data === "false") {
                            return false;
                        }

                        if (data === "null") {
                            return null;
                        }

                        // Only convert to a number if it doesn't change the string
                        if (data === +data + "") {
                            return +data;
                        }

                        if (rbrace.test(data)) {
                            return JSON.parse(data);
                        }

                        return data;
                    }

                    function dataAttr(elem, key, data) {
                        var name;

                        // If nothing was found internally, try to fetch any
                        // data from the HTML5 data-* attribute
                        if (data === undefined && elem.nodeType === 1) {
                            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                            data = elem.getAttribute(name);

                            if (typeof data === "string") {
                                try {
                                    data = getData(data);
                                } catch (e) {}

                                // Make sure we set the data so it isn't changed later
                                dataUser.set(elem, key, data);
                            } else {
                                data = undefined;
                            }
                        }
                        return data;
                    }

                    jQuery.extend({
                        hasData: function(elem) {
                            return dataUser.hasData(elem) || dataPriv.hasData(elem);
                        },

                        data: function(elem, name, data) {
                            return dataUser.access(elem, name, data);
                        },

                        removeData: function(elem, name) {
                            dataUser.remove(elem, name);
                        },

                        // TODO: Now that all calls to _data and _removeData have been replaced
                        // with direct calls to dataPriv methods, these can be deprecated.
                        _data: function(elem, name, data) {
                            return dataPriv.access(elem, name, data);
                        },

                        _removeData: function(elem, name) {
                            dataPriv.remove(elem, name);
                        }
                    });

                    jQuery.fn.extend({
                        data: function(key, value) {
                            var i, name, data,
                                elem = this[0],
                                attrs = elem && elem.attributes;

                            // Gets all values
                            if (key === undefined) {
                                if (this.length) {
                                    data = dataUser.get(elem);

                                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                        i = attrs.length;
                                        while (i--) {

                                            // Support: IE 11 only
                                            // The attrs elements can be null (#14894)
                                            if (attrs[i]) {
                                                name = attrs[i].name;
                                                if (name.indexOf("data-") === 0) {
                                                    name = camelCase(name.slice(5));
                                                    dataAttr(elem, name, data[name]);
                                                }
                                            }
                                        }
                                        dataPriv.set(elem, "hasDataAttrs", true);
                                    }
                                }

                                return data;
                            }

                            // Sets multiple values
                            if (typeof key === "object") {
                                return this.each(function() {
                                    dataUser.set(this, key);
                                });
                            }

                            return access(this, function(value) {
                                var data;

                                // The calling jQuery object (element matches) is not empty
                                // (and therefore has an element appears at this[ 0 ]) and the
                                // `value` parameter was not undefined. An empty jQuery object
                                // will result in `undefined` for elem = this[ 0 ] which will
                                // throw an exception if an attempt to read a data cache is made.
                                if (elem && value === undefined) {

                                    // Attempt to get data from the cache
                                    // The key will always be camelCased in Data
                                    data = dataUser.get(elem, key);
                                    if (data !== undefined) {
                                        return data;
                                    }

                                    // Attempt to "discover" the data in
                                    // HTML5 custom data-* attrs
                                    data = dataAttr(elem, key);
                                    if (data !== undefined) {
                                        return data;
                                    }

                                    // We tried really hard, but the data doesn't exist.
                                    return;
                                }

                                // Set the data...
                                this.each(function() {

                                    // We always store the camelCased key
                                    dataUser.set(this, key, value);
                                });
                            }, null, value, arguments.length > 1, null, true);
                        },

                        removeData: function(key) {
                            return this.each(function() {
                                dataUser.remove(this, key);
                            });
                        }
                    });


                    jQuery.extend({
                        queue: function(elem, type, data) {
                            var queue;

                            if (elem) {
                                type = (type || "fx") + "queue";
                                queue = dataPriv.get(elem, type);

                                // Speed up dequeue by getting out quickly if this is just a lookup
                                if (data) {
                                    if (!queue || Array.isArray(data)) {
                                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                                    } else {
                                        queue.push(data);
                                    }
                                }
                                return queue || [];
                            }
                        },

                        dequeue: function(elem, type) {
                            type = type || "fx";

                            var queue = jQuery.queue(elem, type),
                                startLength = queue.length,
                                fn = queue.shift(),
                                hooks = jQuery._queueHooks(elem, type),
                                next = function() {
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

                                // Clear up the last queue stop function
                                delete hooks.stop;
                                fn.call(elem, next, hooks);
                            }

                            if (!startLength && hooks) {
                                hooks.empty.fire();
                            }
                        },

                        // Not public - generate a queueHooks object, or return the current one
                        _queueHooks: function(elem, type) {
                            var key = type + "queueHooks";
                            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                                empty: jQuery.Callbacks("once memory").add(function() {
                                    dataPriv.remove(elem, [type + "queue", key]);
                                })
                            });
                        }
                    });

                    jQuery.fn.extend({
                        queue: function(type, data) {
                            var setter = 2;

                            if (typeof type !== "string") {
                                data = type;
                                type = "fx";
                                setter--;
                            }

                            if (arguments.length < setter) {
                                return jQuery.queue(this[0], type);
                            }

                            return data === undefined ?
                                this :
                                this.each(function() {
                                    var queue = jQuery.queue(this, type, data);

                                    // Ensure a hooks for this queue
                                    jQuery._queueHooks(this, type);

                                    if (type === "fx" && queue[0] !== "inprogress") {
                                        jQuery.dequeue(this, type);
                                    }
                                });
                        },
                        dequeue: function(type) {
                            return this.each(function() {
                                jQuery.dequeue(this, type);
                            });
                        },
                        clearQueue: function(type) {
                            return this.queue(type || "fx", []);
                        },

                        // Get a promise resolved when queues of a certain type
                        // are emptied (fx is the type by default)
                        promise: function(type, obj) {
                            var tmp,
                                count = 1,
                                defer = jQuery.Deferred(),
                                elements = this,
                                i = this.length,
                                resolve = function() {
                                    if (!(--count)) {
                                        defer.resolveWith(elements, [elements]);
                                    }
                                };

                            if (typeof type !== "string") {
                                obj = type;
                                type = undefined;
                            }
                            type = type || "fx";

                            while (i--) {
                                tmp = dataPriv.get(elements[i], type + "queueHooks");
                                if (tmp && tmp.empty) {
                                    count++;
                                    tmp.empty.add(resolve);
                                }
                            }
                            resolve();
                            return defer.promise(obj);
                        }
                    });
                    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

                    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


                    var cssExpand = ["Top", "Right", "Bottom", "Left"];

                    var isHiddenWithinTree = function(elem, el) {

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
                            jQuery.contains(elem.ownerDocument, elem) &&

                            jQuery.css(elem, "display") === "none";
                    };

                    var swap = function(elem, options, callback, args) {
                        var ret, name,
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
                    };




                    function adjustCSS(elem, prop, valueParts, tween) {
                        var adjusted, scale,
                            maxIterations = 20,
                            currentValue = tween ?
                            function() {
                                return tween.cur();
                            } :
                            function() {
                                return jQuery.css(elem, prop, "");
                            },
                            initial = currentValue(),
                            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

                            // Starting value computation is required for potential unit mismatches
                            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                            rcssNum.exec(jQuery.css(elem, prop));

                        if (initialInUnit && initialInUnit[3] !== unit) {

                            // Support: Firefox <=54
                            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
                            initial = initial / 2;

                            // Trust units reported by jQuery.css
                            unit = unit || initialInUnit[3];

                            // Iteratively approximate from a nonzero starting point
                            initialInUnit = +initial || 1;

                            while (maxIterations--) {

                                // Evaluate and update our best guess (doubling guesses that zero out).
                                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                                jQuery.style(elem, prop, initialInUnit + unit);
                                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                                    maxIterations = 0;
                                }
                                initialInUnit = initialInUnit / scale;

                            }

                            initialInUnit = initialInUnit * 2;
                            jQuery.style(elem, prop, initialInUnit + unit);

                            // Make sure we update the tween properties later on
                            valueParts = valueParts || [];
                        }

                        if (valueParts) {
                            initialInUnit = +initialInUnit || +initial || 0;

                            // Apply relative offset (+=/-=) if specified
                            adjusted = valueParts[1] ?
                                initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                                +valueParts[2];
                            if (tween) {
                                tween.unit = unit;
                                tween.start = initialInUnit;
                                tween.end = adjusted;
                            }
                        }
                        return adjusted;
                    }


                    var defaultDisplayMap = {};

                    function getDefaultDisplay(elem) {
                        var temp,
                            doc = elem.ownerDocument,
                            nodeName = elem.nodeName,
                            display = defaultDisplayMap[nodeName];

                        if (display) {
                            return display;
                        }

                        temp = doc.body.appendChild(doc.createElement(nodeName));
                        display = jQuery.css(temp, "display");

                        temp.parentNode.removeChild(temp);

                        if (display === "none") {
                            display = "block";
                        }
                        defaultDisplayMap[nodeName] = display;

                        return display;
                    }

                    function showHide(elements, show) {
                        var display, elem,
                            values = [],
                            index = 0,
                            length = elements.length;

                        // Determine new display value for elements that need to change
                        for (; index < length; index++) {
                            elem = elements[index];
                            if (!elem.style) {
                                continue;
                            }

                            display = elem.style.display;
                            if (show) {

                                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                                // check is required in this first loop unless we have a nonempty display value (either
                                // inline or about-to-be-restored)
                                if (display === "none") {
                                    values[index] = dataPriv.get(elem, "display") || null;
                                    if (!values[index]) {
                                        elem.style.display = "";
                                    }
                                }
                                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                                    values[index] = getDefaultDisplay(elem);
                                }
                            } else {
                                if (display !== "none") {
                                    values[index] = "none";

                                    // Remember what we're overwriting
                                    dataPriv.set(elem, "display", display);
                                }
                            }
                        }

                        // Set the display of the elements in a second loop to avoid constant reflow
                        for (index = 0; index < length; index++) {
                            if (values[index] != null) {
                                elements[index].style.display = values[index];
                            }
                        }

                        return elements;
                    }

                    jQuery.fn.extend({
                        show: function() {
                            return showHide(this, true);
                        },
                        hide: function() {
                            return showHide(this);
                        },
                        toggle: function(state) {
                            if (typeof state === "boolean") {
                                return state ? this.show() : this.hide();
                            }

                            return this.each(function() {
                                if (isHiddenWithinTree(this)) {
                                    jQuery(this).show();
                                } else {
                                    jQuery(this).hide();
                                }
                            });
                        }
                    });
                    var rcheckableType = (/^(?:checkbox|radio)$/i);

                    var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);

                    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);



                    // We have to close these tags to support XHTML (#13200)
                    var wrapMap = {

                        // Support: IE <=9 only
                        option: [1, "<select multiple='multiple'>", "</select>"],

                        // XHTML parsers do not magically insert elements in the
                        // same way that tag soup parsers do. So we cannot shorten
                        // this by omitting <tbody> or other required elements.
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

                        _default: [0, "", ""]
                    };

                    // Support: IE <=9 only
                    wrapMap.optgroup = wrapMap.option;

                    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                    wrapMap.th = wrapMap.td;


                    function getAll(context, tag) {

                        // Support: IE <=9 - 11 only
                        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
                        var ret;

                        if (typeof context.getElementsByTagName !== "undefined") {
                            ret = context.getElementsByTagName(tag || "*");

                        } else if (typeof context.querySelectorAll !== "undefined") {
                            ret = context.querySelectorAll(tag || "*");

                        } else {
                            ret = [];
                        }

                        if (tag === undefined || tag && nodeName(context, tag)) {
                            return jQuery.merge([context], ret);
                        }

                        return ret;
                    }


                    // Mark scripts as having already been evaluated
                    function setGlobalEval(elems, refElements) {
                        var i = 0,
                            l = elems.length;

                        for (; i < l; i++) {
                            dataPriv.set(
                                elems[i],
                                "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval")
                            );
                        }
                    }


                    var rhtml = /<|&#?\w+;/;

                    function buildFragment(elems, context, scripts, selection, ignored) {
                        var elem, tmp, tag, wrap, contains, j,
                            fragment = context.createDocumentFragment(),
                            nodes = [],
                            i = 0,
                            l = elems.length;

                        for (; i < l; i++) {
                            elem = elems[i];

                            if (elem || elem === 0) {

                                // Add nodes directly
                                if (toType(elem) === "object") {

                                    // Support: Android <=4.0 only, PhantomJS 1 only
                                    // push.apply(_, arraylike) throws on ancient WebKit
                                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                                    // Convert non-html into a text node
                                } else if (!rhtml.test(elem)) {
                                    nodes.push(context.createTextNode(elem));

                                    // Convert html into DOM nodes
                                } else {
                                    tmp = tmp || fragment.appendChild(context.createElement("div"));

                                    // Deserialize a standard representation
                                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                                    wrap = wrapMap[tag] || wrapMap._default;
                                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                                    // Descend through wrappers to the right content
                                    j = wrap[0];
                                    while (j--) {
                                        tmp = tmp.lastChild;
                                    }

                                    // Support: Android <=4.0 only, PhantomJS 1 only
                                    // push.apply(_, arraylike) throws on ancient WebKit
                                    jQuery.merge(nodes, tmp.childNodes);

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
                        while ((elem = nodes[i++])) {

                            // Skip elements already in the context collection (trac-4087)
                            if (selection && jQuery.inArray(elem, selection) > -1) {
                                if (ignored) {
                                    ignored.push(elem);
                                }
                                continue;
                            }

                            contains = jQuery.contains(elem.ownerDocument, elem);

                            // Append to fragment
                            tmp = getAll(fragment.appendChild(elem), "script");

                            // Preserve script evaluation history
                            if (contains) {
                                setGlobalEval(tmp);
                            }

                            // Capture executables
                            if (scripts) {
                                j = 0;
                                while ((elem = tmp[j++])) {
                                    if (rscriptType.test(elem.type || "")) {
                                        scripts.push(elem);
                                    }
                                }
                            }
                        }

                        return fragment;
                    }


                    (function() {
                        var fragment = document.createDocumentFragment(),
                            div = fragment.appendChild(document.createElement("div")),
                            input = document.createElement("input");

                        // Support: Android 4.0 - 4.3 only
                        // Check state lost if the name is set (#11217)
                        // Support: Windows Web Apps (WWA)
                        // `name` and `type` must use .setAttribute for WWA (#14901)
                        input.setAttribute("type", "radio");
                        input.setAttribute("checked", "checked");
                        input.setAttribute("name", "t");

                        div.appendChild(input);

                        // Support: Android <=4.1 only
                        // Older WebKit doesn't clone checked state correctly in fragments
                        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

                        // Support: IE <=11 only
                        // Make sure textarea (and checkbox) defaultValue is properly cloned
                        div.innerHTML = "<textarea>x</textarea>";
                        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    })();
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
                        } catch (err) {}
                    }

                    function on(elem, types, selector, data, fn, one) {
                        var origFn, type;

                        // Types can be a map of types/handlers
                        if (typeof types === "object") {

                            // ( types-Object, selector, data )
                            if (typeof selector !== "string") {

                                // ( types-Object, data )
                                data = data || selector;
                                selector = undefined;
                            }
                            for (type in types) {
                                on(elem, type, selector, data, types[type], one);
                            }
                            return elem;
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
                            return elem;
                        }

                        if (one === 1) {
                            origFn = fn;
                            fn = function(event) {

                                // Can use an empty set, since event contains the info
                                jQuery().off(event);
                                return origFn.apply(this, arguments);
                            };

                            // Use same guid so caller can remove using origFn
                            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                        }
                        return elem.each(function() {
                            jQuery.event.add(this, types, fn, data, selector);
                        });
                    }

                    /*
                     * Helper functions for managing events -- not part of the public interface.
                     * Props to Dean Edwards' addEvent library for many of the ideas.
                     */
                    jQuery.event = {

                        global: {},

                        add: function(elem, types, handler, data, selector) {

                            var handleObjIn, eventHandle, tmp,
                                events, t, handleObj,
                                special, handlers, type, namespaces, origType,
                                elemData = dataPriv.get(elem);

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

                            // Ensure that invalid selectors throw exceptions at attach time
                            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
                            if (selector) {
                                jQuery.find.matchesSelector(documentElement, selector);
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
                                eventHandle = elemData.handle = function(e) {

                                    // Discard the second event of a jQuery.event.trigger() and
                                    // when an event is called after a page has unloaded
                                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                                        jQuery.event.dispatch.apply(elem, arguments) : undefined;
                                };
                            }

                            // Handle multiple events separated by a space
                            types = (types || "").match(rnothtmlwhite) || [""];
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

                                    // Only use addEventListener if the special events handler returns false
                                    if (!special.setup ||
                                        special.setup.call(elem, data, namespaces, eventHandle) === false) {

                                        if (elem.addEventListener) {
                                            elem.addEventListener(type, eventHandle);
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

                        },

                        // Detach an event or set of events from an element
                        remove: function(elem, types, handler, selector, mappedTypes) {

                            var j, origCount, tmp,
                                events, t, handleObj,
                                special, handlers, type, namespaces, origType,
                                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

                            if (!elemData || !(events = elemData.events)) {
                                return;
                            }

                            // Once for each type.namespace in types; type may be omitted
                            types = (types || "").match(rnothtmlwhite) || [""];
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
                                tmp = tmp[2] &&
                                    new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                                // Remove matching events
                                origCount = j = handlers.length;
                                while (j--) {
                                    handleObj = handlers[j];

                                    if ((mappedTypes || origType === handleObj.origType) &&
                                        (!handler || handler.guid === handleObj.guid) &&
                                        (!tmp || tmp.test(handleObj.namespace)) &&
                                        (!selector || selector === handleObj.selector ||
                                            selector === "**" && handleObj.selector)) {
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
                                    if (!special.teardown ||
                                        special.teardown.call(elem, namespaces, elemData.handle) === false) {

                                        jQuery.removeEvent(elem, type, elemData.handle);
                                    }

                                    delete events[type];
                                }
                            }

                            // Remove data and the expando if it's no longer used
                            if (jQuery.isEmptyObject(events)) {
                                dataPriv.remove(elem, "handle events");
                            }
                        },

                        dispatch: function(nativeEvent) {

                            // Make a writable jQuery.Event from the native event object
                            var event = jQuery.event.fix(nativeEvent);

                            var i, j, ret, matched, handleObj, handlerQueue,
                                args = new Array(arguments.length),
                                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                                special = jQuery.event.special[event.type] || {};

                            // Use the fix-ed jQuery.Event rather than the (read-only) native event
                            args[0] = event;

                            for (i = 1; i < arguments.length; i++) {
                                args[i] = arguments[i];
                            }

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
                                while ((handleObj = matched.handlers[j++]) &&
                                    !event.isImmediatePropagationStopped()) {

                                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                                    // a subset or equal to those in the bound event (both can have no namespace).
                                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

                                        event.handleObj = handleObj;
                                        event.data = handleObj.data;

                                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                                            handleObj.handler).apply(matched.elem, args);

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

                        handlers: function(event, handlers) {
                            var i, handleObj, sel, matchedHandlers, matchedSelectors,
                                handlerQueue = [],
                                delegateCount = handlers.delegateCount,
                                cur = event.target;

                            // Find delegate handlers
                            if (delegateCount &&

                                // Support: IE <=9
                                // Black-hole SVG <use> instance trees (trac-13180)
                                cur.nodeType &&

                                // Support: Firefox <=42
                                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                                // Support: IE 11 only
                                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                                !(event.type === "click" && event.button >= 1)) {

                                for (; cur !== this; cur = cur.parentNode || this) {

                                    // Don't check non-elements (#13208)
                                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                                    if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                                        matchedHandlers = [];
                                        matchedSelectors = {};
                                        for (i = 0; i < delegateCount; i++) {
                                            handleObj = handlers[i];

                                            // Don't conflict with Object.prototype properties (#13203)
                                            sel = handleObj.selector + " ";

                                            if (matchedSelectors[sel] === undefined) {
                                                matchedSelectors[sel] = handleObj.needsContext ?
                                                    jQuery(sel, this).index(cur) > -1 :
                                                    jQuery.find(sel, this, null, [cur]).length;
                                            }
                                            if (matchedSelectors[sel]) {
                                                matchedHandlers.push(handleObj);
                                            }
                                        }
                                        if (matchedHandlers.length) {
                                            handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                                        }
                                    }
                                }
                            }

                            // Add the remaining (directly-bound) handlers
                            cur = this;
                            if (delegateCount < handlers.length) {
                                handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
                            }

                            return handlerQueue;
                        },

                        addProp: function(name, hook) {
                            Object.defineProperty(jQuery.Event.prototype, name, {
                                enumerable: true,
                                configurable: true,

                                get: isFunction(hook) ?
                                    function() {
                                        if (this.originalEvent) {
                                            return hook(this.originalEvent);
                                        }
                                    } : function() {
                                        if (this.originalEvent) {
                                            return this.originalEvent[name];
                                        }
                                    },

                                set: function(value) {
                                    Object.defineProperty(this, name, {
                                        enumerable: true,
                                        configurable: true,
                                        writable: true,
                                        value: value
                                    });
                                }
                            });
                        },

                        fix: function(originalEvent) {
                            return originalEvent[jQuery.expando] ?
                                originalEvent :
                                new jQuery.Event(originalEvent);
                        },

                        special: {
                            load: {

                                // Prevent triggered image.load events from bubbling to window.load
                                noBubble: true
                            },
                            focus: {

                                // Fire native event if possible so blur/focus sequence is correct
                                trigger: function() {
                                    if (this !== safeActiveElement() && this.focus) {
                                        this.focus();
                                        return false;
                                    }
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    if (this === safeActiveElement() && this.blur) {
                                        this.blur();
                                        return false;
                                    }
                                },
                                delegateType: "focusout"
                            },
                            click: {

                                // For checkbox, fire native event so checked state will be right
                                trigger: function() {
                                    if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                                        this.click();
                                        return false;
                                    }
                                },

                                // For cross-browser consistency, don't fire native .click() on links
                                _default: function(event) {
                                    return nodeName(event.target, "a");
                                }
                            },

                            beforeunload: {
                                postDispatch: function(event) {

                                    // Support: Firefox 20+
                                    // Firefox doesn't alert if the returnValue field is not set.
                                    if (event.result !== undefined && event.originalEvent) {
                                        event.originalEvent.returnValue = event.result;
                                    }
                                }
                            }
                        }
                    };

                    jQuery.removeEvent = function(elem, type, handle) {

                        // This "if" is needed for plain objects
                        if (elem.removeEventListener) {
                            elem.removeEventListener(type, handle);
                        }
                    };

                    jQuery.Event = function(src, props) {

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
                            this.isDefaultPrevented = src.defaultPrevented ||
                                src.defaultPrevented === undefined &&

                                // Support: Android <=2.3 only
                                src.returnValue === false ?
                                returnTrue :
                                returnFalse;

                            // Create target properties
                            // Support: Safari <=6 - 7 only
                            // Target should not be a text node (#504, #13143)
                            this.target = (src.target && src.target.nodeType === 3) ?
                                src.target.parentNode :
                                src.target;

                            this.currentTarget = src.currentTarget;
                            this.relatedTarget = src.relatedTarget;

                            // Event type
                        } else {
                            this.type = src;
                        }

                        // Put explicitly provided properties onto the event object
                        if (props) {
                            jQuery.extend(this, props);
                        }

                        // Create a timestamp if incoming event doesn't have one
                        this.timeStamp = src && src.timeStamp || Date.now();

                        // Mark it as fixed
                        this[jQuery.expando] = true;
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

                            if (e && !this.isSimulated) {
                                e.preventDefault();
                            }
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;

                            this.isPropagationStopped = returnTrue;

                            if (e && !this.isSimulated) {
                                e.stopPropagation();
                            }
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;

                            this.isImmediatePropagationStopped = returnTrue;

                            if (e && !this.isSimulated) {
                                e.stopImmediatePropagation();
                            }

                            this.stopPropagation();
                        }
                    };

                    // Includes all common event props including KeyEvent and MouseEvent specific props
                    jQuery.each({
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

                        which: function(event) {
                            var button = event.button;

                            // Add which for key events
                            if (event.which == null && rkeyEvent.test(event.type)) {
                                return event.charCode != null ? event.charCode : event.keyCode;
                            }

                            // Add which for click: 1 === left; 2 === middle; 3 === right
                            if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                                if (button & 1) {
                                    return 1;
                                }

                                if (button & 2) {
                                    return 3;
                                }

                                if (button & 4) {
                                    return 2;
                                }

                                return 0;
                            }

                            return event.which;
                        }
                    }, jQuery.event.addProp);

                    // Create mouseenter/leave events using mouseover/out and event-time checks
                    // so that event delegation works in jQuery.
                    // Do the same for pointerenter/pointerleave and pointerover/pointerout
                    //
                    // Support: Safari 7 only
                    // Safari sends mouseenter too often; see:
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
                    // for the description of the bug (it existed in older Chrome versions as well).
                    jQuery.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, function(orig, fix) {
                        jQuery.event.special[orig] = {
                            delegateType: fix,
                            bindType: fix,

                            handle: function(event) {
                                var ret,
                                    target = this,
                                    related = event.relatedTarget,
                                    handleObj = event.handleObj;

                                // For mouseenter/leave call the handler if related is outside the target.
                                // NB: No relatedTarget if the mouse left/entered the browser window
                                if (!related || (related !== target && !jQuery.contains(target, related))) {
                                    event.type = handleObj.origType;
                                    ret = handleObj.handler.apply(this, arguments);
                                    event.type = fix;
                                }
                                return ret;
                            }
                        };
                    });

                    jQuery.fn.extend({

                        on: function(types, selector, data, fn) {
                            return on(this, types, selector, data, fn);
                        },
                        one: function(types, selector, data, fn) {
                            return on(this, types, selector, data, fn, 1);
                        },
                        off: function(types, selector, fn) {
                            var handleObj, type;
                            if (types && types.preventDefault && types.handleObj) {

                                // ( event )  dispatched jQuery.Event
                                handleObj = types.handleObj;
                                jQuery(types.delegateTarget).off(
                                    handleObj.namespace ?
                                    handleObj.origType + "." + handleObj.namespace :
                                    handleObj.origType,
                                    handleObj.selector,
                                    handleObj.handler
                                );
                                return this;
                            }
                            if (typeof types === "object") {

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
                            return this.each(function() {
                                jQuery.event.remove(this, types, fn, selector);
                            });
                        }
                    });


                    var

                        /* eslint-disable max-len */

                        // See https://github.com/eslint/eslint/issues/3229
                        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

                        /* eslint-enable */

                        // Support: IE <=10 - 11, Edge 12 - 13 only
                        // In IE/Edge using regex groups here causes severe slowdowns.
                        // See https://connect.microsoft.com/IE/feedback/details/1736512/
                        rnoInnerhtml = /<script|<style|<link/i,

                        // checked="checked" or checked
                        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    // Prefer a tbody over its parent table for containing new rows
                    function manipulationTarget(elem, content) {
                        if (nodeName(elem, "table") &&
                            nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

                            return jQuery(elem).children("tbody")[0] || elem;
                        }

                        return elem;
                    }

                    // Replace/restore the type attribute of script elements for safe DOM manipulation
                    function disableScript(elem) {
                        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                        return elem;
                    }

                    function restoreScript(elem) {
                        if ((elem.type || "").slice(0, 5) === "true/") {
                            elem.type = elem.type.slice(5);
                        } else {
                            elem.removeAttribute("type");
                        }

                        return elem;
                    }

                    function cloneCopyEvent(src, dest) {
                        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

                        if (dest.nodeType !== 1) {
                            return;
                        }

                        // 1. Copy private data: events, handlers, etc.
                        if (dataPriv.hasData(src)) {
                            pdataOld = dataPriv.access(src);
                            pdataCur = dataPriv.set(dest, pdataOld);
                            events = pdataOld.events;

                            if (events) {
                                delete pdataCur.handle;
                                pdataCur.events = {};

                                for (type in events) {
                                    for (i = 0, l = events[type].length; i < l; i++) {
                                        jQuery.event.add(dest, type, events[type][i]);
                                    }
                                }
                            }
                        }

                        // 2. Copy user data
                        if (dataUser.hasData(src)) {
                            udataOld = dataUser.access(src);
                            udataCur = jQuery.extend({}, udataOld);

                            dataUser.set(dest, udataCur);
                        }
                    }

                    // Fix IE bugs, see support tests
                    function fixInput(src, dest) {
                        var nodeName = dest.nodeName.toLowerCase();

                        // Fails to persist the checked state of a cloned checkbox or radio button.
                        if (nodeName === "input" && rcheckableType.test(src.type)) {
                            dest.checked = src.checked;

                            // Fails to return the selected option to the default selected state when cloning options
                        } else if (nodeName === "input" || nodeName === "textarea") {
                            dest.defaultValue = src.defaultValue;
                        }
                    }

                    function domManip(collection, args, callback, ignored) {

                        // Flatten any nested arrays
                        args = concat.apply([], args);

                        var fragment, first, scripts, hasScripts, node, doc,
                            i = 0,
                            l = collection.length,
                            iNoClone = l - 1,
                            value = args[0],
                            valueIsFunction = isFunction(value);

                        // We can't cloneNode fragments that contain checked, in WebKit
                        if (valueIsFunction ||
                            (l > 1 && typeof value === "string" &&
                                !support.checkClone && rchecked.test(value))) {
                            return collection.each(function(index) {
                                var self = collection.eq(index);
                                if (valueIsFunction) {
                                    args[0] = value.call(this, index, self.html());
                                }
                                domManip(self, args, callback, ignored);
                            });
                        }

                        if (l) {
                            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                            first = fragment.firstChild;

                            if (fragment.childNodes.length === 1) {
                                fragment = first;
                            }

                            // Require either new content or an interest in ignored elements to invoke the callback
                            if (first || ignored) {
                                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                                hasScripts = scripts.length;

                                // Use the original fragment for the last item
                                // instead of the first because it can end up
                                // being emptied incorrectly in certain situations (#8070).
                                for (; i < l; i++) {
                                    node = fragment;

                                    if (i !== iNoClone) {
                                        node = jQuery.clone(node, true, true);

                                        // Keep references to cloned scripts for later restoration
                                        if (hasScripts) {

                                            // Support: Android <=4.0 only, PhantomJS 1 only
                                            // push.apply(_, arraylike) throws on ancient WebKit
                                            jQuery.merge(scripts, getAll(node, "script"));
                                        }
                                    }

                                    callback.call(collection[i], node, i);
                                }

                                if (hasScripts) {
                                    doc = scripts[scripts.length - 1].ownerDocument;

                                    // Reenable scripts
                                    jQuery.map(scripts, restoreScript);

                                    // Evaluate executable scripts on first document insertion
                                    for (i = 0; i < hasScripts; i++) {
                                        node = scripts[i];
                                        if (rscriptType.test(node.type || "") &&
                                            !dataPriv.access(node, "globalEval") &&
                                            jQuery.contains(doc, node)) {

                                            if (node.src && (node.type || "").toLowerCase() !== "module") {

                                                // Optional AJAX dependency, but won't run scripts if not present
                                                if (jQuery._evalUrl) {
                                                    jQuery._evalUrl(node.src);
                                                }
                                            } else {
                                                DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        return collection;
                    }

                    function remove(elem, selector, keepData) {
                        var node,
                            nodes = selector ? jQuery.filter(selector, elem) : elem,
                            i = 0;

                        for (;
                            (node = nodes[i]) != null; i++) {
                            if (!keepData && node.nodeType === 1) {
                                jQuery.cleanData(getAll(node));
                            }

                            if (node.parentNode) {
                                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                                    setGlobalEval(getAll(node, "script"));
                                }
                                node.parentNode.removeChild(node);
                            }
                        }

                        return elem;
                    }

                    jQuery.extend({
                        htmlPrefilter: function(html) {
                            return html.replace(rxhtmlTag, "<$1></$2>");
                        },

                        clone: function(elem, dataAndEvents, deepDataAndEvents) {
                            var i, l, srcElements, destElements,
                                clone = elem.cloneNode(true),
                                inPage = jQuery.contains(elem.ownerDocument, elem);

                            // Fix IE cloning issues
                            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
                                !jQuery.isXMLDoc(elem)) {

                                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                                destElements = getAll(clone);
                                srcElements = getAll(elem);

                                for (i = 0, l = srcElements.length; i < l; i++) {
                                    fixInput(srcElements[i], destElements[i]);
                                }
                            }

                            // Copy the events from the original to the clone
                            if (dataAndEvents) {
                                if (deepDataAndEvents) {
                                    srcElements = srcElements || getAll(elem);
                                    destElements = destElements || getAll(clone);

                                    for (i = 0, l = srcElements.length; i < l; i++) {
                                        cloneCopyEvent(srcElements[i], destElements[i]);
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

                            // Return the cloned set
                            return clone;
                        },

                        cleanData: function(elems) {
                            var data, elem, type,
                                special = jQuery.event.special,
                                i = 0;

                            for (;
                                (elem = elems[i]) !== undefined; i++) {
                                if (acceptData(elem)) {
                                    if ((data = elem[dataPriv.expando])) {
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

                                        // Support: Chrome <=35 - 45+
                                        // Assign undefined instead of using delete, see Data#remove
                                        elem[dataPriv.expando] = undefined;
                                    }
                                    if (elem[dataUser.expando]) {

                                        // Support: Chrome <=35 - 45+
                                        // Assign undefined instead of using delete, see Data#remove
                                        elem[dataUser.expando] = undefined;
                                    }
                                }
                            }
                        }
                    });

                    jQuery.fn.extend({
                        detach: function(selector) {
                            return remove(this, selector, true);
                        },

                        remove: function(selector) {
                            return remove(this, selector);
                        },

                        text: function(value) {
                            return access(this, function(value) {
                                return value === undefined ?
                                    jQuery.text(this) :
                                    this.empty().each(function() {
                                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                            this.textContent = value;
                                        }
                                    });
                            }, null, value, arguments.length);
                        },

                        append: function() {
                            return domManip(this, arguments, function(elem) {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                    var target = manipulationTarget(this, elem);
                                    target.appendChild(elem);
                                }
                            });
                        },

                        prepend: function() {
                            return domManip(this, arguments, function(elem) {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                    var target = manipulationTarget(this, elem);
                                    target.insertBefore(elem, target.firstChild);
                                }
                            });
                        },

                        before: function() {
                            return domManip(this, arguments, function(elem) {
                                if (this.parentNode) {
                                    this.parentNode.insertBefore(elem, this);
                                }
                            });
                        },

                        after: function() {
                            return domManip(this, arguments, function(elem) {
                                if (this.parentNode) {
                                    this.parentNode.insertBefore(elem, this.nextSibling);
                                }
                            });
                        },

                        empty: function() {
                            var elem,
                                i = 0;

                            for (;
                                (elem = this[i]) != null; i++) {
                                if (elem.nodeType === 1) {

                                    // Prevent memory leaks
                                    jQuery.cleanData(getAll(elem, false));

                                    // Remove any remaining nodes
                                    elem.textContent = "";
                                }
                            }

                            return this;
                        },

                        clone: function(dataAndEvents, deepDataAndEvents) {
                            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

                            return this.map(function() {
                                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                            });
                        },

                        html: function(value) {
                            return access(this, function(value) {
                                var elem = this[0] || {},
                                    i = 0,
                                    l = this.length;

                                if (value === undefined && elem.nodeType === 1) {
                                    return elem.innerHTML;
                                }

                                // See if we can take a shortcut and just use innerHTML
                                if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                                    !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                                    value = jQuery.htmlPrefilter(value);

                                    try {
                                        for (; i < l; i++) {
                                            elem = this[i] || {};

                                            // Remove element nodes and prevent memory leaks
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

                        replaceWith: function() {
                            var ignored = [];

                            // Make the changes, replacing each non-ignored context element with the new content
                            return domManip(this, arguments, function(elem) {
                                var parent = this.parentNode;

                                if (jQuery.inArray(this, ignored) < 0) {
                                    jQuery.cleanData(getAll(this));
                                    if (parent) {
                                        parent.replaceChild(elem, this);
                                    }
                                }

                                // Force callback invocation
                            }, ignored);
                        }
                    });

                    jQuery.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function(name, original) {
                        jQuery.fn[name] = function(selector) {
                            var elems,
                                ret = [],
                                insert = jQuery(selector),
                                last = insert.length - 1,
                                i = 0;

                            for (; i <= last; i++) {
                                elems = i === last ? this : this.clone(true);
                                jQuery(insert[i])[original](elems);

                                // Support: Android <=4.0 only, PhantomJS 1 only
                                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                                push.apply(ret, elems.get());
                            }

                            return this.pushStack(ret);
                        };
                    });
                    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

                    var getStyles = function(elem) {

                        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                        // IE throws on elements created in popups
                        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                        var view = elem.ownerDocument.defaultView;

                        if (!view || !view.opener) {
                            view = window;
                        }

                        return view.getComputedStyle(elem);
                    };

                    var rboxStyle = new RegExp(cssExpand.join("|"), "i");



                    (function() {

                        // Executing both pixelPosition & boxSizingReliable tests require only one layout
                        // so they're executed at the same time to save the second computation.
                        function computeStyleTests() {

                            // This is a singleton, we need to execute it only once
                            if (!div) {
                                return;
                            }

                            container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                                "margin-top:1px;padding:0;border:0";
                            div.style.cssText =
                                "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                                "margin:auto;border:1px;padding:1px;" +
                                "width:60%;top:1%";
                            documentElement.appendChild(container).appendChild(div);

                            var divStyle = window.getComputedStyle(div);
                            pixelPositionVal = divStyle.top !== "1%";

                            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
                            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

                            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
                            // Some styles come back with percentage values, even though they shouldn't
                            div.style.right = "60%";
                            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

                            // Support: IE 9 - 11 only
                            // Detect misreporting of content dimensions for box-sizing:border-box elements
                            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

                            // Support: IE 9 only
                            // Detect overflow:scroll screwiness (gh-3699)
                            div.style.position = "absolute";
                            scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

                            documentElement.removeChild(container);

                            // Nullify the div so it wouldn't be stored in the memory and
                            // it will also be a sign that checks already performed
                            div = null;
                        }

                        function roundPixelMeasures(measure) {
                            return Math.round(parseFloat(measure));
                        }

                        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
                            reliableMarginLeftVal,
                            container = document.createElement("div"),
                            div = document.createElement("div");

                        // Finish early in limited (non-browser) environments
                        if (!div.style) {
                            return;
                        }

                        // Support: IE <=9 - 11 only
                        // Style of cloned element affects source element cloned (#8908)
                        div.style.backgroundClip = "content-box";
                        div.cloneNode(true).style.backgroundClip = "";
                        support.clearCloneStyle = div.style.backgroundClip === "content-box";

                        jQuery.extend(support, {
                            boxSizingReliable: function() {
                                computeStyleTests();
                                return boxSizingReliableVal;
                            },
                            pixelBoxStyles: function() {
                                computeStyleTests();
                                return pixelBoxStylesVal;
                            },
                            pixelPosition: function() {
                                computeStyleTests();
                                return pixelPositionVal;
                            },
                            reliableMarginLeft: function() {
                                computeStyleTests();
                                return reliableMarginLeftVal;
                            },
                            scrollboxSize: function() {
                                computeStyleTests();
                                return scrollboxSizeVal;
                            }
                        });
                    })();


                    function curCSS(elem, name, computed) {
                        var width, minWidth, maxWidth, ret,

                            // Support: Firefox 51+
                            // Retrieving style before computed somehow
                            // fixes an issue with getting wrong values
                            // on detached elements
                            style = elem.style;

                        computed = computed || getStyles(elem);

                        // getPropertyValue is needed for:
                        //   .css('filter') (IE 9 only, #12537)
                        //   .css('--customProperty) (#3144)
                        if (computed) {
                            ret = computed.getPropertyValue(name) || computed[name];

                            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                                ret = jQuery.style(elem, name);
                            }

                            // A tribute to the "awesome hack by Dean Edwards"
                            // Android Browser returns percentage for some values,
                            // but width seems to be reliably pixels.
                            // This is against the CSSOM draft spec:
                            // https://drafts.csswg.org/cssom/#resolved-values
                            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

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


                    function addGetHookIf(conditionFn, hookFn) {

                        // Define the hook, we'll check on the first run if it's really needed.
                        return {
                            get: function() {
                                if (conditionFn()) {

                                    // Hook not needed (or it's not possible to use it due
                                    // to missing dependency), remove it.
                                    delete this.get;
                                    return;
                                }

                                // Hook needed; redefine it so that the support test is not executed again.
                                return (this.get = hookFn).apply(this, arguments);
                            }
                        };
                    }


                    var

                        // Swappable if display is none or starts with table
                        // except "table", "table-cell", or "table-caption"
                        // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
                        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                        rcustomProp = /^--/,
                        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
                        cssNormalTransform = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        },

                        cssPrefixes = ["Webkit", "Moz", "ms"],
                        emptyStyle = document.createElement("div").style;

                    // Return a css property mapped to a potentially vendor prefixed property
                    function vendorPropName(name) {

                        // Shortcut for names that are not vendor prefixed
                        if (name in emptyStyle) {
                            return name;
                        }

                        // Check for vendor prefixed names
                        var capName = name[0].toUpperCase() + name.slice(1),
                            i = cssPrefixes.length;

                        while (i--) {
                            name = cssPrefixes[i] + capName;
                            if (name in emptyStyle) {
                                return name;
                            }
                        }
                    }

                    // Return a property mapped along what jQuery.cssProps suggests or to
                    // a vendor prefixed property.
                    function finalPropName(name) {
                        var ret = jQuery.cssProps[name];
                        if (!ret) {
                            ret = jQuery.cssProps[name] = vendorPropName(name) || name;
                        }
                        return ret;
                    }

                    function setPositiveNumber(elem, value, subtract) {

                        // Any relative (+/-) values have already been
                        // normalized at this point
                        var matches = rcssNum.exec(value);
                        return matches ?

                            // Guard against undefined "subtract", e.g., when used as in cssHooks
                            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
                            value;
                    }

                    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                        var i = dimension === "width" ? 1 : 0,
                            extra = 0,
                            delta = 0;

                        // Adjustment may not be necessary
                        if (box === (isBorderBox ? "border" : "content")) {
                            return 0;
                        }

                        for (; i < 4; i += 2) {

                            // Both box models exclude margin
                            if (box === "margin") {
                                delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                            }

                            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
                            if (!isBorderBox) {

                                // Add padding
                                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                                // For "border" or "margin", add border
                                if (box !== "padding") {
                                    delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                                    // But still keep track of it otherwise
                                } else {
                                    extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                                }

                                // If we get here with a border-box (content + padding + border), we're seeking "content" or
                                // "padding" or "margin"
                            } else {

                                // For "content", subtract padding
                                if (box === "content") {
                                    delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                                }

                                // For "content" or "padding", subtract border
                                if (box !== "margin") {
                                    delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                                }
                            }
                        }

                        // Account for positive content-box scroll gutter when requested by providing computedVal
                        if (!isBorderBox && computedVal >= 0) {

                            // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
                            // Assuming integer scroll gutter, subtract the rest and round down
                            delta += Math.max(0, Math.ceil(
                                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                                computedVal -
                                delta -
                                extra -
                                0.5
                            ));
                        }

                        return delta;
                    }

                    function getWidthOrHeight(elem, dimension, extra) {

                        // Start with computed style
                        var styles = getStyles(elem),
                            val = curCSS(elem, dimension, styles),
                            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                            valueIsBorderBox = isBorderBox;

                        // Support: Firefox <=54
                        // Return a confounding non-pixel value or feign ignorance, as appropriate.
                        if (rnumnonpx.test(val)) {
                            if (!extra) {
                                return val;
                            }
                            val = "auto";
                        }

                        // Check for style in case a browser which returns unreliable values
                        // for getComputedStyle silently falls back to the reliable elem.style
                        valueIsBorderBox = valueIsBorderBox &&
                            (support.boxSizingReliable() || val === elem.style[dimension]);

                        // Fall back to offsetWidth/offsetHeight when value is "auto"
                        // This happens for inline elements with no explicit setting (gh-3571)
                        // Support: Android <=4.1 - 4.3 only
                        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                        if (val === "auto" ||
                            !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

                            val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

                            // offsetWidth/offsetHeight provide border-box values
                            valueIsBorderBox = true;
                        }

                        // Normalize "" and auto
                        val = parseFloat(val) || 0;

                        // Adjust for the element's box model
                        return (val +
                            boxModelAdjustment(
                                elem,
                                dimension,
                                extra || (isBorderBox ? "border" : "content"),
                                valueIsBorderBox,
                                styles,

                                // Provide the current computed size to request scroll gutter calculation (gh-3589)
                                val
                            )
                        ) + "px";
                    }

                    jQuery.extend({

                        // Add in style property hooks for overriding the default
                        // behavior of getting and setting a style property
                        cssHooks: {
                            opacity: {
                                get: function(elem, computed) {
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
                        cssProps: {},

                        // Get and set the style property on a DOM Node
                        style: function(elem, name, value, extra) {

                            // Don't set styles on text and comment nodes
                            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                                return;
                            }

                            // Make sure that we're working with the right name
                            var ret, type, hooks,
                                origName = camelCase(name),
                                isCustomProp = rcustomProp.test(name),
                                style = elem.style;

                            // Make sure that we're working with the right name. We don't
                            // want to query the value if it is a CSS custom property
                            // since they are user-defined.
                            if (!isCustomProp) {
                                name = finalPropName(origName);
                            }

                            // Gets hook for the prefixed version, then unprefixed version
                            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                            // Check if we're setting a value
                            if (value !== undefined) {
                                type = typeof value;

                                // Convert "+=" or "-=" to relative numbers (#7345)
                                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                                    value = adjustCSS(elem, name, ret);

                                    // Fixes bug #9237
                                    type = "number";
                                }

                                // Make sure that null and NaN values aren't set (#7116)
                                if (value == null || value !== value) {
                                    return;
                                }

                                // If a number was passed in, add the unit (except for certain CSS properties)
                                if (type === "number") {
                                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                                }

                                // background-* props affect original clone's values
                                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                                    style[name] = "inherit";
                                }

                                // If a hook was provided, use that value, otherwise just set the specified value
                                if (!hooks || !("set" in hooks) ||
                                    (value = hooks.set(elem, value, extra)) !== undefined) {

                                    if (isCustomProp) {
                                        style.setProperty(name, value);
                                    } else {
                                        style[name] = value;
                                    }
                                }

                            } else {

                                // If a hook was provided get the non-computed value from there
                                if (hooks && "get" in hooks &&
                                    (ret = hooks.get(elem, false, extra)) !== undefined) {

                                    return ret;
                                }

                                // Otherwise just get the value from the style object
                                return style[name];
                            }
                        },

                        css: function(elem, name, extra, styles) {
                            var val, num, hooks,
                                origName = camelCase(name),
                                isCustomProp = rcustomProp.test(name);

                            // Make sure that we're working with the right name. We don't
                            // want to modify the value if it is a CSS custom property
                            // since they are user-defined.
                            if (!isCustomProp) {
                                name = finalPropName(origName);
                            }

                            // Try prefixed name followed by the unprefixed name
                            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                            // If a hook was provided get the computed value from there
                            if (hooks && "get" in hooks) {
                                val = hooks.get(elem, true, extra);
                            }

                            // Otherwise, if a way to get the computed value exists, use that
                            if (val === undefined) {
                                val = curCSS(elem, name, styles);
                            }

                            // Convert "normal" to computed value
                            if (val === "normal" && name in cssNormalTransform) {
                                val = cssNormalTransform[name];
                            }

                            // Make numeric if forced or a qualifier was provided and val looks numeric
                            if (extra === "" || extra) {
                                num = parseFloat(val);
                                return extra === true || isFinite(num) ? num || 0 : val;
                            }

                            return val;
                        }
                    });

                    jQuery.each(["height", "width"], function(i, dimension) {
                        jQuery.cssHooks[dimension] = {
                            get: function(elem, computed, extra) {
                                if (computed) {

                                    // Certain elements can have dimension info if we invisibly show them
                                    // but it must have a current display style that would benefit
                                    return rdisplayswap.test(jQuery.css(elem, "display")) &&

                                        // Support: Safari 8+
                                        // Table columns in Safari have non-zero offsetWidth & zero
                                        // getBoundingClientRect().width unless display is changed.
                                        // Support: IE <=11 only
                                        // Running getBoundingClientRect on a disconnected node
                                        // in IE throws an error.
                                        (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                                        swap(elem, cssShow, function() {
                                            return getWidthOrHeight(elem, dimension, extra);
                                        }) :
                                        getWidthOrHeight(elem, dimension, extra);
                                }
                            },

                            set: function(elem, value, extra) {
                                var matches,
                                    styles = getStyles(elem),
                                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                                    subtract = extra && boxModelAdjustment(
                                        elem,
                                        dimension,
                                        extra,
                                        isBorderBox,
                                        styles
                                    );

                                // Account for unreliable border-box dimensions by comparing offset* to computed and
                                // faking a content-box to get border and padding (gh-3699)
                                if (isBorderBox && support.scrollboxSize() === styles.position) {
                                    subtract -= Math.ceil(
                                        elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                                        parseFloat(styles[dimension]) -
                                        boxModelAdjustment(elem, dimension, "border", false, styles) -
                                        0.5
                                    );
                                }

                                // Convert to pixels if value adjustment is needed
                                if (subtract && (matches = rcssNum.exec(value)) &&
                                    (matches[3] || "px") !== "px") {

                                    elem.style[dimension] = value;
                                    value = jQuery.css(elem, dimension);
                                }

                                return setPositiveNumber(elem, value, subtract);
                            }
                        };
                    });

                    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
                        function(elem, computed) {
                            if (computed) {
                                return (parseFloat(curCSS(elem, "marginLeft")) ||
                                    elem.getBoundingClientRect().left -
                                    swap(elem, { marginLeft: 0 }, function() {
                                        return elem.getBoundingClientRect().left;
                                    })
                                ) + "px";
                            }
                        }
                    );

                    // These hooks are used by animate to expand properties
                    jQuery.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, function(prefix, suffix) {
                        jQuery.cssHooks[prefix + suffix] = {
                            expand: function(value) {
                                var i = 0,
                                    expanded = {},

                                    // Assumes a single number if not a string
                                    parts = typeof value === "string" ? value.split(" ") : [value];

                                for (; i < 4; i++) {
                                    expanded[prefix + cssExpand[i] + suffix] =
                                        parts[i] || parts[i - 2] || parts[0];
                                }

                                return expanded;
                            }
                        };

                        if (prefix !== "margin") {
                            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                        }
                    });

                    jQuery.fn.extend({
                        css: function(name, value) {
                            return access(this, function(elem, name, value) {
                                var styles, len,
                                    map = {},
                                    i = 0;

                                if (Array.isArray(name)) {
                                    styles = getStyles(elem);
                                    len = name.length;

                                    for (; i < len; i++) {
                                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                    }

                                    return map;
                                }

                                return value !== undefined ?
                                    jQuery.style(elem, name, value) :
                                    jQuery.css(elem, name);
                            }, name, value, arguments.length > 1);
                        }
                    });


                    function Tween(elem, options, prop, end, easing) {
                        return new Tween.prototype.init(elem, options, prop, end, easing);
                    }
                    jQuery.Tween = Tween;

                    Tween.prototype = {
                        constructor: Tween,
                        init: function(elem, options, prop, end, easing, unit) {
                            this.elem = elem;
                            this.prop = prop;
                            this.easing = easing || jQuery.easing._default;
                            this.options = options;
                            this.start = this.now = this.cur();
                            this.end = end;
                            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                        },
                        cur: function() {
                            var hooks = Tween.propHooks[this.prop];

                            return hooks && hooks.get ?
                                hooks.get(this) :
                                Tween.propHooks._default.get(this);
                        },
                        run: function(percent) {
                            var eased,
                                hooks = Tween.propHooks[this.prop];

                            if (this.options.duration) {
                                this.pos = eased = jQuery.easing[this.easing](
                                    percent, this.options.duration * percent, 0, 1, this.options.duration
                                );
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
                            get: function(tween) {
                                var result;

                                // Use a property on the element directly when it is not a DOM element,
                                // or when there is no matching style property that exists.
                                if (tween.elem.nodeType !== 1 ||
                                    tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                                    return tween.elem[tween.prop];
                                }

                                // Passing an empty string as a 3rd parameter to .css will automatically
                                // attempt a parseFloat and fallback to a string if the parse fails.
                                // Simple values such as "10px" are parsed to Float;
                                // complex values such as "rotate(1rad)" are returned as-is.
                                result = jQuery.css(tween.elem, tween.prop, "");

                                // Empty strings, null, undefined and "auto" are converted to 0.
                                return !result || result === "auto" ? 0 : result;
                            },
                            set: function(tween) {

                                // Use step hook for back compat.
                                // Use cssHook if its there.
                                // Use .style if available and use plain properties where available.
                                if (jQuery.fx.step[tween.prop]) {
                                    jQuery.fx.step[tween.prop](tween);
                                } else if (tween.elem.nodeType === 1 &&
                                    (tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
                                        jQuery.cssHooks[tween.prop])) {
                                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                                } else {
                                    tween.elem[tween.prop] = tween.now;
                                }
                            }
                        }
                    };

                    // Support: IE <=9 only
                    // Panic based approach to setting things on disconnected nodes
                    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                        set: function(tween) {
                            if (tween.elem.nodeType && tween.elem.parentNode) {
                                tween.elem[tween.prop] = tween.now;
                            }
                        }
                    };

                    jQuery.easing = {
                        linear: function(p) {
                            return p;
                        },
                        swing: function(p) {
                            return 0.5 - Math.cos(p * Math.PI) / 2;
                        },
                        _default: "swing"
                    };

                    jQuery.fx = Tween.prototype.init;

                    // Back compat <1.8 extension point
                    jQuery.fx.step = {};




                    var
                        fxNow, inProgress,
                        rfxtypes = /^(?:toggle|show|hide)$/,
                        rrun = /queueHooks$/;

                    function schedule() {
                        if (inProgress) {
                            if (document.hidden === false && window.requestAnimationFrame) {
                                window.requestAnimationFrame(schedule);
                            } else {
                                window.setTimeout(schedule, jQuery.fx.interval);
                            }

                            jQuery.fx.tick();
                        }
                    }

                    // Animations created synchronously will run synchronously
                    function createFxNow() {
                        window.setTimeout(function() {
                            fxNow = undefined;
                        });
                        return (fxNow = Date.now());
                    }

                    // Generate parameters to create a standard animation
                    function genFx(type, includeWidth) {
                        var which,
                            i = 0,
                            attrs = { height: type };

                        // If we include width, step value is 1 to do all cssExpand values,
                        // otherwise step value is 2 to skip over Left and Right
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

                    function createTween(value, prop, animation) {
                        var tween,
                            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
                            index = 0,
                            length = collection.length;
                        for (; index < length; index++) {
                            if ((tween = collection[index].call(animation, prop, value))) {

                                // We're done with this property
                                return tween;
                            }
                        }
                    }

                    function defaultPrefilter(elem, props, opts) {
                        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
                            isBox = "width" in props || "height" in props,
                            anim = this,
                            orig = {},
                            style = elem.style,
                            hidden = elem.nodeType && isHiddenWithinTree(elem),
                            dataShow = dataPriv.get(elem, "fxshow");

                        // Queue-skipping animations hijack the fx hooks
                        if (!opts.queue) {
                            hooks = jQuery._queueHooks(elem, "fx");
                            if (hooks.unqueued == null) {
                                hooks.unqueued = 0;
                                oldfire = hooks.empty.fire;
                                hooks.empty.fire = function() {
                                    if (!hooks.unqueued) {
                                        oldfire();
                                    }
                                };
                            }
                            hooks.unqueued++;

                            anim.always(function() {

                                // Ensure the complete handler is called before this completes
                                anim.always(function() {
                                    hooks.unqueued--;
                                    if (!jQuery.queue(elem, "fx").length) {
                                        hooks.empty.fire();
                                    }
                                });
                            });
                        }

                        // Detect show/hide animations
                        for (prop in props) {
                            value = props[prop];
                            if (rfxtypes.test(value)) {
                                delete props[prop];
                                toggle = toggle || value === "toggle";
                                if (value === (hidden ? "hide" : "show")) {

                                    // Pretend to be hidden if this is a "show" and
                                    // there is still data from a stopped show/hide
                                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                                        hidden = true;

                                        // Ignore all other no-op show/hide data
                                    } else {
                                        continue;
                                    }
                                }
                                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                            }
                        }

                        // Bail out if this is a no-op like .hide().hide()
                        propTween = !jQuery.isEmptyObject(props);
                        if (!propTween && jQuery.isEmptyObject(orig)) {
                            return;
                        }

                        // Restrict "overflow" and "display" styles during box animations
                        if (isBox && elem.nodeType === 1) {

                            // Support: IE <=9 - 11, Edge 12 - 15
                            // Record all 3 overflow attributes because IE does not infer the shorthand
                            // from identically-valued overflowX and overflowY and Edge just mirrors
                            // the overflowX value there.
                            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

                            // Identify a display type, preferring old show/hide data over the CSS cascade
                            restoreDisplay = dataShow && dataShow.display;
                            if (restoreDisplay == null) {
                                restoreDisplay = dataPriv.get(elem, "display");
                            }
                            display = jQuery.css(elem, "display");
                            if (display === "none") {
                                if (restoreDisplay) {
                                    display = restoreDisplay;
                                } else {

                                    // Get nonempty value(s) by temporarily forcing visibility
                                    showHide([elem], true);
                                    restoreDisplay = elem.style.display || restoreDisplay;
                                    display = jQuery.css(elem, "display");
                                    showHide([elem]);
                                }
                            }

                            // Animate inline elements as inline-block
                            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                                if (jQuery.css(elem, "float") === "none") {

                                    // Restore the original display value at the end of pure show/hide animations
                                    if (!propTween) {
                                        anim.done(function() {
                                            style.display = restoreDisplay;
                                        });
                                        if (restoreDisplay == null) {
                                            display = style.display;
                                            restoreDisplay = display === "none" ? "" : display;
                                        }
                                    }
                                    style.display = "inline-block";
                                }
                            }
                        }

                        if (opts.overflow) {
                            style.overflow = "hidden";
                            anim.always(function() {
                                style.overflow = opts.overflow[0];
                                style.overflowX = opts.overflow[1];
                                style.overflowY = opts.overflow[2];
                            });
                        }

                        // Implement show/hide animations
                        propTween = false;
                        for (prop in orig) {

                            // General show/hide setup for this element animation
                            if (!propTween) {
                                if (dataShow) {
                                    if ("hidden" in dataShow) {
                                        hidden = dataShow.hidden;
                                    }
                                } else {
                                    dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
                                }

                                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                                if (toggle) {
                                    dataShow.hidden = !hidden;
                                }

                                // Show elements before animating them
                                if (hidden) {
                                    showHide([elem], true);
                                }

                                /* eslint-disable no-loop-func */

                                anim.done(function() {

                                    /* eslint-enable no-loop-func */

                                    // The final step of a "hide" animation is actually hiding the element
                                    if (!hidden) {
                                        showHide([elem]);
                                    }
                                    dataPriv.remove(elem, "fxshow");
                                    for (prop in orig) {
                                        jQuery.style(elem, prop, orig[prop]);
                                    }
                                });
                            }

                            // Per-property setup
                            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                            if (!(prop in dataShow)) {
                                dataShow[prop] = propTween.start;
                                if (hidden) {
                                    propTween.end = propTween.start;
                                    propTween.start = 0;
                                }
                            }
                        }
                    }

                    function propFilter(props, specialEasing) {
                        var index, name, easing, value, hooks;

                        // camelCase, specialEasing and expand cssHook pass
                        for (index in props) {
                            name = camelCase(index);
                            easing = specialEasing[name];
                            value = props[index];
                            if (Array.isArray(value)) {
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

                                // Not quite $.extend, this won't overwrite existing keys.
                                // Reusing 'index' because we have the correct "name"
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

                    function Animation(elem, properties, options) {
                        var result,
                            stopped,
                            index = 0,
                            length = Animation.prefilters.length,
                            deferred = jQuery.Deferred().always(function() {

                                // Don't match elem in the :animated selector
                                delete tick.elem;
                            }),
                            tick = function() {
                                if (stopped) {
                                    return false;
                                }
                                var currentTime = fxNow || createFxNow(),
                                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                                    // Support: Android 2.3 only
                                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                                    temp = remaining / animation.duration || 0,
                                    percent = 1 - temp,
                                    index = 0,
                                    length = animation.tweens.length;

                                for (; index < length; index++) {
                                    animation.tweens[index].run(percent);
                                }

                                deferred.notifyWith(elem, [animation, percent, remaining]);

                                // If there's more to do, yield
                                if (percent < 1 && length) {
                                    return remaining;
                                }

                                // If this was an empty animation, synthesize a final progress notification
                                if (!length) {
                                    deferred.notifyWith(elem, [animation, 1, 0]);
                                }

                                // Resolve the animation and report its conclusion
                                deferred.resolveWith(elem, [animation]);
                                return false;
                            },
                            animation = deferred.promise({
                                elem: elem,
                                props: jQuery.extend({}, properties),
                                opts: jQuery.extend(true, {
                                    specialEasing: {},
                                    easing: jQuery.easing._default
                                }, options),
                                originalProperties: properties,
                                originalOptions: options,
                                startTime: fxNow || createFxNow(),
                                duration: options.duration,
                                tweens: [],
                                createTween: function(prop, end) {
                                    var tween = jQuery.Tween(elem, animation.opts, prop, end,
                                        animation.opts.specialEasing[prop] || animation.opts.easing);
                                    animation.tweens.push(tween);
                                    return tween;
                                },
                                stop: function(gotoEnd) {
                                    var index = 0,

                                        // If we are going to the end, we want to run all the tweens
                                        // otherwise we skip this part
                                        length = gotoEnd ? animation.tweens.length : 0;
                                    if (stopped) {
                                        return this;
                                    }
                                    stopped = true;
                                    for (; index < length; index++) {
                                        animation.tweens[index].run(1);
                                    }

                                    // Resolve when we played the last frame; otherwise, reject
                                    if (gotoEnd) {
                                        deferred.notifyWith(elem, [animation, 1, 0]);
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
                            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                            if (result) {
                                if (isFunction(result.stop)) {
                                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                                        result.stop.bind(result);
                                }
                                return result;
                            }
                        }

                        jQuery.map(props, createTween, animation);

                        if (isFunction(animation.opts.start)) {
                            animation.opts.start.call(elem, animation);
                        }

                        // Attach callbacks from options
                        animation
                            .progress(animation.opts.progress)
                            .done(animation.opts.done, animation.opts.complete)
                            .fail(animation.opts.fail)
                            .always(animation.opts.always);

                        jQuery.fx.timer(
                            jQuery.extend(tick, {
                                elem: elem,
                                anim: animation,
                                queue: animation.opts.queue
                            })
                        );

                        return animation;
                    }

                    jQuery.Animation = jQuery.extend(Animation, {

                        tweeners: {
                            "*": [function(prop, value) {
                                var tween = this.createTween(prop, value);
                                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                                return tween;
                            }]
                        },

                        tweener: function(props, callback) {
                            if (isFunction(props)) {
                                callback = props;
                                props = ["*"];
                            } else {
                                props = props.match(rnothtmlwhite);
                            }

                            var prop,
                                index = 0,
                                length = props.length;

                            for (; index < length; index++) {
                                prop = props[index];
                                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                                Animation.tweeners[prop].unshift(callback);
                            }
                        },

                        prefilters: [defaultPrefilter],

                        prefilter: function(callback, prepend) {
                            if (prepend) {
                                Animation.prefilters.unshift(callback);
                            } else {
                                Animation.prefilters.push(callback);
                            }
                        }
                    });

                    jQuery.speed = function(speed, easing, fn) {
                        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                            complete: fn || !fn && easing ||
                                isFunction(speed) && speed,
                            duration: speed,
                            easing: fn && easing || easing && !isFunction(easing) && easing
                        };

                        // Go to the end state if fx are off
                        if (jQuery.fx.off) {
                            opt.duration = 0;

                        } else {
                            if (typeof opt.duration !== "number") {
                                if (opt.duration in jQuery.fx.speeds) {
                                    opt.duration = jQuery.fx.speeds[opt.duration];

                                } else {
                                    opt.duration = jQuery.fx.speeds._default;
                                }
                            }
                        }

                        // Normalize opt.queue - true/undefined/null -> "fx"
                        if (opt.queue == null || opt.queue === true) {
                            opt.queue = "fx";
                        }

                        // Queueing
                        opt.old = opt.complete;

                        opt.complete = function() {
                            if (isFunction(opt.old)) {
                                opt.old.call(this);
                            }

                            if (opt.queue) {
                                jQuery.dequeue(this, opt.queue);
                            }
                        };

                        return opt;
                    };

                    jQuery.fn.extend({
                        fadeTo: function(speed, to, easing, callback) {

                            // Show any hidden elements after setting opacity to 0
                            return this.filter(isHiddenWithinTree).css("opacity", 0).show()

                                // Animate to the value specified
                                .end().animate({ opacity: to }, speed, easing, callback);
                        },
                        animate: function(prop, speed, easing, callback) {
                            var empty = jQuery.isEmptyObject(prop),
                                optall = jQuery.speed(speed, easing, callback),
                                doAnimation = function() {

                                    // Operate on a copy of prop so per-property easing won't be lost
                                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                                    // Empty animations, or finishing resolves immediately
                                    if (empty || dataPriv.get(this, "finish")) {
                                        anim.stop(true);
                                    }
                                };
                            doAnimation.finish = doAnimation;

                            return empty || optall.queue === false ?
                                this.each(doAnimation) :
                                this.queue(optall.queue, doAnimation);
                        },
                        stop: function(type, clearQueue, gotoEnd) {
                            var stopQueue = function(hooks) {
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

                            return this.each(function() {
                                var dequeue = true,
                                    index = type != null && type + "queueHooks",
                                    timers = jQuery.timers,
                                    data = dataPriv.get(this);

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
                                    if (timers[index].elem === this &&
                                        (type == null || timers[index].queue === type)) {

                                        timers[index].anim.stop(gotoEnd);
                                        dequeue = false;
                                        timers.splice(index, 1);
                                    }
                                }

                                // Start the next in the queue if the last step wasn't forced.
                                // Timers currently will call their complete callbacks, which
                                // will dequeue but only if they were gotoEnd.
                                if (dequeue || !gotoEnd) {
                                    jQuery.dequeue(this, type);
                                }
                            });
                        },
                        finish: function(type) {
                            if (type !== false) {
                                type = type || "fx";
                            }
                            return this.each(function() {
                                var index,
                                    data = dataPriv.get(this),
                                    queue = data[type + "queue"],
                                    hooks = data[type + "queueHooks"],
                                    timers = jQuery.timers,
                                    length = queue ? queue.length : 0;

                                // Enable finishing flag on private data
                                data.finish = true;

                                // Empty the queue first
                                jQuery.queue(this, type, []);

                                if (hooks && hooks.stop) {
                                    hooks.stop.call(this, true);
                                }

                                // Look for any active animations, and finish them
                                for (index = timers.length; index--;) {
                                    if (timers[index].elem === this && timers[index].queue === type) {
                                        timers[index].anim.stop(true);
                                        timers.splice(index, 1);
                                    }
                                }

                                // Look for any animations in the old queue and finish them
                                for (index = 0; index < length; index++) {
                                    if (queue[index] && queue[index].finish) {
                                        queue[index].finish.call(this);
                                    }
                                }

                                // Turn off finishing flag
                                delete data.finish;
                            });
                        }
                    });

                    jQuery.each(["toggle", "show", "hide"], function(i, name) {
                        var cssFn = jQuery.fn[name];
                        jQuery.fn[name] = function(speed, easing, callback) {
                            return speed == null || typeof speed === "boolean" ?
                                cssFn.apply(this, arguments) :
                                this.animate(genFx(name, true), speed, easing, callback);
                        };
                    });

                    // Generate shortcuts for custom animations
                    jQuery.each({
                        slideDown: genFx("show"),
                        slideUp: genFx("hide"),
                        slideToggle: genFx("toggle"),
                        fadeIn: { opacity: "show" },
                        fadeOut: { opacity: "hide" },
                        fadeToggle: { opacity: "toggle" }
                    }, function(name, props) {
                        jQuery.fn[name] = function(speed, easing, callback) {
                            return this.animate(props, speed, easing, callback);
                        };
                    });

                    jQuery.timers = [];
                    jQuery.fx.tick = function() {
                        var timer,
                            i = 0,
                            timers = jQuery.timers;

                        fxNow = Date.now();

                        for (; i < timers.length; i++) {
                            timer = timers[i];

                            // Run the timer and safely remove it when done (allowing for external removal)
                            if (!timer() && timers[i] === timer) {
                                timers.splice(i--, 1);
                            }
                        }

                        if (!timers.length) {
                            jQuery.fx.stop();
                        }
                        fxNow = undefined;
                    };

                    jQuery.fx.timer = function(timer) {
                        jQuery.timers.push(timer);
                        jQuery.fx.start();
                    };

                    jQuery.fx.interval = 13;
                    jQuery.fx.start = function() {
                        if (inProgress) {
                            return;
                        }

                        inProgress = true;
                        schedule();
                    };

                    jQuery.fx.stop = function() {
                        inProgress = null;
                    };

                    jQuery.fx.speeds = {
                        slow: 600,
                        fast: 200,

                        // Default speed
                        _default: 400
                    };


                    // Based off of the plugin by Clint Helfers, with permission.
                    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
                    jQuery.fn.delay = function(time, type) {
                        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                        type = type || "fx";

                        return this.queue(type, function(next, hooks) {
                            var timeout = window.setTimeout(next, time);
                            hooks.stop = function() {
                                window.clearTimeout(timeout);
                            };
                        });
                    };


                    (function() {
                        var input = document.createElement("input"),
                            select = document.createElement("select"),
                            opt = select.appendChild(document.createElement("option"));

                        input.type = "checkbox";

                        // Support: Android <=4.3 only
                        // Default value for a checkbox should be "on"
                        support.checkOn = input.value !== "";

                        // Support: IE <=11 only
                        // Must access selectedIndex to make default options select
                        support.optSelected = opt.selected;

                        // Support: IE <=11 only
                        // An input loses its value after becoming a radio
                        input = document.createElement("input");
                        input.value = "t";
                        input.type = "radio";
                        support.radioValue = input.value === "t";
                    })();


                    var boolHook,
                        attrHandle = jQuery.expr.attrHandle;

                    jQuery.fn.extend({
                        attr: function(name, value) {
                            return access(this, jQuery.attr, name, value, arguments.length > 1);
                        },

                        removeAttr: function(name) {
                            return this.each(function() {
                                jQuery.removeAttr(this, name);
                            });
                        }
                    });

                    jQuery.extend({
                        attr: function(elem, name, value) {
                            var ret, hooks,
                                nType = elem.nodeType;

                            // Don't get/set attributes on text, comment and attribute nodes
                            if (nType === 3 || nType === 8 || nType === 2) {
                                return;
                            }

                            // Fallback to prop when attributes are not supported
                            if (typeof elem.getAttribute === "undefined") {
                                return jQuery.prop(elem, name, value);
                            }

                            // Attribute hooks are determined by the lowercase version
                            // Grab necessary hook if one is defined
                            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                                hooks = jQuery.attrHooks[name.toLowerCase()] ||
                                    (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                            }

                            if (value !== undefined) {
                                if (value === null) {
                                    jQuery.removeAttr(elem, name);
                                    return;
                                }

                                if (hooks && "set" in hooks &&
                                    (ret = hooks.set(elem, value, name)) !== undefined) {
                                    return ret;
                                }

                                elem.setAttribute(name, value + "");
                                return value;
                            }

                            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                                return ret;
                            }

                            ret = jQuery.find.attr(elem, name);

                            // Non-existent attributes return null, we normalize to undefined
                            return ret == null ? undefined : ret;
                        },

                        attrHooks: {
                            type: {
                                set: function(elem, value) {
                                    if (!support.radioValue && value === "radio" &&
                                        nodeName(elem, "input")) {
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

                        removeAttr: function(elem, value) {
                            var name,
                                i = 0,

                                // Attribute names can contain non-HTML whitespace characters
                                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                                attrNames = value && value.match(rnothtmlwhite);

                            if (attrNames && elem.nodeType === 1) {
                                while ((name = attrNames[i++])) {
                                    elem.removeAttribute(name);
                                }
                            }
                        }
                    });

                    // Hooks for boolean attributes
                    boolHook = {
                        set: function(elem, value, name) {
                            if (value === false) {

                                // Remove boolean attributes when set to false
                                jQuery.removeAttr(elem, name);
                            } else {
                                elem.setAttribute(name, name);
                            }
                            return name;
                        }
                    };

                    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
                        var getter = attrHandle[name] || jQuery.find.attr;

                        attrHandle[name] = function(elem, name, isXML) {
                            var ret, handle,
                                lowercaseName = name.toLowerCase();

                            if (!isXML) {

                                // Avoid an infinite loop by temporarily removing this function from the getter
                                handle = attrHandle[lowercaseName];
                                attrHandle[lowercaseName] = ret;
                                ret = getter(elem, name, isXML) != null ?
                                    lowercaseName :
                                    null;
                                attrHandle[lowercaseName] = handle;
                            }
                            return ret;
                        };
                    });




                    var rfocusable = /^(?:input|select|textarea|button)$/i,
                        rclickable = /^(?:a|area)$/i;

                    jQuery.fn.extend({
                        prop: function(name, value) {
                            return access(this, jQuery.prop, name, value, arguments.length > 1);
                        },

                        removeProp: function(name) {
                            return this.each(function() {
                                delete this[jQuery.propFix[name] || name];
                            });
                        }
                    });

                    jQuery.extend({
                        prop: function(elem, name, value) {
                            var ret, hooks,
                                nType = elem.nodeType;

                            // Don't get/set properties on text, comment and attribute nodes
                            if (nType === 3 || nType === 8 || nType === 2) {
                                return;
                            }

                            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

                                // Fix name and attach hooks
                                name = jQuery.propFix[name] || name;
                                hooks = jQuery.propHooks[name];
                            }

                            if (value !== undefined) {
                                if (hooks && "set" in hooks &&
                                    (ret = hooks.set(elem, value, name)) !== undefined) {
                                    return ret;
                                }

                                return (elem[name] = value);
                            }

                            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                                return ret;
                            }

                            return elem[name];
                        },

                        propHooks: {
                            tabIndex: {
                                get: function(elem) {

                                    // Support: IE <=9 - 11 only
                                    // elem.tabIndex doesn't always return the
                                    // correct value when it hasn't been explicitly set
                                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                                    // Use proper attribute retrieval(#12072)
                                    var tabindex = jQuery.find.attr(elem, "tabindex");

                                    if (tabindex) {
                                        return parseInt(tabindex, 10);
                                    }

                                    if (
                                        rfocusable.test(elem.nodeName) ||
                                        rclickable.test(elem.nodeName) &&
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
                    });

                    // Support: IE <=11 only
                    // Accessing the selectedIndex property
                    // forces the browser to respect setting selected
                    // on the option
                    // The getter ensures a default option is selected
                    // when in an optgroup
                    // eslint rule "no-unused-expressions" is disabled for this code
                    // since it considers such accessions noop
                    if (!support.optSelected) {
                        jQuery.propHooks.selected = {
                            get: function(elem) {

                                /* eslint no-unused-expressions: "off" */

                                var parent = elem.parentNode;
                                if (parent && parent.parentNode) {
                                    parent.parentNode.selectedIndex;
                                }
                                return null;
                            },
                            set: function(elem) {

                                /* eslint no-unused-expressions: "off" */

                                var parent = elem.parentNode;
                                if (parent) {
                                    parent.selectedIndex;

                                    if (parent.parentNode) {
                                        parent.parentNode.selectedIndex;
                                    }
                                }
                            }
                        };
                    }

                    jQuery.each([
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
                        jQuery.propFix[this.toLowerCase()] = this;
                    });




                    // Strip and collapse whitespace according to HTML spec
                    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
                    function stripAndCollapse(value) {
                        var tokens = value.match(rnothtmlwhite) || [];
                        return tokens.join(" ");
                    }


                    function getClass(elem) {
                        return elem.getAttribute && elem.getAttribute("class") || "";
                    }

                    function classesToArray(value) {
                        if (Array.isArray(value)) {
                            return value;
                        }
                        if (typeof value === "string") {
                            return value.match(rnothtmlwhite) || [];
                        }
                        return [];
                    }

                    jQuery.fn.extend({
                        addClass: function(value) {
                            var classes, elem, cur, curValue, clazz, j, finalValue,
                                i = 0;

                            if (isFunction(value)) {
                                return this.each(function(j) {
                                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                                });
                            }

                            classes = classesToArray(value);

                            if (classes.length) {
                                while ((elem = this[i++])) {
                                    curValue = getClass(elem);
                                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                                    if (cur) {
                                        j = 0;
                                        while ((clazz = classes[j++])) {
                                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                                cur += clazz + " ";
                                            }
                                        }

                                        // Only assign if different to avoid unneeded rendering.
                                        finalValue = stripAndCollapse(cur);
                                        if (curValue !== finalValue) {
                                            elem.setAttribute("class", finalValue);
                                        }
                                    }
                                }
                            }

                            return this;
                        },

                        removeClass: function(value) {
                            var classes, elem, cur, curValue, clazz, j, finalValue,
                                i = 0;

                            if (isFunction(value)) {
                                return this.each(function(j) {
                                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                                });
                            }

                            if (!arguments.length) {
                                return this.attr("class", "");
                            }

                            classes = classesToArray(value);

                            if (classes.length) {
                                while ((elem = this[i++])) {
                                    curValue = getClass(elem);

                                    // This expression is here for better compressibility (see addClass)
                                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                                    if (cur) {
                                        j = 0;
                                        while ((clazz = classes[j++])) {

                                            // Remove *all* instances
                                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                                cur = cur.replace(" " + clazz + " ", " ");
                                            }
                                        }

                                        // Only assign if different to avoid unneeded rendering.
                                        finalValue = stripAndCollapse(cur);
                                        if (curValue !== finalValue) {
                                            elem.setAttribute("class", finalValue);
                                        }
                                    }
                                }
                            }

                            return this;
                        },

                        toggleClass: function(value, stateVal) {
                            var type = typeof value,
                                isValidValue = type === "string" || Array.isArray(value);

                            if (typeof stateVal === "boolean" && isValidValue) {
                                return stateVal ? this.addClass(value) : this.removeClass(value);
                            }

                            if (isFunction(value)) {
                                return this.each(function(i) {
                                    jQuery(this).toggleClass(
                                        value.call(this, i, getClass(this), stateVal),
                                        stateVal
                                    );
                                });
                            }

                            return this.each(function() {
                                var className, i, self, classNames;

                                if (isValidValue) {

                                    // Toggle individual class names
                                    i = 0;
                                    self = jQuery(this);
                                    classNames = classesToArray(value);

                                    while ((className = classNames[i++])) {

                                        // Check each className given, space separated list
                                        if (self.hasClass(className)) {
                                            self.removeClass(className);
                                        } else {
                                            self.addClass(className);
                                        }
                                    }

                                    // Toggle whole class name
                                } else if (value === undefined || type === "boolean") {
                                    className = getClass(this);
                                    if (className) {

                                        // Store className if set
                                        dataPriv.set(this, "__className__", className);
                                    }

                                    // If the element has a class name or if we're passed `false`,
                                    // then remove the whole classname (if there was one, the above saved it).
                                    // Otherwise bring back whatever was previously saved (if anything),
                                    // falling back to the empty string if nothing was stored.
                                    if (this.setAttribute) {
                                        this.setAttribute("class",
                                            className || value === false ?
                                            "" :
                                            dataPriv.get(this, "__className__") || ""
                                        );
                                    }
                                }
                            });
                        },

                        hasClass: function(selector) {
                            var className, elem,
                                i = 0;

                            className = " " + selector + " ";
                            while ((elem = this[i++])) {
                                if (elem.nodeType === 1 &&
                                    (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                                    return true;
                                }
                            }

                            return false;
                        }
                    });




                    var rreturn = /\r/g;

                    jQuery.fn.extend({
                        val: function(value) {
                            var hooks, ret, valueIsFunction,
                                elem = this[0];

                            if (!arguments.length) {
                                if (elem) {
                                    hooks = jQuery.valHooks[elem.type] ||
                                        jQuery.valHooks[elem.nodeName.toLowerCase()];

                                    if (hooks &&
                                        "get" in hooks &&
                                        (ret = hooks.get(elem, "value")) !== undefined
                                    ) {
                                        return ret;
                                    }

                                    ret = elem.value;

                                    // Handle most common string cases
                                    if (typeof ret === "string") {
                                        return ret.replace(rreturn, "");
                                    }

                                    // Handle cases where value is null/undef or number
                                    return ret == null ? "" : ret;
                                }

                                return;
                            }

                            valueIsFunction = isFunction(value);

                            return this.each(function(i) {
                                var val;

                                if (this.nodeType !== 1) {
                                    return;
                                }

                                if (valueIsFunction) {
                                    val = value.call(this, i, jQuery(this).val());
                                } else {
                                    val = value;
                                }

                                // Treat null/undefined as ""; convert numbers to string
                                if (val == null) {
                                    val = "";

                                } else if (typeof val === "number") {
                                    val += "";

                                } else if (Array.isArray(val)) {
                                    val = jQuery.map(val, function(value) {
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
                                get: function(elem) {

                                    var val = jQuery.find.attr(elem, "value");
                                    return val != null ?
                                        val :

                                        // Support: IE <=10 - 11 only
                                        // option.text throws exceptions (#14686, #14858)
                                        // Strip and collapse whitespace
                                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                                        stripAndCollapse(jQuery.text(elem));
                                }
                            },
                            select: {
                                get: function(elem) {
                                    var value, option, i,
                                        options = elem.options,
                                        index = elem.selectedIndex,
                                        one = elem.type === "select-one",
                                        values = one ? null : [],
                                        max = one ? index + 1 : options.length;

                                    if (index < 0) {
                                        i = max;

                                    } else {
                                        i = one ? index : 0;
                                    }

                                    // Loop through all the selected options
                                    for (; i < max; i++) {
                                        option = options[i];

                                        // Support: IE <=9 only
                                        // IE8-9 doesn't update selected after form reset (#2551)
                                        if ((option.selected || i === index) &&

                                            // Don't return options that are disabled or in a disabled optgroup
                                            !option.disabled &&
                                            (!option.parentNode.disabled ||
                                                !nodeName(option.parentNode, "optgroup"))) {

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

                                set: function(elem, value) {
                                    var optionSet, option,
                                        options = elem.options,
                                        values = jQuery.makeArray(value),
                                        i = options.length;

                                    while (i--) {
                                        option = options[i];

                                        /* eslint-disable no-cond-assign */

                                        if (option.selected =
                                            jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                                        ) {
                                            optionSet = true;
                                        }

                                        /* eslint-enable no-cond-assign */
                                    }

                                    // Force browsers to behave consistently when non-matching value is set
                                    if (!optionSet) {
                                        elem.selectedIndex = -1;
                                    }
                                    return values;
                                }
                            }
                        }
                    });

                    // Radios and checkboxes getter/setter
                    jQuery.each(["radio", "checkbox"], function() {
                        jQuery.valHooks[this] = {
                            set: function(elem, value) {
                                if (Array.isArray(value)) {
                                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                                }
                            }
                        };
                        if (!support.checkOn) {
                            jQuery.valHooks[this].get = function(elem) {
                                return elem.getAttribute("value") === null ? "on" : elem.value;
                            };
                        }
                    });




                    // Return jQuery for attributes-only inclusion


                    support.focusin = "onfocusin" in window;


                    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                        stopPropagationCallback = function(e) {
                            e.stopPropagation();
                        };

                    jQuery.extend(jQuery.event, {

                        trigger: function(event, data, elem, onlyHandlers) {

                            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
                                eventPath = [elem || document],
                                type = hasOwn.call(event, "type") ? event.type : event,
                                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

                            cur = lastElement = tmp = elem = elem || document;

                            // Don't do events on text and comment nodes
                            if (elem.nodeType === 3 || elem.nodeType === 8) {
                                return;
                            }

                            // focus/blur morphs to focusin/out; ensure we're not firing them right now
                            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                                return;
                            }

                            if (type.indexOf(".") > -1) {

                                // Namespaced trigger; create a regexp to match event type in handle()
                                namespaces = type.split(".");
                                type = namespaces.shift();
                                namespaces.sort();
                            }
                            ontype = type.indexOf(":") < 0 && "on" + type;

                            // Caller can pass in a jQuery.Event object, Object, or just an event type string
                            event = event[jQuery.expando] ?
                                event :
                                new jQuery.Event(type, typeof event === "object" && event);

                            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                            event.isTrigger = onlyHandlers ? 2 : 3;
                            event.namespace = namespaces.join(".");
                            event.rnamespace = event.namespace ?
                                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                null;

                            // Clean up the event in case it is being reused
                            event.result = undefined;
                            if (!event.target) {
                                event.target = elem;
                            }

                            // Clone any incoming data and prepend the event, creating the handler arg list
                            data = data == null ? [event] :
                                jQuery.makeArray(data, [event]);

                            // Allow special events to draw outside the lines
                            special = jQuery.event.special[type] || {};
                            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                                return;
                            }

                            // Determine event propagation path in advance, per W3C events spec (#9951)
                            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

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
                                lastElement = cur;
                                event.type = i > 1 ?
                                    bubbleType :
                                    special.bindType || type;

                                // jQuery handler
                                handle = (dataPriv.get(cur, "events") || {})[event.type] &&
                                    dataPriv.get(cur, "handle");
                                if (handle) {
                                    handle.apply(cur, data);
                                }

                                // Native handler
                                handle = ontype && cur[ontype];
                                if (handle && handle.apply && acceptData(cur)) {
                                    event.result = handle.apply(cur, data);
                                    if (event.result === false) {
                                        event.preventDefault();
                                    }
                                }
                            }
                            event.type = type;

                            // If nobody prevented the default action, do it now
                            if (!onlyHandlers && !event.isDefaultPrevented()) {

                                if ((!special._default ||
                                        special._default.apply(eventPath.pop(), data) === false) &&
                                    acceptData(elem)) {

                                    // Call a native DOM method on the target with the same name as the event.
                                    // Don't do default actions on window, that's where global variables be (#6170)
                                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

                                        // Don't re-trigger an onFOO event when we call its FOO() method
                                        tmp = elem[ontype];

                                        if (tmp) {
                                            elem[ontype] = null;
                                        }

                                        // Prevent re-triggering of the same event, since we already bubbled it above
                                        jQuery.event.triggered = type;

                                        if (event.isPropagationStopped()) {
                                            lastElement.addEventListener(type, stopPropagationCallback);
                                        }

                                        elem[type]();

                                        if (event.isPropagationStopped()) {
                                            lastElement.removeEventListener(type, stopPropagationCallback);
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

                        // Piggyback on a donor event to simulate a different one
                        // Used only for `focus(in | out)` events
                        simulate: function(type, elem, event) {
                            var e = jQuery.extend(
                                new jQuery.Event(),
                                event, {
                                    type: type,
                                    isSimulated: true
                                }
                            );

                            jQuery.event.trigger(e, null, elem);
                        }

                    });

                    jQuery.fn.extend({

                        trigger: function(type, data) {
                            return this.each(function() {
                                jQuery.event.trigger(type, data, this);
                            });
                        },
                        triggerHandler: function(type, data) {
                            var elem = this[0];
                            if (elem) {
                                return jQuery.event.trigger(type, data, elem, true);
                            }
                        }
                    });


                    // Support: Firefox <=44
                    // Firefox doesn't have focus(in | out) events
                    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
                    //
                    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
                    // focus(in | out) events fire after focus & blur events,
                    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
                    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
                    if (!support.focusin) {
                        jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {

                            // Attach a single capturing handler on the document while someone wants focusin/focusout
                            var handler = function(event) {
                                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                            };

                            jQuery.event.special[fix] = {
                                setup: function() {
                                    var doc = this.ownerDocument || this,
                                        attaches = dataPriv.access(doc, fix);

                                    if (!attaches) {
                                        doc.addEventListener(orig, handler, true);
                                    }
                                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                                },
                                teardown: function() {
                                    var doc = this.ownerDocument || this,
                                        attaches = dataPriv.access(doc, fix) - 1;

                                    if (!attaches) {
                                        doc.removeEventListener(orig, handler, true);
                                        dataPriv.remove(doc, fix);

                                    } else {
                                        dataPriv.access(doc, fix, attaches);
                                    }
                                }
                            };
                        });
                    }
                    var location = window.location;

                    var nonce = Date.now();

                    var rquery = (/\?/);



                    // Cross-browser xml parsing
                    jQuery.parseXML = function(data) {
                        var xml;
                        if (!data || typeof data !== "string") {
                            return null;
                        }

                        // Support: IE 9 - 11 only
                        // IE throws on parseFromString with invalid input.
                        try {
                            xml = (new window.DOMParser()).parseFromString(data, "text/xml");
                        } catch (e) {
                            xml = undefined;
                        }

                        if (!xml || xml.getElementsByTagName("parsererror").length) {
                            jQuery.error("Invalid XML: " + data);
                        }
                        return xml;
                    };


                    var
                        rbracket = /\[\]$/,
                        rCRLF = /\r?\n/g,
                        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                        rsubmittable = /^(?:input|select|textarea|keygen)/i;

                    function buildParams(prefix, obj, traditional, add) {
                        var name;

                        if (Array.isArray(obj)) {

                            // Serialize array item.
                            jQuery.each(obj, function(i, v) {
                                if (traditional || rbracket.test(prefix)) {

                                    // Treat each array item as a scalar.
                                    add(prefix, v);

                                } else {

                                    // Item is non-scalar (array or object), encode its numeric index.
                                    buildParams(
                                        prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                                        v,
                                        traditional,
                                        add
                                    );
                                }
                            });

                        } else if (!traditional && toType(obj) === "object") {

                            // Serialize object item.
                            for (name in obj) {
                                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                            }

                        } else {

                            // Serialize scalar item.
                            add(prefix, obj);
                        }
                    }

                    // Serialize an array of form elements or a set of
                    // key/values into a query string
                    jQuery.param = function(a, traditional) {
                        var prefix,
                            s = [],
                            add = function(key, valueOrFunction) {

                                // If value is a function, invoke it and use its return value
                                var value = isFunction(valueOrFunction) ?
                                    valueOrFunction() :
                                    valueOrFunction;

                                s[s.length] = encodeURIComponent(key) + "=" +
                                    encodeURIComponent(value == null ? "" : value);
                            };

                        // If an array was passed in, assume that it is an array of form elements.
                        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

                            // Serialize the form elements
                            jQuery.each(a, function() {
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
                        return s.join("&");
                    };

                    jQuery.fn.extend({
                        serialize: function() {
                            return jQuery.param(this.serializeArray());
                        },
                        serializeArray: function() {
                            return this.map(function() {

                                    // Can add propHook for "elements" to filter or add form elements
                                    var elements = jQuery.prop(this, "elements");
                                    return elements ? jQuery.makeArray(elements) : this;
                                })
                                .filter(function() {
                                    var type = this.type;

                                    // Use .is( ":disabled" ) so that fieldset[disabled] works
                                    return this.name && !jQuery(this).is(":disabled") &&
                                        rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                                        (this.checked || !rcheckableType.test(type));
                                })
                                .map(function(i, elem) {
                                    var val = jQuery(this).val();

                                    if (val == null) {
                                        return null;
                                    }

                                    if (Array.isArray(val)) {
                                        return jQuery.map(val, function(val) {
                                            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                        });
                                    }

                                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                }).get();
                        }
                    });


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
                        allTypes = "*/".concat("*"),

                        // Anchor tag for parsing the document origin
                        originAnchor = document.createElement("a");
                    originAnchor.href = location.href;

                    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
                    function addToPrefiltersOrTransports(structure) {

                        // dataTypeExpression is optional and defaults to "*"
                        return function(dataTypeExpression, func) {

                            if (typeof dataTypeExpression !== "string") {
                                func = dataTypeExpression;
                                dataTypeExpression = "*";
                            }

                            var dataType,
                                i = 0,
                                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

                            if (isFunction(func)) {

                                // For each dataType in the dataTypeExpression
                                while ((dataType = dataTypes[i++])) {

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
                            seekingTransport = (structure === transports);

                        function inspect(dataType) {
                            var selected;
                            inspected[dataType] = true;
                            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                                if (typeof dataTypeOrTransport === "string" &&
                                    !seekingTransport && !inspected[dataTypeOrTransport]) {

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
                        var key, deep,
                            flatOptions = jQuery.ajaxSettings.flatOptions || {};

                        for (key in src) {
                            if (src[key] !== undefined) {
                                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                            }
                        }
                        if (deep) {
                            jQuery.extend(true, target, deep);
                        }

                        return target;
                    }

                    /* Handles responses to an ajax request:
                     * - finds the right dataType (mediates between content-type and expected dataType)
                     * - returns the corresponding response
                     */
                    function ajaxHandleResponses(s, jqXHR, responses) {

                        var ct, type, finalDataType, firstDataType,
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
                        var conv2, current, conv, tmp, prev,
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
                                                conv = converters[prev + " " + tmp[0]] ||
                                                    converters["* " + tmp[0]];
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
                                        if (conv && s.throws) {
                                            response = conv(response);
                                        } else {
                                            try {
                                                response = conv(response);
                                            } catch (e) {
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

                    jQuery.extend({

                        // Counter for holding the number of active queries
                        active: 0,

                        // Last-Modified header cache for next request
                        lastModified: {},
                        etag: {},

                        ajaxSettings: {
                            url: location.href,
                            type: "GET",
                            isLocal: rlocalProtocol.test(location.protocol),
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
                        ajaxSetup: function(target, settings) {
                            return settings ?

                                // Building a settings object
                                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

                                // Extending ajaxSettings
                                ajaxExtend(jQuery.ajaxSettings, target);
                        },

                        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                        ajaxTransport: addToPrefiltersOrTransports(transports),

                        // Main method
                        ajax: function(url, options) {

                            // If url is an object, simulate pre-1.5 signature
                            if (typeof url === "object") {
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
                                s = jQuery.ajaxSetup({}, options),

                                // Callbacks context
                                callbackContext = s.context || s,

                                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                                globalEventContext = s.context &&
                                (callbackContext.nodeType || callbackContext.jquery) ?
                                jQuery(callbackContext) :
                                jQuery.event,

                                // Deferreds
                                deferred = jQuery.Deferred(),
                                completeDeferred = jQuery.Callbacks("once memory"),

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
                                    getResponseHeader: function(key) {
                                        var match;
                                        if (completed) {
                                            if (!responseHeaders) {
                                                responseHeaders = {};
                                                while ((match = rheaders.exec(responseHeadersString))) {
                                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                                }
                                            }
                                            match = responseHeaders[key.toLowerCase()];
                                        }
                                        return match == null ? null : match;
                                    },

                                    // Raw string
                                    getAllResponseHeaders: function() {
                                        return completed ? responseHeadersString : null;
                                    },

                                    // Caches the header
                                    setRequestHeader: function(name, value) {
                                        if (completed == null) {
                                            name = requestHeadersNames[name.toLowerCase()] =
                                                requestHeadersNames[name.toLowerCase()] || name;
                                            requestHeaders[name] = value;
                                        }
                                        return this;
                                    },

                                    // Overrides response content-type header
                                    overrideMimeType: function(type) {
                                        if (completed == null) {
                                            s.mimeType = type;
                                        }
                                        return this;
                                    },

                                    // Status-dependent callbacks
                                    statusCode: function(map) {
                                        var code;
                                        if (map) {
                                            if (completed) {

                                                // Execute the appropriate callbacks
                                                jqXHR.always(map[jqXHR.status]);
                                            } else {

                                                // Lazy-add the new callbacks in a way that preserves old ones
                                                for (code in map) {
                                                    statusCode[code] = [statusCode[code], map[code]];
                                                }
                                            }
                                        }
                                        return this;
                                    },

                                    // Cancel the request
                                    abort: function(statusText) {
                                        var finalText = statusText || strAbort;
                                        if (transport) {
                                            transport.abort(finalText);
                                        }
                                        done(0, finalText);
                                        return this;
                                    }
                                };

                            // Attach deferreds
                            deferred.promise(jqXHR);

                            // Add protocol if not provided (prefilters might expect it)
                            // Handle falsy url in the settings object (#10093: consistency with old signature)
                            // We also use the url parameter if available
                            s.url = ((url || s.url || location.href) + "")
                                .replace(rprotocol, location.protocol + "//");

                            // Alias method option to type as per ticket #12004
                            s.type = options.method || options.type || s.method || s.type;

                            // Extract dataTypes list
                            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

                            // A cross-domain request is in order when the origin doesn't match the current origin.
                            if (s.crossDomain == null) {
                                urlAnchor = document.createElement("a");

                                // Support: IE <=8 - 11, Edge 12 - 15
                                // IE throws exception on accessing the href property if url is malformed,
                                // e.g. http://example.com:80x/
                                try {
                                    urlAnchor.href = s.url;

                                    // Support: IE <=8 - 11 only
                                    // Anchor's host property isn't correctly set when s.url is relative
                                    urlAnchor.href = urlAnchor.href;
                                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                                        urlAnchor.protocol + "//" + urlAnchor.host;
                                } catch (e) {

                                    // If there is an error parsing the URL, assume it is crossDomain,
                                    // it can be rejected by the transport if it is invalid
                                    s.crossDomain = true;
                                }
                            }

                            // Convert data if not already a string
                            if (s.data && s.processData && typeof s.data !== "string") {
                                s.data = jQuery.param(s.data, s.traditional);
                            }

                            // Apply prefilters
                            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

                            // If request was aborted inside a prefilter, stop there
                            if (completed) {
                                return jqXHR;
                            }

                            // We can fire global events as of now if asked to
                            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
                            fireGlobals = jQuery.event && s.global;

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
                            // Remove hash to simplify url manipulation
                            cacheURL = s.url.replace(rhash, "");

                            // More options handling for requests with no content
                            if (!s.hasContent) {

                                // Remember the hash so we can put it back
                                uncached = s.url.slice(cacheURL.length);

                                // If data is available and should be processed, append data to url
                                if (s.data && (s.processData || typeof s.data === "string")) {
                                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                                    // #9682: remove data so that it's not used in an eventual retry
                                    delete s.data;
                                }

                                // Add or update anti-cache param if needed
                                if (s.cache === false) {
                                    cacheURL = cacheURL.replace(rantiCache, "$1");
                                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
                                }

                                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                                s.url = cacheURL + uncached;

                                // Change '%20' to '+' if this is encoded form body content (gh-2658)
                            } else if (s.data && s.processData &&
                                (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                                s.data = s.data.replace(r20, "+");
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
                            jqXHR.setRequestHeader(
                                "Accept",
                                s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                                s.accepts[s.dataTypes[0]] +
                                (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                                s.accepts["*"]
                            );

                            // Check for headers option
                            for (i in s.headers) {
                                jqXHR.setRequestHeader(i, s.headers[i]);
                            }

                            // Allow custom headers/mimetypes and early abort
                            if (s.beforeSend &&
                                (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

                                // Abort if not done already and return
                                return jqXHR.abort();
                            }

                            // Aborting is no longer a cancellation
                            strAbort = "abort";

                            // Install callbacks on deferreds
                            completeDeferred.add(s.complete);
                            jqXHR.done(s.success);
                            jqXHR.fail(s.error);

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

                                // If request was aborted inside ajaxSend, stop there
                                if (completed) {
                                    return jqXHR;
                                }

                                // Timeout
                                if (s.async && s.timeout > 0) {
                                    timeoutTimer = window.setTimeout(function() {
                                        jqXHR.abort("timeout");
                                    }, s.timeout);
                                }

                                try {
                                    completed = false;
                                    transport.send(requestHeaders, done);
                                } catch (e) {

                                    // Rethrow post-completion exceptions
                                    if (completed) {
                                        throw e;
                                    }

                                    // Propagate others as results
                                    done(-1, e);
                                }
                            }

                            // Callback for when everything is done
                            function done(status, nativeStatusText, responses, headers) {
                                var isSuccess, success, error, response, modified,
                                    statusText = nativeStatusText;

                                // Ignore repeat invocations
                                if (completed) {
                                    return;
                                }

                                completed = true;

                                // Clear timeout if it exists
                                if (timeoutTimer) {
                                    window.clearTimeout(timeoutTimer);
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

                                    // Extract error from statusText and normalize for non-aborts
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
                                jqXHR.statusCode(statusCode);
                                statusCode = undefined;

                                if (fireGlobals) {
                                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                                }

                                // Complete
                                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                                if (fireGlobals) {
                                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                                    // Handle the global AJAX counter
                                    if (!(--jQuery.active)) {
                                        jQuery.event.trigger("ajaxStop");
                                    }
                                }
                            }

                            return jqXHR;
                        },

                        getJSON: function(url, data, callback) {
                            return jQuery.get(url, data, callback, "json");
                        },

                        getScript: function(url, callback) {
                            return jQuery.get(url, undefined, callback, "script");
                        }
                    });

                    jQuery.each(["get", "post"], function(i, method) {
                        jQuery[method] = function(url, data, callback, type) {

                            // Shift arguments if data argument was omitted
                            if (isFunction(data)) {
                                type = type || callback;
                                callback = data;
                                data = undefined;
                            }

                            // The url can be an options object (which then must have .url)
                            return jQuery.ajax(jQuery.extend({
                                url: url,
                                type: method,
                                dataType: type,
                                data: data,
                                success: callback
                            }, jQuery.isPlainObject(url) && url));
                        };
                    });


                    jQuery._evalUrl = function(url) {
                        return jQuery.ajax({
                            url: url,

                            // Make this explicit, since user can override this through ajaxSetup (#11264)
                            type: "GET",
                            dataType: "script",
                            cache: true,
                            async: false,
                            global: false,
                            "throws": true
                        });
                    };


                    jQuery.fn.extend({
                        wrapAll: function(html) {
                            var wrap;

                            if (this[0]) {
                                if (isFunction(html)) {
                                    html = html.call(this[0]);
                                }

                                // The elements to wrap the target around
                                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                                if (this[0].parentNode) {
                                    wrap.insertBefore(this[0]);
                                }

                                wrap.map(function() {
                                    var elem = this;

                                    while (elem.firstElementChild) {
                                        elem = elem.firstElementChild;
                                    }

                                    return elem;
                                }).append(this);
                            }

                            return this;
                        },

                        wrapInner: function(html) {
                            if (isFunction(html)) {
                                return this.each(function(i) {
                                    jQuery(this).wrapInner(html.call(this, i));
                                });
                            }

                            return this.each(function() {
                                var self = jQuery(this),
                                    contents = self.contents();

                                if (contents.length) {
                                    contents.wrapAll(html);

                                } else {
                                    self.append(html);
                                }
                            });
                        },

                        wrap: function(html) {
                            var htmlIsFunction = isFunction(html);

                            return this.each(function(i) {
                                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                            });
                        },

                        unwrap: function(selector) {
                            this.parent(selector).not("body").each(function() {
                                jQuery(this).replaceWith(this.childNodes);
                            });
                            return this;
                        }
                    });


                    jQuery.expr.pseudos.hidden = function(elem) {
                        return !jQuery.expr.pseudos.visible(elem);
                    };
                    jQuery.expr.pseudos.visible = function(elem) {
                        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                    };




                    jQuery.ajaxSettings.xhr = function() {
                        try {
                            return new window.XMLHttpRequest();
                        } catch (e) {}
                    };

                    var xhrSuccessStatus = {

                            // File protocol always yields status code 0, assume 200
                            0: 200,

                            // Support: IE <=9 only
                            // #1450: sometimes IE returns 1223 when it should be 204
                            1223: 204
                        },
                        xhrSupported = jQuery.ajaxSettings.xhr();

                    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
                    support.ajax = xhrSupported = !!xhrSupported;

                    jQuery.ajaxTransport(function(options) {
                        var callback, errorCallback;

                        // Cross domain only allowed if supported through XMLHttpRequest
                        if (support.cors || xhrSupported && !options.crossDomain) {
                            return {
                                send: function(headers, complete) {
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
                                    if (options.xhrFields) {
                                        for (i in options.xhrFields) {
                                            xhr[i] = options.xhrFields[i];
                                        }
                                    }

                                    // Override mime type if needed
                                    if (options.mimeType && xhr.overrideMimeType) {
                                        xhr.overrideMimeType(options.mimeType);
                                    }

                                    // X-Requested-With header
                                    // For cross-domain requests, seeing as conditions for a preflight are
                                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                                    // (it can always be set on a per-request basis or even using ajaxSetup)
                                    // For same-domain requests, won't change header if already provided.
                                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                                        headers["X-Requested-With"] = "XMLHttpRequest";
                                    }

                                    // Set headers
                                    for (i in headers) {
                                        xhr.setRequestHeader(i, headers[i]);
                                    }

                                    // Callback
                                    callback = function(type) {
                                        return function() {
                                            if (callback) {
                                                callback = errorCallback = xhr.onload =
                                                    xhr.onerror = xhr.onabort = xhr.ontimeout =
                                                    xhr.onreadystatechange = null;

                                                if (type === "abort") {
                                                    xhr.abort();
                                                } else if (type === "error") {

                                                    // Support: IE <=9 only
                                                    // On a manual native abort, IE9 throws
                                                    // errors on any property access that is not readyState
                                                    if (typeof xhr.status !== "number") {
                                                        complete(0, "error");
                                                    } else {
                                                        complete(

                                                            // File: protocol always yields status 0; see #8605, #14207
                                                            xhr.status,
                                                            xhr.statusText
                                                        );
                                                    }
                                                } else {
                                                    complete(
                                                        xhrSuccessStatus[xhr.status] || xhr.status,
                                                        xhr.statusText,

                                                        // Support: IE <=9 only
                                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                                        (xhr.responseType || "text") !== "text" ||
                                                        typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                                                        xhr.getAllResponseHeaders()
                                                    );
                                                }
                                            }
                                        };
                                    };

                                    // Listen to events
                                    xhr.onload = callback();
                                    errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

                                    // Support: IE 9 only
                                    // Use onreadystatechange to replace onabort
                                    // to handle uncaught aborts
                                    if (xhr.onabort !== undefined) {
                                        xhr.onabort = errorCallback;
                                    } else {
                                        xhr.onreadystatechange = function() {

                                            // Check readyState before timeout as it changes
                                            if (xhr.readyState === 4) {

                                                // Allow onerror to be called first,
                                                // but that will not handle a native abort
                                                // Also, save errorCallback to a variable
                                                // as xhr.onerror cannot be accessed
                                                window.setTimeout(function() {
                                                    if (callback) {
                                                        errorCallback();
                                                    }
                                                });
                                            }
                                        };
                                    }

                                    // Create the abort callback
                                    callback = callback("abort");

                                    try {

                                        // Do send the request (this may raise an exception)
                                        xhr.send(options.hasContent && options.data || null);
                                    } catch (e) {

                                        // #14683: Only rethrow if this hasn't been notified as an error yet
                                        if (callback) {
                                            throw e;
                                        }
                                    }
                                },

                                abort: function() {
                                    if (callback) {
                                        callback();
                                    }
                                }
                            };
                        }
                    });




                    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
                    jQuery.ajaxPrefilter(function(s) {
                        if (s.crossDomain) {
                            s.contents.script = false;
                        }
                    });

                    // Install script dataType
                    jQuery.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, " +
                                "application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(text) {
                                jQuery.globalEval(text);
                                return text;
                            }
                        }
                    });

                    // Handle cache's special case and crossDomain
                    jQuery.ajaxPrefilter("script", function(s) {
                        if (s.cache === undefined) {
                            s.cache = false;
                        }
                        if (s.crossDomain) {
                            s.type = "GET";
                        }
                    });

                    // Bind script tag hack transport
                    jQuery.ajaxTransport("script", function(s) {

                        // This transport only deals with cross domain requests
                        if (s.crossDomain) {
                            var script, callback;
                            return {
                                send: function(_, complete) {
                                    script = jQuery("<script>").prop({
                                        charset: s.scriptCharset,
                                        src: s.url
                                    }).on(
                                        "load error",
                                        callback = function(evt) {
                                            script.remove();
                                            callback = null;
                                            if (evt) {
                                                complete(evt.type === "error" ? 404 : 200, evt.type);
                                            }
                                        }
                                    );

                                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                                    document.head.appendChild(script[0]);
                                },
                                abort: function() {
                                    if (callback) {
                                        callback();
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
                        jsonpCallback: function() {
                            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
                            this[callback] = true;
                            return callback;
                        }
                    });

                    // Detect, normalize options and install callbacks for jsonp requests
                    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {

                        var callbackName, overwritten, responseContainer,
                            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                                "url" :
                                typeof s.data === "string" &&
                                (s.contentType || "")
                                .indexOf("application/x-www-form-urlencoded") === 0 &&
                                rjsonp.test(s.data) && "data"
                            );

                        // Handle iff the expected data type is "jsonp" or we have a parameter to set
                        if (jsonProp || s.dataTypes[0] === "jsonp") {

                            // Get callback name, remembering preexisting value associated with it
                            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
                                s.jsonpCallback() :
                                s.jsonpCallback;

                            // Insert callback into url or form data
                            if (jsonProp) {
                                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                            } else if (s.jsonp !== false) {
                                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                            }

                            // Use data converter to retrieve json after script execution
                            s.converters["script json"] = function() {
                                if (!responseContainer) {
                                    jQuery.error(callbackName + " was not called");
                                }
                                return responseContainer[0];
                            };

                            // Force json dataType
                            s.dataTypes[0] = "json";

                            // Install callback
                            overwritten = window[callbackName];
                            window[callbackName] = function() {
                                responseContainer = arguments;
                            };

                            // Clean-up function (fires after converters)
                            jqXHR.always(function() {

                                // If previous value didn't exist - remove it
                                if (overwritten === undefined) {
                                    jQuery(window).removeProp(callbackName);

                                    // Otherwise restore preexisting value
                                } else {
                                    window[callbackName] = overwritten;
                                }

                                // Save back as free
                                if (s[callbackName]) {

                                    // Make sure that re-using the options doesn't screw things around
                                    s.jsonpCallback = originalSettings.jsonpCallback;

                                    // Save the callback name for future use
                                    oldCallbacks.push(callbackName);
                                }

                                // Call if it was a function and we have a response
                                if (responseContainer && isFunction(overwritten)) {
                                    overwritten(responseContainer[0]);
                                }

                                responseContainer = overwritten = undefined;
                            });

                            // Delegate to script
                            return "script";
                        }
                    });




                    // Support: Safari 8 only
                    // In Safari 8 documents created via document.implementation.createHTMLDocument
                    // collapse sibling forms: the second one becomes a child of the first one.
                    // Because of that, this security measure has to be disabled in Safari 8.
                    // https://bugs.webkit.org/show_bug.cgi?id=137337
                    support.createHTMLDocument = (function() {
                        var body = document.implementation.createHTMLDocument("").body;
                        body.innerHTML = "<form></form><form></form>";
                        return body.childNodes.length === 2;
                    })();


                    // Argument "data" should be string of html
                    // context (optional): If specified, the fragment will be created in this context,
                    // defaults to document
                    // keepScripts (optional): If true, will include scripts passed in the html string
                    jQuery.parseHTML = function(data, context, keepScripts) {
                        if (typeof data !== "string") {
                            return [];
                        }
                        if (typeof context === "boolean") {
                            keepScripts = context;
                            context = false;
                        }

                        var base, parsed, scripts;

                        if (!context) {

                            // Stop scripts or inline event handlers from being executed immediately
                            // by using document.implementation
                            if (support.createHTMLDocument) {
                                context = document.implementation.createHTMLDocument("");

                                // Set the base href for the created document
                                // so any parsed elements with URLs
                                // are based on the document's URL (gh-2965)
                                base = context.createElement("base");
                                base.href = document.location.href;
                                context.head.appendChild(base);
                            } else {
                                context = document;
                            }
                        }

                        parsed = rsingleTag.exec(data);
                        scripts = !keepScripts && [];

                        // Single tag
                        if (parsed) {
                            return [context.createElement(parsed[1])];
                        }

                        parsed = buildFragment([data], context, scripts);

                        if (scripts && scripts.length) {
                            jQuery(scripts).remove();
                        }

                        return jQuery.merge([], parsed.childNodes);
                    };


                    /**
                     * Load a url into a page
                     */
                    jQuery.fn.load = function(url, params, callback) {
                        var selector, type, response,
                            self = this,
                            off = url.indexOf(" ");

                        if (off > -1) {
                            selector = stripAndCollapse(url.slice(off));
                            url = url.slice(0, off);
                        }

                        // If it's a function
                        if (isFunction(params)) {

                            // We assume that it's the callback
                            callback = params;
                            params = undefined;

                            // Otherwise, build a param string
                        } else if (params && typeof params === "object") {
                            type = "POST";
                        }

                        // If we have elements to modify, make the request
                        if (self.length > 0) {
                            jQuery.ajax({
                                url: url,

                                // If "type" variable is undefined, then "GET" method will be used.
                                // Make value of this field explicit since
                                // user can override it through ajaxSetup method
                                type: type || "GET",
                                dataType: "html",
                                data: params
                            }).done(function(responseText) {

                                // Save response for use in complete callback
                                response = arguments;

                                self.html(selector ?

                                    // If a selector was specified, locate the right elements in a dummy div
                                    // Exclude scripts to avoid IE 'Permission Denied' errors
                                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                                    // Otherwise use the full result
                                    responseText);

                                // If the request succeeds, this function gets "data", "status", "jqXHR"
                                // but they are ignored because response was set above.
                                // If it fails, this function gets "jqXHR", "status", "error"
                            }).always(callback && function(jqXHR, status) {
                                self.each(function() {
                                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                                });
                            });
                        }

                        return this;
                    };




                    // Attach a bunch of functions for handling common AJAX events
                    jQuery.each([
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend"
                    ], function(i, type) {
                        jQuery.fn[type] = function(fn) {
                            return this.on(type, fn);
                        };
                    });




                    jQuery.expr.pseudos.animated = function(elem) {
                        return jQuery.grep(jQuery.timers, function(fn) {
                            return elem === fn.elem;
                        }).length;
                    };




                    jQuery.offset = {
                        setOffset: function(elem, options, i) {
                            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                                position = jQuery.css(elem, "position"),
                                curElem = jQuery(elem),
                                props = {};

                            // Set position first, in-case top/left are set even on static elem
                            if (position === "static") {
                                elem.style.position = "relative";
                            }

                            curOffset = curElem.offset();
                            curCSSTop = jQuery.css(elem, "top");
                            curCSSLeft = jQuery.css(elem, "left");
                            calculatePosition = (position === "absolute" || position === "fixed") &&
                                (curCSSTop + curCSSLeft).indexOf("auto") > -1;

                            // Need to be able to calculate position if either
                            // top or left is auto and position is either absolute or fixed
                            if (calculatePosition) {
                                curPosition = curElem.position();
                                curTop = curPosition.top;
                                curLeft = curPosition.left;

                            } else {
                                curTop = parseFloat(curCSSTop) || 0;
                                curLeft = parseFloat(curCSSLeft) || 0;
                            }

                            if (isFunction(options)) {

                                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                                options = options.call(elem, i, jQuery.extend({}, curOffset));
                            }

                            if (options.top != null) {
                                props.top = (options.top - curOffset.top) + curTop;
                            }
                            if (options.left != null) {
                                props.left = (options.left - curOffset.left) + curLeft;
                            }

                            if ("using" in options) {
                                options.using.call(elem, props);

                            } else {
                                curElem.css(props);
                            }
                        }
                    };

                    jQuery.fn.extend({

                        // offset() relates an element's border box to the document origin
                        offset: function(options) {

                            // Preserve chaining for setter
                            if (arguments.length) {
                                return options === undefined ?
                                    this :
                                    this.each(function(i) {
                                        jQuery.offset.setOffset(this, options, i);
                                    });
                            }

                            var rect, win,
                                elem = this[0];

                            if (!elem) {
                                return;
                            }

                            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                            // Support: IE <=11 only
                            // Running getBoundingClientRect on a
                            // disconnected node in IE throws an error
                            if (!elem.getClientRects().length) {
                                return { top: 0, left: 0 };
                            }

                            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                            rect = elem.getBoundingClientRect();
                            win = elem.ownerDocument.defaultView;
                            return {
                                top: rect.top + win.pageYOffset,
                                left: rect.left + win.pageXOffset
                            };
                        },

                        // position() relates an element's margin box to its offset parent's padding box
                        // This corresponds to the behavior of CSS absolute positioning
                        position: function() {
                            if (!this[0]) {
                                return;
                            }

                            var offsetParent, offset, doc,
                                elem = this[0],
                                parentOffset = { top: 0, left: 0 };

                            // position:fixed elements are offset from the viewport, which itself always has zero offset
                            if (jQuery.css(elem, "position") === "fixed") {

                                // Assume position:fixed implies availability of getBoundingClientRect
                                offset = elem.getBoundingClientRect();

                            } else {
                                offset = this.offset();

                                // Account for the *real* offset parent, which can be the document or its root element
                                // when a statically positioned element is identified
                                doc = elem.ownerDocument;
                                offsetParent = elem.offsetParent || doc.documentElement;
                                while (offsetParent &&
                                    (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                                    jQuery.css(offsetParent, "position") === "static") {

                                    offsetParent = offsetParent.parentNode;
                                }
                                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                                    // Incorporate borders into its offset, since they are outside its content origin
                                    parentOffset = jQuery(offsetParent).offset();
                                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                                }
                            }

                            // Subtract parent offsets and element margins
                            return {
                                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
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
                            return this.map(function() {
                                var offsetParent = this.offsetParent;

                                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                                    offsetParent = offsetParent.offsetParent;
                                }

                                return offsetParent || documentElement;
                            });
                        }
                    });

                    // Create scrollLeft and scrollTop methods
                    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
                        var top = "pageYOffset" === prop;

                        jQuery.fn[method] = function(val) {
                            return access(this, function(elem, method, val) {

                                // Coalesce documents and windows
                                var win;
                                if (isWindow(elem)) {
                                    win = elem;
                                } else if (elem.nodeType === 9) {
                                    win = elem.defaultView;
                                }

                                if (val === undefined) {
                                    return win ? win[prop] : elem[method];
                                }

                                if (win) {
                                    win.scrollTo(!top ? val : win.pageXOffset,
                                        top ? val : win.pageYOffset
                                    );

                                } else {
                                    elem[method] = val;
                                }
                            }, method, val, arguments.length);
                        };
                    });

                    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
                    // Add the top/left cssHooks using jQuery.fn.position
                    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
                    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
                    // getComputedStyle returns percent when specified for top/left/bottom/right;
                    // rather than make the css module depend on the offset module, just check for it here
                    jQuery.each(["top", "left"], function(i, prop) {
                        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
                            function(elem, computed) {
                                if (computed) {
                                    computed = curCSS(elem, prop);

                                    // If curCSS returns percentage, fallback to offset
                                    return rnumnonpx.test(computed) ?
                                        jQuery(elem).position()[prop] + "px" :
                                        computed;
                                }
                            }
                        );
                    });


                    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
                    jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
                        jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name },
                            function(defaultExtra, funcName) {

                                // Margin is only for outerHeight, outerWidth
                                jQuery.fn[funcName] = function(margin, value) {
                                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                                    return access(this, function(elem, type, value) {
                                        var doc;

                                        if (isWindow(elem)) {

                                            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                                            return funcName.indexOf("outer") === 0 ?
                                                elem["inner" + name] :
                                                elem.document.documentElement["client" + name];
                                        }

                                        // Get document width or height
                                        if (elem.nodeType === 9) {
                                            doc = elem.documentElement;

                                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                                            // whichever is greatest
                                            return Math.max(
                                                elem.body["scroll" + name], doc["scroll" + name],
                                                elem.body["offset" + name], doc["offset" + name],
                                                doc["client" + name]
                                            );
                                        }

                                        return value === undefined ?

                                            // Get width or height on the element, requesting but not forcing parseFloat
                                            jQuery.css(elem, type, extra) :

                                            // Set width or height on the element
                                            jQuery.style(elem, type, value, extra);
                                    }, type, chainable ? margin : undefined, chainable);
                                };
                            });
                    });


                    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
                            "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                            "change select submit keydown keypress keyup contextmenu").split(" "),
                        function(i, name) {

                            // Handle event binding
                            jQuery.fn[name] = function(data, fn) {
                                return arguments.length > 0 ?
                                    this.on(name, null, data, fn) :
                                    this.trigger(name);
                            };
                        });

                    jQuery.fn.extend({
                        hover: function(fnOver, fnOut) {
                            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                        }
                    });




                    jQuery.fn.extend({

                        bind: function(types, data, fn) {
                            return this.on(types, null, data, fn);
                        },
                        unbind: function(types, fn) {
                            return this.off(types, null, fn);
                        },

                        delegate: function(selector, types, data, fn) {
                            return this.on(types, selector, data, fn);
                        },
                        undelegate: function(selector, types, fn) {

                            // ( namespace ) or ( selector, types [, fn] )
                            return arguments.length === 1 ?
                                this.off(selector, "**") :
                                this.off(types, selector || "**", fn);
                        }
                    });

                    // Bind a function to a context, optionally partially applying any
                    // arguments.
                    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
                    // However, it is not slated for removal any time soon
                    jQuery.proxy = function(fn, context) {
                        var tmp, args, proxy;

                        if (typeof context === "string") {
                            tmp = fn[context];
                            context = fn;
                            fn = tmp;
                        }

                        // Quick check to determine if target is callable, in the spec
                        // this throws a TypeError, but we will just return undefined.
                        if (!isFunction(fn)) {
                            return undefined;
                        }

                        // Simulated bind
                        args = slice.call(arguments, 2);
                        proxy = function() {
                            return fn.apply(context || this, args.concat(slice.call(arguments)));
                        };

                        // Set the guid of unique handler to the same of original handler, so it can be removed
                        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

                        return proxy;
                    };

                    jQuery.holdReady = function(hold) {
                        if (hold) {
                            jQuery.readyWait++;
                        } else {
                            jQuery.ready(true);
                        }
                    };
                    jQuery.isArray = Array.isArray;
                    jQuery.parseJSON = JSON.parse;
                    jQuery.nodeName = nodeName;
                    jQuery.isFunction = isFunction;
                    jQuery.isWindow = isWindow;
                    jQuery.camelCase = camelCase;
                    jQuery.type = toType;

                    jQuery.now = Date.now;

                    jQuery.isNumeric = function(obj) {

                        // As of jQuery 3.0, isNumeric is limited to
                        // strings and numbers (primitives or objects)
                        // that can be coerced to finite numbers (gh-2662)
                        var type = jQuery.type(obj);
                        return (type === "number" || type === "string") &&

                            // parseFloat NaNs numeric-cast false positives ("")
                            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                            // subtraction forces infinities to NaN
                            !isNaN(obj - parseFloat(obj));
                    };




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

                    if (typeof define === "function" && define.amd) {
                        define("jquery", [], function() {
                            return jQuery;
                        });
                    }




                    var

                        // Map over jQuery in case of overwrite
                        _jQuery = window.jQuery,

                        // Map over the $ in case of overwrite
                        _$ = window.$;

                    jQuery.noConflict = function(deep) {
                        if (window.$ === jQuery) {
                            window.$ = _$;
                        }

                        if (deep && window.jQuery === jQuery) {
                            window.jQuery = _jQuery;
                        }

                        return jQuery;
                    };

                    // Expose jQuery and $ identifiers, even in AMD
                    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
                    // and CommonJS for browser emulators (#13566)
                    if (!noGlobal) {
                        window.jQuery = window.$ = jQuery;
                    }




                    return jQuery;
                });

                ;
                browserify_shim__define__module__export__(typeof $ != "undefined" ? $ : window.$);

            }).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    3: [function(require, module, exports) {
        /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
        ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";
            var n = [],
                r = e.document,
                i = Object.getPrototypeOf,
                o = n.slice,
                a = n.concat,
                s = n.push,
                u = n.indexOf,
                l = {},
                c = l.toString,
                f = l.hasOwnProperty,
                p = f.toString,
                d = p.call(Object),
                h = {},
                g = function e(t) { return "function" == typeof t && "number" != typeof t.nodeType },
                y = function e(t) { return null != t && t === t.window },
                v = { type: !0, src: !0, noModule: !0 };

            function m(e, t, n) {
                var i, o = (t = t || r).createElement("script");
                if (o.text = e, n)
                    for (i in v) n[i] && (o[i] = n[i]);
                t.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e }
            var b = "3.3.1",
                w = function(e, t) { return new w.fn.init(e, t) },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.fn = w.prototype = {
                jquery: "3.3.1",
                constructor: w,
                length: 0,
                toArray: function() { return o.call(this) },
                get: function(e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] },
                pushStack: function(e) { var t = w.merge(this.constructor(), e); return t.prevObject = this, t },
                each: function(e) { return w.each(this, e) },
                map: function(e) { return this.pushStack(w.map(this, function(t, n) { return e.call(t, n, t) })) },
                slice: function() { return this.pushStack(o.apply(this, arguments)) },
                first: function() { return this.eq(0) },
                last: function() { return this.eq(-1) },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() { return this.prevObject || this.constructor() },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, w.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) { throw new Error(e) },
                noop: function() {},
                isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) },
                isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
                globalEval: function(e) { m(e) },
                each: function(e, t) {
                    var n, r = 0;
                    if (C(e)) {
                        for (n = e.length; r < n; r++)
                            if (!1 === t.call(e[r], r, e[r])) break
                    } else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function(e) { return null == e ? "" : (e + "").replace(T, "") },
                makeArray: function(e, t) { var n = t || []; return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n },
                inArray: function(e, t, n) { return null == t ? -1 : u.call(t, e, n) },
                merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
                grep: function(e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]); return i },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        s = [];
                    if (C(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                    return a.apply([], s)
                },
                guid: 1,
                support: h
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { l["[object " + t + "]"] = t.toLowerCase() });

            function C(e) {
                var t = !!e && "length" in e && e.length,
                    n = x(e);
                return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            var E = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    E = ae(),
                    k = ae(),
                    S = ae(),
                    D = function(e, t) { return e === t && (f = !0), 0 },
                    N = {}.hasOwnProperty,
                    A = [],
                    j = A.pop,
                    q = A.push,
                    L = A.push,
                    H = A.slice,
                    O = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
                    W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    $ = new RegExp(M + "+", "g"),
                    B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    F = new RegExp("^" + M + "*," + M + "*"),
                    _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                    X = new RegExp(W),
                    U = new RegExp("^" + R + "$"),
                    V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
                    G = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    K = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                    ee = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                    re = function() { p() },
                    ie = me(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
                try { L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) {
                    L = {
                        apply: A.length ? function(e, t) { q.apply(e, H.call(t)) } : function(e, t) {
                            var n = e.length,
                                r = 0;
                            while (e[n++] = t[r++]);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                        if (11 !== T && (f = J.exec(e)))
                            if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r }
                        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                            if (1 !== T) m = t, v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                                while (s--) h[s] = "#" + c + " " + ve(h[s]);
                                v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try { return L.apply(r, m.querySelectorAll(v)), r } catch (e) {} finally { c === b && t.removeAttribute("id") }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];

                    function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i }
                    return t
                }

                function se(e) { return e[b] = !0, e }

                function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function le(e, t) {
                    var n = e.split("|"),
                        i = n.length;
                    while (i--) r.attrHandle[n[i]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        while (n = n.nextSibling)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                function pe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                function de(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                function he(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, r) {
                            var i, o = e([], n.length, t),
                                a = o.length;
                            while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ge(e) { return e && "undefined" != typeof e.getElementsByTagName && e } n = oe.support = {}, o = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function(e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }, r.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                i = t.getElementsByName(e), r = 0;
                                while (o = i[r++])
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]") }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W) }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, D = t ? function(e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (i === o) return ce(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }, d) : d
                }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) {}
                    return oe(t, d, null, [e]).length > 0
                }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, oe.escape = function(e) { return (e + "").replace(te, ne) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) }
                    return c = null, e
                }, i = oe.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                        while (t = e[r++]) n += i(t);
                    return n
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                    filter: {
                        TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                        CLASS: function(e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                        ATTR: function(e, t, n) { return function(r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    y = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    m = !u && !s,
                                    x = !1;
                                if (y) {
                                    if (o) {
                                        while (g) {
                                            p = t;
                                            while (p = p[g])
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                        x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                        while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                            if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break }
                                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                        while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                            if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                var r, o = i(e, t),
                                    a = o.length;
                                while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) { return i(e, 0, n) }) : i
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[b] ? se(function(e, t, n, i) {
                                var o, a = r(e, null, i, []),
                                    s = e.length;
                                while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                        }),
                        has: se(function(e) { return function(t) { return oe(e, t).length > 0 } }),
                        contains: se(function(e) {
                            return e = e.replace(Z, ee),
                                function(t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 }
                        }),
                        lang: se(function(e) {
                            return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                function(t) {
                                    var n;
                                    do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                        root: function(e) { return e === h },
                        focus: function(e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                        selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) { return !r.pseudos.empty(e) },
                        header: function(e) { return Y.test(e.nodeName) },
                        input: function(e) { return G.test(e.nodeName) },
                        button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                        text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                        first: he(function() { return [0] }),
                        last: he(function(e, t) { return [t - 1] }),
                        eq: he(function(e, t, n) { return [n < 0 ? n + t : n] }),
                        even: he(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                        odd: he(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                        lt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r); return e }),
                        gt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                    }
                }).pseudos.nth = r.pseudos.eq;
                for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
                for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);

                function ye() {} ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    s = e, u = [], l = r.preFilter;
                    while (s) { n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length)); for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
                };

                function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

                function me(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first ? function(t, n, i) {
                        while (t = t[r])
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var l, c, f, p = [T, s];
                        if (u) {
                            while (t = t[r])
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            while (t = t[r])
                                if (1 === t.nodeType || a)
                                    if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n) { for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n); return n }

                function we(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

                function Te(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = a.length,
                            g = o || be(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !o && t ? g : we(g, p, e, s, u),
                            v = n ? i || (o ? e : h || r) ? [] : a : y;
                        if (n && n(y, v, s, u), r) { l = we(v, d), r(l, [], s, u), c = l.length; while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f)) }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    l = [], c = v.length;
                                    while (c--)(f = v[c]) && l.push(y[c] = f);
                                    i(null, v = [], l, u)
                                }
                                c = v.length;
                                while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                            }
                        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
                    })
                }

                function Ce(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) { return e === t }, s, !0), f = me(function(e) { return O(t, e) > -1 }, s, !0), p = [function(e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)
                        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o; i++)
                                    if (r.relative[e[i].type]) break;
                                return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                            }
                            p.push(n)
                        }
                    return xe(p)
                }

                function Ee(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                            var f, h, y, v = 0,
                                m = "0",
                                x = o && [],
                                b = [],
                                w = l,
                                C = o || i && r.find.TAG("*", c),
                                E = T += null == w ? 1 : Math.random() || .1,
                                k = C.length;
                            for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                if (i && f) {
                                    h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                                    while (y = e[h++])
                                        if (y(f, a || d, s)) { u.push(f); break }
                                    c && (T = E)
                                }
                                n && ((f = !y && f) && v--, o && x.push(f))
                            }
                            if (v += m, n && m !== v) {
                                h = 0;
                                while (y = t[h++]) y(x, b, a, s);
                                if (o) {
                                    if (v > 0)
                                        while (m--) x[m] || b[m] || (b[m] = j.call(u));
                                    b = we(b)
                                }
                                L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                            }
                            return c && (T = E, l = w), x
                        };
                    return n ? se(o) : o
                }
                return s = oe.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = S[e + " "];
                    if (!o) {
                        t || (t = a(e)), n = t.length;
                        while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                        (o = S(e, Ee(i, r))).selector = e
                    }
                    return o
                }, u = oe.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" == typeof e && e,
                        d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        o = V.needsContext.test(e) ? 0 : u.length;
                        while (o--) { if (l = u[o], r.relative[c = l.type]) break; if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n; break } }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function(e) { return null == e.getAttribute("disabled") }) || le(P, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe
            }(e);
            w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
            var k = function(e, t, n) {
                    var r = [],
                        i = void 0 !== n;
                    while ((e = e[t]) && 9 !== e.nodeType)
                        if (1 === e.nodeType) {
                            if (i && w(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                S = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
                D = w.expr.match.needsContext;

            function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function j(e, t, n) { return g(t) ? w.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? w.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? w.grep(e, function(e) { return u.call(t, e) > -1 !== n }) : w.filter(t, e, n) } w.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) { return 1 === e.nodeType })) }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (w.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
                not: function(e) { return this.pushStack(j(this, e || [], !0)) },
                is: function(e) { return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length }
            });
            var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || q, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                            for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, q = w(r);
            var H = /^(?:parents|prev(?:Until|All))/,
                O = { children: !0, contents: !0, next: !0, prev: !0 };
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && w(e);
                    if (!D.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) { o.push(n); break }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(e) { return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                add: function(e, t) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t)))) },
                addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
            });

            function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } w.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return S((e.parentNode || {}).firstChild, e) }, children: function(e) { return S(e.firstChild) }, contents: function(e) { return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes)) } }, function(e, t) { w.fn[e] = function(n, r) { var i = w.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } });
            var M = /[^\x20\t\r\n\f]+/g;

            function R(e) { var t = {}; return w.each(e.match(M) || [], function(e, n) { t[n] = !0 }), t } w.Callbacks = function(e) {
                e = "string" == typeof e ? R(e) : w.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() { for (i = i || e.once, r = t = !0; a.length; s = -1) { n = a.shift(); while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1) } e.memory || (n = !1), t = !1, i && (o = n ? [] : "") },
                    l = { add: function() { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { w.each(n, function(n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function() { return w.each(arguments, function(e, t) { var n; while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s-- }), this }, has: function(e) { return e ? w.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return i = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return i = a = [], n || t || (o = n = ""), this }, locked: function() { return !!i }, fireWith: function(e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!r } };
                return l
            };

            function I(e) { return e }

            function W(e) { throw e }

            function $(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } w.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() { return r },
                            always: function() { return o.done(arguments).fail(arguments), this },
                            "catch": function(e) { return i.then(null, e) },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred(function(t) {
                                    w.each(n, function(n, r) {
                                        var i = g(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, r, i) {
                                var o = 0;

                                function a(t, n, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            l = function() {
                                                var e, l;
                                                if (!(t < o)) {
                                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                                }
                                            },
                                            c = i ? l : function() { try { l() } catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                        t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                                    }
                                }
                                return w.Deferred(function(e) { n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W)) }).promise()
                            },
                            promise: function(e) { return null != e ? w.extend(e, i) : i }
                        },
                        o = {};
                    return w.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
                    }), i.promise(o), t && t.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = o.call(arguments),
                        a = w.Deferred(),
                        s = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } };
                    if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                    while (n--) $(i[n], s(n), a.reject);
                    return a.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, w.readyException = function(t) { e.setTimeout(function() { throw t }) };
            var F = w.Deferred();
            w.fn.ready = function(e) { return F.then(e)["catch"](function(e) { w.readyException(e) }), this }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
                }
            }), w.ready.then = F.then;

            function _() { r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready() }
            "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
            var z = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === x(n)) { i = !0; for (s in n) z(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(w(e), n) })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                X = /^-ms-/,
                U = /-([a-z])/g;

            function V(e, t) { return t.toUpperCase() }

            function G(e) { return e.replace(X, "ms-").replace(U, V) }
            var Y = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

            function Q() { this.expando = w.expando + Q.uid++ } Q.uid = 1, Q.prototype = {
                cache: function(e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[G(t)] = n;
                    else
                        for (r in t) i[G(r)] = t[r];
                    return i
                },
                get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)] },
                access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
                remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length; while (n--) delete r[t[n]] }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
                hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !w.isEmptyObject(t) }
            };
            var J = new Q,
                K = new Q,
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;

            function te(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) }

            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = te(n) } catch (e) {} K.set(e, t, n) } else n = void 0;
                return n
            }
            w.extend({ hasData: function(e) { return K.hasData(e) || J.hasData(e) }, data: function(e, t, n) { return K.access(e, t, n) }, removeData: function(e, t) { K.remove(e, t) }, _data: function(e, t, n) { return J.access(e, t, n) }, _removeData: function(e, t) { J.remove(e, t) } }), w.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                            n = a.length;
                            while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                            J.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() { K.set(this, e) }) : z(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = K.get(o, e))) return n; if (void 0 !== (n = ne(o, e))) return n } else this.each(function() { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) { return this.each(function() { K.remove(this, e) }) }
            }), w.extend({
                queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [] },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = w._queueHooks(e, t),
                        a = function() { w.dequeue(e, t) };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function() { J.remove(e, [t + "queue", n]) }) }) }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function(e) { return this.each(function() { w.dequeue(this, e) }) },
                clearQueue: function(e) { return this.queue(e || "fx", []) },
                promise: function(e, t) {
                    var n, r = 1,
                        i = w.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {--r || i.resolveWith(o, [o]) };
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"],
                ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display") },
                se = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                };

            function ue(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function() { return r.cur() } : function() { return w.css(e, t, "") },
                    u = s(),
                    l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    u /= 2, l = l || c[3], c = +u || 1;
                    while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, w.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var le = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = le[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
            }

            function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e } w.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? w(this).show() : w(this).hide() }) } });
            var pe = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i,
                ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

            function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n }

            function ve(e, t) { for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")) }
            var me = /<|&#?\w+;/;

            function xe(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                        else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                f.textContent = "", d = 0;
                while (o = p[d++])
                    if (r && w.inArray(o, r) > -1) i && i.push(o);
                    else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
                return f
            }! function() {
                var e = r.createDocumentFragment().appendChild(r.createElement("div")),
                    t = r.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var be = r.documentElement,
                we = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function Ee() { return !0 }

            function ke() { return !1 }

            function Se() { try { return r.activeElement } catch (e) {} }

            function De(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) De(e, s, n, r, t[s], o); return e }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) { return w().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), e.each(function() { w.event.add(this, t, i, r, n) })
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e); if (y) { n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) { return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(M) || [""]).length; while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0) } },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
                    if (y && (u = y.events)) {
                        l = (t = (t || "").match(M) || [""]).length;
                        while (l--)
                            if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                                f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                                while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                            } else
                                for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                        w.isEmptyObject(u) && J.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t = w.event.fix(e),
                        n, r, i, o, a, s, u = new Array(arguments.length),
                        l = (J.get(this, "events") || {})[t.type] || [],
                        c = w.event.special[t.type] || {};
                    for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
                    if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) { s = w.event.handlers.call(this, t, l), n = 0; while ((o = s[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem, r = 0; while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, t), t.result }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({ elem: l, handlers: o })
                            }
                    return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
                },
                addProp: function(e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
                fix: function(e) { return e[w.expando] ? e : new w.Event(e) },
                special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function(e) { return N(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
            }, w.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: ke,
                isPropagationStopped: ke,
                isImmediatePropagationStopped: ke,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), w.fn.extend({ on: function(e, t, n, r) { return De(this, e, t, n, r) }, one: function(e, t, n, r) { return De(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() { w.event.remove(this, e, n, t) }) } });
            var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ae = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e }

            function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

            function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

            function Pe(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in l)
                            for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
                    }
                    K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
                }
            }

            function Me(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

            function Re(e, t, n, r) {
                t = a.apply([], t);
                var i, o, s, u, l, c, f = 0,
                    p = e.length,
                    d = p - 1,
                    y = t[0],
                    v = g(y);
                if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
                    var o = e.eq(i);
                    v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
                });
                if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
                    if (u)
                        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
                }
                return e
            }

            function Ie(e, t, n) { for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e } w.extend({
                htmlPrefilter: function(e) { return e.replace(Ne, "<$1></$2>") },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = w.contains(e.ownerDocument, e);
                    if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                        else Pe(e, s);
                    return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Y(n)) {
                            if (t = n[J.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[J.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function(e) { return Ie(this, e, !0) },
                remove: function(e) { return Ie(this, e) },
                text: function(e) { return z(this, function(e) { return void 0 === e ? w.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
                append: function() { return Re(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e) }) },
                prepend: function() {
                    return Re(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
                after: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
                empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = ""); return this },
                clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return w.clone(this, e, t) }) },
                html: function(e) {
                    return z(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { w.fn[e] = function(e) { for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } });
            var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                $e = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
                Be = new RegExp(oe.join("|"), "i");
            ! function() {
                function t() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                        var t = e.getComputedStyle(c);
                        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
                    }
                }

                function n(e) { return Math.round(parseFloat(e)) }
                var i, o, a, s, u, l = r.createElement("div"),
                    c = r.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function() { return t(), o }, pixelBoxStyles: function() { return t(), s }, pixelPosition: function() { return t(), i }, reliableMarginLeft: function() { return t(), u }, scrollboxSize: function() { return t(), a } }))
            }();

            function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

            function _e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            var ze = /^(none|table(?!-c[ea]).+)/,
                Xe = /^--/,
                Ue = { position: "absolute", visibility: "hidden", display: "block" },
                Ve = { letterSpacing: "0", fontWeight: "400" },
                Ge = ["Webkit", "Moz", "ms"],
                Ye = r.createElement("div").style;

            function Qe(e) {
                if (e in Ye) return e;
                var t = e[0].toUpperCase() + e.slice(1),
                    n = Ge.length;
                while (n--)
                    if ((e = Ge[n] + t) in Ye) return e
            }

            function Je(e) { var t = w.cssProps[e]; return t || (t = w.cssProps[e] = Qe(e) || e), t }

            function Ke(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
            }

            function et(e, t, n) {
                var r = $e(e),
                    i = Fe(e, t, r),
                    o = "border-box" === w.css(e, "boxSizing", !1, r),
                    a = o;
                if (We.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
            }
            w.extend({
                cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = G(t),
                            u = Xe.test(t),
                            l = e.style;
                        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) { var i, o, a, s = G(t); return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
            }), w.each(["height", "width"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) { if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() { return et(e, t, r) }) },
                    set: function(e, n, r) {
                        var i, o = $e(e),
                            a = "border-box" === w.css(e, "boxSizing", !1, o),
                            s = r && Ze(e, t, r, a, o);
                        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
                    }
                }
            }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function(e, t) { w.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (w.cssHooks[e + t].set = Ke) }), w.fn.extend({
                css: function(e, t) {
                    return z(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) { for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r); return o }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            });

            function tt(e, t, n, r, i) { return new tt.prototype.init(e, t, n, r, i) } w.Tween = tt, tt.prototype = { constructor: tt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function() { var e = tt.propHooks[this.prop]; return e && e.get ? e.get(this) : tt.propHooks._default.get(this) }, run: function(e) { var t, n = tt.propHooks[this.prop]; return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit) } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, w.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/,
                ot = /queueHooks$/;

            function at() { rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick()) }

            function st() { return e.setTimeout(function() { nt = void 0 }), nt = Date.now() }

            function ut(e, t) {
                var n, r = 0,
                    i = { height: e };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function lt(e, t, n) {
                for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function ct(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    y = J.get(e, "fxshow");
                n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, w.queue(e, "fx").length || a.empty.fire() }) }));
                for (r in t)
                    if (i = t[r], it.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = !0
                        }
                        d[r] = y && y[r] || w.style(e, r)
                    }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() { g || fe([e]), J.remove(e, "fxshow"); for (r in d) w.style(e, r, d[r]) })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) }
            }

            function ft(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
            }

            function pt(e, t, n) {
                var r, i, o = 0,
                    a = pt.prefilters.length,
                    s = w.Deferred().always(function() { delete u.elem }),
                    u = function() { if (i) return !1; for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
                    l = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) { var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (ft(c, l.opts.specialEasing); o < a; o++)
                    if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l
            }
            w.Animation = w.extend(pt, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return ue(n.elem, e, ie.exec(t), n), n }] }, tweener: function(e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [ct], prefilter: function(e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), w.speed = function(e, t, n) { var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue) }, r }, w.fn.extend({
                    fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
                    animate: function(e, t, n, r) {
                        var i = w.isEmptyObject(e),
                            o = w.speed(t, n, r),
                            a = function() {
                                var t = pt(this, w.extend({}, e), o);
                                (i || J.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = w.timers,
                                a = J.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || w.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = J.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = w.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), w.each(["toggle", "show", "hide"], function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i) }
                }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { w.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), nt = void 0
                }, w.fx.timer = function(e) { w.timers.push(e), w.fx.start() }, w.fx.interval = 13, w.fx.start = function() { rt || (rt = !0, at()) }, w.fx.stop = function() { rt = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function(t, n) {
                    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() { e.clearTimeout(i) }
                    })
                },
                function() {
                    var e = r.createElement("input"),
                        t = r.createElement("select").appendChild(r.createElement("option"));
                    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
                }();
            var dt, ht = w.expr.attrHandle;
            w.fn.extend({ attr: function(e, t) { return z(this, w.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { w.removeAttr(this, e) }) } }), w.extend({
                attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r) },
                attrHooks: { type: { set: function(e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(M);
                    if (i && 1 === e.nodeType)
                        while (n = i[r++]) e.removeAttribute(n)
                }
            }), dt = { set: function(e, t, n) { return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = ht[t] || w.find.attr;
                ht[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i }
            });
            var gt = /^(?:input|select|textarea|button)$/i,
                yt = /^(?:a|area)$/i;
            w.fn.extend({ prop: function(e, t) { return z(this, w.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[w.propFix[e] || e] }) } }), w.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = w.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = {
                get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { w.propFix[this.toLowerCase()] = this });

            function vt(e) { return (e.match(M) || []).join(" ") }

            function mt(e) { return e.getAttribute && e.getAttribute("class") || "" }

            function xt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [] } w.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) { w(this).addClass(e.call(this, t, mt(this))) });
                    if ((t = xt(e)).length)
                        while (n = this[u++])
                            if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                a = 0;
                                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = vt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) { w(this).removeClass(e.call(this, t, mt(this))) });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = xt(e)).length)
                        while (n = this[u++])
                            if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                a = 0;
                                while (o = t[a++])
                                    while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                                i !== (s = vt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) { w(this).toggleClass(e.call(this, n, mt(this), t), t) }) : this.each(function() { var t, i, o, a; if (r) { i = 0, o = w(this), a = xt(e); while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || "")) })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++])
                        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = g(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) { return null == e ? "" : e + "" })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
                    }
                }
            }), w.extend({
                valHooks: {
                    option: { get: function(e) { var t = w.find.attr(e, "value"); return null != t ? t : vt(w.text(e)) } },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            var n, r, i = e.options,
                                o = w.makeArray(t),
                                a = i.length;
                            while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], function() { w.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1 } }, h.checkOn || (w.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e;
            var wt = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function(e) { e.stopPropagation() };
            w.extend(w.event, {
                trigger: function(t, n, i, o) {
                    var a, s, u, l, c, p, d, h, v = [i || r],
                        m = f.call(t, "type") ? t.type : t,
                        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                        if (!o && !d.noBubble && !y(i)) {
                            for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                            u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                        }
                        a = 0;
                        while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, { type: e, isSimulated: !0 });
                    w.event.trigger(r, null, t)
                }
            }), w.fn.extend({ trigger: function(e, t) { return this.each(function() { w.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return w.event.trigger(e, t, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = function(e) { w.event.simulate(t, e.target, w.event.fix(e)) };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                    }
                }
            });
            var Ct = e.location,
                Et = Date.now(),
                kt = /\?/;
            w.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n };
            var St = /\[\]$/,
                Dt = /\r?\n/g,
                Nt = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;

            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) w.each(t, function(t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
                else if (n || "object" !== x(t)) r(e, t);
                else
                    for (i in t) jt(e + "[" + i + "]", t[i], n, r)
            }
            w.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() { i(this.name, this.value) });
                else
                    for (n in e) jt(n, e[n], t, i);
                return r.join("&")
            }, w.fn.extend({ serialize: function() { return w.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = w.prop(this, "elements"); return e ? w.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function(e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } });
            var qt = /%20/g,
                Lt = /#.*$/,
                Ht = /([?&])_=[^&]*/,
                Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Mt = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                It = {},
                Wt = {},
                $t = "*/".concat("*"),
                Bt = r.createElement("a");
            Bt.href = Ct.href;

            function Ft(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(M) || [];
                    if (g(n))
                        while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function _t(e, t, n, r) {
                var i = {},
                    o = e === Wt;

                function a(s) { var u; return i[s] = !0, w.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function zt(e, t) { var n, r, i = w.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && w.extend(!0, e, r), e }

            function Xt(e, t, n) {
                var r, i, o, a, s = e.contents,
                    u = e.dataTypes;
                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) { u.unshift(i); break }
                if (u[0] in n) o = u[0];
                else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a }
                if (o) return o !== u[0] && u.unshift(o), n[o]
            }

            function Ut(e, t, n, r) {
                var i, o, a, s, u, l = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                }
                return { state: "success", data: t }
            }
            w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } },
                ajaxSetup: function(e, t) { return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e) },
                ajaxPrefilter: Ft(It),
                ajaxTransport: Ft(Wt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                        g = h.context || h,
                        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                        v = w.Deferred(),
                        m = w.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        T = {},
                        C = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) { var t; if (c) { if (!s) { s = {}; while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2] } t = s[e.toLowerCase()] } return null == t ? null : t },
                            getAllResponseHeaders: function() { return c ? a : null },
                            setRequestHeader: function(e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this },
                            overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) E.always(e[E.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) { var t = e || C; return i && i.abort(t), k(0, t), this }
                        };
                    if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
                    (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                    if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                        h.async && h.timeout > 0 && (u = e.setTimeout(function() { E.abort("timeout") }, h.timeout));
                        try { c = !1, i.send(b, k) } catch (e) {
                            if (c) throw e;
                            k(-1, e)
                        }
                    } else k(-1, "No Transport");

                    function k(t, n, r, s) {
                        var l, p, d, b, T, C = n;
                        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) { return w.get(e, t, n, "json") },
                getScript: function(e, t) { return w.get(e, void 0, t, "script") }
            }), w.each(["get", "post"], function(e, t) { w[t] = function(e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e)) } }), w._evalUrl = function(e) { return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, w.fn.extend({
                wrapAll: function(e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
                wrapInner: function(e) {
                    return g(e) ? this.each(function(t) { w(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) { var t = g(e); return this.each(function(n) { w(this).wrapAll(t ? e.call(this, n) : e) }) },
                unwrap: function(e) { return this.parent(e).not("body").each(function() { w(this).replaceWith(this.childNodes) }), this }
            }), w.expr.pseudos.hidden = function(e) { return !w.expr.pseudos.visible(e) }, w.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, w.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
            var Vt = { 0: 200, 1223: 204 },
                Gt = w.ajaxSettings.xhr();
            h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
                var n, r;
                if (h.cors || Gt && !t.crossDomain) return {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                        try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
                    },
                    abort: function() { n && n() }
                }
            }), w.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return w.globalEval(e), e } } }), w.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), w.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, o) { t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
            var Yt = [],
                Qt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Yt.pop() || w.expando + "_" + Et++; return this[e] = !0, e } }), w.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || w.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = function() { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), w.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, o, a; return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)) }, w.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
            }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { w.fn[t] = function(e) { return this.on(t, e) } }), w.expr.pseudos.animated = function(e) { return w.grep(w.timers, function(t) { return e === t.elem }).length }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = w.css(e, "position"),
                        f = w(e),
                        p = {};
                    "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, w.fn.extend({
                offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { w.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = { top: 0, left: 0 };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                            while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) }
                    }
                },
                offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === w.css(e, "position")) e = e.offsetParent; return e || be }) }
            }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return z(this, function(e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), w.each(["top", "left"], function(e, t) { w.cssHooks[t] = _e(h.pixelPosition, function(e, n) { if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function(e, t) {
                w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(this, function(t, n, i) { var o; return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s) }, t, a ? i : void 0, a)
                    }
                })
            }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { w.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), w.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), w.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), w.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() { return e.apply(t || this, r.concat(o.call(arguments))) }, i.guid = e.guid = e.guid || w.guid++, i }, w.holdReady = function(e) { e ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) { var t = w.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return w });
            var Jt = e.jQuery,
                Kt = e.$;
            return w.noConflict = function(t) { return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w }, t || (e.jQuery = e.$ = w), w
        });

    }, {}]
}, {}, [1]);

/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) { i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.15.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() { return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this) }, l.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) { this._initted = !1, this._init(); for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) { return new r(t, e, i) }, r.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i) }, r.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s) }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
                    a = a || 0;
                    var c, f, m, d, g = n.delay || 0,
                        v = [],
                        y = function() { n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _) };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) {
                        f = {};
                        for (d in n) f[d] = n[d];
                        f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o) }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h) }, r.delayedCall = function(t, e, i, s, n) { return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0 }) }, r.set = function(t, e) { return new r(t, 0, e) }, r.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
                var u = function(t, e) { for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next; return s },
                    p = r.getAllTweens = function(e) { return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e)) };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, p, c = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in c)
                                for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
                            for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var c = function(t, i, s, r) { i = i !== !1, s = s !== !1, r = r !== !1; for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t) };
                return r.pauseAll = function(t, e, i) { c(!0, t, e, i) }, r.resumeAll = function(t, e, i) { c(!1, t, e, i) }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration() }, l.totalProgress = function(t) { return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration() }, l.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, l.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, l.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, l.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, l.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, l.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    p = _gsScope._gsDefine.globals,
                    c = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                    f = a.pauseCallback = function(t, e, i, s) {
                        var r = t._timeline,
                            n = r._totalTime;
                        !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || u), this._forcingPlayhead && r.seek(n))
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.15.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) { var n = s.repeat && p.TweenMax || i; return e ? this.add(new n(t, e, s), r) : this.set(t, s, r) }, d.from = function(t, e, s, r) { return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r) }, d.fromTo = function(t, e, s, r, n) { var a = r.repeat && p.TweenMax || i; return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n) }, d.staggerTo = function(t, e, r, n, a, h, l, _) { var u, p = new s({ onComplete: h, onCompleteParams: l, onCompleteScope: _, smoothChildTiming: this.smoothChildTiming }); for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n); return this.add(p, a) }, d.staggerFrom = function(t, e, i, s, r, n, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o) }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h) }, d.call = function(t, e, s, r) { return this.add(i.delayedCall(0, t, e, s), r) }, d.set = function(t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var l, _, u, p, c, f;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) { for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(p = r[u]) && (p = new s({ tweens: p })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o; return this._uncache(!0) }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, d.remove = function(e) { if (e instanceof t) return this._remove(e, !1); if (e instanceof Array || e && e.push && h(e)) { for (var i = e.length; --i > -1;) this.remove(e[i]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, d._remove = function(t, i) { e.prototype._remove.call(this, t, i); var s = this._last; return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, d.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, d.insert = d.insertMultiple = function(t, e, i, s) { return this.add(t, e || 0, i, s) }, d.appendMultiple = function(t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, d.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, d.addPause = function(t, e, s, r) { var n = i.delayedCall(0, f, ["{self}", e, s, r], this); return n.data = "isPause", this.add(n, t) }, d.removeLabel = function(t) { return delete this._labels[t], this }, d.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, d.stop = function() { return this.paused(!0) }, d.gotoAndPlay = function(t, e) { return this.play(t, e) }, d.gotoAndStop = function(t, e) { return this.pause(t, e) }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) { r = r || -9999999999; for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next; return n }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() { return this._recent }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0); return r }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, d.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, d.rawTime = function() { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0 },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t;
                return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.1", _.invalidate = function() { return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, _.addCallback = function(t, i, s, r) { return this.add(e.delayedCall(0, t, s, r), i) }, _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, _.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, _.tweenTo = function(t, i) { i = i || {}; var s, r, a, o = { ease: l, useFrames: this.usesFrames(), immediateRender: !1 }; for (r in i) o[r] = i[r]; return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() { a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n) }, a }, _.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this }, i.immediateRender = i.immediateRender !== !1; var s = this.tweenTo(e, i); return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001) }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle;
                    if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
                }, _.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, _.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                    return e.sort(function(t, e) { return t.time - e.time }), e
                }, _.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, _.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, _.totalDuration = function(e) { return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, _.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, _.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, _.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, _.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, _.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) { this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var r = { a: t },
                            n = {},
                            a = {},
                            o = { c: s },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            c = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, r, n, a, o) {
                        var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, h, l, _, u, p, c = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c
                    },
                    u = function(t, n, a, h, u, p) {
                        var c, f, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                                if (f = x[c], Math.abs(b[f] - T[f]) > .05) { y = !1; break }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = _(t, f, r[f], p);
                        for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
                        if (!h) {
                            for (c = x.length; --c > -1;)
                                if (r[f])
                                    for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
                        }
                        for (c = x.length, d = a ? 4 : 1; --c > -1;) f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, c, f, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
                            for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = c
                        }
                        return m
                    },
                    c = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = [];
                        for (i in t) c(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
                        return { length: l, lengths: o, segments: u }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                c = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
                            if (this._autoRotate) { var d, g, v, y, T, w, x, b = this._autoRotate; for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h) }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) { return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = { values: e }), h = new m;
                                var l, _, u, p = e.values,
                                    c = p.length - 1,
                                    f = [],
                                    d = {};
                                if (0 > c) return o;
                                for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), f[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) { for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e) }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" };
                var _, u, p, c, f, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) { return e.toUpperCase() },
                    C = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    E = document,
                    N = function(t) { return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t) },
                    L = N("div"),
                    X = N("img"),
                    U = a._internals = { _specialProps: h },
                    Y = navigator.userAgent,
                    B = function() {
                        var t = Y.indexOf("Android"),
                            e = N("a");
                        return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    j = function(t) { return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    q = function(t) { window.console && console.log(t) },
                    V = "",
                    G = "",
                    W = function(t, e) { e = e || L; var i, s, r = e.style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];); return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) { var n; return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t) },
                    $ = U.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = C.test(i),
                            u = t,
                            p = L.style,
                            c = 0 > s;
                        if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return c ? -o : o
                    },
                    H = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r = {};
                        if (e = e || Z(t, null))
                            for (i in e)(-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
                        return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return { difs: h, firstMPT: o }
                    },
                    te = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    re = function(t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
                    ne = function(t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) },
                    ae = function(t, e, i, s) { var r, n, a, o, h, l = 1e-6; return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o },
                    oe = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    he = function(t, e, i) { return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
                    le = a.parseColor = function(t) { var e, i, s, r, n, a; return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) {
                        if (null == t) return function(t) { return t };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, c, f;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) { for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]); return f.join(",") }
                            if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--)
                                for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) { for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]); return n.join(",") }
                            if (e = t.match(v) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) { return t }
                    },
                    pe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) { var h, l = (i + "").split(" "); for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0]; return r.parse(e, o, n, a) }
                    },
                    ce = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) { this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s) }),
                    fe = (U._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            c = {},
                            f = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return { proxy: p, end: c, firstMPT: l, pt: _ }
                    }, U.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) { this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this) }),
                    me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
                        i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, c, f, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            C = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
                            if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));
                        else if (v = f.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (c = 0, p = 0; v.length > p; p++) b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
                            a["xs" + a.l] += f.substr(c)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    de = 9;
                for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ge = function(t, e) { e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    ve = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e)
                    },
                    ye = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ve(t, { parser: function(t, i, s, r, n, a, l) { var _ = o.com.greensock.plugins[e]; return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n) } })
                        }
                    };
                l = ge.prototype, l.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, l.parse = function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function(t, e, i) { ve(t, { parser: function(t, s, r, n, a, o) { var h = new fe(t, r, 0, 0, a, 2, r, !1, i); return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h }, priority: i }) };
                var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    xe = W("transform"),
                    be = V + "transform",
                    Pe = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    ke = U.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1 },
                    Re = window.SVGElement,
                    Ae = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Ce = document.documentElement,
                    Oe = function() { var t, e, i, s = m || /Android/i.test(Y) && !window.chrome; return E.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Se), Ce.removeChild(t)), s }(),
                    De = function(t, e, i) {
                        var s = t.getBBox();
                        e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y
                    },
                    Me = U.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var n, o, h, l, _, u, p, c, f, m, d = i ? t._gsTransform || new ke : new ke,
                            g = 0 > d.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            w = parseFloat(a.defaultTransformPerspective) || 0;
                        if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
                            for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
                            if (16 === h.length) {
                                var x, b, P, S, k, R = h[0],
                                    A = h[1],
                                    C = h[2],
                                    D = h[3],
                                    M = h[4],
                                    z = h[5],
                                    F = h[6],
                                    E = h[7],
                                    N = h[8],
                                    L = h[9],
                                    X = h[10],
                                    U = h[12],
                                    Y = h[13],
                                    B = h[14],
                                    j = h[11],
                                    q = Math.atan2(F, X);
                                d.zOrigin && (B = -d.zOrigin, U = N * B - h[12], Y = L * B - h[13], B = X * B + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, j = E * -k + j * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = C * S - X * k, L = A * k + L * S, X = C * k + X * S, j = D * k + j * S, R = x, A = b, C = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = C * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = U, d.y = Y, d.z = B
                            } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
                                var V = h.length >= 6,
                                    G = V ? h[0] : 1,
                                    W = h[1] || 0,
                                    Z = h[2] || 0,
                                    $ = V ? h[3] : 1;
                                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1)
                            }
                            d.zOrigin = T;
                            for (l in d) v > d[l] && d[l] > -v && (d[l] = 0)
                        }
                        return i && (t._gsTransform = d), d
                    },
                    ze = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var c, f, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) { var P, S, k, R = 8 > m ? 1 : -1; for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px" }
                        }
                    },
                    Ie = U.set3DTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, p, f, m, d, g, v, y, T, w, x, b = this.data,
                            P = this.t.style,
                            S = b.rotation * z,
                            k = b.scaleX,
                            R = b.scaleY,
                            A = b.scaleZ,
                            C = b.x,
                            O = b.y,
                            D = b.z,
                            M = b.perspective;
                        if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== A || M || D)) return Fe.call(this, t), void 0;
                        if (c && (m = 1e-4, m > k && k > -m && (k = A = 2e-5), m > R && R > -m && (R = A = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) d = e = Math.cos(S), g = r = Math.sin(S), b.skewX && (S -= b.skewX * z, d = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v)), i = -g, n = d;
                        else {
                            if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg)) return P[xe] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        l = 1, s = a = o = h = _ = u = 0, p = M ? -1 / M : 0, f = b.zOrigin, m = 1e-6, w = ",", x = "0", S = b.rotationY * z, S && (d = Math.cos(S), g = Math.sin(S), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), S = b.rotationX * z, S && (d = Math.cos(S), g = Math.sin(S), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== A && (s *= A, a *= A, l *= A, p *= A), 1 !== R && (i *= R, n *= R, h *= R, u *= R), 1 !== k && (e *= k, r *= k, o *= k, _ *= k), (f || b.svg) && (f && (C += s * -f, O += a * -f, D += l * -f + f), b.svg && (C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n)), m > C && C > -m && (C = x), m > O && O > -m && (O = x), m > D && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), b.rotationX || b.rotationY ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")", P[xe] = T
                    },
                    Fe = U.set2DTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, p = this.data,
                            c = this.t,
                            f = c.style,
                            m = p.x,
                            d = p.y;
                        return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0)
                    };
                l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, p, c, f, m, d = s._transform = Me(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = we.length,
                            T = h,
                            w = {};
                        if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);
                        else if ("object" == typeof T) {
                            if (l = { scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX), scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY), scaleZ: ne(T.scaleZ, d.scaleZ), x: ne(T.x, d.x), y: ne(T.y, d.y), z: ne(T.z, d.z), xPercent: ne(T.xPercent, d.xPercent), yPercent: ne(T.yPercent, d.yPercent), perspective: ne(T.transformPerspective, d.perspective) }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, p && d.svg && (De(t, se(p), l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), ve("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ve("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ve("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, c = "background-position",
                            f = r || Z(t, null),
                            d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), ve("backgroundSize", { defaultValue: "0 0", formatter: se }), ve("perspective", { defaultValue: "0px", prefix: !0 }), ve("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ve("transformStyle", { prefix: !0 }), ve("backfaceVisibility", { prefix: !0 }), ve("userSelect", { prefix: !0 }), ve("margin", { parser: pe("marginTop,marginRight,marginBottom,marginLeft") }), ve("padding", { parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ve("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, n, a) { var o, h, l; return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), ve("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ve("autoRound,strictUnits", { parser: function(t, e, i, s, r) { return r } }), ve("border", { defaultValue: "0px solid #000", parser: function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0] } }), ve("borderWidth", { parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ve("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Ee = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r))
                };
                ve("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ne = function(t, e) { e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    Le = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ve("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, c, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) {
                            for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var Xe = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n = this.t.style,
                            a = h.transform.parse;
                        if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
                        r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (ve("clearProps", { parser: function(t, e, s, r, n) { return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ye(l[de]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, l, c, m, d, g, v, y, T, w = t.style;
                    if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) c = c._next;
                        y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Fe : ze, y.data = this._transform || Me(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; l;) {
                            for (g = l._next, c = m; c && c.pr > l.pr;) c = c._next;
                            (l._prev = c ? c._prev : d) ? l._prev._next = l: m = l, (l._next = c) ? c._prev = l : d = l, l = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(t, e, i, n) { var a, o, l, u, p, c, f, m, d, g, v = t.style; for (a in e) c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n); return i }, l.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, l._enableTransforms = function(t) { this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3 };
                var Ue = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ue, s.data = this
                }, l._linkCSSP = function(t, e, i, s) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, l._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ye = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ye(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = J(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({ propName: "roundProps", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) { this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e) }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) { this._super.setRatio.call(this, t); for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "") }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = { rotation: e }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) { var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return _(r, t), r },
                    p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                    c = function(e, i) {
                        var s = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) { return new s(t) }, s
                    },
                    f = u("Back", c("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), c("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), c("BackInOut", function(t) { return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) { var e = t + (.5 - t) * this._p; return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) { return new m(t, e, i) }, e = h("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, d.config = e.config = function(t) { return new e(t) }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s };
                    for (l.sort(function(t, e) { return t.x - e.x }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) { return new i(t) }, i.ease = new i, u("Bounce", l("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), l("BounceIn", function(t) { return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), l("BounceInOut", function(t) { var e = .5 > t; return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", l("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), l("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), l("CircInOut", function(t) { return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) { this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0) }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) { return new r(t, e) }, r
                }, u("Elastic", s("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)) }, .3), s("ElasticInOut", function(t) { return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .45)), u("Expo", l("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), l("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), l("ExpoInOut", function(t) { return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", l("SineOut", function(t) { return Math.sin(t * o) }), l("SineIn", function(t) { return -Math.cos(t * o) + 1 }), l("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                p = function() {},
                c = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) }
                }(),
                f = {},
                m = function(s, r, n, a) {
                    this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, p, c, d = r.length, g = d; --d > -1;)(_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() { return c }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) { return new m(t, e, i, s) },
                g = l._class = function(t, e, i) { return e = e || function() {}, d(t, [], function() { return e }, i), e };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v }, !0),
                w = T.map = {},
                x = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, { c: e, s: i, up: s, pr: r }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() { return (new Date).getTime() },
                R = k();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = k(),
                    c = e !== !1 && P,
                    f = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = k() - R;
                        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d)
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() { g(!0) }, l.lagSmoothing = function(t, e) { f = t || 1 / _, m = Math.min(e, f, 0) }, l.sleep = function() { null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1)) }, l.wake = function() { null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function(t) { return setTimeout(t, 0 | 1e3 * (h - l.time) + 1) }, l === a && (o = !0), g(2) }, l.fps = function(t) { return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c }, l.fps(t), setTimeout(function() { c && (!r || 5 > l.frame) && l.useRAF(!1) }, 1500)
            }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
                    o || a.wake();
                    var i = this.vars.useFrames ? B : j;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var C = function() { o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3) };
            C(), n.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, n.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, n.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, n.seek = function(t, e) { return this.totalTime(Number(t), e !== !1) }, n.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, n.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, n.render = function() {}, n.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) { return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, n._kill = function() { return this._enabled(!1, !1) }, n.kill = function(t, e) { return this._kill(t, e), this }, n._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, n._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, n.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, n.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, n.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, n.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, n.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    o || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var O = g("core.SimpleTimeline", function(t) { A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            n = O.prototype = new A, n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, n.render = function(t, e, i) { var s, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s }, n.rawTime = function() { return o || a.wake(), this._totalTime };
            var D = g("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(t, e) { a.lagSmoothing(t, e) }, D.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var I = [],
                F = {},
                E = D._internals = { isArray: c, isSelector: M, lazyTweens: I },
                N = D._plugins = {},
                L = E.tweenLookup = {},
                X = 0,
                U = E.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1 },
                Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
                B = A._rootFramesTimeline = new O,
                j = A._rootTimeline = new O,
                q = E.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var V = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = { target: t, tweens: [] }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens
                },
                G = function(t, e, i, s) { var r, n, a = t.vars.onOverwrite; return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1 },
                W = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        p = [],
                        c = 0,
                        f = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
                    for (n = c; --n > -1;)
                        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !G(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                Z = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (h = !1), i = {}; for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (N[n] && (h = new N[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: h._priority }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        p = this._easeType,
                        c = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u;
                if ((c(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) { o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all"; break }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) { if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) { for (n in l) o[n] && (u || (u = []), u.push(n)); if (!G(this, i, e, u)) return !1 } for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
                }
                return h
            }, n.invalidate = function() { return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
                    else this._siblings = V(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) { return new D(t, e, i) }, D.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i) }, D.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s) }, D.delayedCall = function(t, e, i, s, r) { return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, D.set = function(t, e) { return new D(t, 0, e) }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((c(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = V(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t) };
            var Q = g("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype }, !0);
            if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) { var a, o; return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }, o._next && (o._next._prev = o), o) : void 0 }, n.setRatio = function(t) { for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, Q.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]); return !0 }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { Q.call(this, i, s), this._overwriteProps = r || [] }, t.global === !0),
                        o = a.prototype = new Q(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, Q.activate([a]), a
                }, s = t._gsQueue) { for (r = 0; s.length > r; r++) s[r](); for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n) } o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*!
 * VERSION: 1.8.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = document.documentElement,
            b = _gsScope,
            c = function(c, d) {
                var e = "x" === d ? "Width" : "Height",
                    f = "scroll" + e,
                    g = "client" + e,
                    h = document.body;
                return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e]
            },
            d = function(a) { return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || a.nodeType && a.style ? a : null },
            e = function(c, d) {
                var e = "scroll" + ("x" === d ? "Left" : "Top");
                return c === b && (null != c.pageXOffset ? e = "page" + d.toUpperCase() + "Offset" : c = null != a[e] ? a : document.body),
                    function() { return c[e] }
            },
            f = function(c, f) {
                var g = d(c).getBoundingClientRect(),
                    h = !f || f === b || f === document.body,
                    i = (h ? a : f).getBoundingClientRect(),
                    j = { x: g.left - i.left, y: g.top - i.top };
                return !h && f && (j.x += e(f, "x")(), j.y += e(f, "y")()), j
            },
            g = function(a, b, d) { var e = typeof a; return "number" === e || "string" === e && "=" === a.charAt(1) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d]) },
            h = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.8.1",
                init: function(a, c, d) { return this._wdw = a === b, this._target = a, this._tween = d, "object" != typeof c ? (c = { y: c }, "string" == typeof c.y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y)) : c.nodeType && (c = { y: c, x: c }), this.vars = c, this._autoKill = c.autoKill !== !1, this.getX = e(a, "x"), this.getY = e(a, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0 },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        f = e - this.yPrev,
                        g = d - this.xPrev,
                        i = h.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0), !this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            i = h.prototype;
        h.max = c, h.getOffset = f, h.autoKillThreshold = 7, i._kill = function(a) { return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a) }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) { "use strict"; var b = function() { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b()) }("ScrollToPlugin");
/*!
 * Salvattore 1.0.9 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */
! function(e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.salvattore = t() }(this, function() { /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
    window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    r = null;
                t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = { matchMedium: function(e) { var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }"; return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === r.width } }
            }
            return function(t) { return { matches: e.matchMedium(t || "all"), media: t || "all" } }
        }()), /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
        function() {
            "use strict";
            if (window.matchMedia && window.matchMedia("all").addListener) return !1;
            var e = window.matchMedia,
                t = e("only all").matches,
                n = !1,
                r = 0,
                a = [],
                i = function(t) {
                    clearTimeout(r), r = setTimeout(function() {
                        for (var t = 0, n = a.length; n > t; t++) {
                            var r = a[t].mql,
                                i = a[t].listeners || [],
                                o = e(r.media).matches;
                            if (o !== r.matches) { r.matches = o; for (var c = 0, l = i.length; l > c; c++) i[c].call(window, r) }
                        }
                    }, 30)
                };
            window.matchMedia = function(r) {
                var o = e(r),
                    c = [],
                    l = 0;
                return o.addListener = function(e) { t && (n || (n = !0, window.addEventListener("resize", i, !0)), 0 === l && (l = a.push({ mql: o, listeners: c })), c.push(e)) }, o.removeListener = function(e) { for (var t = 0, n = c.length; n > t; t++) c[t] === e && c.splice(t, 1) }, o
            }
        }(),
        function() {
            "use strict";
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var r = (new Date).getTime(),
                    a = Math.max(0, 16 - (r - e)),
                    i = window.setTimeout(function() { t(r + a) }, a);
                return e = r + a, i
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) })
        }(), "function" != typeof window.CustomEvent && ! function() {
            "use strict";

            function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } e.prototype = window.Event.prototype, window.CustomEvent = e
        }();
    var e = function(e, t, n) {
        "use strict";
        var r = {},
            a = [],
            i = [],
            o = [],
            c = function(e, t, n) { e.dataset ? e.dataset[t] = n : e.setAttribute("data-" + t, n) };
        return r.obtainGridSettings = function(t) {
            var n = e.getComputedStyle(t, ":before"),
                r = n.getPropertyValue("content").slice(1, -1),
                a = r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),
                i = 1,
                o = [];
            return a ? (i = a[1], o = a[2], o = o ? o.split(".") : ["column"]) : (a = r.match(/^\s*\.(.+)\s+(\d+)\s*$/), a && (o = a[1], i = a[2], i && (i = i.split(".")))), { numberOfColumns: i, columnClasses: o }
        }, r.addColumns = function(e, n) {
            for (var a, i = r.obtainGridSettings(e), o = i.numberOfColumns, l = i.columnClasses, s = new Array(+o), u = t.createDocumentFragment(), d = o; 0 !== d--;) a = "[data-columns] > *:nth-child(" + o + "n-" + d + ")", s.push(n.querySelectorAll(a));
            s.forEach(function(e) {
                var n = t.createElement("div"),
                    r = t.createDocumentFragment();
                n.className = l.join(" "), Array.prototype.forEach.call(e, function(e) { r.appendChild(e) }), n.appendChild(r), u.appendChild(n)
            }), e.appendChild(u), c(e, "columns", o)
        }, r.removeColumns = function(n) {
            var r = t.createRange();
            r.selectNodeContents(n);
            var a = Array.prototype.filter.call(r.extractContents().childNodes, function(t) { return t instanceof e.HTMLElement }),
                i = a.length,
                o = a[0].childNodes.length,
                l = new Array(o * i);
            Array.prototype.forEach.call(a, function(e, t) { Array.prototype.forEach.call(e.children, function(e, n) { l[n * i + t] = e }) });
            var s = t.createElement("div");
            return c(s, "columns", 0), l.filter(function(e) { return !!e }).forEach(function(e) { s.appendChild(e) }), s
        }, r.recreateColumns = function(t) {
            e.requestAnimationFrame(function() {
                r.addColumns(t, r.removeColumns(t));
                var e = new CustomEvent("columnsChange");
                t.dispatchEvent(e)
            })
        }, r.mediaQueryChange = function(e) { e.matches && Array.prototype.forEach.call(a, r.recreateColumns) }, r.getCSSRules = function(e) { var t; try { t = e.sheet.cssRules || e.sheet.rules } catch (n) { return [] } return t || [] }, r.getStylesheets = function() { var e = Array.prototype.slice.call(t.querySelectorAll("style")); return e.forEach(function(t, n) { "text/css" !== t.type && "" !== t.type && e.splice(n, 1) }), Array.prototype.concat.call(e, Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']"))) }, r.mediaRuleHasColumnsSelector = function(e) {
            var t, n;
            try { t = e.length } catch (r) { t = 0 }
            for (; t--;)
                if (n = e[t], n.selectorText && n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
            return !1
        }, r.scanMediaQueries = function() {
            var t = [];
            if (e.matchMedia) {
                r.getStylesheets().forEach(function(e) { Array.prototype.forEach.call(r.getCSSRules(e), function(e) { try { e.media && e.cssRules && r.mediaRuleHasColumnsSelector(e.cssRules) && t.push(e) } catch (n) {} }) });
                var n = i.filter(function(e) { return -1 === t.indexOf(e) });
                o.filter(function(e) { return -1 !== n.indexOf(e.rule) }).forEach(function(e) { e.mql.removeListener(r.mediaQueryChange) }), o = o.filter(function(e) { return -1 === n.indexOf(e.rule) }), t.filter(function(e) { return -1 == i.indexOf(e) }).forEach(function(t) {
                    var n = e.matchMedia(t.media.mediaText);
                    n.addListener(r.mediaQueryChange), o.push({ rule: t, mql: n })
                }), i.length = 0, i = t
            }
        }, r.rescanMediaQueries = function() { r.scanMediaQueries(), Array.prototype.forEach.call(a, r.recreateColumns) }, r.nextElementColumnIndex = function(e, t) {
            var n, r, a, i = e.children,
                o = i.length,
                c = 0,
                l = 0;
            for (a = 0; o > a; a++) n = i[a], r = n.children.length + (t[a].children || t[a].childNodes).length, 0 === c && (c = r), c > r && (l = a, c = r);
            return l
        }, r.createFragmentsList = function(e) { for (var n = new Array(e), r = 0; r !== e;) n[r] = t.createDocumentFragment(), r++; return n }, r.appendElements = function(e, t) {
            var n = e.children,
                a = n.length,
                i = r.createFragmentsList(a);
            Array.prototype.forEach.call(t, function(t) {
                var n = r.nextElementColumnIndex(e, i);
                i[n].appendChild(t)
            }), Array.prototype.forEach.call(n, function(e, t) { e.appendChild(i[t]) })
        }, r.prependElements = function(e, n) {
            var a = e.children,
                i = a.length,
                o = r.createFragmentsList(i),
                c = i - 1;
            n.forEach(function(e) {
                var t = o[c];
                t.insertBefore(e, t.firstChild), 0 === c ? c = i - 1 : c--
            }), Array.prototype.forEach.call(a, function(e, t) { e.insertBefore(o[t], e.firstChild) });
            for (var l = t.createDocumentFragment(), s = n.length % i; 0 !== s--;) l.appendChild(e.lastChild);
            e.insertBefore(l, e.firstChild)
        }, r.registerGrid = function(n) {
            if ("none" !== e.getComputedStyle(n).display) {
                var i = t.createRange();
                i.selectNodeContents(n);
                var o = t.createElement("div");
                o.appendChild(i.extractContents()), c(o, "columns", 0), r.addColumns(n, o), a.push(n)
            }
        }, r.init = function() {
            var e = t.createElement("style");
            e.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}", t.head.appendChild(e);
            var n = t.querySelectorAll("[data-columns]");
            Array.prototype.forEach.call(n, r.registerGrid), r.scanMediaQueries()
        }, r.init(), { appendElements: r.appendElements, prependElements: r.prependElements, registerGrid: r.registerGrid, recreateColumns: r.recreateColumns, rescanMediaQueries: r.rescanMediaQueries, init: r.init, append_elements: r.appendElements, prepend_elements: r.prependElements, register_grid: r.registerGrid, recreate_columns: r.recreateColumns, rescan_media_queries: r.rescanMediaQueries }
    }(window, window.document);
    return e
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(b, c) { return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) { a(c).attr("data-slick-index", b) }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({ height: b }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function(a) { a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d)) }, complete: function() { c && c.call() } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() { e.disableTransition(), c.call() }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) { a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "") }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) { if (a < c[e]) { a = d; break } d = c[e] }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { a(this).attr("style", a(this).data("originalStyling")) }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function() { c.disableTransition(a), b.call() }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() { b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay()) }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() { var a = this; return a.currentSlide }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) { var b = this; return b.options[a] }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() { return this }, b.prototype.getSlideCount = function() { var c, d, e, b = this; return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) { return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0 }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) { a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c }) }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) { a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() { c.animate({ opacity: 0 }, 100, function() { c.attr("src", d).animate({ opacity: 1 }, 200, function() { c.removeAttr("data-lazy").removeClass("slick-loading") }), b.$slider.trigger("lazyLoaded", [b, c, d]) }) }, e.onerror = function() { c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]) }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({ data: { message: "next" } })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({ data: { message: "previous" } })
    }, b.prototype.preventDefault = function(a) { a.preventDefault() }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() { e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad() }, g.onerror = function() { 3 > b ? setTimeout(function() { c.progressiveLazyLoad(b + 1) }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad()) }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) { return b.options.mobileFirst ? a - c : c - a })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() { b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition() }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) { var d = this; return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit()) }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) { c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) { b.options[a] = c });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() { a(this).attr("id", "") })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() { i.postSlide(e) })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() { i.postSlide(e) }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() { var a, b, c, d, e = this; return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical" }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) { var d, e, f, g, h, b = this; return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0) }, b.prototype.swipeStart = function(a) { var c, b = this; return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0)) }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
/* appear.min.js 1.0.3 */
appear = function() {
    "use strict";

    function e() {
        var e = window.scrollY || window.pageYOffset;
        null != n && (o.velocity = e - n, o.delta = o.velocity >= 0 ? o.velocity : -1 * o.velocity), n = e, i && clearTimeout(i), i = setTimeout(function() { n = null }, 30)
    }

    function t(e, t) { var n = e.getBoundingClientRect(); return n.top + n.height >= 0 && n.left + n.width >= 0 && n.bottom - n.height <= (window.innerHeight || document.documentElement.clientHeight) + t && n.right - n.width <= (window.innerWidth || document.documentElement.clientWidth) + t }
    var n = null,
        i = 0,
        o = {};
    return addEventListener("scroll", e, !1),
        function(e) {
            return function(e) {
                function n(e, t) {
                    return function() {
                        var n = this,
                            i = arguments;
                        clearTimeout(l), l = setTimeout(function() { e.apply(n, i) }, t)
                    }
                }

                function i() { o.delta < y.delta.speed && (s || (s = !0, d(), setTimeout(function() { s = !1 }, y.delta.timeout))), n(function() { d() }, y.debounce)() }

                function r() { d(), addEventListener("scroll", i, !1), addEventListener("resize", i, !1) }

                function a() { v = [], l && clearTimeout(l), u() }

                function u() { removeEventListener("scroll", i, !1), removeEventListener("resize", i, !1) }

                function d() { f || (v.forEach(function(e, n) { e && t(e, y.bounds) ? h[n] && (h[n] = !1, g++, y.appear && y.appear(e), y.disappear || y.reappear || (v[n] = null)) : (h[n] === !1 && (y.disappear && y.disappear(e), w++, y.reappear || (v[n] = null)), h[n] = !0) }), y.reappear || y.appear && (!y.appear || g !== p) || y.disappear && (!y.disappear || w !== p) || (f = !0, u(), y.done && y.done())) }

                function c() {
                    if (!m) {
                        m = !0, y.init && y.init();
                        var e;
                        if (e = "function" == typeof y.elements ? y.elements() : y.elements) {
                            p = e.length;
                            for (var t = 0; p > t; t += 1) v.push(e[t]), h.push(!0);
                            r()
                        }
                    }
                }
                var p, l, s, f, m = !1,
                    v = [],
                    h = [],
                    g = 0,
                    w = 0,
                    y = {};
                return function(e) {
                    e = e || {}, y = { init: e.init, elements: e.elements, appear: e.appear, disappear: e.disappear, done: e.done, reappear: e.reappear, bounds: e.bounds || 0, debounce: e.debounce || 50, delta: { speed: e.deltaSpeed || 50, timeout: e.deltaTimeout || 500 } }, addEventListener("DOMContentLoaded", c, !1);
                    var t = !1;
                    Function("/*@cc_on return document.documentMode===10@*/")() && (t = !0);
                    var n = "complete" === document.readyState || "loaded" === document.readyState;
                    return t ? n && c() : (n || "interactive" === document.readyState) && c(), { trigger: function() { d() }, pause: function() { u() }, resume: function() { r() }, destroy: function() { a() } }
                }
            }()(e)
        }
}();
(function() {
    var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function l() {
        l = function() {};
        k.Symbol || (k.Symbol = ba)
    }
    var ca = 0;

    function ba(a) { return "jscomp_symbol_" + (a || "") + ca++ }

    function m() {
        l();
        var a = k.Symbol.iterator;
        a || (a = k.Symbol.iterator = k.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function() { return da(this) } });
        m = function() {}
    }

    function da(a) { var b = 0; return ea(function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } }) }

    function ea(a) {
        m();
        a = { next: a };
        a[k.Symbol.iterator] = function() { return this };
        return a
    }

    function fa(a) {
        m();
        l();
        m();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : da(a)
    }

    function n(a) {
        if (!(a instanceof Array)) {
            a = fa(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ha(a, b) {
        function c() {} c.prototype = b.prototype;
        a.ha = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)
            if (Object.defineProperties) {
                var e = Object.getOwnPropertyDescriptor(b, d);
                e && Object.defineProperty(a, d, e)
            } else a[d] = b[d]
    }
    var p = window.Element.prototype,
        ia = p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;

    function ja(a, b) {
        if (a && 1 == a.nodeType && b) {
            if ("string" == typeof b || 1 == b.nodeType) return a == b || ka(a, b);
            if ("length" in b)
                for (var c = 0, d; d = b[c]; c++)
                    if (a == d || ka(a, d)) return !0
        }
        return !1
    }

    function ka(a, b) {
        if ("string" != typeof b) return !1;
        if (ia) return ia.call(a, b);
        b = a.parentNode.querySelectorAll(b);
        for (var c = 0, d; d = b[c]; c++)
            if (d == a) return !0;
        return !1
    }

    function la(a) { for (var b = []; a && a.parentNode && 1 == a.parentNode.nodeType;) a = a.parentNode, b.push(a); return b }

    function q(a, b, c) {
        function d(a) {
            var d;
            if (h.composed && "function" == typeof a.composedPath)
                for (var e = a.composedPath(), f = 0, F; F = e[f]; f++) 1 == F.nodeType && ja(F, b) && (d = F);
            else a: {
                if ((d = a.target) && 1 == d.nodeType && b)
                    for (d = [d].concat(la(d)), e = 0; f = d[e]; e++)
                        if (ja(f, b)) { d = f; break a }
                d = void 0
            }
            d && c.call(d, a, d)
        }
        var e = document,
            h = { composed: !0, S: !0 },
            h = void 0 === h ? {} : h;
        e.addEventListener(a, d, h.S);
        return { j: function() { e.removeEventListener(a, d, h.S) } }
    }

    function ma(a) {
        var b = {};
        if (!a || 1 != a.nodeType) return b;
        a = a.attributes;
        if (!a.length) return {};
        for (var c = 0, d; d = a[c]; c++) b[d.name] = d.value;
        return b
    }
    var na = /:(80|443)$/,
        r = document.createElement("a"),
        t = {};

    function u(a) {
        a = a && "." != a ? a : location.href;
        if (t[a]) return t[a];
        r.href = a;
        if ("." == a.charAt(0) || "/" == a.charAt(0)) return u(r.href);
        var b = "80" == r.port || "443" == r.port ? "" : r.port,
            b = "0" == b ? "" : b,
            c = r.host.replace(na, "");
        return t[a] = { hash: r.hash, host: c, hostname: r.hostname, href: r.href, origin: r.origin ? r.origin : r.protocol + "//" + c, pathname: "/" == r.pathname.charAt(0) ? r.pathname : "/" + r.pathname, port: b, protocol: r.protocol, search: r.search }
    }
    var w = [];

    function oa(a, b) {
        var c = this;
        this.context = a;
        this.P = b;
        this.f = (this.c = /Task$/.test(b)) ? a.get(b) : a[b];
        this.b = [];
        this.a = [];
        this.g = function(a) { for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d]; return c.a[c.a.length - 1].apply(null, [].concat(n(b))) };
        this.c ? a.set(b, this.g) : a[b] = this.g
    }

    function x(a, b, c) {
        a = pa(a, b);
        a.b.push(c);
        qa(a)
    }

    function y(a, b, c) {
        a = pa(a, b);
        c = a.b.indexOf(c); - 1 < c && (a.b.splice(c, 1), 0 < a.b.length ? qa(a) : a.j())
    }

    function qa(a) {
        a.a = [];
        for (var b, c = 0; b = a.b[c]; c++) {
            var d = a.a[c - 1] || a.f.bind(a.context);
            a.a.push(b(d))
        }
    }
    oa.prototype.j = function() { var a = w.indexOf(this); - 1 < a && (w.splice(a, 1), this.c ? this.context.set(this.P, this.f) : this.context[this.P] = this.f) };

    function pa(a, b) {
        var c = w.filter(function(c) { return c.context == a && c.P == b })[0];
        c || (c = new oa(a, b), w.push(c));
        return c
    }

    function z(a, b, c, d, e, h) {
        if ("function" == typeof d) {
            var f = c.get("buildHitTask");
            return {
                buildHitTask: function(c) {
                    c.set(a, null, !0);
                    c.set(b, null, !0);
                    d(c, e, h);
                    f(c)
                }
            }
        }
        return A({}, a, b)
    }

    function B(a, b) {
        var c = ma(a),
            d = {};
        Object.keys(c).forEach(function(a) {
            if (!a.indexOf(b) && a != b + "on") {
                var e = c[a];
                "true" == e && (e = !0);
                "false" == e && (e = !1);
                a = ra(a.slice(b.length));
                d[a] = e
            }
        });
        return d
    }

    function sa(a) {
        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", function c() {
            document.removeEventListener("DOMContentLoaded", c);
            a()
        }) : a()
    }

    function ta(a, b) {
        var c;
        return function(d) {
            for (var e = [], h = 0; h < arguments.length; ++h) e[h - 0] = arguments[h];
            clearTimeout(c);
            c = setTimeout(function() { return a.apply(null, [].concat(n(e))) }, b)
        }
    }

    function ua(a) {
        function b() { c || (c = !0, a()) }
        var c = !1;
        setTimeout(b, 2E3);
        return b
    }
    var C = {};

    function va(a, b) {
        function c() {
            clearTimeout(e.timeout);
            e.send && y(a, "send", e.send);
            delete C[d];
            e.R.forEach(function(a) { return a() })
        }
        var d = a.get("trackingId"),
            e = C[d] = C[d] || {};
        clearTimeout(e.timeout);
        e.timeout = setTimeout(c, 0);
        e.R = e.R || [];
        e.R.push(b);
        e.send || (e.send = function(a) {
            return function(b) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                c();
                a.apply(null, [].concat(n(d)))
            }
        }, x(a, "send", e.send))
    }
    var A = Object.assign || function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        for (var d = 0, e = c.length; d < e; d++) {
            var h = Object(c[d]),
                f;
            for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (a[f] = h[f])
        }
        return a
    };

    function ra(a) { return a.replace(/[\-\_]+(\w?)/g, function(a, c) { return c.toUpperCase() }) }

    function D(a) { return "object" == typeof a && null !== a }
    var E = function wa(b) { return b ? (b ^ 16 * Math.random() >> b / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, wa) };

    function G(a, b) {
        var c = window.GoogleAnalyticsObject || "ga";
        window[c] = window[c] || function(a) {
            for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d];
            (window[c].q = window[c].q || []).push(b)
        };
        window.gaDevIds = window.gaDevIds || [];
        0 > window.gaDevIds.indexOf("i5iSjo") && window.gaDevIds.push("i5iSjo");
        window[c]("provide", a, b);
        window.gaplugins = window.gaplugins || {};
        window.gaplugins[a.charAt(0).toUpperCase() + a.slice(1)] = b
    }
    var H = { T: 1, U: 2, V: 3, X: 4, Y: 5, Z: 6, $: 7, aa: 8, ba: 9, W: 10 },
        I = Object.keys(H).length;

    function J(a, b) {
        a.set("\x26_av", "2.4.1");
        var c = a.get("\x26_au"),
            c = parseInt(c || "0", 16).toString(2);
        if (c.length < I)
            for (var d = I - c.length; d;) c = "0" + c, d--;
        b = I - b;
        c = c.substr(0, b) + 1 + c.substr(b + 1);
        a.set("\x26_au", parseInt(c || "0", 2).toString(16))
    }

    function K(a, b) {
        J(a, H.T);
        this.a = A({}, b);
        this.g = a;
        this.b = this.a.stripQuery && this.a.queryDimensionIndex ? "dimension" + this.a.queryDimensionIndex : null;
        this.f = this.f.bind(this);
        this.c = this.c.bind(this);
        x(a, "get", this.f);
        x(a, "buildHitTask", this.c)
    }
    K.prototype.f = function(a) { var b = this; return function(c) { if ("page" == c || c == b.b) { var d = { location: a("location"), page: a("page") }; return xa(b, d)[c] } return a(c) } };
    K.prototype.c = function(a) {
        var b = this;
        return function(c) {
            var d = xa(b, { location: c.get("location"), page: c.get("page") });
            c.set(d, null, !0);
            a(c)
        }
    };

    function xa(a, b) {
        var c = u(b.page || b.location),
            d = c.pathname;
        if (a.a.indexFilename) {
            var e = d.split("/");
            a.a.indexFilename == e[e.length - 1] && (e[e.length - 1] = "", d = e.join("/"))
        }
        "remove" == a.a.trailingSlash ? d = d.replace(/\/+$/, "") : "add" == a.a.trailingSlash && (/\.\w+$/.test(d) || "/" == d.substr(-1) || (d += "/"));
        d = { page: d + (a.a.stripQuery ? ya(a, c.search) : c.search) };
        b.location && (d.location = b.location);
        a.b && (d[a.b] = c.search.slice(1) || "(not set)");
        return "function" == typeof a.a.urlFieldsFilter ? (b = a.a.urlFieldsFilter(d, u), c = {
            page: b.page,
            location: b.location
        }, a.b && (c[a.b] = b[a.b]), c) : d
    }

    function ya(a, b) {
        if (Array.isArray(a.a.queryParamsWhitelist)) {
            var c = [];
            b.slice(1).split("\x26").forEach(function(b) {
                var d = fa(b.split("\x3d"));
                b = d.next().value;
                d = d.next().value; - 1 < a.a.queryParamsWhitelist.indexOf(b) && d && c.push([b, d])
            });
            return c.length ? "?" + c.map(function(a) { return a.join("\x3d") }).join("\x26") : ""
        }
        return ""
    }
    K.prototype.remove = function() {
        y(this.g, "get", this.f);
        y(this.g, "buildHitTask", this.c)
    };
    G("cleanUrlTracker", K);

    function L(a, b) {
        var c = this;
        J(a, H.U);
        if (window.addEventListener) {
            this.a = A({ events: ["click"], fieldsObj: {}, attributePrefix: "ga-" }, b);
            this.f = a;
            this.c = this.c.bind(this);
            var d = "[" + this.a.attributePrefix + "on]";
            this.b = {};
            this.a.events.forEach(function(a) { c.b[a] = q(a, d, c.c) })
        }
    }
    L.prototype.c = function(a, b) {
        var c = this.a.attributePrefix;
        if (!(0 > b.getAttribute(c + "on").split(/\s*,\s*/).indexOf(a.type))) {
            var c = B(b, c),
                d = A({}, this.a.fieldsObj, c);
            this.f.send(c.hitType || "event", z({ transport: "beacon" }, d, this.f, this.a.hitFilter, b, a))
        }
    };
    L.prototype.remove = function() {
        var a = this;
        Object.keys(this.b).forEach(function(b) { a.b[b].j() })
    };
    G("eventTracker", L);

    function za(a, b) {
        var c = this;
        J(a, H.V);
        window.IntersectionObserver && window.MutationObserver && (this.a = A({ rootMargin: "0px", fieldsObj: {}, attributePrefix: "ga-" }, b), this.c = a, this.M = this.M.bind(this), this.O = this.O.bind(this), this.K = this.K.bind(this), this.L = this.L.bind(this), this.b = null, this.items = [], this.i = {}, this.h = {}, sa(function() { c.a.elements && c.observeElements(c.a.elements) }))
    }
    g = za.prototype;
    g.observeElements = function(a) {
        var b = this;
        a = M(this, a);
        this.items = this.items.concat(a.items);
        this.i = A({}, a.i, this.i);
        this.h = A({}, a.h, this.h);
        a.items.forEach(function(a) {
            var c = b.h[a.threshold] = b.h[a.threshold] || new IntersectionObserver(b.O, { rootMargin: b.a.rootMargin, threshold: [+a.threshold] });
            (a = b.i[a.id] || (b.i[a.id] = document.getElementById(a.id))) && c.observe(a)
        });
        this.b || (this.b = new MutationObserver(this.M), this.b.observe(document.body, { childList: !0, subtree: !0 }));
        requestAnimationFrame(function() {})
    };
    g.unobserveElements = function(a) {
        var b = [],
            c = [];
        this.items.forEach(function(d) { a.some(function(a) { a = Aa(a); return a.id === d.id && a.threshold === d.threshold && a.trackFirstImpressionOnly === d.trackFirstImpressionOnly }) ? c.push(d) : b.push(d) });
        if (b.length) {
            var d = M(this, b),
                e = M(this, c);
            this.items = d.items;
            this.i = d.i;
            this.h = d.h;
            c.forEach(function(a) {
                if (!d.i[a.id]) {
                    var b = e.h[a.threshold],
                        c = e.i[a.id];
                    c && b.unobserve(c);
                    d.h[a.threshold] || e.h[a.threshold].disconnect()
                }
            })
        } else this.unobserveAllElements()
    };
    g.unobserveAllElements = function() {
        var a = this;
        Object.keys(this.h).forEach(function(b) { a.h[b].disconnect() });
        this.b.disconnect();
        this.b = null;
        this.items = [];
        this.i = {};
        this.h = {}
    };

    function M(a, b) {
        var c = [],
            d = {},
            e = {};
        b.length && b.forEach(function(b) {
            b = Aa(b);
            c.push(b);
            e[b.id] = a.i[b.id] || null;
            d[b.threshold] = a.h[b.threshold] || null
        });
        return { items: c, i: e, h: d }
    }
    g.M = function(a) { for (var b = 0, c; c = a[b]; b++) { for (var d = 0, e; e = c.removedNodes[d]; d++) N(this, e, this.L); for (d = 0; e = c.addedNodes[d]; d++) N(this, e, this.K) } };

    function N(a, b, c) { 1 == b.nodeType && b.id in a.i && c(b.id); for (var d = 0, e; e = b.childNodes[d]; d++) N(a, e, c) }
    g.O = function(a) {
        for (var b = [], c = 0, d; d = a[c]; c++)
            for (var e = 0, h; h = this.items[e]; e++) {
                var f;
                if (f = d.target.id === h.id)(f = h.threshold) ? f = d.intersectionRatio >= f : (f = d.intersectionRect, f = 0 < f.top || 0 < f.bottom || 0 < f.left || 0 < f.right);
                if (f) {
                    var v = h.id;
                    f = document.getElementById(v);
                    var v = { transport: "beacon", eventCategory: "Viewport", eventAction: "impression", eventLabel: v, nonInteraction: !0 },
                        Na = A({}, this.a.fieldsObj, B(f, this.a.attributePrefix));
                    this.c.send("event", z(v, Na, this.c, this.a.hitFilter, f));
                    h.trackFirstImpressionOnly &&
                        b.push(h)
                }
            }
        b.length && this.unobserveElements(b)
    };
    g.K = function(a) {
        var b = this,
            c = this.i[a] = document.getElementById(a);
        this.items.forEach(function(d) { a == d.id && b.h[d.threshold].observe(c) })
    };
    g.L = function(a) {
        var b = this,
            c = this.i[a];
        this.items.forEach(function(d) { a == d.id && b.h[d.threshold].unobserve(c) });
        this.i[a] = null
    };
    g.remove = function() { this.unobserveAllElements() };
    G("impressionTracker", za);

    function Aa(a) { "string" == typeof a && (a = { id: a }); return A({ threshold: 0, trackFirstImpressionOnly: !0 }, a) }

    function Ba() { this.a = {} }

    function Ca(a, b) {
        (a.a.externalSet = a.a.externalSet || []).push(b)
    }
    Ba.prototype.ca = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        (this.a[a] = this.a[a] || []).forEach(function(a) { return a.apply(null, [].concat(n(c))) })
    };
    var O = {},
        P = !1,
        Q;

    function R(a, b) {
        b = void 0 === b ? {} : b;
        this.a = {};
        this.b = a;
        this.w = b;
        this.l = null
    }
    ha(R, Ba);

    function S(a, b, c) {
        a = ["autotrack", a, b].join(":");
        O[a] || (O[a] = new R(a, c), P || (window.addEventListener("storage", Da), P = !0));
        return O[a]
    }

    function Ea() { if (null != Q) return Q; try { window.localStorage.setItem("autotrack", "autotrack"), window.localStorage.removeItem("autotrack"), Q = !0 } catch (a) { Q = !1 } return Q } R.prototype.get = function() {
        if (this.l) return this.l;
        if (Ea()) try { this.l = Fa(window.localStorage.getItem(this.b)) } catch (a) {}
        return this.l = A({}, this.w, this.l)
    };
    R.prototype.set = function(a) {
        this.l = A({}, this.w, this.l, a);
        if (Ea()) try {
            var b = JSON.stringify(this.l);
            window.localStorage.setItem(this.b, b)
        } catch (c) {}
    };

    function Ga(a) { a.l = {}; if (Ea()) try { window.localStorage.removeItem(a.b) } catch (b) {} } R.prototype.j = function() {
        delete O[this.b];
        Object.keys(O).length || (window.removeEventListener("storage", Da), P = !1)
    };

    function Da(a) {
        var b = O[a.key];
        if (b) {
            var c = A({}, b.w, Fa(a.oldValue));
            a = A({}, b.w, Fa(a.newValue));
            b.l = a;
            b.ca("externalSet", a, c)
        }
    }

    function Fa(a) {
        var b = {};
        if (a) try { b = JSON.parse(a) } catch (c) {}
        return b
    }
    var T = {};

    function U(a, b, c) {
        this.f = a;
        this.timeout = b || Ha;
        this.timeZone = c;
        this.b = this.b.bind(this);
        x(a, "sendHitTask", this.b);
        try { this.c = new Intl.DateTimeFormat("en-US", { timeZone: this.timeZone }) } catch (d) {} this.a = S(a.get("trackingId"), "session", { hitTime: 0, isExpired: !1 });
        this.a.get().id || this.a.set({ id: E() })
    }

    function Ia(a, b, c) { var d = a.get("trackingId"); return T[d] ? T[d] : T[d] = new U(a, b, c) }

    function V(a) { return a.a.get().id }
    U.prototype.isExpired = function(a) {
        a = void 0 === a ? V(this) : a;
        if (a != V(this)) return !0;
        a = this.a.get();
        if (a.isExpired) return !0;
        var b = a.hitTime;
        return b && (a = new Date, b = new Date(b), a - b > 6E4 * this.timeout || this.c && this.c.format(a) != this.c.format(b)) ? !0 : !1
    };
    U.prototype.b = function(a) {
        var b = this;
        return function(c) {
            a(c);
            var d = c.get("sessionControl");
            c = "start" == d || b.isExpired();
            var d = "end" == d,
                e = b.a.get();
            e.hitTime = +new Date;
            c && (e.isExpired = !1, e.id = E());
            d && (e.isExpired = !0);
            b.a.set(e)
        }
    };
    U.prototype.j = function() {
        y(this.f, "sendHitTask", this.b);
        this.a.j();
        delete T[this.f.get("trackingId")]
    };
    var Ha = 30;

    function W(a, b) {
        J(a, H.W);
        window.addEventListener && (this.b = A({ increaseThreshold: 20, sessionTimeout: Ha, fieldsObj: {} }, b), this.f = a, this.c = Ja(this), this.g = ta(this.g.bind(this), 500), this.o = this.o.bind(this), this.a = S(a.get("trackingId"), "plugins/max-scroll-tracker"), this.m = Ia(a, this.b.sessionTimeout, this.b.timeZone), x(a, "set", this.o), Ka(this))
    }

    function Ka(a) { 100 > (a.a.get()[a.c] || 0) && window.addEventListener("scroll", a.g) }
    W.prototype.g = function() {
        var a = document.documentElement,
            b = document.body,
            a = Math.min(100, Math.max(0, Math.round(window.pageYOffset / (Math.max(a.offsetHeight, a.scrollHeight, b.offsetHeight, b.scrollHeight) - window.innerHeight) * 100))),
            b = V(this.m);
        b != this.a.get().sessionId && (Ga(this.a), this.a.set({ sessionId: b }));
        if (this.m.isExpired(this.a.get().sessionId)) Ga(this.a);
        else if (b = this.a.get()[this.c] || 0, a > b && (100 != a && 100 != b || window.removeEventListener("scroll", this.g), b = a - b, 100 == a || b >= this.b.increaseThreshold)) {
            var c = {};
            this.a.set((c[this.c] = a, c.sessionId = V(this.m), c));
            a = { transport: "beacon", eventCategory: "Max Scroll", eventAction: "increase", eventValue: b, eventLabel: String(a), nonInteraction: !0 };
            this.b.maxScrollMetricIndex && (a["metric" + this.b.maxScrollMetricIndex] = b);
            this.f.send("event", z(a, this.b.fieldsObj, this.f, this.b.hitFilter))
        }
    };
    W.prototype.o = function(a) {
        var b = this;
        return function(c, d) {
            a(c, d);
            var e = {};
            (D(c) ? c : (e[c] = d, e)).page && (c = b.c, b.c = Ja(b), b.c != c && Ka(b))
        }
    };

    function Ja(a) { a = u(a.f.get("page") || a.f.get("location")); return a.pathname + a.search } W.prototype.remove = function() {
        this.m.j();
        window.removeEventListener("scroll", this.g);
        y(this.f, "set", this.o)
    };
    G("maxScrollTracker", W);
    var La = {};

    function Ma(a, b) {
        J(a, H.X);
        window.matchMedia && (this.a = A({ changeTemplate: this.changeTemplate, changeTimeout: 1E3, fieldsObj: {} }, b), D(this.a.definitions) && (b = this.a.definitions, this.a.definitions = Array.isArray(b) ? b : [b], this.b = a, this.c = [], Oa(this)))
    }

    function Oa(a) {
        a.a.definitions.forEach(function(b) {
            if (b.name && b.dimensionIndex) {
                var c = Pa(b);
                a.b.set("dimension" + b.dimensionIndex, c);
                Qa(a, b)
            }
        })
    }

    function Pa(a) {
        var b;
        a.items.forEach(function(a) { Ra(a.media).matches && (b = a) });
        return b ? b.name : "(not set)"
    }

    function Qa(a, b) {
        b.items.forEach(function(c) {
            c = Ra(c.media);
            var d = ta(function() {
                var c = Pa(b),
                    d = a.b.get("dimension" + b.dimensionIndex);
                c !== d && (a.b.set("dimension" + b.dimensionIndex, c), c = { transport: "beacon", eventCategory: b.name, eventAction: "change", eventLabel: a.a.changeTemplate(d, c), nonInteraction: !0 }, a.b.send("event", z(c, a.a.fieldsObj, a.b, a.a.hitFilter)))
            }, a.a.changeTimeout);
            c.addListener(d);
            a.c.push({ fa: c, da: d })
        })
    }
    Ma.prototype.remove = function() { for (var a = 0, b; b = this.c[a]; a++) b.fa.removeListener(b.da) };
    Ma.prototype.changeTemplate = function(a, b) { return a + " \x3d\x3e " + b };
    G("mediaQueryTracker", Ma);

    function Ra(a) { return La[a] || (La[a] = window.matchMedia(a)) }

    function X(a, b) {
        J(a, H.Y);
        window.addEventListener && (this.a = A({ formSelector: "form", shouldTrackOutboundForm: this.shouldTrackOutboundForm, fieldsObj: {}, attributePrefix: "ga-" }, b), this.b = a, this.c = q("submit", this.a.formSelector, this.f.bind(this)))
    }
    X.prototype.f = function(a, b) {
        var c = { transport: "beacon", eventCategory: "Outbound Form", eventAction: "submit", eventLabel: u(b.action).href };
        if (this.a.shouldTrackOutboundForm(b, u)) {
            navigator.sendBeacon || (a.preventDefault(), c.hitCallback = ua(function() { b.submit() }));
            var d = A({}, this.a.fieldsObj, B(b, this.a.attributePrefix));
            this.b.send("event", z(c, d, this.b, this.a.hitFilter, b, a))
        }
    };
    X.prototype.shouldTrackOutboundForm = function(a, b) { a = b(a.action); return a.hostname != location.hostname && "http" == a.protocol.slice(0, 4) };
    X.prototype.remove = function() { this.c.j() };
    G("outboundFormTracker", X);

    function Y(a, b) {
        var c = this;
        J(a, H.Z);
        window.addEventListener && (this.a = A({ events: ["click"], linkSelector: "a, area", shouldTrackOutboundLink: this.shouldTrackOutboundLink, fieldsObj: {}, attributePrefix: "ga-" }, b), this.c = a, this.f = this.f.bind(this), this.b = {}, this.a.events.forEach(function(a) { c.b[a] = q(a, c.a.linkSelector, c.f) }))
    }
    Y.prototype.f = function(a, b) {
        var c = this;
        if (this.a.shouldTrackOutboundLink(b, u)) {
            var d = b.getAttribute("href") || b.getAttribute("xlink:href"),
                e = u(d),
                e = { transport: "beacon", eventCategory: "Outbound Link", eventAction: a.type, eventLabel: e.href },
                h = A({}, this.a.fieldsObj, B(b, this.a.attributePrefix)),
                f = z(e, h, this.c, this.a.hitFilter, b, a);
            if (navigator.sendBeacon || "click" != a.type || "_blank" == b.target || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || 1 < a.which) this.c.send("event", f);
            else {
                var v = function() {
                    window.removeEventListener("click",
                        v);
                    if (!a.defaultPrevented) {
                        a.preventDefault();
                        var b = f.hitCallback;
                        f.hitCallback = ua(function() {
                            "function" == typeof b && b();
                            location.href = d
                        })
                    }
                    c.c.send("event", f)
                };
                window.addEventListener("click", v)
            }
        }
    };
    Y.prototype.shouldTrackOutboundLink = function(a, b) {
        a = a.getAttribute("href") || a.getAttribute("xlink:href");
        b = b(a);
        return b.hostname != location.hostname && "http" == b.protocol.slice(0, 4)
    };
    Y.prototype.remove = function() {
        var a = this;
        Object.keys(this.b).forEach(function(b) { a.b[b].j() })
    };
    G("outboundLinkTracker", Y);
    var Z = E();

    function Sa(a, b) {
        var c = this;
        J(a, H.$);
        document.visibilityState && (this.a = A({ sessionTimeout: Ha, visibleThreshold: 5E3, sendInitialPageview: !1, fieldsObj: {} }, b), this.b = a, this.g = document.visibilityState, this.m = null, this.o = !1, this.v = this.v.bind(this), this.s = this.s.bind(this), this.G = this.G.bind(this), this.N = this.N.bind(this), this.c = S(a.get("trackingId"), "plugins/page-visibility-tracker"), Ca(this.c, this.N), this.f = Ia(a, this.a.sessionTimeout, this.a.timeZone), x(a, "set", this.v), window.addEventListener("unload", this.G),
            document.addEventListener("visibilitychange", this.s), va(this.b, function() {
                if ("visible" == document.visibilityState) c.a.sendInitialPageview && (Ta(c, { ea: !0 }), c.o = !0), c.c.set({ time: +new Date, state: "visible", pageId: Z, sessionId: V(c.f) });
                else if (c.a.sendInitialPageview && c.a.pageLoadsMetricIndex) {
                    var a = {},
                        a = (a.transport = "beacon", a.eventCategory = "Page Visibility", a.eventAction = "page load", a.eventLabel = "(not set)", a["metric" + c.a.pageLoadsMetricIndex] = 1, a.nonInteraction = !0, a);
                    c.b.send("event", z(a, c.a.fieldsObj,
                        c.b, c.a.hitFilter))
                }
            }))
    }
    g = Sa.prototype;
    g.s = function() {
        var a = this;
        if ("visible" == document.visibilityState || "hidden" == document.visibilityState) {
            var b = Ua(this),
                c = { time: +new Date, state: document.visibilityState, pageId: Z, sessionId: V(this.f) };
            "visible" == document.visibilityState && this.a.sendInitialPageview && !this.o && (Ta(this), this.o = !0);
            "hidden" == document.visibilityState && this.m && clearTimeout(this.m);
            this.f.isExpired(b.sessionId) ? (Ga(this.c), "hidden" == this.g && "visible" == document.visibilityState && (clearTimeout(this.m), this.m = setTimeout(function() {
                a.c.set(c);
                Ta(a, { hitTime: c.time })
            }, this.a.visibleThreshold))) : (b.pageId == Z && "visible" == b.state && Va(this, b), this.c.set(c));
            this.g = document.visibilityState
        }
    };

    function Ua(a) { var b = a.c.get(); "visible" == a.g && "hidden" == b.state && b.pageId != Z && (b.state = "visible", b.pageId = Z, a.c.set(b)); return b }

    function Va(a, b, c) {
        c = (c ? c : {}).hitTime;
        var d = { hitTime: c },
            d = (d ? d : {}).hitTime;
        (b = b.time ? (d || +new Date) - b.time : 0) && b >= a.a.visibleThreshold && (b = Math.round(b / 1E3), d = { transport: "beacon", nonInteraction: !0, eventCategory: "Page Visibility", eventAction: "track", eventValue: b, eventLabel: "(not set)" }, c && (d.queueTime = +new Date - c), a.a.visibleMetricIndex && (d["metric" + a.a.visibleMetricIndex] = b), a.b.send("event", z(d, a.a.fieldsObj, a.b, a.a.hitFilter)))
    }

    function Ta(a, b) {
        var c = b ? b : {};
        b = c.hitTime;
        var c = c.ea,
            d = { transport: "beacon" };
        b && (d.queueTime = +new Date - b);
        c && a.a.pageLoadsMetricIndex && (d["metric" + a.a.pageLoadsMetricIndex] = 1);
        a.b.send("pageview", z(d, a.a.fieldsObj, a.b, a.a.hitFilter))
    }
    g.v = function(a) {
        var b = this;
        return function(c, d) {
            var e = {},
                e = D(c) ? c : (e[c] = d, e);
            e.page && e.page !== b.b.get("page") && "visible" == b.g && b.s();
            a(c, d)
        }
    };
    g.N = function(a, b) { a.time != b.time && (b.pageId != Z || "visible" != b.state || this.f.isExpired(b.sessionId) || Va(this, b, { hitTime: a.time })) };
    g.G = function() { "hidden" != this.g && this.s() };
    g.remove = function() {
        this.c.j();
        this.f.j();
        y(this.b, "set", this.v);
        window.removeEventListener("unload", this.G);
        document.removeEventListener("visibilitychange", this.s)
    };
    G("pageVisibilityTracker", Sa);

    function Wa(a, b) {
        J(a, H.aa);
        window.addEventListener && (this.a = A({ fieldsObj: {}, hitFilter: null }, b), this.b = a, this.u = this.u.bind(this), this.J = this.J.bind(this), this.D = this.D.bind(this), this.A = this.A.bind(this), this.B = this.B.bind(this), this.F = this.F.bind(this), "complete" != document.readyState ? window.addEventListener("load", this.u) : this.u())
    }
    g = Wa.prototype;
    g.u = function() { if (window.FB) try { window.FB.Event.subscribe("edge.create", this.B), window.FB.Event.subscribe("edge.remove", this.F) } catch (a) {} window.twttr && this.J() };
    g.J = function() {
        var a = this;
        try {
            window.twttr.ready(function() {
                window.twttr.events.bind("tweet", a.D);
                window.twttr.events.bind("follow", a.A)
            })
        } catch (b) {}
    };

    function Xa(a) {
        try {
            window.twttr.ready(function() {
                window.twttr.events.unbind("tweet", a.D);
                window.twttr.events.unbind("follow", a.A)
            })
        } catch (b) {}
    }
    g.D = function(a) {
        if ("tweet" == a.region) {
            var b = { transport: "beacon", socialNetwork: "Twitter", socialAction: "tweet", socialTarget: a.data.url || a.target.getAttribute("data-url") || location.href };
            this.b.send("social", z(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a))
        }
    };
    g.A = function(a) {
        if ("follow" == a.region) {
            var b = { transport: "beacon", socialNetwork: "Twitter", socialAction: "follow", socialTarget: a.data.screen_name || a.target.getAttribute("data-screen-name") };
            this.b.send("social", z(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a))
        }
    };
    g.B = function(a) { this.b.send("social", z({ transport: "beacon", socialNetwork: "Facebook", socialAction: "like", socialTarget: a }, this.a.fieldsObj, this.b, this.a.hitFilter)) };
    g.F = function(a) { this.b.send("social", z({ transport: "beacon", socialNetwork: "Facebook", socialAction: "unlike", socialTarget: a }, this.a.fieldsObj, this.b, this.a.hitFilter)) };
    g.remove = function() { window.removeEventListener("load", this.u); try { window.FB.Event.unsubscribe("edge.create", this.B), window.FB.Event.unsubscribe("edge.remove", this.F) } catch (a) {} Xa(this) };
    G("socialWidgetTracker", Wa);

    function Ya(a, b) {
        J(a, H.ba);
        history.pushState && window.addEventListener && (this.a = A({ shouldTrackUrlChange: this.shouldTrackUrlChange, trackReplaceState: !1, fieldsObj: {}, hitFilter: null }, b), this.b = a, this.c = location.pathname + location.search, this.H = this.H.bind(this), this.I = this.I.bind(this), this.C = this.C.bind(this), x(history, "pushState", this.H), x(history, "replaceState", this.I), window.addEventListener("popstate", this.C))
    }
    g = Ya.prototype;
    g.H = function(a) {
        var b = this;
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
            a.apply(null, [].concat(n(d)));
            Za(b, !0)
        }
    };
    g.I = function(a) {
        var b = this;
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
            a.apply(null, [].concat(n(d)));
            Za(b, !1)
        }
    };
    g.C = function() { Za(this, !0) };

    function Za(a, b) {
        setTimeout(function() {
            var c = a.c,
                d = location.pathname + location.search;
            c != d && a.a.shouldTrackUrlChange.call(a, d, c) && (a.c = d, a.b.set({ page: d, title: document.title }), (b || a.a.trackReplaceState) && a.b.send("pageview", z({ transport: "beacon" }, a.a.fieldsObj, a.b, a.a.hitFilter)))
        }, 0)
    }
    g.shouldTrackUrlChange = function(a, b) { return !(!a || !b) };
    g.remove = function() {
        y(history, "pushState", this.H);
        y(history, "replaceState", this.I);
        window.removeEventListener("popstate", this.C)
    };
    G("urlChangeTracker", Ya);
})();
//# sourceMappingURL=autotrack.js.map

function communityArtwork() {

    // Open Mobile Menu
    $(document).on('touchstart click', '.community-artwork-container', function() {
        $(this).toggleClass('show-info');
    });

}

// After DOM elements are loaded
$(document).ready(function() {
    communityArtwork();
});


// Floating Dust Particles
$.fn.extend({
    dustParticles: function(uniqueID, particlesNumber, opacity, red, green, blue) {
        return this.each(function() {
            //Generate a 'canvas' with size of element selected from the DOM .
            var width = $(this).width();
            var height = $(this).height();
            var canvas = document.createElement('canvas');
            canvas.id = uniqueID;
            $(this).append(canvas);
            //Generate the context of canvas
            var ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            var particles = [];
            var particleLimit = particlesNumber;
            //We create our funny particles !
            for (var i = particleLimit; i--;) {
                particles.push(new particle());
            }

            //Function generating the object particles , having size , radio, opacity, initial position and color.
            function particle() {
                this.speed = {
                    x: Math.random() * 2 - 0.5,
                    y: Math.random() * 2 - 0.5
                };
                this.radius = Math.random() * (10 - 1) + 1;
                //console.log(this.radius)
                this.opacity = opacity / this.radius;
                this.r = red;
                this.g = green;
                this.b = blue;
                this.x = Math.random() * (canvas.width - 0) + 0;
                this.y = Math.random() * (canvas.height - 0) + 0;
                this.color = this.color = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.opacity + ')';
            }

            function live() {
                //We repainted the canvas to create the sensation of movement.
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(function(element, index) {
                    ctx.beginPath();
                    var gradient = ctx.createRadialGradient(element.x, element.y, 0, element.x, element.y, element.radius);
                    gradient.addColorStop(1, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', 0)');
                    gradient.addColorStop(0.5, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', ' + (element.opacity / 2) + ')');
                    gradient.addColorStop(0, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', ' + element.opacity + ')');
                    ctx.fillStyle = gradient;
                    ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2, true);
                    ctx.fill();
                    //New position of particles
                    element.x += element.speed.x;
                    element.y += element.speed.y;
                    //We avoid the particles are beyond our territory!
                    if (element.x < -50) element.x = canvas.width + 50;
                    if (element.y < -50) element.y = canvas.height + 50;
                    if (element.x > canvas.width + 50) element.x = -50;
                    if (element.y > canvas.height + 50) element.y = -50;
                });
            }
            setInterval(live, 33);
        });
    }
});


// After DOM elements are loaded
$(document).ready(function() {

    var browserIsMS = false;
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        browserIsMS = true;
    }

    // do not show in IE and Edge
    if ($('body').width() >= 1200 && browserIsMS != true) {

        // scene 05
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-05');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-05 .background').dustParticles('dustParticles-scene-05', 200, 2, 255, 255, 0);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-05').remove();
            },
            bounds: 25,
            reappear: true
        });

        // scene 04
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-04');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-04 .background').dustParticles('dustParticles-scene-04', 200, 2, 255, 255, 0);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-04').remove();
            },
            bounds: 25,
            reappear: true
        });

        // scene 06
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-06');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-06 .background').dustParticles('dustParticles-scene-06', 200, 2, 215, 215, 255);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-06').remove();
            },
            bounds: 25,
            reappear: true
        });

    }

    // show it it IE and Edge
    if ($('body').width() >= 1200) {
        // scene 01
        $('.scene-01 .background').dustParticles('dustParticles-scene-01', 200, 2, 0, 255, 128);
    }


});



function heroVideo() {

    // Open Mobile Menu
    $(document).on('touchstart click', '#hero-play-btn', function() {

        $('#hero-play-container').fadeOut(500, 'swing', function() {
            // do something after fadeOut completed
            $('#hero-video').fadeIn(500, 'swing', function() {
                // after fadeIn complete add autoplay to youtube video
                $('#hero-video iframe')[0].src += "&autoplay=1";
            });
        });


    });


}


// After DOM elements are loaded
$(document).ready(function() {
    heroVideo();
});





// After DOM elements are loaded
$(document).ready(function() {
    //var myScroll = new IScroll('body');
});

/* eslint-disable */



function mediaCarouselScreenshots() {

    // initiate slick carousel screenshots display
    $('#media-carousel-screenshots-display').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#media-carousel-screenshots-nav'
    });

    // initiate slick carousel screenshots nav
    $('#media-carousel-screenshots-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#media-carousel-screenshots-display',
        dots: false,
        focusOnSelect: true,
        waitForAnimate: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        arrows: true,
        nextArrow: '<span class="nav-arrow nav-arrow-next icon-right-ori"></span>',
        prevArrow: '<span class="nav-arrow nav-arrow-prev icon-left-ori"></span>',
        responsive: [{
            breakpoint: 1248,
            settings: {
                lazyLoad: 'progressive',
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
        }]
    });

}


$(document).ready(function() {
    mediaCarouselScreenshots();
});



/* eslint-enable */
/* eslint-disable */


function mediaCarouselVideos() {

    // initiate slick carousel videos display
    $('#media-carousel-videos-display').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#media-carousel-videos-nav'
    });

    // initiate slick carousel videos nav
    $('#media-carousel-videos-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#media-carousel-videos-display',
        dots: false,
        focusOnSelect: true,
        waitForAnimate: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        arrows: true,
        nextArrow: '<span class="nav-arrow nav-arrow-next icon-right-ori"></span>',
        prevArrow: '<span class="nav-arrow nav-arrow-prev icon-left-ori"></span>',
        responsive: [{
            breakpoint: 1248,
            settings: {
                lazyLoad: 'progressive',
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
        }]
    });



    // make sure the video stops before next slide
    // do this before the slide changes
    $('#media-carousel-videos-display').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var videoCarouselDisplayCurrentiFrameSrc = $('#media-carousel-videos-display  .slick-current iframe').attr('src');
        $('#media-carousel-videos-display  .slick-current iframe').attr('src', 'none').attr('src', videoCarouselDisplayCurrentiFrameSrc);
    });

}

$(document).ready(function() {
    mediaCarouselVideos();
});





/* eslint-enable */
/* eslint-disable */

function mediaCarouselWallpapers() {

    // initiate slick carousel wallpapers display
    $('#media-carousel-wallpapers-display').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#media-carousel-wallpapers-nav'
    });

    // initiate slick carousel wallpapers nav
    $('#media-carousel-wallpapers-nav').slick({
        lazyLoad: 'progressive',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#media-carousel-wallpapers-display',
        dots: false,
        focusOnSelect: true,
        waitForAnimate: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        arrows: true,
        nextArrow: '<span class="nav-arrow nav-arrow-next icon-right-ori"></span>',
        prevArrow: '<span class="nav-arrow nav-arrow-prev icon-left-ori"></span>',
        responsive: [{
            breakpoint: 1248,
            settings: {
                lazyLoad: 'progressive',
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
        }]
    });






    // open or close download overlay
    // touch or click event open or close the download overlay
    $(document).on('touchstart click', 'span.icon-download, span.icon-close', function() {
        //console.log('triggered download-btn');

        var theParentElement = $(this).parent().get(0).tagName;
        // fade in or out the Download element(s)...
        $(theParentElement + ' .wallpaper-download').fadeToggle();
        // ...then, fade in or out the close button...
        $(theParentElement + ' span.icon-close').fadeToggle();
        // ...and fade out or in the download button
        $(theParentElement + ' span.icon-download').fadeToggle();

    });


    // make sure all download containers are closed before next slide
    // do this before the slide changes
    $('#media-carousel-wallpapers-display').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // hide the wallpaper download overlays...
        $('#media-wallpapers__container  .wallpaper-download').css('display', 'none');
        // ...and the close button icons...
        $('#media-wallpapers__container   span.icon-close').css('display', 'none');
        // ...then, show the download buttons again.
        $('#media-carousel-wallpapers-nav span.icon-download').css('display', 'inline-block');
    });

}


$(document).ready(function() {
    mediaCarouselWallpapers();
});





/* eslint-enable */

$(document).ready(function($) {
    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return filter.test(sEmail);
    } // end validateEmail function 

    $("#subscribe-form").submit(function(e) {

        e.preventDefault();
        var t = $(this);
        var form_message = $(".newsletter-message");
        var button = $("#subscribe-form button");
        var reason = '';

        if (button.hasClass('disabled')) {
            return false;
        }
        form_message.hide();
        button.addClass('disabled');

        var data = {
            action: 'sendgrid_subscribe',
            name: $('#name', t).val(),
            email: $('#email', t).val(),
            country: 'United States'
        };
        //validation
        if (!validateEmail(data.email) || !data.name.length) {
            reason = 'Please fill out all fields!';
            form_message.removeClass('success').addClass('fail');
            button.removeClass('disabled');
        } else { //ajax_object.url
            $.post('/wp-admin/admin-ajax.php', data,
                function(res) {
                    if (res && res.success) {
                        // success
                        form_message.removeClass('fail').addClass('success');
                        reason = 'Thank You for Signing Up!';
                        $('#name', t).val('');
                        $('#email', t).val('');
                    } else {
                        //alert('You Have Failed! Else statement has fired for res.reason: ' + res.reason + '.');
                        switch (res.reason) {
                            case 'invalid email':
                            case 'invalid name':
                            case 'invalid country':
                                //validation error
                                form_message.removeClass('success').addClass('fail');
                                button.removeClass('disabled');
                                reason = 'Please fill out all required fields.';
                                break;
                            case 'failed to welcome':
                                form_message.removeClass('success').addClass('fail');
                                button.removeClass('disabled');
                                reason = 'An error occurred, subscription successful but welcome email did not send.';
                                break;
                            case 'failed to add':
                                form_message.removeClass('success').addClass('fail');
                                button.removeClass('disabled');
                                reason = 'An error occurred, unable to subscribe. Please try again.';
                                break;
                            case 'undefined':
                                console.log('Case undefined. Houston, we have a problem.');
                                break;
                        }
                    }
                    form_message.html(reason);
                }, 'json');
        }
        form_message.html(reason);
        form_message.show();
    });
});





// get the current active menu item and add an .active class to it
function bootstrapMenuDesktop() {

    // get the current active menu item and add an .active class to it
    $('nav#ori-main-menu.desktop ul li.menu-item-object-page').each(function() {
        var theMenuItemName = $(this).text();
        var theMenuItemNameClass = 'menu-item-' + theMenuItemName.replace(/\W+/g, '-').toLowerCase();
        $(this).addClass(theMenuItemNameClass);
    }); // end .each function
    $('nav#ori-main-menu.desktop .current-menu-item').addClass('active');
    $('nav#ori-main-menu.desktop .current_page_item').addClass('active');

}

jQuery.rnd = function(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

function cloudy() {
    // add the div container to house menu particles animation
    $('nav#ori-main-menu.desktop ul li').append('<div></div>');
    // animate it
    $.each($("nav#ori-main-menu.desktop ul li div"), function() {
        for (var i = 20; i--;) {
            var size = ($.rnd(20, 60) / 2);
            var rot = $.rnd(0, 360);
            $(this).append('<span class="particle" style="top:' + $.rnd(-10, 40) + '%; left:' + $.rnd(50, 120) + '%;width:' + (size * 2) + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 10)) + 's;transform:rotate(' + rot + 'deg)"></span>');
        }
    });
}



function oriMainMenuDesktopAnimation() {
    // start menu particles animation
    cloudy();
}

function oriMainMenuDesktop() {

    // check if we are in the parallax zone
    if ($('body').width() > 1247) {


        ///////////////////////// POLITE SCROLL INTO PLACE IF < 100VH ///////////////////
        window.asTimer = null;
        window.isPolite = 1;
        if ($('body').width() < $('body').height() || ($('body').width() >= $('body').height() && $('body').height() > 575)) {
            $(window).on('mousemove', function() { politeScroll(); });
            $(window).on('mousewheel DOMMouseScroll', function() { politeScroll(); });
            $(window).on('touchmove', function() { politeScroll(); });
        }

        function politeScroll() {
            window.curTop = $(window).scrollTop();

            // gasp! a hitchiker!
            // show the little logo if scrolling the page
            if (window.curTop > 0 && !$('nav .lillogo').hasClass('scrolled')) {
                $('nav .lillogo').addClass('scrolled');
            } else if (window.curTop == 0) {
                $('nav .lillogo').removeClass('scrolled');
            }


            if (window.isPolite == 1) {
                clearTimeout(window.asTimer);
                window.asTimer = setTimeout(function() {
                    var _top = $(window).scrollTop();
                    if (window.curTop == _top) {
                        // console.log('firing!');
                        $('.polite').each(function() {
                            var $this = $(this);
                            var boxHeight = this.offsetHeight;
                            var boxTop = this.offsetTop;
                            var winHeight = window.innerHeight;
                            if (_top < boxTop - (winHeight * 0.5) || _top > boxTop + boxHeight - (winHeight * 0.5)) return;

                            if (_top > (boxTop + (boxHeight * 0.5) - (winHeight * 0.5) * 1.1) && _top < (boxTop + (boxHeight * 0.5) - (winHeight * 0.5) * 0.9)) return false;

                            if (_top > boxTop - (winHeight * 0.5) && _top < boxTop + boxHeight - (winHeight * 0.5) && winHeight > $(this).children('.inside').height()) {
                                // console.log(_top > boxTop-(winHeight*0.5) && _top < boxTop+boxHeight+(winHeight*0.5));
                                window.isPolite = 0;
                                $('body').stop().animate({ scrollTop: (boxTop + (boxHeight * 0.5) - (winHeight * 0.5)) }, 1000, function() {
                                    setTimeout(function() {
                                        window.isPolite = 1;
                                    }, 2000);
                                });
                                return false;
                            }
                        });
                    }
                }, 2000);
            }
        }


    }

}



// After DOM elements are loaded
$(document).ready(function() {
    bootstrapMenuDesktop();
    oriMainMenuDesktop();
    oriMainMenuDesktopAnimation();
});


function oriMainMenuMobile() {

    var oriMainMenuMobileAnimationSpeed = 500;

    // Open Mobile Menu
    $(document).on('touchstart click', 'span#main-menu-open-btn', function() {

        $('nav#ori-main-menu-mobile-flyout').animate({
            right: '0'
        }, oriMainMenuMobileAnimationSpeed, 'swing', function() {
            // do somthing after animation finished
        });

        $('div#ori-main-menu-mobile-overlay').fadeIn(oriMainMenuMobileAnimationSpeed, function() {
            // do somthing after fadeIn complete
        });
    });

    // Close Mobile Menu
    $(document).on('touchstart click', 'span#main-menu-close-btn, div#ori-main-menu-mobile-overlay', function() {

        $('nav#ori-main-menu-mobile-flyout').animate({
            right: '-263px'
        }, oriMainMenuMobileAnimationSpeed, 'swing', function() {
            // do somthing after animation finished
        });

        $('div#ori-main-menu-mobile-overlay').fadeOut(oriMainMenuMobileAnimationSpeed, function() {
            // do somthing after fadeIn complete
        });
    });


}



// After DOM elements are loaded
$(document).ready(function() {
    oriMainMenuMobile();
});


/* detect touch */
if ("ontouchstart" in window) {
    document.documentElement.className = document.documentElement.className + " touch";
}
//if(!$("html").hasClass("touch") && $(window).width() > 1247){
if ($(window).width() > 1247) {
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}

/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix() {
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i) {
        if ($(this).innerHeight() > h) {
            $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}


$(window).resize(function() {
    if ($(window).width() > 1247) {
        fullscreenFix();
    }
});
if ($(window).width() > 1247) {
    fullscreenFix();
}

/* resize background images */
function backgroundResize() {
    var windowH = $(window).height();
    $(".background").each(function(i) {
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if (contW > imgW) {
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}

$(window).resize(function() {
    if ($(window).width() > 1247) {
        backgroundResize();
    }
});
$(window).focus(function() {
    if ($(window).width() > 1247) {
        backgroundResize();
    }
});
if ($(window).width() > 1247) {
    backgroundResize();
}

/* set parallax background-position */
function parallaxPosition(e) {
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i) {
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        // only when in range
        if (bottomWindow > top && topWindow < bottom) {
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = -imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
//if(!$("html").hasClass("touch") && $(window).width() > 1247){
if ($(window).width() > 1247) {
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}



// fade in testmonials as they enter viewport
(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);


$(window).scroll(function(event) {

    $(".monial .relative_container").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});








// After DOM elements are loaded
// $(document).ready(function(){
//     $(document).smoothWheel();
// });


$(function() {

    var $window = $(window);
    var scrollTime = 0.5;
    var scrollDistance = 400;

    $window.on("mousewheel DOMMouseScroll", function(event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: { y: finalScroll, autoKill: true },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });
});

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f }
            var l = n[o] = { exports: {} };
            t[o][0].call(l.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; };
        }(); /* eslint-disable */


        var _js = require('js.cookie');

        var _js2 = _interopRequireDefault(_js);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var ReCoreTelemetry = function() {
            function ReCoreTelemetry() {
                _classCallCheck(this, ReCoreTelemetry);

                this.get_cookie_consent();
            }

            _createClass(ReCoreTelemetry, [{
                key: 'addTelemetryTag',
                value: function addTelemetryTag() {
                    console.log('add telemetry tag');
                    $('body').css('paddingTop', 0);
                    $('#ori-main-menu').css('top', 0);
                    var date = new Date();
                    _js2.default.set('MSCC_Consent_req', 'false', { expires: 30 }, '/');
                    _js2.default.set('MSCC_Consent_date', date.getTime(), { expires: 30 }, '/');
                }
            }, {
                key: 'get_cookie_consent',
                value: function get_cookie_consent() {
                    //console.log('checking consent req');
                    var self = this;
                    if (!_js2.default.get('MSCC_Consent_req') || _js2.default.get('MSCC_Consent_req') != "false") {
                        //let domain = 'localhost:3000';
                        var domain = 'orithegame.com';
                        //let domain = 'azurewebsites.net'
                        var service_url = 'https://services.microsoftstudios.com/api/mscc?domain=' + domain + '&sitename=Ori';
                        self.ajaxGet({
                            url: service_url
                        }).done(function(data, textStatus, jqXHR) {
                            //console.log('consent req: ' + data.isConsentRequired); 
                            if (data.isConsentRequired == true) {

                                $('#mscc_placeholder').replaceWith(data.markup);

                                var msccStyle = document.createElement('link');
                                msccStyle.type = 'text/css';
                                msccStyle.rel = 'stylesheet';
                                msccStyle.href = data.css[0];
                                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(msccStyle);

                                //let scriptUrl = '/wp-content/themes/ori/assets/js/thirdparty/mscc.js';
                                var scriptUrl = data.js[0];
                                self.appendScript(scriptUrl, function() {
                                    //console.log('check mscc: ' + typeof mscc);
                                    if (typeof mscc !== 'undefined') {
                                        mscc.on('consent', self.addTelemetryTag);
                                    }
                                    $('body').css('paddingTop', $('#msccBanner').css('height'));
                                    $('#ori-main-menu').css('top', $('#msccBanner').css('height'));
                                });
                            } else {
                                self.addTelemetryTag();
                                self.loadScripts();
                            }
                        }).fail(function(jqxhr, textStatus, error) {
                            var err = textStatus + ", " + error;
                            console.log("Request Failed: " + err);
                        });
                    } else {
                        self.loadScripts();
                    }
                }
            }, {
                key: 'appendScript',
                value: function appendScript(url, callback) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    if (script.readyState) {
                        //IE
                        script.onreadystatechange = function() {
                            if (script.readyState === "loaded" || script.readyState === "complete") {
                                script.onreadystatechange = null;
                                callback();
                            }
                        };
                    } else {
                        //Others
                        script.onload = function() {
                            callback();
                        };
                    }

                    script.src = url;
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                }
            }, {
                key: 'loadScripts',
                value: function loadScripts() {
                    (function(i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function() {
                            (i[r].q = i[r].q || []).push(arguments);
                        }, i[r].l = 1 * new Date();
                        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

                    ga('create', 'UA-100764914-1', 'auto');
                    ga('require', 'autotrack');
                    ga('send', 'pageview');
                }
            }, {
                key: 'ajaxGet',
                value: function ajaxGet(options) {
                    var ajaxObj = Object.assign({
                        type: 'GET',
                        url: null,
                        data: null,
                        dataType: 'json',
                        xhrFields: {
                            withCredentials: true
                        }
                    }, options);

                    if (!ajaxObj.url) {
                        return;
                    }

                    return $.ajax(ajaxObj);
                }
            }]);

            return ReCoreTelemetry;
        }();

        exports.default = ReCoreTelemetry;

        $(document).ready(function() {
            new ReCoreTelemetry();
        });
        /* eslint-enable */

    }, { "js.cookie": 2 }],
    2: [function(require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Cookie = {

            get: function get(name) {
                var match = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
                var value = match ? unescape(match[2]) : match;
                try {
                    value = JSON.parse(value);
                } catch (e) {}
                return value;
            },

            set: function set(name, value) {
                var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                var cookie = name + "=" + escape(JSON.stringify(value)) + "; path=" + (options.path ? escape(options.path) : "/");
                if (options.domain) cookie += "; domain=" + escape(options.domain);
                if (options.secure) cookie += "; secure";
                if (options.expires) cookie += "; expires=" + options.expires;
                if (options.live) cookie += "; expires=" + expiresFromLive(options.live);
                document.cookie = cookie;
                return value;
            },

            remove: function remove(name) {
                var value = this.get(name);
                this.set(name, value, { live: -1 });
                return value;
            }

        };

        function expiresFromLive(live) {
            var date = new Date();
            date.setDate(date.getDate() + parseInt(live));
            date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
            return date.toUTCString();
        }

        exports["default"] = Cookie;
        module.exports = exports["default"];

    }, {}]
}, {}, [1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lczYvVGVsZW1ldHJ5LmpzIiwibm9kZV9tb2R1bGVzL2pzLmNvb2tpZS9kc3QvQ29va2llLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQzs7O0FBQ0Q7Ozs7Ozs7O0lBQ3FCLGU7QUFDbkIsNkJBQWM7QUFBQTs7QUFDWixTQUFLLGtCQUFMO0FBQ0Q7Ozs7c0NBQ2lCO0FBQ2hCLGNBQVEsR0FBUixDQUFZLG1CQUFaO0FBQ0EsUUFBRSxNQUFGLEVBQVUsR0FBVixDQUFjLFlBQWQsRUFBNEIsQ0FBNUI7QUFDQSxRQUFFLGdCQUFGLEVBQW9CLEdBQXBCLENBQXdCLEtBQXhCLEVBQStCLENBQS9CO0FBQ0EsVUFBSSxPQUFPLElBQUksSUFBSixFQUFYO0FBQ0EsbUJBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWdDLE9BQWhDLEVBQXlDLEVBQUUsU0FBUyxFQUFYLEVBQXpDLEVBQTBELEdBQTFEO0FBQ0EsbUJBQVEsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUssT0FBTCxFQUFqQyxFQUFpRCxFQUFFLFNBQVMsRUFBWCxFQUFqRCxFQUFrRSxHQUFsRTtBQUNEOzs7eUNBQ29CO0FBQ25CO0FBQ0EsVUFBSSxPQUFPLElBQVg7QUFDQSxVQUFLLENBQUMsYUFBUSxHQUFSLENBQVksa0JBQVosQ0FBRCxJQUFvQyxhQUFRLEdBQVIsQ0FBWSxrQkFBWixLQUFtQyxPQUE1RSxFQUFzRjtBQUNwRjtBQUNBLFlBQUksU0FBUyxnQkFBYjtBQUNBO0FBQ0EsWUFBSSxjQUFjLDJEQUF5RCxNQUF6RCxHQUFnRSxlQUFsRjtBQUNBLGFBQUssT0FBTCxDQUFhO0FBQ1QsZUFBSztBQURJLFNBQWIsRUFHRyxJQUhILENBR1EsVUFBVSxJQUFWLEVBQWdCLFVBQWhCLEVBQTRCLEtBQTVCLEVBQWtDO0FBQ3RDO0FBQ0EsY0FBSyxLQUFLLGlCQUFMLElBQTBCLElBQS9CLEVBQXNDOztBQUVwQyxjQUFFLG1CQUFGLEVBQXVCLFdBQXZCLENBQW1DLEtBQUssTUFBeEM7O0FBRUEsZ0JBQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQSxzQkFBVSxJQUFWLEdBQWlCLFVBQWpCO0FBQ0Esc0JBQVUsR0FBVixHQUFnQixZQUFoQjtBQUNBLHNCQUFVLElBQVYsR0FBaUIsS0FBSyxHQUFMLENBQVMsQ0FBVCxDQUFqQjtBQUNBLGFBQUMsU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxLQUNDLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FERixFQUM0QyxXQUQ1QyxDQUN3RCxTQUR4RDs7QUFHQTtBQUNBLGdCQUFJLFlBQVksS0FBSyxFQUFMLENBQVEsQ0FBUixDQUFoQjtBQUNBLGlCQUFLLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsWUFBVztBQUN0QztBQUNBLGtCQUFJLE9BQU8sSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUFFLHFCQUFLLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLEtBQUssZUFBeEI7QUFBMkM7QUFDOUUsZ0JBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYyxZQUFkLEVBQTRCLEVBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixRQUFyQixDQUE1QjtBQUNBLGdCQUFFLGdCQUFGLEVBQW9CLEdBQXBCLENBQXdCLEtBQXhCLEVBQStCLEVBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixRQUFyQixDQUEvQjtBQUNELGFBTEQ7QUFPRCxXQXBCRCxNQW9CTztBQUNMLGlCQUFLLGVBQUw7QUFDQSxpQkFBSyxXQUFMO0FBQ0Q7QUFDRixTQTdCSCxFQThCRyxJQTlCSCxDQThCUSxVQUFVLEtBQVYsRUFBaUIsVUFBakIsRUFBNkIsS0FBN0IsRUFBcUM7QUFDekMsY0FBSSxNQUFNLGFBQWEsSUFBYixHQUFvQixLQUE5QjtBQUNBLGtCQUFRLEdBQVIsQ0FBYSxxQkFBcUIsR0FBbEM7QUFDSCxTQWpDRDtBQWtDRCxPQXZDRCxNQXVDTztBQUNMLGFBQUssV0FBTDtBQUNEO0FBQ0Y7OztpQ0FDYSxHLEVBQUssUSxFQUFXO0FBQzVCLFVBQUksU0FBUyxTQUFTLGFBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLGFBQU8sSUFBUCxHQUFjLGlCQUFkO0FBQ0EsVUFBRyxPQUFPLFVBQVYsRUFBc0I7QUFBRztBQUN2QixlQUFPLGtCQUFQLEdBQTRCLFlBQVc7QUFDckMsY0FBSyxPQUFPLFVBQVAsS0FBc0IsUUFBdEIsSUFBa0MsT0FBTyxVQUFQLEtBQXNCLFVBQTdELEVBQTBFO0FBQ3hFLG1CQUFPLGtCQUFQLEdBQTRCLElBQTVCO0FBQ0E7QUFDRDtBQUNGLFNBTEQ7QUFNRCxPQVBELE1BT087QUFBRztBQUNSLGVBQU8sTUFBUCxHQUFnQixZQUFXO0FBQ3pCO0FBQ0QsU0FGRDtBQUdEOztBQUVELGFBQU8sR0FBUCxHQUFhLEdBQWI7QUFDQSxPQUFDLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsS0FDRyxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBREosRUFDOEMsV0FEOUMsQ0FDMEQsTUFEMUQ7QUFFRDs7O2tDQUNhO0FBQ1osT0FBQyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUI7QUFBQyxVQUFFLHVCQUFGLElBQTJCLENBQTNCLENBQTZCLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixLQUFNLFlBQVU7QUFDM0UsV0FBQyxFQUFFLENBQUYsRUFBSyxDQUFMLEdBQU8sRUFBRSxDQUFGLEVBQUssQ0FBTCxJQUFRLEVBQWhCLEVBQW9CLElBQXBCLENBQXlCLFNBQXpCO0FBQW9DLFNBRGtCLEVBQ2pCLEVBQUUsQ0FBRixFQUFLLENBQUwsR0FBTyxJQUFFLElBQUksSUFBSixFQURRLENBQ0csSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBRixFQUN6RCxJQUFFLEVBQUUsb0JBQUYsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FEdUQsQ0FDMUIsRUFBRSxLQUFGLEdBQVEsQ0FBUixDQUFVLEVBQUUsR0FBRixHQUFNLENBQU4sQ0FBUSxFQUFFLFVBQUYsQ0FBYSxZQUFiLENBQTBCLENBQTFCLEVBQTRCLENBQTVCO0FBQ2hELE9BSEQsRUFHRyxNQUhILEVBR1UsUUFIVixFQUdtQixRQUhuQixFQUc0QiwrQ0FINUIsRUFHNEUsSUFINUU7O0FBS0EsU0FBRyxRQUFILEVBQWEsZ0JBQWIsRUFBK0IsTUFBL0I7QUFDQSxTQUFHLFNBQUgsRUFBYyxXQUFkO0FBQ0EsU0FBRyxNQUFILEVBQVcsVUFBWDtBQUNEOzs7NEJBQ08sTyxFQUFTO0FBQ2YsVUFBSSxVQUFVLE9BQU8sTUFBUCxDQUFjO0FBQ3hCLGNBQU0sS0FEa0I7QUFFeEIsYUFBSyxJQUZtQjtBQUd4QixjQUFNLElBSGtCO0FBSXhCLGtCQUFVLE1BSmM7QUFLeEIsbUJBQVc7QUFDUCwyQkFBaUI7QUFEVjtBQUxhLE9BQWQsRUFRWCxPQVJXLENBQWQ7O0FBVUEsVUFBSSxDQUFDLFFBQVEsR0FBYixFQUFrQjtBQUNkO0FBQ0g7O0FBRUQsYUFBTyxFQUFFLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDRDs7Ozs7O2tCQXhHa0IsZTs7QUEyR3JCLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVztBQUMzQixNQUFJLGVBQUo7QUFDRCxDQUZEO0FBR0E7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCLvu78vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy5jb29raWUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZUNvcmVUZWxlbWV0cnkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nZXRfY29va2llX2NvbnNlbnQoKTsgIFxyXG4gIH1cclxuICBhZGRUZWxlbWV0cnlUYWcoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWRkIHRlbGVtZXRyeSB0YWcnKTtcclxuICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmdUb3AnLCAwKTtcclxuICAgICQoJyNvcmktbWFpbi1tZW51JykuY3NzKCd0b3AnLCAwKTtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIENvb2tpZXMuc2V0KCdNU0NDX0NvbnNlbnRfcmVxJywgJ2ZhbHNlJywgeyBleHBpcmVzOiAzMCB9LCAnLycpO1xyXG4gICAgQ29va2llcy5zZXQoJ01TQ0NfQ29uc2VudF9kYXRlJywgZGF0ZS5nZXRUaW1lKCksIHsgZXhwaXJlczogMzAgfSwgJy8nKTtcclxuICB9XHJcbiAgZ2V0X2Nvb2tpZV9jb25zZW50KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnY2hlY2tpbmcgY29uc2VudCByZXEnKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICggIUNvb2tpZXMuZ2V0KCdNU0NDX0NvbnNlbnRfcmVxJykgfHwgQ29va2llcy5nZXQoJ01TQ0NfQ29uc2VudF9yZXEnKSAhPSBcImZhbHNlXCIgKSB7ICAgIFxyXG4gICAgICAvL2xldCBkb21haW4gPSAnbG9jYWxob3N0OjMwMDAnO1xyXG4gICAgICBsZXQgZG9tYWluID0gJ29yaXRoZWdhbWUuY29tJztcclxuICAgICAgLy9sZXQgZG9tYWluID0gJ2F6dXJld2Vic2l0ZXMubmV0J1xyXG4gICAgICBsZXQgc2VydmljZV91cmwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5taWNyb3NvZnRzdHVkaW9zLmNvbS9hcGkvbXNjYz9kb21haW49Jytkb21haW4rJyZzaXRlbmFtZT1PcmknO1xyXG4gICAgICBzZWxmLmFqYXhHZXQoe1xyXG4gICAgICAgICAgdXJsOiBzZXJ2aWNlX3VybCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKCBkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUil7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb25zZW50IHJlcTogJyArIGRhdGEuaXNDb25zZW50UmVxdWlyZWQpOyBcclxuICAgICAgICAgIGlmICggZGF0YS5pc0NvbnNlbnRSZXF1aXJlZCA9PSB0cnVlICkgeyAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkKCcjbXNjY19wbGFjZWhvbGRlcicpLnJlcGxhY2VXaXRoKGRhdGEubWFya3VwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtc2NjU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgIG1zY2NTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgICAgbXNjY1N0eWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgICAgICAgbXNjY1N0eWxlLmhyZWYgPSBkYXRhLmNzc1swXTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHxcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5hcHBlbmRDaGlsZChtc2NjU3R5bGUpOyBcclxuXHJcbiAgICAgICAgICAgIC8vbGV0IHNjcmlwdFVybCA9ICcvd3AtY29udGVudC90aGVtZXMvb3JpL2Fzc2V0cy9qcy90aGlyZHBhcnR5L21zY2MuanMnO1xyXG4gICAgICAgICAgICBsZXQgc2NyaXB0VXJsID0gZGF0YS5qc1swXTtcclxuICAgICAgICAgICAgc2VsZi5hcHBlbmRTY3JpcHQoc2NyaXB0VXJsLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGVjayBtc2NjOiAnICsgdHlwZW9mIG1zY2MpO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNjYyAhPT0gJ3VuZGVmaW5lZCcpIHsgbXNjYy5vbignY29uc2VudCcsIHNlbGYuYWRkVGVsZW1ldHJ5VGFnKTsgfVxyXG4gICAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmdUb3AnLCAkKCcjbXNjY0Jhbm5lcicpLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICAgICAgICAgICQoJyNvcmktbWFpbi1tZW51JykuY3NzKCd0b3AnLCAkKCcjbXNjY0Jhbm5lcicpLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5hZGRUZWxlbWV0cnlUYWcoKTtcclxuICAgICAgICAgICAgc2VsZi5sb2FkU2NyaXB0cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24oIGpxeGhyLCB0ZXh0U3RhdHVzLCBlcnJvciApIHtcclxuICAgICAgICAgIHZhciBlcnIgPSB0ZXh0U3RhdHVzICsgXCIsIFwiICsgZXJyb3I7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyggXCJSZXF1ZXN0IEZhaWxlZDogXCIgKyBlcnIgKTtcclxuICAgICAgfSk7ICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLmxvYWRTY3JpcHRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGVuZFNjcmlwdCggdXJsLCBjYWxsYmFjayApIHtcclxuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XHJcbiAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBpZihzY3JpcHQucmVhZHlTdGF0ZSkgeyAgLy9JRVxyXG4gICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCBzY3JpcHQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkZWRcIiB8fCBzY3JpcHQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiICkge1xyXG4gICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7ICAvL090aGVyc1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gIH1cclxuICBsb2FkU2NyaXB0cygpIHtcclxuICAgIChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcclxuICAgIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxyXG4gICAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxyXG4gICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xyXG5cclxuICAgIGdhKCdjcmVhdGUnLCAnVUEtMTAwNzY0OTE0LTEnLCAnYXV0bycpO1xyXG4gICAgZ2EoJ3JlcXVpcmUnLCAnYXV0b3RyYWNrJyk7XHJcbiAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG4gIH1cclxuICBhamF4R2V0KG9wdGlvbnMpIHtcclxuICAgIGxldCBhamF4T2JqID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiBudWxsLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoIWFqYXhPYmoudXJsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkLmFqYXgoYWpheE9iaik7XHJcbiAgfTtcclxuXHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgbmV3IFJlQ29yZVRlbGVtZXRyeSgpO1xyXG59KTtcclxuLyogZXNsaW50LWVuYWJsZSAqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBDb29raWUgPSB7XHJcblxyXG4gIGdldDogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcclxuICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChcIihefDspID9cIiArIG5hbWUgKyBcIj0oW147XSopKDt8JClcIik7XHJcbiAgICB2YXIgdmFsdWUgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzJdKSA6IG1hdGNoO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSxcclxuXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcclxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMl07XHJcblxyXG4gICAgdmFyIGNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpICsgXCI7IHBhdGg9XCIgKyAob3B0aW9ucy5wYXRoID8gZXNjYXBlKG9wdGlvbnMucGF0aCkgOiBcIi9cIik7XHJcbiAgICBpZiAob3B0aW9ucy5kb21haW4pIGNvb2tpZSArPSBcIjsgZG9tYWluPVwiICsgZXNjYXBlKG9wdGlvbnMuZG9tYWluKTtcclxuICAgIGlmIChvcHRpb25zLnNlY3VyZSkgY29va2llICs9IFwiOyBzZWN1cmVcIjtcclxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMpIGNvb2tpZSArPSBcIjsgZXhwaXJlcz1cIiArIG9wdGlvbnMuZXhwaXJlcztcclxuICAgIGlmIChvcHRpb25zLmxpdmUpIGNvb2tpZSArPSBcIjsgZXhwaXJlcz1cIiArIGV4cGlyZXNGcm9tTGl2ZShvcHRpb25zLmxpdmUpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gY29va2llO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KG5hbWUpO1xyXG4gICAgdGhpcy5zZXQobmFtZSwgdmFsdWUsIHsgbGl2ZTogLTEgfSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGV4cGlyZXNGcm9tTGl2ZShsaXZlKSB7XHJcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHBhcnNlSW50KGxpdmUpKTtcclxuICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG4gIHJldHVybiBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29va2llO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xyXG4iXX0=


// Testimonials

function testimonials_obf() {


    // go fetch testimonial slots for Ori Blind Forest
    var $testimonials = $('.monial.blind-forest');

    // if we have testimonials for Ori Blind Forest
    if ($testimonials.length) {

        // setup arrays to hold obf testimonial data
        var obf_text = [];
        var obf_author = [];

        // get testimonial data from the span set
        // where we temporarily stored the testimonials
        $('#testimonial-data span').each(function() {

            // there are obf and owotw game types
            // make sure we are filing away the correct ones for obf
            if ($(this).data('game') == 'obf') {
                // file them all away
                obf_text.push($(this).data('text'));
                obf_author.push($(this).data('author'));
            }

        });

        // insert obf testimonials
        var testimonial_count = 1;
        var testimonial_html = null;
        $('.monial.obf .relative_container').each(function() {

            // test to see if we have enough testimonial records
            if (testimonial_count > $testimonials.length) {
                // we have more testimonial slots that records
                // so reset counter and start from 1 again
                testimonial_count = 1;
            }

            // create the testimonial html
            testimonial_html = '<p><span class="leftquote">&#8220;</span>&nbsp;' + obf_text[testimonial_count - 1] + '<span class="rightquote">&#8220;</span></p>' +
                '<div class="author">&mdash; ' + obf_author[testimonial_count - 1] + '</div>';

            // empty anything in the slot and drop in the testimonial html
            $(this).empty().append(testimonial_html);

            // increment the counter
            testimonial_count++;

        });

        // all done so lets remove the temporary data placeholder from the DOM
        $('#testimonial-data').remove();

    }

}


// After DOM elements are loaded
$(document).ready(function() {
    testimonials_obf();
});