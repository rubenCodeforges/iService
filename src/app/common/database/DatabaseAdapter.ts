// import {DatabaseConfig, DatabaseProviders} from "../config/DatabaseConfig";
// import {LocalStorageManager} from "./minimongo/LocalStorageManager";
//
// export class DatabaseAdapter {
//     private static manager: any;
//
//     public static get(dbNamespace?: string): any {
//         if (DatabaseConfig.DATABASE_PROVIDER === DatabaseProviders.LOCAL_STORAGE) {
//             return DatabaseAdapter.initManager(new LocalStorageManager(dbNamespace));
//         }
//     }
//
//     private static initManager(manager: any) {
//         if (!DatabaseAdapter.manager) {
//             this.manager = manager;
//         }
//         return this.manager;
//     }
// }
//
