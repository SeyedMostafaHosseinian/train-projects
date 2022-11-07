# tips in tsconfig.json 
* target : 
This option is related to the settings of your JavaScript version when compiling TypeScript, that is, if your code is any version of EkmaScript, it will be compiled with Ekma. By default, its value is ES5, but it is usually set to ES6 so that, for example, it does not define all variables with var.


*module :
The module system is independent of the language implementation. ES6 (ES2015) modules use the import/export syntax, and it is up to the module loader to interpret that.
