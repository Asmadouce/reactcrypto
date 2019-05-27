import React from "react"
import axios from "axios";
import './values.css';


export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            coin :  "bitcoin"
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({coin: e.target.value});
    }

    componentDidMount() {
        axios.get(`https://api.coincap.io/v2/assets/`)
            .then(res=> {
                const items = res.data.data;
                this.setState({items})
            });
    }


    render () {
        const filteredCoin = this.state.items.filter(coin => coin.id === this.state.coin);

        return (
            <div>

                <select onClick={this.handleClick}>
                    {this.state.items.map(coin=>(
                        <option
                            key={coin.id}
                            value={coin.id}
                        >
                            {coin.name}
                        </option>
                    ))};
                </select>


                {filteredCoin.map((coins)=>(
                    <div className="container">
                        <center><h1 className="text-light">{coins.name}</h1></center>
                        <div className="row">
                            <div className="card text-center m-3 col-sm-12  bg-secondary" style={{ width: '18rem' }}>
                                <div className="card-body" key={coins.id}>
                                    <h5 className="card-title">{coins.symbol}</h5>
                                    <div className="card-title">{coins.priceUsd} $</div>
                                    <p className={Math.sign(coins.changePercent24Hr) === -1 ? 'text-danger' : 'text-success'}>
                                        Tendance : {parseFloat(coins.changePercent24Hr)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        )
    }

}