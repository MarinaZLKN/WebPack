
module.exports = {
    mode: "development",
    entry: "./home", //говорит о том, какой модуль собирать
    output: {  //говорит о том, куда будем выводить
        filename: "build.js",
        library: "home",
    },

    watch: true, //webpack будет сам перезапускать сборку

    // watchOptions: {
    //     aggregateTimeout: 50,  //время, в течение которого wb еще не запускает сборку
    // },

    devtool: "inline-cheap-source-map",
};