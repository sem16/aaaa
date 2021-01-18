//settings
const importObject = {
    module: {
        log: (msgPtr) => {
          console.log(`WASM >> ${getString(asModule, msgPtr)}`);
        }
      },
    env: {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({initial: 256}),
        table: new WebAssembly.Table({initial: 0, element: 'anyfunc'})
    },
    imports: {
        imported_func: function(arg) {
            console.log(arg);
        }
    }
};

//variables
let wasm;

async function instance() {
    const module = await fetch('/a.wasm').catch(() => console.log('err'));
    if(module === undefined ){
        console.log('a')
    }
    WebAssembly.instantiateStreaming(module,importObject).then(wasmInstance => {
        console.log(wasmInstance);
        window.wasm = wasmInstance
        wasm = wasmInstance;
    }).catch(err => console.log(err));
}


instance();
