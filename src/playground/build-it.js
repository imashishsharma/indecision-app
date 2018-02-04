const app = {
    title: 'Visibility Toggle',
    detail: 'Here is the detail you are looking for',
    showFlag: false
};


const toggleFlag = () => {
    app.showFlag = !app.showFlag;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick ={toggleFlag}>{app.showFlag ? 'Hide Details' : 'Show Details'}</button>
            {app.showFlag && <p>{app.detail}</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();