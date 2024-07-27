import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function PriceCard({plan,price,userLimit,storage,storageLimit,publicProjects,comAccess,privateProjects,phoneSupport,freeSubDomain,monthlyReport})
{//   &#10003; &#10006;
  return( 
  <div className="cardStyle">
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title  className="blur" style={{ textAlign : "center" }}>{plan}</Card.Title>
      <Card.Title  style={{ textAlign : "center",fontSize:"200%" }}>{price}</Card.Title>
      <Card.Text>
      <hr className="hr hr-blurry" />

      <p className='checkedItem'>{"✔ "+userLimit}</p>

      <p className='checkedItem'>{storage && "✔ " + storageLimit}</p>
      <p className='crossedItem'>{!storage && "✖" + storageLimit}</p>

      <p className='checkedItem'>{publicProjects && "✔ Unlimited Private Projects"}</p>
      <p className='crossedItem'>{!publicProjects && "✖ Unlimited Private Projects"}</p>

      <p className='checkedItem'>{comAccess && "✔ Community Access"}</p>
      <p className='crossedItem'>{!comAccess && "✖ Community Access"}</p>

      <p className='checkedItem'>{privateProjects && "✔ Unlimited Private Projects"}</p>
      <p className='crossedItem'>{!privateProjects && "✖ Unlimited Private Projects"}</p>

      <p className='checkedItem'>{phoneSupport && "✔ Dedicated Phone Support"}</p>
      <p className='crossedItem'>{!phoneSupport && "✖ Dedicated Phone Support"}</p>

      <p className='checkedItem'>{freeSubDomain && "✔ Free Subdomain"}</p>
      <p className='crossedItem'>{!freeSubDomain && "✖ Free Subdomain"}</p>

      <p className='checkedItem'>{monthlyReport && "✔ Monthly Status Reports"}</p>
      <p className='crossedItem'>{!monthlyReport && "✖ Monthly Status Reports"}</p>


      </Card.Text>
      <Button variant="primary" style={{ width: '15.5rem' , borderRadius:10 }} >Buy Plan</Button>
    </Card.Body>
  </Card>
  </div>);
   


  
}

export default PriceCard;