
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLoginHook } from './hooks';

const PageLogin = () => {

    const { Formik, loading, schema, handleOnSubmit } = useLoginHook()
    return (
        <Card style={{ display: "flex", flex: 1, padding: 10, margin: 40, }}>
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <Card.Title style={{ fontWeight: 600, fontSize: 30 }}>
                    Sign In
                </Card.Title>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleOnSubmit}
                    initialValues={{
                        username: 'mor_2314',
                        password: "83r5^_",
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit} className='my-3'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik01">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        disabled={loading}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>


                            </Row>
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="validationFormik05">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                        isValid={touched.password && !errors.password}
                                        disabled={loading}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Button type="submit" disabled={loading}>
                                {
                                    loading ? "Loading..." : "Login"
                                }
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card.Body>

        </Card>
    );
}

export default PageLogin;