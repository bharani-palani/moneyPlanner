import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import helpers from '../../helpers';
import { UserContext } from '../../contexts/UserContext';
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../../contexts/LocaleContext';

const TallyModal = props => {
  const intl = useIntl()
  const userContext = useContext(UserContext);
  const localeContext = useContext(LocaleContext);
  const { totals, ...rest } = props;
  const [appplicationBalance, setApplicationBalance] = useState(0);
  const [bankBalance, setBankBalance] = useState(0);
  const [unAccounted, setUnAccounted] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (totals.length > 0) {
      let live =
        totals.length > 0 &&
        totals.filter(t => t.flagString === 'danger' && t.amount > 0);
      live = live.length > 0 ? live[0].amount : 0;
      live = live.toFixed(2);
      live = Number(live);
      setApplicationBalance(live);
    }
  }, [totals]);

  useEffect(() => {
    let GrandTotal =
      appplicationBalance -
      bankBalance -
      unAccounted -
      walletBalance;
    GrandTotal = Math.round(GrandTotal * 100) / 100;
    GrandTotal = GrandTotal === -0 ? 0 : GrandTotal;
    setGrandTotal(GrandTotal);

    const numerator = Number(appplicationBalance) - GrandTotal;
    let percent = numerator / appplicationBalance;
    percent = percent * 100;
    percent = percent > 100 ? 100 : percent;
    percent = isNaN(percent) ? 100 : percent;
    setProgressPercent(percent);
  }, [appplicationBalance, bankBalance, unAccounted, walletBalance]);

  const getStatus = netValue => {
    return {
      label: netValue === 0 ? intl.formatMessage({ id: 'solved' }) :
        netValue > 0 ? intl.formatMessage({ id: 'behind' }) : intl.formatMessage({ id: 'ahead' }),
      class:
        netValue === 0
          ? 'text-success'
          : netValue > 0
            ? 'text-danger'
            : 'text-primary',
    };
  };

  return (
    <Modal {...rest} style={{ zIndex: 9999 }}>
      <Modal.Header closeButton>
        <Modal.Title><FormattedMessage id="tally" /></Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`rounded-bottom ${userContext.userData.theme === 'dark' ? 'bg-dark' : 'bg-white'
          }`}
      >
        <div className={`tallyModal text-dark`}>
          <div className="py-2 form-floating">
            <input
              id="appplicationBalance"
              value={appplicationBalance}
              onChange={e => setApplicationBalance(Number(e.target.value))}
              placeholder={intl.formatMessage({ id: 'balance' })}
              type="number"
              className="form-control"
            />
            <label htmlFor="appplicationBalance"><FormattedMessage id="balance" /></label>
          </div>
          <div className="py-2 form-floating">
            <input
              id="bankBalance"
              // value={bankBalance}
              onChange={e => setBankBalance(Number(e.target.value))}
              type="number"
              className="form-control"
              placeholder={`${intl.formatMessage({ id: 'bank' })} ${intl.formatMessage({ id: 'balance' })}`}
            />
            <label htmlFor="bankBalance"><FormattedMessage id="bank" /> <FormattedMessage id="balance" /></label>
          </div>
          <div className="py-2 form-floating">
            <input
              id="unAccounted"
              // value={unAccounted}
              onChange={e => setUnAccounted(Number(e.target.value))}
              type="number"
              className="form-control"
              placeholder={intl.formatMessage({ id: 'unaccounted' })}
            />
            <label htmlFor="unAccounted"><FormattedMessage id="unaccounted" /></label>
          </div>
          <div className="py-2 form-floating">
            <input
              id="walletBalance"
              // value={walletBalance}
              onChange={e => setWalletBalance(Number(e.target.value))}
              type="number"
              className="form-control"
              placeholder={`${intl.formatMessage({ id: 'wallet' })} ${intl.formatMessage({ id: 'balance' })}`}
            />
            <label htmlFor="walletBalance"><FormattedMessage id="wallet" /> <FormattedMessage id="balance" /></label>
          </div>
          <div className="py-2">
            <div className="text-center p-10">
              <h5 className={getStatus(grandTotal).class}>
                {getStatus(grandTotal).label}&nbsp;
                <i className={`fa ${progressPercent === 100 ? 'fa-check' : 'fa-times-circle'}`}
                />
              </h5>
            </div>
            <div className={`text-center ${getStatus(grandTotal).class}`}>
              {helpers.countryCurrencyLacSeperator(
                localeContext.localeLanguage,
                localeContext.localeCurrency,
                grandTotal,
                2
              )}
            </div>
          </div>
          <div
            className={`custom-progress-bar ${progressPercent < 100 ? 'danger' : 'success'
              }`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

TallyModal.propTypes = {
  property: PropTypes.string,
};
TallyModal.defaultProps = {
  property: 'String name',
};

export default TallyModal;
