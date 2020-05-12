import React, { Component } from 'react';

class GoViral extends Component  {

    componentDidMount() {
        this.installGoViral();
    }

    installGoViral = () => {
        var e = document.createElement('script');
        e.src = 'https://goviral.growthtools.com/scripts/b8f5a1536f1e655291ba0b17547ef81c.js';
        e.async = true; e.type = 'text/javascript';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(e, s);
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default GoViral;