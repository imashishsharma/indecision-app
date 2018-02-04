class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            toggleFlag: false
        };
    }
    handleVisibilityToggle(){
        this.setState((prevState) => {
            return{
                toggleFlag: !prevState.toggleFlag
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>{this.state.toggleFlag ? 'Hide Details' : 'Show Details'}</button>
            {this.state.toggleFlag && <p>Here is some details</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// const app = {
//     title: 'Visibility Toggle',
//     detail: 'Here is the detail you are looking for',
//     showFlag: false
// };


// const toggleFlag = () => {
//     app.showFlag = !app.showFlag;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick ={toggleFlag}>{app.showFlag ? 'Hide Details' : 'Show Details'}</button>
//             {app.showFlag && <p>{app.detail}</p>}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }

// render();