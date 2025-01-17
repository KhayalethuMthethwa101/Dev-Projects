import Card from "../Component/team-card"
import React from 'react';
import manUtd from '../Assets/Man-utd.png'
import manCity from '../Assets/Man-city.png'
import arsenal from '../Assets/Arsenal.png'
import chelsea from '../Assets/chelsea.png'
import tottenham from '../Assets/tottenham.png'
import nottingham from '../Assets/nottingham-forest.png'
import liverpool from '../Assets/liverpool-fc.png'

export default function Page(){
    return(
        <div>
            <Card position="?th" image={manUtd} teamName="Manchester United"/>
            <Card position="?th" image={manCity} teamName="Manchester City"/>
            <Card position="?rd" image={arsenal} teamName="Arsenal"/>
            <Card position="?nd" image={chelsea} teamName="Chelsea"/>
            <Card position="?th" image={tottenham} teamName="Tottenham"/>
            <Card position="?th" image={nottingham} teamName="Nottingham Forest"/>
            <Card position="?th" image={liverpool} teamName="Liverpool"/>
        </div>
    )
}