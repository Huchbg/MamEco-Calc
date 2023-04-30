import "./App.css"
import * as S from "./elemets"
import { useState } from "react"

function App() {
  const [result, setResult] = useState("")
  const [galons, setGalons] = useState("")
  const [distance, setDistance] = useState("")
  const [consumption, setConsumption] = useState("")

  const GUIDE = {
    Galons: "galons",
    Distance: "dis",
    Consumption: "cons",
  }

  function OnChangeInput(code, value) {
    console.log(value)
    if (code === GUIDE.Galons) {
      if (!isNaN(value)) setGalons(value)
    }
    if (code === GUIDE.Distance) {
      if (!isNaN(value)) setDistance(value)
    }
    if (code === GUIDE.Consumption) {
      if (!isNaN(value)) setConsumption(value)
    }
  }

  function Calculate() {
    if (
      galons === "" ||
      galons[0] === "0" ||
      distance === "" ||
      distance[0] === "0" ||
      consumption === "" ||
      consumption[0] === "0"
    ) {
      setResult(
        "Please fill all the fields with data - number that doesn't start with 0"
      )
    } else {
      const array = [galons, distance, consumption]
      const newArr = array.map((item) => {
        try {
          return (item = Number(item))
        } catch {
          console.log("error")
        }
      })

      const [Galons, Distance, Consumption] = newArr
      const QD = (Consumption * Distance) / 100
      const L = QD / Galons
      const resultFormula = L * 2.9

      setResult(`${resultFormula} kg CO2 to transport per gallon`)
      console.log(result)
    }
  }

  return (
    <>
      <div className="App">
        <S.CalcContainer>
          <S.Heading>CO2 calcuwator for water transportation</S.Heading>
          <S.InputsContainer>
            <S.InputContainer>
              <S.InputLabel>Galons of water</S.InputLabel>
              <S.Input
                onChange={(e) => {
                  OnChangeInput(GUIDE.Galons, e.target.value)
                }}
                type="text"
                value={galons}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>Transportation distance km</S.InputLabel>
              <S.Input
                onChange={(e) => {
                  OnChangeInput(GUIDE.Distance, e.target.value)
                }}
                type="text"
                value={distance}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>Fuel consumption per 100 km</S.InputLabel>
              <S.Input
                onChange={(e) => {
                  OnChangeInput(GUIDE.Consumption, e.target.value)
                }}
                value={consumption}
                type="text"
              />
            </S.InputContainer>
          </S.InputsContainer>
          <S.Button onClick={Calculate}>Calculate</S.Button>
          <p>{result}</p>
        </S.CalcContainer>
      </div>
    </>
  )
}

export default App
