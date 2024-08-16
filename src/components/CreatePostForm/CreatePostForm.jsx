import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {setModalCreateOpen} from "../../redux/slices/modalsSlice.js";
import React, {cloneElement} from "react";
import ModalTemplate from "../UI/ModalTemplate/index.js";
import {useFormik} from "formik";
import FormInput from "../UI/FormInput/index.js";
import validationSchema from "./validationSchema.js";
import TextArea from "antd/es/input/TextArea";
import Typography from "@mui/material/Typography";

const initialValues = {
    title: '',
    body: ''
}

const EditPostForm = ({button}) => {
    const {editPost} = useSelector(state => state.modal)
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setModalCreateOpen());
    const handleClose = () => dispatch(setModalCreateOpen());

    const buttonWithOnClick = cloneElement(button, {onClick: handleOpen});

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => ({})
    })

    return (
        <ModalTemplate button={buttonWithOnClick} handleClose={handleClose} open={editPost}>
            <Box sx={styles.container}>
                <Typography variant='h6'>
                    Crete Post
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        onChange={formik.handleChange}
                        id={'title'}
                        name={'title'}
                        type={'text'}
                        label={'title'}
                        value={formik.values.title}
                        error={formik.errors.title}
                        touched={formik.touched.title}
                    />

                    <TextArea
                        style={styles.textArea}
                        placeholder='Post description'
                        name='body'
                        id='body'
                        error={formik.errors.body}
                        touched={formik.touched.body}
                        autoSize={{minRows: 3, maxRows: 5}}
                        allowClear
                    />
                </form>
            </Box>
        </ModalTemplate>
    )
}

EditPostForm.propTypes = {
    button: PropTypes.object.isRequired
}
export default EditPostForm;
