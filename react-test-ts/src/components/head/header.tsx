import * as React from 'react';
import './heard.scss';

export default class Header extends React.Component {
    public render() {
        return (<div className="header">
            <div className="logoWrapper"><img src="/img/logo.jpeg" alt="logo"/></div>
            <div className="navWrapper">
                <div className="navItem">
                   <a href="/">主页</a>
                </div>
                <div>
                    <a href="/list">列表</a>
                </div>
                <div>
                    <a href="/mine">我的</a>
                </div>
            </div>
        </div>)
    }
}