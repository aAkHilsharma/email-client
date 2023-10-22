import React, { useContext } from "react";
import { Context } from "../context/email-context";
import Email from "../components/email-component";

const FavoriteScreen = () => {
  const {
    state: { favorites },
  } = useContext(Context);

  return (
    <div className="flex flex-col">
      {favorites.map((mail) => (
        <div
          className={`w-full bg-[#f2f2f2] border-2
             rounded-lg mb-6  border-[#CFD2DC]`}
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
  );
};

export default FavoriteScreen;
