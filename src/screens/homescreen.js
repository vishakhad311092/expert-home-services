import React,{Component,Fragment} from 'react';
import {Menu,Search,Icon} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {fetchServicesAvailble} from '../services/fetchCalls'
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {services : null,redirectTo:false,selectedService: null}
    }

    componentDidMount(){
      let services ;  
      fetchServicesAvailble().then(res => {
        services = res
        console.log("fetchServices Response =>",res);
        this.setState({services: res.result.Data.availableHomeServices});
      })
      
    }

    render() {

        if (this.state.redirectTo) {
           return  <Redirect to={{
                pathname: '/details',
                state: this.state.selectedService
            }}
            />
        }

        return (
        <div className = "carouselContainer">
        <Carousel showArrows = {true} showIndicators = {true}>
            <div>
                <img src="assets/home-services.jpg" />
            </div>
            <div>
                <img src="assets/home-services.jpg" />
            </div>
            <div>
                <img src="assets/home-services.jpg" />
            </div>
        </Carousel>
        <div style={{alignContent:"center"}}>
            {
                this.state.services && this.state.services.map((service)=>{
                    return (
                        <div style={{display:"inline", margin: "0 3%" }} onClick = {() => {this.serviceClickHandler(service)}}>
                            <span className = "boldFont"><i>{service.title}</i></span>
                        </div>
                    )
                })
            }
        </div>
        </div>
      );
    }


    serviceClickHandler = (service) =>{
        this.setState({redirectTo:true,selectedService : service});
    }
  }


  export default withRouter(Home);