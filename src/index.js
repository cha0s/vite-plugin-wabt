export default function ViteWabt(wabt) {
  return {
    name: 'vite-wabt',
    transform(code, id) {
      const [path, query] = id.split('?');
      if (!path.endsWith('.wat')) {
        return null;
      }
      const options = query
        ? Object.fromEntries(
          Array.from(new URLSearchParams(query).entries())
            .map(([key, value]) => [key, value ? !!JSON.parse(value) : true])
        )
        : {};
      const wasmModule = wabt.parseWat(id, code, options);
      const {buffer} = wasmModule.toBinary({});
      return `export default await new Uint8Array([${Array.from(buffer).join(',')}]);`;
    }
  };
}
