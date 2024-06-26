export type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void;
export type PromiseReject = (error?: any) => void;