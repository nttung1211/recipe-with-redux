function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{MJzj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("XNiG"),i=n("fXoL"),o=function(){var e=function(){function e(){_classCallCheck(this,e),this.ingredients=[],this.ingredientsChanged=new r.a,this.ingredientEdited=new r.a,this.editMode=!1,this.editModeSwitched=new r.a}return _createClass(e,[{key:"isInEditMode",value:function(){return this.editMode}},{key:"turnOffEditMode",value:function(){this.editMode=!1,this.editModeSwitched.next()}},{key:"turnOnEditMode",value:function(){this.editMode=!0,this.editModeSwitched.next()}},{key:"getIngredients",value:function(){return _toConsumableArray(this.ingredients)}},{key:"getIngredient",value:function(e){return this.ingredients.find((function(t,n){return n===e}))}},{key:"add",value:function(e){this.ingredients.push(e),this.ingredientsChanged.next()}},{key:"update",value:function(e,t){this.ingredients[e]=t,this.ingredientsChanged.next()}},{key:"delete",value:function(e){this.ingredients.splice(e,1),this.ingredientsChanged.next()}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);