import React from "react";
import parse from "html-react-parser";
import { formatTimestamp } from "../utils/format-timestamp";
import SimpleAvatar from "./simple-avatar";

const EmailContent = ({
  body,
  name,
  date,
  subject,
  onMarkAsFavorite,
  isFavorite,
}) => {
  const parsedContent = parse(body);
  const formattedDate = formatTimestamp(date);

  return (
    <div className="flex text-[#636363] bg-white h-full space-x-8 p-10">
      <SimpleAvatar name={name} size={50} />
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-bold mb-4">{subject}</h2>
            <p className="text-sm">{formattedDate}</p>
          </div>
          <button
            onClick={onMarkAsFavorite}
            className="px-4 py-2 text-xs bg-[#E54065] text-white rounded-full"
          >
            {isFavorite ? "Remove from favorite" : "Mark as favorite"}
          </button>
        </div>
        <div className="text-xs leading-relaxed">
          {parsedContent.props.children.map((parsed, index) => (
            <div key={index} className="mb-4">
              {parsed.props.children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
