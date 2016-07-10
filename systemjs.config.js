/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

   var formsVer = '@0.2.0'; // lock forms version

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app_js', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
   
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },

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

  // function packUmd(pkgName) {
  //   packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  // };
     function packUmd(pkgName) {
        if (pkgName == "router") {
            packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
        } else {
            packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
        }
          packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };
}

 // Forms not on rc yet


  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
