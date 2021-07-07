import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelper";
import seedColors from "./seedColors";
import { useEffect, useState } from "react";
function App() {
  const savePalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setpalettes] = useState(savePalettes || seedColors);
  function findPalette(id) {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  }
  function deletePalette(id) {
    setpalettes((st) => st.filter((palette) => palette.id !== id));
  }
  function savePalette(newPalette) {
    setpalettes((oldPalette) => [...oldPalette, newPalette]);
  }
  useEffect(() => {
    function syncLocalStorage() {
      window.localStorage.setItem("palettes", JSON.stringify(palettes));
    }
    syncLocalStorage();
  }, [palettes]);

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList
            palettes={palettes}
            deletePalette={deletePalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
