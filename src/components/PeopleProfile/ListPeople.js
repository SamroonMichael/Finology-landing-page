import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HappyFace from "../../iconComponents/HappyFace";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Add from "./Add";
import Edit from "./Edit";
import { Image } from "cloudinary-react";

import styled from "styled-components";
import { cleanup } from "@testing-library/react";

const ListHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	/* height: 100vh; */
	.happyFace {
		background-color: #ff00b8;
		color: #fff;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		box-shadow: 8px 3px 4px -3px rgba(255, 210, 242, 1);
		svg {
			margin-left: 0.6rem;
			margin-top: 0.6rem;
		}
	}
	.listTitle {
		flex-grow: 1;
		h1 {
			margin-left: 1rem;
			color: #252584;
			font-size: 1.5rem;
		}
	}
`;

const ListContent = styled.div`
	width: 50%;
	cursor: pointer;
	display: flex;
	/* flex-flow: row nowrap; */
	justify-content: space-around;
	padding-left: 0.5rem;
	/* box-shadow: -1px 21px 29px -22px rgba(0, 0, 0, 0.75); */
	.cardImage {
		width: 100%;
	}
`;

const ListPeople = () => {
	// localStorage key name
	const LOCAL_STORAGE_KEY = "person-data-list";

	// Cloudinary data to hide **
	const CLOUDINARY_URL =
		"https://api.cloudinary.com/v1_1/dcp3qhefs/image/upload";
	const CLOUDINARY_UPLOAD_PRESET = "dsh0jvee";

	const dataFromLocalStroge = JSON.parse(localStorage.getItem("reason")) || [];

	const isInitialMount = useRef(true);

	// Setting state to upload image
	const [image, setImage] = useState();

	// Setting state to hold data in localStroage for form and image public ID
	const [formData, setFormData] = useState(dataFromLocalStroge);

	// const [dataLocal, setDataLocal] = useState(initialDataLocal);

	// Upload Image Handle
	const onSubmit = (data, e) => {
		const ImageformData = new FormData();
		ImageformData.append("file", image);
		ImageformData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

		axios
			.post(CLOUDINARY_URL, ImageformData)
			.then((response) => {
				console.log(response);
				const imageNewId = response.data.public_id;
				setFormData([{ ...data, image: imageNewId }]);
			})
			.catch((error) => {
				console.error(error);
			});
		e.target.reset();
		// setFormData("");
		// setImage("");
	};

	useEffect(() => {
		let newData = true;

		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			// if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
			// 	localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
			// }
			if (newData) {
				const old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
				old_data.push(formData);
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(old_data));
			}

			console.log(newData);

			// if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
			// 	localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
			// }

			// const old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, formData));

			// formData.push(old_data);
			// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

			// const old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
			// old_data.push(formData);

			// let items = localStorage.getItem(
			// 	LOCAL_STORAGE_KEY,
			// 	JSON.stringify(formData)
			// );
			// items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
			// items.push(formData);
			// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
		}

		// if (isInitialMount.current) {
		// 	isInitialMount.current = false;
		// } else {
		// 	// const dataSubmission = formData;
		// 	const old_data = [JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))];
		// 	old_data.push(formData);
		// 	console.log(formData);

		// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(changeData));
		// writeStorage(formData);
		// if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
		// 	localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
		// }
		// const old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		// old_data.push(formData);
		// }

		// console.log("i fire once");

		return () => (newData = false);
	}, [formData]);

	// useEffect(() => {
	// 	const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
	// 	console.log(items);

	// 	setDataLocal(items);

	// 	console.log("i fire twice");
	// }, [formData]);

	// console.log("i am out");
	// const filtered = dataLocal.filter(
	// 	(item) => item.name !== "" && item.position !== "" && item.image !== null
	// );

	// console.log(filtered);

	// console.log(formData);

	return (
		<>
			<ListHeader>
				<div className="happyFace">
					<HappyFace width={20} height={20} />
				</div>
				<div className="listTitle">
					<h1>Our important people are listed here</h1>
				</div>
				<div style={{ display: "inline-block" }}>
					<Edit />
					<Add formData={onSubmit} onChage={setImage} />
				</div>
			</ListHeader>
			<ListContent>
				{/* {dataLocal !== null ? (
					dataLocal.map((item, i) => {
						return (
							<Card key={i}>
								<CardMedia>
									<Image cloudName="dcp3qhefs" publicId={`${item.image}`} />
								</CardMedia>
								<CardContent>
									<h2>{item.poistion}</h2>
								</CardContent>
							</Card>
						);
					})
				) : (
					<h1>Nothing!!</h1>
				)} */}
			</ListContent>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default ListPeople;
