import React, {Component} from 'react';
import axios from 'axios';

export default class EditWallet extends Component {
    constructor(props) {
        super(props);

        this.onChangeWalletDescription = this.onChangeWalletDescription.bind(this);
        this.onChangeWalletIncome = this.onChangeWalletIncome.bind(this);
        this.onChangeWalletExpense = this.onChangeWalletExpense.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            income: '',
            expense: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/wallet/list/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    income: response.data.income,
                    expense: response.data.expense
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeWalletDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeWalletIncome(e) {
        this.setState({
            income: e.target.value
        });
    }

    onChangeWalletExpense(e) {
        this.setState({
            expense: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: this.state.description
            //income: this.state.income,
            //expense: this.state.expense
        };
        axios.patch('http://localhost:4000/wallet/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Wallet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeWalletDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Income: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.income}
                                onChange={this.onChangeWalletIncome}
                                />
                    </div>
                    <div className="form-group">
                        <label>Expense: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.expense}
                                onChange={this.onChangeWalletExpense}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Update Wallet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
