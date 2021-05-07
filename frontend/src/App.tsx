import NavBar from "components/NavBar";
import Footer from './components/Footer/index';
import DataTable from "components/DataTable";



function App() {
  return (
    <>
      <NavBar />
      <div className= "container">
        <h1 className="text-primary py-3">DASHBOARD DE VENDAS</h1>

      <div className=" row px-3">
      <div className="col-sm-6">
          < h5 className="test-center text-secondary">Taxa de sucesso</h5>

          <BarChart/>
      </div>
      <div className="col-sm-6">
          <h5 className="test-center text-secondary">Todas vendas</h5>

          <BarChart/>

      </div>
</div>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;


