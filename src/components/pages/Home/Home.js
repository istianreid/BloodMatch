import React , {useEffect} from 'react';
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import ProcessSection from './ProcessSection'
import FAQsSection from './FAQsSection'
import TestimonialsSection from './TestimonialsSection'

import {userActions , profileActions} from '../../../_actions'
import { useDispatch, useSelector} from "react-redux";

function Home() {

    const auth = useSelector((state) => state.auth);
    const { isAuthenticated} = auth;
    const dispatch = useDispatch();
    
    return (

        <>
        <HeroSection/>
        <FeatureSection/>
        <ProcessSection/>
        <FAQsSection/>
        <TestimonialsSection/>
        </>
    )
}

export default Home
