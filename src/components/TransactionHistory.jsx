import css from './TransactionHistory.module.css';

export default function TransactionHistory ({items}) {
return (
    <table className={css.table}>
    <thead className={css.thread}>
      <tr className={css.tr}>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tbody}>
      {items.map((transaction) => (
        <tr className={css.tr} key={transaction.id}>
          <td className={css.td}>{transaction.type}</td>
          <td className={css.td}>{transaction.amount}</td>
          <td className={css.td}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
};