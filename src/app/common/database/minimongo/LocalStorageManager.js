"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var minimongo = require("minimongo");
var AbstractDatabaseManager_1 = require("../AbstractDatabaseManager");
var _ = require("lodash");
/** Example
 this.lsManager = new LocalStorageManager("carDb");
 this.lsManager.db.addCollection("car");
 this.lsManager.db.car.upsert(car);
 this.lsManager.db.car.resolveUpserts(this.lsManager.db.car.upserts);
 */
var LocalStorageManager = (function (_super) {
    __extends(LocalStorageManager, _super);
    function LocalStorageManager(dbNamespace) {
        if (dbNamespace === void 0) { dbNamespace = "iService"; }
        var _this = _super.call(this, minimongo.LocalStorageDb) || this;
        _this.createDb(dbNamespace);
        return _this;
    }
    LocalStorageManager.prototype.addCollection = function (name, success, error) {
        if (!this.storage.collections[name]) {
            this.storage.addCollection(name, success, error);
        }
    };
    LocalStorageManager.prototype.getItems = function (collection) {
        this.collectionShouldExist(collection);
        return _.map(this.storage[collection].items, function (value) { return value; });
    };
    LocalStorageManager.prototype.put = function (params) {
        this.storage[params.collection].upsert(params.documents);
    };
    LocalStorageManager.prototype.find = function (params) {
        this.collectionShouldExist(params.collection);
        this.storage[params.collection].find(params.selector, params.options);
    };
    LocalStorageManager.prototype.findOne = function (params) {
        this.collectionShouldExist(params.collection);
        this.storage[params.collection].findOne(params.selector, params.options, params.success, params.error);
    };
    LocalStorageManager.prototype.createDb = function (dbNamespace) {
        this.storage = new this.db({ namespace: dbNamespace });
    };
    LocalStorageManager.prototype.isCollectionAvailable = function (collection) {
        return !!this.storage.collections[collection];
    };
    LocalStorageManager.prototype.collectionShouldExist = function (collection) {
        if (!this.isCollectionAvailable(collection)) {
            throw new TypeError("Collection: " + collection + " not found");
        }
    };
    return LocalStorageManager;
}(AbstractDatabaseManager_1.AbstractDatabaseManager));
exports.LocalStorageManager = LocalStorageManager;
