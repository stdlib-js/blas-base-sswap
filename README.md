<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Interchange two single-precision floating-point vectors.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-sswap
```

</section>

<section class="usage">

## Usage

```javascript
var sswap = require( '@stdlib/blas-base-sswap' );
```

#### sswap( N, x, strideX, y, strideY )

Interchanges vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

sswap( x.length, x, 1, y, 1 );
// x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of values to swap.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine how values from `x` and `y` are accessed at runtime. For example, to swap in reverse order every other value in `x` with the first `N` elements of `y`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var N = floor( x.length / 2 );

sswap( N, x, -2, y, 1 );
// x => <Float32Array>[ 1.0, 7.0, 3.0, 8.0, 5.0, 9.0 ]
// y => <Float32Array>[ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

// Swap in reverse order every other value from `x1` with `y1`...
sswap( N, x1, -2, y1, 1 );
// x0 => <Float32Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

#### sswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges vectors `x` and `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

sswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
// x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to swap every other value in `x` starting from the second value with the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var N = floor( x.length / 2 );

sswap.ndarray( N, x, 2, 1, y, -1, y.length-1 );
// x => <Float32Array>[ 1.0, 12.0, 11.0, 10.0, 5.0, 6.0 ]
// y => <Float32Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `sswap()` corresponds to the [BLAS][blas] level 1 function [`sswap`][sswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float32Array = require( '@stdlib/array-float32' );
var sswap = require( '@stdlib/blas-base-sswap' );

var x;
var y;
var i;

x = new Float32Array( 10 );
y = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*500.0 );
    y[ i ] = round( randu()*255.0 );
}
console.log( x );
console.log( y );

// Swap elements in `x` and `y` starting from the end of `y`:
sswap( x.length, x, 1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-sswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-sswap

[test-image]: https://github.com/stdlib-js/blas-base-sswap/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-sswap/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-sswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-sswap?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-sswap
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-sswap/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-sswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[sswap]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
