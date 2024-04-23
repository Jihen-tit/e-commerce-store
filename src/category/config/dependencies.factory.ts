import { CategoryService } from "@/category/domain/gateway/category.service";
import { ApiCategoryService } from "@/category/adapters/secondaries/apiCategory.service";

export class CategoryDependenciesFactory {
    static getCategoryService(): CategoryService {
        return new ApiCategoryService()
    }
}
