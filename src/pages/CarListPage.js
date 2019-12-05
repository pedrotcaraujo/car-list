import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Filter from '../components/Filter';
import CarList from '../components/CarList';
import Itinerary from '../components/Itinerary';
import { TabGroup, TabItem } from '../components/CarListTabs'

export default function CarListPage() {
    return (
        <>
            <TabGroup>
                <TabItem>
                    <Link to="/car-list">All</Link>
                </TabItem>
                <TabItem>
                    <Link to="/car-list/vendors">Vendors</Link>
                </TabItem>
            </TabGroup>
            <Switch>
                <Route path="/car-list/vendors">
                    <Filter/>
                    <Itinerary />
                    <CarList showAll={false}/>
                </Route>
                <Route path="/car-list">
                    <Filter/>
                    <Itinerary />
                    <CarList showAll={true}/>
                </Route>
            </Switch>
        </>
    )
}