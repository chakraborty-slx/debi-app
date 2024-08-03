import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BadgeIcon from "@mui/icons-material/Badge";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PaidIcon from "@mui/icons-material/Paid";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { Guest } from "../types";

interface GuestTableProps {
  guests: Guest[];
}
const GuestTable = (props: GuestTableProps) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Guest>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notatio
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "adults", //normal accessorKey
        header: "Adults",
        size: 50,
      },
      {
        accessorKey: "children",
        header: "Children",
        size: 50,
      },
      {
        accessorKey: "isStudent",
        header: "Category",
        size: 50,
        Cell: ({ cell }) => (
          <span>
            {cell.getValue<boolean>() ? <BadgeIcon htmlColor="green" /> : <></>}
          </span>
        ),
      },
      {
        accessorKey: "veg",
        header: "Food Preference",
        size: 50,
        Cell: ({ cell }) => (
          <span>
            {cell.getValue<boolean>() ? (
              <FastfoodIcon htmlColor="green" />
            ) : (
              <FastfoodIcon htmlColor="red" />
            )}
          </span>
        ),
      },
      {
        accessorKey: "isCar",
        header: "Transportation",
        size: 50,
        Cell: ({ cell }) => (
          <span>
            {cell.getValue<boolean>() ? (
              <DirectionsCarIcon htmlColor="green" />
            ) : (
              <AirportShuttleIcon htmlColor="red" />
            )}
          </span>
        ),
      },
      {
        accessorKey: "day1",
        header: "Shashthi",
        size: 50,
        // Cell: ({ cell }) => (
        //   <span>
        //     {cell.getValue<TicketType>()==="Full" }
        //   </span>
        // ),
      },
      {
        accessorKey: "day2",
        header: "Saptami",
        size: 50,
        // Cell: ({ cell }) => (
        //   <span>
        //     {cell.getValue<boolean>() ? (
        //       <CheckCircleIcon htmlColor="green" />
        //     ) : (
        //       <CancelIcon htmlColor="red" />
        //     )}
        //   </span>
        // ),
      },
      {
        accessorKey: "day3",
        header: "Ashtami",
        size: 50,
        // Cell: ({ cell }) => (
        //   <span>
        //     {cell.getValue<boolean>() ? (
        //       <CheckCircleIcon htmlColor="green" />
        //     ) : (
        //       <CancelIcon htmlColor="red" />
        //     )}
        //   </span>
        // ),
      },
      {
        accessorKey: "day4",
        header: "Nabami",
        size: 50,
        // Cell: ({ cell }) => (
        //   <span>
        //     {cell.getValue<boolean>() ? (
        //       <CheckCircleIcon htmlColor="green" />
        //     ) : (
        //       <CancelIcon htmlColor="red" />
        //     )}
        //   </span>
        // ),
      },
      {
        accessorKey: "day5",
        header: "Dashami",
        size: 50,
        // Cell: ({ cell }) => (
        //   <span>
        //     {cell.getValue<boolean>() ? (
        //       <CheckCircleIcon htmlColor="green" />
        //     ) : (
        //       <CancelIcon htmlColor="red" />
        //     )}
        //   </span>
        // ),
      },
      {
        accessorKey: "paid",
        header: "Paid",
        size: 50,
        Cell: ({ cell }) => (
          <span>
            {cell.getValue<boolean>() ? (
              <PaidIcon htmlColor="green" />
            ) : (
              <PaidIcon htmlColor="red" />
            )}
          </span>
        ),
      },
      {
        accessorKey: "total",
        header: "Total",
        size: 50,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: props.guests,
    enableDensityToggle: false,
    enableColumnFilters: false,
    initialState: {
      density: "compact",
    },
  });

  return <MaterialReactTable table={table} />;
};

export default GuestTable;
