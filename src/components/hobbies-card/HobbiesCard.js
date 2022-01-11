import Hobby from "./Hobby";
import "./HobbiesCard.css";

const HobbiesCard = (props) => {
  const hobbies = props.hobbies;
  const createHobby = (hobby) => {
    return (
      <Hobby
        key={hobby.id}
        hobby={hobby.hobby}
        description={hobby.description}
        hobbyImage={hobby.image}
        cardOrientation={props.cardOrientation}
      />
    );
  };

  return (
    <div className={`card hobbies-card-${props.cardOrientation}`}>
      <div>
        <h2 className="hobbies-title">Hobbies</h2>
      </div>
      <div className={`hobbies-grid-${props.cardOrientation}`}>
        {hobbies.map(createHobby)}
      </div>
    </div>
  );
};

export default HobbiesCard;
