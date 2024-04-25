import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  BriefcaseIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

interface BillingCardPropsType {
  title: string;
  options: { label: string; value: string }[]; // Change the type of options to an array of objects with label and value properties
  action: string;
  icon: JSX.Element; // Change the type of icon to JSX.Element
  detail: string;
}

function BillingCard({ title, options, icon, detail }: BillingCardPropsType) {
  return (
    <Card
      shadow={false}
      className="rounded-lg border border-gray-300 p-4 dark:bg-transparent"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="border border-gray-200 p-2.5 rounded-lg ">{icon}</div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-bold dark:text-white"
            >
              {title}
            </Typography>
            <Typography className="text-gray-600 text-xs font-normal dark:text-white">
              {detail}
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            <PencilIcon className="h-4 w-4 text-gray-600" />
            <Typography className="!font-semibold text-xs text-gray-600 md:block hidden">
              Edit
            </Typography>
          </Button>
          <Button
            size="sm"
            variant="text"
            color="red"
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
            <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
              delete
            </Typography>
          </Button>
        </div>
      </div>
      <div>
        {options && (
          <div>
            {options.map(({ label, value }) => (
              <div key={label} className="flex gap-1">
                <Typography className="mb-1 text-xs !font-medium text-gray-600 dark:text-white">
                  {label}:
                </Typography>
                <Typography
                  className="text-xs !font-bold dark:text-white"
                  color="blue-gray"
                >
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

const billingCardData = [
  {
    icon: <BriefcaseIcon className="h-6 w-6 text-gray-900" />,
    title: "Burrito Vikingss",
    detail: "Company",
    options: [
      { label: "Contact", value: "Emma Roberts" },
      { label: "Email Address", value: "emma@mail.com" },
      { label: "VAT Number", value: "FRB1235476" },
    ],
    action: "", // Dummy action property
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6 text-gray-900" />,
    title: "Stone Tech Zone",
    detail: "Company",
    options: [
      { label: "Contact", value: "Marcel Glock" },
      { label: "Email Address", value: "marcel@mail.com" },
      { label: "VAT Number", value: "FRB1235476" },
    ],
    action: "", // Dummy action property
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6 text-gray-900" />,
    title: "Fiber Notion",
    detail: "Company",
    options: [
      { label: "Contact", value: "Misha Stam" },
      { label: "Email Address", value: "misha@mail.com" },
      { label: "VAT Number", value: "FRB1235476" },
    ],
    action: "", // Dummy action property
  },
];

function Billing() {
  return (
    <Card shadow={false} className="w-[22rem] bg-white dark:bg-transparent">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-transparent flex gap-2 flex-col md:flex-row items-start !justify-between"
      >
        <div className="w-full mb-2">
          <Typography className="!font-bold dark:text-white" color="blue-gray">
            Billing Information
          </Typography>
          <Typography
            className="mt-1 !font-normal dark:text-white"
            variant="small"
            color="blue-gray"
          >
            View and update your billing details quickly and easily.
          </Typography>
        </div>
        <div className="w-full">
          <Button
            size="sm"
            variant="outlined"
            color="gray"
            className="flex justify-center gap-3 md:max-w-fit w-full ml-auto dark:text-white"
          >
            <PlusIcon strokeWidth={3} className="h-4 w-4" />
            add new card
          </Button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 !p-4 ">
        {billingCardData.map((props, key) => (
          <BillingCard key={key} {...props} />
        ))}
      </CardBody>
    </Card>
  );
}

export default Billing;
