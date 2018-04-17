import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

const ReduxIntlProvider = ({
  children,
  locale,
  messages,
}) =>
  <IntlProvider
    key={locale}
    locale={locale}
    messages={messages}
    >
    {children}
  </IntlProvider>;

const mapStateToProps = state => ({
  locale: state.locale.selected,
  messages: state.locale.messages,
});

export default connect(mapStateToProps)(ReduxIntlProvider);
