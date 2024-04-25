import React from 'react'

const Chat = () => {
  return (
    <div style={{   padding : 4}}>
  {/* Chat Bubble */}
  <ul className="space-y-5 max-w-lg">
    {/* Chat */}
    <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
      <img
        className="inline-block size-9 rounded-full"
        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div>
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
          <h2 className="font-medium text-gray-800 dark:text-white">
            How can we help?
          </h2>
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
              You can ask questions like:
            </p>
            <ul className="list-disc list-outside space-y-1.5 ps-3.5">
              <li className="text-sm text-gray-800 dark:text-white">
                Whats Preline UI?
              </li>
              <li className="text-sm text-gray-800 dark:text-white">
                How many Starter Pages Examples are there?
              </li>
              <li className="text-sm text-gray-800 dark:text-white">
                Is there a PRO version?
              </li>
            </ul>
          </div>
        </div>
        {/* End Card */}
        <span className="mt-1.5 flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
          <svg
            className="flex-shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 7 17l-5-5" />
            <path d="m22 10-7.5 7.5L13 16" />
          </svg>
          Sent
        </span>
      </div>
    </li>
    {/* End Chat */}
    {/* Chat */}
    <li className="flex ms-auto gap-x-2 sm:gap-x-4">
      <div className="grow text-end space-y-3">
        <div className="inline-flex flex-col justify-end">
          {/* Card */}
          <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">whats preline ui?</p>
          </div>
          {/* End Card */}
          <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
            <svg
              className="flex-shrink-0 size-3"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 7 17l-5-5" />
              <path d="m22 10-7.5 7.5L13 16" />
            </svg>
            Sent
          </span>
        </div>
      </div>
      <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
        <span className="text-sm font-medium text-white leading-none">AZ</span>
      </span>
    </li>
    {/* End Chat */}
    {/* Chat Bubble */}
    <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
      <img
        className="inline-block size-9 rounded-full"
        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div>
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
          <p className="text-sm text-gray-800 dark:text-white">
            Preline UI is an open-source set of prebuilt UI components based on
            the utility-first Tailwind CSS framework.
          </p>
          <div className="space-y-1.5">
            <p className="text-sm text-gray-800 dark:text-white">
              Herere some links to get started
            </p>
            <ul>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
                  href="../docs/index.html"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
                  href="../docs/frameworks.html"
                >
                  Framework Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Card */}
        <span className="mt-1.5 flex items-center gap-x-1 text-xs text-red-500">
          <svg
            className="flex-shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={10} />
            <line x1={12} x2={12} y1={8} y2={12} />
            <line x1={12} x2="12.01" y1={16} y2={16} />
          </svg>
          Not sent
        </span>
      </div>
    </li>
    {/* End Chat Bubble */}
  </ul>
  {/* End Chat Bubble */}
</div>

  )
}

export default Chat
