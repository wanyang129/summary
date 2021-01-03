// UMD 兼容AMD和CommonJS规范的同时，还兼容全局引用的方式。
// 适用场景：浏览器或服务器环境。
// 这里的root是window对象
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD:Asynchronous Module Definition,即异步模块加载机制。
        // AMD规范只有一个API，即define函数：
        // define([module-name?],[array-of-dependencies?],[module-factory-or-object]);
        // module-name：模块标识，可以省略
        // array-of-dependencies：所依赖的模块，可以省略
        // module-factory-or-object：模块的实现，或者一个JavaScript对象
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS定义的模块分为：模块标识（module）、模块定义（exports）、模块引用（require）
        // exports只是module.exports的引用，辅助后者添加内容用的。
        module.exports = factory(require('jquery'));
    } else {
        root.returnExports = factory(root.jQuery);
    }
})(this, function ($) {
})