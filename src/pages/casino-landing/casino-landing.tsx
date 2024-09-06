import { Button } from "../../components/atoms/button"
import { SearchBar } from "../../components/molecules/search-bar"
import { Typography } from "../../components/atoms/typography"
import { Input } from "../../components/atoms/input"

function CasinoLanding() {
  return (
    <div>
      
      CasinoLanding
      <Typography variant="h1">Atom</Typography>
      <Button variant="primary">Primary</Button> <br />
      <Button variant="secondary">Secondary</Button><br /><br />
      <Input />

      <Typography variant="h1">Molecules</Typography>
      
      <SearchBar />

    </div>
  )
}

export default CasinoLanding