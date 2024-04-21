"use client";
import { useEffect, useState} from "react";

const fetchData = async (id: string) => {
    const response = await fetch(`/api/hello?id=${id}`)
    return await response.text()
}

export function ClientComponent(params: {id?: string}) {
    const [clientResponse, setClientResponse] = useState<string>('');

    useEffect(() => {
        const fetchDataAsync = async () => {
            setClientResponse(await fetchData(params.id || ''))
        }
        void fetchDataAsync();
    }, [params.id])

    return <div>
        <h2>{clientResponse}</h2>
    </div>
}