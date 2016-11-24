export abstract class AbstractDatabaseManager<T> {
    protected abstract db: any;

    constructor(db: AbstractDatabaseManager<T>) {
        this.db = db;
    }

    public getDb() {
        return this.db;
    }

    public abstract find(params: any);

    public abstract findOne(params: any);

    public abstract put(params: any);
}