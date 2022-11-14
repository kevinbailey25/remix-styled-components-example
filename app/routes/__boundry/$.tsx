export const loader = () => {
	throw new Response('Page Not Found', { status: 404 })
}

export default function CatchAllPage(){
	// needed to tell remix that this isn't a resource route
	return <></>
}