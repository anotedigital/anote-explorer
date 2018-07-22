import React from 'react';
import PropTypes from 'prop-types';

export default class UnconfirmedTxListItem extends React.PureComponent {
    static propTypes = {
        transaction: PropTypes.object.isRequired
    };

    render() {
        const tx = this.props.transaction;
        return (
            <div className="grid panel-row">
                <div className="divider divider-utx grid-item-fixed"></div>
                <div>
                    <div className="line no-wrap"><a>{tx.id}</a></div>
                    <div className="line">
                        <label>Amount</label> {tx.amount}
                        <label className="right">Fee {tx.fee}</label>
                    </div>
                    <div className="line wide">
                        <a className="no-accent">Sender</a>
                        <a className="no-accent">Recipient</a>
                    </div>
                </div>
                <div className="divider divider-dashed md-hide sm-show grid-item-fixed"></div>
                <div className="md-hide sm-show grid-item-fixed">
                    <div className="line"><label>{tx.time}</label></div>
                    <div className="line"><label>{tx.date}</label></div>
                    <div className="line wide"><label>Type {tx.type}</label></div>
                </div>
            </div>
        );
    }
}
