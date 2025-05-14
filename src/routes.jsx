import { NotFoundPage } from "./pages/NotFound/NotFoundPage"
import { BlogPage } from "./pages/Blog/BlogPage"
import { CommentaryPage } from "./pages/Commentaries/CommentaryPage"

export const routes = [
    {
        path: '/',
        element: <BlogPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/commentaries/:idPost',
        element: <CommentaryPage />
    }
]