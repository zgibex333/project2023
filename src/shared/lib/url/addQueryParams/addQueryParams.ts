export function getQueryParams(params: OptionalRecord<string, any>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}

/**
 * Function for adding params inside url string
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, any>) {
    window.history.pushState(null, '', getQueryParams(params));
}
