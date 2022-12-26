import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import fetchPets from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useContext, useState } from "react";
import Modal from "./Madol";
import AdoptedPetContext from "./AdoptedPetContext";
const Details = () => {
  const navigate = useNavigate()
    const {id} = useParams()
  const [showModal, setModal] = useState(false)
  // eslint-disable-next-line 
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
    const result = useQuery(['details', id], fetchPets);

    if (result.isLoading){
        return(
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = result.data.pets[0];

    return (  <div className="details">
      <div>
      <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
 <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button onClick={() => {setAdoptedPet(pet)

                    navigate("/")}}>Yes</button>
                <button onClick={() => setModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ): null
        
        }
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}