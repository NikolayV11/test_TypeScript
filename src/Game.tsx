import { GameFromServer } from "./data";

export function Game({
  name,
  description,
  version,
}: Pick<GameFromServer, "name" | "description" | "version">) {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Описание: {description}</p>
      {version && (
        <>
          <p>Версия: {version}</p>
        </>
      )}
    </div>
  );
}
