import {useCallback, useState} from "react";

export const isSSR = typeof window === "undefined"
const load = isSSR ? (key) => ({}) : (key) => JSON.parse(localStorage.getItem(key))
const save = isSSR ? (key) => ({}) : (key, newItems) => localStorage.setItem(key, JSON.stringify(newItems))

export function useLocalStorage(key) {
    const [data, setData] = useState(load(key) || {})
    const saveData = useCallback((newData) => {
        setData(newData)
        save(key, newData)
    }, [key, setData]);
    return [data, saveData]
}
