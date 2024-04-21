export async function helloFromServer(id?: string) {
    if(id) {
        return 'Hola desde el servidor para el prop id: ' + id
    } else {
        return 'Hola desde el servidor'
    }
}