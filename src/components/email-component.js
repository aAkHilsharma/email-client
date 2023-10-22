import React from "react";
import { formatTimestamp } from "../utils/format-timestamp";
import SimpleAvatar from "./simple-avatar";

const Email = ({ from, date, subject, short_description, isFavorite }) => {
  const formattedDate = formatTimestamp(date);
  return (
    <div className="flex text-sm rounded-lg px-6 py-4 text-[#636363] space-x-4 cursor-pointer">
      <div className="">
        <SimpleAvatar name={from?.name} size={50} />
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <p className="font-medium mb-1">
            From:{" "}
            <span className="font-bold">
              {from?.name} &lt;{from?.email}&gt;
            </span>
          </p>
          <p>
            Subject: <span className="font-bold">{subject}</span>
          </p>
        </div>
        <div className="mb-2">{short_description}</div>
        <div className="flex space-x-8">
          <p>{formattedDate}</p>
          {isFavorite && (
            <p className="text-[#E54065] font-semibold">Favorite</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
