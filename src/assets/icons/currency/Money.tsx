import React from "react";

function Money({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.5 13.33h-15a.75.75 0 100 1.5h15a.75.75 0 100-1.5zm0 3h-15a.75.75 0 100 1.5h15a.75.75 0 100-1.5zm-12-10.5a.75.75 0 100 1.5.75.75 0 000-1.5zM15 1.33H3A2.25 2.25 0 00.75 3.58v6A2.25 2.25 0 003 11.83h12a2.25 2.25 0 002.25-2.25v-6A2.25 2.25 0 0015 1.33zm.75 8.25a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-6A.75.75 0 013 2.83h12a.75.75 0 01.75.75v6zM9 4.33a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 3a.75.75 0 110-1.5.75.75 0 010 1.5zm4.5-1.5a.75.75 0 100 1.5.75.75 0 000-1.5z"
      ></path>
    </svg>
  );
}

export default Money;