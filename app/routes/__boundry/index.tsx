import { Link } from "@remix-run/react";
import { Container } from "~/components/container";

export default function Index() {
  return (
    <Container>
		<p>Helper links:</p>
      <ul>
        <li>
          <Link
            to="loader-error"
          >
            Loader throws Error Page
          </Link>
        </li>
        <li>
          <Link to='some-404-page'>Page that doesn't exist (404)</Link>
        </li>
        <li>
          <Link to='about'>
            About Page
          </Link>
        </li>
      </ul>
    </Container>
  );
}
