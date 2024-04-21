import {ClientComponent} from "@/app/hello/components/client-component";

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}, {id: '3'}]
}

export default async function DemoPage({params}: {params: {id: string}}) {

    const serverResponse = await helloFromServer(params.id);

    return <div>
        <ClientComponent id={params.id} />
        <h2>{serverResponse}</h2>
    </div>
}

async function helloFromServer(id: string) {
    return 'Hola desde el servidor para el prop id: ' + id
}