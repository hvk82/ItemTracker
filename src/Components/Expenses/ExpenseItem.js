import ExpenseDate from "./ExpenseDate";
import "../UI/Card.css";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </card>
  );
}
export default ExpenseItem;
