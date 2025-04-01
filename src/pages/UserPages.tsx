import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { Table } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  stages: string[];
}

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prénom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "stage",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Étapes
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="none">{row.getValue("stage")}</div>
    ),
  }
];

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <Table>
        <DataTable columns={columns} data={users} />
      </Table>
    </div>
  );
}