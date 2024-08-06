import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXElement = () => JSX.Element;

interface Routes {
    path: string;
    Component: React.LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
    children?: Routes[];
}

export const routes: Routes[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "lazy-layout" */'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]