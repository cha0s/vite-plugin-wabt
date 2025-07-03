![CI](https://github.com/cha0s/vite-plugin-wabt/actions/workflows/ci.yml/badge.svg)

# `vite-plugin-wabt` :hammer:

A tiny plugin to allow importing [WAT](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Understanding_the_text_format) files as binary `ArrayBuffer`s that can be used with e.g. [`WebAssembly.instantiate`](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static). Supports wabt's WASM features!

## Example :magic_wand:

```js
// vite.config.js

import {defineConfig} from 'vite';
import ViteWabt from 'vite-plugin-wabt';
import wabt from 'wabt';

export default defineConfig({
  plugins: [
    new ViteWabt(await wabt())
  ],
});
```

```js
// src/index.js

import buffer from './my-wat-file.wat';

const result = await WebAssembly.instantiate(buffer);

// for example...
result.instance.exports.some_export('foo', 42);
```

## WASM Features :keyboard:

| Key                   | Description                       | Default value |
|-----------------------|-----------------------------------|---------------|
| `exceptions`          | Experimental exception handling   | false         |
| `mutable_globals`     | Import/export mutable globals     | true          |
| `sat_float_to_int`    | Saturating float-to-int operators | true          |
| `sign_extension`      | Sign-extension operators          | true          |
| `simd`                | SIMD support                      | true          |
| `threads`             | Threading support                 | false         |
| `function_references` | Typed function references         | false         |
| `multi_value`         | Multi-value                       | true          |
| `tail_call`           | Tail-call support                 | false         |
| `bulk_memory`         | Bulk-memory operations            | true          |
| `reference_types`     | Reference types (externref)       | true          |
| `annotations`         | Custom annotation syntax          | false         |
| `code_metadata`       | Code metadata                     | false         |
| `gc`                  | Garbage collection                | false         |
| `memory64`            | 64-bit memory                     | false         |
| `multi_memory`        | Multi-memory                      | false         |
| `extended_const`      | Extended constant expressions     | false         |
| `relaxed_simd`        | Relaxed SIMD                      | false         |
| `custom_page_sizes`   | Custom page sizes                 | false         |

These options may be passed through the import query.

For example, if you are importing a WAT file that uses the `multi_memory` WASM feature, you may import it like so:

```js
import buffer from './multi-memory-code.wat?multi_memory=true';
```

or to disable a WASM feature:

```js
import buffer from './my-wat-file.wat?reference_types=false';
```

Features are configured using [truthy/falsy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) values.

Similarly to HTML attributes, a key with an empty value defaults to `true`:

```js
import buffer from './multi-memory-code.wat?multi_memory';
```

## TODO :construction:

I haven't written exhaustive tests to cover all the WASM features that wabt supports. Writing a new test to cover one would be a nice first pull request if you are interested in contributing!
