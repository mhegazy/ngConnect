/// <reference path="../typings/react.d.ts"/>

import * as React from "react";

export interface GreeterProps extends React.Props<Greeter> {
	size: number;
	whomToGreet: string;
	greeting?: string | (() => string);
}

export class Greeter extends React.Component<GreeterProps, {}> {
	render() {
		let g = this.props.greeting;

		let greeting = 'Hello';
		if (typeof g === 'string') {
			greeting = g;
		} else if (g) {
			greeting = g();
		}

		return <div>{ greeting }, { this.props.whomToGreet }</div>;
	}
}

export function displayGreeting(elem: Element, size: number, who: string) {
	React.render(<Greeter size={size} whomToGreet={who}/>, elem);
}
