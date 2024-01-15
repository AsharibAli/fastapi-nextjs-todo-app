// import Form from "@/app/ui/manage/create-form";
// import Breadcrumbs from "@/app/ui/manage/breadcrumbs";
// import { fetchCustomers } from "@/app/lib/data";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Create",
// };

// export default async function Page() {
//   const customers = await fetchCustomers();

//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: "Invoices", href: "/dashboard/manage" },
//           {
//             label: "Create Invoice",
//             href: "/dashboard/manage/create",
//             active: true,
//           },
//         ]}
//       />
//       <Form customers={customers} />
//     </main>
//   );
// }

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Todos",
};

export default function Page() {
  return <p>Create Todos | Currently In Building phase.</p>;
}
