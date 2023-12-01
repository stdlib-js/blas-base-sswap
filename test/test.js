/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isBrowser = require( '@stdlib/assert-is-browser' );
var sswap = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': isBrowser
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sswap, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method providing an ndarray interface', function test( t ) {
	t.strictEqual( typeof sswap.ndarray, 'function', 'method is a function' );
	t.end();
});

tape( 'if a native implementation is available, the main export is the native implementation', opts, function test( t ) {
	var sswap = proxyquire( './../lib', {
		'@stdlib/utils-try-require': tryRequire
	});

	t.strictEqual( sswap, mock, 'returns native implementation' );
	t.end();

	function tryRequire() {
		return mock;
	}

	function mock() {
		// Mock...
	}
});

tape( 'if a native implementation is not available, the main export is a JavaScript implementation', opts, function test( t ) {
	var sswap;
	var main;

	main = require( './../lib/sswap.js' );

	sswap = proxyquire( './../lib', {
		'@stdlib/utils-try-require': tryRequire
	});

	t.strictEqual( sswap, main, 'returns JavaScript implementation' );
	t.end();

	function tryRequire() {
		return new Error( 'Cannot find module' );
	}
});
