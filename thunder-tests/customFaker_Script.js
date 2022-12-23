async function customFilter(input) {
    console.log("Loading node module - randomize-everything");

    // ---- load any node module from npm registry
    // the first run will take few seconds as it needs to download the module from npm registry
    var randomizeeverything = await tc.loadModule("randomize-everything");

    // ---- load specific version of moment
    // var moment = await tc.loadModule("moment", "2.29.1");

    return `${input} ${randomizeeverything().format()}`;
}
module.exports = [ customFaker];