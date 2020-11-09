import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./custom.css";

const schema = yup.object({
  firstName: yup.string().min(2, "Too Short!").max(15, "Too Long!").required(),
  lastName: yup.string().min(2, "Too Short!").max(15, "Too Long!").required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .length(8)
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required(),
  country: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  zip: yup.string().required(),
});

export const FormComponent = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        zip: "",
        city: "",
        street: "",
        gender: "",
        skills: [],
        comments: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!/^[A-Za-z]+$/i.test(values.firstName)) {
          errors.firstName = "First name must contain word characters only";
        } else if (!/^[A-Za-z]+$/i.test(values.lastName)) {
          errors.lastName = "Last name must contain word characters only";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (
          !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
            values.phone
          )
        ) {
          errors.phone = "Phone number is not valid";
        }
        return errors;
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container
          style={{ backgroundColor: "#d6dcdb", borderRadius: "10px" }}
          fluid="xl"
          id="volunteer"
        >
          <h2 className="form-info">
            Full up the application form and join our family
          </h2>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Enter first name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Enter last name"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={values.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="phone"
                  placeholder="Enter phone number"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label>Address</Form.Label>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Choose country</option>
                  <option value="...">...</option>
                  <option value="Denmark">Denmark</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>

            <Form.Row style={{ marginBottom: "2%" }}>
              <Col xs={6}>
                <Form.Control
                  placeholder="Street"
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  isInvalid={!!errors.street}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.street}
                </Form.Control.Feedback>
              </Col>
              <Form.Group
                as={Col}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <Form.Label as="legend" column sm={5}>
                  Gender
                </Form.Label>

                <Form.Check
                  inline
                  type="radio"
                  label="M"
                  value="Man"
                  name="gender"
                  id="gender1"
                  style={{ marginRight: "7.75rem" }}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="W"
                  value="Woman"
                  name="gender"
                  id="gender2"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group style={{ width: "49%", marginLeft: "2%" }}>
                <Form.Label>Skills</Form.Label>
                <Form.Group
                  id="formGridCheckbox"
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <Form.Check
                    type="checkbox"
                    label="Certified Plumber"
                    value="Certified Plumber"
                    name="skills"
                    checked={values.value}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Carpentry Expirience"
                    value="Carpentry Expirience"
                    name="skills"
                    checked={values.value}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Certified Electrician"
                    value="Certified Electrician"
                    name="skills"
                    checked={values.value}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Food Hygiene Certificate"
                    value="Food Hygiene Certificate"
                    name="skills"
                    checked={values.value}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Driver's Licence"
                    value="Driver's Licence"
                    name="skills"
                    checked={values.value}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="textarea1" style={{ width: "47%" }}>
                <Form.Label>Comments and other relevant experience</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  placeholder="Use this field to enter relevant comments and/or experience"
                  name="comments"
                  value={values.comments}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
