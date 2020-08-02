import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { propTypes } from 'react-bootstrap/esm/Image'
import closeButton from 'react-bootstrap/CloseButton'
class MyModalForm extends React.Component{
        constructor(){
            super()
            this.state={
                username:"",
                number:"",
                show:false
            }
            this.handleShow=this.handleShow.bind(this)
            this.handleClose=this.handleClose.bind(this)
            this.handleAdd=this.handleAdd.bind(this)
            this.handleChange=this.handleChange.bind(this)
        }
        handleChange(event){
            this.setState({
                [event.target.name]:event.target.value
            })
            console.log(this.state.username,this.state.number)
        }
        handleShow(){
            this.setState({
                show:!this.state.show
            })
        }
        handleClose(){
            this.setState({
                show:!this.state.show
            })
        }
        handleAdd(){
            this.setState({
                show:!this.state.show
            })
            console.log(this.state.username,this.state.number)
        }
        render(){
            return(
                <div>
                    <Button variant="primary" onClick={this.handleShow}>Add user</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a user</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label>
                                    Name: <input type="text" name="name" placeholder="Username" onChange={this.handleChange}/>
                                </label>
                                <label>
                                    number: <input type="text" name="number" placeholder="Number" onChange={this.handleChange}/>
                                </label>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleAdd}>Add</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }
        
    }

export default MyModalForm