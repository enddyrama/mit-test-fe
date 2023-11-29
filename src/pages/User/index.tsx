
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Spinner, Form, Col, Row, } from 'react-bootstrap';
import { useUserHook } from './hooks';


const PageUser = () => {
    const { users, loading, nav, limit, setLimit, sort, setSort, handleDelete } = useUserHook();


    return (
        <div className="container mt-4 pb-4">
            <div className='text-end'>
                <Button variant="primary" className="my-2" onClick={() => nav(`/user/0`)} >
                    Add User
                </Button>
            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>

                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            <tr>
                                <td colSpan={3} className='text-center'>
                                    <Spinner />
                                </td>
                            </tr>
                            :
                            users && users.length > 0 && users.map((user) => (
                                <tr key={user.id}>

                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button variant="primary" className="m-1" onClick={() => nav(`/user/${user.id}`)}  >
                                            Detail
                                        </Button>
                                       
                                        <Button variant="danger" className="m-1" onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
            <Row className=''>
                <Col md={2}>
                    <Form.Select value={limit} onChange={(e: any) => setLimit(e.target.value)} className='my-1'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select value={sort} onChange={(e: any) => setSort(e.target.value)} className='my-1'>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </Form.Select>
                </Col>
            </Row>
        </div>

    );
};

export default PageUser;
