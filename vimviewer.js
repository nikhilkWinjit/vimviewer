var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var vim = function(exports, THREE2) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var THREE__namespace = /* @__PURE__ */ _interopNamespace(THREE2);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var isMergeableObject = function isMergeableObject2(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === "object";
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
  }
  var canUseSymbol = typeof Symbol === "function" && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
  }
  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function(key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;
  var lodash = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  (function(module, exports2) {
    (function() {
      var undefined$1;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && true && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined$1 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined$1;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined$1 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined$1 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined$1;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined$1 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined$1;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined$1;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined$1 : baseGet(object, path);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined$1;
          }
          while (++index < length) {
            var value = object == null ? undefined$1 : object[toKey(path[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined$1 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp;
        lodash2.clone = clone;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments;
        lodash2.isArray = isArray;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite;
        lodash2.isFunction = isFunction;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength;
        lodash2.isMap = isMap;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject;
        lodash2.isObjectLike = isObjectLike;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol;
        lodash2.isTypedArray = isTypedArray;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray;
        lodash2.stubFalse = stubFalse;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop;
        lodash2.now = now;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, function() {
          var source = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash2.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      };
      var _ = runInContext();
      if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(commonjsGlobal);
  })(lodash, lodash.exports);
  function transparencyIsValid(value) {
    return ["all", "opaqueOnly", "transparentOnly", "allAsOpaque"].includes(value);
  }
  function transparencyRequiresAlpha(mode) {
    return mode === "all" || mode === "transparentOnly";
  }
  function transparencyMatches(mode, transparent) {
    return mode === "allAsOpaque" || mode === "all" || !transparent && mode === "opaqueOnly" || transparent && mode === "transparentOnly";
  }
  function createFromInstances(g3d, instances) {
    const merger = MeshMerger.MergeInstances(g3d, instances, "all");
    return merger.toBufferGeometry();
  }
  function createFromMesh(g3d, mesh, useAlpha) {
    const colors = createVertexColors(g3d, mesh, useAlpha);
    return createBufferGeometryFromArrays(g3d.positions.subarray(g3d.getMeshVertexStart(mesh) * 3, g3d.getMeshVertexEnd(mesh) * 3), g3d.indices.subarray(g3d.getMeshIndexStart(mesh), g3d.getMeshIndexEnd(mesh)), colors, useAlpha ? 4 : 3);
  }
  function createVertexColors(g3d, mesh, useAlpha) {
    const result = new Float32Array(g3d.getMeshVertexCount(mesh) * (useAlpha ? 4 : 3));
    const subStart = g3d.getMeshSubmeshStart(mesh);
    const subEnd = g3d.getMeshSubmeshEnd(mesh);
    for (let submesh = subStart; submesh < subEnd; submesh++) {
      const color = g3d.getSubmeshColor(submesh);
      const start = g3d.getSubmeshIndexStart(submesh);
      const end = g3d.getSubmeshIndexEnd(submesh);
      let v = 0;
      for (let i = start; i < end; i++) {
        result[v++] = color[0];
        result[v++] = color[1];
        result[v++] = color[2];
        if (useAlpha)
          result[v++] = color[3];
      }
    }
    return result;
  }
  class MeshMerger {
    constructor(g3d, transparency, instances, meshes, indexCount, vertexCount) {
      __publicField(this, "g3d");
      __publicField(this, "colorSize");
      __publicField(this, "meshes");
      __publicField(this, "indices");
      __publicField(this, "vertices");
      __publicField(this, "colors");
      __publicField(this, "uvs");
      __publicField(this, "instances");
      this.g3d = g3d;
      this.colorSize = transparencyRequiresAlpha(transparency) ? 4 : 3;
      this.instances = instances;
      this.meshes = meshes;
      this.indices = new Uint32Array(indexCount);
      this.vertices = new Float32Array(vertexCount * this.g3d.positionArity);
      this.colors = new Float32Array(vertexCount * this.colorSize);
      this.uvs = new Float32Array(vertexCount * 2);
    }
    static MergeUniqueMeshes(g3d, transparency) {
      let vertexCount = 0;
      let indexCount = 0;
      const instances = [];
      const meshes = [];
      const meshCount = g3d.getMeshCount();
      for (let mesh = 0; mesh < meshCount; mesh++) {
        const meshInstances = g3d.meshInstances[mesh];
        if (!meshInstances || meshInstances.length !== 1)
          continue;
        if (!transparencyMatches(transparency, g3d.meshTransparent[mesh])) {
          continue;
        }
        vertexCount += g3d.getMeshVertexCount(mesh);
        indexCount += g3d.getMeshIndexCount(mesh);
        instances.push(meshInstances[0]);
        meshes.push(mesh);
      }
      return new MeshMerger(g3d, transparency, instances, meshes, indexCount, vertexCount);
    }
    static MergeInstances(g3d, instances, transparency) {
      let vertexCount = 0;
      let indexCount = 0;
      const instancesFiltered = [];
      const meshes = [];
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];
        const mesh = g3d.instanceMeshes[instance];
        if (mesh < 0)
          continue;
        if (!transparencyMatches(transparency, g3d.meshTransparent[mesh])) {
          continue;
        }
        vertexCount += g3d.getMeshVertexCount(mesh);
        indexCount += g3d.getMeshIndexCount(mesh);
        instancesFiltered.push(instance);
        meshes.push(mesh);
      }
      return new MeshMerger(g3d, transparency, instancesFiltered, meshes, indexCount, vertexCount);
    }
    merge() {
      let index = 0;
      let vertex = 0;
      let uv = 0;
      let offset = 0;
      const matrix = new THREE__namespace.Matrix4();
      const vector = new THREE__namespace.Vector3();
      for (let i = 0; i < this.instances.length; i++) {
        const mesh = this.meshes[i];
        const instance = this.instances[i];
        const indexStart = this.g3d.getMeshIndexStart(mesh);
        const indexEnd = this.g3d.getMeshIndexEnd(mesh);
        for (let i2 = indexStart; i2 < indexEnd; i2++) {
          this.indices[index++] = this.g3d.indices[i2] + offset;
        }
        const subStart = this.g3d.getMeshSubmeshStart(mesh);
        const subEnd = this.g3d.getMeshSubmeshEnd(mesh);
        for (let sub = subStart; sub < subEnd; sub++) {
          const startIndex = this.g3d.getSubmeshIndexStart(sub);
          const endIndex = this.g3d.getSubmeshIndexEnd(sub);
          const subColor = this.g3d.getSubmeshColor(sub);
          for (let i2 = startIndex; i2 < endIndex; i2++) {
            const v = (this.g3d.indices[i2] + offset) * this.colorSize;
            this.colors[v] = subColor[0];
            this.colors[v + 1] = subColor[1];
            this.colors[v + 2] = subColor[2];
            if (this.colorSize > 3) {
              this.colors[v + 3] = subColor[3];
            }
          }
        }
        getInstanceMatrix(this.g3d, instance, matrix);
        const vertexStart = this.g3d.getMeshVertexStart(mesh);
        const vertexEnd = this.g3d.getMeshVertexEnd(mesh);
        for (let p = vertexStart; p < vertexEnd; p++) {
          vector.fromArray(this.g3d.positions, p * this.g3d.positionArity);
          vector.applyMatrix4(matrix);
          vector.toArray(this.vertices, vertex);
          vertex += this.g3d.positionArity;
          this.uvs[uv++] = instance;
          this.uvs[uv++] = instance;
        }
        offset += vertexEnd - vertexStart;
      }
    }
    toBufferGeometry() {
      this.merge();
      const geometry = createBufferGeometryFromArrays(this.vertices, this.indices, this.colors, this.colorSize, this.uvs);
      return geometry;
    }
  }
  function createBufferGeometryFromArrays(vertices, indices, vertexColors = void 0, colorSize = 3, uvs = void 0) {
    const geometry = new THREE__namespace.BufferGeometry();
    geometry.setAttribute("position", new THREE__namespace.BufferAttribute(vertices, 3));
    geometry.setIndex(new THREE__namespace.Uint32BufferAttribute(indices, 1));
    if (vertexColors) {
      geometry.setAttribute("color", new THREE__namespace.BufferAttribute(vertexColors, colorSize));
      if (uvs) {
        geometry.setAttribute("uv", new THREE__namespace.Float32BufferAttribute(uvs, 2));
      }
    }
    return geometry;
  }
  function getInstanceMatrix(g3d, index, target = new THREE__namespace.Matrix4()) {
    const matrixAsArray = g3d.getInstanceTransform(index);
    target.fromArray(matrixAsArray);
    return target;
  }
  class VimSettings {
    constructor(options) {
      __publicField(this, "options");
      __publicField(this, "getOptions", () => lodash.exports.cloneDeep(this.options));
      __publicField(this, "getPosition", () => toVec(this.options.position));
      __publicField(this, "getRotation", () => toQuaternion(this.options.rotation));
      __publicField(this, "getScale", () => scalarToVec(this.options.scale));
      __publicField(this, "getMatrix", () => new THREE__namespace.Matrix4().compose(this.getPosition(), this.getRotation(), this.getScale()));
      __publicField(this, "getElementIdsFilter", () => lodash.exports.clone(this.options.elementIds));
      __publicField(this, "getTransparency", () => this.options.transparency);
      const fallback = {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 0.01,
        elementIds: void 0,
        transparency: "all"
      };
      this.options = options ? cjs(fallback, options, void 0) : fallback;
      this.options.transparency = transparencyIsValid(this.options.transparency) ? this.options.transparency : "all";
    }
  }
  class ViewerSettings {
    constructor(options) {
      __publicField(this, "options");
      __publicField(this, "getCanvasResizeDelay", () => this.options.canvas.resizeDelay);
      __publicField(this, "getCanvasId", () => this.options.canvas.id);
      __publicField(this, "getPlaneShow", () => this.options.plane.show);
      __publicField(this, "getPlaneColor", () => toRGBColor(this.options.plane.color));
      __publicField(this, "getPlaneTextureUrl", () => this.options.plane.texture);
      __publicField(this, "getPlaneOpacity", () => this.options.plane.opacity);
      __publicField(this, "getPlaneSize", () => this.options.plane.size);
      __publicField(this, "getSkylightColor", () => toHSLColor(this.options.skylight.skyColor));
      __publicField(this, "getSkylightGroundColor", () => toHSLColor(this.options.skylight.groundColor));
      __publicField(this, "getSkylightIntensity", () => this.options.skylight.intensity);
      __publicField(this, "getSunlightColor", () => toHSLColor(this.options.sunLight.color));
      __publicField(this, "getSunlightPosition", () => toVec(this.options.sunLight.position));
      __publicField(this, "getSunlightIntensity", () => this.options.sunLight.intensity);
      __publicField(this, "getCameraNear", () => this.options.camera.near);
      __publicField(this, "getCameraFar", () => this.options.camera.far);
      __publicField(this, "getCameraFov", () => this.options.camera.fov);
      __publicField(this, "getCameraZoom", () => this.options.camera.zoom);
      __publicField(this, "getCameraShowGizmo", () => this.options.camera.showGizmo);
      __publicField(this, "getCameraIsOrbit", () => this.options.camera.controls.orbit);
      __publicField(this, "getCameraMoveSpeed", () => this.options.camera.controls.moveSpeed);
      __publicField(this, "getCameraRotateSpeed", () => this.options.camera.controls.rotateSpeed);
      __publicField(this, "getCameraOrbitSpeed", () => this.options.camera.controls.orbitSpeed);
      __publicField(this, "getCameraReferenceVimSize", () => this.options.camera.controls.vimReferenceSize);
      const fallback = {
        canvas: {
          id: void 0,
          resizeDelay: 200
        },
        camera: {
          near: 0.01,
          far: 15e3,
          fov: 50,
          zoom: 1,
          controls: {
            orbit: true,
            vimReferenceSize: 1,
            rotateSpeed: 1,
            orbitSpeed: 1,
            moveSpeed: 1
          },
          showGizmo: true
        },
        plane: {
          show: true,
          texture: null,
          opacity: 1,
          color: { r: 255, g: 255, b: 255 },
          size: 3
        },
        skylight: {
          skyColor: { h: 0.6, s: 1, l: 0.6 },
          groundColor: { h: 0.095, s: 1, l: 0.75 },
          intensity: 0.6
        },
        sunLight: {
          position: { x: -47, y: 22, z: -45 },
          color: { h: 0.1, s: 1, l: 0.95 },
          intensity: 1
        }
      };
      this.options = options ? cjs(fallback, options, void 0) : fallback;
    }
  }
  function toRGBColor(c) {
    return new THREE__namespace.Color(c.r / 255, c.g / 255, c.b / 255);
  }
  function toHSLColor(obj) {
    return new THREE__namespace.Color().setHSL(obj.h, obj.s, obj.l);
  }
  function toVec(obj) {
    return new THREE__namespace.Vector3(obj.x, obj.y, obj.z);
  }
  function scalarToVec(x) {
    return new THREE__namespace.Vector3(x, x, x);
  }
  function toEuler(rot) {
    return new THREE__namespace.Euler(rot.x * Math.PI / 180, rot.y * Math.PI / 180, rot.z * Math.PI / 180);
  }
  function toQuaternion(rot) {
    return new THREE__namespace.Quaternion().setFromEuler(toEuler(toVec(rot)));
  }
  const DEG2RAD = Math.PI / 180;
  const _lut = [];
  for (let i = 0; i < 256; i++) {
    _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
  }
  class CameraGizmo {
    constructor(camera, renderer) {
      __publicField(this, "camera");
      __publicField(this, "renderer");
      __publicField(this, "scale");
      __publicField(this, "fov");
      __publicField(this, "box");
      __publicField(this, "wireframe");
      __publicField(this, "material");
      __publicField(this, "materialAlways");
      __publicField(this, "gizmos");
      __publicField(this, "timeout");
      __publicField(this, "active");
      this.camera = camera;
      this.renderer = renderer;
    }
    show(show = true) {
      if (!this.active)
        return;
      if (!this.gizmos) {
        this.createGizmo();
      }
      clearTimeout(this.timeout);
      this.gizmos.visible = show;
      if (show) {
        this.timeout = setTimeout(() => this.gizmos.visible = false, 1e3);
      }
    }
    update(position) {
      var _a;
      (_a = this.gizmos) == null ? void 0 : _a.position.copy(position);
    }
    applyViewerSettings(settings) {
      this.active = settings.getCameraShowGizmo();
      this.fov = settings.getCameraFov();
    }
    applyVimSettings(factor) {
      this.setScale(Math.tan(DEG2RAD * this.fov / 2) * factor / 10);
    }
    setScale(scale = 1) {
      var _a;
      (_a = this.gizmos) == null ? void 0 : _a.scale.set(scale, scale, scale);
      this.scale = scale;
    }
    createGizmo() {
      this.box = new THREE2.SphereGeometry(1);
      this.wireframe = new THREE__namespace.WireframeGeometry(this.box);
      this.material = new THREE__namespace.LineBasicMaterial({
        depthTest: true,
        opacity: 0.5,
        color: new THREE__namespace.Color(255),
        transparent: true
      });
      this.materialAlways = new THREE__namespace.LineBasicMaterial({
        depthTest: false,
        opacity: 0.05,
        color: new THREE__namespace.Color(255),
        transparent: true
      });
      this.gizmos = new THREE__namespace.Group();
      this.gizmos.add(new THREE__namespace.LineSegments(this.wireframe, this.material));
      this.gizmos.add(new THREE__namespace.LineSegments(this.wireframe, this.materialAlways));
      this.renderer.addObject(this.gizmos);
      this.setScale(this.scale);
    }
    dispose() {
      this.box.dispose();
      this.wireframe.dispose();
      this.material.dispose();
      this.materialAlways.dispose();
      this.box = null;
      this.wireframe = null;
      this.material = null;
      this.materialAlways = null;
      this.renderer.removeObject(this.gizmos);
      this.gizmos = null;
    }
  }
  const direction = {
    forward: new THREE__namespace.Vector3(0, 0, -1),
    back: new THREE__namespace.Vector3(0, 0, 1),
    left: new THREE__namespace.Vector3(-1, 0, 0),
    right: new THREE__namespace.Vector3(1, 0, 0),
    up: new THREE__namespace.Vector3(0, 1, 0),
    down: new THREE__namespace.Vector3(0, -1, 0)
  };
  class ViewerCamera {
    constructor(renderer, settings) {
      __publicField(this, "gizmo");
      __publicField(this, "camera");
      __publicField(this, "MinOrbitalDistance", 0.02);
      __publicField(this, "InputVelocity");
      __publicField(this, "Velocity");
      __publicField(this, "Impulse");
      __publicField(this, "SpeedMultiplier");
      __publicField(this, "OrbitalTarget");
      __publicField(this, "CurrentOrbitalDistance");
      __publicField(this, "OrbitalTargetDistance");
      __publicField(this, "lerpSecondsDuration");
      __publicField(this, "lerpMsEndtime");
      __publicField(this, "_isMouseOrbit", false);
      __publicField(this, "vimReferenceSize");
      __publicField(this, "sceneSizeMultiplier", 1);
      __publicField(this, "velocityBlendFactor", 1e-4);
      __publicField(this, "moveSpeed", 0.8);
      __publicField(this, "rotateSpeed", 1);
      __publicField(this, "orbitSpeed", 1);
      __publicField(this, "wheelSpeed", 0.2);
      this.gizmo = new CameraGizmo(this, renderer);
      this.camera = renderer.camera;
      this.applyViewerSettings(settings);
      this.InputVelocity = new THREE__namespace.Vector3(0, 0, 0);
      this.Velocity = new THREE__namespace.Vector3(0, 0, 0);
      this.Impulse = new THREE__namespace.Vector3(0, 0, 0);
      this.SpeedMultiplier = 0;
      this.sceneSizeMultiplier = 1;
      this.OrbitalTarget = new THREE__namespace.Vector3(0, 0, 0);
      this.CurrentOrbitalDistance = this.camera.position.clone().sub(this.OrbitalTarget).length();
      this.OrbitalTargetDistance = this.CurrentOrbitalDistance;
    }
    get IsMouseOrbit() {
      return this._isMouseOrbit;
    }
    set IsMouseOrbit(value) {
      this._isMouseOrbit = value;
      this.gizmo.show(value);
    }
    lookAt(position) {
      this.camera.lookAt(position);
    }
    lookAtSphere(sphere, setY = false) {
      if (!sphere)
        return;
      if (setY) {
        this.camera.position.setY(sphere.center.y);
      }
      const axis = this.camera.position.clone().sub(sphere.center).normalize();
      const fovRadian = this.camera.fov * Math.PI / 180;
      const dist = 1.33 * sphere.radius * (1 + 2 / Math.tan(fovRadian));
      const pos = axis.clone().multiplyScalar(dist).add(sphere.center);
      this.camera.lookAt(sphere.center);
      this.camera.position.copy(pos);
      this.OrbitalTarget = sphere.center;
      this.CurrentOrbitalDistance = this.OrbitalTarget.clone().sub(pos).length();
      this.OrbitalTargetDistance = this.CurrentOrbitalDistance;
    }
    reset() {
      this.camera.position.set(0, 0, -5);
      this.camera.lookAt(0, 0, 1);
      this.InputVelocity.set(0, 0, 0);
      this.Velocity.set(0, 0, 0);
      this.Impulse.set(0, 0, 0);
      this.CurrentOrbitalDistance = 5;
      this.OrbitalTarget.set(0, 0, 0);
      this.OrbitalTargetDistance = this.CurrentOrbitalDistance;
    }
    frameScene(sphere) {
      if (!sphere) {
        this.reset();
        return;
      }
      this.camera.position.copy(sphere.center.clone().add(new THREE__namespace.Vector3(0, sphere.radius, -2 * sphere.radius)));
      this.camera.lookAt(sphere.center);
      this.OrbitalTarget = sphere.center;
      this.CurrentOrbitalDistance = this.OrbitalTarget.clone().sub(this.camera.position).length();
      this.OrbitalTargetDistance = this.CurrentOrbitalDistance;
    }
    applyViewerSettings(settings) {
      this.IsMouseOrbit = settings.getCameraIsOrbit();
      this.camera.fov = settings.getCameraFov();
      this.camera.zoom = settings.getCameraZoom();
      this.camera.near = settings.getCameraNear();
      this.camera.far = settings.getCameraFar();
      this.camera.updateProjectionMatrix();
      this.moveSpeed = settings.getCameraMoveSpeed();
      this.rotateSpeed = settings.getCameraRotateSpeed();
      this.orbitSpeed = settings.getCameraOrbitSpeed();
      this.gizmo.applyViewerSettings(settings);
      this.vimReferenceSize = settings.getCameraReferenceVimSize();
    }
    applyVimSettings(boundingSphere) {
      this.sceneSizeMultiplier = boundingSphere.radius / this.vimReferenceSize;
      this.gizmo.applyVimSettings(this.sceneSizeMultiplier);
      this.gizmo.show(this.IsMouseOrbit);
    }
    applyLocalImpulse(impulse) {
      const localImpulse = impulse.clone().multiplyScalar(this.getSpeedMultiplier() * this.wheelSpeed);
      localImpulse.applyQuaternion(this.camera.quaternion);
      this.Impulse.add(localImpulse);
    }
    moveCameraBy(dir = direction.forward, speed) {
      const vector = dir.clone();
      if (speed)
        vector.multiplyScalar(speed);
      vector.applyQuaternion(this.camera.quaternion);
      this.OrbitalTarget.add(vector);
      this.gizmo.show();
      if (!this._isMouseOrbit) {
        this.camera.position.add(vector);
      }
    }
    truckPedestalCameraBy(pt) {
      this.moveCameraBy(new THREE__namespace.Vector3(-pt.x, pt.y, 0), this.getSpeedMultiplier());
    }
    truckDollyCameraBy(pt) {
      this.moveCameraBy(new THREE__namespace.Vector3(-pt.x, 0, pt.y), this.getSpeedMultiplier());
    }
    dollyCameraBy(amount) {
      if (this._isMouseOrbit) {
        this.CurrentOrbitalDistance += amount;
      } else {
        this.moveCameraBy(new THREE__namespace.Vector3(0, 0, amount), this.getSpeedMultiplier());
      }
    }
    setCameraLocalVelocity(vector) {
      const move = vector.clone();
      move.setZ(-move.z);
      move.applyQuaternion(this.camera.quaternion);
      move.multiplyScalar(this.getSpeedMultiplier());
      this.InputVelocity.copy(move);
    }
    rotateCameraBy(delta) {
      if (this.isLerping())
        return;
      const euler = new THREE__namespace.Euler(0, 0, 0, "YXZ");
      euler.setFromQuaternion(this.camera.quaternion);
      const factor = this._isMouseOrbit ? Math.PI * this.orbitSpeed : Math.PI * this.rotateSpeed;
      euler.y -= delta.x * factor;
      euler.x -= delta.y * factor;
      euler.z = 0;
      const max = Math.PI * 0.48;
      euler.x = Math.max(-max, Math.min(max, euler.x));
      this.camera.quaternion.setFromEuler(euler);
      if (!this._isMouseOrbit) {
        const offset = new THREE__namespace.Vector3(0, 0, 1).applyQuaternion(this.camera.quaternion).multiplyScalar(this.CurrentOrbitalDistance);
        this.OrbitalTarget = this.camera.position.clone().sub(offset);
      }
    }
    isLerping() {
      return new Date().getTime() < this.lerpMsEndtime;
    }
    startLerp(seconds) {
      this.lerpMsEndtime = new Date().getTime() + seconds * 1e3;
      this.lerpSecondsDuration = seconds;
    }
    setTarget(position) {
      this.OrbitalTarget = position;
      this.OrbitalTargetDistance = this.camera.position.distanceTo(position);
      this.startLerp(0.4);
    }
    getSpeedMultiplier() {
      return Math.pow(1.25, this.SpeedMultiplier) * this.sceneSizeMultiplier * this.moveSpeed;
    }
    updateOrbitalDistance(diff) {
      this.OrbitalTargetDistance -= diff * this.getSpeedMultiplier();
      this.OrbitalTargetDistance = Math.max(this.OrbitalTargetDistance, this.MinOrbitalDistance);
    }
    frameUpdate(deltaTime) {
      const targetVelocity = this.InputVelocity.clone();
      const invBlendFactor = Math.pow(this.velocityBlendFactor, deltaTime);
      const blendFactor = 1 - invBlendFactor;
      this.Velocity.multiplyScalar(invBlendFactor);
      targetVelocity.multiplyScalar(blendFactor);
      this.Velocity.add(targetVelocity);
      this.CurrentOrbitalDistance = this.CurrentOrbitalDistance * invBlendFactor + this.OrbitalTargetDistance * blendFactor;
      const positionDelta = this.Velocity.clone().multiplyScalar(deltaTime);
      const impulse = this.Impulse.clone().multiplyScalar(blendFactor);
      positionDelta.add(impulse);
      const orbitDelta = positionDelta.clone();
      if (this._isMouseOrbit) {
        const inv = this.camera.quaternion.clone().invert();
        const local = positionDelta.clone().applyQuaternion(inv);
        orbitDelta.set(local.x, local.y, 0);
        orbitDelta.applyQuaternion(this.camera.quaternion);
        this.CurrentOrbitalDistance = Math.max(this.CurrentOrbitalDistance + local.z, this.MinOrbitalDistance * this.sceneSizeMultiplier);
        this.OrbitalTargetDistance = this.CurrentOrbitalDistance;
      }
      this.Impulse.multiplyScalar(invBlendFactor);
      this.camera.position.add(positionDelta);
      this.OrbitalTarget.add(orbitDelta);
      if (this._isMouseOrbit) {
        const target = new THREE__namespace.Vector3(0, 0, this.CurrentOrbitalDistance);
        target.applyQuaternion(this.camera.quaternion);
        target.add(this.OrbitalTarget);
        if (this.isLerping()) {
          const frames = this.lerpSecondsDuration / deltaTime;
          const alpha = 1 - Math.pow(0.01, 1 / frames);
          this.camera.position.lerp(target, alpha);
          this.gizmo.show(false);
        } else {
          this.camera.position.copy(target);
          if (this.isSignificant(positionDelta)) {
            this.gizmo.show();
          }
        }
      }
      this.gizmo.update(this.OrbitalTarget);
    }
    isSignificant(vector) {
      const min = 0.01 * this.sceneSizeMultiplier / 60;
      return Math.abs(vector.x) > min || Math.abs(vector.y) > min || Math.abs(vector.z) > min;
    }
  }
  const KEYS = {
    KEY_0: 48,
    KEY_1: 49,
    KEY_2: 50,
    KEY_3: 51,
    KEY_4: 52,
    KEY_5: 53,
    KEY_6: 54,
    KEY_7: 55,
    KEY_8: 56,
    KEY_9: 57,
    KEY_LEFT: 37,
    KEY_RIGHT: 39,
    KEY_UP: 38,
    KEY_DOWN: 40,
    KEY_CTRL: 17,
    KEY_SHIFT: 16,
    KEY_ENTER: 13,
    KEY_SPACE: 32,
    KEY_TAB: 9,
    KEY_ESCAPE: 27,
    KEY_BACKSPACE: 8,
    KEY_HOME: 36,
    KEY_END: 35,
    KEY_INSERT: 45,
    KEY_DELETE: 46,
    KEY_ALT: 18,
    KEY_F1: 112,
    KEY_F2: 113,
    KEY_F3: 114,
    KEY_F4: 115,
    KEY_F5: 116,
    KEY_F6: 117,
    KEY_F7: 118,
    KEY_F8: 119,
    KEY_F9: 120,
    KEY_F10: 121,
    KEY_F11: 122,
    KEY_F12: 123,
    KEY_NUMPAD0: 96,
    KEY_NUMPAD1: 97,
    KEY_NUMPAD2: 98,
    KEY_NUMPAD3: 99,
    KEY_NUMPAD4: 100,
    KEY_NUMPAD5: 101,
    KEY_NUMPAD6: 102,
    KEY_NUMPAD7: 103,
    KEY_NUMPAD8: 104,
    KEY_NUMPAD9: 105,
    KEY_ADD: 107,
    KEY_SUBTRACT: 109,
    KEY_MULTIPLY: 106,
    KEY_DIVIDE: 111,
    KEY_SEPARATOR: 108,
    KEY_DECIMAL: 110,
    KEY_OEM_PLUS: 187,
    KEY_OEM_MINUS: 189,
    KEY_A: 65,
    KEY_B: 66,
    KEY_C: 67,
    KEY_D: 68,
    KEY_E: 69,
    KEY_F: 70,
    KEY_G: 71,
    KEY_H: 72,
    KEY_I: 73,
    KEY_J: 74,
    KEY_K: 75,
    KEY_L: 76,
    KEY_M: 77,
    KEY_N: 78,
    KEY_O: 79,
    KEY_P: 80,
    KEY_Q: 81,
    KEY_R: 82,
    KEY_S: 83,
    KEY_T: 84,
    KEY_U: 85,
    KEY_V: 86,
    KEY_W: 87,
    KEY_X: 88,
    KEY_Y: 89,
    KEY_Z: 90
  };
  class InputKeyboard {
    constructor(camera, viewer) {
      __publicField(this, "ShiftMultiplier", 3);
      __publicField(this, "camera");
      __publicField(this, "viewer");
      __publicField(this, "gizmo");
      __publicField(this, "isUpPressed");
      __publicField(this, "isDownPressed");
      __publicField(this, "isLeftPressed");
      __publicField(this, "isRightPressed");
      __publicField(this, "isEPressed");
      __publicField(this, "isQPressed");
      __publicField(this, "isShiftPressed", false);
      __publicField(this, "isCtrlPressed");
      __publicField(this, "reset", () => {
        this.isUpPressed = false;
        this.isDownPressed = false;
        this.isLeftPressed = false;
        this.isRightPressed = false;
        this.isEPressed = false;
        this.isQPressed = false;
        this.isShiftPressed = false;
        this.isCtrlPressed = false;
      });
      __publicField(this, "onKeyUp", (event) => {
        this.onKey(event, false);
      });
      __publicField(this, "onKeyDown", (event) => {
        this.onKey(event, true);
      });
      __publicField(this, "onKey", (event, keyDown) => {
        if (!keyDown) {
          switch (event.keyCode) {
            case KEYS.KEY_ADD:
            case KEYS.KEY_OEM_PLUS:
              this.camera.SpeedMultiplier += 1;
              event.preventDefault();
              break;
            case KEYS.KEY_SUBTRACT:
            case KEYS.KEY_OEM_MINUS:
              this.camera.SpeedMultiplier -= 1;
              event.preventDefault();
              break;
            case KEYS.KEY_F8:
            case KEYS.KEY_SPACE:
              this.camera.IsMouseOrbit = !this.camera.IsMouseOrbit;
              event.preventDefault();
              break;
            case KEYS.KEY_HOME:
              this.viewer.lookAtScene();
              event.preventDefault();
              break;
            case KEYS.KEY_ESCAPE:
              this.viewer.clearSelection();
              event.preventDefault();
              break;
            case KEYS.KEY_Z:
            case KEYS.KEY_F:
              this.viewer.lookAtSelection();
              event.preventDefault();
              break;
          }
        }
        switch (event.keyCode) {
          case KEYS.KEY_W:
          case KEYS.KEY_UP:
            this.isUpPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_S:
          case KEYS.KEY_DOWN:
            this.isDownPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_D:
          case KEYS.KEY_RIGHT:
            this.isRightPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_A:
          case KEYS.KEY_LEFT:
            this.isLeftPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_E:
            this.isEPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_Q:
            this.isQPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_SHIFT:
            this.isShiftPressed = keyDown;
            this.applyMove();
            event.preventDefault();
            break;
          case KEYS.KEY_CTRL:
            this.isCtrlPressed = keyDown;
            console.log("Control:" + keyDown);
            event.preventDefault();
            break;
        }
      });
      __publicField(this, "applyMove", () => {
        const move = new THREE__namespace.Vector3((this.isRightPressed ? 1 : 0) - (this.isLeftPressed ? 1 : 0), (this.isEPressed ? 1 : 0) - (this.isQPressed ? 1 : 0), (this.isUpPressed ? 1 : 0) - (this.isDownPressed ? 1 : 0));
        const speed = this.isShiftPressed ? this.ShiftMultiplier : 1;
        move.multiplyScalar(speed);
        this.camera.setCameraLocalVelocity(move);
      });
      this.camera = camera;
      this.viewer = viewer;
    }
  }
  class InputTouch {
    constructor(camera, renderer, mouse) {
      __publicField(this, "TapDurationMs", 500);
      __publicField(this, "camera");
      __publicField(this, "renderer");
      __publicField(this, "mouse");
      __publicField(this, "touchStart");
      __publicField(this, "touchStart1");
      __publicField(this, "touchStart2");
      __publicField(this, "touchStartTime");
      __publicField(this, "reset", () => {
        this.touchStart = this.touchStart1 = this.touchStart2 = this.touchStartTime = void 0;
      });
      __publicField(this, "onTap", (position) => {
        this.mouse.onMouseClick(position, false);
      });
      __publicField(this, "onTouchStart", (event) => {
        event.preventDefault();
        if (!event || !event.touches || !event.touches.length) {
          return;
        }
        this.touchStartTime = new Date().getTime();
        if (event.touches.length === 1) {
          this.touchStart = this.touchToVector(event.touches[0]);
          this.touchStart1 = this.touchStart2 = void 0;
        } else if (event.touches.length === 2) {
          this.touchStart1 = this.touchToVector(event.touches[0]);
          this.touchStart2 = this.touchToVector(event.touches[1]);
          this.touchStart = this.average(this.touchStart1, this.touchStart2);
        }
      });
      __publicField(this, "onDrag", (delta) => {
        this.camera.rotateCameraBy(delta);
      });
      __publicField(this, "onDoubleDrag", (delta) => {
        this.camera.truckPedestalCameraBy(delta);
      });
      __publicField(this, "onPinchOrSpread", (delta) => {
        this.camera.dollyCameraBy(delta);
      });
      __publicField(this, "onTouchMove", (event) => {
        event.preventDefault();
        if (!event || !event.touches || !event.touches.length)
          return;
        if (!this.touchStart)
          return;
        if (event.touches.length === 1) {
          const pos = this.touchToVector(event.touches[0]);
          const [width, height] = this.renderer.getContainerSize();
          const delta = pos.clone().sub(this.touchStart).multiply(new THREE__namespace.Vector2(1 / width, 1 / height));
          this.touchStart = pos;
          this.onDrag(delta);
          return;
        }
        if (!this.touchStart1 || !this.touchStart2)
          return;
        if (event.touches.length >= 2) {
          const p1 = this.touchToVector(event.touches[0]);
          const p2 = this.touchToVector(event.touches[1]);
          const p = this.average(p1, p2);
          const [width, height] = this.renderer.getContainerSize();
          const moveDelta = this.touchStart.clone().sub(p).multiply(new THREE__namespace.Vector2(-1 / width, -1 / height));
          const zoom = p1.distanceTo(p2);
          const prevZoom = this.touchStart1.distanceTo(this.touchStart2);
          const min = Math.min(width, height);
          const zoomDelta = (zoom - prevZoom) / -min;
          this.touchStart = p;
          this.touchStart1 = p1;
          this.touchStart2 = p2;
          if (moveDelta.length() > Math.abs(zoomDelta)) {
            this.onDoubleDrag(moveDelta);
          } else {
            this.onPinchOrSpread(zoomDelta);
          }
        }
      });
      __publicField(this, "onTouchEnd", (_) => {
        if (this.isSingleTouch()) {
          const touchDurationMs = new Date().getTime() - this.touchStartTime;
          if (touchDurationMs < this.TapDurationMs) {
            this.onTap(this.touchStart);
          }
        }
        this.reset();
      });
      this.camera = camera;
      this.renderer = renderer;
      this.mouse = mouse;
    }
    isSingleTouch() {
      return this.touchStart !== void 0 && this.touchStartTime !== void 0 && this.touchStart1 === void 0 && this.touchStart2 === void 0;
    }
    touchToVector(touch) {
      return new THREE__namespace.Vector2(touch.pageX, touch.pageY);
    }
    average(p1, p2) {
      return p1.clone().lerp(p2, 0.5);
    }
  }
  class HitTestResult {
    constructor() {
      __publicField(this, "mousePosition");
      __publicField(this, "doubleClick");
      __publicField(this, "nodeIndex", -1);
      __publicField(this, "instanceId", -1);
      __publicField(this, "intersections");
      __publicField(this, "isMerged");
      __publicField(this, "isInstanced");
      __publicField(this, "elementIndex", -1);
    }
    get firstHit() {
      return this.intersections[0];
    }
    get isHit() {
      return !!this.firstHit;
    }
    get distance() {
      return this.firstHit.distance;
    }
    get position() {
      return this.firstHit.point;
    }
    get objectId() {
      return this.firstHit.object.id;
    }
    get hitFace() {
      return this.firstHit.faceIndex;
    }
  }
  class HitTester {
    constructor(viewer) {
      __publicField(this, "viewer");
      __publicField(this, "raycaster", new THREE__namespace.Raycaster());
      this.viewer = viewer;
    }
    onMouseClick(position, double) {
      const r = new HitTestResult();
      r.mousePosition = position;
      r.doubleClick = double;
      console.time("raycast");
      r.intersections = this.mouseRaycast(position);
      console.timeEnd("raycast");
      const hit = r.firstHit;
      if (hit) {
        if (hit.object.userData.merged && hit.uv !== void 0) {
          r.isMerged = true;
          r.nodeIndex = Math.round(hit.uv.x);
          r.elementIndex = this.viewer.getElementIndexFromNodeIndex(r.nodeIndex);
        } else if (hit.instanceId !== void 0) {
          r.isInstanced = true;
          r.instanceId = hit.instanceId;
          r.elementIndex = this.viewer.getElementIndexFromMeshInstance(hit.object, r.instanceId);
        }
      }
      return r;
    }
    mouseRaycast(position) {
      const [width, height] = this.viewer.renderer.getContainerSize();
      const x = position.x / width * 2 - 1;
      const y = -(position.y / height) * 2 + 1;
      this.raycaster.setFromCamera(new THREE__namespace.Vector2(x, y), this.viewer.camera.camera);
      return this.raycaster.intersectObjects(this.viewer.renderer.meshes);
    }
  }
  class InputMouse {
    constructor(viewer, keyboard) {
      __publicField(this, "viewer");
      __publicField(this, "hitTester");
      __publicField(this, "inputKeyboard");
      __publicField(this, "isMouseDown", false);
      __publicField(this, "hasMouseMoved", false);
      __publicField(this, "reset", () => {
        this.isMouseDown = this.hasMouseMoved = false;
      });
      __publicField(this, "onMouseOut", (_) => {
        this.isMouseDown = this.hasMouseMoved = false;
      });
      __publicField(this, "onMouseMove", (event) => {
        if (!this.isMouseDown) {
          return;
        }
        event.preventDefault();
        const deltaX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        const deltaY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        const [width, height] = this.renderer.getContainerSize();
        const delta = new THREE__namespace.Vector2(deltaX / width, deltaY / height);
        this.hasMouseMoved = this.hasMouseMoved || Math.abs(deltaX) + Math.abs(deltaY) > 3;
        if (event.buttons & 2) {
          this.camera.truckPedestalCameraBy(delta);
        } else if (event.buttons & 4) {
          this.camera.truckDollyCameraBy(delta);
        } else {
          this.camera.rotateCameraBy(delta);
        }
      });
      __publicField(this, "onMouseWheel", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const scrollValue = Math.sign(event.deltaY);
        if (this.inputKeyboard.isCtrlPressed) {
          this.camera.SpeedMultiplier -= scrollValue;
        } else if (this.camera.IsMouseOrbit) {
          const impulse = new THREE__namespace.Vector3(0, 0, scrollValue);
          this.camera.applyLocalImpulse(impulse);
        } else {
          const impulse = new THREE__namespace.Vector3(0, 0, scrollValue);
          this.camera.applyLocalImpulse(impulse);
        }
      });
      __publicField(this, "onMouseDown", (event) => {
        event.preventDefault();
        this.isMouseDown = true;
        this.hasMouseMoved = false;
        this.renderer.canvas.focus();
      });
      __publicField(this, "onMouseUp", (event) => {
        if (this.isMouseDown && !this.hasMouseMoved) {
          this.onMouseClick(new THREE__namespace.Vector2(event.offsetX, event.offsetY), false);
        }
        this.isMouseDown = false;
        event.preventDefault();
      });
      __publicField(this, "onDoubleClick", (event) => {
        this.onMouseClick(new THREE__namespace.Vector2(event.offsetX, event.offsetY), true);
      });
      __publicField(this, "onMouseClick", (position, doubleClick) => {
        const result = this.hitTester.onMouseClick(position, doubleClick);
        this.viewer.onMouseClick(result);
      });
      this.viewer = viewer;
      this.hitTester = new HitTester(viewer);
      this.inputKeyboard = keyboard;
    }
    get camera() {
      return this.viewer.camera;
    }
    get renderer() {
      return this.viewer.renderer;
    }
  }
  class ViewerInput {
    constructor(viewer) {
      __publicField(this, "canvas");
      __publicField(this, "unregisters");
      __publicField(this, "touch");
      __publicField(this, "mouse");
      __publicField(this, "keyboard");
      __publicField(this, "reg", (handler, type, listener) => {
        handler.addEventListener(type, listener);
        this.unregisters.push(() => handler.removeEventListener(type, listener));
      });
      __publicField(this, "unregister", () => {
        this.unregisters.forEach((f) => f());
        this.reset();
      });
      this.canvas = viewer.renderer.canvas;
      this.unregisters = [];
      this.keyboard = new InputKeyboard(viewer.camera, viewer);
      this.mouse = new InputMouse(viewer, this.keyboard);
      this.touch = new InputTouch(viewer.camera, viewer.renderer, this.mouse);
    }
    register() {
      this.reg(this.canvas, "mousedown", this.mouse.onMouseDown);
      this.reg(this.canvas, "wheel", this.mouse.onMouseWheel);
      this.reg(this.canvas, "mousemove", this.mouse.onMouseMove);
      this.reg(this.canvas, "mouseup", this.mouse.onMouseUp);
      this.reg(this.canvas, "mouseout", this.mouse.onMouseOut);
      this.reg(this.canvas, "dblclick", this.mouse.onDoubleClick);
      this.reg(this.canvas, "touchstart", this.touch.onTouchStart);
      this.reg(this.canvas, "touchend", this.touch.onTouchEnd);
      this.reg(this.canvas, "touchmove", this.touch.onTouchMove);
      this.reg(document, "keydown", this.keyboard.onKeyDown);
      this.reg(document, "keyup", this.keyboard.onKeyUp);
      this.reg(this.canvas, "contextmenu", (e) => e.preventDefault());
    }
    reset() {
      this.mouse.reset();
      this.keyboard.reset();
      this.touch.reset();
    }
  }
  class Selection {
    constructor(viewer) {
      __publicField(this, "viewer");
      __publicField(this, "elementIndex", -1);
      __publicField(this, "boundingSphere", null);
      __publicField(this, "highlightDisposer", null);
      this.viewer = viewer;
    }
    hasSelection() {
      return this.elementIndex >= 0;
    }
    clear() {
      this.elementIndex = -1;
      this.boundingSphere = null;
      this.disposeResources();
    }
    disposeResources() {
      var _a;
      (_a = this.highlightDisposer) == null ? void 0 : _a.call(this);
      this.highlightDisposer = null;
    }
    select(elementIndex) {
      var _a, _b;
      this.clear();
      if (elementIndex < 0) {
        return;
      }
      this.elementIndex = elementIndex;
      this.highlightDisposer = this.viewer.highlightElementByIndex(elementIndex);
      this.boundingSphere = (_b = (_a = this.viewer.getBoundingBoxForElementIndex(elementIndex)) == null ? void 0 : _a.getBoundingSphere(new THREE__namespace.Sphere())) != null ? _b : null;
    }
  }
  class EnvironmentPlane {
    constructor() {
      __publicField(this, "source");
      __publicField(this, "mesh");
      __publicField(this, "size");
      __publicField(this, "geometry");
      __publicField(this, "material");
      __publicField(this, "texture");
      this.geometry = new THREE__namespace.PlaneBufferGeometry();
      this.material = new THREE__namespace.MeshBasicMaterial({ transparent: true });
      this.mesh = new THREE__namespace.Mesh(this.geometry, this.material);
    }
    applyViewerSettings(settings) {
      this.size = settings.getPlaneSize();
      this.mesh.visible = settings.getPlaneShow();
      this.applyTexture(settings.getPlaneTextureUrl());
      this.material.color.copy(settings.getPlaneColor());
      this.material.opacity = settings.getPlaneOpacity();
    }
    applyVimSettings(settings, box) {
      var _a;
      const center = box.getCenter(new THREE__namespace.Vector3());
      const position = new THREE__namespace.Vector3(center.x, box.min.y - settings.getScale().y, center.z);
      this.mesh.position.copy(position);
      this.mesh.quaternion.copy(new THREE__namespace.Quaternion().setFromEuler(new THREE__namespace.Euler(1.5 * Math.PI, 0, 0)));
      const sphere = box == null ? void 0 : box.getBoundingSphere(new THREE__namespace.Sphere());
      const size = ((_a = sphere == null ? void 0 : sphere.radius) != null ? _a : 1) * this.size;
      const scale = new THREE__namespace.Vector3(1, 1, 1).multiplyScalar(size);
      this.mesh.scale.copy(scale);
    }
    applyTexture(texUrl) {
      var _a;
      if (texUrl === this.source)
        return;
      this.source = texUrl;
      (_a = this.texture) == null ? void 0 : _a.dispose();
      this.texture = null;
      if (!texUrl)
        return;
      const loader = new THREE__namespace.TextureLoader();
      this.texture = loader.load(texUrl);
      if (!this.texture) {
        console.error("Failed to load texture: " + texUrl);
        return;
      }
      this.material.map = this.texture;
    }
    dispose() {
      var _a, _b, _c;
      (_a = this.geometry) == null ? void 0 : _a.dispose();
      (_b = this.material) == null ? void 0 : _b.dispose();
      (_c = this.texture) == null ? void 0 : _c.dispose();
      this.geometry = null;
      this.material = null;
      this.texture = null;
    }
  }
  class ViewerEnvironment {
    constructor(settings) {
      __publicField(this, "plane");
      __publicField(this, "skyLight");
      __publicField(this, "sunLight");
      this.plane = new EnvironmentPlane();
      this.skyLight = new THREE__namespace.HemisphereLight();
      this.sunLight = new THREE__namespace.DirectionalLight();
      this.applyViewerSettings(settings);
    }
    getElements() {
      return [this.plane.mesh, this.skyLight, this.sunLight];
    }
    applyViewerSettings(settings) {
      this.plane.applyViewerSettings(settings);
      this.skyLight.color.copy(settings.getSkylightColor());
      this.skyLight.groundColor.copy(settings.getSkylightGroundColor());
      this.skyLight.intensity = settings.getSkylightIntensity();
      this.sunLight.color.copy(settings.getSunlightColor());
      this.sunLight.position.copy(settings.getSunlightPosition());
      this.sunLight.intensity = settings.getSunlightIntensity();
    }
    applyVimSettings(settings, box) {
      this.plane.applyVimSettings(settings, box);
    }
  }
  class ViewerRenderer {
    constructor(canvas, settings) {
      __publicField(this, "camera");
      __publicField(this, "renderer");
      __publicField(this, "clock", new THREE__namespace.Clock());
      __publicField(this, "canvas");
      __publicField(this, "scene");
      __publicField(this, "meshes", []);
      __publicField(this, "localBoundingBox");
      __publicField(this, "worldBoundingBox");
      __publicField(this, "fitToCanvas", () => {
        const [width, height] = this.getContainerSize();
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      });
      this.renderer = new THREE__namespace.WebGLRenderer({
        canvas,
        antialias: true,
        precision: "highp",
        alpha: true,
        stencil: false,
        powerPreference: "high-performance",
        logarithmicDepthBuffer: true
      });
      this.canvas = this.renderer.domElement;
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.shadowMap.enabled = false;
      this.camera = new THREE__namespace.PerspectiveCamera();
      this.scene = new THREE__namespace.Scene();
      this.localBoundingBox = new THREE__namespace.Box3();
      this.fitToCanvas();
      this.setOnResize(this.fitToCanvas, settings.getCanvasResizeDelay());
    }
    setOnResize(callback, timeout) {
      let timerId;
      window.addEventListener("resize", function() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
          timerId = void 0;
        }
        timerId = setTimeout(function() {
          timerId = void 0;
          callback();
        }, timeout);
      });
    }
    getBoundingSphere() {
      var _a;
      return (_a = this.worldBoundingBox) == null ? void 0 : _a.getBoundingSphere(new THREE__namespace.Sphere());
    }
    getBoundingBox() {
      var _a;
      return (_a = this.worldBoundingBox) == null ? void 0 : _a.clone();
    }
    render() {
      this.renderer.render(this.scene, this.camera);
    }
    getContainerSize() {
      return [
        this.canvas.parentElement.clientWidth,
        this.canvas.parentElement.clientHeight
      ];
    }
    clearScene() {
      this.meshes.forEach((m) => this.scene.remove(m));
      this.meshes = [];
      this.localBoundingBox = void 0;
      this.worldBoundingBox = void 0;
    }
    addObjects(meshes) {
      meshes.forEach((m) => {
        this.addObject(m);
      });
    }
    addObject(mesh) {
      this.scene.add(mesh);
    }
    removeObject(mesh) {
      this.scene.remove(mesh);
      const i = this.meshes.indexOf(mesh);
      if (i > 0)
        this.meshes.splice(i, 1);
    }
    addScene(scene) {
      var _a;
      scene.meshes.forEach((m) => {
        this.scene.add(m);
        this.meshes.push(m);
      });
      this.localBoundingBox = this.localBoundingBox ? this.localBoundingBox.union(scene.boundingBox) : scene.boundingBox.clone();
      this.worldBoundingBox = (_a = this.worldBoundingBox) != null ? _a : this.localBoundingBox;
    }
    applyMatrix4(matrix) {
      for (let i = 0; i < this.meshes.length; i++) {
        this.meshes[i].matrixAutoUpdate = false;
        this.meshes[i].matrix.copy(matrix);
      }
      this.worldBoundingBox = this.localBoundingBox.clone().applyMatrix4(matrix);
    }
    computeBoundingBox(matrix) {
      this.localBoundingBox = this._computeBoundingBox(this.scene);
      this.worldBoundingBox = this.localBoundingBox.clone().applyMatrix4(matrix);
    }
    _computeBoundingBox(scene) {
      let box;
      const grow = (geometry, matrix2) => {
        geometry.computeBoundingSphere();
        let currentBox = geometry.boundingBox.clone();
        currentBox = currentBox.applyMatrix4(matrix2);
        box = box ? box.union(currentBox) : currentBox;
      };
      const matrix = new THREE__namespace.Matrix4();
      scene.traverse((obj) => {
        if (obj instanceof THREE__namespace.InstancedMesh) {
          for (let i = 0; i < obj.count; i++) {
            obj.getMatrixAt(i, matrix);
            grow(obj.geometry, matrix);
          }
        } else if (obj instanceof THREE__namespace.Mesh) {
          grow(obj.geometry, obj.matrix);
        }
      });
      return box != null ? box : new THREE__namespace.Box3();
    }
  }
  class BFastHeader {
    constructor(magic, dataStart, dataEnd, numArrays, byteLength) {
      __publicField(this, "magic");
      __publicField(this, "dataStart");
      __publicField(this, "dataEnd");
      __publicField(this, "numArrays");
      if (magic !== 49061) {
        throw new Error("Not a BFAST file, or endianness is swapped");
      }
      if (dataStart <= 32 || dataStart > byteLength) {
        throw new Error("Data start is out of valid range");
      }
      if (dataEnd < dataStart || dataEnd > byteLength) {
        throw new Error("Data end is out of vaid range");
      }
      if (numArrays < 0 || numArrays > dataEnd) {
        throw new Error("Number of arrays is invalid");
      }
      this.magic = magic;
      this.dataStart = dataStart;
      this.dataEnd = dataEnd;
      this.numArrays = numArrays;
    }
    static fromArray(array, byteLength) {
      if (array[1] !== 0)
        throw new Error("Expected 0 in byte position 0");
      if (array[3] !== 0)
        throw new Error("Expected 0 in byte position 8");
      if (array[5] !== 0)
        throw new Error("Expected 0 in position 16");
      if (array[7] !== 0)
        throw new Error("Expected 0 in position 24");
      return new this(array[0], array[2], array[4], array[6], byteLength);
    }
  }
  class BFast {
    constructor(header, names, buffers) {
      __publicField(this, "header");
      __publicField(this, "names");
      __publicField(this, "buffers");
      this.header = header;
      this.names = names;
      this.buffers = buffers;
    }
    static fromArray(bytes) {
      return this.fromArrayBuffer(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    }
    static fromArrayBuffer(arrayBuffer, byteOffset = 0, byteLength = arrayBuffer.byteLength - byteOffset) {
      const data = new Int32Array(arrayBuffer, byteOffset, byteLength / 4);
      const header = BFastHeader.fromArray(data, byteLength);
      const buffers = [];
      let pos = 8;
      for (let i = 0; i < header.numArrays; ++i) {
        const begin = data[pos + 0];
        const end = data[pos + 2];
        if (data[pos + 1] !== 0) {
          throw new Error("Expected 0 in position " + (pos + 1) * 4);
        }
        if (data[pos + 3] !== 0) {
          throw new Error("Expected 0 in position " + (pos + 3) * 4);
        }
        if (begin < header.dataStart || begin > header.dataEnd) {
          throw new Error("Buffer start is out of range");
        }
        if (end < begin || end > header.dataEnd) {
          throw new Error("Buffer end is out of range");
        }
        pos += 4;
        const buffer = new Uint8Array(arrayBuffer, begin + byteOffset, end - begin);
        buffers.push(buffer);
      }
      if (buffers.length < 0) {
        throw new Error("Expected at least one buffer containing the names");
      }
      const joinedNames = new TextDecoder("utf-8").decode(buffers[0]);
      let names = joinedNames.slice(0, -1).split("\0");
      if (joinedNames.length === 0)
        names = [];
      if (names.length !== buffers.length - 1) {
        throw new Error("Expected number of names to be equal to the number of buffers - 1");
      }
      return new BFast(header, names, buffers.slice(1));
    }
  }
  class AttributeDescriptor {
    constructor(description, association, semantic, attributeTypeIndex, dataType, dataArity) {
      __publicField(this, "description");
      __publicField(this, "association");
      __publicField(this, "semantic");
      __publicField(this, "attributeTypeIndex");
      __publicField(this, "dataType");
      __publicField(this, "dataArity");
      if (!description.startsWith("g3d:")) {
        throw new Error(`${description} must start with 'g3d'`);
      }
      this.description = description;
      this.association = association;
      this.semantic = semantic;
      this.attributeTypeIndex = attributeTypeIndex;
      this.dataType = dataType;
      this.dataArity = parseInt(dataArity);
    }
    static fromString(descriptor) {
      const desc = descriptor.split(":");
      if (desc.length !== 6) {
        throw new Error(`${descriptor}, must have 6 components delimited by ':'`);
      }
      return new this(descriptor, desc[1], desc[2], desc[3], desc[4], desc[5]);
    }
    matches(other) {
      const match = (a, b) => a === "*" || b === "*" || a === b;
      return match(this.association, other.association) && match(this.semantic, other.semantic) && match(this.attributeTypeIndex, other.attributeTypeIndex) && match(this.dataType, other.dataType);
    }
  }
  class Attribute {
    constructor(descriptor, bytes) {
      __publicField(this, "descriptor");
      __publicField(this, "bytes");
      __publicField(this, "data");
      this.descriptor = descriptor;
      this.bytes = bytes;
      this.data = Attribute.castData(bytes, descriptor.dataType);
    }
    static fromString(descriptor, buffer) {
      return new this(AttributeDescriptor.fromString(descriptor), buffer);
    }
    static castData(bytes, dataType) {
      switch (dataType) {
        case "float32":
          return new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
        case "float64":
          throw new Float64Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 8);
        case "int8":
          return bytes;
        case "int16":
          return new Int16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2);
        case "int32":
          return new Int32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
        default:
          throw new Error("Unrecognized attribute data type " + dataType);
      }
    }
  }
  class AbstractG3d {
    constructor(meta, attributes) {
      __publicField(this, "meta");
      __publicField(this, "attributes");
      this.meta = meta;
      this.attributes = attributes;
    }
    findAttribute(descriptor) {
      const filter = AttributeDescriptor.fromString(descriptor);
      for (let i = 0; i < this.attributes.length; ++i) {
        const attribute = this.attributes[i];
        if (attribute.descriptor.matches(filter))
          return attribute;
      }
      return null;
    }
    static fromBfast(bfast) {
      if (bfast.buffers.length < 2) {
        throw new Error("G3D requires at least two BFast buffers");
      }
      const metaBuffer = bfast.buffers[0];
      if (bfast.names[0] !== "meta") {
        throw new Error("First G3D buffer must be named 'meta', but was named: " + bfast.names[0]);
      }
      const meta = new TextDecoder("utf-8").decode(metaBuffer);
      const attributes = [];
      const nDescriptors = bfast.buffers.length - 1;
      for (let i = 0; i < nDescriptors; ++i) {
        const attribute = Attribute.fromString(bfast.names[i + 1], bfast.buffers[i + 1]);
        attributes.push(attribute);
      }
      return new AbstractG3d(meta, attributes);
    }
  }
  class VimAttributes {
  }
  __publicField(VimAttributes, "positions", "g3d:vertex:position:0:float32:3");
  __publicField(VimAttributes, "indices", "g3d:corner:index:0:int32:1");
  __publicField(VimAttributes, "instanceMeshes", "g3d:instance:mesh:0:int32:1");
  __publicField(VimAttributes, "instanceTransforms", "g3d:instance:transform:0:float32:16");
  __publicField(VimAttributes, "meshSubmeshes", "g3d:mesh:submeshoffset:0:int32:1");
  __publicField(VimAttributes, "submeshIndexOffsets", "g3d:submesh:indexoffset:0:int32:1");
  __publicField(VimAttributes, "submeshMaterials", "g3d:submesh:material:0:int32:1");
  __publicField(VimAttributes, "materialColors", "g3d:material:color:0:float32:4");
  class G3d {
    constructor(g3d) {
      __publicField(this, "positions");
      __publicField(this, "indices");
      __publicField(this, "instanceMeshes");
      __publicField(this, "instanceTransforms");
      __publicField(this, "meshSubmeshes");
      __publicField(this, "submeshIndexOffset");
      __publicField(this, "submeshMaterial");
      __publicField(this, "materialColors");
      __publicField(this, "meshVertexOffsets");
      __publicField(this, "meshInstances");
      __publicField(this, "meshTransparent");
      __publicField(this, "rawG3d");
      __publicField(this, "matrixArity", 16);
      __publicField(this, "colorArity", 4);
      __publicField(this, "positionArity", 3);
      __publicField(this, "defaultColor", new Float32Array([1, 1, 1, 1]));
      __publicField(this, "computeMeshInstances", () => {
        const result = [];
        for (let i = 0; i < this.instanceMeshes.length; i++) {
          const mesh = this.instanceMeshes[i];
          if (mesh < 0)
            continue;
          const instanceIndices = result[mesh];
          if (instanceIndices)
            instanceIndices.push(i);
          else
            result[mesh] = [i];
        }
        return result;
      });
      __publicField(this, "getVertexCount", () => this.positions.length / this.positionArity);
      __publicField(this, "getMeshCount", () => this.meshSubmeshes.length);
      __publicField(this, "getInstanceCount", () => this.instanceMeshes.length);
      __publicField(this, "getMaterialCount", () => this.materialColors.length / this.colorArity);
      var _a, _b, _c, _d, _e, _f, _g, _h;
      this.rawG3d = g3d;
      this.positions = (_a = g3d.findAttribute(VimAttributes.positions)) == null ? void 0 : _a.data;
      const tmp = (_b = g3d.findAttribute(VimAttributes.indices)) == null ? void 0 : _b.data;
      this.indices = new Uint32Array(tmp.buffer, tmp.byteOffset, tmp.length);
      this.meshSubmeshes = (_c = g3d.findAttribute(VimAttributes.meshSubmeshes)) == null ? void 0 : _c.data;
      this.submeshIndexOffset = (_d = g3d.findAttribute(VimAttributes.submeshIndexOffsets)) == null ? void 0 : _d.data;
      this.submeshMaterial = (_e = g3d.findAttribute(VimAttributes.submeshMaterials)) == null ? void 0 : _e.data;
      this.materialColors = (_f = g3d.findAttribute(VimAttributes.materialColors)) == null ? void 0 : _f.data;
      this.instanceMeshes = (_g = g3d.findAttribute(VimAttributes.instanceMeshes)) == null ? void 0 : _g.data;
      this.instanceTransforms = (_h = g3d.findAttribute(VimAttributes.instanceTransforms)) == null ? void 0 : _h.data;
      this.meshVertexOffsets = this.computeMeshVertexOffsets();
      this.rebaseIndices();
      this.meshInstances = this.computeMeshInstances();
      this.meshTransparent = this.computeMeshIsTransparent();
    }
    computeMeshVertexOffsets() {
      const result = new Int32Array(this.getMeshCount());
      for (let m = 0; m < result.length; m++) {
        let min = Number.MAX_SAFE_INTEGER;
        const start = this.getMeshIndexStart(m);
        const end = this.getMeshIndexEnd(m);
        for (let i = start; i < end; i++) {
          min = Math.min(min, this.indices[i]);
        }
        result[m] = min;
      }
      return result;
    }
    rebaseIndices() {
      const count = this.getMeshCount();
      for (let m = 0; m < count; m++) {
        const offset = this.meshVertexOffsets[m];
        const start = this.getMeshIndexStart(m);
        const end = this.getMeshIndexEnd(m);
        for (let i = start; i < end; i++) {
          this.indices[i] -= offset;
        }
      }
    }
    computeMeshIsTransparent() {
      const result = new Array(this.getMeshCount());
      for (let m = 0; m < result.length; m++) {
        const subStart = this.getMeshSubmeshStart(m);
        const subEnd = this.getMeshSubmeshEnd(m);
        for (let s = subStart; s < subEnd; s++) {
          const material = this.submeshMaterial[s];
          const alpha = this.materialColors[material * this.colorArity + this.colorArity - 1];
          result[m] = result[m] || alpha < 1;
        }
      }
      return result;
    }
    getMeshIndexStart(mesh) {
      const subStart = this.getMeshSubmeshStart(mesh);
      return this.getSubmeshIndexStart(subStart);
    }
    getMeshIndexEnd(mesh) {
      const subEnd = this.getMeshSubmeshEnd(mesh);
      return this.getSubmeshIndexEnd(subEnd - 1);
    }
    getMeshIndexCount(mesh) {
      return this.getMeshIndexEnd(mesh) - this.getMeshIndexStart(mesh);
    }
    getMeshVertexStart(mesh) {
      return this.meshVertexOffsets[mesh];
    }
    getMeshVertexEnd(mesh) {
      return mesh < this.meshVertexOffsets.length - 1 ? this.meshVertexOffsets[mesh + 1] : this.getVertexCount();
    }
    getMeshVertexCount(mesh) {
      return this.getMeshVertexEnd(mesh) - this.getMeshVertexStart(mesh);
    }
    getMeshSubmeshStart(mesh) {
      return this.meshSubmeshes[mesh];
    }
    getMeshSubmeshEnd(mesh) {
      return mesh < this.meshSubmeshes.length - 1 ? this.meshSubmeshes[mesh + 1] : this.submeshIndexOffset.length;
    }
    getMeshSubmeshCount(mesh) {
      return this.getMeshSubmeshEnd(mesh) - this.getMeshSubmeshStart(mesh);
    }
    getSubmeshIndexStart(submesh) {
      return this.submeshIndexOffset[submesh];
    }
    getSubmeshIndexEnd(submesh) {
      return submesh < this.submeshIndexOffset.length - 1 ? this.submeshIndexOffset[submesh + 1] : this.indices.length;
    }
    getSubmeshIndexCount(submesh) {
      return this.getSubmeshIndexEnd(submesh) - this.getSubmeshIndexStart(submesh);
    }
    getSubmeshColor(submesh) {
      return this.getMaterialColor(this.submeshMaterial[submesh]);
    }
    getInstanceTransform(instance) {
      return this.instanceTransforms.subarray(instance * this.matrixArity, (instance + 1) * this.matrixArity);
    }
    getMaterialColor(material) {
      if (material < 0)
        return this.defaultColor;
      return this.materialColors.subarray(material * this.colorArity, (material + 1) * this.colorArity);
    }
    static fromBfast(bfast) {
      const base = AbstractG3d.fromBfast(bfast);
      return new G3d(base);
    }
    validate() {
      const isPresent = (attribute, label) => {
        if (!attribute) {
          throw new Error(`Missing Attribute Buffer: ${label}`);
        }
      };
      isPresent(this.positions, "position");
      isPresent(this.indices, "indices");
      isPresent(this.instanceMeshes, "instanceMeshes");
      isPresent(this.instanceTransforms, "instanceTransforms");
      isPresent(this.meshSubmeshes, "meshSubmeshes");
      isPresent(this.submeshIndexOffset, "submeshIndexOffset");
      isPresent(this.submeshMaterial, "submeshMaterial");
      isPresent(this.materialColors, "materialColors");
      if (this.positions.length % this.positionArity !== 0) {
        throw new Error("Invalid position buffer, must be divisible by " + this.positionArity);
      }
      if (this.indices.length % 3 !== 0) {
        throw new Error("Invalid Index Count, must be divisible by 3");
      }
      for (let i = 0; i < this.indices.length; i++) {
        if (this.indices[i] < 0 || this.indices[i] >= this.positions.length) {
          throw new Error("Vertex index out of bound");
        }
      }
      if (this.instanceMeshes.length !== this.instanceTransforms.length / this.matrixArity) {
        throw new Error("Instance buffers mismatched");
      }
      if (this.instanceTransforms.length % this.matrixArity !== 0) {
        throw new Error("Invalid InstanceTransform buffer, must respect arity " + this.matrixArity);
      }
      for (let i = 0; i < this.instanceMeshes.length; i++) {
        if (this.instanceMeshes[i] >= this.meshSubmeshes.length) {
          throw new Error("Instance Mesh Out of range.");
        }
      }
      for (let i = 0; i < this.meshSubmeshes.length; i++) {
        if (this.meshSubmeshes[i] < 0 || this.meshSubmeshes[i] >= this.submeshIndexOffset.length) {
          throw new Error("MeshSubmeshOffset out of bound at");
        }
      }
      for (let i = 0; i < this.meshSubmeshes.length - 1; i++) {
        if (this.meshSubmeshes[i] >= this.meshSubmeshes[i + 1]) {
          throw new Error("MeshSubmesh out of sequence.");
        }
      }
      if (this.submeshIndexOffset.length !== this.submeshMaterial.length) {
        throw new Error("Mismatched submesh buffers");
      }
      for (let i = 0; i < this.submeshIndexOffset.length; i++) {
        if (this.submeshIndexOffset[i] < 0 || this.submeshIndexOffset[i] >= this.indices.length) {
          throw new Error("SubmeshIndexOffset out of bound");
        }
      }
      for (let i = 0; i < this.submeshIndexOffset.length; i++) {
        if (this.submeshIndexOffset[i] % 3 !== 0) {
          throw new Error("Invalid SubmeshIndexOffset, must be divisible by 3");
        }
      }
      for (let i = 0; i < this.submeshIndexOffset.length - 1; i++) {
        if (this.submeshIndexOffset[i] >= this.submeshIndexOffset[i + 1]) {
          throw new Error("SubmeshIndexOffset out of sequence.");
        }
      }
      for (let i = 0; i < this.submeshMaterial.length; i++) {
        if (this.submeshMaterial[i] >= this.materialColors.length) {
          throw new Error("submeshMaterial out of bound");
        }
      }
      if (this.materialColors.length % this.colorArity !== 0) {
        throw new Error("Invalid material color buffer, must be divisible by " + this.colorArity);
      }
    }
  }
  const _Document = class {
    constructor(header, assets, g3d, entities, strings) {
      __publicField(this, "header");
      __publicField(this, "assets");
      __publicField(this, "g3d");
      __publicField(this, "entities");
      __publicField(this, "strings");
      this.header = header;
      this.assets = assets;
      this.g3d = g3d;
      this.entities = entities;
      this.strings = strings;
    }
    getEntity(type, index) {
      var _a;
      const r = new Map();
      if (index < 0)
        return r;
      const table = (_a = this.entities) == null ? void 0 : _a.get(type);
      if (!table)
        return r;
      for (const k of table.keys()) {
        const parts = k.split(":");
        const values = table.get(k);
        if (!values)
          continue;
        const value = parts[0] === "string" ? this.strings[values[index]] : values[index];
        const name = parts[parts.length - 1];
        r.set(name, value);
      }
      return r;
    }
    static parseFromArrayBuffer(data) {
      const bfast = BFast.fromArrayBuffer(data);
      return _Document.parseFromBFast(bfast);
    }
    static parseFromBFast(bfast) {
      if (bfast.buffers.length < 5) {
        throw new Error("VIM requires at least five BFast buffers");
      }
      const lookup = new Map();
      for (let i = 0; i < bfast.buffers.length; ++i) {
        lookup.set(bfast.names[i], bfast.buffers[i]);
      }
      const assetData = lookup.get("assets");
      const g3dData = lookup.get("geometry");
      const headerData = lookup.get("header");
      const entityData = lookup.get("entities");
      const stringData = lookup.get("strings");
      const header = new TextDecoder("utf-8").decode(headerData);
      const g3d = G3d.fromBfast(BFast.fromArray(g3dData));
      const assets = BFast.fromArray(assetData);
      const entities = _Document.parseEntityTables(BFast.fromArray(entityData));
      const strings = new TextDecoder("utf-8").decode(stringData).split("\0");
      g3d.validate();
      return new _Document(header, assets, g3d, entities, strings);
    }
    static parseEntityTables(bfast) {
      const result = new Map();
      for (let i = 0; i < bfast.buffers.length; ++i) {
        const current = bfast.names[i];
        const tableName = current.substring(current.indexOf(":") + 1);
        const buffer = bfast.buffers[i];
        const next = _Document.parseEntityTable(BFast.fromArray(buffer));
        result.set(tableName, next);
      }
      return result;
    }
    static parseEntityTable(bfast) {
      const result = new Map();
      for (let i = 0; i < bfast.buffers.length; ++i) {
        const columnName = bfast.names[i];
        const [columnType, ..._] = columnName.split(":");
        const buffer = bfast.buffers[i];
        let length;
        let ctor;
        switch (columnType) {
          case "byte":
            length = buffer.byteLength;
            ctor = Int8Array;
            break;
          case "float":
            length = buffer.byteLength / 4;
            ctor = Float32Array;
            break;
          case "double":
          case "numeric":
            length = buffer.byteLength / 8;
            ctor = Float64Array;
            break;
          case "string":
          case "index":
          case "int":
          case "properties":
            length = buffer.byteLength / 4;
            ctor = Int32Array;
            break;
          default:
            throw new Error("Unrecognized column type " + columnType);
        }
        const columnData = new ctor(buffer.buffer, buffer.byteOffset, length);
        result.set(columnName, columnData);
      }
      return result;
    }
  };
  let Document = _Document;
  __publicField(Document, "tableElement", "Vim.Element");
  __publicField(Document, "tableElementLegacy", "Rvt.Element");
  __publicField(Document, "tableNode", "Vim.Node");
  class Vim {
    constructor(vim2, scene) {
      __publicField(this, "vim");
      __publicField(this, "scene");
      __publicField(this, "elementIndexToInstanceIndices");
      __publicField(this, "elementIdToElementIndex");
      __publicField(this, "getElementIndexFromElementId", (elementId) => this.elementIdToElementIndex.get(elementId));
      __publicField(this, "getStringColumn", (table, colNameNoPrefix) => table == null ? void 0 : table.get("string:" + colNameNoPrefix));
      __publicField(this, "getIndexColumn", (table, tableName, fieldName) => table == null ? void 0 : table.get(`index:${tableName}:${fieldName}`));
      __publicField(this, "getDataColumn", (table, typePrefix, colNameNoPrefix) => {
        var _a;
        return (_a = table == null ? void 0 : table.get(typePrefix + colNameNoPrefix)) != null ? _a : table == null ? void 0 : table.get("numeric:" + colNameNoPrefix);
      });
      __publicField(this, "getIntColumn", (table, colNameNoPrefix) => this.getDataColumn(table, "int:", colNameNoPrefix));
      __publicField(this, "getByteColumn", (table, colNameNoPrefix) => this.getDataColumn(table, "byte:", colNameNoPrefix));
      __publicField(this, "getFloatColumn", (table, colNameNoPrefix) => this.getDataColumn(table, "float:", colNameNoPrefix));
      __publicField(this, "getDoubleColumn", (table, colNameNoPrefix) => this.getDataColumn(table, "double:", colNameNoPrefix));
      __publicField(this, "getElementIndices", (table) => {
        var _a;
        return (_a = this.getIndexColumn(table, Document.tableElement, "Element")) != null ? _a : table == null ? void 0 : table.get(Document.tableElementLegacy);
      });
      __publicField(this, "getElementTable", () => {
        var _a, _b, _c;
        return (_c = (_a = this.vim.entities) == null ? void 0 : _a.get(Document.tableElement)) != null ? _c : (_b = this.vim.entities) == null ? void 0 : _b.get(Document.tableElementLegacy);
      });
      __publicField(this, "getNodeTable", () => this.vim.entities.get(Document.tableNode));
      this.vim = vim2;
      this.scene = scene;
      this.elementIndexToInstanceIndices = this.mapElementIndexToInstanceIndices();
      this.elementIdToElementIndex = this.mapElementIdToIndex();
    }
    mapElementIndexToInstanceIndices() {
      const map = new Map();
      const nodeElements = this.getElementIndices(this.getNodeTable());
      const nodeCount = nodeElements.length;
      for (let node = 0; node < nodeCount; node++) {
        const element = nodeElements[node];
        if (element === void 0)
          continue;
        const nodes = map.get(element);
        if (nodes) {
          nodes.push(node);
        } else {
          map.set(element, [node]);
        }
      }
      return map;
    }
    mapElementIdToIndex() {
      const map = new Map();
      const elementIds = this.getIntColumn(this.getElementTable(), "Id");
      let negativeReported = false;
      let duplicateReported = false;
      for (let element = 0; element < elementIds.length; element++) {
        const id = elementIds[element];
        if (id < 0) {
          if (!negativeReported) {
            console.error("Ignoring negative element ids. Check source data.");
            negativeReported = true;
          }
          continue;
        }
        if (map.has(id)) {
          if (!duplicateReported) {
            console.error("Ignoring duplicate element ids. Check source data.");
            duplicateReported = true;
            continue;
          }
        }
        map.set(id, element);
      }
      return map;
    }
    getNodeIndicesFromElementIndex(elementIndex) {
      return this.elementIndexToInstanceIndices.get(elementIndex);
    }
    getNodeIndicesFromElementIndices(elementIndices) {
      return elementIndices.flatMap((e) => this.getNodeIndicesFromElementIndex(e)).filter((n) => n !== void 0);
    }
    getInstanceIndicesFromElementIds(elementIds) {
      if (!elementIds)
        throw new Error("undefined argument");
      const elementIndices = elementIds.map((id) => this.getElementIndexFromElementId(id)).filter((i) => i !== void 0);
      return this.getNodeIndicesFromElementIndices(elementIndices);
    }
    getMeshesFromElementIndex(elementIndex) {
      const nodeIndices = this.getNodeIndicesFromElementIndex(elementIndex);
      if (!nodeIndices || !nodeIndices.length)
        return null;
      const result = [];
      nodeIndices.forEach((i) => {
        const mesh = this.getMeshFromNodeIndex(i);
        if (mesh)
          result.push(mesh);
      });
      return result;
    }
    getMeshFromNodeIndex(nodeIndex) {
      if (nodeIndex < 0)
        throw new Error("Invalid negative index");
      const array = this.scene.instanceToThreeMesh.get(nodeIndex);
      return array ? array[0] : void 0;
    }
    getNodeIndexFromMesh(mesh, instance) {
      if (!mesh || instance < 0)
        return -1;
      const nodes = this.scene.threeMeshIdToInstance.get(mesh.id);
      if (!nodes)
        return -1;
      return nodes[instance];
    }
    getElementIndexFromMesh(mesh, instance) {
      if (!mesh || instance < 0)
        return -1;
      const nodeIndex = this.getNodeIndexFromMesh(mesh, instance);
      return this.getElementIndexFromNodeIndex(nodeIndex);
    }
    getElementIndexFromNodeIndex(nodeIndex) {
      if (nodeIndex < 0)
        return -1;
      const node = this.getNodeTable();
      if (!node)
        return -1;
      const elements = this.getElementIndices(node);
      if (!elements)
        return -1;
      return elements[nodeIndex];
    }
    getElementIdFromNodeIndex(nodeIndex) {
      if (nodeIndex < 0)
        return -1;
      const elementIndex = this.getElementIndexFromNodeIndex(nodeIndex);
      if (elementIndex < 0)
        return -1;
      const ids = this.getIntColumn(this.getElementTable(), "Id");
      if (!ids)
        return -1;
      return ids[elementIndex];
    }
    getElementName(elementIndex) {
      if (elementIndex < 0)
        return "";
      const names = this.getStringColumn(this.getElementTable(), "Name");
      if (!names)
        return "";
      const nameIndex = names[elementIndex];
      return this.getStringFromIndex(nameIndex);
    }
    getStringFromIndex(stringIndex) {
      return stringIndex < 0 ? "" : this.vim.strings[stringIndex];
    }
  }
  class MeshBuilder {
    constructor(materialOpaque, materialTransparent) {
      __publicField(this, "materialOpaque");
      __publicField(this, "materialTransparent");
      this.materialOpaque = materialOpaque != null ? materialOpaque : this.createDefaultOpaqueMaterial();
      this.materialTransparent = materialTransparent != null ? materialTransparent : this.createDefaultTransparentMaterial();
    }
    createDefaultOpaqueMaterial() {
      return new THREE__namespace.MeshPhongMaterial({
        color: 10066329,
        vertexColors: true,
        flatShading: true,
        side: THREE__namespace.DoubleSide,
        shininess: 70
      });
    }
    createDefaultTransparentMaterial() {
      const material = this.createDefaultOpaqueMaterial();
      material.transparent = true;
      material.depthWrite = true;
      return material;
    }
    createInstancedMeshes(g3d, transparency, instances) {
      const result = [];
      const set = instances ? new Set(instances) : void 0;
      for (let mesh = 0; mesh < g3d.getMeshCount(); mesh++) {
        let meshInstances = g3d.meshInstances[mesh];
        if (!meshInstances)
          continue;
        meshInstances = set ? meshInstances.filter((i) => set.has(i)) : meshInstances;
        if (meshInstances.length <= 1)
          continue;
        if (!transparencyMatches(transparency, g3d.meshTransparent[mesh])) {
          continue;
        }
        const useAlpha = transparencyRequiresAlpha(transparency) && g3d.meshTransparent[mesh];
        const geometry = createFromMesh(g3d, mesh, useAlpha);
        const resultMesh = this.createInstancedMesh(geometry, g3d, meshInstances, useAlpha);
        result.push(resultMesh);
      }
      return result;
    }
    createInstancedMesh(geometry, g3d, instances, useAlpha) {
      const material = useAlpha ? this.materialTransparent : this.materialOpaque;
      const result = new THREE__namespace.InstancedMesh(geometry, material, instances.length);
      for (let i = 0; i < instances.length; i++) {
        const matrix = getInstanceMatrix(g3d, instances[i]);
        result.setMatrixAt(i, matrix);
      }
      result.userData.instances = instances;
      return result;
    }
    createMergedMesh(g3d, transparency, instances) {
      const merger = instances ? MeshMerger.MergeInstances(g3d, instances, transparency) : MeshMerger.MergeUniqueMeshes(g3d, transparency);
      const geometry = merger.toBufferGeometry();
      const material = transparencyRequiresAlpha(transparency) ? this.materialTransparent : this.materialOpaque;
      const mesh = new THREE__namespace.Mesh(geometry, material);
      mesh.userData.merged = true;
      mesh.userData.instances = merger.instances;
      return mesh;
    }
  }
  class Scene {
    constructor() {
      __publicField(this, "meshes", []);
      __publicField(this, "boundingBox", new THREE__namespace.Box3());
      __publicField(this, "instanceToThreeMesh", new Map());
      __publicField(this, "threeMeshIdToInstance", new Map());
    }
    addMergedMesh(mesh) {
      var _a, _b;
      const instances = mesh.userData.instances;
      if (!instances) {
        throw new Error("Expected mesh to have userdata instances : number[]");
      }
      for (let i = 0; i < instances.length; i++) {
        this.instanceToThreeMesh.set(instances[i], [[mesh, 0]]);
      }
      mesh.geometry.computeBoundingBox();
      const box = mesh.geometry.boundingBox;
      this.boundingBox = (_b = (_a = this.boundingBox) == null ? void 0 : _a.union(box)) != null ? _b : box.clone();
      this.threeMeshIdToInstance.set(mesh.id, instances);
      this.meshes.push(mesh);
      return this;
    }
    addInstancedMesh(mesh) {
      this.registerInstancedMesh(mesh);
      this.meshes.push(mesh);
      return this;
    }
    static fromInstancedMeshes(meshes) {
      const scene = new Scene();
      for (let m = 0; m < meshes.length; m++) {
        scene.registerInstancedMesh(meshes[m]);
      }
      scene.meshes = meshes;
      return scene;
    }
    registerInstancedMesh(mesh) {
      var _a, _b;
      const instances = mesh.userData.instances;
      if (!instances || instances.length === 0) {
        throw new Error("Expected mesh to have userdata instances : number[] with at least one member");
      }
      if (mesh.count === 0) {
        throw new Error("Expected mesh to have at least one instance");
      }
      for (let i = 0; i < instances.length; i++) {
        this.instanceToThreeMesh.set(instances[i], [[mesh, i]]);
      }
      const box = this.computeIntancedMeshBoundingBox(mesh);
      this.boundingBox = (_b = (_a = this.boundingBox) == null ? void 0 : _a.union(box)) != null ? _b : box.clone();
      this.threeMeshIdToInstance.set(mesh.id, instances);
    }
    merge(other) {
      var _a, _b;
      other.meshes.forEach((mesh) => this.meshes.push(mesh));
      other.instanceToThreeMesh.forEach((value, key) => {
        var _a2;
        const values = (_a2 = this.instanceToThreeMesh.get(key)) != null ? _a2 : [];
        value.forEach((pair) => values.push(pair));
        this.instanceToThreeMesh.set(key, value);
      });
      other.threeMeshIdToInstance.forEach((value, key) => {
        this.threeMeshIdToInstance.set(key, value);
      });
      this.boundingBox = (_b = (_a = this.boundingBox) == null ? void 0 : _a.union(other.boundingBox)) != null ? _b : other.boundingBox.clone();
      return this;
    }
    computeIntancedMeshBoundingBox(mesh) {
      let result;
      const matrix = new THREE__namespace.Matrix4();
      const box = new THREE__namespace.Box3();
      mesh.geometry.computeBoundingBox();
      for (let i = 0; i < mesh.count; i++) {
        mesh.getMatrixAt(i, matrix);
        box.copy(mesh.geometry.boundingBox);
        box.applyMatrix4(matrix);
        result = result ? result.union(box) : box.clone();
      }
      return result;
    }
    static fromG3d(g3d, transparency = "all", instances = void 0) {
      return createSceneFromG3d(g3d, transparency, instances);
    }
  }
  function createSceneFromG3d(g3d, transparency = "all", instances = void 0) {
    const scene = new Scene();
    const builder = new MeshBuilder();
    const shared = createSceneFromInstanciabledMeshes(g3d, transparency, instances, builder);
    scene.merge(shared);
    if (transparency !== "transparentOnly") {
      const opaque = createSceneFromMergeableMeshes(g3d, transparency === "allAsOpaque" ? "allAsOpaque" : "opaqueOnly", instances, builder);
      scene.merge(opaque);
    }
    if (transparencyRequiresAlpha(transparency)) {
      const transparent = createSceneFromMergeableMeshes(g3d, "transparentOnly", instances, builder);
      scene.merge(transparent);
    }
    return scene;
  }
  function createSceneFromInstanciabledMeshes(g3d, transparency, instances = void 0, builder = new MeshBuilder()) {
    const meshes = builder.createInstancedMeshes(g3d, transparency, instances);
    return Scene.fromInstancedMeshes(meshes);
  }
  function createSceneFromMergeableMeshes(g3d, transparency, instances = void 0, builder = new MeshBuilder()) {
    const mesh = builder.createMergedMesh(g3d, transparency, instances);
    return new Scene().addMergedMesh(mesh);
  }
  class VimLoader {
    loadFromUrl(url, transparency = "all", onLoad, onProgress, onError) {
      const loader = new THREE__namespace.FileLoader();
      loader.setResponseType("arraybuffer");
      loader.setRequestHeader({
        "Content-Encoding": "gzip"
      });
      loader.load(url, (data) => {
        if (!data) {
          onError == null ? void 0 : onError(new ErrorEvent("Failed to obtain file at " + url));
          return;
        }
        if (typeof data === "string") {
          onError == null ? void 0 : onError(new ErrorEvent("Unsupported string loader response"));
          return;
        }
        onProgress == null ? void 0 : onProgress("processing");
        const vim2 = Document.parseFromArrayBuffer(data);
        const scene = this.loadFromVim(vim2, transparency);
        onLoad == null ? void 0 : onLoad(scene);
      }, onProgress, (error) => {
        onError == null ? void 0 : onError(error);
      });
    }
    loadFromArrayBuffer(data, transparency, instances) {
      const vim2 = Document.parseFromArrayBuffer(data);
      return this.loadFromVim(vim2, transparency, instances);
    }
    loadFromVim(vim2, transparency, instances) {
      const scene = Scene.fromG3d(vim2.g3d, transparency, instances);
      return new Vim(vim2, scene);
    }
  }
  const NO_SCENE_LOADED = "No vim loaded in viewer. Ignoring";
  const _Viewer = class {
    constructor(options) {
      __publicField(this, "settings");
      __publicField(this, "environment");
      __publicField(this, "renderer");
      __publicField(this, "selection");
      __publicField(this, "camera");
      __publicField(this, "controls");
      __publicField(this, "vimSettings");
      __publicField(this, "vimScene");
      __publicField(this, "state", "Uninitialized");
      __publicField(this, "onMouseClick");
      __publicField(this, "getElementIndexFromElementId", (elementId) => {
        if (!this.vimScene)
          throw new Error(NO_SCENE_LOADED);
        return this.vimScene.getElementIndexFromElementId(elementId);
      });
      this.settings = new ViewerSettings(options);
      const canvas = _Viewer.getOrCreateCanvas(this.settings.getCanvasId());
      this.renderer = new ViewerRenderer(canvas, this.settings);
      this.camera = new ViewerCamera(this.renderer, this.settings);
      this.environment = new ViewerEnvironment(this.settings);
      this.renderer.addObjects(this.environment.getElements());
      this.onMouseClick = this.defaultOnClick;
      this.controls = new ViewerInput(this);
      this.controls.register();
      this.selection = new Selection(this);
      this.animate();
    }
    animate() {
      requestAnimationFrame(() => this.animate());
      const timeDelta = this.renderer.clock.getDelta();
      this.camera.frameUpdate(timeDelta);
      if (this.vimScene)
        this.renderer.render();
    }
    loadVim(source = "https://vim.azureedge.net/samples/residence.vim", options, onLoad, onProgress, onError) {
      if (this.vimSettings) {
        throw new Error("There is already a vim loaded or loading");
      }
      const settings = new VimSettings(options);
      const finish = (vim2) => {
        const filter = settings.getElementIdsFilter();
        if (filter)
          this.filter(filter);
        else
          this.onVimLoaded(vim2, settings);
        this.lookAtScene();
        onLoad == null ? void 0 : onLoad(vim2);
      };
      if (typeof source === "string") {
        new VimLoader().loadFromUrl(source, settings.getTransparency(), (vim2) => finish(vim2), (progress) => {
          onProgress == null ? void 0 : onProgress(progress);
        }, (error) => {
          this.vimSettings = void 0;
          this.vimScene = void 0;
          onError == null ? void 0 : onError(error);
        });
      } else {
        const vim2 = new VimLoader().loadFromArrayBuffer(source, settings.getTransparency());
        finish(vim2);
      }
    }
    onVimLoaded(vim2, settings) {
      this.vimScene = vim2;
      this.vimSettings = settings;
      const matrix = this.vimSettings.getMatrix();
      this.renderer.addScene(vim2.scene);
      this.renderer.applyMatrix4(matrix);
      this.renderer.render();
      this.ApplyVimSettings();
    }
    static getOrCreateCanvas(canvasId) {
      let canvas = canvasId ? document.getElementById(canvasId) : void 0;
      if (!canvas) {
        canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
      }
      return canvas;
    }
    unloadVim() {
      this.vimScene = void 0;
      this.vimSettings = void 0;
      this.renderer.clearScene();
      this.selection.clear();
    }
    reloadVim(options) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      const settings = new VimSettings(options);
      const elementIds = settings.getElementIdsFilter();
      const instanceIndices = elementIds ? this.vimScene.getInstanceIndicesFromElementIds(elementIds) : void 0;
      const scene = new VimLoader().loadFromVim(this.vimScene.vim, settings.getTransparency(), instanceIndices);
      this.unloadVim();
      this.onVimLoaded(scene, settings);
    }
    filter(includedElementIds) {
      if (!this.vimSettings)
        throw new Error(NO_SCENE_LOADED);
      const options = this.vimSettings.getOptions();
      options.elementIds = includedElementIds;
      this.reloadVim(options);
    }
    clearFilter() {
      if (!this.vimSettings)
        throw new Error(NO_SCENE_LOADED);
      const options = this.vimSettings.getOptions();
      options.elementIds = void 0;
      this.reloadVim(options);
    }
    getElementIndexFromNodeIndex(nodeIndex) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      return this.vimScene.getElementIndexFromNodeIndex(nodeIndex);
    }
    getElementIndexFromMeshInstance(mesh, index) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      return this.vimScene.getElementIndexFromMesh(mesh, index);
    }
    highlightElementByIndex(elementIndex) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      const nodes = this.vimScene.getNodeIndicesFromElementIndex(elementIndex);
      if (!nodes) {
        console.error("Could not find nodes geometry for element index: " + elementIndex);
        return () => {
        };
      }
      const geometry = createFromInstances(this.vimScene.vim.g3d, nodes);
      geometry.applyMatrix4(this.vimSettings.getMatrix());
      if (!geometry) {
        console.error("Could not create geometry for element index: " + elementIndex);
        return () => {
        };
      }
      const disposer = this.highlight(geometry);
      return () => {
        disposer();
        geometry.dispose();
      };
    }
    getBoundingBoxForElementIndex(elementIndex) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      const nodes = this.vimScene.getNodeIndicesFromElementIndex(elementIndex);
      if (!nodes) {
        console.error("Could not find nodes for : " + elementIndex);
        return null;
      }
      const geometry = createFromInstances(this.vimScene.vim.g3d, nodes);
      if (!geometry) {
        console.error("Could not create geometry for element index: " + elementIndex);
        return null;
      }
      geometry.computeBoundingBox();
      const result = geometry.boundingBox;
      geometry.dispose();
      return result;
    }
    selectByElementIndex(elementIndex) {
      if (!this.vimScene)
        throw new Error(NO_SCENE_LOADED);
      console.log("Selecting element with index: " + elementIndex);
      console.log("Bim Element Name: " + this.vimScene.getElementName(elementIndex));
      this.selection.select(elementIndex);
    }
    clearSelection() {
      this.selection.clear();
      console.log("Cleared Selection");
    }
    lookAtElementIndex(elementIndex) {
      const box = this.getBoundingBoxForElementIndex(elementIndex);
      if (!box) {
        console.error("Could not create geometry for element index: " + elementIndex);
        return;
      }
      const sphere = box.getBoundingSphere(new THREE__namespace.Sphere());
      this.camera.lookAtSphere(sphere, true);
    }
    lookAtSelection() {
      if (this.selection.hasSelection()) {
        this.camera.lookAtSphere(this.selection.boundingSphere);
      } else {
        this.camera.frameScene(this.renderer.getBoundingSphere());
      }
    }
    lookAtScene() {
      this.camera.frameScene(this.renderer.getBoundingSphere());
    }
    ApplyViewerSettings() {
      this.environment.applyViewerSettings(this.settings);
      this.camera.applyViewerSettings(this.settings);
    }
    ApplyVimSettings() {
      this.environment.applyVimSettings(this.vimSettings, this.renderer.getBoundingBox());
      this.camera.applyVimSettings(this.renderer.getBoundingSphere());
    }
    defaultOnClick(hit) {
      console.log(hit);
      if (!hit.isHit)
        return;
      this.selectByElementIndex(hit.elementIndex);
      const entity = this.vimScene.vim.getEntity(Document.tableElement, hit.elementIndex);
      this.camera.setTarget(hit.position);
      if (hit.doubleClick)
        this.lookAtSelection();
      console.log(entity);
    }
    highlight(geometry) {
      const wireframe = new THREE__namespace.WireframeGeometry(geometry);
      const material = new THREE__namespace.LineBasicMaterial({
        depthTest: false,
        opacity: 0.5,
        color: new THREE__namespace.Color(255),
        transparent: true
      });
      const line = new THREE__namespace.LineSegments(wireframe, material);
      this.renderer.addObjects([line]);
      return () => {
        this.renderer.scene.remove(line);
        wireframe.dispose();
        material.dispose();
      };
    }
  };
  let Viewer = _Viewer;
  __publicField(Viewer, "stateChangeEvent", "viewerStateChangedEvent");
  exports.BFast = BFast;
  exports.BFastHeader = BFastHeader;
  exports.Document = Document;
  exports.G3d = G3d;
  exports.MeshBuilder = MeshBuilder;
  exports.MeshMerger = MeshMerger;
  exports.Scene = Scene;
  exports.Viewer = Viewer;
  exports.Vim = Vim;
  exports.VimLoader = VimLoader;
  exports.createBufferGeometryFromArrays = createBufferGeometryFromArrays;
  exports.createFromInstances = createFromInstances;
  exports.createFromMesh = createFromMesh;
  exports.createSceneFromG3d = createSceneFromG3d;
  exports.createSceneFromInstanciabledMeshes = createSceneFromInstanciabledMeshes;
  exports.createSceneFromMergeableMeshes = createSceneFromMergeableMeshes;
  exports.getInstanceMatrix = getInstanceMatrix;
  exports.transparencyIsValid = transparencyIsValid;
  exports.transparencyMatches = transparencyMatches;
  exports.transparencyRequiresAlpha = transparencyRequiresAlpha;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports[Symbol.toStringTag] = "Module";
  return exports;
}({}, THREE);
//# sourceMappingURL=vim-webgl-viewer.iife.js.map