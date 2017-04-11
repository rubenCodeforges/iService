import {Observable, Subscription} from "rxjs";


/**
 * Preloadable models are used for when you need data to be preloaded and stored in a model service
 */
export abstract class AbstractPreloadedModel<T> {
    private model: T;

    constructor() {
        this.init();
    }

    /**
     * Will wrap the model in to Observable and take the last value
     * This ensures that the model will be not undefined due to the async nature of HttpService
     */
    public getData(): Observable<T> {
        return Observable.of(this.model).last();
    }

    protected init(): void {
        this.loadData();
    }

    /**
     * Should return a Subscription
     */
    protected abstract loadData(): Subscription;
}