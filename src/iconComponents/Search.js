import * as React from "react";

function SvgSearch(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M23.233 21.86l-5.712-5.94a9.66 9.66 0 002.273-6.23c0-5.343-4.347-9.69-9.69-9.69C4.763 0 .415 4.347.415 9.69c0 5.343 4.348 9.69 9.69 9.69a9.586 9.586 0 005.552-1.753l5.755 5.985c.241.25.565.388.911.388a1.265 1.265 0 00.91-2.14zM10.104 2.528c3.95 0 7.163 3.213 7.163 7.162 0 3.95-3.213 7.162-7.162 7.162-3.95 0-7.163-3.213-7.163-7.162 0-3.95 3.213-7.162 7.162-7.162z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgSearch;
