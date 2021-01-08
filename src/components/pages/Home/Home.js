import React , {useEffect} from 'react';
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import ProcessSection from './ProcessSection'
import FAQsSection from './FAQsSection'
import TestimonialsSection from './TestimonialsSection'

import {userActions , profileActions} from '../../../_actions'
import { useDispatch, useSelector} from "react-redux";

function Home() {

    const profileData = useSelector((state) => state.profile);
    const auth = useSelector((state) => state.auth);
    const {user, errors , isValid} = auth;
    const {success, profile , valid } = profileData;
    
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
