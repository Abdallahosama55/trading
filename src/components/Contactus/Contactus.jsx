import React, { Fragment, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import img_contact from '../../assets/ABcontact.svg';
import emailjs from '@emailjs/browser';

function Contactus() {
  const imageVariants = {
    initial: {
      x: '0%',
    },
    animate: {
      x: '20%',
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Create a ref for the form
  const formRef = useRef(null);

  const sendEmail = async (values, { setSubmitting }) => {
    try {
      // Use the ref to get the form element
      await emailjs.sendForm('service_og6l3wn', 'template_djh2iqu', formRef.current, 'pVC8DPr9-5T5xD0ro');
      setSubmitting(false);
      // Use SweetAlert2 for success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Submitted successfully!',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitting(false);
      // Use SweetAlert2 for error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email_from: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Fragment>
      <div className="">
        <Container className="shadow rounded-1 mt-5 ">
        <h1 className="p-3 fw-bold text-muted  text-center">
        Contact <span className="text-warning">Us</span>
      </h1>
          <div className="row justify-content-center align-items-center pb-5">
            <div className="col-md-6">
              <div style={{ overflow: 'hidden', width: '100%' }}>
                <motion.img
                  src={img_contact}
                  alt="Moving Image"
                  style={{ width: '100%' }}
                  initial="initial"
                  animate="animate"
                  variants={imageVariants}
                />
              </div>
            </div>
            <div className="col-md-6">
             
              <Formik
                initialValues={{ name: '', email_from: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ isSubmitting, handleSubmit }) => (
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">
                          <Field type="text" name="name" className="form-control rounded-3" placeholder="Enter Name" />
                          <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">
                          <Field type="email" name="email_from" className="form-control" placeholder="Enter email" />
                          <ErrorMessage name="email_from" component="div" className="text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">
                          <Field
                            as="textarea"
                            className="form-control"
                            name="message"
                            placeholder="Write your message here"
                            rows="3"
                          />
                          <ErrorMessage name="message" component="div" className="text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-5">
                      <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Contactus;
