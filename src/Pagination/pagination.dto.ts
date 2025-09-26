export interface Paginated<T> {
    data: T[];
    meta: { page: number; perPage: number; total: number; lastPage: number };
}

export interface LaravelPaginator<T> {
    data: T[];
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}
