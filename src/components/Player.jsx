import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = 
      <span className="inline-block m-0 w-40 truncate rounded-sm p-2 text-center text-base uppercase text-[#e1dec7]">
        {playerName}
      </span>
    ;

    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        btnCaption = "Save";
    }

    return (
      <li className="flex w-1/2 gap-4 items-center justify-center border-2 border-transparent">
        <span className="[font:inherit] flex items-center w-40 border-0 p-2 bg-[#46432f] text-center text-base uppercase animate-[pulse-text_2s_infinite]">
          {editablePlayerName}
          <span className="ml-4 text-base text-[#e1dec7]">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>
    );
}