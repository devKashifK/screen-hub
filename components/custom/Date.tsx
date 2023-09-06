import React from "react";

function formatDateToNamed(dateString: any) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleString("en-US", options);
}

export default function FormatedDate({ dateString }: { dateString: string }) {
  const namedDate = formatDateToNamed(dateString);

  return <p>{namedDate}</p>;
}
