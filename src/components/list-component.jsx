import React, { useContext, useEffect, useState } from "react";
import Email from "./email-component";
import { Context } from "../context/email-context";
import axios from "axios";
import EmailContent from "./email-content";

const List = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [body, setBody] = useState(null);

  const {
    state: { emails, favorites },
    setEmails,
    addToFavorites,
    removeFromFavorites,
  } = useContext(Context);

  useEffect(() => {
    setEmails();
  }, [setEmails]);

  const handleEmailClick = async (mail) => {
    try {
      const res = await axios.get(
        `https://flipkart-email-mock.now.sh/?id=${mail?.id}`
      );
      setSelectedEmail(mail);
      setBody(res.data.body);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMarkAsFavorite = (mail) => {
    const isFavorite = favorites?.some(
      (favoriteMail) => favoriteMail.id === mail.id
    );

    if (isFavorite) {
      removeFromFavorites(mail);
    } else {
      addToFavorites(mail);
    }
  };

  return (
    <div className="flex h-full gap-5">
      <div
        className={`w-full overflow-y-auto ${
          selectedEmail ? "md:w-1/4" : "hidden md:block"
        }`}
      >
        {emails.map((mail) => (
          <div
            key={mail?.id}
            className={`
             border-2
             rounded-lg mb-6
             
            ${
              selectedEmail && selectedEmail.id === mail.id
                ? "border-[#E54065] bg-[#f2f2f2]"
                : "border-[#CFD2DC] bg-white"
            }
          `}
            onClick={() => handleEmailClick(mail)}
          >
            <Email
              from={mail?.from}
              subject={mail?.subject}
              date={mail?.date}
              short_description={mail?.short_description}
              isFavorite={favorites?.some(
                (favoriteMail) => favoriteMail.id === mail.id
              )}
            />
          </div>
        ))}
      </div>
      <div
        className={`w-full border-2 border-[#CFD2DC] rounded-lg overflow-hidden ${
          selectedEmail ? "md:w-3/4" : "md:hidden"
        }`}
      >
        {selectedEmail && (
          <EmailContent
            name={selectedEmail?.from?.name}
            date={selectedEmail?.date}
            subject={selectedEmail?.subject}
            body={body}
            isFavorite={favorites?.some(
              (favoriteMail) => favoriteMail.id === selectedEmail.id
            )}
            onMarkAsFavorite={() => handleMarkAsFavorite(selectedEmail)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
