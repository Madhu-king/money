// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, getdelete} = props
  const {title, amount, type, id} = details
  const deletehistory = () => {
    getdelete(id)
  }
  return (
    <li className="list">
      <div className="align">
        <p className="color">{title}</p>
        <p className="color">{amount}</p>
        <p className="color">{type}</p>
        <button
          type="button"
          className="btn"
          onClick={deletehistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="image-size"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
