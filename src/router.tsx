import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'
import {Layout} from "@/components/layout/layout.tsx";
import {MainPage} from "@/components/page/main-page/main-page.tsx";
import {AboutPage} from "@/components/page/about-page/about-page.tsx";




const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <div>login</div>,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/about',
        element: <AboutPage/>
    }
]


const router = createBrowserRouter([
    {
        element:
            <Layout />,

        errorElement: <div>sad</div>,
        children: [
            {
                element: <PrivateRoutes />,

                children: privateRoutes,
            },
            {
                path: '*',
                element: <div>error</div>,
            },
            ...publicRoutes,
        ],
    },
])

function PrivateRoutes() {
    const isAuthenticated = true

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {
    return <RouterProvider router={router} />
}
