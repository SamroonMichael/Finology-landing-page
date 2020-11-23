import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
// import ListPeople from "./ListPeople";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "none",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width: "50%",
		height: "250px",
	},
}));

const AddPerson = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const isInitialMount = useRef(true);

	// Cloudinary data to hide **
	const CLOUDINARY_URL =
		"https://api.cloudinary.com/v1_1/dcp3qhefs/image/upload";
	const CLOUDINARY_UPLOAD_PRESET = "dsh0jvee";

	// localStorage key name
	const LOCAL_STORAGE_KEY = "person-data-list";

	// Setting state to upload image
	const [image, setImage] = useState(null);

	// Setting state to hold data in localStroage for form and image public ID
	const [formData, setFormData] = useState({
		name: "",
		position: "",
		image: null,
	});

	const { register, handleSubmit, errors } = useForm();

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
				setFormData({ ...data, image: imageNewId });
			})
			.catch((error) => {
				console.error(error);
			});
		e.target.reset();
	};

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
				localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
			}
			const old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
			old_data.push(formData);

			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(old_data));
		}
	}, [formData]);

	return (
		<>
			<Button
				type="button"
				onClick={handleOpen}
				variant="contained"
				color="primary"
			>
				Add
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<input
									type="file"
									accept="image/*"
									onChange={(e) => {
										setImage(e.target.files[0]);
									}}
								/>
							</div>
							{/* register your input into the hook by invoking the "register" function */}
							<div>
								<input name="name" ref={register({ required: true })} />
							</div>

							{/* include validation with required or other standard HTML validation rules */}
							<div>
								<input name="poistion" ref={register({ required: true })} />
							</div>
							{/* errors will return when field validation fails  */}
							{errors.exampleRequired && <span>This field is required</span>}

							<Button type="submit" variant="contained" color="primary">
								Save
							</Button>
						</form>
					</div>
				</Fade>
			</Modal>
			{/* <ListPeople showPeople={formData} /> */}
		</>
	);
};

export default AddPerson;
