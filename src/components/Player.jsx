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

    let editablePlayerName = (
      <span className="inline-block m-0 w-30 truncate rounded-sm p-2 text-center text-base uppercase text-[#e1dec7]">
        {playerName}
      </span>
    );
    
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
            className="bg-[#46432f] inline-block m-0 w-25 truncate rounded-sm p-2 text-center text-base uppercase text-[#e1dec7]"
          />
        );
        btnCaption = "Save";
    }

    return (
      <li className="flex w-1/2 gap-0 items-center justify-center border-2 border-transparent">
        <span className="[font:inherit] flex items-center w-40 border-0 p-2 text-center text-base uppercase animate-[pulse-text_2s_infinite]">
          {editablePlayerName}
          <span className="ml-8 text-base text-[#e1dec7]">{symbol}</span>
        </span>
        <button onClick={handleEditClick} className="w-12 border-0 bg-none text-[#c3ba78] text-[0.9rem] cursor-pointer text-center px-1 pt-1 pb-1">{btnCaption}</button>
      </li>
    );
}