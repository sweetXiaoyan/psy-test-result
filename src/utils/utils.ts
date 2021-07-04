/***
 * 节流
 * @param fn 执行函数
 * @param delay 时间间隔
 */
export function throttle(fn: Function, delay = 500) {
  let timer;
  let context = function() {
    let args = arguments;

    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, args);

      clearTimeout(timer);
      timer = null;
    }, delay);
  };

  return context;
}
/**
 * 防抖
 * @param fn 执行函数
 * @param delay 间隔时间
 * @returns
 */
export function debounce(fn: Function, delay = 500) {
  let timer: number | null = null;
  const context = function() {
    const args = arguments;
    clearTimeout(timer!);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };

  return context;
}

// export function observerEvent(obj, type:string, callback:Function) {
//     if(obj.addEventListener){
//         observerEvent = function (obj, type, callback) {
//             obj.addEventListener(type, callback)
//         }
//     }else if(obj.attachEvent){
//         observerEvent = function (obj, type, callback) {
//             obj.attachEvent('on'+type, callback)
//         }
//     }else{
//         observerEvent = function (obj, type, callback) {
//             obj['on'+type] = callback
//     }
//     observerEvent()
// }

/**
 * 深拷贝
 */
// const isComplexDataType = (obj: any) =>
//     (typeof obj === "object" || typeof obj === "function") && obj !== null;
// export function deepClone(obj: any, hash = new WeakMap()) {
//     if (obj.constructor === Date) {
//         return new Date(obj);
//     }

//     if (obj.constructor === RegExp) {
//         return new RegExp(obj);
//     }

//     // 如果循环引用，使用weakMap来解决
//     if (hash.has(obj)) {
//         return hash.get(obj);
//     }

//     let allDesc = Object.getOwnPropertyDescriptors(obj);

//     let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

//     hash.set(obj, cloneObj);
//     for (let key of Reflect.ownKeys(obj)) {
//         cloneObj[key] = isComplexDataType(
//             obj[key] && typeof obj[key] !== "function"
//         );
//     }
//     return cloneObj;
// }

const toString = Object.prototype.toString;

export const isBoolean = (payload: any) => {
  return toString.call(payload) === "[object Boolean]";
};

export const isObject = (payload: any) => {
  return toString.call(payload) === "[object Object]";
};
