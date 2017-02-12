export interface LocalStorageDb {
    collections: Array<Collection>,
    addCollection: (name: string, success?: ()=> any, error?: ()=> any)=> any,
    removeCollection: (name: string, success?: ()=> any, error?: ()=> any)=> any,
}

export interface Collection {
    name: string,
    namespace: string,
    items: Array<any>,
    loadStorage: LocalStorage,
    find: (selector: string, options: any)=> any,
    findOne: (selector: string, options: any, success: ()=> any, error: ()=> any)=> any,
    _findFetch: (selector: string, options: any, success: ()=> any, error: ()=> any)=> any,
    upsert: (docs, bases, success, error)=> any,
    remove: (id, success, error) => any,
    _putItem: (doc) => any,
    _deleteItem: (id) => any,
    _putUpsert: (upsert) => any,
    _deleteUpsert: (id) => any,
    _putRemove: (doc)=> any,
    _deleteRemove: (id) => any
}

export interface LocalStorage {
    upsertKeys: ()=> any,
    removeItems: ()=> any,
}

export interface FindParams {
    collection: string,
    selector?: string,
    options?: any
}

export interface FindOneParams extends FindParams {
    success?: ()=> any,
    error?: ()=> any
}

export interface PutParams {
    collection: string,
    documents: any,
    bases?: any,
    success?: ()=> any,
    error?: ()=> any
}