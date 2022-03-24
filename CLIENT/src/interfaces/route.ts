export interface IRoute {
    path: string,
    exact: boolean,
    component?: any,
    props?: any
}

export interface IRouteParams {
    id?: string,
    categoryName?: string,
}