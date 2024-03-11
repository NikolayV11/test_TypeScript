import React from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
};

export const AdultOrNot: React.FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAdult(true);
  };

  const noHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAdult(false);
  };

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
};
