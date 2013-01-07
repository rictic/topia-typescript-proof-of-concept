// A modification of Microsoft's lib.d.ts to remove the browser APIs, leaving
// just base ECMAScript.

/// <reference no-default-lib="true"/>

////////////////
/// ECMAScript APIs
////////////////

declare var NaN: number;
declare var Infinity: number;
declare function eval(x: string): any;
declare function parseInt(s: string, radix?: number): number;
declare function parseFloat(string: string): number;
declare function isNaN(number: number): bool;
declare function isFinite(number: number): bool;
declare function decodeURI(encodedURI: string): string;
declare function decodeURIComponent(encodedURIComponent: string): string;
declare function encodeURI(uri: string): string;
declare function encodeURIComponent(uriComponent: string): string;

interface PropertyDescriptor {
    configurable?: bool;
    enumerable?: bool;
    value?: any;
    writable?: bool;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}

interface Object {
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: string): bool;
    isPrototypeOf(v: Object): bool;
    propertyIsEnumerable(v: string): bool;
    [s: string]: any;
}
declare var Object: {
    new (value?: any): Object;
    (): any;
    (value: any): any;
    prototype: Object;
    getPrototypeOf(o: any): any;
    getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;
    getOwnPropertyNames(o: any): string[];
    create(o: any, properties?: PropertyDescriptorMap): any;
    defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;
    defineProperties(o: any, properties: PropertyDescriptorMap): any;
    seal(o: any): any;
    freeze(o: any): any;
    preventExtensions(o: any): any;
    isSealed(o: any): bool;
    isFrozen(o: any): bool;
    isExtensible(o: any): bool;
    keys(o: any): string[];
}

interface Function {
    apply(thisArg: any, ...argArray: any[]): any;
    call(thisArg: any, ...argArray: any[]): any;
    bind(thisArg: any, ...argArray: any[]): any;
    prototype: any;
    length: number;
}
declare var Function: {
    new (...args: string[]): Function;
    (...args: string[]): Function;
    prototype: Function;
}

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

interface String {
    toString(): string;
    charAt(pos: number): string;
    charCodeAt(index: number): number;
    concat(...strings: string[]): string;
    indexOf(searchString: string, position?: number): number;
    lastIndexOf(searchString: string, position?: number): number;
    localeCompare(that: string): number;
    match(regexp: string): string[];
    match(regexp: RegExp): string[];
    replace(searchValue: string, replaceValue: string): string;
    replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;
    replace(searchValue: RegExp, replaceValue: string): string;
    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;
    search(regexp: string): number;
    search(regexp: RegExp): number;
    slice(start: number, end?: number): string;
    split(seperator: string, limit?: number): string[];
    split(seperator: RegExp, limit?: number): string[];
    substring(start: number, end?: number): string;
    toLowerCase(): string;
    toLocaleLowerCase(): string;
    toUpperCase(): string;
    toLocaleUpperCase(): string;
    trim(): string;

    length: number;

    // IE extensions
    substr(from: number, length?: number): string;
}
declare var String: {
    new (value?: any): String;
    (value?: any): string;
    prototype: String;
    fromCharCode(...codes: number[]): string;
}

interface Boolean {
}
declare var Boolean: {
    new (value?: any): Boolean;
    (value?: any): bool;
    prototype: Boolean;
}

interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision: number): string;
}
declare var Number: {
    new (value?: any): Number;
    (value?: any): number;
    prototype: Number;
    MAX_VALUE: number;
    MIN_VALUE: number;
    NaN: number;
    NEGATIVE_INFINITY: number;
    POSITIVE_INFINITY: number;
}

interface Math {
    E: number;
    LN10: number;
    LN2: number;
    LOG2E: number;
    LOG10E: number;
    PI: number;
    SQRT1_2: number;
    SQRT2: number;
    abs(x: number): number;
    acos(x: number): number;
    asin(x: number): number;
    atan(x: number): number;
    atan2(y: number, x: number): number;
    ceil(x: number): number;
    cos(x: number): number;
    exp(x: number): number;
    floor(x: number): number;
    log(x: number): number;
    max(...values: number[]): number;
    min(...values: number[]): number;
    pow(x: number, y: number): number;
    random(): number;
    round(x: number): number;
    sin(x: number): number;
    sqrt(x: number): number;
    tan(x: number): number;
}
declare var Math: Math;

interface Date {
    toString(): string;
    toDateString(): string;
    toTimeString(): string;
    toLocaleString(): string;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    valueOf(): number;
    getTime(): number;
    getFullYear(): number;
    getUTCFullYear(): number;
    getMonth(): number;
    getUTCMonth(): number;
    getDate(): number;
    getUTCDate(): number;
    getDay(): number;
    getUTCDay(): number;
    getHours(): number;
    getUTCHours(): number;
    getMinutes(): number;
    getUTCMinutes(): number;
    getSeconds(): number;
    getUTCSeconds(): number;
    getMilliseconds(): number;
    getUTCMilliseconds(): number;
    getTimezoneOffset(): number;
    setTime(time: number): void;
    setMilliseconds(ms: number): void;
    setUTCMilliseconds(ms: number): void;
    setSeconds(sec: number, ms?: number): void;
    setUTCSeconds(sec: number, ms?: number): void;
    setMinutes(min: number, sec?: number, ms?: number): void;
    setUTCMinutes(min: number, sec?: number, ms?: number): void;
    setHours(hours: number, min?: number, sec?: number, ms?: number): void;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): void;
    setDate(date: number): void;
    setUTCDate(date: number): void;
    setMonth(month: number, date?: number): void;
    setUTCMonth(month: number, date?: number): void;
    setFullYear(year: number, month?: number, date?: number): void;
    setUTCFullYear(year: number, month?: number, date?: number): void;
    toUTCString(): string;
    toISOString(): string;
    toJSON(key?: any): string;
}
declare var Date: {
    new (): Date;
    new (value: number): Date;
    new (value: string): Date;
    new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    prototype: Date;
    parse(s: string): number;
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}

interface RegExpExecArray {
    [index: number]: string;
    length: number;

    index: number;
    input: string;

    toString(): string;
    toLocaleString(): string;
    concat(...items: string[][]): string[];
    join(seperator?: string): string;
    pop(): string;
    push(...items: string[]): number;
    reverse(): string[];
    shift(): string;
    slice(start: number, end?: number): string[];
    sort(compareFn?: (a: string, b: string) => number): string[];
    splice(start: number): string[];
    splice(start: number, deleteCount: number, ...items: string[]): string[];
    unshift(...items: string[]): number;

    indexOf(searchElement: string, fromIndex?: number): number;
    lastIndexOf(searchElement: string, fromIndex?: number): number;
    every(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): bool;
    some(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): bool;
    forEach(callbackfn: (value: string, index: number, array: string[]) => void , thisArg?: any): void;
    map(callbackfn: (value: string, index: number, array: string[]) => any, thisArg?: any): any[];
    filter(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): string[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
}


interface RegExp {
    exec(string: string): RegExpExecArray;
    test(string: string): bool;
    source: string;
    global: bool;
    ignoreCase: bool;
    multiline: bool;
    lastIndex: number;
}
declare var RegExp: {
    new (pattern: string, flags?: string): RegExp;
    (pattern: string, flags?: string): RegExp;
}

interface Error {
    name: string;
    message: string;
}
declare var Error: {
    new (message?: string): Error;
    (message?: string): Error;
    prototype: Error;
}

interface EvalError extends Error {
}
declare var EvalError: {
    new (message?: string): EvalError;
    (message?: string): EvalError;
    prototype: EvalError;
}

interface RangeError extends Error {
}
declare var RangeError: {
    new (message?: string): RangeError;
    (message?: string): RangeError;
    prototype: RangeError;
}

interface ReferenceError extends Error {
}
declare var ReferenceError: {
    new (message?: string): ReferenceError;
    (message?: string): ReferenceError;
    prototype: ReferenceError;
}

interface SyntaxError extends Error {
}
declare var SyntaxError: {
    new (message?: string): SyntaxError;
    (message?: string): SyntaxError;
    prototype: SyntaxError;
}

interface TypeError extends Error {
}
declare var TypeError: {
    new (message?: string): TypeError;
    (message?: string): TypeError;
    prototype: TypeError;
}

interface URIError extends Error {
}
declare var URIError: {
    new (message?: string): URIError;
    (message?: string): URIError;
    prototype: URIError;
}

interface JSON {
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    stringify(value: any): string;
    stringify(value: any, replacer: (key: string, value: any) => any): string;
    stringify(value: any, replacer: any[]): string;
    stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;
    stringify(value: any, replacer: any[], space: any): string;
}
declare var JSON: JSON;

////////////////
/// ECMAScript Array API (specially handled by compiler)
////////////////

interface Array {
    toString(): string;
    toLocaleString(): string;
    concat(...items: _element[][]): _element[];
    join(seperator?: string): string;
    pop(): _element;
    push(...items: _element[]): number;
    reverse(): _element[];
    shift(): _element;
    slice(start: number, end?: number): _element[];
    sort(compareFn?: (a: _element, b: _element) => number): _element[];
    splice(start: number): _element[];
    splice(start: number, deleteCount: number, ...items: _element[]): _element[];
    unshift(...items: _element[]): number;

    indexOf(searchElement: _element, fromIndex?: number): number;
    lastIndexOf(searchElement: _element, fromIndex?: number): number;
    every(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): bool;
    some(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): bool;
    forEach(callbackfn: (value: _element, index: number, array: _element[]) => void , thisArg?: any): void;
    map(callbackfn: (value: _element, index: number, array: _element[]) => any, thisArg?: any): any[];
    filter(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): _element[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: _element[]) => any, initialValue?: any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: _element[]) => any, initialValue?: any): any;

    length: number;
}
declare var Array: {
    new (...items: any[]): any[];
    (...items: any[]): any[];
    isArray(arg: any): bool;
    prototype: Array;
}

////////////////
/// IE10 ECMAScript Extensions
////////////////

interface ArrayBuffer {
    byteLength: number;
}
declare var ArrayBuffer: {
    prototype: ArrayBuffer;
    new (byteLength: number);
}

interface ArrayBufferView {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

interface Int8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int8Array;
}
declare var Int8Array: {
    prototype: Int8Array;
    new (length: number): Int8Array;
    new (array: Int8Array): Int8Array;
    new (array: number[]): Int8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint8Array;
}
declare var Uint8Array: {
    prototype: Uint8Array;
    new (length: number): Uint8Array;
    new (array: Uint8Array): Uint8Array;
    new (array: number[]): Uint8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;
    BYTES_PER_ELEMENT: number;
}

interface Int16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int16Array;
}
declare var Int16Array: {
    prototype: Int16Array;
    new (length: number): Int16Array;
    new (array: Int16Array): Int16Array;
    new (array: number[]): Int16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint16Array;
}
declare var Uint16Array: {
    prototype: Uint16Array;
    new (length: number): Uint16Array;
    new (array: Uint16Array): Uint16Array;
    new (array: number[]): Uint16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;
    BYTES_PER_ELEMENT: number;
}

interface Int32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int32Array;
}
declare var Int32Array: {
    prototype: Int32Array;
    new (length: number): Int32Array;
    new (array: Int32Array): Int32Array;
    new (array: number[]): Int32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint32Array;
}
declare var Uint32Array: {
    prototype: Uint32Array;
    new (length: number): Uint32Array;
    new (array: Uint32Array): Uint32Array;
    new (array: number[]): Uint32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float32Array;
}
declare var Float32Array: {
    prototype: Float32Array;
    new (length: number): Float32Array;
    new (array: Float32Array): Float32Array;
    new (array: number[]): Float32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float64Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float64Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float64Array;
}
declare var Float64Array: {
    prototype: Float64Array;
    new (length: number): Float64Array;
    new (array: Float64Array): Float64Array;
    new (array: number[]): Float64Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;
    BYTES_PER_ELEMENT: number;
}

interface DataView extends ArrayBufferView {
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: bool): number;
    getUint16(byteOffset: number, littleEndian?: bool): number;
    getInt32(byteOffset: number, littleEndian?: bool): number;
    getUint32(byteOffset: number, littleEndian?: bool): number;
    getFloat32(byteOffset: number, littleEndian?: bool): number;
    getFloat64(byteOffset: number, littleEndian?: bool): number;

    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: bool): void;
    setUint16(byteOffset: number, value: number, littleEndian?: bool): void;
    setInt32(byteOffset: number, value: number, littleEndian?: bool): void;
    setUint32(byteOffset: number, value: number, littleEndian?: bool): void;
    setFloat32(byteOffset: number, value: number, littleEndian?: bool): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: bool): void;
}
declare var DataView: {
    prototype: DataView;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): DataView;
}
