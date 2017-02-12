export enum DatabaseProviders {
    LOCAL_STORAGE = <any> 'LOCAL_STORAGE',
    MEMORY_STORAGE = <any> 'MEMORY_STORAGE',
    MONGO = <any> 'MONGO'
}

export class DatabaseConfig {
    public static DATABASE_PROVIDER: DatabaseProviders = DatabaseProviders.LOCAL_STORAGE;
}
