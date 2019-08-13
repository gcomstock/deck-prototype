import React from 'react';
import classNames from 'classnames';
import styles from './NoticeBubble.module.css';


export default class NoticeBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NoticeBubbleClasses = classNames(styles.NoticeBubble, {
      [styles[this.props.noticeType]]: this.props.noticeType
    });
    const IconContainerClasses = classNames(styles.iconContainer, {
      [styles[this.props.noticeType]]: this.props.noticeType
    });


    return (
      <div className={NoticeBubbleClasses}>
        { this.props.icon &&
          <div className={IconContainerClasses}>
            <i className={`ico icon-${this.props.icon}`}/>
          </div>
        }
        <div className={styles.text}>
          asdasdasdasdas dasdasdasd asdasdasdasdasdasd asdasdasdas dasdasdasdasda sdasd asdasdasdasdas dasdasdasd asdasdasdasdasdasd asdasdasdas dasdasdasdasda sdasd
        </div>
      </div>
    );
  }
}
