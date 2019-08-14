import React from 'react';
import classNames from 'classnames';
import styles from './MDHistoryTableRow.module.css';
import TableRowSubTable from './TableRowSubTable.js';


export default class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);

    this.state = {
      isExpanded: false
    };
  }

  toggleExpandedState() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  render() {
    const mainRowClasses = classNames(styles.mainRow, {
      [styles.expanded]: this.state.isExpanded
    });

    return (
      <div className={styles.TableRow}>
        <div className={mainRowClasses} onClick={this.toggleExpandedState}>
          {this.props.cells.map((cell) => {
            if (this.props.isMobile) {
              return (
                <div>
                  <div className={styles.mobileTitle}>{cell.mobileTitle}</div>
                  <div className={styles.mobileContent} dangerouslySetInnerHTML={{ __html: cell.content }}/>
                </div>
              )
            }
            return <div dangerouslySetInnerHTML={{ __html: cell.content }}/>
          })}

          <div className={styles.iconContainer}>
            { this.state.isExpanded
              ? <i className="ico icon-arrow-expanded"/>
              : <i className="ico icon-arrow-collapsed"/>
            }
          </div>
        </div>

        { this.state.isExpanded &&
          <div className={styles.subContainer}>
            <TableRowSubTable/>
          </div>
        }
      </div>
    )
  };
}