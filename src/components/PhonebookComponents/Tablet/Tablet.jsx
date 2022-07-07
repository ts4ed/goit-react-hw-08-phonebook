import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { getFilter, contactsFiltered } from 'redux/contactsSlice/contactsSlice';

export default function DataTable() {
  const { data } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.name || ''}`,
    },
    { field: 'number', headerName: 'Number', width: 160, sortable: true },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: params => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          disabled={isDeleting}
          label="Delete"
          onClick={() => deleteContact(params.id)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      {data && (
        <DataGrid
          rows={contactsFiltered(data, filter)}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          color={'white'}
          sx={{
            boxShadow: 2,
            fontSize: 17,
            border: 2,
            opacity: 1,
            background: 'rgba(134, 134, 135, 0.6)',
            borderColor: 'black',
            '& .MuiDataGrid-cell:hover': {
              color: 'white',
            },
          }}
        />
      )}
    </div>
  );
}
