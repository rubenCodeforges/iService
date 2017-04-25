"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageManager_1 = require("./minimongo/LocalStorageManager");
var DatabaseConfig_1 = require("./DatabaseConfig");
var DatabaseAdapter = (function () {
    function DatabaseAdapter() {
    }
    DatabaseAdapter.get = function (dbNamespace) {
        if (DatabaseConfig_1.DatabaseConfig.DATABASE_PROVIDER === DatabaseConfig_1.DatabaseProviders.LOCAL_STORAGE) {
            return DatabaseAdapter.initManager(new LocalStorageManager_1.LocalStorageManager(dbNamespace));
        }
    };
    DatabaseAdapter.initManager = function (manager) {
        if (!DatabaseAdapter.manager) {
            this.manager = manager;
        }
        return this.manager;
    };
    return DatabaseAdapter;
}());
exports.DatabaseAdapter = DatabaseAdapter;
