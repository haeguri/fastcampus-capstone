const elem = s => document.querySelector(s);
const create = tag => document.createElement(tag);

const createProjectItem = (data) => {
    const li = create('li');
    const a = li.appendChild(create('a'));
    li.className = 'glyphicon glyphicon-chevron-right';
    a.setAttribute('href', '');
    a.innerHTML = data.name;

    return li;
}

class TodoApp {
    constructor(option){
        
    }
    start(){
        const projectList = elem('.tab-list');

        fetch('/projects')
            .then(res => res.json())
            .then(json => {
                json.data.forEach(
                    data => projectList.appendChild(createProjectItem(data))
                );
            })
        
    }
}

export {
    TodoApp
};