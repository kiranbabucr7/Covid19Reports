import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Users extends React.Component{
    constructor(){
        super()
        this.state={
            userdata:{}
        }
    }
    componentDidMount(){
        this.setState({
            userdata:this.props.userdata
        })
    }
    render(){
        return(
            <div>
                <Row className="text-center">
                    <Col>
                        {this.props.userdata.id}
                    </Col>

                    <Col>
                        {this.props.userdata.username}
                    </Col>
                    <Col>
                        {this.props.userdata.number}
                    </Col>
                    <Col>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1">Delete</button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Users