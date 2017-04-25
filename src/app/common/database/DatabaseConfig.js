"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseProviders;
(function (DatabaseProviders) {
    DatabaseProviders[DatabaseProviders["LOCAL_STORAGE"] = 'LOCAL_STORAGE'] = "LOCAL_STORAGE";
    DatabaseProviders[DatabaseProviders["MEMORY_STORAGE"] = 'MEMORY_STORAGE'] = "MEMORY_STORAGE";
    DatabaseProviders[DatabaseProviders["MONGO"] = 'MONGO'] = "MONGO";
})(DatabaseProviders = exports.DatabaseProviders || (exports.DatabaseProviders = {}));
var DatabaseConfig = (function () {
    function DatabaseConfig() {
    }
    return DatabaseConfig;
}());
DatabaseConfig.DATABASE_PROVIDER = DatabaseProviders.LOCAL_STORAGE;
exports.DatabaseConfig = DatabaseConfig;
