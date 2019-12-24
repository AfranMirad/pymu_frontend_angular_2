import { Routes } from "@angular/router"
import { SelectCategoryComponent } from "../src/app/select-category/select-category.component"
import { CategoryComponent } from "../src/app/category/category.component"
import { ReferenceComponent } from "app/reference/reference.component"

export const appRoutes: Routes = [
  { path: "category", component: CategoryComponent },
  { path: "category/:category", component: SelectCategoryComponent },
  { path: "galery", component: SelectCategoryComponent },
  { path: "reference", component: ReferenceComponent },
  { path: "", redirectTo: "/category", pathMatch: 'full' },
]
