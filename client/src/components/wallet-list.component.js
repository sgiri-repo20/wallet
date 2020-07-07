import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wallet = props => (
    <tr>
        <td>{props.wallet.description}</td>
        <td>{props.wallet.income}</td>
        <td>{props.wallet.expense}</td>
        <td>
            <Link to={"/edit/"+props.wallet._id}>Edit</Link> | 
	    <Link to={"/wallet/delete/"+props.wallet._id}> Delete</Link>
        </td>
    </tr>
)

export default class WalletList extends Component {
    constructor(props) {
        super(props);
        this.state = {wallets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/wallet/list')
            .then(response => {
                this.setState({wallets: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    WalletList() {
        return this.state.wallets.map(function(currentWallet, i) {
            return <Wallet wallet={currentWallet} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Income</th>
                            <th>Expense</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.WalletList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
