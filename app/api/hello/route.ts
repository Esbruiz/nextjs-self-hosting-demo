export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if(id) {
        return new Response('Hola desde el api para el prop id: ' + id)
    } else {
        return new Response('Hola desde el api')
    }
}