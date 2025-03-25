// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";// Custom hook for accessing the global state.
import ContactForm from "../components/ContactForm";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  return (
    <div className="container">
      <ContactForm />
      <div className="mt-3" ><Link onClick={() => navigate("/")}>
        Return
      </Link></div>
{/* Aqui lo que hice fue remplazar el Link to "/" e importé el hookde useNAvigate para volver attrás realmente  */}
    </div>
  );
};