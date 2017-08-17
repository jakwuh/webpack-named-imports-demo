// import(/* webpackChunkName: "async-import" */'./a.js');
//
// Promise.all([
//     import(/* webpackChunkName: "async-imports" */'./b.js'),
//     import(/* webpackChunkName: "async-imports" */'./c.js')
// ]);

importModules('./a.js', 'async-import')

importModules([
    './b.js',
    './c.js'
], 'async-imports')
