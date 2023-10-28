"use client";

import Image from "next/image";
import PerfilImage from "@/assets/imgs/boy.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TableBody({ client }) {
  const pathname = usePathname();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Image
          className="w-10 h-10 rounded-full"
          src={PerfilImage}
          alt="Perfil image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">
            {client.name} {client.last_name}
          </div>
          <div className="font-normal text-gray-500">{client.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">React Developer</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
          Online
        </div>
      </td>
      <td className="px-6 py-4">
        <Link
          href={`${pathname}/edit/`+ client.id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}
