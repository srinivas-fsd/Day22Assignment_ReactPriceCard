import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PriceCard from './PriceCard';
function App()
{
  return(
    <div>
     <h3 style={{textAlign:'center',paddingBottom:'1%'}}>Please pick any 1 of the available plans from below</h3> 
    <div className="cardContainer">    
        <PriceCard plan="FREE" price="$0/month" userLimit= "Single User" storage={true} storageLimit="50GB Storage" publicProjects={true} comAccess={true} privateProjects={false} phoneSupport={false} freeSubDomain={false} monthlyReport={false}/>
        <PriceCard plan="PLUS" price="$9/month" userLimit="5 Users" storage={true} storageLimit="50GB Storage" publicProjects={true} comAccess={true} privateProjects={true} phoneSupport={true} freeSubDomain={true} monthlyReport={false}/>
        <PriceCard plan="PRO" price="$49/month" userLimit="Unlimited Users" storage={true} storageLimit="50GB Storage" publicProjects={true} comAccess={true} privateProjects={true} phoneSupport={true} freeSubDomain={true} monthlyReport={true}/>
    </div>
    </div>

  );
}

export default App;