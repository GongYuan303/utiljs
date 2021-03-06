'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var regExp = new Object({
  helloWorld: function helloWorld(str) {
    return 'hello world ,欢迎您使用 Util CommonJS!【regExp】';
  },

  isPositiveNum: function isPositiveNum(val) {
    return (/^[1-9]d*$/.test(val)
    );
  },

  isNegativeNum: function isNegativeNum(val) {
    return (/^-[1-9]d*$/.test(val)
    );
  },

  isInteger: function isInteger(val) {
    return (/^(-|\+)?\d+$/.test(val)
    );
  },

  isNotNegativeFloatNum: function isNotNegativeFloatNum(val) {
    return (/^\d+(\.\d+)?$/.test(val)
    );
  },

  isAZaz: function isAZaz(val) {
    return (/^[A-Za-z]+$/.test(val)
    );
  },

  isAZ: function isAZ(val) {
    return (/^[A-Z]+$/.test(val)
    );
  },

  isaz: function isaz(val) {
    return (/^[a-z]+$/.test(val)
    );
  },

  isEmailAddress: function isEmailAddress(val) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
    );
  }
});
exports.regExp = regExp;
exports.default = regExp;