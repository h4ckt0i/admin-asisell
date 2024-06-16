import clsx from "clsx";

import generalStyles from "~/styles/generalStyle.module.scss";

function Table({ className, header, body, list, emptyTitle }) {
  return (
    <table className={clsx(generalStyles.table, className)}>
      <thead>
        <tr>
          {header.map((item) => {
            return <th key={item.id}>{item.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {list.length !== 0 ? (
          body
        ) : (
          <tr>
            <td className={generalStyles.emptyNote}>{emptyTitle}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
