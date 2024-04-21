"use client";

export function ClientComponent(params: {id?: string}) {
    return <div>
        {
            params.id ?
                <h1>Hola desde el cliente para el prop id: {params.id}</h1> :
                <h1>Hola desde el cliente</h1>
        }
    </div>
}