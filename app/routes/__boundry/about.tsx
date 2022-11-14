import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container } from "~/components/container"

export default function About(){
	return <Container>
		<AboutHeading>About Page</AboutHeading>
		<Link to='/'>Go Back</Link>
	</Container>
}

const AboutHeading = styled.h1`
	color: purple;
`