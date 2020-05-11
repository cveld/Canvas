!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);var i;!function(t){const e="BlazorExtensions",n={Canvas2d:new r.ContextManager("2d"),WebGL:new r.ContextManager("webgl")};t.initialize=function(){"undefined"==typeof window||window[e]?window[e]=Object.assign({},window[e],n):window[e]=Object.assign({},n)}}(i||(i={})),i.initialize()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ContextManager=class{constructor(t){if(this.contexts=new Map,this.webGLObject=new Array,this.webGLContext=!1,this.webGLTypes=[WebGLBuffer,WebGLShader,WebGLProgram,WebGLFramebuffer,WebGLRenderbuffer,WebGLTexture,WebGLUniformLocation],this.add=((t,e)=>{if(!t)throw new Error("Invalid canvas.");if(!this.contexts.get(t.id)){var n;if(!(n=e?t.getContext(this.contextName,e):t.getContext(this.contextName)))throw new Error("Invalid context.");this.contexts.set(t.id,n)}}),this.remove=(t=>{this.contexts.delete(t.id)}),this.setProperty=((t,e,n)=>{const r=this.getContext(t);this.setPropertyWithContext(r,e,n)}),this.getProperty=((t,e)=>{const n=this.getContext(t);return this.serialize(n[e])}),this.call=((t,e,n)=>{const r=this.getContext(t);return this.callWithContext(r,e,n)}),this.callBatch=((t,e)=>{const n=this.getContext(t);for(let t=0;t<e.length;t++){let r=e[t].slice(2);e[t][1]?this.callWithContext(n,e[t][0],r):this.setPropertyWithContext(n,e[t][0],Array.isArray(r)&&r.length>0?r[0]:null)}}),this.callWithContext=((t,e,n)=>this.serialize(this.prototypes[e].apply(t,void 0!=n?n.map(t=>this.deserialize(e,t)):[]))),this.setPropertyWithContext=((t,e,n)=>{t[e]=this.deserialize(e,n)}),this.getContext=(t=>{if(!t)throw new Error("Invalid canvas.");const e=this.contexts.get(t.id);if(!e)throw new Error("Invalid context.");return e}),this.deserialize=((t,e)=>{if(!this.webGLContext||void 0==e)return e;if(e.hasOwnProperty("webGLType")&&e.hasOwnProperty("id"))return this.webGLObject[e.id];if(Array.isArray(e)&&!t.endsWith("v"))return Int8Array.of(...e);if("string"!=typeof e||"bufferData"!==t&&"bufferSubData"!==t)return e;{let t=window.atob(e),r=t.length,i=new Uint8Array(r);for(var n=0;n<r;n++)i[n]=t.charCodeAt(n);return i}}),this.serialize=(t=>{if(t instanceof TextMetrics)return{width:t.width};if(!this.webGLContext||void 0==t)return t;const e=this.webGLTypes.find(e=>t instanceof e);if(void 0!=e){const n=this.webGLObject.length;return this.webGLObject.push(t),{webGLType:e.name,id:n}}return t}),this.contextName=t,"2d"===t)this.prototypes=CanvasRenderingContext2D.prototype;else{if("webgl"!==t&&"experimental-webgl"!==t)throw new Error(`Invalid context name: ${t}`);this.prototypes=WebGLRenderingContext.prototype,this.webGLContext=!0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0NvbnRleHRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ2FudmFzQ29udGV4dE1hbmFnZXJfMSIsIkNhbnZhcyIsImJsYXpvckV4dGVuc2lvbnMiLCJleHRlbnNpb25PYmplY3QiLCJDYW52YXMyZCIsIkNvbnRleHRNYW5hZ2VyIiwiV2ViR0wiLCJpbml0aWFsaXplIiwid2luZG93IiwiYXNzaWduIiwiW29iamVjdCBPYmplY3RdIiwiY29udGV4dE5hbWUiLCJ0aGlzIiwiY29udGV4dHMiLCJNYXAiLCJ3ZWJHTE9iamVjdCIsIkFycmF5Iiwid2ViR0xDb250ZXh0Iiwid2ViR0xUeXBlcyIsIldlYkdMQnVmZmVyIiwiV2ViR0xTaGFkZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTEZyYW1lYnVmZmVyIiwiV2ViR0xSZW5kZXJidWZmZXIiLCJXZWJHTFRleHR1cmUiLCJXZWJHTFVuaWZvcm1Mb2NhdGlvbiIsImFkZCIsImNhbnZhcyIsInBhcmFtZXRlcnMiLCJFcnJvciIsImlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzZXQiLCJyZW1vdmUiLCJkZWxldGUiLCJzZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5V2l0aENvbnRleHQiLCJnZXRQcm9wZXJ0eSIsInNlcmlhbGl6ZSIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsV2l0aENvbnRleHQiLCJjYWxsQmF0Y2giLCJiYXRjaGVkQ2FsbHMiLCJsZW5ndGgiLCJwYXJhbXMiLCJzbGljZSIsImlzQXJyYXkiLCJwcm90b3R5cGVzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJtYXAiLCJkZXNlcmlhbGl6ZSIsImVuZHNXaXRoIiwiSW50OEFycmF5Iiwib2YiLCJiaW5TdHIiLCJhdG9iIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsIlRleHRNZXRyaWNzIiwid2lkdGgiLCJ0eXBlIiwiZmluZCIsInB1c2giLCJ3ZWJHTFR5cGUiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJXZWJHTFJlbmRlcmluZ0NvbnRleHQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsYUFBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFB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RCxFQUFTWSxFQUFPWixPQUNoQmMsRUFBUSxJQUFJQyxXQUFXZixHQUMzQixJQUFLLElBQUk3RSxFQUFJLEVBQUdBLEVBQUk2RSxFQUFRN0UsSUFDeEIyRixFQUFNM0YsR0FBS3lGLEVBQU9JLFdBQVc3RixHQUVqQyxPQUFPMkYsS0FLSC9DLEtBQUEyQixVQUFZLENBQUM3QyxJQUNuQixHQUFJQSxhQUFrQm9FLFlBQ2xCLE9BQVNDLE1BQU9yRSxFQUFPcUUsT0FHM0IsSUFBS25ELEtBQUtLLG1CQUEwQmtDLEdBQVZ6RCxFQUFxQixPQUFPQSxFQUV0RCxNQUFNc0UsRUFBT3BELEtBQUtNLFdBQVcrQyxLQUFNRCxHQUFTdEUsYUFBa0JzRSxHQUM5RCxRQUFZYixHQUFSYSxFQUFtQixDQUNyQixNQUFNbEMsRUFBS2xCLEtBQUtHLFlBQVk4QixPQUc1QixPQUZBakMsS0FBS0csWUFBWW1ELEtBQUt4RSxJQUdwQnlFLFVBQVdILEVBQUt6RixLQUNoQnVELEdBQUlBLEdBR04sT0FBT3BDLElBaEhUa0IsS0FBS0QsWUFBY0EsRUFDQyxPQUFoQkEsRUFDRkMsS0FBS3FDLFdBQWFtQix5QkFBeUJ4RSxjQUN4QyxJQUFvQixVQUFoQmUsR0FBMkMsdUJBQWhCQSxFQUlsQyxNQUFNLElBQUlrQiwrQkFBK0JsQixLQUh6Q0MsS0FBS3FDLFdBQWFvQixzQkFBc0J6RSxVQUN4Q2dCLEtBQUtLLGNBQWUiLCJmaWxlIjoiYmxhem9yLmV4dGVuc2lvbnMuY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuL0NhbnZhc0NvbnRleHRNYW5hZ2VyJztcclxuXHJcbm5hbWVzcGFjZSBDYW52YXMge1xyXG4gIGNvbnN0IGJsYXpvckV4dGVuc2lvbnM6IHN0cmluZyA9ICdCbGF6b3JFeHRlbnNpb25zJztcclxuICAvLyBkZWZpbmUgd2hhdCB0aGlzIGV4dGVuc2lvbiBhZGRzIHRvIHRoZSB3aW5kb3cgb2JqZWN0IGluc2lkZSBCbGF6b3JFeHRlbnNpb25zXHJcbiAgY29uc3QgZXh0ZW5zaW9uT2JqZWN0ID0ge1xyXG4gICAgQ2FudmFzMmQ6IG5ldyBDb250ZXh0TWFuYWdlcihcIjJkXCIpLFxyXG4gICAgV2ViR0w6IG5ldyBDb250ZXh0TWFuYWdlcihcIndlYmdsXCIpXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSkge1xyXG4gICAgICAvLyB3aGVuIHRoZSBsaWJyYXJ5IGlzIGxvYWRlZCBpbiBhIGJyb3dzZXIgdmlhIGEgPHNjcmlwdD4gZWxlbWVudCwgbWFrZSB0aGVcclxuICAgICAgLy8gZm9sbG93aW5nIEFQSXMgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSBmb3IgaW52b2NhdGlvbiBmcm9tIEpTXHJcbiAgICAgIHdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAuLi5leHRlbnNpb25PYmplY3RcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAuLi53aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10sXHJcbiAgICAgICAgLi4uZXh0ZW5zaW9uT2JqZWN0XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQ2FudmFzLmluaXRpYWxpemUoKTtcclxuIiwiZXhwb3J0IGNsYXNzIENvbnRleHRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHRzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHdlYkdMT2JqZWN0ID0gbmV3IEFycmF5PGFueT4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHROYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB3ZWJHTENvbnRleHQgPSBmYWxzZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHByb3RvdHlwZXM6IGFueTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHdlYkdMVHlwZXMgPSBbXHJcbiAgICBXZWJHTEJ1ZmZlciwgV2ViR0xTaGFkZXIsIFdlYkdMUHJvZ3JhbSwgV2ViR0xGcmFtZWJ1ZmZlciwgV2ViR0xSZW5kZXJidWZmZXIsIFdlYkdMVGV4dHVyZSwgV2ViR0xVbmlmb3JtTG9jYXRpb25cclxuICBdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoY29udGV4dE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb250ZXh0TmFtZSA9IGNvbnRleHROYW1lO1xyXG4gICAgaWYgKGNvbnRleHROYW1lID09PSBcIjJkXCIpXHJcbiAgICAgIHRoaXMucHJvdG90eXBlcyA9IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGU7XHJcbiAgICBlbHNlIGlmIChjb250ZXh0TmFtZSA9PT0gXCJ3ZWJnbFwiIHx8IGNvbnRleHROYW1lID09PSBcImV4cGVyaW1lbnRhbC13ZWJnbFwiKSB7XHJcbiAgICAgIHRoaXMucHJvdG90eXBlcyA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dC5wcm90b3R5cGU7XHJcbiAgICAgIHRoaXMud2ViR0xDb250ZXh0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29udGV4dCBuYW1lOiAke2NvbnRleHROYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwYXJhbWV0ZXJzOiBhbnkpID0+IHtcclxuICAgIGlmICghY2FudmFzKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2FudmFzLicpO1xyXG4gICAgaWYgKHRoaXMuY29udGV4dHMuZ2V0KGNhbnZhcy5pZCkpIHJldHVybjtcclxuXHJcbiAgICB2YXIgY29udGV4dDtcclxuICAgIGlmIChwYXJhbWV0ZXJzKVxyXG4gICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQodGhpcy5jb250ZXh0TmFtZSwgcGFyYW1ldGVycyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCh0aGlzLmNvbnRleHROYW1lKTtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250ZXh0LicpO1xyXG5cclxuICAgIHRoaXMuY29udGV4dHMuc2V0KGNhbnZhcy5pZCwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuY29udGV4dHMuZGVsZXRlKGNhbnZhcy5pZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJvcGVydHkgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjYW52YXMpO1xyXG4gICAgdGhpcy5zZXRQcm9wZXJ0eVdpdGhDb250ZXh0KGNvbnRleHQsIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJvcGVydHkgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcHJvcGVydHk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjYW52YXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKGNvbnRleHRbcHJvcGVydHldKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcclxuICAgIHJldHVybiB0aGlzLmNhbGxXaXRoQ29udGV4dChjb250ZXh0LCBtZXRob2QsIGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxCYXRjaCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBiYXRjaGVkQ2FsbHM6IGFueVtdW10pID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0Y2hlZENhbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSBiYXRjaGVkQ2FsbHNbaV0uc2xpY2UoMik7XHJcbiAgICAgIGlmIChiYXRjaGVkQ2FsbHNbaV1bMV0pIHtcclxuICAgICAgICB0aGlzLmNhbGxXaXRoQ29udGV4dChjb250ZXh0LCBiYXRjaGVkQ2FsbHNbaV1bMF0sIHBhcmFtcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVdpdGhDb250ZXh0KFxyXG4gICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgIGJhdGNoZWRDYWxsc1tpXVswXSxcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID4gMCA/IHBhcmFtc1swXSA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGxXaXRoQ29udGV4dCA9IChjb250ZXh0OiBhbnksIG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZSh0aGlzLnByb3RvdHlwZXNbbWV0aG9kXS5hcHBseShjb250ZXh0LCBhcmdzICE9IHVuZGVmaW5lZCA/IGFyZ3MubWFwKCh2YWx1ZSkgPT4gdGhpcy5kZXNlcmlhbGl6ZShtZXRob2QsIHZhbHVlKSkgOiBbXSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQcm9wZXJ0eVdpdGhDb250ZXh0ID0gKGNvbnRleHQ6IGFueSwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgY29udGV4dFtwcm9wZXJ0eV0gPSB0aGlzLmRlc2VyaWFsaXplKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbnRleHQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYW52YXMuJyk7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dHMuZ2V0KGNhbnZhcy5pZCk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250ZXh0LicpO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZSA9IChtZXRob2Q6IHN0cmluZywgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgIGlmICghdGhpcy53ZWJHTENvbnRleHQgfHwgb2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIG9iamVjdDsgLy9kZXNlcmlhbGl6YXRpb24gb25seSBuZWVkcyB0byBoYXBwZW4gZm9yIHdlYkdMXHJcblxyXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShcIndlYkdMVHlwZVwiKSAmJiBvYmplY3QuaGFzT3duUHJvcGVydHkoXCJpZFwiKSkge1xyXG4gICAgICByZXR1cm4gKHRoaXMud2ViR0xPYmplY3Rbb2JqZWN0W1wiaWRcIl1dKTtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpICYmICFtZXRob2QuZW5kc1dpdGgoXCJ2XCIpKSB7XHJcbiAgICAgIHJldHVybiBJbnQ4QXJyYXkub2YoLi4uKG9iamVjdCBhcyBudW1iZXJbXSkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Yob2JqZWN0KSA9PT0gXCJzdHJpbmdcIiAmJiAobWV0aG9kID09PSBcImJ1ZmZlckRhdGFcIiB8fCBtZXRob2QgPT09IFwiYnVmZmVyU3ViRGF0YVwiKSkge1xyXG4gICAgICBsZXQgYmluU3RyID0gd2luZG93LmF0b2Iob2JqZWN0KTtcclxuICAgICAgbGV0IGxlbmd0aCA9IGJpblN0ci5sZW5ndGg7XHJcbiAgICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGJ5dGVzW2ldID0gYmluU3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJ5dGVzO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlcmlhbGl6ZSA9IChvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFRleHRNZXRyaWNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IG9iamVjdC53aWR0aCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy53ZWJHTENvbnRleHQgfHwgb2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIG9iamVjdDsgLy9zZXJpYWxpemF0aW9uIG9ubHkgbmVlZHMgdG8gaGFwcGVuIGZvciB3ZWJHTFxyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLndlYkdMVHlwZXMuZmluZCgodHlwZSkgPT4gb2JqZWN0IGluc3RhbmNlb2YgdHlwZSk7XHJcbiAgICBpZiAodHlwZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgaWQgPSB0aGlzLndlYkdMT2JqZWN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy53ZWJHTE9iamVjdC5wdXNoKG9iamVjdCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdlYkdMVHlwZTogdHlwZS5uYW1lLFxyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2VcclxuICAgICAgcmV0dXJuIG9iamVjdDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==