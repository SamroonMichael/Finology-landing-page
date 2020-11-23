import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

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

const AddPerson = ({ formData, onChage }) => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const { register, handleSubmit, errors } = useForm();

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
						<form onSubmit={handleSubmit(formData)}>
							<div>
								<input
									type="file"
									accept="image/*"
									onChange={(e) => {
										onChage(e.target.files[0]);
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
		</>
	);
};

export default AddPerson;
