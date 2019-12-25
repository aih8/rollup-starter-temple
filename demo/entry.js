
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, (function () {
		var current = global.webMessager;
		var exports = global.webMessager = factory();
		exports.noConflict = function () { global.webMessager = current; return exports; };
	}()));
}(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dev = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    isProd: false
	};
	//# sourceMappingURL=dev.js.map
	});

	unwrapExports(dev);

	var environment = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Env;
	// @ts-ignore 在rollup-input-options.js 中replace
	{
	    Env = dev.default; // DevEnv
	}
	exports.default = Env;
	//# sourceMappingURL=index.js.map
	});

	unwrapExports(environment);

	var src = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	console.log(environment.default);
	var a = /** @class */ (function () {
	    function a() {
	    }
	    a.prototype.say = function () {
	        alert(1);
	    };
	    return a;
	}());
	// class b extends a {
	//     work() {
	//         console.log('---->')
	//     }
	// }
	exports.default = (function () {
	    return a;
	});

	});

	var index = unwrapExports(src);

	return index;

})));
