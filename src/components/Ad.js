import "./Ad.css";
import Card from "./Card";

const Ad = () => {
  return (
    <Card className="Ad">
      <p className="sponsor">Sponsored</p>
      <p className="create">Create Ad</p>
      <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
      <p className="brand">UdassiCosmetics</p>
      <p className="brand-link">udassicosmetics.com</p>
      <p className="motto">
        Your pathway to stunning and immaculate beauty. Try now and thank later.
      </p>
    </Card>
  );
};

export default Ad;
