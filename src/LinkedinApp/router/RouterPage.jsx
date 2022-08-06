import { Navigate, Route, Routes } from 'react-router-dom';
import { ProviderContext } from '../context/ProviderContext';
import { LinkedinCard, LinkedinForm, MainPage } from "../pages";

export const RouterPage = () => {

    return(
        <ProviderContext>
          <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="form" element={ <LinkedinForm /> } />
            <Route path="cards" element={ <LinkedinCard /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>
        </ProviderContext>
    )
}
