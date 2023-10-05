import { Container, Navbar, Form, FormControl, Button, Row, Col, Stack } from "react-bootstrap"
import { Person } from "react-bootstrap-icons"
import style from './css/login.module.css'
function Login(){
    return(
        <div>
          <Navbar className="bg-dark d-flex justify-content-between" expanded>
                <Navbar.Brand >
                    <h1 style={{fontSize:'2rem'}} className="text-light px-4">Task</h1>
                </Navbar.Brand>
                <div>
                    <Person size={30} color="white" className="mx-4" />
                </div>    
          </Navbar>
          <Container id={style.Container} className="d-flex justify-content-center py-4">
                <Form id={style.Form} className="w-50 bg-light p-4">
                    <h2 className="text-center">Task</h2>
                    <FormControl placeholder="nome de usuario" className="my-2" />
                    <FormControl placeholder="senha" className="my-2" />
                    <Button>entrar</Button>
                    <a className="text-secondary">criar conta</a>
                </Form>
          </Container>
        </div>
    )
}

export default Login