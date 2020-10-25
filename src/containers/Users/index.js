import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsersAction } from "../../store/actions";
import FilterInput from "../../components/FilterInput";
import Button from 'react-bootstrap/Button';
import Loading from "../../components/Loading";


createTheme("usersAndPosts", {
  text: {
    primary: '#000000',
    secondary: '#dd6655',
  },
  background: {
    default: "#FFFFFF",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: '#dd6655',
  },
});

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "700",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Gender",
    selector: "gender",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    selector: "posts",
    sortable: false,
    cell: (row) => (
      <Link
        to={{
          pathname: `/posts`,
          search: `?userId=${row.id}`,
          state: { user: row },
        }}
      >
        <Button variant="outline-primary" className="bgColor">View Posts</Button>
      </Link>
    ),
  },
];

const Users = ({ getUsers }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    setLoading(true);
    getUsers({ page, name }).then((response) => {
      setLoading(false);
      if (response.error) return alert(response.error.message);
      const { data: users } = response.payload.data;
      const { page, total: totalRows } = response.payload.data.meta.pagination;

      setUsers(users);
      setPage(page);
      setTotalRows(totalRows);
    });
  }, [page, name]);

  const _clearFilters = () => {
    setName("");
    setPage(1);
  };
  const _filterByName = (name) => {
    setName(name);
    setPage(1);
  };
  return (
    <>
      {loading ? <Loading /> : <DataTable />}
      <FilterInput onSubmit={_filterByName} onClear={_clearFilters} />
      <DataTable
        columns={columns}
        data={users}
        theme="usersAndPosts"
        customStyles={customStyles}
        pagination
        paginationPerPage={20}
        paginationServer
        onChangePage={(page, totalRows) => setPage(page)}
        paginationTotalRows={totalRows}
        paginationDefaultPage={page}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: (filters) => dispatch(getUsersAction(filters)),
});

export default connect(null, mapDispatchToProps)(Users);
