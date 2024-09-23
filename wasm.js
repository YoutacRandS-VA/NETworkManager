import * as esbuild from 'https://deno.land/x/esbuild@v0.24.0/wasm.js'
let ts = 'let test: boolean = true'
let result = await esbuild.transform(ts, { loader: 'ts' })
console.log('result:', result)
await esbuild.stop()