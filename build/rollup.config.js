const fs = require("fs");
const path = require("path");
import plugins from "./plugins";
import jsx from 'acorn-jsx'

function isDir(dir) {
    return fs.lstatSync(dir).isDirectory();
}

const packages = {};
const dir = path.join(__dirname, "../src/packages");
const files = fs.readdirSync(dir);

files.forEach((file) => {
    const absolutePath = path.join(dir, file);

    if (isDir(absolutePath)) {
        packages[file] = path.resolve(
            __dirname,
            `../src/packages/${file}/index.ts`
        );
    }
});

function createRollupConfig(params) {
    const config = {
        input: file,
        output: {
            dir: path.resolve(__dirname, `../libs/es/${name}`),
            format: "es",
            name: name,
            sourcemap: true,
            globals: {
                vue: "Vue",
            },
        },
        plugins: [...plugins],
        acornInjectPlugins: [jsx()],
        external: ["vue", /echarts/, "size-sensor"],
    };
    return config
}


const buildPackages = []
for (let name in packages) {
  const file = packages[name]
  buildPackages.push(createRollupConfig(file, name))
}

export default buildPackages
