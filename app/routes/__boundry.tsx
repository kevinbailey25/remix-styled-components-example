import { Outlet, useCatch } from "@remix-run/react";
import { Container } from "~/components/container";

export default function Boundary(){
	return <Outlet />
}

export function CatchBoundary(){
	const caught = useCatch()

	if(caught.status === 404){
		return <Container>
			<h2>Catch Boundary</h2>
			<p>Page Not Found</p>
		</Container>
	}

	throw new Error(`Unhandled CatchBoundary: ${caught.status}`)
}

export function ErrorBoundary({ error }: { error: Error }) {
	return <Container>
		<p>Error Boundary</p>
		<p>{error.message}</p>
		<p>The stack trace is:</p>
		<pre>{error.stack}</pre>
	</Container>
}