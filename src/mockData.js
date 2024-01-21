import {v4 as uuidv4} from "uuid"
const mockData=[
    {
        id:uuidv4(),
        title:"📋 Por hacer",
        tasks:[
            {
                id:uuidv4(),
                title:"Estudiar Javascript"
            },
            {
                id:uuidv4(),
                title:"Estudiar html y css"
            },
            {
                id:uuidv4(),
                title:"Estudiar SQL"
            }
        ]
    },
    {
        id:uuidv4(),
        title:"✏️ En progreso",
        tasks:[
            {
                id:uuidv4(),
                title:"Estudiando Javascript"
            },
            {
                id:uuidv4(),
                title:"Estudiando html y css"
            },
            {
                id:uuidv4(),
                title:"Estudiando SQL"
            }
        ]
    },
    {
        id:uuidv4(),
        title:"✔️ Completado",
        tasks:[
            {
                id:uuidv4(),
                title:"Cursado Javascript"
            },
            {
                id:uuidv4(),
                title:"Cursado" html y css"
            },
            {
                id:uuidv4(),
                title:"Cursado SQL"
            }
        ]
    }
];
export default mockData;