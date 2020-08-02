import React from 'react';
import Container from 'react-bootstrap/Container'
import Users from './Users'
import MyModalForm from './components/MyModalForm'

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            error:null,
            isLoaded:false,
            userdata:[]
        }
        this.handleSubmitModal = this.handleSubmitModal.bind(this)
    }
    handleSubmitModal(username,number){
      console.log(username,number,"submitted")
    }
    componentDidMount() {
        fetch("http://localhost/Test1/Learning-Ajax-and-Data-tables/getallusers.php")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                userdata: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render(){
      const userdatas = this.state.userdata.map(user => <Users key={user.id} userdata={user}/>)
       
        return(
            <main>
                <Container>
                    <MyModalForm  handleSubmitModal={this.handleSubmitModal}/>
                    <div className="container-fluid">
                      <div className="my-table mt-5  w-100">
                        {userdatas}
                      </div>
                    </div>
                </Container>
            </main>
        )
    }
}
export default Main; 