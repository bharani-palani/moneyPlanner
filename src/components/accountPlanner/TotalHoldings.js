import React, { useEffect, useState, useContext } from "react";
import apiInstance from "../../services/apiServices";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";
import { UserContext } from "../../contexts/UserContext";
import AppContext from "../../contexts/AppContext";

const TotalHoldings = props => {
  const [holdings, setHoldings] = useState([]);
  const [loader, setLoader] = useState(false);
  const userContext = useContext(UserContext);
  const [appData] = useContext(AppContext);

  useEffect(() => {
    setLoader(true);
    apiInstance
      .get("/account_planner/getTotalHoldings")
      .then(res => {
        setHoldings(res.data.response.result);
      })
      .catch(() => {
        userContext.renderToast({
          type: "error",
          icon: "fa fa-times-circle",
          message: "Unable to fetch total holdings. Please try again later"
        });
      })
      .finally(() => setLoader(false));
  }, []);

  const total = holdings.reduce((a, b) => {
    return Number(a) + Number(b.Balance);
  }, 0);

  return !loader ? (
    <div className="totalHoldings">
      <div className="h5">Bank</div>
      {/* <div>Credit</div>
      <div>Debit</div> */}
      <div className="h5 text-end">Balance</div>
      {holdings.length > 0 ? (
        holdings
          .map(hold => (
            <>
              <div>{hold.Bank}</div>
              {/* <div>{hold.Credit}</div>
          <div>{hold.Debit}</div> */}
              <div className="text-end">
                {helpers.countryCurrencyLacSeperator(
                  appData.locale,
                  appData.currency,
                  Number(hold.Balance),
                  Number(appData.maximumFractionDigits)
                )}
              </div>
            </>
          ))
          .concat(
            <>
              <div className="total h5 py-2">Total</div>
              <div className="text-end total h5 py-2">
                {helpers.countryCurrencyLacSeperator(
                  appData.locale,
                  appData.currency,
                  total,
                  Number(appData.maximumFractionDigits)
                )}
              </div>
            </>
          )
      ) : (
        <div className="noData">No Data</div>
      )}
    </div>
  ) : (
    <div className="relativeSpinner">
      <Loader
        type={helpers.LoadRandomSpinnerIcon()}
        color={document.documentElement.style.getPropertyValue("--app-theme-bg-color")}
        height={100}
        width={100}
      />
    </div>
  );
};

TotalHoldings.propTypes = {
  property: PropTypes.string
};
TotalHoldings.defaultProps = {
  property: "String name"
};

export default TotalHoldings;
