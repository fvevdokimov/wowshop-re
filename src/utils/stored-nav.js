
export const isSSR = typeof window === "undefined"
const load = isSSR ? (key) => ({}) : (key) => JSON.parse(sessionStorage.getItem(key))
const save = isSSR ? (key) => ({}) : (key, newItems) => sessionStorage.setItem(key, JSON.stringify(newItems))

export const storeNavigation = (path) => save('path', path)
export const getStoredNavigation = (initial = '/boys/fall-spring') => load('path') || initial
