import { Observable } from "rxjs";

export interface CategoryService {

    getAllCategories(): Observable<string[]>;

}
