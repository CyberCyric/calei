import React, {useEffect, useState} from "react";
import { useTable } from "react-table";

const CategoriesList = () => {

  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const url = 'http://127.0.0.1:8000/api/categories';
    // process.env.REACT_APP_API_PATH+
    console.log(url);
    const data = await fetch(url);
    const list = await data.json();
    setCategories(list);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = React.useMemo( () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
    ],
    []
  );


  function Table({ columns, categories }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      categories,
    });
  }

  return (
      <div className="main-panel">
       <Table data={categories} columns={columns} />
      </div>
  );
};

export default CategoriesList;
