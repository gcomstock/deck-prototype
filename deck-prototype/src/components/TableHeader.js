import React from 'react';
import classNames from 'classnames';

import header from './TableHeader.module.css';
import layouts from './TableLayouts.module.css';
let styles = {};
Object.assign(styles, header, layouts);


export default class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isMobile) {
      return null;
    }

    const headerClasses = classNames(styles.header, {
      [styles[this.props.layout]]: this.props.layout
    });

    const tableTop = this.props.top || '0';

    return (
      <div className={styles.headerContainer} style={{top: tableTop}}>

        <div className={headerClasses}>
          {this.props.columns.map((column) => {
            return <div>{column}</div>
          })}

          {this.props.toggleAll &&
            <div className={styles.toggleAll}>
              <i className="ico icon-arrow-toggle-all"></i>
            </div>
          }
        </div>

      </div>
    )
  };
}