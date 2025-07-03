import {expect, test} from 'vitest';

test('multi-memory', async () => {
  await expect((async () => {
    await import(
      './multi-memory.test.wat?multi_memory=false'
    );
  })()).rejects.toThrowError();
  await expect((async () => {
    await import(
      './multi-memory.test.wat?multi_memory'
    );
  })()).resolves;
})

// from https://github.com/WebAssembly/wabt/blob/765b47d02aac894da80b74284263d1b487415aa0/include/wabt/feature.def

// WABT_FEATURE(exceptions,          "exceptions",              false,   "Experimental exception handling")
// WABT_FEATURE(mutable_globals,     "mutable-globals",         true,    "Import/export mutable globals")
// WABT_FEATURE(sat_float_to_int,    "saturating-float-to-int", true,    "Saturating float-to-int operators")
// WABT_FEATURE(sign_extension,      "sign-extension",          true,    "Sign-extension operators")
// WABT_FEATURE(simd,                "simd",                    true,    "SIMD support")
// WABT_FEATURE(threads,             "threads",                 false,   "Threading support")
// WABT_FEATURE(function_references, "function-references",     false,   "Typed function references")
// WABT_FEATURE(multi_value,         "multi-value",             true,    "Multi-value")
// WABT_FEATURE(tail_call,           "tail-call",               false,   "Tail-call support")
// WABT_FEATURE(bulk_memory,         "bulk-memory",             true,    "Bulk-memory operations")
// WABT_FEATURE(reference_types,     "reference-types",         true,    "Reference types (externref)")
// WABT_FEATURE(annotations,         "annotations",             false,   "Custom annotation syntax")
// WABT_FEATURE(code_metadata,       "code-metadata",           false,   "Code metadata")
// WABT_FEATURE(gc,                  "gc",                      false,   "Garbage collection")
// WABT_FEATURE(memory64,            "memory64",                false,   "64-bit memory")
// WABT_FEATURE(multi_memory,        "multi-memory",            false,   "Multi-memory")
// WABT_FEATURE(extended_const,      "extended-const",          false,   "Extended constant expressions")
// WABT_FEATURE(relaxed_simd,        "relaxed-simd",            false,   "Relaxed SIMD")
// WABT_FEATURE(custom_page_sizes,   "custom-page-sizes",       false,   "Custom page sizes")
