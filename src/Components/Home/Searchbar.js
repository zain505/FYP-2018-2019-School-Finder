import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import spinner from "./Spinner.gif"
const style1 = {
    height: '50px',
    borderStyle: 'outset',
    borderSize: '10px'
}
const style2 = {
    height: '40px'
}
export class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            places: [],
            list: [],
            loading: false

        }

    }

    componentDidMount() {
        const google = window.google;
        const input = this.refs.search;
        //const button = this.refs.search2;
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', () => {
            const places = this.searchBox.getPlaces()
            if (places.length === 0) {
                return;
            }
            for (let i = 0; i < places.length; i++) {
                const request2 = {
                    placeId: places[i].place_id
                };
                //console.log(this.placeId)
                const Newplaces = new google.maps.places.PlacesService(input);
                Newplaces.getDetails(request2, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        this.setState((state) => ({
                            list: [...state.list, results]
                        }), () => this.props.getData(this.state.list))

                        console.log("Hello")
                        console.log(results)
                    }
                });
            }
            //this.setState({ places: places })
            //this.props.getData(this.state.places)
        });


    }
    fetchData = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }

    render() {
        const { loading } = this.state;
        return (
            <div>
                <form role="search">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">

                            <div className="input-group">
                                <input style={style1} type="text" ref="search" className="form-control" placeholder="Search here" />
                            </div>

                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="d-flex justify-content-center pt-2">
                                {/* {
                                    loading && <Link to="/search">
                                    <button ref="search2" className="btn btn-primary border mr-1">
                                        {loading && <img src={spinner} style={{ height: "25px", width: "25px" }} alt="spinner" />}
                                        <i className="fas fa-search mr-1"></i>
                                        <span>Search</span>
                                    </button>
                                </Link>
                                } */}
                                <Link to="/search">
                                    <button ref="search2" className="btn btn-primary border mr-1">
                                        {loading && <img src={spinner} style={{ height: "25px", width: "25px" }} alt="spinner" />}
                                        <i className="fas fa-search mr-1"></i>
                                        <span>Search</span>
                                    </button>
                                </Link>
                                <Link to="/Map">
                                    <button ref="search2" className="btn btn-primary border">
                                        <i className="fas fa-map mr-1"></i>
                                        <span>Map</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Searchbar)
