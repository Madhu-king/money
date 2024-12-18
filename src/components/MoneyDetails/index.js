// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceamount, incomeamount, expenseamount} = props
  return (
    <div className="balance-section">
      <div className="balance-container">
        <div className="align-balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance"
            className="img-size"
          />
          <div className="text-container">
            <p>your balance</p>
            <p data-testid=" balanceAmount">Rs{balanceamount}</p>
          </div>
        </div>
      </div>

      <div className="balance-container-1">
        <div className="align-balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income"
            className="img-size"
          />
          <div className="text-container">
            <p>your income</p>
            <p data-testid="incomeAmount">Rs {incomeamount}</p>
          </div>
        </div>
      </div>

      <div className="balance-container-2">
        <div className="align-balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt=" expenses"
            className="img-size"
          />
          <div className="text-container">
            <p>your expenses</p>
            <p data-testid="expensesAmount">Rs {expenseamount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
