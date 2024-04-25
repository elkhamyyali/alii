import { Card } from "flowbite-react";
import Image from "next/image";

export default function Team() {
  // Define an array of team members
  const teamMembers = [
    {
      name: "Neil Sims",
      email: "email@windster.com",
      amount: "$320",
    },
    {
      name: "Bonnie Green",
      email: "email@windster.com",
      amount: "$3467",
    },
    {
      name: "Michael Gough",
      email: "email@windster.com",
      amount: "$67",
    },
    {
      name: "Lana Byrd",
      email: "email@windster.com",
      amount: "$367",
    },
    {
      name: "Thomes Lean",
      email: "email@windster.com",
      amount: "$2367",
    },
  ];

  return (
    <Card className="w-[25rem] bg-white dark:bg-neutral-950 border-none">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root bg-white dark:bg-neutral-950">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Map over the team members array and render each member */}
          {teamMembers.map((member, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  {/* Use the src attribute from Unsplash for each image */}
                  <img
                    alt={`${member.name} image`}
                    
                    src={`https://source.unsplash.com/random/${index + 1}`}
                  
                    className="rounded-full w-10 h-10"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{member.amount}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
