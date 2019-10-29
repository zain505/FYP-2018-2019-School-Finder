import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CollapsesecMap from './CollapsesecMap';
import CollapsesecPhotos from './CollapsesecPhotos';
import CollapsesecComments from './CollapsesecComments';
import CollapsesecFees from './CollapsesecFees'
import "../../../src/App.css"

export class CollapseTabs extends Component {
    render() {
        console.log("collapse tab", this.props.map)
        return (
            <div className="container">
                <Tabs>
                    <TabList>
                        <Tab>Map</Tab>
                        <Tab>Photos</Tab>
                        <Tab>Comments</Tab>
                        <Tab disabled={this.props.map.name.slice(0,2).toLocaleLowerCase()==="go"?true:false}>Fees Details</Tab>


                    </TabList>

                    <TabPanel >
                        <CollapsesecMap map={this.props.map} />
                    </TabPanel>

                    <TabPanel>
                        <CollapsesecPhotos map={this.props.map} />
                    </TabPanel>
                    <TabPanel>
                        <CollapsesecComments map={this.props.map} />
                    </TabPanel>
                    <TabPanel>
                        <CollapsesecFees />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default CollapseTabs;