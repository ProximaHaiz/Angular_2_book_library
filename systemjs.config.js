/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app_js', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },
<<<<<<< HEAD
    // 'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    // '@angular/router': { main: 'index.js', defaultExtension: 'js' },
    'tiny-ng-store': { defaultExtension: 'min.js' },
        'rxjs'                             : {main: 'index'},
    '@angular/core'                    : {main: 'index'},
    '@angular/common'                  : {main: 'index'},
    '@angular/compiler'                : {main: 'index'},
    '@angular/router'                  : {main: 'index'},
    '@angular/platform-browser'        : {main: 'index'},
'@angular/platform-browser-dynamic': {main: 'index'}
=======
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
<<<<<<< HEAD
  // function packUmd(pkgName) {
  //   packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  // };
     function packUmd(pkgName) {
        if (pkgName == "router") {
            packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
        } else {
            packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
        }
}
=======
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
