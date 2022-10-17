import {Component} from 'react';

class Title extends Component {
    componentDidMount(){
        console.log('*** Title.componentDidMount');
    };
    componentDidUpdate(){
        console.log('*** Title.componentDidUpdate')
    };
    componentWillUnmount(){
        console.log('*** Title.componentWillUnmount')
    };

    render(){
        console.log('*** Title.render')
        return(
            <h1>Rafael Saraiva</h1>
        )
    }
};

export default Title;