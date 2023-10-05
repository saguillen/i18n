import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist"
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
ReactDOM.render(
        <IntlProvider locale={navigator.language} messages={navigator.language.startsWith("es")?localeEsMessages:localeEnMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);

