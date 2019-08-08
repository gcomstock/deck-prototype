import React from 'react';
import TableRow from './TableRow.js';
import TableHeader from './TableHeader.js';



// This is just a stubbed out component that represents the getting/shaping of the content specific to this table.
// Lets discuss this, and the markup for these cells specifically


export default class MDHistoryTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stubbedRow1: [
        {mobileTitle: 'Where', content: '<span class="where env">test</span><span class="where arrow"></span>US-WEST-2<span class="where arrow"></span>keeldemo-test<span class="where arrow"></span><span class="where verPill verPill--old">v304</span><span class="where arrow"></span><span class="where verPill">v305</span>'},
        {mobileTitle: 'What', content: '<i class="ico ico--withLabel icon-md-delta-detected"></i><span class="mdAction">ResourceDeltaDetected</span>'},
        {mobileTitle: 'When', content: '2018-10-17 15:51:00 PDT <span class="time--italics">30 minutes ago</span>'}
      ],
      stubbedRow2: [
        {mobileTitle: 'Where', content: '<span class="where env env--prod">prod</span><span class="where arrow"></span>US-WEST-1<span class="where arrow"></span>keeldemo<span class="where arrow"></span><span class="where verPill verPill--old">v304</span><span class="where arrow"></span><span class="where verPill">v305</span>'},
        {mobileTitle: 'What', content: '<i class="ico ico--withLabel icon-md-delta-resolved"></i><span class="mdAction">ResourceDeltaResolved</span>'},
        {mobileTitle: 'When', content: '2018-10-17 15:51:00 PDT <span class="time--italics">30 minutes ago</span>'}
      ]
    }
  }

  render() {
    const stubbedRows1 = [];
    const stubbedRows2 = [];

    for (let i = 0; i < 9; i++) {
      stubbedRows1.push(this.state.stubbedRow1);
      stubbedRows2.push(this.state.stubbedRow2);
    }

    return (
      <>
        <TableHeader isMobile={this.props.isMobile}/>

        {stubbedRows1.map((value) => {
          return <TableRow cells={value} isMobile={this.props.isMobile}/>
        })}
        {stubbedRows2.map((value) => {
          return <TableRow cells={value} isMobile={this.props.isMobile}/>
        })}
      </>
    )
  }
}

