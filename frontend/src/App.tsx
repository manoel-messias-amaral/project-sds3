import NavBar from "components/NavBar";
import Footer from './components/Footer/index';
import DataTable from "components/DataTable";



function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;


