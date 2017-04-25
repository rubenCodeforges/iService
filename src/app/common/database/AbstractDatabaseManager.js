"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractDatabaseManager = (function () {
    function AbstractDatabaseManager(db) {
        this.db = db;
    }
    AbstractDatabaseManager.prototype.getDb = function () {
        return this.db;
    };
    return AbstractDatabaseManager;
}());
exports.AbstractDatabaseManager = AbstractDatabaseManager;
