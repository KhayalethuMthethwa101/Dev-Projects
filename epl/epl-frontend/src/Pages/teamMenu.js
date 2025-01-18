import Card from "../Component/team-card"
import React from 'react';
import manUtd from '../Assets/Man-utd.png'
import manCity from '../Assets/Man-city.png'
import arsenal from '../Assets/Arsenal.png'
import chelsea from '../Assets/chelsea.png'
import tottenham from '../Assets/tottenham.png'
import nottingham from '../Assets/nottingham-forest.png'
import liverpool from '../Assets/liverpool-fc.png'
import astonVilla from '../Assets/aston-villa.png'
import bournemouth from '../Assets/bournemouth.png'
import Everton from '../Assets/Everton.png'
import Brentford from '../Assets/Brentford.png'
import brighton from '../Assets/brighton.png'
import crystalPalace from '../Assets/crystalPalace.png'
import Fulham from '../Assets/Fulham FC.png'
import ipswich from '../Assets/ipswich.png'
import Leicester from '../Assets/LEICHESTER.png'
import Newcastle from '../Assets/Newcastle.png'
import Southampton from '../Assets/Southampton.png'
import westham from '../Assets/westham.png'
import wolves from '../Assets/wolves.png'

export default function Page(){
    return(
        <div>
            <Card position="2nd" image={arsenal} teamName="Arsenal"/>
            <Card position="7th" image={astonVilla} teamName="Aston Villa"/>
            <Card position="11th" image={Brentford} teamName="Brentford"/>
            <Card position="9th" image={brighton} teamName="Brighton"/>
            <Card position="8th" image={bournemouth} teamName="Bournemouth"/>
            <Card position="5th" image={chelsea} teamName="Chelsea"/>
            <Card position="15th" image={crystalPalace} teamName="Crystal Palace"/>
            <Card position="16th" image={Everton} teamName="Everton"/>
            <Card position="10th" image={Fulham} teamName="Fulham FC"/>
            <Card position="18th" image={ipswich} teamName="Ipswich"/>
            <Card position="19th" image={Leicester} teamName="Leicester"/>
            <Card position="1st" image={liverpool} teamName="Liverpool"/>
            <Card position="6th" image={manCity} teamName="Manchester City"/>
            <Card position="12th" image={manUtd} teamName="Manchester United"/>
            <Card position="4th" image={Newcastle} teamName="Newcastle"/>
            <Card position="3rd" image={nottingham} teamName="Nottingham Forest"/>
            <Card position="20th" image={Southampton} teamName="Southampton"/>
            <Card position="14th" image={tottenham} teamName="Tottenham"/>
            <Card position="13th" image={westham} teamName="West Ham"/>
            <Card position="17th" image={wolves} teamName="Wolverhampton"/>
        </div>
    )
}