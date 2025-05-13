import { NotFoundPage } from "./pages/NotFound/NotFoundPage"
import { BlogPage } from "./pages/Blog/BlogPage"

export const routes = [
    {
        path: '/',
        element: <BlogPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]