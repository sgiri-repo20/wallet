import React, {Component} from 'react';
import axios from 'axios';

export default class CreateWallet extends Component {
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

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.description}`);
        console.log(`Todo Responsible: ${this.state.income}`);
        console.log(`Todo Priority: ${this.state.expense}`);
        
        const newWallet = {
            description: this.state.description,
            income: this.state.income,
            expense: this.state.expense
        }

        axios.post('http://localhost:4000/wallet/create', newWallet)
            .then(res => console.log(res.data))

        this.setState({
            description: '',
            income: '',
            expense: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create Wallet</h3>
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
                        <input type="submit" value="Create Wallet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
