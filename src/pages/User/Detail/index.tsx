import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserDetailHook } from "./hooks";

const PageUserDetail = () => {
    const { user, Formik, schema, handleOnSubmit, edit, setEdit, id } = useUserDetailHook();

    const nav = useNavigate();
    return (
        <Card style={{ margin: 10 }}>
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            {id !== "0" ? "User Detail" : "Add User"}
                        </Col>
                        <Col>
                            {
                                id !== "0" ? <Button onClick={() => setEdit(!edit)}>Edit</Button> : null
                            }

                        </Col>
                    </Row>
                </Card.Title>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleOnSubmit}
                    enableReinitialize
                    initialValues={{
                        username: user?.username || '',
                        password: user?.password || '',
                        email: user?.email || '',
                        name: {
                            firstname: user?.name?.firstname || '',
                            lastname: user?.name?.lastname || '',
                        },
                        address: {
                            city: user?.address?.city || '',
                            street: user?.address?.street || '',
                            number: user?.address?.number || '',
                            zipcode: user?.address?.zipcode || '',
                            geolocation: {
                                lat: user?.address?.geolocation?.lat || '',
                                long: user?.address?.geolocation?.long || '',
                            },
                        },
                        phone: user?.phone || '',
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            {/* Username */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik01">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        disabled={edit}
                                        type="text"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/* Password */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik02">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        disabled={edit}
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/* Email */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik03">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        disabled={edit}
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/* First Name and Last Name */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik04">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name.firstname"
                                        disabled={edit}
                                        value={values.name.firstname}
                                        onChange={handleChange}
                                        isValid={touched.name?.firstname && !errors.name?.firstname}
                                        isInvalid={!!errors.name?.firstname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name?.firstname}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="validationFormik05">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name.lastname"
                                        disabled={edit}
                                        value={values.name.lastname}
                                        onChange={handleChange}
                                        isValid={touched.name?.lastname && !errors.name?.lastname}
                                        isInvalid={!!errors.name?.lastname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name?.lastname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/* Address */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik06">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address.city"
                                        disabled={edit}
                                        value={values.address.city}
                                        onChange={handleChange}
                                        isValid={touched.address?.city && !errors.address?.city}
                                    // isInvalid={!!errors.address?.city}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address?.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationFormik07">
                                    <Form.Label>street</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address.street"
                                        disabled={edit}
                                        value={values.address.street}
                                        onChange={handleChange}
                                        isValid={touched.address?.street && !errors.address?.street}
                                    // isInvalid={!!errors.address?.street}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address?.street}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationFormik08">
                                    <Form.Label>number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address.number"
                                        disabled={edit}
                                        value={values.address.number}
                                        onChange={handleChange}
                                        isValid={touched.address?.number && !errors.address?.number}
                                    // isInvalid={!!errors.address?.number}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address?.number}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationFormik09">
                                    <Form.Label>zipcode</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address.zipcode"
                                        disabled={edit}
                                        value={values.address.zipcode}
                                        onChange={handleChange}
                                        isValid={touched.address?.zipcode && !errors.address?.zipcode}
                                        isInvalid={!!errors.address?.zipcode}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address?.zipcode}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/* Phone */}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik010">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        disabled={edit}
                                        value={values.phone}
                                        onChange={handleChange}
                                        isValid={touched.phone && !errors.phone}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="secondary" onClick={() => nav("/user")}>Back</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" disabled={edit}>Submit form</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    );
};

export default PageUserDetail;
