import { Routes } from "@angular/router"
import { SelectCategoryComponent } from "../src/app/select-category/select-category.component"
import { CategoryComponent } from "../src/app/category/category.component"
import { GalleryComponent } from "./app/gallery/gallery.component"
import { ImageDetailComponent } from "./app/image/image-detail.component"

export const appRoutes: Routes = [
  { path: "category", component: CategoryComponent },
  { path: "category/:category", component: SelectCategoryComponent },
  { path: "", redirectTo: "/category", pathMatch: 'full' },
]
