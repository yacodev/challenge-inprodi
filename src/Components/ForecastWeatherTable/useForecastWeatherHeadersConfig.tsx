import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

export const useForecastWeatherHeadersConfig = (): GridColDef[] => {
  const Headers: GridColDef[] = [
    {
      flex: 1,
      minWidth: 100,
      field: 'time',
      headerName: 'Fecha y hora',
      headerClassName: 'header-table-type-1',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              noWrap
              variant='body2'
              sx={{ color: 'text.primary', fontWeight: 600 }}
            >
              {row.time}
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'airTemperature',
      headerName: 'Temperatura',
      headerClassName: 'header-table-type-1',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              noWrap
              variant='body2'
              sx={{ color: 'text.primary', fontWeight: 400 }}
            >
              {row.airTemperature.noaa} °C
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'humidity',
      headerName: 'Humedad',
      headerClassName: 'header-table-type-1',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              noWrap
              variant='body2'
              sx={{ color: 'text.primary', fontWeight: 400 }}
            >
              {row.humidity.noaa} %
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'windSpeed',
      headerName: 'Velocidad del viento',
      headerClassName: 'header-table-type-1',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.windSpeed.noaa} m/s
        </Typography>
      ),
    },
  ];

  return Headers;
};
