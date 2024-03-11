import React from "react";
import { AdultOrNot } from "./AdultQuestion";
import { getGamesFromServer, priceWithCurrency } from "./Utiles";

import "./App.css";
import { GameFromServer } from "./data";
import { Game } from "./Game";
function App() {
  const [isAdult, setIsAldult] = React.useState<null | boolean>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [games, setGames] = React.useState<GameFromServer[]>([]);

  React.useEffect(() => {
    getGamesFromServer().then((gamesFromServer) => {
      setLoading(false);
      setGames(gamesFromServer as Array<GameFromServer>);
    });
  }, []);

  const renderTags = (tags: NonNullable<GameFromServer["tags"]>) => {
    if (typeof tags === "undefined") {
      return null;
    }
    return tags.map((tag, index) => {
      return <span key={tag + index}>{tag} </span>;
    });
  };

  if (loading) {
    return <div>Загрузка игр...</div>;
  }

  if (isAdult === null) {
    return <AdultOrNot setIsAdult={setIsAldult} />;
  }
  return (
    <div>
      {games.map((game) => {
        return (
          <div key={game.id} style={{ border: "1px soled blue" }}>
            Игра:
            {game.forKids && !isAdult ? (
              <b>Вам не доступна игра</b>
            ) : (
              <div>
                <Game name={game.name} description={game.description} version={game.version} />
                {typeof game.price === "number" && (
                  <>Цена: {priceWithCurrency(game.price, game.currency)} </>
                )}
                {game.tags && <>Тэги:{renderTags(game.tags)}</>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
