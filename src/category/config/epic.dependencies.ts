import { CategoryDependenciesFactory } from "@/category/config/dependencies.factory";

export const categoryEpicDependencies = {
    categoryService: CategoryDependenciesFactory.getCategoryService()
}
