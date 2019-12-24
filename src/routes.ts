import { Routes } from "@angular/router"
import { SelectCategoryComponent } from "../src/app/select-category/select-category.component"
import { CategoryComponent } from "../src/app/category/category.component"
import { ReferenceComponent } from "app/reference/reference.component"
import { SelectGaleryComponent } from "app/select-galery/select-galery.component"
import { AboutusComponent } from "app/aboutus/aboutus.component"

export const appRoutes: Routes = [
  { path: "category", component: CategoryComponent },
  { path: "galery/:category", component: SelectCategoryComponent },
  { path: "galery", component: SelectCategoryComponent },
  { path: "reference", component: ReferenceComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "job/:galery", component: SelectGaleryComponent },
  { path: "", redirectTo: "/category", pathMatch: 'full' },
]
