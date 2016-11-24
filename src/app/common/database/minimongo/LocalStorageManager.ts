// import * as minimongo from "minimongo";
// import * as _ from "lodash";
// import {AbstractDatabaseManager} from "../AbstractDatabaseManager";
//
// /** Example
//  this.lsManager = new LocalStorageManager("carDb");
//  this.lsManager.db.addCollection("car");
//  this.lsManager.db.car.upsert(car);
//  this.lsManager.db.car.resolveUpserts(this.lsManager.db.car.upserts);
//  */
// export class LocalStorageManager extends AbstractDatabaseManager<LocalStorageManager> {
//     protected db: any;
//     private storage: LocalStorageDb;
//
//     constructor(dbNamespace: string = "iService") {
//         super(minimongo.LocalStorageDb);
//         this.createDb(dbNamespace);
//     }
//
//
//     public addCollection(name: string, success?: ()=> any, error?: ()=> any) {
//         if (!this.storage.collections[name]) {
//             this.storage.addCollection(name, success, error);
//         }
//     }
//
//     public getItems(collection: string): Array<any> {
//         this.collectionShouldExist(collection);
//         console.log(this.storage);
//         return _.map(this.storage[collection].items, (value)=> value);
//     }
//
//     public put(params: PutParams) {
//         this.storage[params.collection].upsert(params.documents);
//     }
//
//     public find(params: FindParams) {
//         this.collectionShouldExist(params.collection);
//         this.storage[params.collection].find(params.selector, params.options);
//     }
//
//     public findOne(params: FindOneParams) {
//         this.collectionShouldExist(params.collection);
//         this.storage[params.collection].findOne(params.selector, params.options, params.success, params.error);
//     }
//
//     private createDb(dbNamespace: string) {
//         this.storage = new this.db({namespace: dbNamespace});
//     }
//
//     private isCollectionAvailable(collection: string) {
//         return !!this.storage.collections[collection];
//     }
//
//     private collectionShouldExist(collection: string) {
//         if (!this.isCollectionAvailable(collection)) {
//             throw new TypeError(`Collection: ${collection} not found`);
//         }
//     }
// }
//
//
// interface LocalStorageDb {
//     collections: Array<Collection>,
//     addCollection: (name: string, success?: ()=> any, error?: ()=> any)=> any,
//     removeCollection: (name: string, success?: ()=> any, error?: ()=> any)=> any,
// }
//
// interface Collection {
//     name: string,
//     namespace: string,
//     items: Array<any>,
//     loadStorage: LocalStorage,
//     find: (selector: string, options: any)=> any,
//     findOne: (selector: string, options: any, success: ()=> any, error: ()=> any)=> any,
//     _findFetch: (selector: string, options: any, success: ()=> any, error: ()=> any)=> any,
//     upsert: (docs, bases, success, error)=> any,
//     remove: (id, success, error) => any,
//     _putItem: (doc) => any,
//     _deleteItem: (id) => any,
//     _putUpsert: (upsert) => any,
//     _deleteUpsert: (id) => any,
//     _putRemove: (doc)=> any,
//     _deleteRemove: (id) => any
// }
//
// interface LocalStorage {
//     upsertKeys: ()=> any,
//     removeItems: ()=> any,
// }
//
// interface FindParams {
//     collection: string,
//     selector?: string,
//     options?: any
// }
//
// interface FindOneParams extends FindParams {
//     success?: ()=> any,
//     error?: ()=> any
// }
//
// interface PutParams {
//     collection: string,
//     documents: any,
//     bases?: any,
//     success?: ()=> any,
//     error?: ()=> any
// }