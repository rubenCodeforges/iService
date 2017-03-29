export interface CrudResource {
    findAll();
    findById(id: string);
    create();
    update(id: string);
    delete(id: string);
}