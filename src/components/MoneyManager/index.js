import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    usertitleinput: '',
    useramountinput: '',
    optionId: transactionTypeOptions[0].optionId, //INCOME
    historyList: [],
  }

  titleinput = event => {
    this.setState({usertitleinput: event.target.value})
  }

  amountinput = event => {
    this.setState({useramountinput: event.target.value})
  }

  selectinput = event => {
    this.setState({optionId: event.target.value})
  }

  clickaddbutton = event => {
    event.preventDefault()
    const {useramountinput, optionId, usertitleinput} = this.state

    const typeoption = transactionTypeOptions.find(
      each => each.optionId === optionId, //INCOME===INCOME
    ) //object retuen

    const {displayText} = typeoption //income or express
    const newTransaction = {
      id: v4(),
      title: usertitleinput,
      amount: parseInt(useramountinput),
      type: displayText,
    }
    this.setState(prev => ({
      historyList: [...prev.historyList, newTransaction],
      usertitleinput: '',
      useramountinput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getbalance = () => {
    const {historyList} = this.state
    console.log(historyList)
    let balanceamount = 0
    let incomeamount = 0
    let expenseamount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      } else {
        expenseamount += each.amount
      }
    })
    balanceamount = incomeamount - expenseamount
    return balanceamount
  }

  getincome = () => {
    const {historyList} = this.state
    let incomeamount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      }
    })

    return incomeamount
  }

  getexpense = () => {
    const {historyList} = this.state
    let expenseamount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenseamount += each.amount
      }
    })
    return expenseamount
  }

  getdelete = id => {
    const {historyList} = this.state
    const result = historyList.filter(each => each.id !== id)
    this.setState({historyList: result})
  }

  render() {
    const {useramountinput, usertitleinput, historyList, optionId} = this.state
    const balanceamount = this.getbalance()
    const incomeamount = this.getincome()
    const expenseamount = this.getexpense()

    return (
      <div className="outside-container">
        <div className="container">
          <div className="manager-head-section">
            <h1 className="head">Hi, Richard</h1>
            <p className="para">
              Welcome back to your
              <span className="span-color"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceamount={balanceamount}
            incomeamount={incomeamount}
            expenseamount={expenseamount}
          />
          <div className="bottom-align-section">
            <div className="form-container">
              <div className="alignform-container">
                <h1 className="label-1">Add Transaction</h1>
                <form onSubmit={this.clickaddbutton}>
                  <div className="title-container">
                    <label htmlFor="title" className="label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="input-title"
                      value={usertitleinput}
                      id="title"
                      onChange={this.titleinput}
                    />
                  </div>
                  <div className="title-container">
                    <label className="label" htmlFor="amount">
                      Amount
                    </label>
                    <input
                      type="text"
                      className="input-title"
                      id="amount"
                      value={useramountinput}
                      onChange={this.amountinput}
                    />
                  </div>
                  <div className="select-container">
                    <label className="label">Type</label>
                    <select
                      className="select-input"
                      value={optionId}
                      onChange={this.selectinput}
                    >
                      {transactionTypeOptions.map(each => (
                        <option key={each.optionId} value={each.optionId}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="Submit" className="btn-style">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <div className="form-container-1">
              <h1>history</h1>
              <div className="history">
                <p className="text-color">Title</p>

                <p className="text-color">Amount</p>
                <p className="text-color">Type</p>
              </div>
              <ul className="unorder-container">
                {historyList.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    getdelete={this.getdelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
