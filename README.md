<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Interchange two single-precision floating-point vectors.



<section class="usage">

## Usage

```javascript
import sswap from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sswap@esm/index.mjs';
```

#### sswap( N, x, strideX, y, strideY )

Interchanges vectors `x` and `y`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

sswap( x.length, x, 1, y, 1 );
// x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from the strided arrays are accessed at runtime. For example, to swap in reverse order every other value in `x` with the first `N` elements of `y`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

sswap( 3, x, -2, y, 1 );
// x => <Float32Array>[ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ]
// y => <Float32Array>[ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Swap in reverse order every other value from `x1` with `y1`...
sswap( 3, x1, -2, y1, 1 );
// x0 => <Float32Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

#### sswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges vectors `x` and `y` using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

sswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
// x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to swap every other value in `x` starting from the second value with the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

sswap.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// x => <Float32Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import sswap from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sswap@esm/index.mjs';

var x = filledarrayBy( 10, 'float32', discreteUniform( 0, 500 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( 0, 255 ) );
console.log( y );

// Swap elements in `x` and `y` starting from the end of `y`:
sswap( x.length, x, 1, y, -1 );
console.log( x );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dswap`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas-base/gswap`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas-base/scopy`][@stdlib/blas/base/scopy]</span><span class="delimiter">: </span><span class="description">copy values from x into y.</span>
-   <span class="package-name">[`@stdlib/blas-sswap`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-sswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-sswap

[test-image]: https://github.com/stdlib-js/blas-base-sswap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-sswap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-sswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-sswap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-sswap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-sswap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-sswap/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-base-sswap/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-base-sswap/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-base-sswap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-sswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[sswap]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap/tree/esm

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap/tree/esm

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy/tree/esm

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas-sswap/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
