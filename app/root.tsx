import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Container } from "./components/container";
import { GlobalStyles } from "./components/global-styles";
import { Header } from "./components/header";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
			{typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
			<GlobalStyles />
			<Header>
				<Container>
				Welcome to Remix
				</Container>
			</Header>
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			<LiveReload />
      </body>
    </html>
  );
}

export const unstable_shouldReload = () => false