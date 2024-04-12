import { DataGrid } from '@mui/x-data-grid';
import { ForecastWeatherTableProps } from './types';
import { useForecastWeatherHeadersConfig } from './useForecastWeatherHeadersConfig';

export const ForecastWeatherTable = ({
  rows,
  isLoading,
}: ForecastWeatherTableProps) => {
  const headers = useForecastWeatherHeadersConfig();

  return (
    <DataGrid
      autoHeight
      rows={rows}
      getRowId={(row) => row.time}
      columns={headers}
      pagination
      initialState={{
        pagination: {
          paginationModel: { pageSize: 100, page: 0 },
        },
      }}
      pageSizeOptions={[5, 10, 50, 100]}
      disableColumnMenu
      loading={isLoading}
    />
  );
};
