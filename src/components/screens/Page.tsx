// External imports
import React, {useLayoutEffect} from 'react';
import clsx from 'clsx';

// Internal imports
import AppHeader from "../nav/AppHeader";
import {AppFooter} from "../nav/AppFooter";

type PageProps = {
	enableHeader?: boolean;
	enableFooter?: boolean;
	backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Page(props: PageProps) {
	const {children, backgroundColor, enableHeader, enableFooter, className, ...restProps} = props;

	useLayoutEffect(() => {
		// Update html background color
		if (backgroundColor) {
			document.documentElement.style.backgroundColor = backgroundColor;
		}
	}, [backgroundColor])

	return (
		<div
			className={clsx("app-page", className)}
			{...restProps}
		>
			{enableHeader && <AppHeader/>}
			{children}
			{enableFooter && <AppFooter/>}
		</div>
	);
}

export default Page;