import {ClientComponent} from "@/app/hello/components/client-component";

export default async function DemoPage() {

    const serverResponse = await helloFromServer();

    return <div>
        <ClientComponent />
        <h2>{serverResponse}</h2>
    </div>
}

async function helloFromServer() {
    return 'Hola desde el servidor'
}