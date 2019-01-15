import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

//Actions
import { clearNotification } from '../../bus/ui/actions';

//MapState
const mapStateToProps = (state) => {
    return {
        notification: state.ui.get('notification'),
    };
};

export default
@connect(mapStateToProps, { clearNotification })
class Notification extends Component {
    componentWillUnmount () {
        const { clearNotification } = this.props;

        clearNotification();
    }

    render () {
        const { notification } = this.props;

        if (!notification) {
            return null;
        }

        const style = cx('alert', {
            'alert-primary': notification.get('type') === 'info',
            'alert-danger':  notification.get('type') === 'error',
        });

        return (
            <div className = { style } role = 'alert'>
                {notification.get('text')}
            </div>
        );
    }
}
