export class ManufacturerModel {
    private models: ManufacturerVehicles[];

    constructor(public name: string) {
        this.loadModels();
    }

    public getModels() {

    }

    private loadModels() {

    }
}

export interface ManufacturerVehicles {
    name: string;
    productionPeriod?: string;
}

