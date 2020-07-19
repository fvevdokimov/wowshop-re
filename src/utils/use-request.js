import {useCallback, useState} from "react";


export const useRequest = (url, method, body) => {
    const [status, setStatus] = useState({loading: false, errorMessage: null, statusCode: null, value: null})
    const {loading, errorMessage, statusCode, value} = status;

    const request = useCallback(() => {
        setStatus({
            loading: true,
            errorMessage: null,
            statusCode: null,
            value: null,
        });
        fetch(
            url,
            {
                method,
                body: JSON.stringify(body),
                headers: new Headers({
                    'Content-Type': "application/json",
                    Accept: "application/json"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                setStatus({
                    loading: false,
                    errorMessage: null,
                    statusCode: 200,
                    value: response,
                })
            })
            .catch(error => {
                console.log(error)
                setStatus({
                    loading: false,
                    errorMessage: error,
                    statusCode: error.statusCode,
                    value: null,
                })
            });
    }, [url, method, body]);

    return [status, request]
}
