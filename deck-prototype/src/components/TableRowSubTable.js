import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TableRowSubTable.module.css';

export default class TableRowSubTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <table className={styles.TableRowSubtable} cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>delta</th>
              <th>state</th>
              <th>current</th>
              <th>desired</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/capacity</td>
              <td>changed</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/desired</td>
              <td>added</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/max</td>
              <td>added</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/min</td>
              <td>added</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.TableRowSubtable} cellSpacing="0" cellPadding="0">
          <thead>
          <tr>
            <th>delta</th>
            <th>state</th>
            <th>current</th>
            <th>desired</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>/dependencies</td>
              <td>changed</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/securityGroupNames</td>
              <td>changed</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/securityGroupNames[keeldemo-elb]</td>
              <td>added</td>
              <td>null</td>
              <td>keeldemo-elb</td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/securityGroupNames[keeldemo]</td>
              <td>removed</td>
              <td>keeldemo</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.TableRowSubtable} cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>delta</th>
              <th>statestatestatestatestatestatestate</th>
              <th>currentcurrentcurrentcurrentcurrent</th>
              <th>desireddesireddesireddesireddesireddesired</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/capacity</td>
              <td>changed</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/desired</td>
              <td>added</td>
              <td>860f1d949d7999bf5d822e87c5e6d96035900ccc399058a0b1092d72ba7e4cc1
                21b0c2dfeed34a33e0fc62aee058e9dc3d00e376cb05683cfcdaa5330177c404</td>
              <td>860f1d949d7999bf5d822e87c5e6d96035900ccc399058a0b1092d72ba7e4cc1
                21b0c2dfeed34a33e0fc62aee058e9dc3d00e376cb05683cfcdaa5330177c404</td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/max</td>
              <td>added</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td style={{paddingLeft: '48px'}}>/min</td>
              <td>added</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

//  {
//    "delta": {
//      "/dependencies": {
//        "state": "CHANGED"
//      },
//      "/dependencies/securityGroupNames": {
//        "state": "CHANGED"
//      },
//      "/dependencies/securityGroupNames[keeldemo-elb]": {
//        "state": "ADDED",
//        "desired": "keeldemo-elb",
//        "current": null
//      },
//      "/dependencies/securityGroupNames[keeldemo]": {
//        "state": "REMOVED",
//        "desired": null,
//        "current": "keeldemo"
//      }
//    }
//  },