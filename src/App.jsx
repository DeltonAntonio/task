import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import image from './assets/image-1.png'
import FormText from 'react-bootstrap/FormText'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
function App(){
  useEffect(()=>{
    
  },[])
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const getData = ()=>{
       const datas = localStorage.getItem('datas')  
       const items = JSON.parse(datas)
       setList(items)
  } 
  const handleSubmit = (items)=>{
    const id = Math.random() * 100
    const item = items
    const tasks = {
      id: id,
      task: item
    } 
    
      setList((prev)=>[...prev, tasks])
      const jsonList = JSON.stringify(list)
      localStorage.setItem('datas', jsonList)
      console.log(jsonList)
      setValue('')
    
    
  }
 
  return(
      <Container className='my-3'>
          <Stack gap={2} >
            <div className="text-center">
                <h1 className="display-4">Gestor de tarefas</h1>
                <img className="m-2" src={image} alt="image1" style={{width: '500px'}} />
            </div>
            <div className="p-3 container">
                <Stack gap={3}>
                  <Row>
                      <Col xs="10">
                          <Form.Control type='text' placeholder='digite uma tarefa' value={value} onChange={(e)=>setValue(e.target.value)}></Form.Control>
                      </Col>
                      <Col>
                        <Button className="mx-2" onClick={()=>{handleSubmit(value)}}>agendar</Button>
                      </Col>
                  </Row>
                  <FormText className='mx-5'>tarefa:</FormText>
                  <Stack gap={3}>
                      {list.map((data)=>{
                        return(
                            <Card key={data.id}>
                                <Card.Body>
                                    {data.task}
                                </Card.Body>
                            </Card>
                        )
                      })}
                  </Stack>
                </Stack>
            </div>            
        </Stack>
      </Container>

  )
}
export default App