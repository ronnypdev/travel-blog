import Header from "./components/Header";
import Article from "./components/Article";
import data from "./data";

function App() {

  return (
    <>
      <Header />
      {data.map((item) =>
        <Article
          key={item.id}
          title={item.title}
          pinIcon={item.pinIcon}
          location={item.location}
          googleMapsText={item.googleMapsText}
          googleMapsUrl={item.googleMapsUrl}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      )}
    </>
  )
}

export default App
