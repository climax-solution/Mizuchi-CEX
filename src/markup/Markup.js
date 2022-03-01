import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Layout/Footer';
import Accounts from './Pages/Accounts';
import AddBank from './Pages/AddBankAcc';
import AddCard from './Pages/AddDebitCard';
import BuySell from './Pages/BuySell';
import History from './Pages/History';
import Homepage from './Pages/Homepage';
import Landing from './Pages/landing';
import Lock from './Pages/Lock';
import Otp1 from './Pages/Otp1';
import Otp2 from './Pages/Otp2';
import Reset from './Pages/Reset';
import Settings from './Pages/Settings';
import SettingsAccount from './Pages/SettingsAccount';
import SettingsPreferences from './Pages/SettingsPreferences';
import SettingsSecurity from './Pages/SettingsSecurity';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Verify1 from './Pages/Verify1';
import Verify2 from './Pages/Verify2';
import Verify3 from './Pages/Verify3';
import Verify4 from './Pages/Verify4';
import Verify5 from './Pages/Verify5';
import Verify6 from './Pages/Verify6';

class Markup extends Component {
    render() {
        return (
            <BrowserRouter basename={'/tradient-react'}>
            {/* // <BrowserRouter> */}
                <div id="main-wrapper" className="dashboard">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/buysell' component={BuySell} />
                        <Route path='/accounts' component={Accounts} />
                        <Route path='/settings' component={Settings} />
                        <Route path='/settingsAccount' component={SettingsAccount} />
                        <Route path='/settingsPreferences' component={SettingsPreferences} />
                        <Route path='/settingsSecurity' component={SettingsSecurity} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/otp1' component={Otp1} />
                        <Route path='/otp2' component={Otp2} />
                        <Route path='/lock' component={Lock} />
                        <Route path='/reset' component={Reset} />
                        <Route path='/addBank' component={AddBank} />
                        <Route path='/addCard' component={AddCard} />
                        <Route path='/verify1' component={Verify1} />
                        <Route path='/verify2' component={Verify2} />
                        <Route path='/verify3' component={Verify3} />
                        <Route path='/verify4' component={Verify4} />
                        <Route path='/verify5' component={Verify5} />
                        <Route path='/verify6' component={Verify6} />
                        <Route path='/history' component={History} />
                        <Route path='/landing' component={Landing} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default Markup;