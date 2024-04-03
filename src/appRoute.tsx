import { Route, RouteProps } from "react-router-dom";
import { ErrorComponent } from "@refinedev/antd";
import { NavigateToResource } from "@refinedev/react-router-v6";

import LoginLayout from "@/layouts/LoginLayout";
import MainLayout from "@/layouts/MainLayout";

import { Login, Register, ForgotPassword } from "@/pages/login";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./pages/blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/categories";

type RouteConfig = RouteProps & { routes?: RouteConfig[] }
                
export const appRouteConfig: RouteConfig[] = [
  {
    element: <MainLayout />,
    routes: [
      {
        index: true,
        element: <NavigateToResource resource="blog_posts" />
      },
      {
        path: '/blog-posts',
        routes: [
          {
            index: true,
            element: <BlogPostList />
          },
          {
            path: "create",
            element: <BlogPostCreate />
          },
          {
            path: "edit/:id",
            element: <BlogPostEdit />
          },
          {
            path: "show/:id",
            element: <BlogPostShow />
          },
        ]
      },
      {
        path: '/categories',
        routes: [
          {
            index: true,
            element: <CategoryList />
          },
          {
            path: "create",
            element: <CategoryCreate />
          },
          {
            path: "edit/:id",
            element: <CategoryEdit />
          },
          {
            path: "show/:id",
            element: <CategoryShow />
          },
        ]
      },
      {
        path: '*',
        element: <ErrorComponent />
      }
    ]
  },
  {
    element: <LoginLayout />,
    routes: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
    ]
  }
]

export const deepRenderRoute = (routeConfig: RouteConfig[]) => {
  return (
    routeConfig.map(({ routes, path, ...routeProps }, idx) => (
      <Route key={path || idx} path={path} {...routeProps}>
        {
          routes ? deepRenderRoute(routes) : null
        }
      </Route>
    ))
  )
}
